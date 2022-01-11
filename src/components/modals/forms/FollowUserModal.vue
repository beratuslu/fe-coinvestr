<script>
import { defineComponent, ref } from "vue";
import { Form, ErrorMessage, Field } from "vee-validate";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
import * as Yup from "yup";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "FollowUserModal",
  components: {
    Form,
    Field,
  },
  setup() {
    const formRef = ref(null);
    const followUserModalRef = ref(null);
    const loading = ref(false);

    const initialFormData = {
      amount: null,
    };
    const formData = ref({ ...initialFormData });

    const validationSchema = Yup.object().shape({
      amount: Yup.number()
        .required()
        .label("BTC amount")
        .typeError("should be a number"),
    });

    function onSubmit(values) {
      loading.value = true;
      ApiService.post(`api/v1/profile/follow`, formData.value)
        .then((response) => {
          ElMessage.success(response.message || "Trade created successfully!");
          hideModal(followUserModalRef.value);
          formRef.value.resetForm();
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
      // const submitBtn = document.querySelector(".submit-btn");
      // submitBtn.classList.add("invalid");
      // setTimeout(() => {
      //   submitBtn.classList.remove("invalid");
      // }, 1000);
    }

    return {
      // symbol,
      // buyPrice,
      // profitPrice,
      // stopLossPrice,
      formData,

      formRef,
      loading,
      followUserModalRef,

      validationSchema,
      onSubmit,
      onInvalidSubmit,
    };
  },
});
</script>

<template>
  <div
    class="modal fade"
    id="followUserModal"
    ref="followUserModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_add_customer_header">
          <h2 class="fw-bolder">Enter Copy Amount</h2>

          <div
            id="kt_modal_add_customer_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
        </div>

        <Form
          ref="formRef"
          as="el-form"
          @submit="onSubmit"
          :validation-schema="validationSchema"
          @invalid-submit="onInvalidSubmit"
        >
          <div class="modal-body py-10 px-lg-17">
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_add_customer_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_customer_header"
              data-kt-scroll-wrappers="#kt_modal_add_customer_scroll"
              data-kt-scroll-offset="300px"
            >
              <div class="fv-row mb-7">
                <!-- <label class="required fs-6 fw-bold mb-2">Buy Price</label> -->
                <Field
                  v-model="formData.amount"
                  name="amount"
                  v-slot="{ value, field, errorMessage }"
                >
                  <el-form-item :error="errorMessage">
                    <el-input
                      :model-value="value"
                      v-bind="field"
                      type="text"
                      placeholder="Amount"
                    />
                  </el-form-item>
                </Field>
              </div>
            </div>
          </div>

          <div class="modal-footer flex-center">
            <!-- <button
              type="reset"
              id="kt_modal_add_customer_cancel"
              class="btn btn-light me-3"
            >
              Clear
            </button> -->

            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span v-if="!loading" class="indicator-label">
                Submit
                <span class="svg-icon svg-icon-3 ms-2 me-0">
                  <inline-svg src="icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span v-if="loading" class="indicator-progress">
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
