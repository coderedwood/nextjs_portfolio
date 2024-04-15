import Link from "next/link";
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight:['400'],
  variable: '--font-pacifico'
})

const Logo = () => {
    return(
        <Link href={"/"} className={`flex items-center justify-center text-4xl md:text-4xl ${pacifico.variable} font-logo text-black font-semibold rounded-full w-16 h-16 dark:border-2 dark:border-solid dark:border-black`}>DR</Link>
    );
};

export default Logo;