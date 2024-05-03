import React from "react";
import { Dialog as D } from "@headlessui/react";
import { MdClose } from "react-icons/md";

export interface DialogProps extends Props {
  title: string;
  open?: boolean;
  close: () => void;
}

const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
  const { title, open = true, close, children } = props;

  return (
    <D open={open} onClose={close} as="div" className="relative z-10">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <D.Panel className="w-full max-w-[600px] rounded-xl bg-neutral-900 px-6 py-8">
          <D.Title as="h3" className="text-2xl font-bold relative">
            {title}
            <div
              className="absolute top-0 right-0 hover:text-neutral-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              <MdClose size={20} />
            </div>
          </D.Title>
          <div>{children}</div>
        </D.Panel>
      </div>
    </D>
  );
};

export default Dialog;
