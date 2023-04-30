import Head from "next/head";
import { Poppins } from "next/font/google";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";
import { SearchBar } from "@/components/SearchBar";
import { useState, useEffect } from "react";
import { getCountries } from "@/utils/cachedCountries";
import type { CountryProps } from "@/utils/types";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home({ countries }: { countries: CountryProps[] }) {
  const [filteredCountryData, setFilteredCountryData] = useState<CountryProps[]>(countries);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => setRegionFilter(event.target.value);

  const regionFilters: string[] = ["Asia", "Africa", "Americas", "Europe", "Oceania"];

  useEffect(() => {
    const filteredData = countries.filter((country) => {
      return (!searchQuery || country.name.toLowerCase().includes(searchQuery.toLowerCase()))
          && (!regionFilter || country.region === regionFilter);
    });

    setFilteredCountryData(filteredData);
  }, [countries, searchQuery, regionFilter]);

  return (
    <>
      <Head>
        <title>Where in the world? - Countries REST API</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Layout>
        <h1 className="text-center mt-20 font-bold text-4xl text-black dark:text-white">Find Countries</h1>
        <SearchBar
          onInputChange={handleInputChange}
          onSelectChange={handleSelectChange}
          filters={regionFilters}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-12 mt-12">
        {filteredCountryData.length ? filteredCountryData.map((country) => (
          <Card
            key={country.countryCode}
            {...country}
          />
        )) :
          <p className="col-span-4 text-center">No results found!</p>
        }
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const results = await getCountries();

  results.sort((a, b) => ( a.name.localeCompare(b.name) ));

  return {
    props: {
      countries: results,
    },
  };
};