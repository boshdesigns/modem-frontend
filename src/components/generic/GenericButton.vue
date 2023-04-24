<template>
     <button class="button--generic portal-primary-button">{{ text }}</button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: "Click Me"
            },
        }
    }
</script>