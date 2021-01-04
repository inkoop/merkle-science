<template>
  <div class="toggle-container">
    <div
      class="toggle-container__bar"
      :class="{
        first: selectedOption === 'LimitOffset',
        second: selectedOption === 'Infinite',
      }"
    />
    <div
      class="toggle-container__first"
      :class="{ active: selectedOption === 'LimitOffset' }"
      @click="selectOption('LimitOffset')"
    >
      Limit Offset
    </div>
    <div
      class="toggle-container__last"
      :class="{ active: selectedOption === 'Infinite' }"
      @click="selectOption('Infinite')"
    >
      Infinite
    </div>
  </div>
</template>

<script>
export default {
  name: "ToggleField",
  data() {
    return {
      options: ["LimitOffset", "Infinite"],
      selectedOption: "LimitOffset",
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style lang="scss">
@mixin font-style {
  font-family: var(--font-secondary);
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  text-transform: capitalize;
  z-index: 2;

  cursor: pointer;

  color: var(--color-grey-9);
  &.active {
    color: var(--color-grey-white);
    text-shadow: 0px 1px 3px rgba(0, 52, 102, 0.06),
      0px 1px 2px rgba(0, 52, 102, 0.12);
  }
}

.toggle-container {
  background: var(--color-grey-white);
  margin-left: 16px;
  padding: 0px 13px;

  position: relative;
  height: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 165px;

  border: 1px solid var(--color-grey-2);
  box-shadow: 0px 1px 3px rgba(0, 52, 102, 0.06),
    0px 1px 2px rgba(0, 52, 102, 0.12);
  border-radius: 1000px;

  &__bar {
    background: var(--color-blue-600);
    box-shadow: 0px 1px 3px rgba(0, 52, 102, 0.06),
      0px 1px 2px rgba(0, 52, 102, 0.12);
    border-radius: 100px;

    position: absolute;
    z-index: 1;

    height: 26px;

    transition: all 0.3s ease-out;

    &.first {
      left: 5px;
      width: 110px;
    }
    &.second {
      left: 113px;
      width: 73px;
    }
  }

  &__first {
    @include font-style;
  }
  &__last {
    @include font-style;
  }
}
</style>
