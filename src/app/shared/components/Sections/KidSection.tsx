import Image from "next/image";
import Button from "../FormElements/Button";

import KidsImage from "../../../../../public/images/main-page/kids-section.png";
import KidsImageTwo from "../../../../../public/images/main-page/kids-section-2.png";

const KidSection = () => {
    return (
        <div className="z-0 h-screen w-screen relative flex">
            <div className="kids-section-images flex-1 flex flex-wrap sm:flex-col md:flex-row lg:flex-row">
                <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                    <Image
                    src={KidsImageTwo}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Jordan One Shoes"
                    quality={100}
                    />
                </div>
                <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                    <Image
                    src={KidsImage}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Jordan One Shoes"
                    quality={100}
                    />
                </div>
            </div>

            <div className="absolute top-0 right-0 h-full flex flex-col items-end justify-end p-8">
                <div className="text-right">
                    <h1 className="font-extrabold text-6xl text-white">Kids Section</h1>
                    <p className="sm:text-lg lg:text-md xl:text-md text-black">
                        Easy On and Off Shoes
                    </p>
                    <div className="flex flex-col sm:flex-row items-end justify-end mt-4 mb-10">
                        <Button
                            href="/"
                            className="bg-white text-black hover:bg-[#fdb49c] hover:text-white font-bold py-4 px-8 mx-2 mb-2 sm:mb-0 sm:mx-4 rounded whitespace-nowrap text-sm sm:text-base lg:text-lg"
                            onClick={() => {
                                // Handle click logic
                            }}
                            type="button"
                            disabled={false}
                        >
                            Shop Kids
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidSection;
