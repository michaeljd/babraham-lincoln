import React from "react"
import styled from "styled-components"

import PropTypes from "prop-types"

import "./reset.css"

const Wrapper = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled('main')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children, className }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <footer></footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
