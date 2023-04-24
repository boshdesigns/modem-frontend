<template>
    <div>
      <label class="generic-form__label" :for="name">{{ label }}</label>
      <input
        class="generic-form__input"
        :class="{ [classNames]: classNames }"
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        :disabled="disabled"
        @input="input"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormInput',
    props: {
      label: {
        type: String,
        required: true,
      },
      type: {
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
        type: [String, Number],
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
      }
    },
    methods: {
            input(event) {
                const value = event.target.value;
                const name = event.target.name;
                this.$emit('input', {name, value})
            },
        },
  };
  </script>
  