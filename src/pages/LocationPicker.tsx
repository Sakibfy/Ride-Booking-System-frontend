import  { useState } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.8103, // Dhaka default
  lng: 90.4125,
};

const LocationPicker = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupAuto, setPickupAuto] = useState<any>(null);
  const [destinationAuto, setDestinationAuto] = useState<any>(null);

  const onLoadPickup = (autocomplete: any) => {
    setPickupAuto(autocomplete);
  };

  const onLoadDestination = (autocomplete: any) => {
    setDestinationAuto(autocomplete);
  };

  const onPlaceChangedPickup = () => {
    if (pickupAuto !== null) {
      setPickup(pickupAuto.getPlace().formatted_address);
    }
  };

  const onPlaceChangedDestination = () => {
    if (destinationAuto !== null) {
      setDestination(destinationAuto.getPlace().formatted_address);
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY" libraries={["places"]}>
      <div className="p-4 max-w-lg mx-auto space-y-4">
        <Autocomplete onLoad={onLoadPickup} onPlaceChanged={onPlaceChangedPickup}>
          <input
            type="text"
            placeholder="Enter Pickup Location"
            className="w-full p-2 border rounded"
          />
        </Autocomplete>

        <Autocomplete onLoad={onLoadDestination} onPlaceChanged={onPlaceChangedDestination}>
          <input
            type="text"
            placeholder="Enter Destination Location"
            className="w-full p-2 border rounded"
          />
        </Autocomplete>

        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}></GoogleMap>

        <div className="p-3 bg-gray-100 rounded">
          <p><strong>Pickup:</strong> {pickup}</p>
          <p><strong>Destination:</strong> {destination}</p>
        </div>
      </div>
    </LoadScript>
  );
};

export default LocationPicker;
