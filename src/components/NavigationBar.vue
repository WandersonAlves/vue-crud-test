<style scoped>
.font-size {
    font-size: 1.2em;
}

.padding-right {
    padding-right: 8px;
}

.padding-left {
    padding-left: 8px;
}

.logo-bg {
    background-color: white;
    color: #003551;
    font-weight: bold;
    padding-left: 58px;
    padding-right: 58px;
    font-size: 1.5em;
    font-style: italic;
}

.exit-show {
  background-color: white;
  z-index: 99999;
  position: absolute;
  padding: 10px;
  height: 44px;
  width: 91px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.48);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.48);
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.48);
  left: 94%;
  cursor: pointer;
}

.white {
    color: white;
}

.carret {
    font-size: 0.7em;
    padding-left: 2px;
}

.sidebar {
    background-color: #4c5c66;
    width: 20%;
    height: 20rem;
    z-index: 99999;
    position: absolute;
}

.menu-list>li {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid #404040;
}

.menu-list>li>a {
    color: white;
}

.menu-list>li>a:hover {
    color: black;
}
</style>

<template>
<div id="navigation-bar">
    <nav class="nav">
        <div class="nav-left">
            <a class="nav-item logo-bg">LOGO</a>
            <a class="nav-item padding-right">
                <span class="icon white" v-on:click="caretRight=!caretRight; showSidebar=!showSidebar">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                  <i class="fa carret"
                     v-bind:class="{'fa-caret-right': caretRight, 'fa-caret-left': !caretRight}"
                     aria-hidden="true"></i>
                 </span>
            </a>
        </div>
        <div class="nav-right nav-menu">
            <a class="nav-item">
                <span class="icon">
                    <i class="fa fa-bell-o font-size" aria-hidden="true"><badge :counter="notifications"></badge></i>
                </span>
            </a>
            <a class="nav-item" v-on:click="caretDown=!caretDown; showExit=!showExit">
                <span class="icon padding-right">
                    <i class="fa fa-user" aria-hidden="true"></i>
                </span>
                <div class="is-hidden-touch">
                    {{user}}
                </div>
                <span class="icon padding-left">
                    <i class="fa fa-caret-down" v-bind:class="{'fa-caret-down': caretDown, 'fa-caret-up': !caretDown}" aria-hidden="true"></i>
                </span>
            </a>
        </div>
    </nav>
    <div class="sidebar" v-if="showSidebar">
        <ul class="menu-list">
            <li><a>Painel de Controle</a></li>
            <li><router-link :to="{ name: 'create'}">Movimentação de Pessoal</router-link></li>
            <li><a>Relatórios</a></li>
        </ul>
    </div>
    <div class="exit-show" v-if="showExit">
      <ul>
        <li @click="showExit=!showExit">
          Sair
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import Badge from './Badge.vue';

export default {
    name: 'NavigationBar',
    props: ['user', 'notifications'],
    components: {
        Badge: Badge
    },
    data() {
        return {
            caretRight: true,
            caretDown: true,
            showSidebar: false,
            showExit: false
        }
    }
}
</script>
