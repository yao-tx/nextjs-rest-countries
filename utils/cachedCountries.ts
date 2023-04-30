import type { CountryProps } from "./types";

let cachedResults: CountryProps[];

export async function getCountries() {
  if (!cachedResults) {
      const results = await(
        await fetch("https://restcountries.com/v3.1/all")
      ).json();

      let reducedResults: CountryProps[] = [];

      for (let result of results) {
        reducedResults.push({
          name: result.name.common,
          countryCode: result.cca3,
          region: result.region,
          image: result.flags.svg,
          population: result.population,
          area: result.area,
          capital: result.capital ?? [],
        });
      }

      cachedResults = reducedResults;
  }

  return cachedResults;
}