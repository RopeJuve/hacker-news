import { useEffect, useState } from "react"
import { formatDate, timeAgo } from "../utils/helperFunctions"


const TopNews = () => {
    const [topStory, setTopStory] = useState([])
    const url = 'https://hacker-news.firebaseio.com/v0/beststories.json'
    useEffect(() => {
        const getTopStory = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("HTTP Error! status: " + response.status)
                }
                const data = await response.json()
                const storyData = data.slice(0, 10).map(async (id) => {
                    const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    if (!storyResponse.ok) {
                        throw new Error("HTTP Error! status: " + storyResponse.status)
                    }
                    return storyResponse.json()
                })

                const story = await Promise.all(storyData)
                setTopStory(story);
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }
        getTopStory()
    }, [])

    return (
        <div className="border-l-[2px] border-black pl-[1.5rem]">
            <h2 className="text-5xl font-bold mb-[2.5rem]">All Time Best </h2>
            {topStory.map((story) => (
                <div key={story.id} className="flex flex-col gap-2 mb-[2rem]">
                    <a className='text-[1.5rem] font-bold leading-7 tracking-wide text-pretty' href={story.url} target='_blank'>{story.title}</a>
                    <div>
                        <span className='p-[0.3rem] pl-0 text-[0.7rem] border-r-[1px] border-black'>{formatDate(story.time)}</span>
                        <span className='p-[0.3rem] text-[0.7rem] border-r-[1px] border-black'>{story.by}</span>
                        <span className='p-[0.3rem] text-[0.7rem] border-r-[1px] border-black'>{story.score} score</span>
                        <span className='p-[0.3rem] text-[0.7rem] opacity-50'>{timeAgo(story.time)}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopNews