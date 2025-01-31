import Card from "./components/Card";

const cardData = { title: "Card 1", description: "Description for card 1" }

function App() {

  return <div>
    <Card {...cardData}></Card>
  </div>;
}

export default App;
