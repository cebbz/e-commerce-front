<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces';

defineProps<{
    product: ProductCartInterface;
}>();

const emit = defineEmits<{
    'remove-product-from-cart': (productId: number) => void;
}>();

</script>

<template>
    <div class="mb-10 p-10 d-flex flex-row align-items-center product">
        <strong class="mr-10">{{ product.title }}</strong>
        <span class="mr-10 flex-fill">x {{ product.quantity }}</span>
        <span class="mr-10">Prix : {{ product.price }}€</span>
        <button class="btn btn-danger" @click="$emit('remove-product-from-cart', product.id)">Supprimer</button>
    </div>
</template>

<style lang="scss" scoped>
.product {
    border: var(--border);
    border-radius: var(--border-radius);
    background-color: var(--gray-1);
}
</style>