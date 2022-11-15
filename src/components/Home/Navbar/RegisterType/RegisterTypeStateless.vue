<template>
  <select v-model="currentType" :class="`language-switcher ${ isMobile && 'my-2' }`" @change="switchLanguage($event)">
    <option  class="language-switcher-item" value="virtual">Virtual</option>
    <option  class="language-switcher-item" value="real">Real</option>
  </select>
</template>

<script>
export default {
  name: 'RegisterTypeStateless',

  props: {
    isMobile: {
      type: Boolean,
      required: true
    },
    switchLanguage: {
      type: Function,
      required: true
    },
    currentType: {
      type: String,
      required: true
    }
  }
}
</script>