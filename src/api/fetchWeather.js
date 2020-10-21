import { API_KEY, base_url } from './';

export const fetchWeather = async city => {
  const timestamps = 5;
  const res = await fetch(
    `${base_url}forecast?q=${city}&units=metric&cnt=${timestamps}&appid=${API_KEY}`
  );
  const json = await res.json();
  return json;
};
