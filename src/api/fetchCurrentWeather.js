import { API_KEY } from './';
export const fetchCurrentWeather = async city => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  const json = await res.json();

  return json;
};
