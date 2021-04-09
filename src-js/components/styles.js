import 'normalize.css'
import styled, { css, createGlobalStyle } from 'styled-components'
import ReactLoading from 'react-loading'
import { typography, fonts, colours, media } from './theme'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: ${fonts.vag.bold.name};
    src: url(${fonts.vag.bold.url});
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: ${fonts.default};
    font-size: ${typography.rootSize}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
  }
  button {
    cursor: pointer;
  }
`

const PageOuter = styled.div`
  display: flex;
  flex-direction: column;
`

const PageInner = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`

export const Page = ({ children }) => (
  <>
    <GlobalStyles />
    <PageOuter>
      <PageInner>{children}</PageInner>
    </PageOuter>
  </>
)

export const LoadingAnimation = () => (
  <ReactLoading type="cylon" color={colours.lightGrey} />
)

export const Header = styled.header`
  transition: 0.3s;
  font-family: ${fonts.vag.bold.name};
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  background: ${colours.brand.lightBlue};
  color: #fff;
  padding: 10px 0;
  ${media.greaterThan('md')`
    font-size: 40px;
    padding: 20px 0;
  `}
`

export const Main = styled.main`
  padding: 5px;
  flex: 1 0 auto;
`

const contentBox = css`
  max-width: 600px;
  margin: 20px auto 0;
  border-radius: 3px;
  border: 1px solid ${colours.lightGrey};
  box-shadow: 0px 3px 7px ${colours.lightGrey};
`

export const Searchbox = styled.div`
  ${contentBox}
  padding: 15px;
`

export const Resultsbox = styled.div`
  ${contentBox}
`

export const InputGroup = styled.div`
  display: flex;
`

export const FormInput = styled.input`
  flex-grow: 1;
  margin-right: 15px;
  height: 34px;
  padding: 0 5px;
`

export const FormButton = styled.button`
  height: 34px;
  padding: 0 20px;
  background: ${colours.brand.lightBlue};
  color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 -2px 0 ${colours.brand.darkBlue};
  font-weight: 500;
`

export const Table = styled.table`
  text-align: left;
  width: 100%;

  &,
  th,
  td {
    border: none;
    border-collapse: collapse;
  }

  td {
    border-top: 1px solid ${colours.lightGrey};
  }

  th,
  td {
    padding: 10px 15px;
  }

  th {
    border-bottom: 4px solid ${colours.lightGrey};
  }

  td + td {
    opacity: 0.5;
    font-weight: bold;
  }
`

export const ErrorText = styled.p`
  color: ${colours.danger};
`

export const ButtonAsLink = styled.button`
  margin: 0;
  border: none;
  background: none;
  color: ${colours.browserBlue};
  text-decoration: underline;
`
