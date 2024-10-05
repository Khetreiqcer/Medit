'use client';

import Slider from 'react-slick';
import Image from 'next/image';

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      name: 'João Silva',
      image:
        'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'A Meditação Moderna transformou minha vida. Agora me sinto mais calmo e centrado.',
    },
    {
      name: 'Maria Oliveira',
      image:
        'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'As técnicas são fáceis de seguir e realmente ajudam no dia a dia.',
    },
    // ...adicione mais depoimentos se desejar
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center px-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="mx-auto rounded-full mb-4"
            />
            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
            <p className="text-gray-800 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
