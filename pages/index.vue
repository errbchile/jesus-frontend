import fonts from '../public/fonts/fonts.css'

<script setup>
// SEO configuration:
useHead({
  title: 'Vibe Adventures',
  meta: [
    { name: 'description', content: 'Website for traveling and tours.' }
  ],
})
</script>

<template>
  <div class="overflow-hidden">
    <div class="h-[36rem] bg-[url('/images/hero-img.jpg')] bg-[center_top_145rem] items-center flex justify-center">
      <div  class="">
        <h1 class="text-white text-5xl font-bold" style="font-family: 'Canaro';">Adventures. Booked. Easy.</h1>
        <p class="text-white text-[1.5rem] justify-center flex font-light" style="font-family: 'Interstate';">Choose among 30,000+  multi-day trips around the world.</p>
        <p class="text-white text-md justify-center flex" style="font-family: 'Canaro';">How It Works?</p>
      </div>

    </div>
    <div class="bg-[#F8FCF6] py-16">
      <div class="lg:max-w-[68rem] mx-auto py-16">
        <div class="font-light grid lg:grid-cols-2 grid-cols-1 gap-10 flex items-center" style="font-family: 'Interstate';">
          <div>
            <img class="w-60 " src="/images/vibeNobackground.png" alt="">
            <p class="w-[20rem] tracking-wide mt-8 text-lg">Your trusted travel agency for extraordinary adventures organized by seasoned local tour organizers.</p>
          </div>
          <div class="w-[31rem]"><img src="/images/mountain.png" alt=""></div>
        </div>
        <h2 class="font-semibold text-3xl" style="font-family: 'Canaro';">Why <span class="text-[#82cf45]" style="font-style: italic;">Vibe Adventures?</span></h2>
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-2 my-9 font-light" style="font-family: 'Interstate';">
          <div>
            <img class="mb-3" src="/images/top-tours.png" alt="">
            <span class="font-semibold text-[#82cf45]" style="font-family: 'Canaro';">Top tours</span>
            <p class="mt-3">Our rigorous screening process guarantees that you will choose among the finest tours and travel packages worldwide.</p>
          </div>
          <div>
            <img class="mb-3"  src="/images/technology.png" alt="">
            <span class="font-semibold text-[#82cf45]" style="font-family: 'Canaro';">Technology</span>
            <p class="mt-3">Our rigorous screening process guarantees that you will choose among the finest tours and travel packages worldwide.</p>
          </div>
          <div>
            <img class="mb-3"  src="/images/wide-selection.png" alt="">
            <span class="font-semibold text-[#82cf45]" style="font-family: 'Canaro';">Wide selection</span>
            <p class="mt-3">Our rigorous screening process guarantees that you will choose among the finest tours and travel packages worldwide.</p>
          </div>
          <div>
            <img class="mb-3"  src="/images/easy-booking.png" alt="">
            <span class="font-semibold text-[#82cf45]" style="font-family: 'Canaro';">Easy booking</span>
            <p class="mt-3">Our rigorous screening process guarantees that you will choose among the finest tours and travel packages worldwide.</p>
          </div>

        </div>
      </div>
    </div>
    <div class="lg:max-w-[68rem] mx-auto py-16">
      <h2 class="font-semibold text-3xl" style="font-family: 'Canaro';">Top <span class="text-[#82cf45]" style="font-style: italic;">Destinations</span></h2>
    </div>
  </div>


</template>









