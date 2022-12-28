import { useState, useEffect } from 'react';

const useAstro = (currentDate) => {
  const [astro, setAstro] = useState({
    current: '',
    sunrise: '',
    sunset: '',
  });

  const setAstroHandler = async (date) => {
    const current = new Date();
    const sunrise = new Date(`${date} 05:39 GMT+7`);
    const sunset = new Date(`${date} 17:39 GMT+7`);

    const currentIso = current.toISOString();
    const sunriseIso = sunrise.toISOString();
    const sunsetIso = sunset.toISOString();

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
    if (currentDate) setAstroHandler(currentDate);
  }, [currentDate]);

  const diff =
    100 -
    ((astro.sunset - astro.current) / (astro.sunset - astro.sunrise)) * 100;

  return Math.round(diff);
};

export default useAstro;
