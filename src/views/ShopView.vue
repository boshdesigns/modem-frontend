<template>
  <h1 class="page__heading">Shop</h1>
  <div class="shop-page__custom-dropdown">
    <FormDropdownSelect
      :options="[{ label: 'option_select__1', value: 'option select 1' }, { label: 'option_select__2', value: 'option select 2' }, { label: 'option_select__3', value: 'option select 3' }]"
      v-model="selected"
    />
  </div>
  <SiteProductGrid />
</template>

<script>
  export default {
    data() {
      return {
        selected: '',
      };
    },
  };
</script>

<script setup>
    import SiteProductGrid from '@/components/SiteProductGrid.vue';
    import FormDropdownSelect from "@/components/form/FormDropdownSelect.vue";
</script>