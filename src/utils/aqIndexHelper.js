const airQualityLabelRenderer = (value) => {
  switch (value) {
    case 1:
      return 'Good';
    case 2:
      return 'Moderate';
    case 3:
      return 'Unhealthy for Sensitive Groups';
    case 4:
      return 'Unhealthy';
    case 5:
      return 'Very Unhealthy';
    case 6:
      return 'Hazardous';

    default:
      break;
  }
};

export default airQualityLabelRenderer;
