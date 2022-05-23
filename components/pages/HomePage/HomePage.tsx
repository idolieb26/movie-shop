import { Container, FirstPageWrapper, MovieListStyle } from "./styles";
import { ReactElement, useContext, useEffect } from "react";
import useMovieList, { ExploreMovies } from "./useMovieList";
import useTVList, { ExploreTVs } from "./useTVList";

import Carousel from "components/organisms/Carousel";
import GlobalContext from "context/GlobalContext";
import { IDiscoverMovie } from "types/api/discover";
import { IVideo } from "types/api/videos";
import MovieList from "components/organisms/MovieList";
import { useMediaQuery } from "react-responsive";

interface HomePageProps {
  carouselData: IDiscoverMovie[];
  videos?: IVideo;
  onStepChange?: (step: number) => void;
}

export default function HomePage({
  carouselData,
  videos,
  onStepChange,
}: HomePageProps): ReactElement {
  const { exploreMoviesList, exploreMovieSelect } = useMovieList();
  const { exploreTVSelect, exploreTVsList } = useTVList();

  const isSmallTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <Container>
      <FirstPageWrapper>
        {isSmallTablet ? (
          <></>
        ) : (
          <Carousel
            carouselData={carouselData}
            videos={videos}
            onStepChange={onStepChange}
            disableAutoSlide
          />
        )}
      </FirstPageWrapper>

      <MovieListStyle
        title="Explore Movies"
        subListTitles={[
          ExploreMovies.IN_THEATRES,
          ExploreMovies.POPULAR,
          ExploreMovies.UPCOMING,
          ExploreMovies.TOP_RATED,
        ]}
        onSubTitleClick={(subTitle: ExploreMovies) =>
          exploreMovieSelect(subTitle)
        }
        movies={exploreMoviesList}
      />

      <MovieListStyle
        title="Explore TV Shows"
        subListTitles={[
          ExploreTVs.ON_AIR,
          ExploreTVs.POPULAR,
          ExploreTVs.TOP_RATED,
        ]}
        onSubTitleClick={(subTitle: ExploreTVs) => exploreTVSelect(subTitle)}
        movies={exploreTVsList}
      />
    </Container>
  );
}