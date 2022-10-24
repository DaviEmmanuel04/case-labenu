import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/auth";
import {
  Bottom,
  Call,
  Filter,
  FilterContainer,
  FiltersContainer,
  Firulinha,
  TextFilterBy,
  Title,
  Top,
} from "./styles";

const apiKey = import.meta.env.VITE_API_KEY;


function Header() {
  const [filters, setFilters] = useState([]);
  const {activeFilters, setActiveFilters} = React.useContext(AuthContext)

  const onClickFilter = (id) => {
   
    if (activeFilters.includes(id)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== id));
      setStorage('filters', activeFilters.filter((filter) => filter !== id))
    }else {
      setActiveFilters([...activeFilters, id])
      setStorage('filters', [...activeFilters, id])
    }
 
  };

  const setStorage = (local, item) => {
    localStorage.removeItem(local)
    localStorage.setItem(local, item)
  }

  const getFilters = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setFilters(data.genres);
  };

  useEffect(() => {
    getFilters(
      `https://api.themoviedb.org/3/genre/movie/list?${apiKey}&language=pt-BR`
    );
  }, []);

  useEffect(() => {
    let storage = localStorage.getItem('filters')
    storage = storage ? storage.split(',') : storage
    storage = storage ? storage.map((item) => Number(item)) : storage
    setActiveFilters(storage ? storage : [])
  }, [])

  return (
    <>
      <Top>
        <Title>Labemovies</Title>
        <Firulinha />
      </Top>
      <Bottom>
        <Call>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </Call>

        <FilterContainer>
          <TextFilterBy>Filtrar por:</TextFilterBy>
          <FiltersContainer>
            {filters.length > 0 &&
              filters.map((filter) => (
                <Filter
                  active={activeFilters.includes(filter.id)}
                  onClick={() =>
                    onClickFilter(filter.id)
                  }
                  key={filter.id}
                >
                  {filter.name}
                </Filter>
              ))}
          </FiltersContainer>
        </FilterContainer>
      </Bottom>
    </>
  );
}

export default Header;
