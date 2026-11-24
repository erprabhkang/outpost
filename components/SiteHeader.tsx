import Link from "next/link";
import React from "react";

const siteHeader = () => {
    return (
       <header className="fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between border-b 
       border-white/6 bg-background/70 px-6 backdrop-blur-md md:px-10">
        <Link href={"/"} className="flex item-center"></Link>
       </header>
    );
};

export default siteHeader;