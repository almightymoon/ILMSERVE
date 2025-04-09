"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false); 
  };

  return (
    <header className="bg-white font-[Poppins]">
      <nav
        className="mx-auto xl2-max-w-7xl flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img src="/Logo.png" alt="Desktop Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Desktop Nav Links Centered */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center gap-x-12 ">
          {["Home", "About Us", "Services", "Contact Us"].map((link) => (
            <a
              key={link}
              href="#"
              className={`text-lg whitespace-nowrap ${
                activeLink === link ? "text-[#096D6D]" : "text-gray-900"
              } hover:text-[#096D6D] transition-all duration-300 ease-in-out`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <button
            className="w-40 bg-transparent text-base px-3 py-2.5 rounded-lg hover:text-[#096D6D] font-[Montserrat] transition-all duration-300 ease-in-out"
            onClick={() => handleLinkClick("sign in")}
          >
            Sign Up
          </button>
          <button
            className="w-40 bg-[#096D6D] text-white text-base px-3 py-2.5 rounded-lg hover:bg-[#075B5B] font-[Montserrat] transition-all duration-300 ease-in-out"
            onClick={() => handleLinkClick("Log in")}
          >
            Log In
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog with Animation */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-black/50" />
        <DialogPanel
          className={`fixed inset-y-0 right-0 z-20 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 overflow-y-auto transition-transform duration-500 ease-in-out ${
            mobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img src="/Logo.png" alt="Mobile Logo" className="h-12 w-auto" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {["Home", "About Us", "Services", "Contact Us"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                      activeLink === link ? "text-[#096D6D]" : "text-gray-900"
                    } hover:bg-gray-50 transition-all duration-300 ease-in-out`}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="py-7 space-y-3">
                <button
                  className="w-full border border-[#096D6D] bg-transparent text-[#096D6D] text-base px-3 py-2.5 rounded-lg hover:bg-[#096D6D] hover:text-white font-[Montserrat] transition-all duration-300 ease-in-out"
                  onClick={() => handleLinkClick("Sign in")}
                >
                  Sign In
                </button>
                <button
                  className="w-full bg-[#096D6D] text-white text-base px-3 py-2.5 rounded-lg hover:bg-[#075B5B] font-[Montserrat] transition-all duration-300 ease-in-out"
                  onClick={() => handleLinkClick("Log in")}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
