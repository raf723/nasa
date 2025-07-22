import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import colors from '../../styles/colors';

const iconLibraries = {
  AntDesign,
  Feather,
  FontAwesome,
  Fontisto,
  Ionicons,
  Octicons,
};

const Icon = ({ name, size, color = colors.lightGrey, library }) => {
  const finalSize = size;

  const IconComponent = iconLibraries[library];

  return IconComponent ? (
    <IconComponent name={name} size={finalSize} color={color} />
  ) : null;
};

export default Icon;
