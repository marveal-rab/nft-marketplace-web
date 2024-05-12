import { Input, TextArea } from "@/app/ui";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";

const Profile: React.FC<Props> = (props) => {
  return (
    <div className="ml-16">
      <h2 className="text-3xl font-bold my-12">Profile details</h2>
      <div className="flex gap-6">
        <div className="w-1/2 min-w-[400px] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Username</span>
            <Input placeholder="Username" className="h-12 ps-2" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Bio</span>
            <TextArea placeholder="Tell the world your stroy" className="p-2" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Email Address</span>
            <Input placeholder="Enter email" className="h-12 ps-2" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Social Connections</span>
            <span className="text-xs font-semibold text-neutral-500">
              Help collectors verify your account by connecting social accounts
            </span>
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FaTwitter size={24} />
                  <span className="font-semibold">Twitter</span>
                </div>
                <button className="px-4 py-3 bg-blue-500 rounded-lg font-semibold">
                  Connect
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FaInstagram size={24} />
                  <span className="font-semibold">Instagram</span>
                </div>
                <button className="px-4 py-3 bg-blue-500 rounded-lg font-semibold">
                  Connect
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Links</span>
            <Input placeholder="yoursite.io" className="h-12 ps-2" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Wallet Address</span>
            <span className="flex gap-2 items-center">
              <span className="">0xdd58...bfe2</span>
              <MdOutlineContentCopy size={16} className="cursor-pointer" />
            </span>
          </div>
        </div>
        <div className="w-1/2 min-w-[200px] flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Profile Image</span>
            <img
              src={"http://via.placeholder.com/160"}
              alt=""
              className="rounded-full w-40 h-40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Profile Banner</span>
            <img
              src={"http://via.placeholder.com/160"}
              alt=""
              className="rounded-xl w-40 h-32"
            />
          </div>
        </div>
      </div>
      <button className="mt-8 px-4 py-3 bg-blue-500 rounded-lg">Save</button>
    </div>
  );
};

export default Profile;
