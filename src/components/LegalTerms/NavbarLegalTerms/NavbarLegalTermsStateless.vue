<template>
  <section class="navbar-legal-terms bg-primary py-4 px-2">
    <div :class="`d-flex align-items-center justify-content-between ${ !isMobile && 'mb-4' }`">
      <img v-if="isMobile && !showNavbar" src="../../../assets/icons/navbar/menu.svg" alt="menu" class="icon-menu cursor-pointer" @click="handleShowNavbar()" />
      <img v-if="isMobile && showNavbar" src="../../../assets/icons/navbar/close.svg" alt="close" class="icon-close cursor-pointer" @click="handleShowNavbar()" />
      <img src="../../../assets/images/logos/logo.png" alt="logo" class="logo cursor-pointer" @click="navigateToHome()" />
    </div>

    <nav
      v-if="showNavbar"
      :class="`bg-primary navbar-legal-terms__links d-flex align-items-center justify-content-${ isMobile ? 'start' : 'center' } flex-column ${ isMobile && 'p-4' }`"
    >
    </nav>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavbarLegalTerms',

  props: {
    isMobile: {
      type: Boolean,
      required: true
    },
    showNavbar: {
      type: Boolean,
      required: true
    },
    buttons: {
      type: Array,
      required: true
    },
    navigateToHome: {
      type: Function,
      required: true
    },
    setRouteSelected: {
      type: Function,
      required: true
    },
    handleShowNavbar: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="css">
.navbar-legal-terms {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15rem;
}

@media (max-width: 767px) {
  .navbar-legal-terms {
    position: absolute;
    height: 6rem;
    width: 100%;
  }

  .navbar-legal-terms__links {
    position: absolute;
    top: 6rem;
    left: 0;
    height: 832%;
    width: 100%;
  }
}
</style>