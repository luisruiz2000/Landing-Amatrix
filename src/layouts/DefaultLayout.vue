<template>
  <div class="bg-primary default-layout-main">
    <div class="default-layout icons">
      <Navbar />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Home/Navbar/index.vue'
import Footer from '../components/Home/Footer/index.vue'

export default {
  name: 'DefaultLayout',
  
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

.default-layout-main{
  background-image: url(../assets/images/banner/bg-banner.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100vw 110vh;
}

.default-layout {
  width: 100%;
  margin: auto;
}

@media (min-width: 1200px) {
  .default-layout {
    width: 1200px;
    margin: auto;
  }
}
</style>