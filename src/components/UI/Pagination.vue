<template>
  <div class="pagination-container">
    <div
      class="page-item"
      :class="{ 'is-selected': i === currentPage + 1 }"
      v-for="i in totalPages"
      :key="i"
      @click="$emit('changePage', i - 1)"
    >
      {{ i }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["currentPage", "totalPages"],
};
</script>

<style lang="scss">
.pagination-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .page-item {
    padding: 3px 10px;
    margin-right: 3px;
    cursor: pointer;

    &.is-selected {
      color: var(--color-grey-white);
      border-radius: 2px;
      background-color: var(--color-blue-600);
      text-shadow: 0px 1px 3px rgba(0, 52, 102, 0.06),
        0px 1px 2px rgba(0, 52, 102, 0.12);
    }
  }
}
</style>
