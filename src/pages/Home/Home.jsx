import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import { MoviesContainer, PageContainer } from './styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link, useLocation } from 'react-router-dom'
import Header from "../../components/Header/Header"
import { AuthContext } from '../../providers/auth';

const apiKey = import.meta.env.VITE_API_KEY;
const moviesUrl = import.meta.env.VITE_API_DISCOVER
const language = import.meta.env.VITE_LANGUAGE


const Home = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1);
  const { activeFilters } = React.useContext(AuthContext)


  const handleChange = (event, value) => {
    setPage(value);
  }
  const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
   
    setMovies(data.results)
  }
  useEffect(() => {
    let storage = localStorage.getItem('filters')
    storage = storage ? storage.split(',') : []
    storage = storage ? storage.map((filter) => {return '&with_genres=' + filter}) : ''
    let filters =''
    if(storage){
      for(let filter in storage){
        filters += storage[filter]
      }
    }
    const url = `https://api.themoviedb.org/3/discover/movie/?${apiKey}&${language}&page=${page}${filters}`
    getMovies(url)
  }, [page, activeFilters])

  return (
    <>
    <Header />
    <PageContainer>
    <MoviesContainer>
      {movies.length > 0 && movies.map((movie) => <Link to={`/movie/${movie.id}`} key={movie.id} ><MovieCard movie={movie}/></Link> )}
    </MoviesContainer>

    <Stack spacing={2}>
      <Pagination count={500} page={page} onChange={handleChange} />
    </Stack>
    
    </PageContainer>
    </>
  )
}

export default Home