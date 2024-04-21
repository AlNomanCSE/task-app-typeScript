import { CounterProvider, useCount } from "@/contexts/Counter";
import { Button } from "./ui/button";

function ParentComponent() {
  return (
    <CounterProvider>
      <ContextValueCHeck />
    </CounterProvider>
  );
}
const ContextValueCHeck = () => {
  const { count, setCount } = useCount();
  return (
    <div>
      {count}
      <Button onClick={() => setCount((prev) => prev + 1)}>Increase</Button>
    </div>
  );
};

export default ParentComponent;
