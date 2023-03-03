// react
import React from 'react'

// style
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// Caroussel
import {Carousel} from 'react-responsive-carousel'

type Props = {
  children: any
}

function MediaCarousel({children}: Props) {
  return (
    <Carousel
      centerMode={true}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {children}
    </Carousel>
  )
}

export default MediaCarousel
