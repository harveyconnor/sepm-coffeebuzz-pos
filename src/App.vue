<template>
  <div id="app">
    <Layout>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue';

export default {
  name: 'app',
  components: {
    Layout
  },
};
</script>
