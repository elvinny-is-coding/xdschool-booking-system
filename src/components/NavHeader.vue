<script setup></script>

<template>
  <header
    class="flex justify-center py-6 border-b border-gray-300 navbar navbar-expand-lg bg-body-tertiary"
  >
    <div class="container flex justify-between items-center">
      <!--  -->
      <router-link class="flex">
        <i class="bi bi-mortarboard text-blue-900 text-5xl"></i>
        <span class="ml-6"><h1 class="font-bold text-blue-900">XD Booking</h1></span>
      </router-link>
      <!--  -->
      <nav class="flex items-center gap-8">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link
          class="bg-blue-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-800 transition-colors"
          to="/bsf"
          >Book Now</router-link
        >
      </nav>
      <!--  -->
    </div>
  </header>
</template>
