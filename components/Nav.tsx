import Image from "next/image";
import Link from "next/link";
// width={77.25}
//           height={105.75}
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-0 border-b-2 border-amber-600 bg-white">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={141}
          height={103}
          className="object-contain"
        />
        <p className="logo_text"></p>
      </Link>
    </nav>
  );
};

export default Nav;
