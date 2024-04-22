"use client";

import React from "react";
import { Dialog } from "@headlessui/react";
import { Input } from "@/app/ui";
import { MdClose } from "react-icons/md";

export interface AddTrait {
  type?: string;
  name?: string;
}

export type ModifyAddTrait = { id?: number } & AddTrait;

const initModifyAddTrait: ModifyAddTrait = {};

export interface AddTraitDialogProps extends AddTrait {
  close: () => void;
  handleAddTrait: (trait: AddTrait) => void;
  handleModifyTrait?: (index: number, trait: AddTrait) => void;
  modifyAddTrait?: ModifyAddTrait;
}

export const AddTraitDialog: React.FC<AddTraitDialogProps> = ({ ...props }) => {
  const {
    close,
    type,
    name,
    modifyAddTrait = initModifyAddTrait,
    handleAddTrait,
    handleModifyTrait = () => {},
  } = props;

  const [typeValue, setTypeValue] = React.useState<string>(
    type || modifyAddTrait.type || ""
  );
  const [nameValue, setNameValue] = React.useState<string>(
    name || modifyAddTrait.name || ""
  );
  const [isValidValue, setIsValidValue] = React.useState(false);

  React.useEffect(() => {
    setIsValidValue(
      typeValue !== undefined &&
        typeValue !== "" &&
        nameValue !== undefined &&
        nameValue !== ""
    );
  }, [typeValue, nameValue]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isValidValue) {
      if (modifyAddTrait && modifyAddTrait.id !== undefined) {
        handleModifyTrait(modifyAddTrait.id, {
          type: typeValue,
          name: nameValue,
        });
      } else {
        handleAddTrait({ type: typeValue, name: nameValue });
      }
      close();
      setTypeValue("");
      setNameValue("");
    }
  };

  return (
    <Dialog open={true} onClose={close} as="div" className="relative z-10">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-[600px] rounded-xl bg-neutral-900 px-6 py-8">
          <Dialog.Title as="h3" className="text-2xl font-bold relative">
            Add trait
            <div
              className="absolute top-0 right-0 hover:text-neutral-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              <MdClose size={20} />
            </div>
          </Dialog.Title>
          <div className="flex gap-4 mt-6">
            <div className="flex flex-col gap-2 w-1/2">
              <p className="text-lg font-semibold">Type</p>
              <Input
                placeholder="Ex. Size"
                className="ps-3 py-2"
                defaultValue={typeValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTypeValue(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <p className="text-lg font-semibold">Name</p>
              <Input
                placeholder="Ex. Large"
                className="ps-3 py-2"
                defaultValue={nameValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setNameValue(e.target.value);
                }}
              />
            </div>
          </div>

          <button
            className="w-full rounded-xl bg-sky-600 mt-10"
            onClick={handleClick}
          >
            <div
              className={`w-full h-full py-2 rounded-xl overflow-hidden ${
                isValidValue ? "" : "bg-black/50"
              }`}
            >
              Add
            </div>
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
