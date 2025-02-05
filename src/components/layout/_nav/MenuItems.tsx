import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Facebook, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "./NavLink";
import Link from "next/link";

function MenuItems() {
  return (
    <ul className="flex lg:flex-row flex-col  lg:gap-8 gap-4 text-white font-semibold mt-2 lg:w-auto w-full lg:h-full transition-all">
      <li className="hover:text-primary lg:border-b-0 border-b lg:pb-0 pb-4 lg:w-auto w-full lg:h-full flex lg:justify-center justify-start items-center cursor-pointer transition-colors duration-300">
        <NavLink exact href="/">
          Home
        </NavLink>
      </li>
      <li className="hover:text-primary lg:border-b-0 border-b lg:pb-0 pb-4 lg:w-auto w-full lg:h-full flex lg:justify-center justify-start items-center cursor-pointer transition-colors duration-300">
        <NavLink href="/about">About</NavLink>
      </li>
      <li className="hover:text-primary lg:border-b-0 border-b lg:pb-0 pb-4 lg:w-auto w-full lg:h-full flex lg:justify-center justify-start items-center cursor-pointer transition-colors duration-300">
        <NavLink href="/services">Services</NavLink>
      </li>
      <li className="hover:text-primary lg:border-b-0 border-b lg:pb-0 pb-4 lg:w-auto w-full lg:h-full flex lg:justify-center justify-start items-center cursor-pointer transition-colors duration-300">
        <NavLink href="/portfolio">Portfolio</NavLink>
      </li>
      <li className="hover:text-primary lg:border-b-0 border-b lg:pb-0 pb-4 lg:w-auto w-full lg:h-full flex lg:justify-center justify-start items-center cursor-pointer relative group transition-all duration-300 ease-in-out">
        <span className="flex gap-4 justify-between items-center">
          Pages{" "}
          <ChevronDown
            size={15}
            className="mt-1.5 group-hover:rotate-180 group-hover:text-primary  transition-transform duration-300 ease-in-out"
          />
        </span>
        <ul className="absolute bg-primary hidden group-hover:flex text-secondary p-8 top-0 lg:mt-20 mt-10 shadow-md flex-col gap-5 w-60 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <li>
            <Link className=" block w-full" href="/pages/testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className=" block w-full" href="/pages/faqs">
              FAQ
            </Link>
          </li>
          <li>
            <Link className=" block w-full" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className=" block w-full" href="/pages/privacy-policy">
              Privacy & Policy
            </Link>
          </li>
          <li>
            <Link className=" block w-full" href="/pages/terms-conditions">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </li>
      <li className="hover:text-primary lg:border-b-0 border-b lg:pb-0 pb-4 lg:w-auto w-full lg:h-full flex lg:justify-center justify-start items-center cursor-pointer transition-colors duration-300">
        <NavLink href="/blog">Blog</NavLink>
      </li>
      <li className="hover:text-primary lg:border-b-0 border-b lg:pb-0 pb-4 lg:w-auto w-full lg:h-full flex lg:justify-center justify-start items-center cursor-pointer transition-colors duration-300">
        <NavLink href="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default MenuItems;

export function MobileMenuItems({ children }: { children: any }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <MenuItems />
        <ul className="text-primary flex gap-6 text-sm justify-center mt-10 items-center">
          <li>
            <Link
              href="https://in.linkedin.com/company/ideal-e-designs"
              target="_blank"
            >
              <Linkedin size={22} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/share/18r8xDou9o/?mibextid=wwXIfr"
              target="_blank"
            >
              <Facebook size={22} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/idealedesigns/"
              target="_blank"
            >
              <Instagram size={21} />
            </Link>
          </li>
        </ul>
        <p className=" text-center mt-10 text-white">+91-9315509430</p>
        <p className="text-primary text-center mt-5 ">info@idealedesigns.com</p>
        <p className=" text-center mt-5 text-white">Gurugram, Haryana, India</p>
      </SheetContent>
    </Sheet>
  );
}
