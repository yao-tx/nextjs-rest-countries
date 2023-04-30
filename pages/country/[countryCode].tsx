import {
  ArrowSmallLeftIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { AttributeBox } from "@/components/AttributeBox";
import type { CountryPageProps } from "@/utils/types";
import type { GetStaticProps } from "next";

const CountryPage = ({ country }: { country: CountryPageProps }) => {
  return (
    <Layout>
      <div className="relative mt-12 mb-5 md:mt-20 md:mb-12">
        <Link
          href="/"
          className="inline-block mb-12 xl:absolute left-0 border-2 border-emerald-600 font-semibold text-emerald-600 rounded-md py-2 px-3 hover:bg-emerald-600 hover:text-white self-start dark:bg-emerald-900 dark:text-white dark:hover:bg-emerald-800 dark:border-emerald-900 dark:hover:border-emerald-800"
        >
          <span className="flex flex-row ">
            <ArrowSmallLeftIcon className="w-5 inline mr-2" />
            Back
          </span>
        </Link>
        <h1 className="text-center font-bold text-5xl text-black dark:text-white">{country.flag}&nbsp;&nbsp;{country.name}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 bg-neutral-50 dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden mt-8 p-5">
        <div className="col-span-5 md:col-span-3 lg:col-span-2">
          <Image
            src={country.image}
            alt={country.name}
            width="1000"
            height="1000"
            className="min-w-full h-auto mb-3"
          />
          <a
            href={country.googleMaps}
            target="_blank"
            className="flex flex-row align-center text-sm text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
          >
            <ArrowTopRightOnSquareIcon className="w-4 inline mr-2" />
            Google Maps
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 col-span-5 md:col-span-3 lg:auto-rows-min">
          <AttributeBox
            title="Official Name"
            description={country.official}
          />
          <AttributeBox
            title="Capital"
            description={country.capital.length ? country.capital.join(", ") : "-"}
          />
          <AttributeBox
            title="Region"
            description={country.region}
          />
          <AttributeBox
            title="Sub-region"
            description={country.subregion ? country.subregion : "-"}
          />
          <AttributeBox
            title="Population"
            description={country.population.toLocaleString("en-US")}
          />
          <AttributeBox
            title="Area (km²)"
            description={country.area.toLocaleString("en-US")}
          />
          <AttributeBox
            title="Currency"
            description={country.currencies.length ? country.currencies.join(", ") : "-"}
          />
          <AttributeBox
            title="Timezone"
            description={country.timezones.join(", ")}
          />
          <AttributeBox
            title="IDD"
            description={country.idds.length ? country.idds.join(", ") : "-"}
          />
          <AttributeBox
            title="Language"
            description={country.languages.length ? country.languages.join(", ") : "-"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CountryPage;

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params && context.params.countryCode) {
    const result = await (await fetch(`https://restcountries.com/v3.1/alpha/${context.params.countryCode}`)).json();

    let countryData: CountryPageProps | {} = {};

    if (result.length) {
      let currencies = [];

      for (let key in result[0].currencies) {
        currencies.push(key);
      }

      const iddRoot = result[0].idd.root;

      let idds = [];

      for (let index in result[0].idd.suffixes) {
        idds.push(iddRoot.concat(result[0].idd.suffixes[index]));
      }

      let languages = [];

      for (let key in result[0].languages) {
        languages.push(result[0].languages[key]);
      }

      countryData = {
        name: result[0].name.common,
        flag: result[0].flag,
        official: result[0].name.official,
        countryCode: result[0].cca3,
        region: result[0].region,
        subregion: result[0].subregion ? result[0].subregion : "",
        image: result[0].flags.svg,
        population: result[0].population,
        area: result[0].area,
        capital: result[0].capital ?? [],
        idds: idds,
        timezones: result[0].timezones,
        languages: languages,
        currencies: currencies,
        googleMaps: result[0].maps.googleMaps,
      };
    }

    return {
      props: {
        country: countryData
      }
    };
  }

  return {
    props: {
      error: true,
    }
  };
};

export const getStaticPaths = async () => {
  const results = await (await fetch("https://restcountries.com/v3.1/all")).json();

  let fullPaths = [];

  for (let i = 0; i < results.length; i ++) {
    fullPaths.push({ params: { countryCode: results[i].cca3 }});
  }

  return {
    paths: fullPaths,
    fallback: false,
  };
};
