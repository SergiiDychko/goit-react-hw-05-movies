// import PropTypes from 'prop-types';
import axios from 'axios';

const apiKey = 'e47912c9c86a85e39c0250f9b01ed0f5';

export const fetchTrending = async () => {
  const trending = await axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)

  return trending;
};

export const fetchQuery = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
  );
  return response;
};

export const fetchMovie = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  return response;
};

export const fetchCast = async (id) => {
  console.log('my id ----------------->', id);
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
  );
  return response;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`
  );
  return response;
};