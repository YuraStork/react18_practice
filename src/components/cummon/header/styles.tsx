import styled from "styled-components";

const HeaderComponent = styled.header`
  padding:10px;
  background-color: black;
  color: white;
  position: relative;
`

const FindWrapper = styled.div`
  width: 50vw;
  min-height: 100px;
  max-height: 200px;
  position: absolute;
  overflow-y: scroll;
  background-color: green;
  color: white;
`
export { HeaderComponent, FindWrapper }