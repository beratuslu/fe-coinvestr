<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Form, ErrorMessage, Field } from "vee-validate";
import { StepperComponent } from "@/assets/ts/components";
import ApiService from "@/core/services/ApiService";
import { ElMessage } from "element-plus";
import { useForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import VueCountdown from "@chenfengyuan/vue-countdown";
// import Step1 from "@/components/wizard/steps/Step1.vue";
// import Step2 from "@/components/wizard/steps/Step2.vue";
// import Step3 from "@/components/wizard/steps/Step3.vue";
// import Step4 from "@/components/wizard/steps/Step4.vue";
// import Step5 from "@/components/wizard/steps/Step5.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "SignUp",
  components: {
    Form,
    Field,
    ErrorMessage,
    VueCountdown,
    // Step1,
    // Step2,
    // Step3,
    // Step4,
    // Step5,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    if (!route.params.email) {
      router.push({ name: "RegisterBasicInfo" });
    }
    const formRef = ref(null);
    const loading = ref(false);
    const codeCheckRequestMade = ref(false);
    const codeIsValid = ref(false);

    const initialFormData = {
      code: "",
    };
    const formData = ref({ ...initialFormData });

    function onSubmit(values) {
      codeCheckRequestMade.value = true;
      ApiService.post(`auth/verify-registration-email-code`, {
        email: route.params.email,
        ...formData.value,
      })
        .then((response) => {
          codeIsValid.value = response.verified;
          if (response.verified) {
            router.push({
              name: "RegisterUserNameSelection",
              params: { ...route.params },
            });
          } else {
            console.error("code yanlis");
          }
        })
        .catch((err) => {
          ElMessage.error(err.message || "Server error");
        })
        .finally(() => {
          loading.value = false;
        });
    }

    function onInvalidSubmit() {
      console.log("in valid");
    }

    const validationSchema = Yup.object().shape({
      code: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, "Code should be 6 digits")
        .max(6, "Code should be 6 digits"),
    });

    const counting = ref(true);
    function startCountdown() {
      ApiService.post(`auth/send-registration-email-verification-code`, {
        email: route.params.email,
      })
        .then((response) => {
          counting.value = true;
        })
        .catch((err) => {
          ElMessage.error(err.message || "Server error");
        })
        .finally(() => {
          loading.value = false;
        });
    }
    function onCountdownEnd() {
      counting.value = false;
    }

    return {
      counting,
      onCountdownEnd,
      startCountdown,
      formData,
      validationSchema,
      onSubmit,
      onInvalidSubmit,
      codeCheckRequestMade,
      codeIsValid,
    };
  },
});
</script>
<template>
  <div class="card">
    <div class="card-body shadow-sm">
      <div class="mb-10 text-center">
        <h1 class="text-dark mb-3">Create an Account</h1>

        <div class="text-gray-400 fw-bold fs-4">
          Already have an account?

          <router-link to="/sign-in" class="link-primary fw-bolder">
            Sign in here
          </router-link>
        </div>
      </div>

      <div
        class="stepper stepper-links d-flex flex-column"
        id="kt_create_account_stepper"
        ref="horizontalWizardRef"
      >
        <div class="stepper-nav py-5 mt-5">
          <div class="stepper-item text-gray-400" data-kt-stepper-element="nav">
            <h3 class="stepper-title text-gray-400">Basic Info</h3>
          </div>

          <div class="stepper-item current" data-kt-stepper-element="nav">
            <h3 class="stepper-title">E-mail Verification</h3>
          </div>

          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title text-gray-400">User Name</h3>
          </div>

          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title text-gray-400">Binance Connection</h3>
          </div>
        </div>

        <Form
          class="mx-auto mw-600px w-100 pt-15 pb-10"
          ref="formRef"
          as="el-form"
          @submit="onSubmit"
          :validation-schema="validationSchema"
          @invalid-submit="onInvalidSubmit"
        >
          <div class="fv-row mb-7">
            <div class="text-gray-400 fw-bold fs-4 mb-8">
              We've sent you an email verification code.
            </div>

            <label class="form-label fw-bolder text-dark fs-6"
              >E-mail verification code</label
            >

            <span
              v-if="codeCheckRequestMade && !codeIsValid"
              class="badge badge-light-danger mx-2"
              >Invalid code</span
            >

            <Field
              v-model="formData.code"
              class="form-control form-control-lg form-control-solid"
              type="number"
              placeholder=""
              name="code"
              autocomplete="off"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="6"
              @input="codeCheckRequestMade = false"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="code"
                />
              </div>
            </div>

            <vue-countdown
              v-if="counting"
              :time="180000"
              @end="onCountdownEnd"
              v-slot="{ totalSeconds }"
            >
              <div>
                <span class="text-gray-600">Type code in </span>
                <span class="text-gray-800"> {{ totalSeconds }}</span>
                <span class="text-gray-600"> seconds</span>
              </div>
            </vue-countdown>
            <a
              class="cursor-pointer"
              v-else
              :disabled="counting"
              @click="startCountdown"
              >send code again</a
            >
          </div>

          <div class="text-center">
            <button
              id="kt_sign_up_submit"
              ref="submitButton"
              type="submit"
              class="btn btn-lg btn-primary"
            >
              <span class="indicator-label"> Submit </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

