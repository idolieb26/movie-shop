import Carousel from "components/organisms/Carousel";
import { IDiscoverMovie } from "types/api/discover";
import { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";

interface HomePageCompProps {
  carouselData: IDiscoverMovie[];
}

export default function HomePageComp({
  carouselData,
}: HomePageCompProps): ReactElement {
  const isSmallTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <div>
      {isSmallTablet ? <></> : <Carousel carouselData={carouselData} />}
    </div>
  );
}
