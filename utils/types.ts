export interface CountryProps {
  name: string;
  countryCode: string;
  region: string;
  image: string;
  population: number;
  area: number;
  capital: string[];
};

export interface CountryPageProps {
  name: string;
  flag: string;
  official: string;
  countryCode: string;
  region: string;
  subregion: string;
  image: string;
  population: number;
  area: number;
  capital: string[];
  idds: string[];
  timezones: string[];
  languages: string[];
  currencies: string[];
  googleMaps: string;
};