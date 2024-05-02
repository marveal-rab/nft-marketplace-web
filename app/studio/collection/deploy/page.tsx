"use client";

import React, { use } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { useNFTCollection } from "@/hooks";
import { current } from "@/app/actions";

export default function Page() {
  const { createCollection } = useNFTCollection();

  const [fileUrl, setFileUrl] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [symbol, setSymbol] = React.useState<string>("");
  const [blockchain, setBlockchain] = React.useState<number>(0);

  const [valid, setValid] = React.useState<boolean>(false);

  React.useEffect(() => {
    setValid(
      (fileUrl &&
        name &&
        symbol &&
        fileUrl !== "" &&
        name !== "" &&
        symbol !== "") as boolean
    );
  }, [fileUrl, name, symbol]);

  const handleClick = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const curr = await current();
    // TODO: open connect wallet modal
    if (!curr.address) return;
    await createCollection({
      to: curr.address,
      name,
      symbol,
      uri: fileUrl,
    });
  };

  return (
    <div className="w-full h-full relative">
      <Nav />
      <Form
        fileUrl={fileUrl}
        setFileUrl={setFileUrl}
        name={name}
        setName={setName}
        symbol={symbol}
        setSymbol={setSymbol}
        blockchain={blockchain}
        setBlockchain={setBlockchain}
      />
      <footer className="w-full h-20 flex items-center justify-end border-t-[1px] border-t-gray-500/30 fixed bottom-0 left-0 bg-black mx-auto px-16">
        <button
          className="bg-sky-600 font-bold rounded-xl"
          onClick={handleClick}
        >
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
