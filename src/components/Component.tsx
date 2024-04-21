import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// type Props = {
//   name: string;
//   age: number;
//   children?: React.ReactNode;
// };

const Component = () => {
  const [email, setEmail] = useState(`abduallahalnomancse@gmail.com`);
  const [name, setName] = useState(``);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userdetails = { name, email };
    localStorage.set("details", JSON.stringify(userdetails));
  }
  return (
    <form
      className="p-4 w-[300px] flex flex-col gap-6 border border-rose-400 m-4 rounded-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold">Information</h2>
      <input
        type="text"
        name="name"
        id=""
        value={name}
        className="border-none p-2 w-[100%] rounded-md outline-none outline-red-400 "
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        id=""
        value={email}
        className="border-none p-2 w-[100%] rounded-md outline-none  outline-red-400 "
        onChange={handleChange}
      />
      <Button className="tracking-[2px] shadow-[3px_3px_2px_gray]">
        SUBMIT
      </Button>
    </form>
  );
};

export default Component;
