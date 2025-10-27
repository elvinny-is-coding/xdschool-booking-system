<script setup>
import { ref } from 'vue'

const facilities = ref([
  {
    name: 'Swimming Pool',
    availability: '(1 available)',
    description: 'Our Olympic-sized pool is perfect for training or recreational swimming.',
    image: '../../public/bg-swimming-pool.jpeg',
  },
  {
    name: 'Football Fields',
    availability: '(2 available)',
    description: 'Well-maintained fields suitable for matches and training sessions.',
    image: '../../public/bg-football-field.jpeg',
  },
  {
    name: 'Tennis Courts',
    availability: '(3 available)',
    description: 'Enjoy a game on our pristine courts, with Slazenger tennis balls included.',
    image: '../../public/bg-tennis-court.webp',
  },
  {
    name: 'Volleyball Courts',
    availability: '(3 available)',
    description: 'Book a court for a fun and energetic game of volleyball.',
    image: '../../public/bg-volleyball-court.jpg',
  },
])
</script>

<template>
  <section class="bg-white py-16 md:py-24">
    <div class="container mx-auto max-w-7xl px-4">
      <h2 class="text-4xl font-extrabold text-blue-950 mb-12">Book Our Facilities</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="facility in facilities"
          :key="facility.name"
          class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
        >
          <img :src="facility.image" :alt="facility.name" class="w-full h-48 object-cover" />

          <div class="p-6 grow flex flex-col">
            <h3 class="text-xl font-semibold text-gray-900">{{ facility.name }}</h3>
            <span class="block text-sm text-gray-500 mb-2">{{ facility.availability }}</span>

            <p class="text-gray-700 mb-6 grow">
              {{ facility.description }}
            </p>

            <router-link
              to="/bst"
              class="inline-block text-center bg-blue-100 text-blue-800 font-semibold py-2 px-5 rounded-lg hover:bg-blue-200 transition-colors"
            >
              Select
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
