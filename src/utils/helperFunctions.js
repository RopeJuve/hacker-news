
export const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
        const intervalCount = Math.floor(diffInSeconds / interval.seconds);
        if (intervalCount >= 1) {
            return `${intervalCount} ${interval.label}${intervalCount !== 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

export const formatDate = (date) => {
    const d = new Date(date);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(d).toUpperCase();
    return formattedDate;
}

export const getHighlightedText = (text, highlight) => {
    if (!highlight) {
        return text;
    }

    const regex = new RegExp(`\\b(${highlight})`, 'gi');

    return text.replace(regex, (match) => `<span style="background-color: yellow">${match}</span>`);
};

export const modifyArray = (arr, start, end) => {
    arr.splice(start, end);
    return arr;
}