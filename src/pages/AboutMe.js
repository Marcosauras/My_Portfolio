import Footer from "../components/Footer";
import ProfileImage from "../assets/ScreenshotOfMe2.0.png";

function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-Dark_Blue via-Navy_Blue-500 to-Baby_Blue text-white">
      <section className="flex-grow flex items-center justify-center px-6">
        <div
          id="about-me"
          className="max-w-5xl w-full grid md:grid-cols-2 gap-10 
                     bg-night/60 backdrop-blur-md
                     rounded-3xl shadow-2xl
                     p-10 border border-white/10"
        >
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-gradient-to-tr from-Baby_Blue to-Dark_Blue shadow-xl">
              <img
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/20"
                src={ProfileImage}
                alt="Marc Hamilton"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h1>

            <p className="text-xl leading-relaxed text-white/90">
              Hi, I’m Marc — a junior at Oregon State University majoring in
              Applied Computer Science. I’m passionate about software
              development, with an interest in web and game
              development.
            </p>

            <p className="text-lg text-white/80">
              I enjoy learning about new coding languages, understanding how
              they work and making my ideas into reality
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutMe;
