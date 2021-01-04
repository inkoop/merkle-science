<template>
  <div class="table-container">
    <div class="table-filter">
      <div class="table-filter__title">Invoices</div>
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
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr class="table-row" v-for="invoice in invoices" :key="invoice.id">
          <td class="table-column">{{ invoice.id }}</td>
          <td class="table-column">{{ invoice.amount }}</td>
          <td class="table-column">{{ invoice.timePeriod | formatDate }}</td>
          <td class="table-column">{{ invoice.creditsUsed }} / 1000</td>
          <td class="table-column">
            <span class="badge">{{
              invoice.isPaid ? "Paid" : "Not Paid"
            }}</span>
          </td>
          <td class="table-column">
            <button class="btn-download">Receipt</button>
          </td>
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
  data() {
    return {
      invoices: [
        {
          id: "MS7421498",
          amount: 2100,
          timePeriod: new Date(),
          creditsUsed: "891",
          isPaid: false,
          receiptUrl: "https://google.com",
        },
        {
          id: "MS7421499",
          amount: 2100,
          timePeriod: new Date(),
          creditsUsed: "891",
          isPaid: false,
          receiptUrl: "https://google.com",
        },
        {
          id: "MS7421500",
          amount: 2100,
          timePeriod: new Date(),
          creditsUsed: "891",
          isPaid: true,
          receiptUrl: "https://google.com",
        },
        {
          id: "MS7421501",
          amount: 2100,
          timePeriod: new Date(),
          creditsUsed: "891",
          isPaid: true,
          receiptUrl: "https://google.com",
        },
        {
          id: "MS7421502",
          amount: 2100,
          timePeriod: new Date(),
          creditsUsed: "891",
          isPaid: true,
          receiptUrl: "https://google.com",
        },
        {
          id: "MS7421503",
          amount: 2100,
          timePeriod: new Date(),
          creditsUsed: "891",
          isPaid: false,
          receiptUrl: "https://google.com",
        },
      ],
    };
  },
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
  display: flex;
  flex-direction: column;

  .table-header {
    display: flex;
    flex-direction: column;
    padding: 10px 24px;

    background-color: var(--color-grey-1);

    tr {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr 1fr;
    }

    th {
      font-family: var(--font-primary);
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      text-align: left;

      color: var(--color-grey-5);
    }
  }

  .table-body {
    display: flex;
    flex-direction: column;
    padding: 10px 24px;

    tr {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr 1fr;
    }

    td {
      font-family: var(--font-primary);
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;

      color: var(--color-grey-9);

      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
}

.badge {
  padding: 2px 8px;

  font-family: var(--font-secondary);
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  color: var(--color-grey-9);

  background: var(--color-grey-1);
  border-radius: 100px;
}

.btn-download {
  background: var(--color-grey-white);
  border: 1px solid var(--color-grey-2);
  box-shadow: 0px 1px 3px rgba(0, 52, 102, 0.06),
    0px 1px 2px rgba(0, 52, 102, 0.12);
  border-radius: 2px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;

  color: var(--color-grey-9);

  padding: 3.5px 6px;
}
</style>
