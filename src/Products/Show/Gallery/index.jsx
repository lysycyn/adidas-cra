import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import SmallImage from './SmallImage';
import BigImage from './BigImage';

import BIG_IMAGE1 from '../../../assets/img/boot-big-1.jpg';
import BIG_IMAGE2 from '../../../assets/img/boot-big-2.jpg';
import BIG_IMAGE3 from '../../../assets/img/boot-big-3.jpg';
import BIG_IMAGE4 from '../../../assets/img/boot-big-4.jpg';
import BIG_IMAGE5 from '../../../assets/img/boot-big-5.jpg';

import SM_IMAGE1 from '../../../assets/img/boot-sm-1.jpg';
import SM_IMAGE2 from '../../../assets/img/boot-sm-2.jpg';
import SM_IMAGE3 from '../../../assets/img/boot-sm-3.jpg';
import SM_IMAGE4 from '../../../assets/img/boot-sm-4.jpg';
import SM_IMAGE5 from '../../../assets/img/boot-sm-5.jpg';

const GalleryWrapper = styled.div`
  margin-bottom: 3rem;
`;

const images = [
  {
    id: 0,
    alt: 'boot-1',
    srcBig: BIG_IMAGE1,
    srcSet: `${BIG_IMAGE1} 2x ${BIG_IMAGE1} 3x`,
    srcSmall: SM_IMAGE1,
  },
  {
    id: 1,
    alt: 'boot-2',
    srcBig: BIG_IMAGE2,
    srcSet: `${BIG_IMAGE2} 2x ${BIG_IMAGE2} 3x`,
    srcSmall: SM_IMAGE2,
  },
  {
    id: 2,
    alt: 'boot-3',
    srcBig: BIG_IMAGE3,
    srcSet: `${BIG_IMAGE3} 2x ${BIG_IMAGE3} 3x`,
    srcSmall: SM_IMAGE3,
  },
  {
    id: 3,
    alt: 'boot-4',
    srcSet: `${BIG_IMAGE4} 2x ${BIG_IMAGE4} 3x`,
    srcBig: BIG_IMAGE4,
    srcSmall: SM_IMAGE4,
  },
  {
    id: 4,
    alt: 'boot-5',
    srcSet: `${BIG_IMAGE5} 2x ${BIG_IMAGE5} 3x`,
    srcBig: BIG_IMAGE5,
    srcSmall: SM_IMAGE5,
  },
];

class Gallery extends Component {
  constructor() {
    super();
    this.state = { activeImageIndex: 0 };
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange(activeImageIndex) {
    this.setState({ activeImageIndex });
  }

  render() {
    const { activeImageIndex } = this.state;
    return (
      <div>
        <Row center="xs">
          <BigImage
            src={images[activeImageIndex].srcBig}
            srcSet={images[activeImageIndex].srcSet}
          />
        </Row>
        <GalleryWrapper>
          <Row center="xs">
            {images.map((img, index) => (
              <Col xs={2}>
                <SmallImage
                  src={img.srcSmall}
                  index={img.id}
                  onChange={this.handleImageChange}
                  isActive={index === activeImageIndex}
                />
              </Col>
            ))}
          </Row>
        </GalleryWrapper>
      </div>
    );
  }
}

export default Gallery;
