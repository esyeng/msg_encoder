import { createGlobalStyle } from 'styled-components';

import ADLaMDisplayRegularTtf from './assets/fonts/ADLaMDisplay-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'ADLaMDisplay-Regular';
        src: url(${ADLaMDisplayRegularTtf}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    `;
