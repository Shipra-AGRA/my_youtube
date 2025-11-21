const VideoCard = ({ video }) => {
    const { snippet, statistics } = video
    const { thumbnails, channelTitle, title } = snippet
    return (
        <div className="p-2 m-2 w-72 shadow">
            <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg"/>
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    )
}
export default VideoCard