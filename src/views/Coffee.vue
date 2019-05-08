<template>
  <div class="row">
    <div class="col-xl-3 col-sm-6 mb-3">
      <Card :handleclick="() => openItem('Cappucino')">Cappucino</Card>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
      <div class="card">
        <div class="card-body">
          <Card :handleclick="() => openItem('Latte')">Latte</Card>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
      <div class="card">
        <div class="card-body">
          <Card :handleclick="() => openItem('Hot Chocolate')">Hot Chocolate</Card>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
      <div class="card">
        <div class="card-body">
          <Card :handleclick="() => openItem('Espresso')">Espresso</Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/ui/Card';

export default {
  name: 'coffee',
  components: {
    Card
  },
  methods: {
    openItem: (item) => {
      alert(item)
    }
  }
}

</script>
