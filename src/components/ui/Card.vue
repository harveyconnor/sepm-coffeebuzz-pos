<template>
  <div class="card card-clickable" @click="handleclick">
    <div class="card-body">
      <div class="mr-5"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: [
    'handleclick'
  ]
}
</script>