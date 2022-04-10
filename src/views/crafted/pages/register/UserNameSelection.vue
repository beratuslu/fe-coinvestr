<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Form, ErrorMessage, Field } from "vee-validate";
import { StepperComponent } from "@/assets/ts/components";
import { ElMessage } from "element-plus";
import { useForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import ApiService from "@/core/services/ApiService";
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

    const initialFormData = {
      userName: "",
    };
    const formData = ref({ ...initialFormData });

    function onSubmit(values) {
      router.push({
        name: "RegisterBinanceConnection",
        params: { ...formData.value, ...route.params },
      });
    }

    function onInvalidSubmit() {
      console.log("in valid");
    }

    const validationSchema = Yup.object().shape({
      userName: Yup.string()
        .strict(true)
        .matches(/^\S+$/, "Name must not contain spaces")
        .matches(
          /^(?=.{2,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
          "Use special characters carefully."
        )
        .max(20, "User Name should be max 20 characters")
        .min(2, "User Name should be min 2 characters")
        .required()
        .label("User Name"),
    });

    function validateUserName(userName) {
      return /^(?=.{2,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
        String(userName)
      );
    }

    const userNameCheckRequestMade = ref(false);
    const userNameIsAvailable = ref(false);

    function checkAvailability() {
      userNameCheckRequestMade.value = false;
      const isValid = validateUserName(formData.value.userName);
      if (isValid) {
        ApiService.post(`/auth/search-user-name`, {
          userName: formData.value.userName,
        })
          .then((response) => {
            userNameIsAvailable.value = !response.data;
            // ElMessage.success(response.message || "Trade created successfully!");
            // formRef.value.resetForm();
          })
          .catch((err) => {
            ElMessage.error(err.message || "Server error");
          })
          .finally(() => {
            userNameCheckRequestMade.value = true;
            loading.value = false;
          });
      }
    }

    return {
      userNameIsAvailable,
      userNameCheckRequestMade,
      formData,
      validationSchema,
      onSubmit,
      onInvalidSubmit,
      checkAvailability,
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

          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title text-gray-400">E-mail Verification</h3>
          </div>

          <div class="stepper-item current" data-kt-stepper-element="nav">
            <h3 class="stepper-title">User Name</h3>
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
            <div class="">
              <label class="form-label fw-bolder text-dark fs-6"
                >User Name</label
              >

              <span
                v-if="userNameCheckRequestMade && userNameIsAvailable"
                class="badge badge-light-success mx-2"
                >Available</span
              >
              <span
                v-if="userNameCheckRequestMade && !userNameIsAvailable"
                class="badge badge-light-danger mx-2"
                >Already taken</span
              >

              <span v-if="userNameCheckRequestMade && !userNameIsAvailable">
                <span class="form-text text-muted"> Try another one. </span>
              </span>
            </div>
            <Field
              v-model="formData.userName"
              class="form-control form-control-lg form-control-solid"
              type="text"
              placeholder=""
              name="userName"
              autocomplete="off"
              @input="checkAvailability"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="userName"
                />
              </div>
            </div>
          </div>

          <!-- 
          <div class="fv-row mb-10">
            <label class="form-check form-check-custom form-check-solid">
              <Field
                class="form-check-input"
                type="checkbox"
                name="toc"
                value="1"
              />
              <span class="form-check-label fw-bold text-gray-700 fs-6">
                I Agree &
                <a href="#" class="ms-1 link-primary">Terms and conditions</a>.
              </span>
            </label>
          </div> -->

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

