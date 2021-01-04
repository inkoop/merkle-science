<template>
  <div class="table-container">
    <div class="table-filter">
      <div class="table-filter__title">
        Invoices
      </div>
      <div class="table-filter__fields">
        <SearchField />
        <ToggleField />
      </div>
    </div>
    <div class="table">
      <thead class="table-header">
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Time period</th>
          <th>Credits Used</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr class="table-row">
          <td class="table-column"></td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import SearchField from "./UI/SearchField";
import ToggleField from "./UI/ToggleField";

export default {
  name: "Table",
  props: { msg: String },
  components: { SearchField, ToggleField },
};
</script>

<style scoped lang="scss">
.table-container {
  width: 100%;
  overflow-x: auto;

  background-color: var(--color-grey-white);
  box-shadow: 0px 2px 6px rgba(0, 52, 102, 0.06),
    0px 8px 20px rgba(0, 52, 102, 0.1);
  border-radius: 4px;
}

.table-filter {
  margin: 14px 24px;

  display: flex;
  justify-content: space-between;

  &__title {
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: var(--color-grey-9);
  }

  &__fields {
    display: flex;
  }
}

.table {
  width: 100%;
  display: flex;

  .table-header {
    background-color: var(--color-grey-1);
    width: 100%;

    tr {
      display: flex;
    }

    th {
      font-family: var(--font-primary);
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;

      display: flex;
      align-items: center;

      flex: 1;

      color: var(--color-grey-5);
    }
  }
}
</style>
