import { FaEthereum } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";

const Banner: React.FC<Props> = (props) => {
  return (
    <div className="w-full">
      <div className="w-full h-80">
        <img
          src="https://via.placeholder.com/600"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative">
        <img
          src="https://via.placeholder.com/160"
          alt=""
          className="w-40 h-40 rounded-full border-[5px] border-black absolute -top-32 left-4"
        />
        <div className="w-full h-8"></div>
      </div>
      <div className="flex flex-col px-4 gap-2 mt-2">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">Marveal</span>
          <div className="flex gap-4">
            <FiUpload />
            <IoIosMore />
          </div>
        </div>
        <p className="flex gap-4 items-center text-neutral-500">
          <span className="flex gap-1 items-center">
            <FaEthereum />
            <span className="text-neutral-100">0xDd58...BfE2</span>
          </span>
          <span className="">Joined March 2024</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
