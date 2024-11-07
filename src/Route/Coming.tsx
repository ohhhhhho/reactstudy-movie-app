import { useQuery } from '@tanstack/react-query';
import { IMovieDataType, getComingSoon } from '../api';
import MovieList from '../Components/MovieList';

export default function Coming() {
  const { data, isLoading } = useQuery<IMovieDataType>({
    queryKey: ['comming', 'movie'],
    queryFn: getComingSoon,
  });
  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <MovieList data={data} />
        </>
      )}
    </>
  );
}
