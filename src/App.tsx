import { Button } from "./components/ui/button";
import { DataProvider, useData } from "./contexts/DataContext";
export default function App() {
  return (
    <DataProvider>
      <Main />
    </DataProvider>
  );
}

function Main() {
  const { data, setData } = useData();
  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen">
      {data.map((detum, index) => (
        <div key={index}>
          <h2>{detum.tile}</h2>
          <p>{detum.description}</p>
        </div>
      ))}

      <Button
        onClick={() =>
          setData([...data, { tile: "new", description: "Html css" }])
        }
      >
        ADD
      </Button>
    </div>
  );
}
