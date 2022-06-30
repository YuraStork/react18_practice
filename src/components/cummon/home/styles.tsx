import styled from "styled-components";

const HomeComponent = styled.main`
  padding:10px;
  background-color: #3b3b3b;
  color: white;
`

const CardModel = styled.div`
  background-color: white;
  padding:10px;
  border: black;
  color: black;
`

const CardsWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  grid-auto-rows: 100px;
  justify-content:center;
`
export { HomeComponent, CardModel, CardsWrapper }