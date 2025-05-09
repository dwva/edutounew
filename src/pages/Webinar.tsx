import React from "react";
import { Video, Calendar, Clock, Users, ArrowRight } from "lucide-react";

const Webinar = () => {
  const webinars = [
    {
      id: 1,
      title: "7-Days AI Powered Web Development Workshop",
      date: "March 11, 2025",
      time: "7:00 PM IST",
      instructor: "sujan saitej",
      attendees: "150+",
      topics: ["AI Integration", "React", "Node.js", "MongoDB", "Express"],
      level: "Beginner",
      link: "https://meet.google.com/your-meet-link" 
    },
    {
      id: 2,
      title: "Advanced Web Architecture",
      date: "March 13, 2025",
      time: "7:00 PM IST",
      instructor: "sujan saitej",
      attendees: "120+",
      topics: ["System Design", "Cloud Architecture", "Security", "Performance"],
      level: "Intermediate",
      link: "https://meet.google.com/your-meet-link-2" // Replace with your actual Google Meet link
    }
  ];

  const handleJoinMeet = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Live Webinars
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="group backdrop-blur-lg bg-white/10 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-500 rounded-lg">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{webinar.title}</h2>
              </div>

              <div className="space-y-4 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{webinar.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{webinar.time}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{webinar.attendees} Registered</span>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <p className="font-semibold mb-2">Topics Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {webinar.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="bg-indigo-500/30 px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-sm">Instructor</p>
                    <p className="font-semibold">{webinar.instructor}</p>
                  </div>
                  <button
                    onClick={() => handleJoinMeet(webinar.link)}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    Join Meet
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webinar;