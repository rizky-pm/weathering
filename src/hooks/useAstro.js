import moment from 'moment';
import { useState, useEffect } from 'react';

const useAstro = (weatherData) => {
  const [astro, setAstro] = useState({
    current: '',
    sunrise: '',
    sunset: '',
  });

  const setAstroHandler = async (date, sunrise, sunset) => {
    const sunriseTime = moment(`${date} ${sunrise}`).format('YYYY-MM-DD HH:mm');
    const sunsetTime = moment(`${date} ${sunset}`).format('YYYY-MM-DD HH:mm');

    const currentUTC = new Date();
    const sunriseUTC = new Date(sunriseTime + ' GMT+7');
    const sunsetUTC = new Date(sunsetTime + ' GMT+7');

    const currentIso = currentUTC.toISOString();
    const sunriseIso = sunriseUTC.toISOString();
    const sunsetIso = sunsetUTC.toISOString();

    const currentEpoch = Date.parse(currentIso);
    const sunriseEpoch = Date.parse(sunriseIso);
    const sunsetEpoch = Date.parse(sunsetIso);

    setAstro({
      current: currentEpoch,
      sunrise: sunriseEpoch,
      sunset: sunsetEpoch,
    });
  };

  useEffect(() => {
    if (weatherData)
      setAstroHandler(
        weatherData.date,
        weatherData.astro?.sunrise,
        weatherData.astro?.sunset
      );
  }, [weatherData]);

  const diff =
    100 -
    ((astro.sunset - astro.current) / (astro.sunset - astro.sunrise)) * 100;

  return Math.round(diff);
};

export default useAstro;
