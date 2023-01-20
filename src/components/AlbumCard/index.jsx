import React from 'react'

import { Container, ImageDiv, NameDiv } from './styles'

const AlbumCard = ({
    name,
    url
}) => {
    return (
        <Container>
            <ImageDiv>
                <img src={url} alt={name + ' cover image'} />
            </ImageDiv>

            <NameDiv>
                <h1>{name}</h1>
            </NameDiv>
        </Container>
    )
}

export default AlbumCard