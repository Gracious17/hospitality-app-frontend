import Image from "next/image";

export default function Flag1() {
  return (
    <>
      <Image
        src="https://flagcdn.com/w40/bj.png"
        width={16}
        height={12}
        alt="Benin"
        sizes="(max-width: 600px) 16px, (max-width: 1200px) 32px, 48px" // Responsive sizes
      />
    </>
  );
}
