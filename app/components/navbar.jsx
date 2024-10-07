// @flow strict
"use client";


// import Link from "next/link";
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// function Navbar() {
//   const navigation = [
//     { name: 'ABOUT', href: '/#about' },
//     { name: 'EXPERIENCE', href: '/#experience' },
//     { name: 'SKILLS', href: '/#skills' },
//     { name: 'EDUCATION', href: '/#education' },
//     { name: 'BLOGS', href: '/blog' },
//     { name: 'PROJECTS', href: '/#projects' },
//   ];

//   return (
//     <Disclosure as="nav" className="relative bg-transparent">
//       {/* Blurred Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: 'url("/image/climate-change.png")',
//           filter: 'blur(2px)',  // Adjust blur amount as needed
//           zIndex: '-1',         // Ensures the background is behind the content
//         }}
//       ></div>

//       {/* White Overlay */}
//       <div className="absolute inset-0 bg-white opacity-50" style={{ zIndex: '0' }}></div>

//       {/* Content */}
//       <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex flex-shrink-0 items-center">
//             <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
//               ABU SAID
//             </Link>
//           </div>
//           <div className="hidden sm:ml-6 sm:block">
//             <div className="flex space-x-4">
//               {navigation.map((item) => (
//                 <Link key={item.name} href={item.href} className="text-[#08306b] transition-colors duration-300 hover:text-[#4292c6] rounded-md px-3 py-2 text-sm font-medium">
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           {/* Mobile menu button */}
//           <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//             <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#16f2b3] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//               <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
//             </Disclosure.Button>
//           </div>
//         </div>
//       </div>

//       <Disclosure.Panel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <Disclosure.Button
//               key={item.name}
//               as="a"
//               href={item.href}
//               className="block rounded-md px-3 py-2 text-base font-medium text-[#08306b] hover:text-[#4292c6]"
//             >
//               {item.name}
//             </Disclosure.Button>
//           ))}
//         </div>
//       </Disclosure.Panel>
//     </Disclosure>
//   );
// }

// export default Navbar;

import Link from "next/link";


function Navbar() {
  return (
    <nav className="relative bg-transparent">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/image/climate-change.png")',
          filter: 'blur(2px)',  // Adjust blur amount as needed
          zIndex: '-1',         // Ensures the background is behind the content
        }}
      ></div>

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-50" style={{ zIndex: '0' }}></div>

      {/* Content */}
      <div className="relative flex items-center justify-between py-5 mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            ABU SAID
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-[#08306b] transition-colors duration-300 hover:text-[#4292c6]">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-[#08306b] transition-colors duration-300 hover:text-[#4292c6]">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-[#08306b] transition-colors duration-300 hover:text-[#4292c6]">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-[#08306b] transition-colors duration-300 hover:text-[#4292c6]">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog">
              <div className="text-sm text-[#08306b] transition-colors duration-300 hover:text-[#4292c6]">BLOGS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-[#08306b] transition-colors duration-300 hover:text-[#4292c6]">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
