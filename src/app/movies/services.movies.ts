import axios from "axios";
import { TMovie } from "./movie.type";
import { EndPoint } from "@/api/endpoint/endpoint";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const getTrendingMovies = async (newPage: number): Promise<TMovie[]> => {
 try {
  const { data } = await axios.get<{ results: TMovie[] }>(
   `${API_URL + EndPoint.trending}&api_key=${API_TOKEN}`,
   {
    params: { page: newPage },
   }
  );
  return data.results;
 } catch (error) {
  console.log(error);
  return [];
 }
};

export const getPopularMovies = async (newPage: number): Promise<TMovie[]> => {
 try {
  const { data } = await axios.get<{ results: TMovie[] }>(
   `${API_URL + EndPoint.popular}&api_key=${API_TOKEN}`,
   {
    params: { page: newPage },
   }
  );
  return data.results;
 } catch (error) {
  console.log(error);
  return [];
 }
};

export const getNowPlayingMovies = async (
 newPage: number
): Promise<TMovie[]> => {
 try {
  const { data } = await axios.get<{ results: TMovie[] }>(
   `${API_URL + EndPoint.nowplaying}&api_key=${API_TOKEN}`,
   {
    params: { page: newPage },
   }
  );
  return data.results;
 } catch (error) {
  console.log(error);
  return [];
 }
};
export const getMovieById = async (id: number): Promise<TMovie | undefined> => {
 try {
  const { data } = await axios.get(
   `${
    API_URL + EndPoint.findMovieByID + id
   }?language=pt-BR&api_key=${API_TOKEN}`
  );
  return data;
 } catch (error) {
  if (error) {
   alert(
    "Descrição não localizada na API. Voce será redirecionado para pagina inicial"
   );
   window.location.href = "/trending";
  }
 }
};
export const searchMovie = async (title: string): Promise<TMovie[]> => {
 try {
  const { data } = await axios.get<{ results: TMovie[] }>(
   `${
    API_URL + EndPoint.searchMovie + title
   }&include_adult=false&language=pt-BR&api_key=${API_TOKEN}`
  );
  // console.log(data.results, title)
  return data.results;
 } catch (error) {
  console.log(error);
  return [];
 }
};
