import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter", serif;
    list-style: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;

    @media (max-width: 768px) {
    padding-top: 16px
  }
  }
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 90%;

    img {
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
`
