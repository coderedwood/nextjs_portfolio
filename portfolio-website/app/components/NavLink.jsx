import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href,title}) => {
    const pathname = usePathname();
    console.log(pathname);
    return(
        <Link href={href} className='block py-2 pl-3 pr-4 text-black relative sm:text-xl rounded group md:p-0 hover:text-gray-400 group'>{title}
        <span className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? 'w-full':'w-0'}`}>&nbsp;</span>
        </Link>
    );
};

export default NavLink;