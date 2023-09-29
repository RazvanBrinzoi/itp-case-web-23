import axios from 'axios';

const fetcher = (url:string): Promise<any> => axios.get(url).then((res: any)  => res.data);

export default fetcher;