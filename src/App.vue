<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200">
    <div class="flex-shrink-0 py-12 text-center">
      <Hello></Hello>
      <div class="mt-2">
        <a href="https://github.com/james2doyle/vue-tailwind-starter" class="text-sm font-semibold text-gray-600 hover:underline">
          Source on GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from 'Components/Hello.vue';

export default {
  name: 'App',
  components: {
    Hello,
  },
};
</script>

<style>
  @import './styles/style.css';
</style>
