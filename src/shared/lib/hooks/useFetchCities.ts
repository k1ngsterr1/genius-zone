import React, { useState, useEffect } from "react";
import axiosInstance from "../middleware";

function useFetchCities() {
  const [cities, setCities] = useState([]);

  const fetchCities = async (input: string) => {
    try {
      const response = await axiosInstance.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&apiKey=8953469eb53741eabeac7cc7b38e48be`
      );
      const cityOptions = response.data.features.map((feature: any) => ({
        label:
          feature.properties.country + " , " + (feature.properties.city || ""),
        country: feature.properties.country,
        countryCode: feature.properties.country_code,
      }));
      console.log("cities fetched successfully!", response.data, cityOptions);
      setCities(cityOptions);
    } catch (error: any) {
      console.error("There was an error with city fetching:", error);
    }
  };
  return { fetchCities, cities };
}

export default useFetchCities;
