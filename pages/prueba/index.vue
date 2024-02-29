<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-extrabold text-xl"> Nuxt buscador </NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="bg-green-500 text-white py-2 px-3 rounded-md">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">

      <section class="hero-section bg-gray-500 h-182 pt-12 px-5 pb-5 gap-3">
        <div class="h-34 gap-3 py-2 px mb-10">
          <h1 class="text-3xl font-bold font-serif text-white">Adventures.</h1>
          <h1 class="text-3xl font-bold font-serif text-white">Booked. Easy.</h1>
        </div>

        <section class="flex flex-col justify-center content-evenly">
          <div class="w-auto h-20 bg-white px-2 mb-2.5 rounded-lg flex flex-col justify-evenly items-star">
            <div class="flex justify-between items-center w-full">
              <div class="flex space-x-2 justify-center">
                <icon class="text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </icon>
                <h4 class="font-semibold text-sm leading-5">Departure Place</h4>
              </div>
              <div>
                <icon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </icon>
              </div>
            </div>

            <div>
              <input type="text" class="w-full text-sm font-medium leading-4" placeholder="Where are you traveling from">
            </div>
          </div>

          <div class="w-auto h-20 bg-white px-2 mb-2.5 rounded-lg flex flex-col justify-evenly items-star">
            <div class="flex justify-between items-center w-full">
              <div class="flex space-x-2 justify-center">
                <icon class="text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                  </svg>
                </icon>
                <h4 class="font-semibold text-sm leading-5">
                  Destination
                </h4>
              </div>
              <div>
                <icon><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </icon>
              </div>
            </div>

            <div>
              <input type="text" class="w-full text-sm font-medium leading-4" placeholder="Where are you going?">
            </div>
          </div>

          <div class="w-auto h-20 bg-white px-2 mb-2.5 rounded-lg flex flex-col justify-evenly items-star">
            <div class="flex justify-between items-center w-full">
              <div class="flex space-x-2 justify-center">
                <icon class="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </icon>
                <h4 class="font-semibold text-sm leading-5">Travelers</h4>
              </div>
              <div>
                <icon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </icon>
              </div>
            </div>

            <div>
              <input type="text" class="w-full text-sm font-medium leading-4" placeholder="How many are you?">
            </div>
          </div>

          <div class="w-auto h-20 bg-white px-2 mb-2.5 rounded-lg flex flex-col justify-evenly items-star">
            <div class="flex justify-between items-center w-full">
              <div class="flex space-x-2 justify-center">
                <icon class="text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                </icon>
                <h4 class="font-semibold text-sm leading-5">Travel Dates</h4>
              </div>
              <div>
                <icon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </icon>
              </div>
            </div>

            <div>
              <input type="text" class="w-full text-sm font-medium leading-4" placeholder="Which dates are you going?">
            </div>
          </div>

          <button class="h-12 mb-2.5 rounded-md font-medium text-white text-center bg-orange-500 text.xl gap-1.5">
            Search
          </button>

          <h3 class="text-center text-white font-normal text-xs">How it Works?</h3>
        </section>
      </section>


    </div>
  </div>
</template>


<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>


