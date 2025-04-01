import React, { useState, useRef } from "react";
import { ReactSketchCanvas, ReactSketchCanvasRef, CanvasPath } from "react-sketch-canvas";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState({
    name: "",
    text: "",
    drawing: "",
  });
  const [submittedTestimonials, setSubmittedTestimonials] = useState<
    Array<{ name: string; text: string; drawing: string }>
  >([]);

  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrawingChange = (updatedPaths: CanvasPath[]) => {
    const drawingData = JSON.stringify(updatedPaths);
    setTestimonial((prev) => ({ ...prev, drawing: drawingData }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (testimonial.name && testimonial.text) {
      setSubmittedTestimonials((prev) => [
        ...prev,
        { name: testimonial.name, text: testimonial.text, drawing: testimonial.drawing },
      ]);
      setTestimonial({ name: "", text: "", drawing: "" });

      if (canvasRef.current) {
        canvasRef.current.resetCanvas();
      }
    }
  };

  const clearScreen = () => {
    setSubmittedTestimonials([]);
    setTestimonial({ name: "", text: "", drawing: "" });

    if (canvasRef.current) {
      canvasRef.current.resetCanvas();
    }
  };

  const getRandomPosition = () => {
    const top = Math.random() * 80 + 10;
    const left = Math.random() * 80 + 10;
    return { top: `${top}%`, left: `${left}%` };
  };

  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-5xl font-bold text-center mb-12">Testimonials</h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 bg-black p-8 border-2 border-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6">Leave Your Testimonial</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={testimonial.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white text-white p-2 mt-2"
                required
              />
            </div>

            <div>
              <label htmlFor="text" className="block text-lg">Testimonial</label>
              <textarea
                id="text"
                name="text"
                value={testimonial.text}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-white text-white p-2 mt-2 h-32"
                required
              />
            </div>

            <div>
              <label htmlFor="drawing" className="block text-lg">Draw Your Testimonial</label>
              <ReactSketchCanvas
                ref={canvasRef}
                width="100%"
                height="400px"
                strokeColor="white"
                strokeWidth={3}
                onChange={handleDrawingChange}
              />
            </div>

            <div className="flex justify-between gap-4 mt-4">
              <button
                type="submit"
                className="w-2/3 bg-white text-black py-3 font-semibold rounded-lg"
              >
                Submit Testimonial
              </button>

              <button
                type="button"
                onClick={clearScreen}
                className="w-1/3 bg-gray-500 text-white py-3 font-semibold rounded-lg"
              >
                Clear Screen
              </button>
            </div>
          </form>
        </div>
        
        <div className="md:w-1/2 bg-black p-8 border-2 border-white rounded-lg shadow-lg relative">
          <h3 className="text-3xl font-semibold mb-6">Submitted Testimonials</h3>
          <div className="space-y-6 absolute w-full h-full">
            {submittedTestimonials.map((testimonial, index) => {
              const position = getRandomPosition();
              return (
                <div
                  key={index}
                  className="border-2 border-white p-4 rounded-lg bg-black text-white absolute"
                  style={{ top: position.top, left: position.left }}
                >
                  <p className="text-xl font-semibold">{testimonial.name}</p>
                  <p className="text-lg">{testimonial.text}</p>
                  {testimonial.drawing && (
                    <div className="mt-4">
                      <img
                        src={testimonial.drawing}
                        alt={`drawing-${index}`}
                        className="max-w-full"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
