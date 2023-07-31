import React, { useEffect, useState } from 'react'
import apeClient from '../services/ape-client'

interface Game {
    id: number,
    name: string
}


interface FetchGamesResponse {
    count: number;
    results: Game[]
}

function GameGrid() {
    const [games, setGames] =useState<Game[]>([])
    const [error, setError] =useState('')

    useEffect(() => {
        apeClient.get<FetchGamesResponse>('/games')
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    })

  return (
    <ul>
        {games.map(game=> <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}

export default GameGrid