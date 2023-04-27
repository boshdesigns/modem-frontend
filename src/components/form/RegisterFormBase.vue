<template>
  <form @submit.prevent="handleSubmit" class="generic-form generic-form--register">
    <FormInput
      label="Full Name"
      type="text"
      name="fullName"
      v-model="formData.fullName"
      required
    />

    <FormInput
      label="Email"
      type="email"
      name="email"
      v-model="formData.email"
      required
    />

    <FormInput
      label="Password"
      type="password"
      name="password"
      v-model="formData.password"
      required
    />

    <FormRadio
      name="radio-options"
      label="Radio"
      :options="[{ label: 'option_1', value: 'option 1' }, { label: 'option_2', value: 'option 2' }, { label: 'option_3', value: 'option 3' }]"
      v-model="formData.radioOption"
    />

     <section class="page__button-group">
        <GenericButton text="Login" type="submit" />
    </section>
  </form>
   
</template>

<script>
  export default {
      data() {
          return {
              formData: {
                  fullName: '',
                  email: '',
                  password: '',
                  radioOption: ''
              },
          };
      },
      methods: {
        handleSubmit() {
            console.log('Form submitted:', this.formData);
        },
      },
  };
</script>

<script setup>
  // Import form elements as needed 
  import FormInput from '@/components/form/FormInput.vue';
  import FormRadio from '@/components/form/FormRadioButtons.vue';
  import GenericButton from '@/components/generic/GenericButton.vue';
</script>