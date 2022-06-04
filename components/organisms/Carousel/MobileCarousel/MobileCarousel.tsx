import { ReactElement, useState } from "react";

import CarouselImage from "components/organisms/Carousel/CarouselImage";
import { Container } from "./styles";
import { IDiscoverMovie } from "types/api/discover";

interface IMobileCarouselProps {
  carouselData?: IDiscoverMovie[];
  localImages?: boolean;
  startPage?: number;
  onPageChange?: (step: number) => void;
  page: number;
  direction: number;
  handlePageDirectionChange: (direction: 1 | -1) => void;
}

export default function MobileCarousel({
  carouselData,
  localImages,
  startPage = 0,
  onPageChange,
  page,
  direction,
  handlePageDirectionChange,
}: IMobileCarouselProps): ReactElement {
  function handlePageChange() {}

  if (!carouselData || carouselData.length === 0) {
    return <></>;
  }

  return (
    <Container>
      <CarouselImage
        direction={direction}
        imageURL={carouselData[page]?.backdrop_path}
        currentPage={page}
        local={localImages}
        handlePageChange={handlePageDirectionChange}
      />
    </Container>
  );
}
