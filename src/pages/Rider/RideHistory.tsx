import { useRideHistoryQuery } from "@/redux/features/auth/ride.api";


export default function RideHistory() {

  const { data, isLoading, isError } = useRideHistoryQuery(undefined);


  console.log(data);
  
  if (isLoading) {
    return <p className="text-center text-gray-500">Loading ride history...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load ride history.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">🚖 Ride History</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-indigo-600">
            <tr>
              <th scope="col" className="px-6 py-3">Ride ID</th>
              <th scope="col" className="px-6 py-3">Pickup</th>
              <th scope="col" className="px-6 py-3">Destination</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((ride: any) => (
              <tr
                key={ride._id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900">{ride._id}</td>
                <td className="px-6 py-4">{ride.pickupLocation}</td>
                <td className="px-6 py-4">{ride.destinationLocation}</td>
                <td className="px-6 py-4">
                  {new Date(ride.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      ride.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : ride.status === "pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {ride.status}
                  </span>
                </td>
              </tr>
            ))}

            {data?.rides?.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center px-6 py-4 text-gray-500"
                >
                  No rides found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
