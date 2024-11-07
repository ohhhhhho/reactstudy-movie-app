import { Link, useLocation } from 'react-router-dom';
import { Circle, HeaderWrap } from '../styled';

export default function Header() {
  const home = useLocation();
  const result = home.pathname.split('movie')[0];
  return (
    <>
      <HeaderWrap>
        <Link to={'/'}>
          POPULAR{result === '/' && <Circle layoutId="circle" />}
        </Link>
        <Link to={'/coming-soon'}>
          Coming Soon
          {result.includes('/coming-soon') && <Circle layoutId="circle" />}
        </Link>
        <Link to={'/now-playing'}>
          Now Playing
          {result.includes('/now-playing') && <Circle layoutId="circle" />}
        </Link>
      </HeaderWrap>
    </>
  );
}
