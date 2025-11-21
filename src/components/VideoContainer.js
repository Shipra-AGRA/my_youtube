import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constant"
import VideoCard from "./VideoCard"

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    async function getVideos() {
        const data = await fetch(YOUTUBE_VIDEOS_API)
        const json = await data.json()
        setVideos(json.items)
    }
    useEffect(() => {
        getVideos()
    }, [])
    return (
        <div className="flex flex-wrap">{
            videos.map((video,index)=><VideoCard video={video} key={index}/>)
        }</div>
    )
}
export default VideoContainer