import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-20 w-full">
            <div className="h-px relative left-1/2 top-12 -translate-x-2/4 flex justify-center items-center space-x-1">
                <div className="w-7 h-7 cursor-pointer z-20 flex justify-center items-center">
                    <Image 
                        src="/assets/icons/light-mode.svg"
                        alt="light-mode"
                        width={35}
                        height={35}
                        className="w-full h-full tr__cursor__hoverable tr__magnetic"
                    />
                </div>
                <div className="bg-[rgba(217,217,217,0.1)] w-7 h-7 cursor-pointer z-20 flex justify-center items-center rounded-full tr__cursor__hoverable tr__magnetic">
                    <Image 
                        src="/assets/icons/sound-mute.svg"
                        alt="sound-mute"
                        width={35}
                        height={35}
                        className="w-full h-full"
                    />
                </div>
            </div>
            
            <div className="h-0 mx-auto flex items-center justify-between absolute top-12 px-24 w-full">
                <div className="flex items-center">
                    <Link href="/" className="tr__cursor__hoverable">
                        <Image 
                            src="/assets/icons/logo.svg"
                            alt="logo"
                            width={118}
                            height={22}
                            className="-mt-1"
                        />
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex items-center tr__cursor__hoverable">
                        <span className="pr-3 text-xs md:text-base mt-2 cursor-pointer font-dirtyline">Menu</span>
                        <Link 
                            href="/"
                            className="bg-[hsla(222,6%,67%,0.2)] relative flex flex-wrap items-center justify-end rounded-full transition-all h-[2.8rem] w-[2.8rem] pr-2 tr__magnetic"
                        >
                            <span className="leading-4 text-xs bg-[#e0eeee] -mt-1.5 w-2/4 absolute block h-0.5 transition-all"></span>
                            <span className="leading-4 text-xs mt-1.5 w-1/3 bg-white absolute block h-0.5 transition-all"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;