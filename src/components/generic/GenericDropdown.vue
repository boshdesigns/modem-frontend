<template>
    <div class="custom-dropdown">
        <select @change="onChange">
            <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                default: [],
            },
        },
        methods: {
            onChange(event) {
                const value = event.target.value;
                this.$emit("selected", value);
            },
        },
    };
</script>
