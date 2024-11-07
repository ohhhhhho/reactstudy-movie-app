import { useQuery } from '@tanstack/react-query';
import { IMovieDataType, getNowPlaying } from '../api';
import MovieList from '../Components/MovieList';

export default function NowPlay() {
  const { data, isLoading } = useQuery<IMovieDataType>({
    queryKey: ['nowPlay', 'movie'],
    queryFn: getNowPlaying,
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
