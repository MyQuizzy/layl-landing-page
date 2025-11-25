"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        handleScroll();

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-start space-x-8">
                    <Link href="/" className={`text-2xl mr-24 font-bold ${scrolled ? "text-black" : "text-white"}`}>
                        LAYL
                    </Link>
                    <div className="flex-1" />
                    <div className="flex items-center space-x-4">
                        <Link
                            href="#contact"
                            className={`hover:opacity-80 ${scrolled ? "text-black" : "text-white"}`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="#get-started"
                            className={`px-4 py-2 rounded-full transition-colors duration-300 ${scrolled
                                ? "bg-black text-white hover:bg-black/80"
                                : "bg-white text-black hover:bg-white/90"
                                }`}
                        >
                            Get started
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}