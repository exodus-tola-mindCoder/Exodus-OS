'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Mail, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonialsData } from '@/lib/testimonials-data';

export default function TestimonialsWindow() {
  const featuredTestimonials = testimonialsData.filter(t => t.featured);
  const otherTestimonials = testimonialsData.filter(t => !t.featured);

  return (
    <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Testimonials</h2>
            <p className="text-gray-600 text-sm">What people say about working with Exodus</p>
          </div>
        </div>
      </div>

      {/* Featured Testimonials */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-800">Featured Recommendations</h3>
        <div className="grid gap-4">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-100 relative"
            >
              <Quote className="absolute top-3 right-3 w-6 h-6 text-blue-300" />
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.textContent = testimonial.name.charAt(0);
                    }}
                  />
                  <span className="text-gray-600 font-semibold hidden"></span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    "{testimonial.testimonial}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-blue-600">{testimonial.position}</p>
                    <p className="text-xs text-gray-500">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Testimonials */}
      {otherTestimonials.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Additional Testimonials</h3>
          <div className="grid gap-3">
            {otherTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (featuredTestimonials.length + index) * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling!.textContent = testimonial.name.charAt(0);
                      }}
                    />
                    <span className="text-gray-600 font-medium text-sm hidden"></span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      "{testimonial.testimonial}"
                    </p>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.position}, {testimonial.organization}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Add Testimonial CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-green-50 p-4 rounded-lg border border-green-200 text-center"
      >
        <Plus className="w-6 h-6 text-green-600 mx-auto mb-2" />
        <h4 className="font-semibold text-green-800 mb-2">Add Your Testimonial</h4>
        <p className="text-green-700 text-sm mb-3">
          Worked with Exodus? Share your experience and help others discover his expertise.
        </p>
        <Button className="flex items-center space-x-2 mx-auto">
          <Mail className="w-4 h-4" />
          <span>Write a Testimonial</span>
        </Button>
      </motion.div>
    </div>
  );
}