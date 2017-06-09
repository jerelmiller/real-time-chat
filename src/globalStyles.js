import { injectGlobal } from 'styled-components'

// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background: #F7FAFB;
    font-family: Roboto, sans-serif;
  }
`