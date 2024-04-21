import { Button } from "./components/ui/button";
import { CounterProvider, useCount } from "./contexts/Counter";
export default function App() {
  return (
    <CounterProvider>
      <ContextValue />
    </CounterProvider>
  );
}

function ContextValue() {
  const { count, setCount } = useCount();
  return (
    <div className="flex justify-center items-center flex-col w-[300px]">
      <h1 className="text-3xl font-bold underline underline-offset-8 ">
        React & TypeScript
      </h1>
      <h2 className="p-2 text-xl">{count}</h2>
      <Button onClick={() => setCount((prevous) => prevous + 1)}>
        Increase
      </Button>
    </div>
  );
}
