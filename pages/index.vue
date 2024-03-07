<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <a class="font-extrabold text-xl text-green-500" href="#"
          >Nuxt buscador</a
        >
        <ul class="flex gap-4"></ul>
      </nav>
    </header>

    <div class="container mx-auto pt pb-4">
      <section
        class="hero-section bg-[url('/public/images/hero-img.jpg')] bg-gray-500 h-182 pt-12 px-5 pb-5 gap-3 bg-cover bg-top"
      >
        <div class="h-34 gap-3 py-2 px mb-10">
          <h1 class="text-3xl font-bold font-serif text-white">Adventures.</h1>
          <h1 class="text-3xl font-bold font-serif text-white">
            Booked. Easy.
          </h1>
        </div>

        <section class="flex flex-col justify-center content-evenly">
          <div
            class="w-auto h-20 bg-white px-2 mb-2.5 rounded-lg flex flex-col justify-evenly items-star"
          >
            <div class="flex justify-between items-center w-full">
              <div class="flex space-x-2 justify-center">
                <span class="text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </span>
                <h4 class="font-semibold text-sm leading-5">Departure Place</h4>
              </div>
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <input
                type="text"
                class="w-full text-sm font-medium leading-4"
                placeholder="Where are you traveling from"
              />
            </div>
          </div>

          <div
            class="w-auto h-20 bg-white px-2 mb-2.5 rounded-lg flex flex-col justify-evenly items-star"
          >
            <div class="flex justify-between items-center w-full">
              <div class="flex space-x-2 justify-center">
                <span class="text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </span>
                <h4 class="font-semibold text-sm leading-5">Destination</h4>
              </div>
              <div>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <input
                type="text"
                class="w-full text-sm font-medium leading-4"
                placeholder="Where are you going?"
              />
            </div>
          </div>

          <div
            class="w-auto h-20 bg-white px-2 mb-2.5 rounded-lg flex flex-col justify-evenly items-star"
          >
            <div class="flex justify-between items-center w-full">
              <div class="flex space-x-2 justify-center">
                <span class="text-green-400"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </span>
                <h4 class="font-semibold text-sm leading-5">Travelers</h4>
              </div>
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <input
                type="text"
                class="w-full text-sm font-medium leading-4"
                placeholder="How many are you?"
              />
            </div>
          </div>

          <div
            class="w-auto h-20 bg-white px-2 mb-2.5 rounded-lg flex flex-col justify-evenly items-star"
          >
            <div class="flex justify-between items-center w-full">
              <div class="flex space-x-2 justify-center">
                <span class="text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </span>
                <h4 class="font-semibold text-sm leading-5">Travel Dates</h4>
              </div>
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <input
                type="text"
                class="w-full text-sm font-medium leading-4"
                placeholder="Which dates are you going?"
              />
            </div>
          </div>

          <button
            class="h-12 mb-2.5 rounded-md font-medium text-white text-center bg-[#FF6C0E] text.xl gap-1.5"
          >
            Search
          </button>

          <h3 class="text-center text-white font-normal text-xs">
            How it Works?
          </h3>
        </section>
      </section>

      <section class="services-section bg-[#F8FCF6] h-182">
        <section class="flex flex-col gap-4 h-[850px] py-11 px-6">
          <div class="flex flex-col items-center mb-3.5 h-[102px]">
            <img
              class="mb-3.5 h-11 w-[143.96px]"
              src="/images/vibeNobackground.png"
              alt="Logo"
            />
            <div class="flex flex-col items-center w-[300pxpx] h-11">
              <h2
                class="w-[300px] font-regular text-xs text-center font-sans bg-color-black"
              >
                Your trusted travel agency for extraordinary adventures
              </h2>
              <h2
                class="font-regular text-xs text-center font-sans bg-color-black"
              >
                organized by seasoned local tour organizers.
              </h2>
            </div>
          </div>

          <div class="flex justify-center mb-3.5">
            <img
              class="w-auto h-[218px] rounded-2xl bg-center bg-cover"
              src="/images/mountain.png"
              alt="imagen"
            />
          </div>

          <div class="mb-3.5 flex justify-center gap-1">
            <h2 class="font-bold font-canaro text-xl">Why</h2>
            <h2 class="font-bold font-canaro text-xl text-lime-600 italic">
              Vibe Adventure?
            </h2>
          </div>

          <div class="grid grid-cols-2 place-items-center gap-7 mx-1">
            <div class="flex flex-col justify-center items-center gap-1">
              <img class="w-10 h-10" src="/images/top-tours.png" alt="icon" />
              <h2
                class="text-center text-base font-semibold text-lime-600 leading-5"
              >
                Top Tour
              </h2>
              <p
                class="text-xs font-medium text-center leading-3.5 tracking-wide"
              >
                Our rigorous screening process guarantees that you will choose
                among the finest tours and travel packages worldwide.
              </p>
            </div>

            <div class="flex flex-col justify-center items-center gap-1">
              <img class="w-10 h-10" src="/images/top-tours.png" alt="icon" />
              <h2
                class="text-center text-base font-semibold text-lime-600 leading-5"
              >
                Technology
              </h2>
              <p
                class="text-xs font-medium text-center leading-3.5 tracking-wide"
              >
                Our cutting-edge technology and travel expertise will bring you
                unbeatable itineraries at the most competitive prices.
              </p>
            </div>

            <div class="flex flex-col justify-center items-center gap-1">
              <img
                class="w-10 h-10"
                src="/images/wide-selection.png"
                alt="icon"
              />
              <h2
                class="text-center text-base font-semibold text-lime-600 leading-5"
              >
                Wide Selection
              </h2>
              <p
                class="text-xs font-medium text-center leading-3.5 tracking-wide"
              >
                With 30,000+ organized adventures around the world, you can
                definitely find your dream trip!
              </p>
            </div>

            <div class="flex flex-col justify-center items-center gap-1">
              <img
                class="w-10 h-10"
                src="/images/easy-booking.png"
                alt="icon"
              />
              <h2
                class="text-center text-base font-semibold text-lime-600 leading-5"
              >
                Easy Booking
              </h2>
              <p
                class="text-xs font-medium text-center leading-3.5 tracking-wide"
              >
                Book everything you need in one place: adventure,
                transportation, insurance, and more!
              </p>
            </div>
          </div>
        </section>
      </section>

      <section class="travelers-section">
        <section class="flex flex-col gap-6 h-[1280px] py-11 px-6">
          <div class="flex flex-col items-center gap-6">
            <div class="flex gap-1">
              <h1 class="font-bold font-canaro text-xl">Top</h1>
              <h1 class="font-bold font-canaro text-xl text-lime-600 italic">
                Destinations
              </h1>
            </div>

            <div class="flex flex-col justify-center opacity-80">
              <p
                class="text-center font-interstate font-medium font-sm leading-[22px]"
              >
                Discover our handpicked top destinations, offering unique
              </p>
              <p
                class="text-center font-interstate font-medium font-sm leading-[22px]"
              >
                experiences crafted for your next unforgettable adventure.
              </p>
            </div>
          </div>
          <div
            class="flex justify-between py-4 px-6 items-center h-11 w-auto border-[1px] border-[#FF6C0E] rounded-md"
          >
            <input class="text-[#FF6C0E]" type="button" value="By Region" />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#FF6C0E]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div class="grid gap-3 grid-cols-2 place-items-center">
            <div
              class="w-[148px] h-[244px] rounded-md bg-[url('/public/images/Peru.jpg')] bg-cover opacity-85"
            >
              <div
                class="w-[148px] h-[244px] rounded-md flex flex-col items-start justify-end px-3 py-3 bg-gradient-to-t from-current opacity-65"
              >
                <H5 class="text-white">Peru</H5>
                <h6 class="text-white">100+ Tour</h6>
              </div>
            </div>
            <div
              class="w-[148px] h-[244px] rounded-md bg-[url('/public/images/Greece.jpg')] bg-cover opacity-85"
            >
              <div
                class="w-[148px] h-[244px] rounded-md flex flex-col items-start justify-end px-3 py-3 bg-gradient-to-t from-current opacity-65"
              >
                <H5 class="text-white">Greece</H5>
                <h6 class="text-white">100+ Tour</h6>
              </div>
            </div>
            <div
              class="w-[148px] h-[244px] rounded-md bg-[url('/public/images/Kenya.jpg')] bg-cover opacity-85"
            >
              <div
                class="w-[148px] h-[244px] rounded-md flex flex-col items-start justify-end px-3 py-3 bg-gradient-to-t from-current opacity-65"
              >
                <H5 class="text-white">Kenya</H5>
                <h6 class="text-white">100+ Tour</h6>
              </div>
            </div>
            <div
              class="w-[148px] h-[244px] rounded-md bg-[url('/public/images/Japan.jpg')] bg-cover opacity-85"
            >
              <div
                class="w-[148px] h-[244px] rounded-md flex flex-col items-start justify-end px-3 py-3 bg-gradient-to-t from-current opacity-65"
              >
                <H5 class="text-white">Japan</H5>
                <h6 class="text-white">100+ Tour</h6>
              </div>
            </div>
            <div
              class="w-[148px] h-[244px] rounded-md bg-[url('/public/images/Canada.jpg')] bg-cover opacity-85"
            >
              <div
                class="w-[148px] h-[244px] rounded-md flex flex-col items-start justify-end px-3 py-3 bg-gradient-to-t from-current opacity-65"
              >
                <H5 class="text-white">Canada</H5>
                <h6 class="text-white">100+ Tour</h6>
              </div>
            </div>
            <div
              class="w-[148px] h-[244px] rounded-md bg-[url('/public/images/Morocco.jpg')] bg-cover opacity-85"
            >
              <div
                class="w-[148px] h-[244px] rounded-md flex flex-col items-start justify-end px-3 py-3 bg-gradient-to-t from-current opacity-65"
              >
                <H5 class="text-white">Morocco</H5>
                <h6 class="text-white">100+ Tour</h6>
              </div>
            </div>
            <div
              class="w-[148px] h-[244px] rounded-md bg-[url('/public/images/Maldives.jpg')] bg-cover opacity-85"
            >
              <div
                class="w-[148px] h-[244px] rounded-md flex flex-col items-start justify-end px-3 py-3 bg-gradient-to-t from-current opacity-65"
              >
                <H5 class="text-white">Maldives</H5>
                <h6 class="text-white">100+ Tour</h6>
              </div>
            </div>
            <div
              class="w-[148px] h-[244px] rounded-md bg-[url('/public/images/New-Zealand.jpg')] bg-cover opacity-85"
            >
              <div
                class="w-[148px] h-[244px] rounded-md flex flex-col items-start justify-end px-3 py-3 bg-gradient-to-t from-current opacity-65"
              >
                <H5 class="text-white">New Zealand</H5>
                <h6 class="text-white">100+ Tour</h6>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section class="Popular-section bg-[#F8FCF6] h-[650px]">
        <section class="flex flex-col gap-6 h-[1280px] py-11 px-6">
          <div class="flex flex-col items-center gap-6">
            <div class="flex gap-1">
              <h1 class="font-bold font-canaro text-xl">Popular</h1>
              <h1 class="font-bold font-canaro text-xl text-lime-600 italic">
                Adventures
              </h1>
            </div>

            <div class="flex flex-col justify-center opacity-80">
              <p
                class="text-center font-interstate font-medium font-xs leading-[22px]"
              >
                Embark on extraordinary adventures handpicked just for you.
              </p>
              <p
                class="text-center font-interstate font-medium font-xs leading-[22px]"
              >
                Dive into our selection of featured tours, carefully curated to
              </p>
              <p
                class="text-center font-interstate font-medium font-xs leading-[22px]"
              >
                offer the pinnacle of exploration and discovery.
              </p>
            </div>
          </div>

          <div
            class="flex justify-between bg-white py-4 px-6 items-center h-11 w-auto border-[1px] border-[#FF6C0E] rounded-md"
          >
            <input
              class="text-[#FF6C0E] "
              type="button"
              value="By Travel Style"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#FF6C0E]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>

          <div class="flex flex-col bg-white h-89 rounded-xl pb-5 gap-2.5">
            <div
              class="flex items-center justify-between h-48 bg-[url('/public/images/tanzania.jpg')] bg-cover rounded-xl"
            >
              <div
                class="flex items-center justify-center bg-white w-6 h-6 border-[1px] border-[#FF6C0E] text-[#FF6C0E] rounded-md"
              >
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </span>
              </div>
              <div
                class="flex items-center justify-center bg-white w-6 h-6 border-[1px] border-[#FF6C0E] text-[#FF6C0E] rounded-md"
              >
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <div class="flex gap-2 px-2">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </span>
                <h6 class="text-base">Tanzania</h6>
              </div>
              <div class="flex items-center justify-start gap-2 px-2">
                <div class="flex text-yellow-500 bg-yellow">
                  <span ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</span>
<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</span>
<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</span>
<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</span>
<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</span>
                </div> 
                <div class="flex justify-center ">
                  <h6 class="text-[10px]">(1522 + Review)</h6>
                </div>               
                
              </div>
              <div class="px-2 text-base">
                <h5>Serengeti Serenade, African Safari</h5>
              </div>
            </div>
            <div class="flex items-center justify-center ">
              <div class="w-72 border border-b-zinc-600">
                
              </div>
            </div>
            <div class="flex justify-between px-3">
              <h1 class="text-2xl text-lime-600">$4,000</h1>
              <div class="flex gap-1">
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>
                <h6 class="text-sm">8</h6>
                <h6 class="text-sm">days</h6>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
