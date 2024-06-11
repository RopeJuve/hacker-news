
import CardNews from './CardNews'
import { getHighlightedText } from '../utils/helperFunctions';
import TopNews from './TopNews';
import Pagination from './Pagination';

const ListOfNews = ({ news, search, nbResults, nbPages, setPage, page }) => {

    return (
        <div className='max-w-[1200px] h-[calc(100vh - 90px)] mx-auto px-2 md:grid md:grid-cols-news gap-x-2 gap-y-3 mt-[2.5rem] pb-[1.5rem]'>
            <span className='col-span-2 justify-self-end opacity-50'>{nbResults} results</span>
            <div className='flex flex-col gap-4 p-[1rem] lg:grid lg:grid-cols-2 lg:grid-rows-custom'>
                {news.map((item) => (
                    <CardNews key={item.objectID} item={item} search={search} highlightedText={getHighlightedText} />
                ))}
                <Pagination nbPages={nbPages} setPageNumber={setPage} page={page} />
            </div>
            <TopNews />
        </div>
    )
}

export default ListOfNews