<template>
  <div class="table-container">
    <div class="table-filter">
      <div class="table-filter__title">Invoices</div>
      <div class="table-filter__fields">
        <SearchField @search="handleSearch" />
        <ToggleField />
      </div>
    </div>
    <div class="table">
      <thead class="table-header">
        <tr>
          <th @click="sortRows('id')">ID</th>
          <th @click="sortRows('amount')">Amount</th>
          <th @click="sortRows('timePeriod')">Time period</th>
          <th @click="sortRows('creditsUsed')">Credits Used</th>
          <th @click="sortRows('isPaid')">Status</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr
          class="table-row"
          v-for="invoice in filteredInvoices"
          :key="invoice.id"
        >
          <td class="table-column">{{ invoice.id }}</td>
          <td class="table-column">{{ invoice.amount }}</td>
          <td class="table-column">{{ invoice.timePeriod | formatDate }}</td>
          <td class="table-column progress-container">
            <div class="progress-bar">
              <div
                class="progress-bar__progress"
                :style="{
                  width: `${(invoice.creditsUsed / invoice.creditsLimit) *
                    100}%`,
                }"
              />
            </div>
            <div>{{ invoice.creditsUsed }} / 1000</div>
          </td>
          <td class="table-column">
            <span class="badge">{{
              invoice.isPaid ? "Paid" : "Not Paid"
            }}</span>
          </td>
          <td class="table-column">
            <button class="btn-download">
              <span class="icon"
                ><svg
                  width="9"
                  height="11"
                  viewBox="0 0 9 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.23619 10.0383C1.09342 10.0383 0.97207 9.98829 0.872133 9.88835C0.772197 9.78842 0.722229 9.66707 0.722229 9.5243V9.01034C0.722229 8.86757 0.772197 8.74622 0.872133 8.64629C0.97207 8.54635 1.09342 8.49638 1.23619 8.49638L8.4316 8.49638C8.57437 8.49638 8.69572 8.54635 8.79566 8.64629C8.89559 8.74622 8.94556 8.86757 8.94556 9.01034V9.5243C8.94556 9.66707 8.89559 9.78842 8.79566 9.88835C8.69572 9.98829 8.57437 10.0383 8.4316 10.0383H1.23619Z"
                    fill="#8A98A8"
                  />
                  <path
                    d="M7.01815 4.02073C7.11809 3.92079 7.23587 3.87082 7.3715 3.87082C7.50713 3.87082 7.62491 3.92079 7.72485 4.02073L8.0889 4.38478C8.18884 4.48472 8.2388 4.60607 8.2388 4.74884C8.2388 4.8916 8.18884 5.01295 8.0889 5.11289L5.19788 8.02532C5.09795 8.12526 4.9766 8.17522 4.83383 8.17522C4.69106 8.17522 4.56971 8.12526 4.46978 8.02532L1.55734 5.11289C1.45741 5.01295 1.40744 4.89517 1.40744 4.75954C1.40744 4.62392 1.46455 4.49899 1.57876 4.38478L1.9214 4.04214C2.02133 3.92793 2.14269 3.87082 2.28545 3.87082C2.42822 3.87082 2.54957 3.92079 2.64951 4.02073L4.06289 5.43411V0.958393C4.06289 0.815627 4.11286 0.694276 4.2128 0.59434C4.31273 0.494403 4.43408 0.444435 4.57685 0.444435L5.09081 0.444435C5.23358 0.444435 5.35493 0.494403 5.45486 0.59434C5.5548 0.694276 5.60477 0.815627 5.60477 0.958393L5.60477 5.43411L7.01815 4.02073Z"
                    fill="#12181F"
                  />
                </svg>
              </span>
              <span>Receipt</span>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot class="table-footer">
        <Pagination
          :currentPage="pagination.currentPage"
          :totalPages="pagination.totalPages"
          @changePage="changePage"
        />
        <GotoPage
          :currentPage="pagination.currentPage"
          @changePage="changePage"
        />
      </tfoot>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";

import SearchField from "./UI/SearchField";
import ToggleField from "./UI/ToggleField";
import Pagination from "./UI/Pagination";
import GotoPage from "./UI/GotoPage";

import { invoices } from "../mock";

export default {
  name: "Table",
  props: { msg: String },
  components: { SearchField, ToggleField, Pagination, GotoPage },
  data() {
    return {
      filteredInvoices: invoices,
      pagination: {
        currentPage: 0,
        perPage: 6,
        totalPages: 0,
      },
      sortField: "",
      isAscending: true,
    };
  },
  created() {
    const { perPage } = this.pagination;
    this.filteredInvoices = invoices.slice(0, perPage);
    this.pagination.totalPages = Math.ceil(invoices.length / perPage);
  },
  methods: {
    handleSearch(query) {
      const lowerCaseQuery = query.toLowerCase();
      this.filteredInvoices = invoices.filter((invoice) => {
        return (
          invoice.id.toLowerCase().includes(lowerCaseQuery) ||
          String(invoice.amount)
            .toLowerCase()
            .includes(lowerCaseQuery) ||
          String(invoice.creditsUsed)
            .toLowerCase()
            .includes(lowerCaseQuery) ||
          format(invoice.timePeriod, "d MMM yyyy")
            .toLowerCase()
            .includes(lowerCaseQuery)
        );
      });
    },
    sortRows(field) {
      if (this.sortField === field) {
        this.isAscending = !this.isAscending;
      }

      this.sortField = field;
      this.filteredInvoices = this.filteredInvoices.sort((i1, i2) => {
        if (i1[field] > i2[field]) {
          return this.isAscending ? 1 : -1;
        } else if (i1[field] < i2[field]) {
          return this.isAscending ? -1 : 1;
        }
        return 0;
      });
    },
    changePage(page) {
      const { perPage } = this.pagination;
      const start = page * perPage;
      const end = page * perPage + perPage;
      this.pagination.currentPage = page;
      this.filteredInvoices = invoices.slice(start, end);
    },
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
      cursor: pointer;
    }
  }

  .table-body {
    display: flex;
    flex-direction: column;
    padding: 10px 24px 0 24px;
    margin-bottom: 28px;

    tr {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1.5fr 1fr 1fr;

      &:hover {
        background-color: rgba(0, 0, 0, 0.02);
      }
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
      border-bottom: 1px solid var(--color-grey-1);

      &.progress-container {
        display: flex;
        align-items: center;
      }
    }
  }

  .table-footer {
    display: flex;
    justify-content: space-between;

    padding: 0 24px;
    margin-bottom: 20px;
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
  padding: 3.5px 6px;
  cursor: pointer;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;

  color: var(--color-grey-9);

  &:hover {
    background: var(--color-grey-1);
    transition: all 0.3s ease-in-out;
  }

  .icon {
    margin-right: 7px;
  }
}

.progress-bar {
  background: var(--color-grey-2);
  border-radius: 4px;

  position: relative;

  width: 53px;
  height: 4px;

  margin-right: 10px;

  &__progress {
    position: absolute;
    left: 0;
    top: 0;

    height: 4px;

    background: #0283ff;
    border-radius: 4px;
  }
}
</style>
