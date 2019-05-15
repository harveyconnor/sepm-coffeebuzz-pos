<template>
  <Layout>
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-3">
        <Card :handleclick="() => openItem('Ham and Cheese')">Ham and Cheese</Card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <Card :handleclick="() => openItem('Rueban')">Rueban</Card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <Card :handleclick="() => openItem('Salad')">Salad</Card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-3">
        <Card :handleclick="() => openItem('Egg & Lettuce')">Egg & Lettuce</Card>
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
