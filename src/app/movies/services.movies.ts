import axios from "axios";
import { TMovie } from "./movie.type";
import { EndPoint } from "@/api/endpoint/endpoint";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const getTrendingMovies = async (): Promise<TMovie[]> => {
 try {
  const { data } = await axios.get<{ results: TMovie[] }>(
   `${API_URL + EndPoint.trending}&api_key=${API_TOKEN}`
  );
  return data.results;
 } catch (error) {
  console.log(error);
  return [];
 }
};

export const getPopularMovies = async (): Promise<TMovie[]> => {
 try {
  const { data } = await axios.get<{ results: TMovie[] }>(
   `${API_URL + EndPoint.popular}&api_key=${API_TOKEN}`
  );
  return data.results;
 } catch (error) {
  console.log(error);
  return [];
 }
};

export const getNowPlayingMovies = async (): Promise<TMovie[]> => {
 try {
  const { data } = await axios.get<{ results: TMovie[] }>(
   `${API_URL + EndPoint.nowplaying}&api_key=${API_TOKEN}`
  );
  return data.results;
 } catch (error) {
  console.log(error);
  return [];
 }
};
