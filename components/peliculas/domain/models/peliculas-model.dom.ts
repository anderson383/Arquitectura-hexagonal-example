import {IPaginateData} from "~/core/domain/models/paginate-data";

export interface IPeliculasPaginateDataDTO extends IPaginateData {
  results: Array<PeliculasModelDom>
}

export interface PeliculasModelDom {
  adult?: boolean,
  backdrop_path?: string,
  genre_ids?: Array<number>,
  id?: number,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string,
  release_date?: Date,
  title?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number
}
