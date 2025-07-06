import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-amber-50/80 w-full py-3 px-4 flex justify-between  gap-4 border-b-1 fixed top-0 backdrop-blur-md z-50" >

        <div className='text-sm  flex items-center w-[33vh]'>
            <ul className='flex gap-10 cursor-pointer'>
                <li>About</li>
                <li>Contact Us</li>
            </ul>


        </div>
        <div className='w-[33vh]'>
             <Image src="/images/Logo.png" width={200} height={100} alt="Logo" />

        </div>

        <div className='text-sm  flex items-center w-[33vh]'>
            <ul className='flex gap-10'>
                <li>Shop</li>
            </ul>
        </div>
      
     
    </div>
  );
};

export default Header;
