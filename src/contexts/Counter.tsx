import React, { createContext, useContext, useState } from "react";
type Props = {
  children: React.ReactNode;
};
type CounterContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const CounterContext = createContext<CounterContextType | null>(null);

export const CounterProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);
  const contextValue: CounterContextType = {
    count,
    setCount,
  };
  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CounterContext);
  if (context === null)
    throw new Error("use Count mutst be used within the Counter Context");
  return context;
};
