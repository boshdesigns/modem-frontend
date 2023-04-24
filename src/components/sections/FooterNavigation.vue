<template>
    <div class="footer__links__container">
        <h3>{{ heading }}</h3>
        <ul class="footer-navigation__grid">
            <li class="footer-navigation__link" v-for="link in links" :key="link.value" :value="link.value">
                <RouterLink :to="link.url">{{ link.label }}</RouterLink>
            </li>
        </ul>
   </div>
</template>

<script>
    export default {
        props: {
            heading: {
                type: String,
                default: 'Footer Nav'
            },
            links: {
                type: Array,
                default: [],
            },
        },
    };
</script>