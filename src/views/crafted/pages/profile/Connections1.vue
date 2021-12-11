<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import ConnectionCard from "@/components/cards/ConnectionCard.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useRoute, useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "connections",
  components: {
    ConnectionCard,
  },
  setup() {
    const route = useRoute();
    const loading = ref(false);
    const connectionList = ref([]);
    const connectionType = ref(route.name);
    const userName = ref(route.params.userName);

    const getData = () => {
      loading.value = true;

      ApiService.get(`api/v1/profile/${userName.value}`)
        .then(({ data }) => {
          connectionList.value = data[connectionType.value];
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {
          loading.value = false;
        });
    };
    getData();

    watch(
      () => route.path,
      (prev, current) => {
        connectionType.value = route.name;
        getData();
      }
    );

    return {
      connectionList,
      connectionType,
      loading,
    };
  },
});
</script>

<template>
  <!--begin::Followers toolbar-->
  <div class="d-flex flex-wrap flex-stack mb-6">
    <!--begin::Title-->
    <h3 class="fw-bolder my-2">
      {{ connectionType == "followers" ? `Followers` : `Followings` }}
      <span class="fs-6 text-gray-400 fw-bold ms-1"
        >({{ connectionList.length }})</span
      >
    </h3>
    <!--end::Title-->

    <!--begin::Controls-->
    <div class="d-flex my-2">
      <!--begin::Select-->
      <select
        name="status"
        data-control="select2"
        data-hide-search="true"
        class="form-select form-select-white form-select-sm w-125px"
      >
        <option value="Active" selected>Active</option>
        <option value="Approved">In Progress</option>
        <option value="Declined">To Do</option>
        <option value="In Progress">Completed</option>
      </select>
      <!--end::Select-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Followers toolbar-->

  <!--begin::Row-->
  <div class="row g-6 mb-6 g-xl-9 mb-xl-9">
    <!--begin::Followers-->

    <ConnectionCard
      v-for="item in connectionList"
      :key="item.id"
      :name="`${item.name} ${item.lastName}`"
      position="Happy trading."
      :online="false"
      :avatar="
        item.profilePhoto
          ? `https://res.cloudinary.com/${cloudinaryName}/image/upload/w_300,h_300,c_fill,g_custom/${profilePhoto}.jpg`
          : `media/avatars/blank.png`
      "
      :connected="true"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></ConnectionCard>

    <ConnectionCard
      name="Patric Watson"
      position="Art Director at Novica Co."
      :online="true"
      avatar="media/avatars/150-12.jpg"
      :connected="true"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></ConnectionCard>

    <!-- <Card3
      name="Olivia Larson"
      position="Art Director at Seal Inc."
      :online="false"
      avatar="media/avatars/150-1.jpg"
      :connected="false"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Adam Williams"
      position="System Arcitect at Wolto Co."
      :online="true"
      initials="A"
      color="warning"
      :connected="true"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Paul Marcus"
      position="Art Director at Novica Co."
      :online="true"
      initials="P"
      color="primary"
      :connected="true"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Neil Owen"
      position="Accountant at Numbers Co."
      :online="false"
      initials="N"
      color="success"
      :connected="false"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Sean Paul"
      position="Developer at Loop Inc"
      :online="true"
      initials="S"
      color="info"
      :connected="false"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Kitona Johnson"
      position="Web Designer at Nextop Ltd."
      :online="false"
      avatar="media/avatars/150-2.jpg"
      :connected="true"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Robert Doe"
      position="Marketing Analytic at Avito Ltd."
      :online="false"
      avatar="media/avatars/150-11.jpg"
      :connected="false"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Soul Jacob"
      position="Art Director at Novica Co."
      :online="false"
      avatar="media/avatars/150-7.jpg"
      :connected="false"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Nina Strong"
      position="CTO at Kilp Ltd."
      :online="true"
      avatar="media/avatars/150-13.jpg"
      :connected="true"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Patric Watson"
      position="Art Director at Novica Co."
      :online="true"
      avatar="media/avatars/150-12.jpg"
      :connected="false"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3>

    <Card3
      name="Olivia Larson"
      position="Art Director at Seal Inc."
      :online="false"
      avatar="media/avatars/150-1.jpg"
      :connected="false"
      avg-earnings="$14,560"
      total-sales="$236,400"
    ></Card3> -->
    <!--end::Followers-->
  </div>
  <!--end::Row-->
</template>
