import axios from "axios";
import { Country } from "../types";

export const getCountries = async () => {
  const apiUrl = "https://countriesnow.space/api/v0.1/countries/capital";

  try {
    const response = await axios.get(apiUrl);
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const countries = response.data.data.map((country: Country) => ({
      name: country.name,
      capital: country.capital,
    }));
    return countries;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("General error:", error.message);
    }
  }
};
