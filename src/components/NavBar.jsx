import Tags from "./Tags"


const NavBar = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 py-4 bg-transparent text-[#030303]">
            <div className=' md:flex items-center gap-[1rem]'>
                <div className='text-center font-bold text-2xl mr-[1rem]'>Hacker News</div>
                <div className="flex gap-2 flex-grow">
                    <div className='border-b-[2px] border-black flex-grow'>
                        <input type="text" className='outline-none bg-transparent flex-grow px-2 py-1' placeholder='Search' />
                    </div>
                    <button className=' font-semibold px-5 py-1 cursor-pointer border border-black bg-black text-white hover:text-black hover:bg-transparent transition-all duration-300 ease-in-out'>Log In</button>
                </div>
            </div>
            <Tags />
        </div>
    )
}

export default NavBar