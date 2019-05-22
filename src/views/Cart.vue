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
                <tr>
                  <td>1</td>
                  <td>Cappucino</td>
                  <td>Size</td>
                  <td>1</td>
                  <td>$3.50</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4"/>
                  <td>$3.50</td>
                </tr>
              </tfoot>
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
  methods: {
    openPayment() {      
      $('#myModal').modal('show');
    }
  }
};
</script>