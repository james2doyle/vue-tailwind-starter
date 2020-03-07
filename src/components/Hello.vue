<template>
  <div class="hello-wrapper">
    <p class="p-2" v-text="message"></p>
    <div>
      <img src="../assets/logo.png" alt="Logo" width="50" class="mx-auto">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      message: 'Vue + Tailwind Starter',
    };
  },
};
</script>
