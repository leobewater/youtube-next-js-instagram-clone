import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars4Icon,
} from '@heroicons/react/24/outline';

function Header() {
  return (
    <div className="">
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
            alt="Logo"
          />
        </div>
        <div className="relative lg:hidden w-10 h-10 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            alt="Logo"
          />
        </div>

        {/* Middle - Search Input Field */}
        <div className="relative mt-1 p-3 rounded-md">
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
            <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
          </div>
          <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
        </div>

        {/* Right */}
      </div>
    </div>
  );
}

export default Header;
