<script setup>
import { ref } from 'vue'

var currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="bg-blue-50 text-gray-800 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <i class="bi bi-mortarboard text-blue-900 text-3xl"></i>
            <span class="ml-3 text-xl font-bold">School Facilities Booking</span>
          </div>
          <p class="text-gray-600">Rent our facilities and empower our students.</p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Navigation
          </h3>
          <nav>
            <ul class="space-y-2">
              <li>
                <router-link to="/" class="text-gray-600 hover:text-gray-900">Home</router-link>
              </li>

              <li>
                <router-link to="/about" class="text-gray-600 hover:text-gray-900"
                  >About Us</router-link
                >
              </li>
              <li>
                <router-link to="/contact" class="text-gray-600 hover:text-gray-900"
                  >Contact</router-link
                >
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
          <nav>
            <ul class="space-y-2">
              <li>
                <router-link to="/privacy" class="text-gray-600 hover:text-gray-900"
                  >Privacy Policy</router-link
                >
              </li>
              <li>
                <router-link to="/terms" class="text-gray-600 hover:text-gray-900"
                  >Terms of Service</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <hr class="my-8 border-gray-200" />

      <div class="text-center text-gray-500">
        &copy; {{ currentYear }} School Facilities Booking. All rights reserved.
      </div>
    </div>
  </footer>
</template>
