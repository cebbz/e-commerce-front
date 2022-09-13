<script setup lang="ts">
import type { ProductInterface, FilterUpdate, FiltersInterface } from '@/interfaces';
import ShopProductList from "./ShopProductList.vue";
import ShopFilters from "./ShopFilters.vue";

defineProps<{
    products: ProductInterface[];
    filters: FiltersInterface;
}>();

const emit = defineEmits<{
    (event: 'add-product-to-cart', productId: number): void;
    (event: 'update-filter', updateFilter: FilterUpdate): void;
}>();
</script>

<template>
    <div class="d-flex flex-row">
        <ShopFilters :filters="filters" @update-filter="emit('update-filter', $event)" class="shop-filter" />
        <ShopProductList :products="products" @add-product-to-cart="emit('add-product-to-cart', $event)"
            class="flex-fill" />
    </div>
</template>

<style lang="scss" scoped>
.shop-filter {
    flex: 0 0 200px;
}
</style>