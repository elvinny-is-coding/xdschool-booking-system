<script setup>
import NavHeader from './components/NavHeader.vue'
import NavFooter from './components/NavFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <NavHeader></NavHeader>
  <router-view></router-view>
  <NavFooter></NavFooter>
</template>
