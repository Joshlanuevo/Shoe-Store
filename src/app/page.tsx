import Image from "next/image";
import AirJordan from "../../public/images/main-page/jordan-1.jpg";

export default function Home() {
  return (
    <div className="z-0 h-screen w-screen absolute">
      <div className="h-full w-full">
          <Image
            src={AirJordan}
            layout="fill"
            objectFit="cover"
            alt="Jordan One Shoes"
            quality={100}
          />
          <div className="overlay absolute top-0 right-0 bottom-0 left-0 transition-colors duration-300"></div>
      </div>
    </div>
  );
}
