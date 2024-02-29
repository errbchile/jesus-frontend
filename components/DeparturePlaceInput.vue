<script setup>
import { ref } from "vue";

const departureSelected = ref({});
const departures = ref([]);
const { coords } = useGeolocation()

const handleSearchAirport = async (event) => {
  if (!event.query) return;

  let locations = []
  const { locations: locationsByTerm } = await useLocationsQuery({
    term: event.query,
    locale: 'en-US',
    location_types: [
      'airport',
      // "station",
      // "bus_station",
      "city",
      // "autonomous_territory",
      // "subdivision",
      // "country",
      // "region",
      // "continent"
    ],
    limit: 10,
    active_only: true,
  })
  locations = [...locationsByTerm]
  console.log(locations)
  const latitude = coords?.value?.latitude?.toString()
  const longitude = coords?.value?.longitude?.toString()

  if (latitude && longitude && isFinite(latitude) && isFinite(longitude)) {
    const { locations: locationsByradius } = await useLocationsByRadiusQuery({
      lat: latitude,
      lon: longitude,
      locale: 'en-US',
      location_types: [
        'airport',
        // "station",
        // "bus_station",
        "city",
        // "autonomous_territory",
        // "subdivision",
        // "country",
        // "region",
        // "continent"
      ],
    })
    if (locationsByradius) {
      locations = [...locations, ...locationsByradius]
    }
  }

  departures.value = locations || []
}
</script>

<template>
  <div class="w-full h-full">

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">Error: {{ error.message }}</div>
    <div v-else class="h-full">

      <AutoComplete optionLabel="name" v-model="departureSelected" :suggestions="departures"
        @complete="handleSearchAirport" :pt="{
          input: { class: 'h-12 text-black placeholder-gray-300 w-full outline-none rounded-xs', placeholder: 'Where are you traveling from?' },
          item: ({ props, state, context }) => {
            let classes = 'px-2 py-0.5 cursor-pointer ';
            classes += context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined;

            return {
              class: classes
            }
          },
          panel: { class: 'bg-white border overflow-y-scroll' },
        }" />

    </div>
  </div>
</template>