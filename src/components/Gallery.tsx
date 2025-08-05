import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Thumbs, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const images = [
    { src: "/lab-image-1.jpg", alt: "Our laboratory equipment setup" },
    { src: "/lab-image-2.jpg", alt: "Quality control process in action" },
    { src: "/lab-image-3.jpg", alt: "Research team at work" },
    { src: "/lab-image-4.jpg", alt: "Precision measurement instruments" },
    { src: "/lab-image-5.jpg", alt: "Chemical analysis in progress" },
    { src: "/lab-image-6.jpg", alt: "Modern lab facilities" },
    { src: "/lab-image-7.jpg", alt: "Team collaboration session" },
    { src: "/lab-image-8.jpg", alt: "Advanced testing equipment" },
  ];

  const videoUrl = "/lab-video.mp4";
  const videoPoster = "/lab-video-poster.jpg";

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <section id="gallery" className="py-12 sm:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,51,102,0.03)_0%,_transparent_70%)] z-0"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral via-navy to-coral opacity-10"></div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 tracking-tight">
            Explore Our World
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A visual journey through our state-of-the-art facilities and dedicated team in action.
          </p>
        </div>

        {/* Featured Video Section - Compact */}
        <div className="mb-10 sm:mb-14 lg:mb-16 w-full max-w-[800px] mx-auto">
          <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video bg-black w-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={videoPoster}
                controls={videoPlaying}
                onClick={toggleVideoPlay}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {!videoPlaying && (
                <>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity duration-300">
                    <button
                      onClick={toggleVideoPlay}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 border-2 border-white/50 hover:border-white transition-all duration-300 transform hover:scale-105"
                      aria-label="Play video"
                    >
                      <Play className="text-white w-6 h-6 sm:w-7 sm:h-7 fill-white/90" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 rounded-md text-xs sm:text-sm">
                    Featured Video
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Image Gallery - Compact Height */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-navy text-center mb-4 sm:mb-6">
            Laboratory Gallery
          </h3>
          
          <div className="relative w-full max-w-[700px] mx-auto">
            {/* Main Swiper - Reduced Height */}
            <Swiper
              spaceBetween={10}
              effect={"fade"}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              modules={[EffectFade, Navigation, Pagination, Thumbs, Autoplay]}
              className="mb-2 sm:mb-3 rounded-xl overflow-hidden shadow-md"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="relative aspect-[5/3] bg-gray-100 cursor-zoom-in w-full" 
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                      <div className="text-white translate-y-3 hover:translate-y-0 transition-transform duration-300">
                        <p className="font-medium text-sm sm:text-base">{image.alt}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/50 text-white p-1 sm:p-1.5 rounded-full hover:bg-black/70 transition-colors duration-300">
                      <Maximize className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation - Compact */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              <button className="swiper-button-prev bg-white/80 hover:bg-white text-navy p-1 sm:p-1.5 rounded-full shadow-sm transition-all duration-300 hover:scale-105">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="swiper-button-next bg-white/80 hover:bg-white text-navy p-1 sm:p-1.5 rounded-full shadow-sm transition-all duration-300 hover:scale-105">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Thumbnail Swiper - Compact */}
            <div className="mt-4 sm:mt-5 w-full max-w-[600px] mx-auto px-3 sm:px-0">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={6}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                breakpoints={{
                  480: { slidesPerView: 5 },
                  640: { slidesPerView: 6 },
                  768: { slidesPerView: 7 },
                }}
                className="thumbnail-swiper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer border border-transparent hover:border-coral transition-all duration-300">
                      <img
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Thumbnails, Zoom]}
        animation={{ fade: 300 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        carousel={{
          finite: false,
          preload: 2,
          spacing: 0.1,
        }}
      />
    </section>
  );
};

export default Gallery;