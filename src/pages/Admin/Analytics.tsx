import { useIncomingRequestsQuery } from "@/redux/features/auth/ride.api";


export default function Analytics() {
  const { data, isLoading, isError } = useIncomingRequestsQuery(undefined);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        Loading ride history...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-64 text-red-500">
        Error: {error instanceof Error ? error.message : "Failed to load rides"}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        No ride history found.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ride Analytics</h1>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border text-left">Ride ID</th>
              <th className="p-3 border text-left">Driver</th>
              <th className="p-3 border text-left">Rider</th>
              <th className="p-3 border text-left">Status</th>
              <th className="p-3 border text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((ride: any, index: number) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="p-3 border">{ride._id}</td>
                <td className="p-3 border">{ride.driver?.name || "N/A"}</td>
                <td className="p-3 border">{ride.rider?.name || "N/A"}</td>
                <td
                  className={`p-3 border font-semibold ${
                    ride.status === "completed"
                      ? "text-green-600"
                      : ride.status === "cancelled"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {ride.status}
                </td>
                <td className="p-3 border">
                  {new Date(ride.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
