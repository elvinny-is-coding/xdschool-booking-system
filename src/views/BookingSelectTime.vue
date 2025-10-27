<script setup>
import { ref, computed } from 'vue'
import { Calendar } from 'v-calendar'

const selectedDate = ref(new Date(2025, 9, 27))

const timeSlots = ref([
  { time: '8:00 AM', disabled: false },
  { time: '8:30 AM', disabled: false },
  { time: '9:00 AM', disabled: true },
  { time: '9:30 AM', disabled: false },
  { time: '10:00 AM', disabled: false },
  { time: '10:30 AM', disabled: true },
  { time: '11:00 AM', disabled: false },
  { time: '11:30 AM', disabled: false },
])

const selectedTime = ref('9:30 AM - 10:00 AM')
const selectedFacility = ref('Gymnasium')

const formattedDate = computed(() => {
  if (!selectedDate.value) return 'N/A'
  return selectedDate.value.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

function selectTime(time) {
  selectedTime.value = `${time} - ...`
}
</script>

<template>
  <section class="bg-white py-16 md:py-24">
    <div class="container mx-auto max-w-7xl px-4">
      <h2 class="text-4xl font-extrabold text-blue-950 mb-12">
        Book Our Facilities & Support Our Students
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div class="space-y-8">
          <div class="bg-blue-50 rounded-lg p-6">
            <div class="flex justify-between items-center mb-2">
              <span class="font-semibold text-gray-700">Monthly Goal</span>
              <span class="font-bold text-blue-950">$1,000</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
            </div>
            <p class="text-sm text-gray-600">
              $750 raised to fund remedial classes and financial aid for 10 students.
            </p>
          </div>

          <Calendar
            v-model="selectedDate"
            :attributes="[{ key: 'today', dates: selectedDate, highlight: true }]"
            :rows="1"
            :step="1"
            is-required
            expanded
          />
        </div>

        <div class="space-y-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              Select a Time Slot (8 AM - 12 PM)
            </h3>
            <div class="grid grid-cols-3 gap-3">
              <button
                v-for="slot in timeSlots"
                :key="slot.time"
                @click="selectTime(slot.time)"
                :disabled="slot.disabled"
                :class="[
                  'py-3 px-2 rounded-lg transition-colors',
                  slot.disabled
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                  selectedTime.startsWith(slot.time) ? '!bg-blue-600 !text-white' : '',
                ]"
              >
                {{ slot.time }}
              </button>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-6 space-y-4">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Booking Summary</h3>

            <div class="flex justify-between items-center">
              <span class="text-gray-600">Date:</span>
              <span class="font-semibold text-gray-900">{{ formattedDate }}</span>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-gray-600">Time:</span>
              <span class="font-semibold text-gray-900">{{ selectedTime }}</span>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-gray-600">Facility:</span>
              <span class="font-semibold text-gray-900">{{ selectedFacility }}</span>
            </div>

            <router-link
              class="bg-orange-500 text-white font-bold rounded-lg px-4 py-3 hover:bg-orange-600 transition-colors"
              to="/bd"
            >
              Confirm Booking
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
