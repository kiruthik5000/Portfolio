import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const items = [
  { Icon: FiMail,   value: "kiruthikvairam5000@gmail.com" },
  { Icon: FiPhone,  value: "+91 8056586308"               },
  { Icon: FiMapPin, value: "Tamil Nadu, India"            },
];

const PersonInformation = () => (
  <div className="flex flex-col gap-1.5">
    {items.map(({ Icon, value }) => (
      <div
        key={value}
        className="flex items-center gap-2.5 px-3 py-2 rounded-lg
                   border border-zinc-200 dark:border-zinc-800/70
                   bg-white/60 dark:bg-zinc-900/20
                   hover:border-zinc-300 dark:hover:border-zinc-700
                   hover:bg-zinc-50 dark:hover:bg-zinc-800/30
                   group transition-all duration-200 cursor-default"
      >
        <Icon
          size={13}
          className="text-zinc-400 dark:text-zinc-500 group-hover:text-accent transition-colors duration-200 shrink-0"
        />
        <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-200">
          {value}
        </span>
      </div>
    ))}
  </div>
);

export default PersonInformation;
