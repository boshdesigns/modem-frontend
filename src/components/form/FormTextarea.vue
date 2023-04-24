<template>
    <div>
      <label :for="name">{{ label }}</label>
      <textarea
        class="generic-form__textarea"
        :class="{ [classNames]: classNames }"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        :disabled="disabled"
        @input="input"
      ></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormTextarea',
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
      value: {
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
      methods: {
         input(event) {
            const value = event.target.value;
              const name = event.target.name;
            this.$emit('input', {name, value})
        },
      },
    },
  };
  </script>
  