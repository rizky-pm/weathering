import moment from 'moment';
import { useState, useEffect } from 'react';

const useAstro = (astroDate, astroDetail) => {
  const [astro, setAstro] = useState({
    current: '',
    sunrise: '',
    sunset: '',
  });
  const [count, setCount] = useState(0);
  const [diff, setDiff] = useState(0);

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
    const timer = setTimeout(() => setCount(count + 1), 1e3);

    if (astroDate)
      setAstroHandler(astroDate, astroDetail?.sunrise, astroDetail?.sunset);
    setDiff(
      100 -
        ((astro.sunset - astro.current) / (astro.sunset - astro.sunrise)) * 100
    );

    return () => clearTimeout(timer);
  }, [count, astroDate]);

  return diff.toFixed(1);
};

export default useAstro;
