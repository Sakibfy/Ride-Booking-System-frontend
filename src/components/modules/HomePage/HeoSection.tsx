import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://pathao.com/wp-content/uploads/2018/12/03-car.png"
          className="w-full h-full object-cover [mask-image:radial-gradient(800%_200%_at_center,white,transparent)] opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          
          {/* Text Section */}
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start max-w-3xl">
            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug">
              Travel in comfort, at your Convenience{" "}
              <span className="text-primary">Bangladesh</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Want a comfortable ride home from work? Pathao cars have you covered!
            </p>
            <Button className="mt-6 w-full sm:w-auto">Take a Ride</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
