export type Bike = {
    last_seen: string;
    id: number;
    name: string;
    bikes_in_use: number;
    bikes_available: number;
    longitude: string;
    latitude: string;
    geopoint:{
        lon: number;
        lat: number;
    }
    type: string;
};
