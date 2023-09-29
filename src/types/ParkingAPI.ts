export type Parking = {
    name: string;
    lastupdate: string;
    totalcapacity: number;
    availablecapacity: number;
    occupation: number;
    type: 'carPark' | 'offStreetParkingGround';
    description: string;
    id: string;
    openingtimesdescription: string;
    isopennow: 0 | 1;
    temporaryclosed: 0 | 1;
    operatorinformation: string;
    freeparking: number;
    urllinkaddress: string;
    occupancytrend: string;
    locationanddimension: string; //use JSON parse on it.
    location: {
        lon: number;
        lat: number;
    },
    text:null ,
    categorie: string;
};