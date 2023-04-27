<template>
    <div class="product-page__product-details">
        <ul>
            <li :name="name" v-for="data in details" :key="data.value" :value="data.value">
                <strong>{{ data.id }}</strong>{{data.value}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            details:{
                type: Array,
                default: []
            }
        }
    }
</script>