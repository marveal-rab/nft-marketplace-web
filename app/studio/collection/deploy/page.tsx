"use client";

import React, { use } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { useNFTCollection } from "@/hooks";

export default function Page() {
  const { createCollection } = useNFTCollection();

  const [fileUri, setFileUri] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [symbol, setSymbol] = React.useState<string>("");
  const [blockchain, setBlockchain] = React.useState<number>(0);

  const [valid, setValid] = React.useState<boolean>(false);

  React.useEffect(() => {
    setValid(
      (fileUri &&
        name &&
        symbol &&
        blockchain &&
        fileUri !== "" &&
        name !== "" &&
        symbol !== "") as boolean
    );
  }, [fileUri, name, symbol, blockchain]);

  return (
    <div className="w-full h-full relative">
      <Nav />
      <Form
        fileUri={fileUri}
        setFileUri={setFileUri}
        name={name}
        setName={setName}
        symbol={symbol}
        setSymbol={setSymbol}
        blockchain={blockchain}
        setBlockchain={setBlockchain}
      />
      <footer className="w-full h-20 flex items-center justify-end border-t-[1px] border-t-gray-500/30 fixed bottom-0 left-0 bg-black mx-auto px-16">
        <button className="bg-sky-600 font-bold rounded-xl">
          <div
            className={`w-full h-full px-6 py-3 ${
              !valid && "bg-black/50 text-neutral-500"
            }`}
          >
            Continue
          </div>
        </button>
      </footer>
    </div>
  );
}
