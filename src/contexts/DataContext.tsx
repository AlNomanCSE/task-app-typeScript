import { createContext, useContext, useState } from "react";

type DataItemType = { tile: string; description: string };

type DataContextType = {
  data: DataItemType[];
  setData: React.Dispatch<React.SetStateAction<DataItemType[]>>;
};
const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataItemType[]>([]);
  const dataContextValue: DataContextType = {
    data,
    setData,
  };
  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("use Count must be used within the Data Context ...!");
  return context;
};
