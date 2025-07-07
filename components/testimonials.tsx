//import testimonials from '../data/testimonials.json';
import testimonials from '../public/assets/testimonials.json'

export default function Testimonials() {
  const selectedIndex = 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8 text-center leading-tight">
        Why clients love <br className="hidden sm:block" /><span className="text-purple-600">working with us</span>
      </h2>
      <div className="relative text-center max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-12">
        <p className="text-gray-600 italic text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 leading-relaxed px-4">
          Working with Spiral Labs has been exceptional. Jawaad and his team <br className="hidden md:block" />delivered exactly what we needed - a modern, responsive website <br className="hidden md:block" />that perfectly represents our brand. Their attention to detail <br className="hidden md:block" />and professional approach made the entire process seamless.
        </p>
        <span className="text-purple-600 text-2xl sm:text-3xl lg:text-4xl">&ldquo;</span>
        <span className="text-purple-600 text-2xl sm:text-3xl lg:text-4xl absolute right-0 top-0">&rdquo;</span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-300 ${
              index === selectedIndex
                ? 'scale-110 opacity-100'
                : 'opacity-60 hover:scale-105 hover:opacity-90'
            }`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mb-2">
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
                  <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                ))}
            </div>
            <p className="text-gray-800 font-semibold mt-1 text-sm sm:text-base">{testimonial.name}</p>
            <p className="text-gray-500 text-xs sm:text-sm text-center">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}