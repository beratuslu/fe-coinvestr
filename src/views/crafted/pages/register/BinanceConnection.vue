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
    // ErrorMessage,
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
      apiKey: "",
      secretKey: "",
    };
    const formData = ref({ ...initialFormData });

    function onSubmit(values) {
      if (checkRequestMade.value && keysValid.value) {
        const requestObj = {
          apiKey: formData.value.apiKey,
          secretKey: formData.value.secretKey,
          ...route.params,
        };
        delete requestObj.passwordRepeat;

        ApiService.post(`/auth/register`, requestObj)
          .then((response) => {
            ElMessage.success(response.message || "Success!");
            setTimeout(() => {
              window.location.href = "/";
            }, 5000);
          })
          .catch((err) => {
            ElMessage.error(err.message || "Server error");
          })
          .finally(() => {
            checkRequestMade.value = true;
            loading.value = false;
          });
      }
    }

    function onInvalidSubmit() {
      console.log("in valid");
    }

    const validationSchema = Yup.object().shape({
      apiKey: Yup.string()
        .strict(true)
        .matches(/^\S+$/, "Api key must not contain spaces")
        .max(80, "Api key should be max 40 characters")
        .min(50, "Api key should be min 15 characters")
        .required()
        .label("Api key"),
      secretKey: Yup.string()
        .strict(true)
        .matches(/^\S+$/, "Secret key must not contain spaces")
        .max(80, "Secret key should be max 40 characters")
        .min(50, "Secret key should be min 15 characters")
        .required()
        .label("Secret key"),
    });

    const checkRequestMade = ref(false);
    const keysValid = ref(false);
    const errorMsg = ref(false);

    function checkAvailability() {
      loading.value = true;
      checkRequestMade.value = false;

      if (formData.value.apiKey && formData.value.secretKey) {
        console.log("gonder");

        ApiService.post(`/auth/check-apikey-secretkey`, {
          apiKey: formData.value.apiKey,
          secretKey: formData.value.secretKey,
        })
          .then((response) => {
            keysValid.value = response.keysValid;
            errorMsg.value = response.errorMsg;
            // ElMessage.success(response.message || "Trade created successfully!");
            // formRef.value.resetForm();
          })
          .catch((err) => {
            ElMessage.error(err.message || "Server error");
          })
          .finally(() => {
            checkRequestMade.value = true;
            loading.value = false;
          });
      } else {
        console.log("biesyler eksik");
        return;
      }
    }

    return {
      checkRequestMade,
      keysValid,
      errorMsg,
      formData,
      validationSchema,
      onSubmit,
      onInvalidSubmit,
      checkAvailability,
      loading,
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

          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title text-gray-400">User Name</h3>
          </div>

          <div class="stepper-item current" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Binance Connection</h3>
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
          <div class="mb-6">
            <span class="form-text">
              You can <strong>watch</strong> how to generate
              <strong>Api key</strong> and <strong>Secret key</strong>
              in
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=5xIQCeQuxIY"
                >this youtube video.</a
              >
            </span>
          </div>
          <div class="fv-row mb-7">
            <div class="">
              <label class="form-label fw-bolder text-dark fs-6">Api key</label>

              <span class="badge badge-light-primary mx-2" v-if="loading"
                >we are checking...</span
              >
              <span v-else>
                <span
                  v-if="checkRequestMade && keysValid"
                  class="badge badge-light-success mx-2"
                  >Everything looks good</span
                >
                <span
                  v-if="checkRequestMade && !keysValid"
                  class="badge badge-light-danger mx-2"
                  >{{ errorMsg }}</span
                >

                <span v-if="checkRequestMade && !keysValid">
                  <span
                    v-if="!errorMsg.includes('You should enable')"
                    class="form-text text-muted"
                  >
                    Please check your keys.
                  </span>
                  <a v-else @click="checkAvailability" class="cursor-pointer"
                    >check again</a
                  >
                </span>
              </span>
            </div>
            <Field
              v-model="formData.apiKey"
              class="form-control form-control-lg form-control-solid"
              type="text"
              placeholder=""
              name="apiKey"
              autocomplete="off"
              @input="checkAvailability"
            />
            <!-- <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="apiKey"
                />
              </div>
            </div> -->
          </div>
          <div class="fv-row mb-7">
            <div class="">
              <label class="form-label fw-bolder text-dark fs-6"
                >Secret key</label
              >
            </div>
            <Field
              v-model="formData.secretKey"
              class="form-control form-control-lg form-control-solid"
              type="text"
              placeholder=""
              name="secretKey"
              autocomplete="off"
              @input="checkAvailability"
            />
            <!-- <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="secretKey"
                />
              </div>
            </div> -->
          </div>

          <!-- <div
            class="
              notice
              d-flex
              bg-light-warning
              rounded
              border-warning border border-dashed
              p-6
              mb-8
            "
          >
            <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
              <inline-svg src="media/icons/duotune/general/gen044.svg" />
            </span>

            <div class="d-flex flex-stack flex-grow-1">
              <div class="fw-bold">
                <h4 class="text-gray-800 fw-bolder">We need your attention!</h4>
                <div class="fs-6 text-gray-600">
                  To start using great tools, please, please
                  <a href="#" class="fw-bolder">Create Team Platform</a>
                </div>
              </div>
            </div>
          </div> -->
          <div class="d-flex justify-content-center">
            <!-- <button
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
            </button> -->

            <div>
              <button
                :disabled="!checkRequestMade || !keysValid"
                id="kt_sign_up_submit"
                ref="submitButton"
                type="submit"
                class="btn btn-lg btn-success ms-3"
              >
                <span class="indicator-label">Complete Registration</span>
                <span class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
            </div>
          </div>
          <div class="text-center"></div>
        </Form>
      </div>
    </div>
  </div>
</template>

