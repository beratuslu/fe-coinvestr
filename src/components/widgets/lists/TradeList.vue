<script lang="ts">
import { defineComponent, ref } from "vue";
// import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-widget-2",
  components: {
    // Dropdown2,
  },
  props: {
    widgetClasses: String,
    list: Array,
  },
  setup() {
    const cloudinaryName = ref(process.env.VUE_APP_CLOUDINARY_NAME);
    return {
      cloudinaryName,
    };
  },
});
</script>

<template>
  <!--begin::Body-->
  <div class="card-body pt-5 overflow-auto">
    <!--begin::Accordion-->
    <div style="min-width: 1154px" class="accordion" id="kt_accordion_1">
      <div
        class="accordion-item"
        v-for="(item, index) in [{ id: 1 }, { id: 2 }, { id: 3 }]"
        :key="item.id"
      >
        <h2 class="accordion-header" :id="`kt_accordion_1_header_${item.id}`">
          <button
            class="accordion-button fs-4 fw-bold"
            :class="{ collapsed: index != 0 }"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#kt_accordion_1_body_${item.id}`"
            :aria-expanded="index == 0"
            :aria-controls="`kt_accordion_1_header_${item.id}`"
          >
            Accordion Item #{{ item.id }}
          </button>
        </h2>
        <div
          :id="`kt_accordion_1_body_${item.id}`"
          class="accordion-collapse collapse"
          :class="{ show: index == 0 }"
          :aria-labelledby="`kt_accordion_1_header_${item.id}`"
          :data-bs-parent="`#kt_accordion_1`"
        >
          <div class="accordion-body">
            <!--begin::Timeline-->
            <div class="timeline-label">
              <!--begin::Item-->
              <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bolder text-gray-800 fs-6">
                  08:42
                </div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                  <i class="fa fa-genderless text-warning fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Text-->
                <div class="fw-mormal timeline-content text-muted ps-3">
                  Outlines keep you honest. And keep structure
                </div>
                <!--end::Text-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bolder text-gray-800 fs-6">
                  10:00
                </div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                  <i class="fa fa-genderless text-success fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Content-->
                <div class="timeline-content d-flex">
                  <span class="fw-bolder text-gray-800 ps-3">AEOL meeting</span>
                </div>
                <!--end::Content-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bolder text-gray-800 fs-6">
                  14:37
                </div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                  <i class="fa fa-genderless text-danger fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Desc-->
                <div class="timeline-content fw-bolder text-gray-800 ps-3">
                  Make deposit
                  <a href="#" class="text-primary">USD 700</a>. to ESL
                </div>
                <!--end::Desc-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bolder text-gray-800 fs-6">
                  16:50
                </div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                  <i class="fa fa-genderless text-primary fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Text-->
                <div class="timeline-content fw-mormal text-muted ps-3">
                  Indulging in poorly driving and keep structure keep great
                  Indulging in poorly driving and keep structure keep great
                  Indulging in poorly driving and keep structure keep great
                  Indulging in poorly driving and keep structure keep great
                  Indulging in poorly driving and keep structure keep great
                </div>
                <!--end::Text-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bolder text-gray-800 fs-6">
                  21:03
                </div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                  <i class="fa fa-genderless text-danger fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Desc-->
                <div class="timeline-content fw-bold text-gray-800 ps-3">
                  New order placed
                  <a href="#" class="text-primary">#XF-2356</a>.
                </div>
                <!--end::Desc-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bolder text-gray-800 fs-6">
                  16:50
                </div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                  <i class="fa fa-genderless text-primary fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Text-->
                <div class="timeline-content fw-mormal text-muted ps-3">
                  Indulging in poorly driving and keep structure keep great
                </div>
                <!--end::Text-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bolder text-gray-800 fs-6">
                  21:03
                </div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                  <i class="fa fa-genderless text-danger fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Desc-->
                <div class="timeline-content fw-bold text-gray-800 ps-3">
                  New order placed
                  <a href="#" class="text-primary">#XF-2356</a>.
                </div>
                <!--end::Desc-->
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="timeline-item">
                <!--begin::Label-->
                <div class="timeline-label fw-bolder text-gray-800 fs-6">
                  10:30
                </div>
                <!--end::Label-->

                <!--begin::Badge-->
                <div class="timeline-badge">
                  <i class="fa fa-genderless text-success fs-1"></i>
                </div>
                <!--end::Badge-->

                <!--begin::Text-->
                <div class="timeline-content fw-mormal text-muted ps-3">
                  Finance KPI Mobile app launch preparion meeting
                </div>
                <!--end::Text-->
              </div>
              <!--end::Item-->
            </div>
            <!--end::Timeline-->
          </div>
        </div>
      </div>
    </div>
    <!--end::Accordion-->
  </div>
  <!--end: Card Body-->
</template>
