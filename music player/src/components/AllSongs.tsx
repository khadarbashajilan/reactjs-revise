import { useMusic } from "../hooks/useMusic"

const AllSongs = () => {
    const { allSongs } = useMusic()
  return (
    <div>
      AllSongs
    </div>
  )
}

export default AllSongs
