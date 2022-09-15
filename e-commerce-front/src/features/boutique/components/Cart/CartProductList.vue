<script setup lang="ts">
import CartProduct from './CartProduct.vue';
import type { ProductCartInterface } from '@/interfaces';

const props = defineProps<{
    cart: ProductCartInterface[];
}>();

const emit = defineEmits<{
    'remove-product-from-cart': (productId: number) => void;
}>();
</script>
    
<template>
    <div class="d-flex flex-column">
        <CartProduct v-for="product of cart" :product="product"
            @remove-product-from-cart="$emit('remove-product-from-cart', $event)" />
    </div>
</template>
    
<style lang="scss" scoped>

</style>