import { useState } from 'react';

export const useWeatherIndex = () => {
  const [weatherIndex, setWeatherIndex] = useState(0);
  const changeWeatherIndex = index => setWeatherIndex(index);

  return [weatherIndex, changeWeatherIndex];
};
