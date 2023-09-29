import useSWR from 'swr';
import fetcher from '../api/fetcher';
import { bikeswr } from '../types/SWR';
import { Bike } from '../types/BikeAPI';

const useParkingAPI = (id?: number): bikeswr<Bike[]> => {
  
  let endpoint = `https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein/records?limit=20`;

  if(id === 0){
    endpoint = `https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-dampoort/records?limit=20`;
  }

  const { data, error, isValidating } = useSWR(endpoint, fetcher, {
    refreshInterval:  10 * 60 * 1000, 
    focusThrottleInterval: 10 * 60 * 1000, 
  });

  return {
    data: data && data.results,
    isLoading: !error && !data,
    isValidating,
    error,
  };
};

export default useParkingAPI;