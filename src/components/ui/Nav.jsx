import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/logo.svg";

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-screen h-16 shadow-sm bg-white opacity-70 backdrop-blur-3xl items-center inset-0 flex">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"}>
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="CCRC IT Club logo"
            height={40}
            width={40}
          />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center">
          <Link href={"/"} className="mr-5 hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link href={"/members"} className="mr-5 hover:text-blue-500 transition duration-300">
            Members
          </Link>
          <Link href={"#"} className="mr-5 hover:text-blue-500 transition duration-300">
            Events
          </Link>
          <Link href={"/notice"} className="mr-5 hover:text-blue-500 transition duration-300">
            Notice
          </Link>
        </nav>
      </div>
    </header>
  );
}
