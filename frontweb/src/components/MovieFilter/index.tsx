import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { requestBackend } from 'util/requests';
import { Genre } from '../../types/genre';

import './styles.css';

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onChangeFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onChangeFilter }: Props) => {

  const [genresList, setGenresList] = useState<Genre[]>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
        method: 'GET',
        url: '/genres',
        withCredentials: true,
      };
  
      setIsLoading(true);
      requestBackend(params)
        .then((response) => {
            setGenresList(response.data);
        })
        .catch(() => {
          toast.error("Falha ao buscar lista de gêneros")
        })
        .finally(() => {
          setIsLoading(false);
        });
  }, [])
  

  return (
    <Select
      options={genresList}
      isClearable
      placeholder="Gênero"
      isLoading={isLoading}
      classNamePrefix="genre-filter-select"
      onChange={(value) => {
        const filter : MovieFilterData = {
            genre: null
        }
          if(value !== null) {
            filter.genre= value as Genre;
          }
          console.log(filter);
          onChangeFilter(filter)}
      }
      getOptionLabel={(genresList: Genre) => genresList.name}
      getOptionValue={(genresList: Genre) => String(genresList.id)}
    />
  );
};

export default MovieFilter;