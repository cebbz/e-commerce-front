<script setup lang="ts">
import type { FilterUpdate, FiltersInterface } from '@/interfaces';

defineProps<{
    filters: FiltersInterface;
}>();

const emit = defineEmits<{
    (event: 'update-filter', FilterUpdate: FilterUpdate): void;
}>();

</script>

<template>
    <div class="p-20 d-flex flex-column">
        <section class="mb-20">
            <h3 class="mb-10">Rechercher</h3>
            <input :value="filters.search"
                @input="emit('update-filter', { search: ($event.target as HTMLInputElement).value })" type="text"
                placeholder="Rechercher" />
        </section>
    </div>

</template>

<style scoped lang="scss">

</style>