import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Label from './Label';
import Button from './Button';
import media from '../../../styled/media';
import c from '../../../styled/config';

const Wrapper = styled.div`
  padding: 0 1.3rem;
`;

const WrapperFilter = styled.section`
  padding: 0 .2rem;
  padding-bottom: 1.1rem;
  display: flex;
  align-items: center;
  ${media.sm('max')`
    flex-direction: column;
    align-items: start;
  `}
`;

const WrapperIcon = styled.div`
  ${media.sm('max')`
    display: none;
  `}
  width: 4.5rem;
  padding-left: .6rem;
  margin-right: 3rem;
  height: 4.5rem;
  background-color: ${c.colors.listGrey};
  ${media.md('max')`
    margin-right: 2.1rem;
  `}
`;

const WrapperGender = styled.div`
  margin-right: 5rem;
  ${media.md('max')`
    margin-right: 2.8rem;
  `}
`;

const Hr = styled.hr`
  width: 100%;
  margin: 0;
  margin-bottom: 1.4rem;
  background-color: ${c.colors.listGrey};
  height: 0.4rem;
  border: none;
  outline: none;
`;

export default () => (
  <div>
    <Wrapper>
      <WrapperFilter>
        <WrapperIcon>
          <Icon />
        </WrapperIcon>
        <WrapperGender>
          <Button isActive>Man</Button>
          <Button>Women</Button>
        </WrapperGender>
        <div>
          <Label>Size</Label>
          <Button isSize>36</Button>
          <Button isSize>37</Button>
          <Button isSize>38</Button>
          <Button isSize>39</Button>
          <Button isSize isActive>40</Button>
          <Button isSize>41</Button>
          <Button isSize>42</Button>
        </div>
      </WrapperFilter>
    </Wrapper>
    <Hr />
  </div>
);
