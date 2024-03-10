import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt="logo"
        width={40}
        height={40}
        className="rounded-full bg-white border-2 border-white"
      />
      <span>Dev Note</span>
    </div>
  );
}