export default function About() {
  return (
    <>
      <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Our Story</h1>
      <p className="py-6">
      ride essy is a ride-hailing app, enabling passengers to select cars and CNG auto-rickshaws upon specifying the destination. Along with this, OBHAI also provides secure parcel deliveries. The mission is to offer safe, reliable, and convenient transportation to everyone all across Bangladesh. Our deep-rooted, global passenger, and cargo transportation experiences, and above all, being an inhabitant of Dhaka, inspired us to find an affordable and reliable transportation solution which can help passengers to achieve more in their lives.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
    </>
  );
}
