import { useGetCards } from "../../../hooks/useGetCards"
import { HomeComponent, CardModel, CardsWrapper } from "./styles"

const Card = ({ name, url }: { name: string, url: string }) => {
  return <CardModel key={url}>
    {name}
  </CardModel>
}

export const Home = () => {
  const { data, error, isLoading } = useGetCards();

  return <HomeComponent>
    {
      isLoading ? <p style={{ color: "red" }}>loading...</p> :
        error ? <mark>{error}</mark> : <CardsWrapper>
          {data.map(Card)}
        </CardsWrapper>
    }
  </HomeComponent>
}
