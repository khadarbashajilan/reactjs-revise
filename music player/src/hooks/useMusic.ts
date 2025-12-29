import { useState } from "react"

interface SongType  {
    id:number,
    title: string,
    artist: string,
    url : string,
    duration : string
}
const songs: SongType[] = [
    {
        id : 1,
        title : "Eye on you",
        artist : "Hirai",
        url: "/songs/Eye on you.mp3",
        duration: "03:34",
    },
    {
        id : 2,
        title : "Far from any road",
        artist : "The Handsome Family",
        url: "/songs/far from any road.mp3",
        duration: "02:46",
    },
    {
        id : 3,
        title : "Ghost",
        artist : "Justin Bieber",
        url: "/songs/Ghost.mp3",
        duration: "02:45",
    },
    {
        id : 4,
        title : "Summertime Sadness",
        artist : "Lana Del Rey",
        url: "/songs/summertime sadness.mp3",
        duration: "05:26",
    },
]

export const useMusic = () => {
    const[allSongs, setAllSongs] = useState<SongType[]>(songs)
    return{ allSongs };
}