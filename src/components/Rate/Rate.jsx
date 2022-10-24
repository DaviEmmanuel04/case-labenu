import React from 'react'
import { CircularProgress, PorgressValue } from './styles'

function Rate({value}) {

    const defineColor = (value) => {
        if (value < 70 && value >= 50) {
            return '#ffe100'
        } 
        else if (value < 50) {
            return '#ff5900'
        } else {
            return '#14FF00'
        }
    }
  return (
    <CircularProgress style={{ background: `conic-gradient(${defineColor(value)}, ${value * 3.6}deg,#FFFFFF1A 0deg` }}>
        <PorgressValue color={defineColor(value)}>{value}%</PorgressValue>
    </CircularProgress>
  )
}

export default Rate