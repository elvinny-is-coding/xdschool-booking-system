<script setup>
const booking = {
  reference: '#BK987654',
  facility: 'Main Hall',
  date: 'Saturday, August 24, 2024',
  time: '8:00 AM - 12:00 PM',
}
</script>

<template>
  <main class="bg-gray-50 py-16 md:py-24">
    <div class="container mx-auto max-w-4xl px-4">
      <div class="mb-6">
        <h1 class="text-4xl md:text-5xl font-extrabold text-green-600 mb-3">Booking Confirmed!</h1>
        <p class="text-lg text-gray-700">
          Your Booking Reference:
          <span class="font-semibold text-gray-900">{{ booking.reference }}</span>
        </p>
      </div>

      <div class="bg-white p-8 rounded-lg shadow-md mb-8">
        <ul class="space-y-6">
          <li class="flex items-center pb-6 border-b border-gray-200">
            <i class="bi bi-building text-2xl text-blue-700 mr-4"></i>
            <span class="text-gray-600 mr-4">Facility</span>
            <span class="font-semibold text-gray-900 ml-auto">{{ booking.facility }}</span>
          </li>

          <li class="flex items-center pb-6 border-b border-gray-200">
            <i class="bi bi-calendar-event text-2xl text-blue-700 mr-4"></i>
            <span class="text-gray-600 mr-4">Date</span>
            <span class="font-semibold text-gray-900 ml-auto">{{ booking.date }}</span>
          </li>

          <li class="flex items-center">
            <i class="bi bi-clock text-2xl text-blue-700 mr-4"></i>
            <span class="text-gray-600 mr-4">Time</span>
            <span class="font-semibold text-gray-900 ml-auto">{{ booking.time }}</span>
          </li>
        </ul>
      </div>

      <p class="text-gray-700 mb-8">
        Thank you for your booking! A confirmation email with all the details has been sent to your
        registered email address.
      </p>

      <div class="bg-white p-8 rounded-lg shadow-md mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold text-blue-900 mb-3">
              Making a Difference, One Booking at a Time
            </h3>
            <p class="text-gray-700">
              Your booking helps us reach our goal of raising $1,000 monthly to provide remedial
              classes and financial aid for 10 disadvantaged students. You're helping us create a
              brighter future for them!
            </p>
          </div>
          <div class="text-left md:text-right">
            <button
              class="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-4 mb-12">
        <button
          class="flex items-center justify-center bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <i class="bi bi-printer text-lg mr-2"></i>
          Print Confirmation
        </button>
        <button
          class="flex items-center justify-center bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
        >
          <i class="bi bi-calendar-google text-lg mr-2"></i>
          Add to Google Calendar
        </button>
        <button
          class="flex items-center justify-center bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
        >
          <i class="bi bi-calendar-plus text-lg mr-2"></i>
          Add to iCal
        </button>
      </div>

      <footer class="text-center">
        <nav class="flex justify-center gap-6 text-sm text-gray-600">
          <router-link to="/" class="hover:underline">Home</router-link>
          <router-link to="/contact" class="hover:underline">Contact Us</router-link>
          <router-link to="/terms" class="hover:underline">Terms & Conditions</router-link>
        </nav>
      </footer>
    </div>
  </main>
</template>
