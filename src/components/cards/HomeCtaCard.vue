<template>
    <div class="home-cta-card__item">
        <RouterLink :to="url">
            <figure v-if="image !== ''">
                <GenericPicture alt="call to action" class-names="extra-class" :src="image" width="352" height="502" />
                <figcaption>{{ title }}</figcaption>
            </figure>
            <figure v-else>
                <img alt="call to action" class="" src="@/assets/home_cta_1.jpg" width="352" height="502" />
                <figcaption>{{ title }}</figcaption>
            </figure>
        </RouterLink>    
    </div>
 </template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "Mo:Dem Express 2023 - Festival to Zagreb Airport TEST"
            },
            image: {
                type: String,
                default: ''
            },
            url: {
                type: String,
                default: "/"
            }
        }
    }   
</script>

<script setup>
    import GenericPicture from '../generic/GenericPicture.vue';
</script>