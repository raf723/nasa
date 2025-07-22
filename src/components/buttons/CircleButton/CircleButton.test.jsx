import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';

import CircleButton from './CircleButton';
import colors from '../../../styles/colors';

const onPress = jest.fn();

const baseProps = {
  icon: 'x',
  size: 32,
  color: colors.darkGrey,
  library: 'Octicons',
  onPress: onPress,
};

const setup = () => {
  render(<CircleButton {...baseProps} />);
};

describe('CircleButton', () => {
  describe('Initial render', () => {
    beforeEach(() => {
      setup();
    });

    afterEach(cleanup);

    it('should render component', () => {
      const el = screen.getByTestId('x-circle-button');
      expect(el).toBeTruthy();
    });
  });

  describe('Component interactions', () => {
    beforeEach(() => {
      setup();
    });

    afterEach(cleanup);

    it('should call onPress on clicking compoennt', () => {
      const el = screen.getByTestId('x-circle-button');
      act(() => {
        fireEvent.press(el);
      });

      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });
});
