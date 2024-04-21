import React from 'react';
import LogoIcon from "@/icons/logo.svg";
import SquarePlusIcon from "@/icons/square-plus.svg";
import LayoutIcon from "@/icons/layout.svg";
import Palette from "@/icons/palette.svg";
import FileIcon from "@/icons/file.svg";
import ImageIcon from "@/icons/image.svg";
import AlertCircleIcon from "@/icons/alert-circle.svg";
import SettingsIcon from "@/icons/settings.svg";
import Tooltip from '../ui/tooltip';
import Image from 'next/image';

const Sidebar = () => {
    return (
        <aside className="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-20 w-full items-center justify-center border-b border-gray-200">
          <LogoIcon />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          <a
            href="#"
            className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
          >
            <SquarePlusIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Add elements <span className="text-gray-400">(A)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <LayoutIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Layouts <span className="text-gray-400">(Y)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <Palette className="h-6 w-6 stroke-current" />
            <Tooltip>
              Themes <span className="text-gray-400">(T)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <FileIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Assets <span className="text-gray-400">(S)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <ImageIcon className="h-6 w-6 fill-current" />
            <Tooltip>
              Images <span className="text-gray-400">(I)</span>
            </Tooltip>
          </a>
        </nav>
        <div className="flex flex-col items-center gap-y-4 py-10">
          <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <AlertCircleIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Help <span className="text-gray-400">(H)</span>
            </Tooltip>
          </button>
          <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <SettingsIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Settings <span className="text-gray-400">(T)</span>
            </Tooltip>
          </button>
          <button className="mt-2 rounded-full bg-gray-100">
            <Image
              width={40}
              height={40}
              className="h-10 w-10 object-cover"
              src="/img/logo.png"
              alt=""
            />
          </button>
        </div>
      </aside>
    );
};

export default Sidebar;