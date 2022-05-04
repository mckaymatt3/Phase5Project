import React from 'react'

function TrackSearchResult({track, chooseTrack}) {
    function handlePlay () {
        chooseTrack(track)
    }

  return (
    <div className="search-result-div" onClick={handlePlay}>
        <img src={track.albumUrl} className="search-result-pic" alt="search-result"/>
        <div className="search-result-title">
            <div>{track.title}</div>
            <div className="text-muted">{track.artist}</div>
        </div>
    </div>
  )
}

export default TrackSearchResult