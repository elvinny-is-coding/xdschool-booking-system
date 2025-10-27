<template>
  <div class="container mx-auto px-4 flex flex-col justify-center items-center text-center my-16">
    <p class="text-blue-600 font-bold mb-2 text-sm uppercase tracking-wider">About Us</p>
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
      Our Story: More Than Just a Rental
    </h1>
    <p class="mb-12 max-w-2xl text-lg text-gray-600">
      We're a community-driven initiative dedicated to bridging the gap between our school's
      resources and our students' needs.
    </p>

    <section class="w-full md:w-3/4 border border-gray-200 rounded-lg p-6 text-left mb-12">
      <h4 class="text-xl font-bold mb-3 text-gray-900">Our Mission</h4>
      <p class="text-gray-700">
        Our mission is to provide simple, affordable access to our school's excellent facilities for
        the wider community. We strive to create a seamless booking experience where every rental
        directly contributes to vital student support programs, such as remedial classes and
        financial aid.
      </p>
    </section>

    <section class="w-full md:w-3/4 border border-gray-200 rounded-lg p-6 text-left mb-12">
      <h4 class="text-xl font-bold mb-3 text-gray-900">Our Vision</h4>
      <p class="text-gray-700">
        We envision a self-sustaining ecosystem where our school's facilities become a vibrant hub
        for community activities. Through this platform, we aim to foster a stronger bond between
        the school and its neighbours, all while generating a stable funding stream to ensure every
        student has the resources they need to succeed.
      </p>
    </section>

    <section
      class="w-full md:w-3/4 border border-gray-200 rounded-lg p-6 mb-12 bg-gray-100 text-left"
    >
      <h4 class="text-xl font-bold mb-3 text-gray-900">Have Questions?</h4>
      <p class="text-gray-700 mb-4">
        Whether you have a question about a specific facility, need help with a booking, or want to
        learn more about our student programs, our team is ready to help.
      </p>

      <router-link
        to="/contact"
        class="inline-block bg-blue-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Get in Touch
      </router-link>
    </section>
  </div>
</template>
