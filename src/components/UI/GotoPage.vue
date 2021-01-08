<template>
  <div class="goto-page-container">
    <form @submit="handleSubmit">
      <span class="caption">Go to Page</span>
      <input type="number" class="field" v-model="page" required />
      <button class="button">
        <span>Go</span>
        <span class="icon">
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_dd)">
              <path
                d="M12.134 10.858L10.856 9.58L12.08 8.356L12.908 7.654L12.89 7.582L11.36 7.672H3.494V5.764H11.36L12.89 5.854L12.908 5.782L12.08 5.08L10.856 3.856L12.134 2.578L16.274 6.718L12.134 10.858Z"
                fill="#FDFEFF"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd"
                x="0.493988"
                y="0.578003"
                width="18.78"
                height="14.28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0.203922 0 0 0 0 0.4 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0.203922 0 0 0 0 0.4 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow"
                  result="effect2_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "GotoPage",
  props: ["currentPage", "totalPages"],
  data() {
    return {
      page: this.$props.currentPage + 1,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit("changePage", this.page - 1);
    },
  },
};
</script>

<style lang="scss">
.goto-page-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .caption {
    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140%;

    color: var(--color-grey-5);
    margin-right: 12px;
  }

  .field {
    background: var(--color-grey-1);

    max-width: 47px;
    padding: 5px 8px;
    margin-right: 12px;
    border: 1px solid var(--color-grey-2);
    box-shadow: inset 0px 1px 4px rgba(18, 24, 31, 0.07);
    border-radius: 2px;

    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    color: var(--color-grey-9);

    outline: none;
  }

  .button {
    cursor: pointer;
    background: var(--color-blue-600);

    box-shadow: 0px 3px 6px rgba(0, 52, 102, 0.05),
      0px 2px 4px rgba(0, 52, 102, 0.1);
    border-radius: 2px;

    padding: 4px 10px;
    border: none;

    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;

    color: var(--color-grey-white);

    text-shadow: 0px 1px 3px rgba(0, 52, 102, 0.06),
      0px 1px 2px rgba(0, 52, 102, 0.12);

    .icon svg {
      transform: translateY(2px) translateX(3px);
    }
  }
}
</style>
