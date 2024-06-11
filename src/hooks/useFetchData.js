import { useEffect, useState } from 'react'

export const useFetchData = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");
    const [tag, setTag] = useState('new');
    const [page, setPage] = useState(0);
    const [nbResults, setNbResults] = useState(0);
    const [nbPages, setNbPages] = useState(0);

    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await fetch("https://hn.algolia.com/api/v1/search_by_date?query=");
                if (!response.ok) {
                    throw new Error("HTTP Error! status: " + response.status);
                }
                const data = await response.json();
                console.log(data)
                setNbPages(data.nbPages);
                setNbResults(data.nbHits);
                setNews(data.hits);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        getNews();
    }, []);

    useEffect(() => {
        if (search !== '') {
            const getSearchedNews = async () => {
                try {
                    const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${search}`);
                    if (!response.ok) {
                        throw new Error("HTTP Error! status: " + response.status);
                    }
                    const { hits, nbPages, nbHits } = await response.json();
                    setNbPages(nbPages);
                    setNbResults(nbHits);
                    setNews(hits);
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            }
            getSearchedNews();
        } else {
            setNews(news);
        }

    }, [search]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=&page=${page}`);
                if (!response.ok) {
                    throw new Error("HTTP Error! status: " + response.status);
                }
                const data = await response.json();
                console.log(data)
                setNbPages(data.nbPages);
                setNbResults(data.nbHits);
                setNews(data.hits);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        getNews();
    }, [page]);
    return {
        news,
        search,
        setSearch,
        tag,
        setTag,
        page,
        setPage,
        nbResults,
        nbPages
    }
}

