import axios from "axios";
import { TMovie } from "./movie.type";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const getTrendingMovies = async (): Promise<TMovie[]> => {
  try {
    const { data } = await axios.get<{ results: TMovie[] }>(
      `${API_URL}/trending/all/day?language=pt-BR&api_key=${API_TOKEN}`
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
      `${API_URL}/movie/popular?language=pt-BR&api_key=${API_TOKEN}`
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
      `${API_URL}/movie/now_playing?language=pt-BR&api_key=${API_TOKEN}`
    );
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
