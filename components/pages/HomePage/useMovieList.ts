import { useContext, useEffect, useState } from "react";

import GlobalContext from "context/GlobalContext";
import { IMovieCardProps } from "components/molecules/MovieCard/MovieCard";
import { IMovieDetails } from "types/api/explore";

export enum ExploreMovies {
  IN_THEATRES = "In Theatres",
  POPULAR = "Popular",
  UPCOMING = "Upcoming",
  TOP_RATED = "Top Rated",
}

type CacheExploreMovies = {
  [key in ExploreMovies]: IMovieCardProps[];
};

interface IExploreMoviesCache {
  selected: ExploreMovies;
  loading: boolean;
  cache: CacheExploreMovies;
}

export default function useMovieList() {
  const { globalRequests } = useContext(GlobalContext);
  const [exploreMovies, setExploreMovies] = useState<IExploreMoviesCache>({
    selected: ExploreMovies.IN_THEATRES,
    loading: true,
    cache: {
      "In Theatres": [],
      Popular: [],
      "Top Rated": [],
      Upcoming: [],
    },
  });

  useEffect(() => {
    exploreMovieSelect(ExploreMovies.IN_THEATRES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      if (exploreMovies.cache[exploreMovies.selected].length === 0) {
        let res: IMovieCardProps[] | undefined;

        switch (exploreMovies.selected) {
          case ExploreMovies.IN_THEATRES:
            res = await getMovies("in_theatres");
            break;
          case ExploreMovies.POPULAR:
            res = await getMovies("popular");
            break;
          case ExploreMovies.TOP_RATED:
            res = await getMovies("top_rated");
            break;
          case ExploreMovies.UPCOMING:
            res = await getMovies("upcoming");
            break;
          default:
            break;
        }

        res &&
          setExploreMovies((prev) => ({
            selected: exploreMovies.selected,
            loading: false,
            cache: {
              ...prev.cache,
              [exploreMovies.selected]: res,
            },
          }));
      } else {
        setExploreMovies((prev) => ({
          selected: exploreMovies.selected,
          loading: false,
          cache: {
            ...prev.cache,
          },
        }));
      }
    }

    if (exploreMovies.loading) {
      fetchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exploreMovies.loading]);

  async function exploreMovieSelect(select: ExploreMovies) {
    setExploreMovies((prev) => ({
      ...prev,
      selected: select,
      loading: true,
    }));
  }

  async function getMovies(
    selectReq: "in_theatres" | "popular" | "upcoming" | "top_rated"
  ) {
    return await globalRequests?.api
      .get(`/explore/movies/${selectReq}`)
      .then((_result) => _result.data.results)
      .then((_results: IMovieDetails[]) =>
        _results.map((_result) => {
          const movieCardDetails: IMovieCardProps = {
            movieTitle: _result.title,
            movieReleaseDate: _result.release_date,
            src: `https://image.tmdb.org/t/p/original/${_result.poster_path}`,
            review: _result.vote_average,
          };
          return movieCardDetails;
        })
      );
  }

  return {
    exploreMovieSelect,
    exploreMoviesList: exploreMovies.loading
      ? []
      : exploreMovies.cache[exploreMovies.selected],
  };
}
