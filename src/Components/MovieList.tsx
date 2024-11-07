import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { IMovieData, IMovieDataType, makeBgPath, makeImagePath } from '../api';
import {
  BigOverview,
  BigTitle,
  MovieItem,
  MovieItemImg,
  MovieItemTitle,
  MovieListWrap,
  MoviePop,
  MoviePopWrap,
  Overlay,
  PopClose,
} from '../styled';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface MovieListProps {
  data: IMovieData | IMovieDataType | undefined;
}

const MovieVar = {
  start: {
    opacity: 0,
    y: -30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
const HoverImg = {
  start: {
    y: 0,
  },
  hover: {
    y: -15,
  },
};

export default function MovieList({ data }: MovieListProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isMatch = id && location.pathname.includes(id);
  const onMovieInfo = id && data?.results.find((i) => '' + i.id === id);
  const onClickClose = () => navigate(-1);
  useEffect(() => {
    if (isMatch) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMatch]);
  return (
    <>
      <MovieListWrap>
        {data?.results.map((i, index) => (
          <MovieItem
            key={i.id}
            variants={MovieVar}
            initial="start"
            animate="end"
            transition={{
              type: 'tween',
              delay: index * 0.3,
            }}
          >
            <Link to={`movie/${i.id}`}>
              <MovieItemImg
                variants={HoverImg}
                initial="start"
                whileHover="hover"
                src={makeImagePath(i.poster_path)}
                alt={i.title}
              />
              <MovieItemTitle>{i.title}</MovieItemTitle>
            </Link>
          </MovieItem>
        ))}
      </MovieListWrap>

      <AnimatePresence>
        {isMatch ? (
          <>
            <Overlay
              onClick={onClickClose}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0 }}
            />
            <MoviePopWrap>
              {onMovieInfo && (
                <>
                  <MoviePop bgPhoto={makeBgPath(onMovieInfo.backdrop_path)}>
                    <PopClose onClick={onClickClose}>
                      <svg
                        data-slot="icon"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          fill="white"
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                        ></path>
                      </svg>
                    </PopClose>
                    <BigTitle>{onMovieInfo.title}</BigTitle>
                    <BigOverview>
                      {onMovieInfo.overview.length > 400
                        ? `${onMovieInfo.overview.slice(0, 400)}...`
                        : onMovieInfo.overview}
                    </BigOverview>
                  </MoviePop>
                </>
              )}
            </MoviePopWrap>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
