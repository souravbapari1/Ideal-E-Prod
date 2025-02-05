import {
  Facebook,
  Grip,
  Instagram,
  Linkedin,
  Menu,
  PhoneCall,
} from "lucide-react";
import MenuItems, { MobileMenuItems } from "./_nav/MenuItems";

function NavBar() {
  return (
    <div className="w-full md:h-24 h-16 border-white/10 border-b absolute flex justify-between items-center z-50">
      <div className="container h-full">
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex justify-start items-center gap-10 h-full">
            <Link href="/">
              <Image
                src="/logo.png"
                className="md:w-20 w-16 h-auto max-h-16"
                width={1000}
                height={1000}
                alt=""
              />
            </Link>
            <div className="lg:flex hidden justify-start items-center h-full">
              <MenuItems />
            </div>
          </div>
          <div className="lg:hidden flex justify-end items-center">
            <MobileMenuItems>
              <div className="w-8 h-8 rounded-xl bg-primary flex justify-center items-center">
                <Menu className="text-secondary" size={15} />
              </div>
            </MobileMenuItems>
          </div>
          <div className="lg:flex hidden justify-end items-center">
            <ul className="text-primary flex gap-4 text-sm justify-center items-center">
              <li>
                <Link
                  href="https://in.linkedin.com/company/ideal-e-designs"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/share/18r8xDou9o/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <Facebook size={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/idealedesigns/"
                  target="_blank"
                >
                  <Instagram size={18} />
                </Link>
              </li>
              <li>
                <NavBarContact>
                  <div className="w-10 h-10 ml-1 text-white  bg-white/5 rounded-full flex justify-center items-center ">
                    <Grip size={16} />
                  </div>
                </NavBarContact>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { ReactNode } from "react";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

function NavBarContact({ children }: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="border-none">
        <div className="flex justify-evenly items-center gap-10 h-full flex-col">
          <NavContactMenuItems
            icon={<PhoneCall size={40} className="text-primary" />}
            name="Phone"
            value="+91-9315509430"
          />
          <NavContactMenuItems
            icon={<MdEmail size={40} className="text-primary" />}
            name="Email us"
            value="info@idealedesigns.com"
          />
          <NavContactMenuItems
            icon={<GoLocation size={40} className="text-primary" />}
            name="Address"
            value="Gurugram, Haryana, India"
          />
          <div className="border-t w-full py-8">
            <h1 className="text-2xl font-semibold text-center">
              Stay in touch
            </h1>
            <div className="mt-8">
              <ul className="text-primary flex gap-4 text-sm justify-center items-center">
                <li>
                  <Link
                    href="https://in.linkedin.com/company/ideal-e-designs"
                    target="_blank"
                    className="w-10 h-10 rounded-full flex justify-center items-center border border-primary/70"
                  >
                    <Linkedin size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/idealedesigns"
                    target="_blank"
                    className="w-10 h-10 rounded-full flex justify-center items-center border border-primary/70"
                  >
                    <Facebook size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/idealedesigns/"
                    target="_blank"
                    className="w-10 h-10 rounded-full flex justify-center items-center border border-primary/70"
                  >
                    <Instagram size={18} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function NavContactMenuItems({
  icon,
  name,
  value,
}: {
  icon: ReactNode;
  name: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2 text-center items-center ">
      {icon}
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-lg">{value}</p>
    </div>
  );
}
