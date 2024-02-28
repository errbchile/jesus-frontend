export const useLocationsByRadiusQuery = async (params) => {
  const config = useRuntimeConfig();

  const baseUrl = `${config.public.kiwiApi}/locations/radius`;

  const options = {
    headers: {
      accept: "application/json",
      apikey: config.public.kiwiApiKey,
    },
    params,
  };

  return await $fetch(baseUrl, options);
};
