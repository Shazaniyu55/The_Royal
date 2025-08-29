'use client'
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion";
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
]

const backgroundImages = [
  "/assets/clean2.jpg",
  "/assets/clean4.jpg",
  "/assets/clean1.jpg",
  "/assets/clean4.jpg"
]

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fade, setFade] = useState(true) // Controls the fade animation

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // Start fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % backgroundImages.length
        )
        setFade(true) // Fade in new image
      }, 500) // Fade duration
    }, 5000) // Change every 5s

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={backgroundImages[currentImageIndex]}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Overlay for darkening/lightening */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm shadow-md">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only ">Your Company</span>
              <img
                alt=""
                src="/assets/logo2.png"
                className="h-[50px] w-[100px] rounded-full"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/book"
              className="text-sm/6 font-semibold text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg"
            >
              Book Now
            </a>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/assets/logo2.png"
                  className="h-[50px] w-[100px] rounded-full"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/book"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white bg-blue-500 hover:bg-blue-600"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-10 px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
         <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-semibold tracking-tight text-white sm:text-7xl drop-shadow-lg"
      >
         Royale Cleaners Home and Office Cleaning Services in UK
      </motion.h1>
           <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="mt-8 text-lg font-medium text-white sm:text-xl/8 drop-shadow-lg"
      >
        Book a verified cleaning person for your home or office in UK.
      </motion.p>
           <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mt-10 flex items-center justify-center gap-x-6"
      >
        <a
          href="/book"
          className="rounded-md sm:w-[300px] h-[40px] bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500"
        >
          Book Now
        </a>
      </motion.div>
        </div>
      </div>

      
    </div>
  )
}

export default NavBar;
