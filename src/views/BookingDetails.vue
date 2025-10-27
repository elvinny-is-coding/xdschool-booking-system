<script setup>
const bookingDetails = {
  facilityName: 'Main Auditorium',
  dateAndTime: 'Saturday, October 25, 2024, 8:00 AM - 12:00 PM',
  rentalFee: 200.0,
  total: 200.0,
}
</script>

<template>
  <main class="bg-gray-50 py-12 md:py-20">
    <div class="container mx-auto max-w-6xl px-4">
      <div class="mb-10">
        <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Booking Summary</h1>
        <p class="text-lg text-gray-600">
          Please review your booking details and enter your payment information to confirm.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div class="bg-white p-8 rounded-2xl shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Booking Details</h2>

          <div class="space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Facility Name</span>
              <span class="font-medium text-gray-900">{{ bookingDetails.facilityName }}</span>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-gray-600">Date and Time</span>
              <span class="font-medium text-gray-900 text-right">{{
                bookingDetails.dateAndTime
              }}</span>
            </div>

            <div class="flex justify-between items-center">
              <span class="text-gray-600">Rental Fee</span>
              <span class="font-medium text-gray-900"
                >${{ bookingDetails.rentalFee.toFixed(2) }}</span
              >
            </div>

            <hr class="border-gray-200" />

            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold text-gray-900">Total</span>
              <span class="text-lg font-bold text-blue-700"
                >${{ bookingDetails.total.toFixed(2) }}</span
              >
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Payment Information</h2>

          <div class="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <i class="bi bi-lock-fill text-gray-500"></i>
            Your payment information is secure.
          </div>

          <form action="#" method="POST" class="space-y-5">
            <div>
              <label for="card-number" class="block text-sm font-medium text-gray-700 mb-1">
                Credit Card Number
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="•••• •••• •••• ••••"
                  class="w-full px-4 py-3 pl-12 rounded-lg bg-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="bi bi-credit-card"></i>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expiration-date"
                  name="expiration-date"
                  placeholder="MM/YY"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label for="cvv" class="block text-sm font-medium text-gray-700 mb-1"> CVV </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="•••"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label for="name-on-card" class="block text-sm font-medium text-gray-700 mb-1">
                Name on Card
              </label>
              <input
                type="text"
                id="name-on-card"
                name="name-on-card"
                placeholder="John Doe"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <router-link
                type="submit"
                class="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors mt-2"
                to="/bdc"
              >
                Confirm Booking
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
