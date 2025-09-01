import React from "react";
import {
  useIncomingRequestsQuery,
  useAcceptRideMutation,
  useRejectRideMutation,
} from "@/redux/features/auth/ride.api";
import { toast } from "sonner";

interface Ride {
  _id: string;
  pickupLocation: string;
  destinationLocation: string;
  rider: string;
  status: string;
}

const IncomingRequests: React.FC = () => {
  const { data, isLoading, isError } = useIncomingRequestsQuery(undefined);
  const [acceptRide] = useAcceptRideMutation();
  const [rejectRide] =  useRejectRideMutation();

  const handleRespond = async (id: string, action: "accepted" | "rejected") => {
    try {
      let res;
      if (action === "accepted") {
        res = await acceptRide(id).unwrap();
        
      } else {
        res = await rejectRide(id).unwrap();
        console.log(res);
      }
      toast(res.message || `Ride ${action}`);
    } catch (err: any) {
      console.error("Error responding to ride:", err);
      toast(err?.data?.message || "Something went wrong");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load requests</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Incoming Ride Requests</h2>
      {!data?.data || data.data.length === 0 ? (
        <p>No incoming requests</p>
      ) : (
        data.data.map((req: Ride) => (
          <div key={req._id} className="border p-3 rounded mb-3">
            <p>
              <b>Pickup:</b> {req.pickupLocation}
            </p>
            <p>
              <b>Destination:</b> {req.destinationLocation}
            </p>
            <button className="bg-yellow-300 text-black px-3 py-1 my-2 rounded">
              {req.status}
            </button>

            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleRespond(req._id, "accepted")}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Accept
              </button>
              <button
                onClick={() => handleRespond(req._id, "rejected")}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default IncomingRequests;
