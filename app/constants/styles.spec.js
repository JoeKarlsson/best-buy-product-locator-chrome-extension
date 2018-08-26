import { COLORS, STYLES } from './styles';

describe('Constants', () => {
  describe('COLORS', () => {
    it('should match the default error message', () => {
      const expectedColors = {
        black: '#1d252c',
        blue: '#0046be',
        darkBlue: '#001e73',
        grey: '#c5cbd5',
        red: '#bb0628',
        white: '#fff',
        yellow: '#ffe000',
        lightYellow: '#fff200',
      };
      expect(COLORS).toMatchObject(expectedColors);
    });
  });

  describe('STYLES', () => {
    it('should match the default base URL', () => {
      const expectedStyles = {
        fontFamily: '"Human BBY Web",Arial,Helvetica,sans-serif',
        fontSize: '15px',
      };
      expect(STYLES).toMatchObject(expectedStyles);
    });
  });
});
