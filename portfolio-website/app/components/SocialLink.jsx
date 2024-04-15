import Link from "next/link";
import Image from "next/image";

const SocialLink = ({href,title,image}) => {
    return(
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
            <Image src={image} alt={title} width={30} height={30}/>
        </Link>
    );
};

export default SocialLink;