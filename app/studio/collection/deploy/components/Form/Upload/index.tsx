"use client";

import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { API } from "@/utils/Graphql";
import { current } from "@/app/actions";

interface UploadProps extends Props {
  fileUrl: string;
  setFileUrl: (fileUri: string) => void;
}

const Upload: React.FC<UploadProps> = (props) => {
  const { fileUrl, setFileUrl } = props;

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [file, setFile] = React.useState<File | undefined>(undefined);

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    await uploadFile(f);
  };

  const uploadFile = async (f: File) => {
    let curr = await current();
    const data = await API.uploadFile(f, curr.token);
    setFileUrl(data.url);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) return;
    setFile(droppedFile);
    await uploadFile(droppedFile);
  };

  return (
    <div
      className="group w-full h-[150px] rounded-xl px-8 py-6 border-[1px] border-gray-500/30 hover:border-gray-500/60 cursor-pointer"
      onClick={(e) => {
        fileInputRef.current?.click();
      }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {file ? (
        <div className="group w-full flex items-center justify-between gap-6">
          <img
            src={URL.createObjectURL(file)}
            alt="Upload preview"
            className="w-24 h-24 object-cover rounded-xl"
          />
          <p className="text-nowrap text-ellipsis overflow-hidden">
            {file.name}
          </p>
          <div
            className="opacity-0 group-hover:opacity-100 hover:text-neutral-500"
            onClick={(e) => {
              e.stopPropagation();
              setFile(undefined);
            }}
          >
            <FaRegTrashCan size={20} />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-8">
          <div className="w-24 h-24 border-[1px] border-gray-500/30 border-dashed rounded-xl flex items-center justify-center group-hover:border-gray-500/60 group-hover:border-solid">
            <AiOutlinePicture
              size={20}
              className="transition duration-300 opacity-100 group-hover:-translate-y-8 group-hover:opacity-0"
            />
            <MdOutlineFileUpload
              size={20}
              className="absolute translate-y-8 transition duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">
              Drag and drop or click to upload
            </span>
            <span className="text-sm text-neutral-500">
              You may change this after deploying your contract.
            </span>
            <span className="text-sm text-neutral-500">
              Recommended size: 350 x 350. File types: JPG, PNG, SVG, or GIF
            </span>
          </div>
        </div>
      )}
      <input
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        ref={fileInputRef}
      />
    </div>
  );
};

export default Upload;
