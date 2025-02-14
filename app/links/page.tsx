'use client'

import Link from "next/link";
import { useState, ChangeEvent } from "react";
import addLink from "../assets/addLink.svg";
import Image from "next/image";

interface LinkInfo {
  platform: string;
  url: string;
}

const Links = () => {
  const [links, setLinks] = useState<LinkInfo[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [linkInfo, setLinkInfo] = useState<LinkInfo>({ platform: "", url: "" });

  const handleAddLinkClick = () => {
    setShowForm(true);
  };

  const handleSaveLink = () => {
    setLinks([...links, linkInfo]);
    setShowForm(true);
    setLinkInfo({ platform: "", url: "" });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLinkInfo({ ...linkInfo, [name]: value });
  };

  return (
    <div className="bg-backColor h-full flex flex-col">
      <nav className="flex justify-between bg-white w-[90%] mx-auto my-5 p-5 rounded-lg shadow-md">
        <div>
          <p className="font-extrabold text-xl text-black">devlinks</p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/links"
            className="text-primary hover:text-white bg-primarylow hover:bg-blue-800 border border-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Links
          </Link>
          <Link
            href="/profile"
            className="text-black hover:text-white bg-transparent border hover:bg-gray-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Profile Details
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="text-primary hover:text-white bg-transparent border border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Preview
          </button>
        </div>
      </nav>
      <main className="flex justify-center mb-5 space-x-5">
        <div className="bg-white px-24 py-10 rounded-lg shadow-md">
          <svg
            width="308"
            height="632"
            viewBox="0 0 308 632"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z"
              stroke="#737373"
            />
            <path
              d="M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z"
              fill="white"
              stroke="#737373"
            />
            <circle cx="153.5" cy="112" r="48" fill="#EEEEEE" />
            <rect x="73.5" y="185" width="160" height="16" rx="8" fill="#EEEEEE" />
            <rect x="117.5" y="214" width="72" height="8" rx="4" fill="#EEEEEE" />
            {links.map((link, index) => (
              <g key={index}>
                <rect x="35" y={278 + index * 64} width="237" height="44" rx="8" fill="#EEEEEE" />
                <text x="50" y={303 + index * 64} fill="black">{link.platform}</text>
                <text x="50" y={323 + index * 64} fill="black">{link.url}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="text-black bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Customize your links</h2>
          <p className="mb-6">
            Add/edit/remove links below and then share all your profiles with the world!
          </p>
          {!showForm ? (
            <div>
              <button
                type="button"
                onClick={handleAddLinkClick}
                className="text-primary hover:text-white border border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 mb-4"
              >
                + Add new link
              </button>
              <div className="flex justify-center">
              <Image height={400} width={550} src={addLink} alt="yp" />
                        </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
                  Platform
                </label>
                <input
                  type="text"
                  name="platform"
                  id="platform"
                  value={linkInfo.platform}
                  onChange={handleInputChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                  Link
                </label>
                <input
                  type="url"
                  name="url"
                  id="url"
                  value={linkInfo.url}
                  onChange={handleInputChange}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={handleSaveLink}
                className="text-primary hover:text-white border border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 mb-4"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Links;
