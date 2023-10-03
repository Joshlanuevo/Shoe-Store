import Image from "next/image";
import Button from "./shared/components/FormElements/Button";

import ErrorImage from "../../public/images/etc/1469027859-jordan-1.jpg";

const NotFound = () => {
    return ( 
        <div className="z-0 w-screen relative">
            <div className="h-96 w-full absolute">
                <Image
                    src={ErrorImage}
                    // layout="fill"
                    alt="Jordan One Shoes"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: 'cover',
                    }}
                />
            </div>
            <div className="error-message">
                <h1 className="text-4xl font-bold text-black">404 Error</h1>
                <p className="text-lg text-black font-light whitespace-nowrap">
                We can't seem to find the page you're looking for.
                </p>
                <div className="flex flex-row sm:flex-row items-center justify-center mt-10 uppercase">
                    <Button 
                        href="/" 
                        className="bg-[#fdb49c] text-white hover:bg-transparent hover:text-black 
                        hover:border-solid border-2 border-[#fdb49c] font-medium sm:mb-0 sm:mx-4
                        whitespace-nowrap py-4 px-6 mx-4 rounded"
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
                        className="bg-[#fdb49c] text-white hover:bg-transparent hover:text-black 
                        hover:border-solid border-2 border-[#fdb49c] font-medium sm:mb-0 sm:mx-4 
                        whitespace-nowrap py-4 px-6 mx-4 rounded"
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
    );
}
 
export default NotFound;
