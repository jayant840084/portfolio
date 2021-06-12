import { createGlobalStyle } from "styled-components";

const GloablStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
  }

  body {
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 12px 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    padding: 0;
    margin: 0;
  }
`

export default GloablStyle