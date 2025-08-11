import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/favicon.png"}
        alt="logo png "
        className="max-md:size-[40px]"
        width={50}
        height={50}
      />
      <h1 className="font-spaceGrotesk text-2xl font-bold md:text-4xl">
        ABU<sub className="text-base">.course</sub>
      </h1>
    </Link>
  );
};

export default Logo;
