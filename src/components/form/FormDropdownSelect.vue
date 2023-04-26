<template>
    <div class="custom-dropdown">
        <label v-if="label !== ''" :for="name" class="generic-form__label">{{ label }}</label>
        <div class="custom-dropdown__container generic-form__select" >
            <select @change="(event) => $emit('update:modelValue', event.target.value)">
                <option :name="name" v-for="option in options" :key="option.value" :value="option.value">
                   {{ option.label }}
                </option>
            </select>
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
                required: true,
                default: ''
            },
            options: {
                type: Array,
                default: [],
            },
        },
    };
</script>
