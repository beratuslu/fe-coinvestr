<script>
import { defineComponent, ref, computed, inject, watch } from "vue";
import { Form, ErrorMessage, Field } from "vee-validate";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
import * as Yup from "yup";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "FollowUserModal",
  components: {
    Form,
    Field,
  },
  props: {
    updating: Boolean,
    showModal: Boolean,
    modalOpened: Boolean,
  },
  setup(props) {
    const store = useStore();
    const $vfm = inject("$vfm");
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

    const currentProfile = computed(() => {
      return store.getters.currentProfile;
    });

    function onSubmit(values) {
      loading.value = true;

      const postData = {
        traderId: currentProfile.value.id,
        ...formData.value,
        updating: props.updating,
      };
      ApiService.post(`api/v1/profile/follow`, postData)
        .then((response) => {
          ElMessage.success(
            response.message || props.updating
              ? "Amount updated!"
              : "You are following this user!"
          );
          closeModal();
          if (!props.updating) {
            formRef.value.resetForm();
          }
          store.dispatch(Actions.GET_PROFILE, currentProfile.value.userName);
        })
        .catch((err) => {
          ElMessage.error(err.message || "Server error");
        })
        .finally(() => {
          loading.value = false;
        });
    }
    const getFollowAmount = () => {
      const postData = {
        userId: store.getters.authenticatedUser.id,
        traderId: currentProfile.value.id,
      };

      ApiService.post(`api/v1/profile/get-follow-amount`, postData)
        .then((response) => {
          formData.value.amount = response.amount;
        })
        .catch((err) => {
          console.log(err);
          ElMessage.error(err.message || "Server error");
        })
        .finally(() => {
          loading.value = false;
        });
    };
    function onInvalidSubmit() {
      console.log("in valid");
      // const submitBtn = document.querySelector(".submit-btn");
      // submitBtn.classList.add("invalid");
      // setTimeout(() => {
      //   submitBtn.classList.remove("invalid");
      // }, 1000);
    }

    const closeModal = (params) => {
      $vfm.hide("followUserModal").then(() => {
        // do something on modal closed
      });
    };

    watch(
      () => props.updating,
      (current, prev) => {
        if (current) {
          getFollowAmount();
        }
      }
    );

    return {
      formData,
      closeModal,
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
    class="modal fade pe-none"
    style="display: block"
    :class="{ show: modalOpened }"
    ref="followUserModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <div class="modal-content">
        <div class="modal-header" id="kt_modal_add_customer_header">
          <h2 class="fw-bolder">Enter Copy Amount</h2>

          <div
            @click="closeModal"
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
              :disabled="loading"
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

<style>
.vfm--overlay {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
</style>