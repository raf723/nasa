import { Dimensions } from 'react-native';

export const getBestFitImage = links => {
  const screenWidth = Dimensions.get('window').width;
  const bestFit =
    links
      .filter(l => l.render === 'image')
      .sort((a, b) => a.width - b.width)
      .find(l => l.width >= screenWidth) || links[links.length - 1];

  return bestFit?.href;
};
