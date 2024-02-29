<script setup>

const handleToken = async () => {
  const result = await useTourRadarTokenQuery()
  const baseUrl = "https://api.sandbox.b2b.tourradar.com"
  const path = "/v1/taxonomy/destinations/city"
  const url = `${baseUrl}${path}`
  const options = {
    headers: {
      Authorization: `bearer ${result.access_token}`,
    },
  };

  const destinations = await $fetch(url, options);
  console.clear()
  console.log(destinations)
}
</script>

<template>
  <div class="w-full h-full">
    DestinationInput
    <button @click="handleToken">click</button>
  </div>
</template>