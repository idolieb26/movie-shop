type MediaType = "movie" | "tv";

export interface IGenre {
  id: number;
  name: string;
}

export interface IProductionCompanies {
  id: number;
  logo_path: ?string;
  name: string;
  origin_country: string;
}

export interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ICast {
  adult: boolean;
  gender: ?number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: ?string;
  cast_id: ?number;
  character: string;
  credit_id: string;
  order: number;
}

export interface ICrew {
  adult: boolean;
  gender: ?number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: ?string;
  credit_id: string;
  department: string;
  job: string;
}

export interface ICredit {
  cast: ICast[];
  crew: ICrew[];
}
