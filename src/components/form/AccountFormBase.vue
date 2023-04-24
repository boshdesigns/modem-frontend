<template>
  <form @submit.prevent="handleSubmit" class="generic-form">
    <FormInput
      label="Current Password"
      type="password"
      name="currentPassword"
      :value="formData.currentPassword"
      required
      @input="onInput"
      classNames="more-classes"
    />

    <FormInput
      label="Full Name"
      type="text"
      name="fullName"
      :value="formData.fullName"
      required
      @input="onInput"
    />

    <FormInput
      label="Email"
      type="email"
      name="email"
      :value="formData.email"
      required
      @input="onInput"
    />

    <FormInput
      label="New Password"
      type="password"
      name="newPassword"
      :value="formData.newPassword"
      required
      @input="onInput"
    />

    <FormInput
      label="Confirm Password"
      type="password"
      name="confirmPassword"
      :value="formData.confirmPassword"
      required
      @input="onInput"
    />
     <section class="page__button-group">
      <GenericButton text="Update Settings" type="submit" />
      <GenericButton text="Logout" />
    </section>
  </form>
   
</template>

<script>
  import FormInput from '@/components/form/FormInput.vue';
  
  export default {
      name: 'Form',
      components: {
           FormInput,
      },
      data() {
          return {
              formData: {
                 currentPassword: '',
                  fullName: '',
                  email: '',
                  newPassword: '',
                  confirmPassword: ''
              },
          };
      },
      methods: {
          handleSubmit() {
            // needs validation
              console.log('Form submitted:', this.formData);
          },
          onInput(data) {
            if(this.formData[data.name]) {
              this.formData[data.name] = data.value
            };
          },
      },
  };
</script>

<script setup>
  import GenericButton from '@/components/generic/GenericButton.vue';
</script>