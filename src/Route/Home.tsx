import MovieList from '../Components/MovieList';
import { useQuery } from '@tanstack/react-query';
import { getPopular, IMovieData } from '../api';

export default function Home() {
  const { data, isLoading } = useQuery<IMovieData>({
    queryKey: ['popular', 'movie'],
    queryFn: getPopular,
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
