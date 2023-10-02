import Image from "next/image";
import Link from "next/link";

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
                <p className="text-lg text-black font-light">
                We can't seem to find the page you're looking for.
                </p>
                <div className="mt-10">
                    <Link 
                        href="/" 
                        className="bg-[#2a2727] hover:bg-blue-700 text-white 
                        font-bold py-4 px-6 mx-4 rounded"
                    >
                        Shop Men's
                    </Link>
                    <Link 
                        href="/" 
                        className="bg-[#2a2727] hover:bg-blue-700 text-white 
                        font-bold py-4 px-6 mx-4 rounded">
                        Shop Women's
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default NotFound;