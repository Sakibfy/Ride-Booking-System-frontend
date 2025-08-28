import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddRideMutation } from "@/redux/features/auth/ride.api";


import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface RideFormValues {
  pickup: string;
  destination: string;
}


export default function Ride() {
  const form = useForm<RideFormValues>({
    defaultValues: {
      pickup: "",
      destination: "",
    },
  });


  const [addRide] = useAddRideMutation();
  
  const onSubmit = async (data: RideFormValues) => {
    console.log("Form Data:", data);
  
    // map frontend form fields to backend expected fields
    const payload = {
      pickupLocation: data.pickup,
      destinationLocation: data.destination,
    };
  
    const res = await addRide(payload).unwrap().catch((err) => {
      console.error("Ride request error:", err);
      toast.error(err?.data?.message || "Ride booking failed");
    });
  
    if (res?.success) {
      toast.success("Ride Booking Successfully");
      console.log("Ride Response:", res);
    }
  };
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-6/12 max-w-md shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Set Your Ride</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="pickup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="pb-2.5">Pickup Location</FormLabel>
                  <FormControl className="mb-4">
                    <Input
                      placeholder="Pickup Location"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="pb-2.5">Destination Location</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Destination Location"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full cursor-pointer mt-4">
              Confirm Ride
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
