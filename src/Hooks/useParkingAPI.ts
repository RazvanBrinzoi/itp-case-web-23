import useSWR from 'swr';
import fetcher from '../api/fetcher';
import { parkingswr } from '../types/SWR';
import { Parking } from '../types/ParkingAPI';

const useParkingAPI = (id?: string): parkingswr<Parking[]> => {
  let endpoint = `https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20`;

  if ( id ) {
    endpoint = `https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?where=name="${id}"&limit=20`;
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