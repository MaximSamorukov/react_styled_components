export const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=capital,flags,name,population,region';

export const COUNTRY_BY_NAME = BASE_URL + 'name/';

export const COUNTRY_BY_CODE = BASE_URL + 'alpha';

export const searchByCountryName = (name) => COUNTRY_BY_NAME + name;

export const searchByCode = (code) => COUNTRY_BY_CODE + '/' + code;

export const searchByListOfCodes = (codes) => COUNTRY_BY_CODE + '?codes=' + codes.join(',');
