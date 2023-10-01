// app/page.tsx
import Image from "next/image";
import AirJordan from "../../public/images/main-page/jordan-1.jpg";

export default function Home() {
  return (
    <div className="h-screen w-screen relative">
      <div className="h-full w-full relative">
        <Image 
          src={AirJordan} 
          layout="fill" 
          objectFit="cover"
          alt="Jordan One Shoes" 
          quality={100}
          className="main-image"
        />
        <div className="overlay"></div>
      </div>
    </div>
  );
}
