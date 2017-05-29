<style>
.content-area {
    margin: 70px 120px 0px 120px;
}
.form-content {
    padding: 40px;
    background-color: #eff3f6;
}
.form-header {
    color: gray;
}
.header-border {
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
}
.margin-zero {
    margin: 0px;
}
.padding-top-25 {
    padding-top: 25px;
}
.half-area {
    width: 50%;
}
.full-area {
  width: 100%;
}
.uppercase {
  text-transform: uppercase;
}
.required::after {
  content: " *";
  color: red;
}
@media screen and (max-width: 768px) {
  .content-area {margin: 20px;}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
<template>
  <div id="app">
    <navigation-bar :user="user" :notifications="notifications"></navigation-bar>
    <transition name="fade">
        <router-view></router-view>
    </transition>
    <grey-footer></grey-footer>
  </div>
</template>

<script>
import styles from './assets/scss/main.sass';
import NavigationBar from './components/NavigationBar.vue';
import GreyFooter from './components/Footer.vue';

export default {
  name: 'app',
  data () {
    return {
      user: 'Wanderson Alves',
      notifications: 4,
    }
  },
  components: {
    NavigationBar,
    GreyFooter
  }
}
</script>
