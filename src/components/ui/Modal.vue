<template>
  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title"><slot name="title" /></h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <slot name="body" />
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <slot name="footer" />
        </div>

      </div>
    </div>
  </div>
</template>
