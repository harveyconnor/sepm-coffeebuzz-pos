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
      <template v-slot:body>

        <div >
          <form class="needs-validation" novalidate>
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                <label class="custom-control-label" for="credit">Credit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
                <label class="custom-control-label" for="debit">Debit card</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
                <label class="custom-control-label" for="paypal">Paypal</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required>
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-expiration">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>
          </form>
        </div>


      </template>
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