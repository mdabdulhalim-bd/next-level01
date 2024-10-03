"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {useRouter} from "next/navigation";

const Navbar = () => {

  
    const pathName = usePathname(); // hooked
    console.log(pathName)

    const router = useRouter(); // this is use router Hooked

    const links = [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Meals",
        path: "/meals",
      },
      // {
      //   title: "About",
      //   path: "/about",
      // },
      // {
      //   title: "Contact",
      //   path: "/contact",
      // },
      {
        title: "Services",
        path: "/services",
      },
      {
        title: "Posts",
        path: "/posts",
      },
      // {
      //   title: "Dashboard",
      //   path: "/dashboard",
      // },
    ];

    // Navigate one page to another page
    const handler = () =>{
      router.push('./login')
    }

    // Conditional layouts

    if(pathName.includes('dashboard') )
      return <div className="bg-orange-600 py-4">
        <h1>Dashboard</h1>
      </div>
  return (
    <div>
      <nav className="flex justify-between items-center bg-red-300">
        <h1 className="px-4 py-4 text-3xl font-bold">Logo</h1>
        <ul className="flex gap-6 px-4 py-4">
          {
            links?.map(link => <Link className= {`${pathName === link.path && "text-green-700"}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
        </ul>

        <button onClick = {handler} className="text-xl bg-green-400 px-4 py-2 rounded-lg mr-8">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
