
import { usePagination } from '../hooks/usePagination.js';

const Pagination = ({ nbPages, setPageNumber, page }) => {
    const { pages, setNextPageButtons, setPrevPageButtons, start, steps } = usePagination(nbPages);

    return (
        <div className='flex justify-center items-center col-span-2 gap-2'>
            <button onClick={setPrevPageButtons} className='p-[0.5rem] text-[0.8rem] border-[1px] border-[#e0e1e3]'>Prev</button>
            {
                pages.slice(start, steps).map((item) => (
                    <button key={item} id={item} onClick={setPageNumber} className={`p-[0.5rem] text-[0.8rem] ${page == item ? ' text-black' : ' opacity-50'} border-[1px] border-[#e0e1e3]`}>{item + 1}</button>
                ))
            }
            <button onClick={setNextPageButtons} className='p-[0.5rem] text-[0.8rem] border-[1px] border-[#e0e1e3]'>Next</button>
        </div>
    )
}

export default Pagination