import Image from "next/image";
import Button from "./shared/components/FormElements/Button";
import AirJordan from "../../public/images/main-page/jordan-1.jpg";

export default function Home() {
  return (
    <div className="z-0 h-screen w-screen relative flex items-center justify-center flex-col">
      <div className="h-full w-full absolute">
        <Image
          src={AirJordan}
          layout="fill"
          objectFit="cover"
          alt="Jordan One Shoes"
          quality={100}
        />
        <div className="absolute text-center text-white top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-thin text-base sm:text-lg lg:text-xl xl:text-2xl">
            Experience the epitome of sneaker culture with our exclusive 
            collection of Nike and Jordan 1 shoes. From classic 
            silhouettes to limited releases, we offer the ultimate 
            selection for sneaker enthusiasts and fashion-forward 
            individuals alike.
          </p>
          <div className="flex flex-row sm:flex-row items-center justify-center mt-10">
            <Button 
              href="/" 
              className="bg-white text-black hover:bg-[#fdb49c] hover:text-white 
              font-bold py-4 px-6 mx-2 mb-2 sm:mb-0 sm:mx-4 rounded whitespace-nowrap text-sm sm:text-base lg:text-lg"
              onClick={() => {
                // Handle click logic
              }}
              type="button"
              disabled={false}  
            >
              Shop Men's
            </Button>
            <Button 
              href="/" 
              className="bg-transparent text-white hover:bg-[#fdb49c] hover:text-white 
              border-2 border-white font-bold py-4 px-6 mx-2 mb-2 sm:mb-0 sm:mx-4 rounded whitespace-nowrap text-sm sm:text-base lg:text-lg"
              onClick={() => {
                // Handle click logic
              }}
              type="button"
              disabled={false}  
            >
              Shop Women's
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
