<template>
  <Layout>
    <div class="row mb-3">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Order</h2>
            <table class="table table-bordered table-striped">
              <thead class="thead-light">
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Size</td>
                  <td>Quantity</td>
                  <td>Price</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in items" :key="i">
                  <td>{{i+1}}</td>
                  <td>{{item.item}}</td>
                  <td>{{item.size}}</td>
                  <td>{{item.quantity}}</td>
                  <td>${{ item.size === 'L' ? 4.5 * item.quantity : item.size === 'M' ? 4 * item.quantity : 3.5 * item.quantity }}</td>
                </tr>
              </tbody>
            </table>
            <div class="row">
              <div class="col-4">
                <a href="#" class="btn btn-danger btn-block">
                  Cancel order
                </a>
              </div>
              <div class="col-8">
                <button @click="openPayment()" class="btn btn-primary btn-block">
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal>
      <template v-slot:title>Payment</template>
      <template v-slot:body>Blah</template>
      <template v-slot:footer>
          <div>
            <button type="button" class="btn btn-primary btn-block" data-dismiss="modal">Submit Payment</button>
          </div>
      </template>
    </Modal>

  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import Modal from '@/components/ui/Modal';

export default {
  name: 'cart',
  components: {
    Layout,
    Modal
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.items.push({
      item: this.$route.params.item,
      quantity: this.$route.params.quantity,
      size: this.$route.params.size,
    })
  },
  methods: {
    openPayment() {      
      $('#myModal').modal('show');
    }
  }
};
</script>