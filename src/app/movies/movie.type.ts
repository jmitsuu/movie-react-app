export interface TGenre {
 id: number;
 name: string;
}
export interface TProdCompany {
 id: number;
 logo_path: string;
 name: string;
}
export interface TMovie {
 id: number;
 title: string;
 original_title: string;
 overview: string;
 poster_path: string;
 backdrop_path: string;
 tagline?: string;
 vote_average: number;
 release_date: string;
 genre_ids: number[];
 genres?: TGenre[];
 production_companies?: TProdCompany[];
}
