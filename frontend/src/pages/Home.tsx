import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import BentoGrid from '../sections/BentoGrid';
import Silhouette from '../sections/Silhouette';
import FAQ from '../sections/FAQ';
import Testimonials from '../sections/Testimonial';

const Home = () => {


  const testimonials = [
    {
      id: 1,
      quote: "Understated, but unforgettable. It feels like it was made for me",
      name: "Random Woman",
      location: "NY, USA",
      image: "/test/test1.png"
    },
    {
      id: 2,
      quote: "The quality exceeded my expectations. Worth every penny.",
      name: "John Doe",
      location: "London, UK",
      image: "/test/test2.png"
    },
    {
      id: 3,
      quote: "Elegant design with impeccable attention to detail.",
      name: "Jane Smith",
      location: "Paris, France",
      image: "/test/test3.png"
    },
    
  ];


  const faqs = [
    {
      question: "Size & Fit",
      answer: "Placeholder answer for Size & Fit.",
    },
    {
      question: "Delivery & Returns",
      answer: "Placeholder answer for Delivery & Returns.",
    },
    {
      question: "How This Was Made",
      answer: "Placeholder answer for How This Was Made.",
    },
  ];

  return (
    <div className="flex flex-col space-y-16">
      <Hero />
      <Intro />
      <BentoGrid />
      <div className="w-full bg-black text-white py-16 px-6 md:px-8">
        <div className="max-w-[1800px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-light">Silhouette No. 1 – Vermilion</h2>
        </div>
      </div>
      <Silhouette/>
      <FAQ faqs={faqs} />
      <Testimonials testimonials={testimonials} className=''/>
    </div>
  );
};

export default Home; 