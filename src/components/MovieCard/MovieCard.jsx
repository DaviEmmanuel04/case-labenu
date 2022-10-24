import React from 'react'
import { CardContainer, DateField, Image, Title } from './styles'

const imagesUrl = import.meta.env.VITE_IMG

function MovieCard({movie}) {

    const formatDate = (date) => {
        let result = new Date(date)
        result = new Intl.DateTimeFormat('pr-BR', {day: 'numeric', month: 'short', year: 'numeric'}).format(result)
        result = result.replace('.', '')
        result = result.split(' ')
        return `${result[0]} ${result[2]} ${result[4]}`
    }
  return (
    <CardContainer>
        <Image src={imagesUrl + movie.poster_path} alt={movie.title} />
        <div>
            <Title>{movie.title}</Title>
            <DateField>{formatDate(movie.release_date)}</DateField>
        </div>
    </CardContainer>
  )
}

export default MovieCard