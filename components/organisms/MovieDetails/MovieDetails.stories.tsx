import { IMovieDetails } from "types/movie";
import { IPayload } from "types/story";
import MovieDetails from "./MovieDetails";

const payload: IPayload = {
  title: "ORGANISMS/MovieDetails",
  component: MovieDetails,
};
export default payload;

//https://api.themoviedb.org/3/movie/453395?api_key=API_KEY&language=en-US&append_to_response=external_ids
const FakeData: IMovieDetails = {
  adult: false,
  backdrop_path: "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
  belongs_to_collection: {
    id: 618529,
    name: "Doctor Strange Collection",
    poster_path: "/oa5uQOTY9Y4ERNrsDk7E0eC1E3h.jpg",
    backdrop_path: "/5ZuctJh5uX5L2dz1CjA7WsTJwZk.jpg",
  },
  budget: 200000001,
  genres: [
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
  ],
  homepage:
    "https://www.marvel.com/movies/doctor-strange-in-the-multiverse-of-madness",
  id: 453395,
  imdb_id: "tt9419884",
  original_language: "en",
  original_title: "Doctor Strange in the Multiverse of Madness",
  overview:
    "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
  popularity: 6647.226,
  poster_path: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  production_companies: [
    {
      id: 420,
      logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
      name: "Marvel Studios",
      origin_country: "US",
    },
    {
      id: 176762,
      logo_path: null,
      name: "Kevin Feige Productions",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2022-05-04",
  revenue: 951500000,
  runtime: 126,
  spoken_languages: [
    {
      english_name: "Cantonese",
      iso_639_1: "cn",
      name: "广州话 / 廣州話",
    },
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "Spanish",
      iso_639_1: "es",
      name: "Español",
    },
  ],
  status: "Released",
  tagline: "Enter a new dimension of Strange.",
  title: "Doctor Strange in the Multiverse of Madness",
  video: false,
  vote_average: 7.5,
  vote_count: 4082,
  external_ids: {
    imdb_id: "tt9419884",
    facebook_id: "DoctorStrangeOfficial",
    instagram_id: "doctorstrangeofficial",
    twitter_id: "DrStrange",
  },
};

export const Basic = (args: any) => <MovieDetails movie={FakeData} {...args} />;
Basic.args = {};
