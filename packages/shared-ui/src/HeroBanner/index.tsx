import * as React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

export const HeroBanner = (): JSX.Element => {
  return (
    <Container className='justify-content-center'>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://www.fillmurray.com/640/360'
                alt='First slide'
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://www.fillmurray.com/640/360'
                alt='Second slide'
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://www.fillmurray.com/640/360'
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroBanner
