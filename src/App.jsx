import React, { useState, useEffect } from 'react'

import AlbumCard from './components/AlbumCard'
import spotifyLogo from './assets/spotify-logo.png'

import { MainContainer, FormGroup, InputText, Button, CardsDiv, Header } from './styles/AppStyles'

const CLIENT_ID = 'bcb987fe27c64b62a452fd4e3893392f'
const CLIENT_SECTET = '7a7825f73467440ba21b9eff92651004'

export default function App() {

const [searchInput, setSearchInput] = useState('')

const [accessToken, setAccessToken] = useState('')

const [albums, setAlbums] = useState([])

// FILTER ALBUMS TO AVOID REPETITION

let filterAlbums = (data) => {
  let allAlbums = data
  let albumNames = []
  let filteredAlbums = []

  allAlbums.forEach(album => {
    if (!albumNames.includes(album.name)) {
      albumNames.push(album.name)
      filteredAlbums.push(album)
    }
  })

  setAlbums(filteredAlbums)
}

// API ACCESS TOKEN

useEffect(() => {
  let authParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECTET
  }

  fetch('https://accounts.spotify.com/api/token', authParams)
    .then(res => res.json())
    .then(data => setAccessToken(data.access_token))
}, [])

// SEARCH FUNCTION

async function search() {
  // Search Params

  let searchParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    }
  }

  // Get Artist ID

  let artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParams)
    .then(res => res.json())
    .then(data => {return data.artists.items[0].id})

  // Get Albums and Singles

  await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=album,single&limit=50', searchParams)
    .then(res => res.json())
    .then(data => {filterAlbums(data.items)})
}

  return (
    <MainContainer>
      <Header>
        <img src={spotifyLogo} alt="spotify-logo" />

        <h1>Welcome to Spotify Album Searcher!</h1>

        <a target="_blank" href="https://www.linkedin.com/in/dev-matheus-aguiar/" rel="noreferrer">@agnasci</a>
      </Header>

      <FormGroup>
        <InputText
          type="text"
          placeholder='Search for Artist'
          onKeyDown={event => {
            if (event.key === 'Enter') {
              search()
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
        />

        <Button onClick={search}>Search</Button>
      </FormGroup>

        <CardsDiv>
          {albums.map((album, idx) => (
            <AlbumCard
              key={idx}
              name={album.name}
              url={album.images[0].url}
            />
          ))}
        </CardsDiv>

    </MainContainer>
  );
}
