import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { gsap } from 'gsap';

const Projects = () => {
   const [activeFilter, setActiveFilter] = useState('*');

   const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
   const [showModal, setShowModal] = useState(false);
 
   const portfolioItems = [
     { 
       id: 1, 
       category: 'Game', 
       title: 'Game 1', 
       desc: 'An exciting game featuring action-packed levels and stunning graphics.',
       imgSrc: 'portfolio-1.jpg',
       clipImages: ['portfolio-1.jpg', 'portfolio-2.jpg', 'portfolio-3.jpg'],
     },
     { 
       id: 2, 
       category: 'Web', 
       title: 'Web 1', 
       desc: 'A modern web design with responsive layout and interactive elements.',
       imgSrc: 'portfolio-2.jpg',
       clipImages: ['portfolio-4.jpg', 'portfolio-5.jpg', 'portfolio-6.jpg'],
     },
     { 
       id: 3, 
       category: 'Game', 
       title: 'Game 2', 
       desc: 'A fun platformer game with unique characters and mechanics.',
       imgSrc: 'portfolio-3.jpg',
       clipImages: ['portfolio-7.jpg', 'portfolio-8.jpg', 'portfolio-9.jpg'],
     },
     { 
       id: 4, 
       category: 'Web', 
       title: 'Web 2', 
       desc: 'An e-commerce site with powerful features and sleek design.',
       imgSrc: 'portfolio-4.jpg',
       clipImages: ['portfolio-10.jpg', 'portfolio-11.jpg', 'portfolio-12.jpg'],
     },
     { 
       id: 5, 
       category: 'Game', 
       title: 'Game 3', 
       desc: 'A fantasy RPG game with immersive story and gameplay.',
       imgSrc: 'portfolio-5.jpg',
       clipImages: ['portfolio-13.jpg', 'portfolio-14.jpg', 'portfolio-15.jpg'],
     },
   ];

   const filteredItems = activeFilter === '*' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
 
   useEffect(() => {
     gsap.from('.portfolio-item', { opacity: 0, y: 50, duration: 0.5, stagger: 0.2 });
   }, [activeFilter]);
 
   const handleOpenModal = (index) => {
     setSelectedProjectIndex(index);
     setShowModal(true);
   };
 
   const handleCloseModal = () => {
     setSelectedProjectIndex(null);
     setShowModal(false);
   };
 
   const handleNextProject = () => {
     setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
   };

   const handlePreviousProject = () => {
     setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
   };
 
   return (
     <section className="py-16 bg-gray-800 text-white">
       <div className="text-center mb-12">
         <h2 className="text-4xl font-bold">Portfolio</h2>
         <p className="mt-4 text-gray-300">Check out some of our work in Game and Web Development</p>
       </div>
 
       {/* Filter Buttons */}
       <div className="flex justify-center space-x-4 mb-8">
         <button
           className={`px-4 py-2 rounded-md ${activeFilter === '*' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-indigo-500 transition`}
           onClick={() => setActiveFilter('*')}
         >
           All
         </button>
         <button
           className={`px-4 py-2 rounded-md ${activeFilter === 'Game' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-indigo-500 transition`}
           onClick={() => setActiveFilter('Game')}
         >
           Game
         </button>
         <button
           className={`px-4 py-2 rounded-md ${activeFilter === 'Web' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-indigo-500 transition`}
           onClick={() => setActiveFilter('Web')}
         >
           Web
         </button>
       </div>
 
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredItems.map((item, index) => (
             <Draggable key={item.id}>
               <div
                 className="portfolio-item relative bg-gray-700 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 cursor-pointer"
                 onClick={() => handleOpenModal(index)}
               >
                 <img src={`assets/img/portfolio/${item.imgSrc}`} className="w-full h-56 object-cover" alt={item.title} />
                 <div className="px-4 py-2">
                   <p className="text-center font-semibold">{item.title}</p>
                 </div>
               </div>
             </Draggable>
           ))}
         </div>
       </div>
       {showModal && filteredItems[selectedProjectIndex] && (
         <div
           className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50"
           onClick={handleCloseModal} // Close modal when clicking outside
         >
           <div
             className="bg-gray-800 rounded-lg overflow-hidden max-w-3xl mx-auto relative shadow-2xl text-white"
             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
           >
             <button
               className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
               onClick={handleCloseModal}
             >
               <i className="bx bx-x text-3xl"></i>
             </button>
 
             <button
               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-3"
               onClick={handlePreviousProject}
             >
               <i className="bx bx-chevron-left text-2xl"></i>
             </button>
             <button
               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-3"
               onClick={handleNextProject}
             >
               <i className="bx bx-chevron-right text-2xl"></i>
             </button>
 
             <div className="p-8">
               <h3 className="text-2xl font-bold mb-4">{filteredItems[selectedProjectIndex].title}</h3>
               <p className="text-gray-300 mb-8">{filteredItems[selectedProjectIndex].desc}</p>
 
               <div className="mb-8">
                 <img
                   src={`assets/img/portfolio/${filteredItems[selectedProjectIndex].imgSrc}`}
                   className="w-full h-48 object-cover rounded-md"
                   alt={filteredItems[selectedProjectIndex].title}
                 />
               </div>
 
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {filteredItems[selectedProjectIndex].clipImages.map((clip, index) => (
                   <img
                     key={index}
                     src={`assets/img/portfolio/${clip}`}
                     className="w-full h-32 object-cover rounded-md"
                     alt={`${filteredItems[selectedProjectIndex].title} clip ${index + 1}`}
                   />
                 ))}
               </div>
             </div>
           </div>
         </div>
       )}
     </section>
   );
}

export default Projects




