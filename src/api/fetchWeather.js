import { API_KEY, base_url } from './';

export const fetchWeather = async city => {
  const res = await fetch(
    `${base_url}forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  const json = await res.json();
  return json;
};
