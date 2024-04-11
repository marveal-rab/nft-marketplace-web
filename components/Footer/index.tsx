"use client";

import { title } from "process";
import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaRedditAlien,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Icons: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const items: React.ReactNode[] = [
    <FaXTwitter size={24} />,
    <FaInstagram size={24} />,
    <FaDiscord size={24} />,
    <FaRedditAlien size={24} />,
    <FaYoutube size={24} />,
    <FaTiktok size={24} />,
    <MdAlternateEmail size={24} />,
  ];

  return (
    <>
      {items.map((el, index) => {
        return (
          <div
            key={index}
            className="flex w-12 h-12 justify-center items-center bg-neutral-800/70 rounded-xl hover:bg-neutral-600/70"
          >
            {el}
          </div>
        );
      })}
    </>
  );
};

interface FooterLinkData {
  title: string;
  href: string;
}
interface FooterLinkProps
  extends FooterLinkData,
    React.HTMLAttributes<HTMLElement> {
  title: string;
  href: string;
}

interface FooterLinksProps extends React.HTMLAttributes<HTMLElement> {
  data: FooterLinkData[];
  title: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ ...props }) => {
  const { title, href } = props;
  return (
    <a
      href={href}
      className="transition ease-in duration-100 hover:text-neutral-50 hover:scale-[101%]"
    >
      {title}
    </a>
  );
};

const FooterLinks: React.FC<FooterLinksProps> = ({ ...props }) => {
  const { data, title } = props;
  return (
    <div className="flex-row space-y-4">
      <span className="text-base font-bold">{title}</span>
      <div className="flex flex-col space-y-2 text-neutral-200 text-sm">
        {data.map((el, index) => (
          <FooterLink key={index} {...el} />
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const tutorial = [
    {
      href: "#",
      title: "What is an NFT?",
    },
    {
      href: "#",
      title: "How to buy an NFT",
    },
    {
      href: "#",
      title: "What are NFT drops?",
    },
    {
      href: "#",
      title: "How to sell an NFT using OpenSea",
    },
    {
      href: "#",
      title: "How to create an NFT on OpenSea",
    },
    {
      href: "#",
      title: "What is a crypto wallet?",
    },
    {
      href: "#",
      title: "What is cryptocurrency?",
    },
    {
      href: "#",
      title: "What are blockchain gas fees?",
    },
    {
      href: "#",
      title: "What is a blockchain?",
    },
    {
      href: "#",
      title: "What is web3?",
    },
    {
      href: "#",
      title: "How to stay protected in web3",
    },
  ];

  const myAccount = [
    {
      href: "#",
      title: "Profile",
    },
    {
      href: "#",
      title: "Settings",
    },
  ];

  const drops = [
    {
      href: "#",
      title: "Featured",
    },
    {
      href: "#",
      title: "Learn more",
    },
  ];

  const stats = [
    {
      href: "#",
      title: "Ranking",
    },
    {
      href: "#",
      title: "Activity",
    },
  ];

  const marketplace = [
    {
      href: "#",
      title: "Art",
    },
    {
      href: "#",
      title: "Gaming",
    },
    {
      href: "#",
      title: "Memberships",
    },
    {
      href: "#",
      title: "PFPs",
    },
    {
      href: "#",
      title: "Photography",
    },
    {
      href: "#",
      title: "Music",
    },
  ];

  return (
    <div className="bg-gray-600/30">
      <div className="max-w-screen-2xl mx-auto px-16 pt-6 ">
        <div className="flex justify-between w-full py-12 border-solid border-b-[1px] border-b-neutral-600/30">
          <div className="flex-row space-y-4 w-[48%]">
            <p className="text-xl font-bold">Stay in the loop</p>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </p>
            <form action="#" className="flex space-x-4 w-full">
              <input
                type="text"
                placeholder="Your email address"
                className="rounded-xl ps-2 text-neutral-200 w-full bg-neutral-900/70 border-neutral-300/30 focus:outline-none border-[1px] focus-within:border-neutral-300/70"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-sky-500 rounded-xl text-nowrap"
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="flex-row space-y-4 w-[48%]">
            <p className="text-xl font-bold">Join the community</p>
            <div className="flex space-x-4">
              <Icons />
            </div>
          </div>
        </div>
        <div className="flex justify-between space-x-4 items-center w-full h-full py-12 border-solid border-b-[1px] border-b-neutral-600/30">
          <div className="w-1/4 flex-row space-y-4">
            <p className="text-xl font-bold">Twin Capes</p>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>
          <div className="flex w-3/4 space-x-4 justify-evenly">
            <FooterLinks data={marketplace} title="Marketplace" />
            <div className="flex flex-col space-y-12">
              <FooterLinks data={drops} title="Drops" />
              <FooterLinks data={stats} title="Stats" />
            </div>
            <FooterLinks data={myAccount} title="My Account" />
            <FooterLinks data={tutorial} title="Tutorial" />
          </div>
        </div>
        <div className="flex justify-between text-xs py-6 px-2">
          <div className="">© 2024 - 2024 Marveal, Org</div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="transition ease-in duration-100 hover:text-neutral-50 hover:scale-105"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition ease-in duration-100 hover:text-neutral-50 hover:scale-105"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
