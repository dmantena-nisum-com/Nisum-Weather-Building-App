// fetching html elements and storing in a const , in this module and export them to make available in  another files of the application .
export const ELEMENT_SEARCH_BUTTON = document.querySelector("button");
export const ELEMENT_SEARCHED_CITY = document.querySelector("#city");

export const ELEMENT_LOADING_TEXT = document.querySelector("#load");
export const ELEMENT_WEATHER_BOX = document.querySelector("#weather");
// other way of selecting element
export const ELEMENT_WEATHER_CITY = ELEMENT_WEATHER_BOX.firstElementChild;
export const ELEMENT_WEATHER_DESCRIPTION = document.querySelector(
  "#weatherDescription"
);
// other way of selecting element
export const ELEMENT_WEATHER_TEMPERATURE = ELEMENT_WEATHER_BOX.lastElementChild;
