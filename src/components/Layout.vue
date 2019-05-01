<template>
  <div>
    <Navbar />
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper">
        <div class="container-fluid">
          <slot />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
};
</script>
