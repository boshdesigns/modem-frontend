<template>
    <img :class="className" :alt="alt" :src="image" :width="width" :height="height" />
 </template>

<script>
    export default {
        props: {
            src: {
                type: String,
                default: ""
            },
            alt: {
                type: String,
                default: 'alt text'
            },
            title: {
                type: String,
                default: 'title text'
            },
            className: {
                type: String,
                default: ""
            },
            width: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            }
        }
    }   
</script>