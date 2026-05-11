"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, HardHat, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/travaux", label: "Travaux" },
  { href: "/renovation", label: "Rénovation" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1B3A6B] text-white">
              <HardHat className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-[#1B3A6B] tracking-tight">
              BATIMTEC
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-[#1B3A6B] text-white"
                    : "text-gray-600 hover:text-[#1B3A6B] hover:bg-blue-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile trigger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+33986669610"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#1B3A6B] hover:text-[#C9A84C] transition-colors"
            >
              <Phone className="w-4 h-4" />
              09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
            </a>
            <ButtonLink
              href="/contact"
              size="sm"
              className="hidden md:inline-flex bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#E8D08A] font-bold"
            >
              Devis gratuit
            </ButtonLink>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={<Button variant="ghost" size="icon" className="md:hidden" />}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-12">
                <div className="flex items-center gap-2 mb-8">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1B3A6B] text-white">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-black text-[#1B3A6B]">BATIMTEC</span>
                </div>
                <nav className="flex flex-col gap-1">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "bg-[#1B3A6B] text-white"
                          : "text-gray-600 hover:text-[#1B3A6B] hover:bg-blue-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 pt-8 border-t space-y-3">
                  <ButtonLink
                    href="/contact"
                    className="w-full justify-center bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#E8D08A] font-bold"
                    onClick={() => setOpen(false)}
                  >
                    Devis gratuit
                  </ButtonLink>
                  <a
                    href="tel:+33986669610"
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-[#1B3A6B]"
                  >
                    <Phone className="w-4 h-4" />
                    09&nbsp;86&nbsp;66&nbsp;96&nbsp;10
                  </a>
                  <a
                    href="tel:+33623080105"
                    className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500"
                  >
                    <Phone className="w-4 h-4" />
                    06&nbsp;23&nbsp;08&nbsp;01&nbsp;05
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
