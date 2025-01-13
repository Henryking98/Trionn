import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-20 w-full mix-blend-difference">
            <div className="relative left-1/2 top-14 md:top-10 -translate-x-2/4 flex justify-center items-center space-x-1">
                <div className="w-14 md:w-9 lg:w-6 h-14 md:h-9 lg:h-6 cursor-pointer z-20 flex justify-center items-center">
                    <Image 
                        src="/assets/icons/light-mode.svg"
                        alt="light-mode"
                        width={32}
                        height={32}
                        className="w-full h-full"
                    />
                </div>
                <div className="w-14 md:w-9 lg:w-6 h-14 md:h-9 lg:h-6 cursor-pointer z-20 flex justify-center items-center">
                    <Image 
                        src="/assets/icons/sound-mute.svg"
                        alt="sound-mute"
                        width={32}
                        height={32}
                        className="w-full h-full"
                    />
                </div>
                <div className="tr__header__right"></div>
            </div>
            <div className="h-0 mx-auto flex items-center justify-between absolute top-14 sm:top-10 px-8 xl:px-24 md:px-12 lg:px-16 w-full">
                <div className="flex items-center">
                    <Link href="/">
                        <Image 
                            src="/assets/icons/logo.svg"
                            alt="logo"
                            width={100}
                            height={100}
                            className=""
                        />
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex items-center">
                        <span className="pr-3 text-xs mt-3 cursor-pointer">Menu</span>
                        <Link 
                            href="/"
                            className="bg-[hsla(222,6%,67%,0.2)] relative flex h-16 w-16 wrap items-center justify-end rounded-full pr-4 md:min-h-9 md:w-9 md:pr-2"
                        >
                            <span className="leading-4 text-xs bg-[#e0eeee] -mt-1.5 w-2/4 absolute block h-0.5 transition-all"></span>
                            <span className="leading-4 text-xs mt-1.5 w-1/3 bg-white"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;