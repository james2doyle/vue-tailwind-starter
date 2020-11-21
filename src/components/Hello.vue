<template>
  <div class="hello-wrapper">
    <p class="p-2" v-text="message"></p>
    <div>
      <img src="../assets/logo.png" :alt="alt" width="50" class="mx-auto">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  setup() {
    return {
      alt: 'Logo',
      message: 'Vue + Tailwind Starter',
    };
  }
};
</script>
