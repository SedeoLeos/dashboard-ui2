import React from 'react';
import ChevronDownIcon from "@/icons/chevron-down.svg";
import EyeIcon from "@/icons/eye.svg";
import DeviceDesktopIcon from "@/icons/device-desktop.svg";
import UsersIcon from "@/icons/users.svg";
import AlignBottomIcon from "@/icons/align-bottom.svg";
import AlignCenterIcon from "@/icons/align-center.svg";
import AlignLeftIcon from "@/icons/align-left.svg";
import AlignRightIcon from "@/icons/align-right.svg";
import AlignTopIcon from "@/icons/align-top.svg";
import AlignMiddleIcon from "@/icons/align-middle.svg";
import Accordion from '../ui/accordion';

const Leftbar = () => {
    return (
        <aside className="flex h-screen w-[420px] flex-col border-l border-gray-200 bg-white">
        <div className="flex h-20 items-center gap-x-4 border-b border-gray-200 px-6">
          <button className="flex items-end justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <UsersIcon className="h-5 w-5 stroke-current text-gray-400" />
            <span className="text-sm font-semibold leading-6">Invite</span>
          </button>
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-blue-600 px-4 py-2 text-sm leading-6 text-white">
            Publish
          </button>
        </div>
        <div className="flex flex-1 flex-col overflow-y-scroll">
          <div className="flex items-center justify-between border-b border-gray-200 py-4 px-6">
            <span className="text-sm font-semibold"> Selector </span>
            <span className="text-sm text-gray-400">
              Inheriting{" "}
              <span className="text-sm font-medium text-gray-900">
                2 Selectors
              </span>
            </span>
          </div>
          <div className="border-b border-gray-200 py-4 px-6">
            <button className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5">
              <div className="flex items-center gap-x-2">
                <span className="rounded-lg bg-white p-1 shadow">
                  <DeviceDesktopIcon className="h-5 w-5 stroke-current text-blue-600" />
                </span>
                <span className="rounded-lg bg-blue-100 py-1 px-3 text-sm font-semibold text-blue-600 ">
                  H1 - hero_title
                </span>
              </div>
              <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
            </button>
            <div className="mt-2 text-xs text-gray-400">
              1 on this page, 7 on other pages
            </div>
          </div>
          <Accordion title="layout">
            <div className="flex items-center justify-between">
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <AlignBottomIcon className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <AlignCenterIcon className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <AlignLeftIcon className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <AlignRightIcon className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <AlignTopIcon className="h-5 w-5 stroke-current text-gray-400" />
              </button>
              <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                <AlignMiddleIcon className="h-5 w-5 stroke-current text-gray-400" />
              </button>
            </div>
          </Accordion>
          <Accordion title="spacing">
            <div className="relative flex items-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-12">
              <span className="absolute top-2 left-2 text-[10px] uppercase text-gray-400">
                margin
              </span>
              <span className="absolute bottom-12 right-14 text-[10px] uppercase text-gray-400">
                padding
              </span>
              <div className="relative w-full">
                <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center gap-2">
                  <input
                    className="h-4 w-4 text-center text-sm outline-none"
                    defaultValue={20}
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                  <input
                    className="h-4 w-4 text-center text-sm outline-none"
                    defaultValue={0}
                  />
                </div>
                <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center gap-2">
                  <input
                    className="h-4 w-4 text-center text-sm outline-none"
                    defaultValue={0}
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                  <input
                    className="h-4 w-4 text-center text-sm outline-none"
                    defaultValue={0}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center gap-2">
                  <input
                    className="h-4 w-4 text-center text-sm outline-none"
                    defaultValue={0}
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                  <input
                    className="h-4 w-4 text-center text-sm outline-none"
                    defaultValue={20}
                  />
                </div>
                <div className="absolute inset-y-0 left-0 flex -translate-x-1/2 items-center gap-2">
                  <input
                    className="h-4 w-4 text-center text-sm outline-none"
                    defaultValue={0}
                  />
                  <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                  <input
                    className="h-4 w-4 text-center text-sm outline-none"
                    defaultValue={0}
                  />
                </div>
                <div className="h-24 w-full rounded-xl border-2 border-blue-600 px-10 py-8">
                  <div className="h-full w-full rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="size">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center px-4">
                    <span className="text-sm text-gray-400">W</span>
                  </div>
                  <input
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                    type="text"
                    defaultValue="Auto"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center px-4">
                    <span className="text-sm text-gray-400">H</span>
                  </div>
                  <input
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                    type="text"
                    defaultValue="Auto"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center px-4">
                    <span className="text-sm text-gray-400">Min W</span>
                  </div>
                  <input
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                    type="text"
                    defaultValue="Auto"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center px-4">
                    <span className="text-sm text-gray-400">Max W</span>
                  </div>
                  <input
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                    type="text"
                    defaultValue="Auto"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center px-4">
                    <span className="text-sm text-gray-400">Max W</span>
                  </div>
                  <input
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                    type="text"
                    defaultValue="Auto"
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center px-4">
                    <span className="text-sm text-gray-400">Max H</span>
                  </div>
                  <input
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                    type="text"
                    defaultValue="Auto"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <button className="relative w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-right">
                  <div className="absolute inset-y-0 flex items-center px-4">
                    <span className="text-sm text-gray-400">Overflow</span>
                  </div>
                  <span className="flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
                    <EyeIcon className="h-5 w-5 stroke-current text-gray-400" />
                    <span>Invisible</span>
                  </span>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4">
                    <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                  </div>
                </button>
              </div>
            </div>
          </Accordion>
          <Accordion title="typography"></Accordion>
          <Accordion title="position"></Accordion>
          <Accordion title="border"></Accordion>
          <Accordion title="background"></Accordion>
        </div>
      </aside>
    );
};

export default Leftbar;