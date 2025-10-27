<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'What facilities are available for rent?',
    answer:
      'We offer a wide range of facilities including the main auditorium, football fields, tennis courts, swimming pool, and several classrooms for workshops or meetings.',
  },
  {
    question: 'How do I book a facility?',
    answer:
      'You can book a facility by navigating to the "Book Now" page, selecting your desired facility, choosing an available date and time slot, and completing the payment process.',
  },
  {
    question: 'What are the payment options?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express) through our secure online payment portal. All payments are processed immediately to confirm your booking.',
  },
  {
    question: 'How are the funds used?',
    answer:
      '100% of the rental proceeds go directly into our student empowerment fund, which pays for remedial classes, financial aid, and extracurricular activities for deserving students.',
  },
])

const openFaqIndex = ref(null)

function toggleFaq(index) {
  if (openFaqIndex.value === index) {
    openFaqIndex.value = null
  } else {
    openFaqIndex.value = index
  }
}
</script>

<template>
  <main class="bg-gray-50 py-16 md:py-24">
    <div class="container mx-auto max-w-6xl px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-3">Contact Us</h1>
        <p class="text-lg text-gray-600">
          We're here to help. Get in touch for booking support or general inquiries.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
          <form class="space-y-6">
            <div>
              <label for="full-name" class="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div class="space-y-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <ul class="space-y-5">
              <li class="flex items-center">
                <i class="bi bi-envelope-fill text-xl text-blue-600 mr-4"></i>
                <span class="text-gray-700">hello@thexdschool.com</span>
              </li>
              <li class="flex items-center">
                <i class="bi bi-telephone-fill text-xl text-blue-600 mr-4"></i>
                <span class="text-gray-700">+6010 650 0838</span>
              </li>
              <li class="flex items-center">
                <i class="bi bi-geo-alt-fill text-xl text-blue-600 mr-4"></i>
                <span class="text-gray-700"
                  >Xtraordinary Digital (XD) School Campus, No. 6, Jalan SS 1/32, Kampung Tunku,
                  47300 Petaling Jaya, Selangor</span
                >
              </li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>

            <div class="space-y-4">
              <div
                v-for="(faq, index) in faqs"
                :key="faq.question"
                class="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  @click="toggleFaq(index)"
                  class="flex justify-between items-center w-full text-left p-5 hover:bg-gray-50 transition-colors"
                >
                  <span class="font-medium text-gray-800">{{ faq.question }}</span>
                  <i
                    class="bi bi-chevron-down text-blue-600 transition-transform duration-200"
                    :class="{ 'rotate-180': openFaqIndex === index }"
                  ></i>
                </button>

                <transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-screen"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 max-h-screen"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div v-if="openFaqIndex === index" class="p-5 pt-0 text-gray-700">
                    <p>{{ faq.answer }}</p>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
