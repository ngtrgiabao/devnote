import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        // src="/logo.svg"
        src="https://i.pinimg.com/564x/c2/b3/ab/c2b3ab0487059e5ad5b35c502f80a0aa.jpg"
        alt="logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span>Udemy Clone</span>
    </div>
  );
}