import React from 'react'
import { Card } from './styles'
import NoImage from '../../assets/no-image.svg'
const imagesUrl = import.meta.env.VITE_IMG
function ActorCard({actor}) {
  return (
    <Card style={{textOverflow: 'ellipsis'}}>
        <img style={{ borderRadius: '4px', height: '222px', marginBottom: '16px' }} src={actor.profile_path ? imagesUrl + actor.profile_path : NoImage} alt={actor.name} />
        <p style={{fontSize: '18px', fontWeight: '700', marginBottom: '4px'}}>{actor.name}</p>
        <p style={{fontSize: '16px', color: '#131313'}}>{actor.character}</p>
    </Card>
  )
}

export default ActorCard