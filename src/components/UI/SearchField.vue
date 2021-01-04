<template>
  <div class="search-container">
    <input
      class="search-field"
      type="text"
      name="search"
      placeholder="Search"
      v-model="query"
      @input="$emit('search', query)"
    />
    <svg
      v-if="query === ''"
      class="search-icon"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2288 13.448C15.0452 12.3595 15.4988 11.0895 15.4988 9.63818C15.4988 6.10052 12.6868 3.19783 9.14912 3.19783C5.61146 3.19783 2.70877 6.10052 2.70877 9.63818C2.70877 13.1758 5.61146 16.0785 9.14912 16.0785C10.6005 16.0785 11.9611 15.625 12.9589 14.8086L15.6802 17.5299C15.8616 17.7113 16.1337 17.802 16.3151 17.802C16.4966 17.802 16.7687 17.7113 16.9501 17.5299C17.3129 17.167 17.3129 16.6228 16.9501 16.2599L14.2288 13.448Z"
        fill="#B2BFCF"
      />
      <path
        d="M9.07062 14.1061C6.53077 14.1061 4.44446 12.1105 4.44446 9.57061C4.44446 7.03075 6.53077 4.94444 9.07062 4.94444C11.6105 4.94444 13.6968 7.03075 13.6968 9.57061C13.6968 12.1105 11.6105 14.1061 9.07062 14.1061Z"
        fill="#ECF2F9"
      />
    </svg>
    <svg
      v-else
      class="clear-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="clearQuery"
    >
      <path
        d="M14.7836 16.1953C15.1742 16.5857 15.8074 16.5856 16.1978 16.195C16.5883 15.8043 16.5881 15.1712 16.1975 14.7807L14.7836 16.1953ZM5.1836 3.77195C4.79298 3.38151 4.15982 3.38166 3.76938 3.77228C3.37895 4.16289 3.3791 4.79606 3.76971 5.18649L5.1836 3.77195ZM16.1975 14.7807L5.1836 3.77195L3.76971 5.18649L14.7836 16.1953L16.1975 14.7807Z"
        fill="#B2BFCF"
      />
      <path
        d="M16.1953 5.1836C16.5857 4.79298 16.5856 4.15982 16.195 3.76938C15.8043 3.37895 15.1712 3.3791 14.7807 3.76971L16.1953 5.1836ZM3.77195 14.7836C3.38151 15.1742 3.38166 15.8074 3.77228 16.1978C4.16289 16.5883 4.79606 16.5881 5.18649 16.1975L3.77195 14.7836ZM14.7807 3.76971L3.77195 14.7836L5.18649 16.1975L16.1953 5.1836L14.7807 3.76971Z"
        fill="#B2BFCF"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "SearchField",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    clearQuery() {
      this.query = "";
      this.$emit("search", "");
    },
  },
};
</script>

<style lang="scss">
.search-container {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: var(--color-grey-1);
  border: 1px solid var(--color-grey-2);
  border-radius: 2px;
  padding: 5px 8px;

  .search-field {
    all: unset;
    color: var(--color-grey-4);

    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 140%;

    &::placeholder {
      color: var(--color-grey-4);
    }
  }

  .search-icon {
  }

  .clear-icon {
    cursor: pointer;
  }
}
</style>
