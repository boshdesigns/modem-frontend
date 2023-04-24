<template>
  <h1 class="page__heading">Shop</h1>
  <div class="shop-page__custom-dropdown">
    <GenericDropdown :options="options" @selected="onSelected" />
  </div>
  <SiteProductGrid />
</template>

<script>
  import SiteProductGrid from '@/components/SiteProductGrid.vue';
  import GenericDropdown from "@/components/generic/GenericDropdown.vue";

  export default {
    components: {
      GenericDropdown,
      SiteProductGrid
    },
    data() {
      return {
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
      };
    },
    methods: {
      onSelected(value) {
        console.log(`Selected: ${value}`);
      },
    },
  };
</script>