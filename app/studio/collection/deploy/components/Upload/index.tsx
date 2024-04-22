"use client";

import { Transition } from "@headlessui/react";
import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";

const Upload = () => {
  // const [showPic, setShowPic] = React.useState(true);

  return (
    <div className="group w-full h-[150px] rounded-xl px-8 py-6 border-[1px] border-gray-500/30 hover:border-gray-500/60">
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
    </div>
  );
};

export default Upload;
