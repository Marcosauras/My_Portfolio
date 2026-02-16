import Footer from "../components/Footer";

// Adopt Don't Shop images
import AdoptAnimalsImg from "../assets/group-pets-dog-cat-bird-reptile-rabbit-isolated-whi_191971-5486.webp";
import dog from "../assets/Screenshot of dog for adoption.png";
import cat from "../assets/cat-for-adoption.png";

// LumoGrindz images
import lights from "../assets/Christmas-lights.png";
import bee from "../assets/LumoGrindz_logo.png";

import gameImage from "../assets/2DShooter_image1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCube } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

function ProjectCard({ children }) {
  return (
    <figure className="w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-night/60 backdrop-blur-md shadow-2xl">
      {children}
    </figure>
  );
}

function MyProjects() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-Dark_Blue via-Navy_Blue-500 to-Baby_Blue text-white">
      {/* Header */}
      <header className="pt-10 pb-6 px-6 text-center">
        <h2
          className="text-5xl md:text-6xl font-bold tracking-tight"
          id="My-Projects"
        >
          My Projects
        </h2>
        <p className="mt-4 text-xl md:text-2xl text-white/85 max-w-3xl mx-auto">
          A few projects I’ve built while learning web development and game
          development.
        </p>
      </header>

      {/* Projects Grid */}
      <main className="flex-grow px-6 pb-10">
        <div className="mx-auto grid gap-10 place-items-stretch grid-cols-1 xl:grid-cols-2">
          {/* Adopt Don't Shop */}
          <ProjectCard>
            <div className="w-full aspect-video sm:aspect-auto sm:h-full">
              <a
                href="https://marcosauras.github.io/Adopt-Dont-Shop/"
                rel="noreferrer"
                target="_blank"
                className="block"
              >
                <div className="w-full aspect-video overflow-hidden">
                  <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    loop={true}
                    autoplay={{ delay: 4850, disableOnInteraction: false }}
                    cubeEffect={{
                      shadow: true,
                      slideShadows: true,
                      shadowOffset: 20,
                      shadowScale: 0.94,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCube, Autoplay, Pagination, Navigation]}
                    className="h-full w-full"
                  >
                    <SwiperSlide>
                      <img
                        className="h-full w-full object-cover"
                        src={AdoptAnimalsImg}
                        alt="Adopt Don't Shop"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="h-full w-full object-cover"
                        src={dog}
                        alt="Brown dog for adoption"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="h-full w-full object-cover"
                        src={cat}
                        alt="Black cat for adoption"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </a>

              <figcaption className="p-6 md:p-10 flex flex-col justify-center text-left space-y-5">
                <div className="space-y-2">
                  <a
                    href="https://marcosauras.github.io/Adopt-Dont-Shop/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-3xl font-bold hover:text-white/90"
                  >
                    Adopt Don’t Shop
                  </a>
                  <p className="text-lg text-white/85 leading-relaxed">
                    Find animals (dogs, cats, rabbits, and birds) up for
                    adoption near you using a zip code search.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://marcosauras.github.io/Adopt-Dont-Shop/"
                    rel="noreferrer"
                    target="_blank"
                    className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/Marcosauras/Adopt-Dont-Shop"
                    rel="noreferrer"
                    target="_blank"
                    className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition"
                  >
                    GitHub Repo
                  </a>
                </div>
                {/* Adopt don't shop tech Tags */}
                <div className="flex flex-wrap gap-2 pt-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
                    HTML · 52%
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
                    JavaScript · 47%
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
                    CSS · 1%
                  </span>
                </div>
              </figcaption>
            </div>
          </ProjectCard>

          {/* LumoGrindz */}
          <ProjectCard>
            <div className="w-full aspect-video sm:aspect-auto sm:h-full">
              <a
                href="https://lumogrindz.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
                className="block"
              >
                <div className="w-full aspect-video overflow-hidden">
                  <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    cubeEffect={{
                      shadow: true,
                      slideShadows: true,
                      shadowOffset: 20,
                      shadowScale: 0.94,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCube, Autoplay, Pagination, Navigation]}
                    className="h-full w-full"
                  >
                    <SwiperSlide>
                      <img
                        className="h-full w-full object-cover"
                        src={lights}
                        alt="LumoGrindz"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="h-full w-full object-cover"
                        src={bee}
                        alt="Yellow bee logo"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </a>

              <figcaption className="p-6 md:p-10 flex flex-col justify-center text-left space-y-5">
                <div className="space-y-2">
                  <a
                    href="https://github.com/Marcosauras/LumoGrindz"
                    rel="noreferrer"
                    target="_blank"
                    className="text-3xl font-bold hover:text-white/90"
                  >
                    LumoGrindz
                  </a>
                  <p className="text-lg text-white/85 leading-relaxed">
                    A site for workers to share job information so others can
                    better understand roles, tasks, and expectations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://github.com/Marcosauras/LumoGrindz"
                    rel="noreferrer"
                    target="_blank"
                    className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition"
                  >
                    GitHub Repo
                  </a>
                </div>
                {/* LumoGrindz Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
                    JavaScript · 61%
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
                    Handlebars · 30%
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
                    CSS · 9%
                  </span>
                </div>
              </figcaption>
            </div>
          </ProjectCard>

          {/* 2D Space Adventure */}
          <ProjectCard>
            <div className="grid md:grid-cols-2 gap-6 md:gap-0">
              <a
                href="https://github.com/Marcosauras/2D_Space_Adventure"
                rel="noreferrer"
                target="_blank"
                className="block w-full"
              >
                <div className="w-full aspect-video md:aspect-auto md:h-full overflow-hidden">
                  <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    loop={true}
                    autoplay={{ delay: 4850, disableOnInteraction: false }}
                    cubeEffect={{
                      shadow: true,
                      slideShadows: true,
                      shadowOffset: 20,
                      shadowScale: 0.94,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCube, Autoplay, Pagination, Navigation]}
                    className="h-full w-full"
                  >
                    <SwiperSlide>
                      <img
                        className="h-full w-full object-cover"
                        src={gameImage}
                        alt="2D Space Adventure gameplay"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </a>

              <figcaption className="p-6 md:p-10 flex flex-col justify-center text-left space-y-5">
                <div className="space-y-2">
                  <a
                    href="https://github.com/Marcosauras/2D_Space_Adventure"
                    rel="noreferrer"
                    target="_blank"
                    className="text-3xl font-bold hover:text-white/90"
                  >
                    2D Space Adventure
                  </a>
                  <p className="text-lg text-white/85 leading-relaxed">
                    A 2D shooter game built in Godot. Play as a spaceship
                    against an endless horde of enemies. More updates to come.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://github.com/Marcosauras/2D_Space_Adventure"
                    rel="noreferrer"
                    target="_blank"
                    className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 transition"
                  >
                    GitHub Repo
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
                    GDScript · 100%
                  </span>
                </div>
              </figcaption>
            </div>
          </ProjectCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MyProjects;
