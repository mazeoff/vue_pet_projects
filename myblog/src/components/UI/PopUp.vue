<template>
  <transition name="fade" appear>
    <div class="popup" v-if="show" @click="hidePopUp">
      <div @click.stop class="popup__content">
          <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin"
export default {
    name: 'pop-up',
    mixins: [toggleMixin],
}
</script>

<style lang="scss" scoped>
.popup{
    z-index: 1;
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba($color: #000000, $alpha: 0.3);
    &__content{
        margin: auto 20px;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        flex-grow: 1;
        max-width: 500px;
    }
}
</style>