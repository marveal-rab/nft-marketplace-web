"use client";

import React from "react";
import { Dialog as D } from "@headlessui/react";
import { MdClose } from "react-icons/md";

export interface DialogProps extends Props {
  title: string;
  open?: boolean;
  close: () => void;
}

export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
  const { title, open = true, close, children } = props;

  return (
    <D open={open} onClose={close} as="div" className="relative z-10">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <D.Panel className="w-full max-w-[600px] rounded-xl bg-neutral-900 px-6 py-8">
          <D.Title as="h3" className="text-2xl font-bold relative">
            {title}
            <button
              className="absolute top-0 right-0 hover:text-neutral-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              <MdClose size={20} />
            </button>
          </D.Title>
          <div>{children}</div>
        </D.Panel>
      </div>
    </D>
  );
};

export interface CoverProps extends Props {
  open?: boolean;
  close: () => void;
}

export const Cover: React.FC<CoverProps> = (props: CoverProps) => {
  const { open = true, close, children } = props;
  return (
    <D open={open} onClose={close} as="div" className="relative z-max">
      <div className="fixed inset-0 bg-black" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen h-screen items-center justify-center p-4">
        <D.Panel className="w-full h-full">
          <D.Title as="h3" className="text-2xl font-bold relative">
            <button
              className="absolute top-0 right-0 hover:text-neutral-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              <MdClose size={20} />
            </button>
          </D.Title>
          <div className="w-full h-full">{children}</div>
        </D.Panel>
      </div>
    </D>
  );
};
