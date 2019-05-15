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
    <Modal>
      <template v-slot:title>{{item}}</template>
      <template v-slot:body>Hehhe</template>
      <template v-slot:footer>
        <div class="col-4">
          <button type="button" class="btn btn-danger btn-block" data-dismiss="modal">Cancel</button>
        </div>
        <div class="col-8">
          <button type="button" class="btn btn-primary btn-block" data-dismiss="modal">Confirm</button>
        </div>
      </template>      
    </Modal>
  </Layout>
</template>

<script>
import Card from '@/components/ui/Card';
import Layout from '@/components/Layout';
import Modal from '@/components/ui/Modal';

export default {
  name: 'coffee',
  components: {
    Card,
    Layout,
    Modal
  },
  data() {
    return {
      item: ''
    }
  },
  methods: {
    openItem(item) {
      this.item = item;
      $('#myModal').modal('show');
    }
  }
}

</script>
