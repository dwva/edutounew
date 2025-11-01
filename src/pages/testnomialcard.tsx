import React from "react";
import { Quote } from "lucide-react";
import backgroundImage from "../components/magicpattern.png";

const testimonials = [
  {
    name: "THARUN KARTHIKEYAN R N ",
    role: "CS Student",
    review: "The lecturer was very interactive so this makes the course more Good and enjoyable",
    avatar: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "V M Sai Bhargav Chen",
    role: "Data Science",
    review: "Feeling surprised that you have completed the future in 7 days my career. Hands-on projects made all the difference.",
    avatar: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Christina joy P",
    role: "Web Dev",
    review: "Cutting-edge tech with industry-Understanding how to connect the front end with the back end and handle requests efficiently was one of the most valuable takeaways curriculum. Highly recommended!",
    avatar: "https://avatar.vercel.sh/emily",
  },
  {
    name: "POORNIMA S ",
    role: "AI/ML Student",
    review: "It's very helpful to gain a more knowledge. all expectations. Amazing practical skills gained.",
    avatar: "https://avatar.vercel.sh/david",
  },
  {
    name: "Nameetha N",
    role: "Software Eng",
    review: "It was greatful ! I learned So much how we can develop the website efficiently  its juzt amazing !!.",
    avatar: "https://avatar.vercel.sh/lisa",
  },
  {
    name: "S THULASISWAR REDDY ",
    role: "Cybersecurity",
    review: "GREAT EXPERIENCE .",
    avatar: "https://avatar.vercel.sh/james",
  },
];

interface TestimonialProps {
  name: string;
  role: string;
  review: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, review, avatar }) => {
  return (
    <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 mx-2 sm:mx-3 md:mx-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-3">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(name) + "&background=0D8ABC&color=fff";
            }}
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-orange-400 rounded-full flex items-center justify-center">
            <Quote className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          </div>
        </div>
        <div className="ml-3 sm:ml-4 flex-1 min-w-0">
          <h4 className="subheading text-gray-900 text-sm sm:text-base truncate">{name}</h4>
          <p className="caption-text text-gray-600 text-xs sm:text-sm truncate">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base line-clamp-4 body-text">{review}</p>
    </div>
  );
};

export default function CleanTestimonials() {
  return (
    <div 
      className="relative bg-gray-50 py-10 sm:py-14 md:py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl section-heading text-gray-900 mb-3 sm:mb-4">
            What Our <span className="text-orange-500">Students</span> Say
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto body-text">
            Hear from our students about their transformative learning experiences
          </p>
        </div>

        <style>{`
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
                name={testimonial.name}
                role={testimonial.role}
                review={testimonial.review}
                avatar={testimonial.avatar}
              />
            ))}
          </div>

          {/* Second Row (Reverse) */}
          <div className="flex animate-scroll gap-4 sm:gap-6" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-reverse-${index}`}
                name={testimonial.name}
                role={testimonial.role}
                review={testimonial.review}
                avatar={testimonial.avatar}
              />
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-12 sm:w-20 md:w-32 h-full bg-gradient-to-r from-white/70 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-12 sm:w-20 md:w-32 h-full bg-gradient-to-l from-white/70 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Bottom accent */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <div className="w-14 sm:w-16 md:w-20 h-1 bg-orange-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}