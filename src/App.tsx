import { useState } from "react";
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
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setData([...data, { title, description }]);
    setTitle('');
    setDescription('');
  }
  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen">
      <h1 className="font-extrabold text-xl text-red-700 underline">TASK APP</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 m-20">
        <div>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title ..."
            className="border  rounded-md p-2 w-[300px] outline-none focus:border-red-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="details"></label>
          <input
            type="text"
            name="details"
            id="details"
            placeholder="Enter Details ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border  rounded-md p-2 w-[300px] outline-none focus:border-red-400"
          />
        </div>
        <Button type="submit" className="tracking-widest">
          ADD
        </Button>
      </form>
      <div className="border p-4 rounded-md flex flex-col items-center">
        <h1 className="font-bold text-lg text-red-500">Task List</h1>
        {data.map((detum, index) => (
          <div
            key={index}
            className="border border-red-400 min-w-[300px] rounded-lg p-2 m-2"
          >
            <h2 className="font-bold text-red-400">{detum.title}</h2>
            <p className="px-2 ">{detum.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
