<template>
  <Layout>
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-3">
        <Card :handleclick="() => openItem('Cappucino')">Cappucino</Card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <Card :handleclick="() => openItem('Latte')">Latte</Card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <Card :handleclick="() => openItem('Hot Chocolate')">Hot Chocolate</Card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <Card :handleclick="() => openItem('Espresso')">Espresso</Card>
      </div>
    </div>
  </Layout>
</template>

<script>
import Card from '@/components/ui/Card';
import Layout from '@/components/Layout.vue';

export default {
  name: 'coffee',
  components: {
    Card,
    Layout
  },
  methods: {
    openItem: (item) => {
      alert(item)
    }
  }
}

</script>
