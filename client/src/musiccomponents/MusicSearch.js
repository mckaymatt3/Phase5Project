import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "aa7545d077a24e4b9ac7a11c57e35045",

})

function MusicSearch() {
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const accessToken = localStorage.getItem("accessToken")
  console.log(searchResults)

  // console.log("get accessToken",localStorage.getItem("accessToken"))

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])

  return (
    <Container>
      <Form.Control type ="search" placeholder="Search Songs/Artists" value={search} onChange={ e => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        Music Player
      </div>
    </Container>
  )
}

export default MusicSearch