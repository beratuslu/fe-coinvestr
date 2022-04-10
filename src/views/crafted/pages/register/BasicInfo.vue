<script>
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { Form, ErrorMessage, Field, useField } from "vee-validate";
import ApiService from "@/core/services/ApiService";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import { StepperComponent } from "@/assets/ts/components";
import { useForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRouter } from "vue-router";
import * as Yup from "yup";
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
    const formRef = ref(null);
    const loading = ref(false);
    const showPasswords = ref(false);
    const router = useRouter();
    const store = useStore();

    const initialFormData = {
      name: "",
      lastName: "",
      email: "",
      password: "",
      passwordRepeat: "",
    };
    const formData = ref({ ...initialFormData });

    function onSubmit(values) {
      loading.value = true;
      if (emailIsAvailable.value) {
        ApiService.post(`auth/send-registration-email-verification-code`, {
          email: formData.value.email,
        })
          .then((response) => {
            router.push({
              name: "RegisterEmailVerification",
              params: { ...formData.value },
            });
          })
          .catch((err) => {
            ElMessage.error(err.message || "Server error");
          })
          .finally(() => {
            loading.value = false;
          });
      }
    }
    function validateEmail(email) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(email).toLowerCase()
      );
    }

    function onInvalidSubmit() {
      console.log("in valid");
    }

    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(2, "Name should be min 2 characters")
        .required()
        .label("Name"),
      lastName: Yup.string()
        .min(2, "Last Name should be min 2 characters")
        .required()
        .label("Last Name"),
      email: Yup.string()
        .required()
        .lowercase("Email must be lowercase")
        .email()
        .label("E-mail"),
      password: Yup.string()
        .strict(true)
        .matches(/^\S+$/, "Name must not contain spaces")
        .matches(
          /[!@#$%^&*_]/,
          "Password must contain at least one special character special char from -[ ! @ # $ % ^ & * _ ]"
        )
        .matches(/[0-9]/, "Password must contain at least one digit")
        .matches(
          /[A-Z]/,
          "Password must contain at least one upper case letter"
        )
        .matches(
          /[a-z]/,
          "Password must contain at least one lower case letter"
        )
        .max(20, "Password should be max 20 characters")
        .min(8, "Password should be min 8 characters")
        .required()
        .label("Password"),
      passwordRepeat: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .label("Password confirmation"),
    });

    const emailCheckRequestMade = ref(false);
    const emailIsAvailable = ref(false);
    function checkAvailability() {
      const isValid = validateEmail(formData.value.email);

      if (isValid) {
        ApiService.post(`/auth/search-email`, {
          email: formData.value.email.toLowerCase(),
        })
          .then((response) => {
            emailIsAvailable.value = !response.data;
            // ElMessage.success(response.message || "Trade created successfully!");
            // formRef.value.resetForm();
          })
          .catch((err) => {
            ElMessage.error(err.message || "Server error");
          })
          .finally(() => {
            emailCheckRequestMade.value = true;
            loading.value = false;
          });
      }
    }
    function toggleShowPasswords() {
      showPasswords.value = !showPasswords.value;
    }

    return {
      emailCheckRequestMade,
      emailIsAvailable,
      formData,
      validationSchema,
      onSubmit,
      onInvalidSubmit,
      checkAvailability,
      showPasswords,
      toggleShowPasswords,
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
          <div class="stepper-item current" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Basic Info</h3>
          </div>

          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title text-gray-400">E-mail Verification</h3>
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
          <div class="row fv-row mb-7">
            <div class="col-xl-6">
              <label class="form-label fw-bolder text-dark fs-6"
                >First Name</label
              >
              <Field
                v-model="formData.name"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder=""
                name="name"
                autocomplete="off"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="name"
                  />
                </div>
              </div>
            </div>

            <div class="col-xl-6">
              <label class="form-label fw-bolder text-dark fs-6"
                >Last Name</label
              >
              <Field
                v-model="formData.lastName"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder=""
                name="lastName"
                autocomplete="off"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="lastName"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="fv-row mb-7">
            <div class="">
              <label class="form-label fw-bolder text-dark fs-6">E-mail</label>

              <span
                v-if="emailCheckRequestMade && emailIsAvailable"
                class="badge badge-light-success mx-2"
                >Available</span
              >
              <span
                v-if="emailCheckRequestMade && !emailIsAvailable"
                class="badge badge-light-danger mx-2"
                >Already taken</span
              >

              <!-- <span v-if="ticket.status == 'ARCHIVED'"> -->
              <span v-if="emailCheckRequestMade && !emailIsAvailable">
                <span class="form-text text-muted"
                  >Please try to
                  <router-link to="/sign-in" class="link-primary fw-bolder">
                    sign in
                  </router-link>
                  and complete registration.
                </span>
              </span>
            </div>
            <Field
              v-model="formData.email"
              class="form-control form-control-lg form-control-solid"
              type="email"
              placeholder=""
              name="email"
              autocomplete="off"
              v-on:blur="checkAvailability"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="email"
                />
              </div>
            </div>
          </div>
          <div class="fv-row mb-7">
            <div class="d-flex justify-content-between">
              <label class="form-label fw-bolder text-dark fs-6"
                >Password</label
              >
              <span
                @click="toggleShowPasswords"
                style="border-bottom: 1px dashed"
                class="text-muted cursor-pointer"
                >{{ showPasswords ? "hide" : "show" }} passwords</span
              >
            </div>
            <Field
              v-model="formData.password"
              class="form-control form-control-lg form-control-solid"
              :type="showPasswords ? 'text' : 'password'"
              placeholder=""
              name="password"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="password"
                />
              </div>
            </div>
          </div>
          <div class="fv-row mb-7">
            <label class="form-label fw-bolder text-dark fs-6"
              >Password Repeat</label
            >
            <Field
              v-model="formData.passwordRepeat"
              class="form-control form-control-lg form-control-solid"
              :type="showPasswords ? 'text' : 'password'"
              placeholder=""
              name="passwordRepeat"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="passwordRepeat"
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

