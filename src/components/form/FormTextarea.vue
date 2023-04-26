<template>
    <div>
      <label class="generic-form__label" :for="name">{{ label }}</label>
      <textarea
        class="generic-form__textarea"
        :class="{ [classNames]: classNames }"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        @input="(event) => $emit('update:modelValue', event.target.value)"
      ></textarea>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        default: '',
      },
      required: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      classNames: {
        type: String,
        default: ''
      },
    },
  };
  </script>
  