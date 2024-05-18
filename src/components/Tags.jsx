

const Tags = ({ name, tag, setTag }) => {
    const selectedTag = tag === name ? 'bg-black text-white' : 'bg-transparent text-black';
    return (
        <span id={name} onClick={setTag} className={`${selectedTag} p-[0.5rem] border border-black w-[100px] text-center cursor-pointer `}>
            {name}
        </span>
    )
}

export default Tags