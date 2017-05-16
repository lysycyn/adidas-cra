import { css } from 'styled-components';
import config from './config';

export default Object.keys(config.media).reduce((option, index) => {
  const query = config.media[index];
  const cssBody = option;
  cssBody[index] = prefix => (...args) => {
    if (!prefix || !['min', 'max'].includes(prefix)) {
      // eslint-disable-next-line no-console
      console.warn('The prefix value in media-query must be `min` or `max`');
    }
    return css`
      @media (${prefix}-width: ${query}) {
        ${css(...args)}
      }
    `;
  };
  return cssBody;
}, {});
