import React from 'react'

export default function FeatureSection() {
  return (
    <div>
          <section className="py-16 px-6 max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  Why Choose Us?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                      <h3 className="text-xl font-semibold text-[#04668D]">Personalized Designs Tailored to You</h3>
                      <p className="text-gray-600 mt-2">We believe every space should tell a story—your story. Our designs are crafted to match your vision, lifestyle, and unique preferences. Whether you love minimalist elegance, contemporary chic, or timeless luxury, we bring your ideas to life.</p>
                  </div>
                  {/* Feature 2 */}
                  <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                      <h3 className="text-xl font-semibold text-[#04668D]"> Expert Guidance from Start to Finish</h3>
                      <p className="text-gray-600 mt-2">From concept to completion, we handle everything. Our team ensures that every detail—from furniture selection to lighting and color palettes—is meticulously planned and executed with perfection.</p>
                  </div>
                  {/* Feature 3 */}
                  <div className="bg-white p-6 shadow-lg rounded-lg text-center">
                      <h3 className="text-xl font-semibold text-[#04668D]">Functionality Meets Beauty</h3>
                      <p className="text-gray-600 mt-2">Good design is more than just aesthetics—it’s about smart space planning. We ensure every inch of your space is optimized for comfort, productivity, and style.</p>
                  </div>
              </div>
          </section>
    </div>
  )
}
