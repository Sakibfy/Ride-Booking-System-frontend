export default function About() {
  return (
      <section>
	<div className="dark:bg-gray-400 lg:mb-28 mb-11">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
    <h1 className="text-5xl font-bold">Our Story</h1>
    <p className="py-6">
      Ride easy is a ride-hailing app, enabling passengers to select cars and CNG auto-rickshaws upon specifying the destination. Along with this, OBHAI also provides secure parcel deliveries. The mission is to offer safe, reliable, and convenient transportation to everyone all across Bangladesh. Our deep-rooted, global passenger, and cargo transportation experiences, and above all, being an inhabitant of Dhaka, inspired us to find an affordable and reliable transportation solution which can help passengers to achieve more in their lives.
      </p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">Get started</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50">Learn more</button>
			</div>
		</div>
	</div>
	<img src="" alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
</section>

  );
}
