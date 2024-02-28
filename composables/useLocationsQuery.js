export const useLocationsQuery = async (params) => {
  const config = useRuntimeConfig();

  const baseUrl = `${config.public.kiwiApi}/locations/query`;

  const options = {
    headers: {
      accept: "application/json",
      apikey: config.public.kiwiApiKey,
    },
    params,
  };

  return await $fetch(baseUrl, options);
};
