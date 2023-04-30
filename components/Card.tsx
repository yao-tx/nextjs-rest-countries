import {
  UserGroupIcon,
  MapIcon,
  BuildingLibraryIcon,
  Square2StackIcon,
} from '@heroicons/react/24/outline';
import type { CountryProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export function Card({
  name,
  countryCode,
  region,
  image,
  population,
  area,
  capital,
}: CountryProps ) {
  return (
    <Link
      href={`/country/${countryCode}`}
      scroll={false}
      className="flex flex-col overflow-hidden bg-white rounded-md shadow-md hover:shadow-lg text-black dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
    >
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={name}
          fill={true}
          className="min-w-full h-auto object-cover"
        />
      </div>
      <div className="p-3 text-center">
        <h2 className="font-bold">{name}</h2>
        <ul className="inline-block mt-3 text-left">
          <li>
            <UserGroupIcon
              title="Population"
              className="mr-2 w-5 inline"
            />
            {population.toLocaleString("en-US")}
          </li>
          <li>
            <MapIcon
              title="Region"
              className="mr-2 w-5 inline"
            />
            {region}
          </li>
          <li>
            <BuildingLibraryIcon
              title="Capital"
              className="mr-2 w-5 inline" />
              {capital.length ? capital.join(", ") : "-"}
          </li>
          <li>
            <Square2StackIcon
              title="Area"
              className="mr-2 w-5 inline"
            />
            {`${area.toLocaleString("en-US")} km`}
            <sup>2</sup>
          </li>
        </ul>
      </div>
    </Link>
  )
};