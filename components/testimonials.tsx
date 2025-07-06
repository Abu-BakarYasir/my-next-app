//import testimonials from '../data/testimonials.json';
import testimonials from '../public/assets/testimonials.json'

export default function Testimonials() {
  const selectedIndex = 0; // Example: First testimonial is selected by default

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Why customers love <br></br><span className="text-purple-600">working with us</span>
      </h2>
      <div className="relative text-center max-w-2xl mx-auto">
        <p className="text-gray-600 italic text-lg mb-4">
          Without any doubt I recommend Alcaline Solutions as one of <br />the best web
          design and digital marketing agencies. One of <br />the best agencies I&apos;ve
          come across so far. Wouldnt be <br />hesitated to introduce their work to
          someone else.
        </p>
        <span className="text-purple-600 text-4xl">&ldquo;</span>
        <span className="text-purple-600 text-4xl absolute right-0 top-0">&rdquo;</span>
      </div>
      <div className="flex justify-center space-x-6 mt-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-300 ${
              index === selectedIndex
                ? 'scale-110 opacity-100'
                : 'opacity-60 hover:scale-105 hover:opacity-90'
            }`}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
            </div>
            <p className="text-gray-800 font-semibold mt-1">{testimonial.name}</p>
            <p className="text-gray-500 text-sm">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}