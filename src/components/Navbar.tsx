"use client";
import React, { useState }  from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
        className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href="/">
                <MenuItem setActive={setActive} active={active} item="Home" >
                </MenuItem>
            </Link>
            <Link href="/course">
                <MenuItem setActive={setActive} active={active} item="course" >
                </MenuItem>
            </Link>
            <Link href="/about">
                <MenuItem setActive={setActive} active={active} item="about" >
                </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar