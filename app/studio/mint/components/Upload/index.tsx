import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

interface UploadProps extends Props {
  file: File | undefined;
  setFile: (f: File) => void;
}

const Upload: React.FC<UploadProps> = (props) => {
  const { file, setFile } = props;

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) return;
    setFile(droppedFile);
  };

  return (
    <div
      className={`text-center hover:bg-neutral-900 w-full transition duration-100 ease-linear rounded-xl pt-[100%] relative cursor-pointer ${
        file
          ? "border-[1px] border-gray-500/30"
          : "border-[1px] border-dashed hover:border-solid border-gray-500/30"
      }`}
      onClick={(e) => {
        fileInputRef.current?.click();
      }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {file ? (
        <div className="absolute top-0 left-0 h-full w-full rounded-xl overflow-hidden">
          <img
            src={URL.createObjectURL(file)}
            alt="Upload preview"
            className="object-cover h-full w-full"
          />
        </div>
      ) : (
        <div className="absolute flex flex-col top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <span className="flex justify-center mb-4">
            <MdOutlineFileUpload size={36} />
          </span>
          <span className="font-semibold">Drag and drop media</span>
          <span className="text-sky-600 text-sm">Browse files</span>
          <span className="text-neutral-400 text-sm">Max size: 50MB</span>
          <span className="text-neutral-400 text-sm">
            JPG, PNG, GIF, SVG, MP4
          </span>
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
