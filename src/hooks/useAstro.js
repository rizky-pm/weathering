import moment from 'moment';
import { useState, useEffect } from 'react';

const useAstro = (astroDate, astroDetail) => {
  const [astro, setAstro] = useState({
    current: '',
    sunrise: '',
    sunset: '',
  });
  const [loaded, setLoaded] = useState(false);

  const setAstroHandler = async (date, sunrise, sunset) => {
    // remove am or pm
    // sunrise = sunrise.replace(/(AM|PM)/, '');
    // sunset = sunset.replace(/(AM|PM)/, '');

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
    setLoaded(true);
  };

  useEffect(() => {
    if (astroDate)
      setAstroHandler(astroDate, astroDetail?.sunrise, astroDetail?.sunset);
  }, [astroDate]);

  if (astro && loaded) {
    const diff =
      100 -
      ((astro.sunset - astro.current) / (astro.sunset - astro.sunrise)) * 100;

    return { diff, loaded };
  } else {
    return { diff: 0, loaded: false };
  }
};

export default useAstro;
