<template>
  <section class="modal">
    <div class="modal-background" @click="$emit('toggleModal')" />
    <div class="modal-card">
      <div class="modal-card-header">
        {{ selectedInvoice.id }}
      </div>
      <div class="modal-card-body">
        <div class="control">
          <label for="id" class="label">ID</label>
          <input
            type="text"
            id="id"
            class="field"
            :value="selectedInvoice.id"
            readonly
          />
        </div>
        <div class="control">
          <label for="amount" class="label">Amount</label>
          <input
            type="text"
            id="amount"
            class="field"
            :value="selectedInvoice.amount"
            readonly
          />
        </div>
        <div class="control">
          <label for="timePeriod" class="label">Date</label>
          <input
            type="text"
            id="timePeriod"
            class="field"
            :value="selectedInvoice.timePeriod"
          />
        </div>
        <div class="control">
          <label for="creditsUsed" class="label">Credits Used</label>
          <input
            type="text"
            id="creditsUsed"
            class="field"
            :value="selectedInvoice.creditsUsed"
            readonly
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modal",
  props: ["isOpen", "selectedInvoice"],
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;

  .modal-background {
    width: 100%;
    height: 100vh;
    background: var(--modal-background);
    opacity: 0.6;

    position: relative;
    cursor: pointer;
  }

  .modal-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 548px;

    background: var(--color-grey-white);
    border: 1px solid var(--color-grey-2);
    box-shadow: 0px 1px 3px rgba(0, 52, 102, 0.06),
      0px 1px 2px rgba(0, 52, 102, 0.12);
    border-radius: 2px;

    .modal-card-header {
      padding: 20px 24px;

      font-family: var(--font-secondary);
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 23px;

      color: var(--color-grey-9);

      box-shadow: 0px 1px 3px rgba(0, 52, 102, 0.06),
        0px 1px 2px rgba(0, 52, 102, 0.12);
    }

    .modal-card-body {
      padding: 28px 24px 20px 22px;
    }
  }
}

.control {
  margin-bottom: 27px;

  .label {
    display: block;
    margin-bottom: 8px;

    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: var(--color-grey-9);
  }

  .field {
    display: block;
    width: 100%;

    padding: 5px 8px;

    background: var(--color-grey-1);
    border: 1px solid var(--color-grey-2);
    box-shadow: inset 0px 1px 4px rgba(18, 24, 31, 0.07);
    border-radius: 2px;

    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: var(--color-grey-9);
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0);
    transform: translate(0%, 0%);
  }
  to {
    transform: scale(1);
    transform: translate(-50%, -50%);
  }
}
</style>
