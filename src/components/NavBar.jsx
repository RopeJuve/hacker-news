import Tags from "./Tags"


const NavBar = ({ tag, setTag, search, setSearch }) => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 py-4 bg-transparent text-[#030303]">
            <div className=' md:flex items-center gap-[1rem]'>
                <div className='text-center font-extrabold text-6xl mr-[1rem]'>Hacker News</div>
                <div className="flex gap-2 flex-grow">
                    <div className='border-b-[2px] border-black flex-grow'>
                        <input type="text" className='outline-none bg-transparent flex-grow px-2 py-1' placeholder='Search' value={search} onChange={setSearch} />
                    </div>
                    <button className=' font-semibold px-5 py-1 cursor-pointer border border-black bg-black text-white hover:text-black hover:bg-transparent transition-all duration-300 ease-in-out'>Log In</button>
                </div>
            </div>
            <div className='hidden md:flex md:gap-6 md:mt-4 md:items-center'>
                { /* Tags */

                    ['new', 'comments', 'ask', 'show', 'jobs', 'submit'].map((name) => (
                        <Tags key={name} name={name} setTag={setTag} tag={tag} />
                    ))

                }
            </div>
        </div>
    )
}

export default NavBar