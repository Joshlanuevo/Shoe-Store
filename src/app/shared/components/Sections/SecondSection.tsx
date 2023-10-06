import Image from "next/image";
import Button from "../FormElements/Button";

import MensImage from "../../../../../public/images/main-page/mens-section.png";
import WomensImage from "../../../../../public/images/main-page/womens-section.png";

const SecondSection = () => {
    return ( 
        <div className="z-0 h-screen w-screen relative flex">
            <div className="kids-section-images flex-1 flex flex-wrap sm:flex-col md:flex-row lg:flex-row">
                <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                    <Image
                    src={MensImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Jordan One Shoes"
                    quality={100}
                    />
                    <div className="absolute top-0 right-0 left-0 h-full flex items-center justify-center uppercase">
                        <Button
                            href="/"
                            className="bg-black text-white hover:bg-[#fdb49c] hover:text-white  font-bold py-4 px-6 mx-2 mb-2 sm:mb-0 sm:mx-4 rounded whitespace-nowrap text-sm sm:text-base lg:text-lg"
                            onClick={() => {
                            // Handle click logic
                            }}
                            type="button"
                            disabled={false}
                        >
                            Shop Men
                        </Button>
                    </div>
                </div>
                <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                    <Image
                    src={WomensImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Jordan One Shoes"
                    quality={100}
                    />
                    <div className="absolute top-0 right-0 left-0 h-full flex items-center justify-center uppercase">
                        <Button
                            href="/"
                            className="bg-black text-white hover:bg-[#fdb49c] hover:text-white font-bold py-4 px-6 mx-2 mb-2 sm:mb-0 sm:mx-4 rounded whitespace-nowrap text-sm sm:text-base lg:text-lg"
                            onClick={() => {
                            // Handle click logic
                            }}
                            type="button"
                            disabled={false}
                        >
                            Shop Women
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SecondSection;