import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const IntroCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "Anonymous Feedback",
      description: "Receive honest and anonymous feedback from people who know you best!",
      icon: "https://c.animaapp.com/mcx4tn3jwyabUV/img/image-15.png"
    },
    {
      id: 2,
      title: "Therapists & Coaches",
      description: "Connect with professional therapists and certified coaches who can guide your personal development journey with expert insights.",
      icon: "https://c.animaapp.com/mcx4tn3jwyabUV/img/image-17.png"
    },
    {
      id: 3,
      title: "Grow Yourself Better",
      description: "Transform feedback into actionable growth plans. Track your progress and become the best version of yourself with personalized insights.",
      icon: "https://c.animaapp.com/mcx4tn3jwyabUV/img/image-19.png"
    }
  ];

  // Handle slide change
  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  }, []);

  // Handle scroll event to update active slide
  const handleScroll = useCallback(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      const scrollPosition = carouselRef.current.scrollLeft;
      const newActiveSlide = Math.round(scrollPosition / slideWidth);
      
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    }
  }, [activeSlide]);

  // Auto scroll slides every 3 seconds
  const autoScroll = useCallback(() => {
    const nextSlide = (activeSlide + 1) % slides.length;
    goToSlide(nextSlide);
  }, [activeSlide, slides.length, goToSlide]);

  useEffect(() => {
    const autoScrollTimer = setInterval(autoScroll, 3000);
    return () => clearInterval(autoScrollTimer);
  }, [autoScroll]);

  // Add scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  // Handle get started button click
  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="mobile-container bg-[linear-gradient(136deg,rgba(219,234,254,1)_11%,rgba(202,225,254,1)_43%,rgba(252,231,243,1)_100%)] h-screen relative overflow-hidden">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="w-full h-[500px] mt-[150px] flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className="min-w-full h-full flex-shrink-0 flex justify-center items-start snap-center"
          >
            <Card className="w-[327px] h-[404px] bg-white rounded-[43px] shadow-lg border-none">
              <CardContent className="p-0 h-full relative">
                <img
                  className="absolute w-[65px] h-[65px] top-[30px] left-1/2 -translate-x-1/2 object-cover"
                  alt={`${slide.title} icon`}
                  src={slide.icon}
                />

                <h2 className="absolute w-full top-[120px] text-center font-semibold text-2xl text-black">
                  {slide.title}
                </h2>

                <p className="absolute w-[250px] top-[180px] left-1/2 -translate-x-1/2 text-center text-black">
                  {slide.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute w-full bottom-[230px] flex justify-center">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-2 relative rounded-[50px] backdrop-blur-[20px] bg-white/30">
          {slides.map((_, index) => (
            <div
              key={`dot-${index}`}
              className={`relative w-2 h-2 bg-black rounded-full cursor-pointer transition-opacity duration-300 ${index !== activeSlide ? "opacity-30" : ""}`}
              onClick={() => goToSlide(index)}
            />
            ))}
          </div>
        </div>

        {/* Get Started Button */}
        <Button 
          className="w-[272px] h-[49px] absolute bottom-[120px] left-1/2 -translate-x-1/2 bg-[#74a4ee] rounded-[25px] text-white font-medium shadow-md hover:bg-[#5a8fd8] transition-colors"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
    </div>
  );
};
