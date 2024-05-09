"use client";

import React from "react";
import { Dialog, Input } from "@/app/ui";

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
    <Dialog title="Add Trait" close={close}>
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
    </Dialog>
  );
};
