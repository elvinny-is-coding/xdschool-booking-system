<template>
  <main class="flex flex-col items-center justify-center">
    <section class="container my-16 relative">
      <div class="bg-hero min-h-128 rounded-4xl"></div>

      <div class="absolute inset-0 bg-black/60 rounded-4xl"></div>
      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 z-10"
      >
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Book Our Facilities, Empower Our Students.
        </h1>

        <p class="text-lg mb-6 max-w-2xl">
          Rent our modern sports fields, auditoriums, and classrooms on weekends. Every booking
          helps fund remedial classes and financial aid for deserving students.
        </p>

        <router-link
          class="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-colors"
          to="/bsf"
        >
          Book Now
        </router-link>
      </div>
    </section>
    <!--  -->
    <section class="container mb-16 relative text-center">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Booking our facilities is simple and straightforward. Follow these three easy steps to
          secure your space and contribute to a great cause.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
          <div class="bg-blue-100 rounded-full p-6 inline-block mb-4">
            <i class="bi bi-search text-3xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Browse and Discover</h3>
          <p class="text-gray-600">
            Explore our range of facilities and check their availability for your desired dates.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
          <div class="bg-blue-100 rounded-full p-4 inline-block mb-4">
            <i class="bi bi-calendar text-3xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Select and Schedule</h3>
          <p class="text-gray-600">Choose the perfect time slot for your event or activity.</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
          <div class="bg-blue-100 rounded-full p-4 inline-block mb-4">
            <i class="bi bi-check-circle text-3xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Book and Empower</h3>
          <p class="text-gray-600">
            Complete the booking process to finalize your rental and make a positive impact.
          </p>
        </div>
      </div>
    </section>
    <!--  -->

    <section class="w-full h-full text-white py-16 justify-center flex">
      <div class="container mx-auto max-w-6xl px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div class="bg-yellow-50/50 p-6 rounded-2xl shadow-md">
            <img
              src="../../public/bg-donate-milestone.jpeg"
              alt="Students studying together"
              class="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Your Rental, Their Future.
            </h2>

            <p class="text-lg text-gray-700 mb-8">
              Your booking directly contributes to our goal of raising $1,000 each month to provide
              essential remedial classes and financial aid to 10 of our most deserving students. See
              how your contribution makes a difference.
            </p>

            <div>
              <div class="w-full bg-gray-200 rounded-full h-4">
                <div class="bg-yellow-400 h-4 rounded-full" :style="{ width: 50 + '%' }"></div>
              </div>

              <div class="flex justify-between items-center mt-2">
                <span class="text-sm font-medium text-gray-700"> Raised: $500 </span>
                <span class="text-sm font-medium text-gray-700"> Goal: $1000 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="w-full h-full bg-blue-950 text-white py-16 justify-center flex">
      <div class="container flex flex-col items-center text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Book Our Facilities, Empower Our Students.
        </h1>

        <p class="text-lg mb-6 max-w-2xl">
          Rent our modern sports fields, auditoriums, and classrooms on weekends. Every booking
          helps fund remedial classes and financial aid for deserving students.
        </p>

        <router-link
          class="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-colors"
          to="/bsf"
        >
          Book Now
        </router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
.bg-hero {
  background: url(../../public/bg-hero.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
