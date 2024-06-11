import { timeAgo, formatDate } from "../utils/helperFunctions";

const CardNews = ({ item, search, highlightedText }) => {
    const { title, created_at, author, url, points } = item;

    return (
        <div className="flex flex-col gap-2 mb-[2.5rem] lg:self-center max-w-[400px]">
            <a className='text-[1.6rem] font-bold leading-7 tracking-wide text-pretty' href={url ? url : item.story_url} target='_blank' dangerouslySetInnerHTML={{ __html: highlightedText(title ? title : item.story_title, search) }}></a>
            <div>
                <span className='p-[0.3rem] pl-0 text-[0.7rem] border-r-[1px] border-black'>{formatDate(created_at)}</span>
                <span className='p-[0.3rem] text-[0.7rem] border-r-[1px] border-black'>{author}</span>
                <span className='p-[0.3rem] text-[0.7rem] border-r-[1px] border-black'>{points ? points : 0} points</span>
                <span className='p-[0.3rem] text-[0.7rem] opacity-50'>{timeAgo(created_at)}</span>
            </div>
        </div>
    )
}

export default CardNews