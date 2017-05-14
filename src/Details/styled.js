import styled from 'styled-components';
import media from '../styled-components/media';

export const Wrapper = styled.section`
  padding: 1.1rem 0;
  flex-basis: 100%;
  ${media.sm('max')`
    padding: 4rem 0;
  `}
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
  padding: 3rem 0;
  font-family: "avenir";
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  background: linear-gradient(to right, #4949aa, #27275d);
  ${media.sm('min')`
    margin-left: 34.5%;
    padding: 2rem 0;
    width: 65.5%;
  `}
  ${media.lg('min')`
    margin-left: 41.4rem;
    padding: 3rem 0;
    width: calc(100% - 41.4rem);
  `}
`;
export const Header = styled.div`
  margin-bottom: 3rem;
`;

export const ButtonColor = styled.button`
  display: inline-block;
  margin-right: 1.2rem;
  font-size: 0;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 1.125rem;
  ${media.lg('min')`
    width: 1.8rem;
    height: 1.8rem;
    border-radius: .9rem;
  `}
  background: ${props => props.color};
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  ${media.sm('max')`
    margin-top: 15rem;
    justify-content: space-between;
  `}
  ${media.sm('min')`
    justify-content: flex-end;
  `}
`;

export const SaleWrapper = styled.div`
  display: inline-block;
  margin-left: 2rem;
  ${media.sm('max')`
    order: 1;
    margin-left: 0;
  `}
`;

export const ButtonsWrapper = styled.div`
  ${media.sm('max')`
    order: 2;
  `}
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "avenir";
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1;
  color: #3a3a3a;
  text-transform: uppercase;
`;

export const Price = styled.h2`
  margin: 0;
  margin-top: -18rem;
  font-family: "avenir";
  font-weight: 700;
  font-size: 10rem;
  ${media.sm('min')`
    margin-top: -4rem;
  `}
  color: #e2e2e2;
`;

export const ButtonSave = styled.button`
  width: 75px;
  height: 75px;

  font-family: "avenir";
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #e3e3e3;
  text-transform: uppercase;
  border-radius: 38px;
  ${media.sm('max')`
    display: none;
  `}
  ${media.sm('min')`
    margin-top: -5rem;
  `}
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

  ${media.sm('max')`
    display: none;
  `}
`;

export const ButtonMore = styled.div`
  font-family: "avenir";
  font-size: 14px;
  text-align: left;
  color: #c0c0c0;
  ${media.sm('max')`
    display: none;
  `}
`;

export const Description = styled.p`
  margin-bottom: 7rem;
  font-family: "avenir";
  font-weight: 400;
  font-size: 33px;
  line-height: 50px;
  color: #d8d8d8;

  ${media.sm('min')`
    display: none;
  `}

  & b {
    color: #6e6e6e;
    font-weight: 400;
  }
`;
