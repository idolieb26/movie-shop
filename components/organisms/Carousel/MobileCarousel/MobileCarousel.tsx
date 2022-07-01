import {
  Container,
  Frame,
  ImageContainer,
  MovieInfoStyle,
  NextBtn,
  PrevBtn,
  StepStatusStyle,
  StepsContainer,
} from "./styles";

import { AnimationControls } from "framer-motion";
import CarouselImage from "components/organisms/Carousel/CarouselImage";
import { IDiscoverMovie } from "types/api/discover";
import { ReactElement } from "react";

interface IMobileCarouselProps {
  carouselData?: IDiscoverMovie[];
  localImages?: boolean;
  page: number;
  direction: number;
  handlePageDirectionChange: (direction: 1 | -1) => void;
  handlePageChange: (toPage: number) => void;
  textAnimControls?: AnimationControls;
}

export default function MobileCarousel({
  carouselData,
  localImages,
  page,
  direction,
  handlePageDirectionChange,
  handlePageChange,
  textAnimControls,
}: IMobileCarouselProps): ReactElement {
  if (!carouselData || carouselData.length === 0) {
    return <></>;
  }
  console.log(carouselData);

  return (
    <Container>
      <Frame>
        <PrevBtn
          dataTestId="MobileCarouselPrevBtn"
          variant="simpleLeft"
          onClick={() => handlePageDirectionChange(-1)}
        />
        <ImageContainer>
          <CarouselImage
            direction={direction}
            imageURL={carouselData[page]?.backdrop_path}
            currentPage={page}
            local={localImages}
            handlePageChange={handlePageDirectionChange}
          />
        </ImageContainer>
        <NextBtn
          dataTestId="MobileCarouselNextBtn"
          variant="simpleRight"
          onClick={() => handlePageDirectionChange(1)}
        />
        <StepsContainer>
          {carouselData.map((_, index) => {
            return (
              <StepStatusStyle
                key={index}
                enabled={index <= page}
                onClick={() => handlePageChange(index)}
              />
            );
          })}
        </StepsContainer>
      </Frame>
      <MovieInfoStyle
        title={carouselData[page].title}
        desc={carouselData[page].overview}
        releaseDate={carouselData[page].release_date}
        animationControls={textAnimControls}
      />
    </Container>
  );
}
