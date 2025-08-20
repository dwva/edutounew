import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CS Student",
    review: "Exceptional curriculum with world-class instructors. Gained real-world skills.",
    avatar: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Michael Chen",
    role: "Data Science",
    review: "Transformed my career. Hands-on projects made all the difference.",
    avatar: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Emily Rodriguez",
    role: "Web Dev",
    review: "Cutting-edge tech with industry-relevant curriculum. Highly recommended!",
    avatar: "https://avatar.vercel.sh/emily",
  },
  {
    name: "David Thompson",
    role: "AI/ML Student",
    review: "Exceeded all expectations. Amazing practical skills gained.",
    avatar: "https://avatar.vercel.sh/david",
  },
  {
    name: "Lisa Park",
    role: "Software Eng",
    review: "Best education investment. Exceptional support system.",
    avatar: "https://avatar.vercel.sh/lisa",
  },
  {
    name: "James Wilson",
    role: "Cybersecurity",
    review: "Practical approach opened doors I never thought possible.",
    avatar: "https://avatar.vercel.sh/james",
  },
];

const TestimonialCard = ({ name, role, review, avatar }) => {
  return (
    <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 mx-2 sm:mx-3 md:mx-4 bg-white rounded-xl p-4 sm:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-orange-400 rounded-full flex items-center justify-center">
            <Quote className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          </div>
        </div>
        <div className="ml-3 sm:ml-4 flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{name}</h4>
          <p className="text-gray-600 text-xs sm:text-sm truncate">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base line-clamp-4">{review}</p>
    </div>
  );
};

export default function CleanTestimonials() {
  return (
    <div className="relative bg-gray-50 py-10 sm:py-14 md:py-16 overflow-hidden">
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          What Our <span className="text-orange-500">Students</span> Say
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Hear from our students about their transformative learning experiences
        </p>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1rem)); }
        }
        .animate-scroll {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 35s;
          }
        }
        @media (max-width: 480px) {
          .animate-scroll {
            animation-duration: 30s;
          }
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="relative">
        {/* First Row */}
        <div className="flex animate-scroll mb-6 sm:mb-8 gap-4 sm:gap-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              {...testimonial}
            />
          ))}
        </div>

        {/* Second Row (Reverse) */}
        <div className="flex animate-scroll gap-4 sm:gap-6" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
          {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-reverse-${index}`}
              {...testimonial}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-12 sm:w-20 md:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-12 sm:w-20 md:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Bottom accent */}
      <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
        <div className="w-14 sm:w-16 md:w-20 h-1 bg-orange-400 rounded-full"></div>
      </div>
    </div>
  );
}