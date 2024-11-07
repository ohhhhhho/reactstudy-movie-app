import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderWrap = styled.div`
  padding-top:40px;
  display: flex;
  justify-content: center;
  gap: 70px;
  a{
    font-size:30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Circle = styled(motion.span)`
  width:50px;
  height:4px;
  background-color:${(props) => props.theme.red};
  dispaly:block;
  border-radius:5px;
`;
export const MovieListWrap = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 80px 60px;
  box-sizing: border-box;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 80%;
  margin: 80px auto;
`;
export const MovieItem = styled(motion.div)`
  width: calc(33.3% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 1 auto;
  align-items:center;
`;
export const MovieItemImg = styled(motion.img)`
  width:100%;
  object-fit:cover;
  border-radius: 16px;
`;
export const MovieItemTitle = styled.h3`
  margin-top:20px;
`;
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
export const MoviePopWrap = styled(motion.div)`
  position: fixed;
  width: 40vw;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  background-color:#fff;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.lighter};
`;
export const MoviePop = styled.div<{ bgPhoto: string }>`
  background:linear-gradient(to top, rgba(0,0,0,1), transparent), url(${(
    props
  ) => props.bgPhoto});
  background-size: cover;
  background-position: center;
  height:400px;
  position:relative;
  height:100%;
`;
export const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 350px 0 0 20px;
  font-size: 46px;
  line-height: 42px;
`;
export const BigOverview = styled.p`
  padding: 20px;
  color: ${(props) => props.theme.white.lighter};
`;
export const PopClose = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;  
  background: none;
  border: none;
  width: 34px;
  cursor:pointer;
`;
