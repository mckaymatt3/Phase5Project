import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import SpotifyWebApi from "spotify-web-api-node";
import MusicPlayer from './MusicPlayer';
import TrackSearchResult from './TrackSearchResult';
import "../App.css"

const spotifyApi = new SpotifyWebApi({
  clientId: "aa7545d077a24e4b9ac7a11c57e35045",

})

function MusicSearch() {
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const accessToken = localStorage.getItem("accessToken")
  
  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch('')
  }

  // console.log(searchResults)
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
      <div className="music-search-div">
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
      <div><MusicPlayer accessToken={accessToken} trackUri={playingTrack?.uri} /></div>
    </Container>
  )
}

export default MusicSearch