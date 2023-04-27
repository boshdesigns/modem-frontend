<template>
  <form @submit.prevent="handleSubmit" class="generic-form">
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

    <FormDropdownSelect
      name="categories"
      label="Categories"
      :options="[{ label: 'option_select__1', value: 'option select 1' }, { label: 'option_select__2', value: 'option select 2' }, { label: 'option_select__3', value: 'option select 3' }]"
      v-model="formData.selected"
    />

    <FormRadio
      name="radio-options"
      label="Radio"
      :options="[{ label: 'option_1', value: 'option 1' }, { label: 'option_2', value: 'option 2' }, { label: 'option_3', value: 'option 3' }]"
      v-model="formData.radioOption"
    />

    <FormTextarea
      label="Message"
      name="message"
      placeholder="Enter your message here"
      v-model="formData.message"
      required
    />

    <FormInput
      label="Password"
      type="password"
      name="password"
      v-model="formData.password"
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
                  password: '',
                  confirmPassword: '',
                  radioOption: '',
                  selected: ''
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
  import FormTextarea from '@/components/form/FormTextarea.vue';
  import FormRadio from '@/components/form/FormRadioButtons.vue';
  import FormDropdownSelect from "@/components/form/FormDropdownSelect.vue";
  import GenericButton from '@/components/generic/GenericButton.vue';
</script>