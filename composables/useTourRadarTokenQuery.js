export const useTourRadarTokenQuery = async () => {
  const config = useRuntimeConfig();

  const clientId = "hpg0tvme3ujrwcnd6fcyttwst8";
  const clientSecret = "mjjqpzhg19rifw174ehlw1a56nufbvwxrcya2w4bz32dsbjf594";
  const authorizationCode = btoa(`${clientId}:${clientSecret}`);
  const url = "https://oauth.api.sandbox.b2b.tourradar.com/oauth2/token";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${authorizationCode}`,
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "com.tourradar.tours/read",
    }).toString(),
  };

  return await $fetch(url, options);
};
