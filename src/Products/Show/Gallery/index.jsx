import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import SmallImage from './SmallImage';
import BigImage from './BigImage';
import { imageLink } from '../../../constants/Links';

const GalleryWrapper = styled.div`
  margin-bottom: 3rem;
`;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { activeImageIndex: 0 };
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange(activeImageIndex) {
    this.setState({ activeImageIndex });
  }

  render() {
    const activeIndex = this.state.activeImageIndex;
    const images = this.props.images;
    return (
      <div>
        {images &&
          <div>
            <Row center="xs">
              <BigImage
                src={imageLink(images[activeIndex].id, images[activeIndex].fileName, 512)}
              />
            </Row>
            <GalleryWrapper>
              <Row center="xs">
                {images.map((img, index) => (
                  <Col xs={2}>
                    <SmallImage
                      src={imageLink(img.id, img.fileName, 64)}
                      index={index}
                      onChange={this.handleImageChange}
                      isActive={index === activeIndex}
                    />
                  </Col>
                ))}
              </Row>
            </GalleryWrapper>
          </div>}
      </div>
    );
  }
}

export default Gallery;
