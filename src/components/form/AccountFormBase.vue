<template>
  <form @submit.prevent="handleSubmit" class="generic-form">
    <FormInput
      label="Current Password"
      type="password"
      name="currentPassword"
      v-model="formData.currentPassword"
      required
      classNames="more-classes"
    />

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
      label="New Password"
      type="password"
      name="newPassword"
      v-model="formData.newPassword"
      required
    />

    <FormInput
      label="Confirm Password"
      type="password"
      name="confirmPassword"
      v-model="formData.confirmPassword"
      required
    />

     <section class="page__button-group">
        <GenericButton text="Update Settings" type="submit" />
        <GenericButton text="Logout" />
    </section>
  </form>
   
</template>

<script>
  export default {
      data() {
          return {
              formData: {
                 currentPassword: '',
                  fullName: '',
                  email: '',
                  newPassword: '',
                  confirmPassword: '',
              },
          };
      },
      methods: {
        handleSubmit() {
          // needs validation
            console.log('Form submitted:', this.formData);
        },
      },
  };
</script>

<script setup>
  // Import form elements as needed 
  import FormInput from '@/components/form/FormInput.vue';
  import GenericButton from '@/components/generic/GenericButton.vue';
</script>