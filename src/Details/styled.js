import styled from 'styled-components';
import media from '../styled-components/media';

export const Wrapper = styled.section`
  padding: 1.1rem 0;
  flex-basis: 100%;
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const BuyNowBtn = styled.button`
  margin: 0;
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1.3rem 0;
  font-family: "avenir";
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  background: linear-gradient(to right, #4949aa, #27275d);
  ${media.xs('min')`
    margin-left: 34.5%;
    padding: 2rem 0;
    width: 65.5%;
  `}
  ${media.lg('min')`
    margin-left: 414px;
    padding: 3rem 0;
    width: calc(100% - 414px);
  `}
`;
export const Header = styled.div`
  margin-bottom: 3rem;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonColor = styled.button`
  display: inline-block;
  font-size: 0;
  margin-right: 13px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background: ${props => props.color};
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "avenir";
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  color: #3a3a3a;
  text-transform: uppercase;
`;

export const Price = styled.h2`
  margin: 0;
  margin-top: -64px;
  font-family: "avenir";
  font-weight: 700;
  font-size: 80px;
  color: #e2e2e2;
`;

export const ButtonSave = styled.button`
  width: 75px;
  height: 75px;
  margin-top: -19px;
  font-family: "avenir";
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #e3e3e3;
  text-transform: uppercase;
  border-radius: 38px;
`;

export const PhotosWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const Lines = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 2px;
  background: #e7e7e7;
  border-radius: 1px;

  &:after,
  &:before {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    left: 0;
    background: #e7e7e7;
    border-radius: 1px;
  }
  &:before {
    top: -5px;
  }
  &:after {
    bottom: -5px;
  }
`;

export const ButtonMore = styled.div`
  font-family: "avenir";
  font-size: 14px;
  text-align: left;
  color: #c0c0c0;
`;

export const Description = styled.p`
  margin-bottom: 15rem;
  font-family: "avenir";
  font-weight: 400;
  font-size: 33px;
  line-height: 50px;
  color: #d8d8d8;

  & b {
    color: #6e6e6e;
    font-weight: 400;
  }
`;
