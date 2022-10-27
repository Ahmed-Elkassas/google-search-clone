import React from "react";
import {NavLink} from 'react-router-dom';

const links = [
  {
    url: "/search",
    text: "🔎 All",
  },
  {
    url: "/image",
    text: "📸 Images",
  },
  {
    url: "/news",
    text: "📰 News",
  },
  {
    url: "/Videos",
    text: "📺 Videos",
  },
];

export const Links = () => {
  return <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(link => {
      return <NavLink className={(navData) => navData.isActive ? "border-b-2 border-blue-700 text-gray-600 dark:text-gray-200" : ""} to={link.url}>{link.text}</NavLink>
    })}
  </div>;
};
