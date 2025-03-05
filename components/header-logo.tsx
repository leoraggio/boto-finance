import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logoipsum-296.svg" width={28} height={28} alt="Logo" />
        <p className="font-semibold text-white text-2xl ml-2.5">
          Exiva Finance
        </p>
      </div>
    </Link>
  );
};
