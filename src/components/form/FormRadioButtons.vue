<template>
    <div class="generic-form__radio">
      <label :for="name"  class="generic-form__label">{{ label }}</label>
        <div class="generic-form__radio__container">
            <div v-for="(option, index) in options" :key="index" class="generic-form__radio__option" :class="{ [classNames]: classNames }">
            <input
                type="radio"
                :id="`${name}-${index}`"
                :name="name"
                :value="option.value"
                @change="(event) => $emit('update:modelValue', event.target.value)"
            >
            <label :for="`${name}-${index}`">{{ option.label }}</label>
            </div> 
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      validation: {
        type: Object,
        default: null
      },
      classNames: {
        type: String,
        default: ''
      }
    },
  }
  </script>
  