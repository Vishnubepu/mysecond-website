import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Camera, Users, BookOpen, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: 'classroom' | 'activity' | 'field-visit' | 'workshop';
  description: string;
}

// Placeholder images - replace with your actual photos
const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/placeholder.svg',
    title: 'Smart Class Session',
    category: 'classroom',
    description: 'Interactive digital learning session with students',
  },
  {
    id: '2',
    src: '/placeholder.svg',
    title: 'Group Discussion',
    category: 'activity',
    description: 'Students engaged in collaborative learning',
  },
  {
    id: '3',
    src: '/placeholder.svg',
    title: 'Field Visit - Local Government',
    category: 'field-visit',
    description: 'Educational visit to understand governance',
  },
  {
    id: '4',
    src: '/placeholder.svg',
    title: 'Cyber Awareness Workshop',
    category: 'workshop',
    description: 'Teaching students about online safety',
  },
  {
    id: '5',
    src: '/placeholder.svg',
    title: 'Constitution Day Celebration',
    category: 'activity',
    description: 'Special assembly on fundamental rights',
  },
  {
    id: '6',
    src: '/placeholder.svg',
    title: 'Project Presentation',
    category: 'classroom',
    description: 'Students presenting their social science projects',
  },
  {
    id: '7',
    src: '/placeholder.svg',
    title: 'Museum Visit',
    category: 'field-visit',
    description: 'Learning history through real artifacts',
  },
  {
    id: '8',
    src: '/placeholder.svg',
    title: 'Digital Citizenship Workshop',
    category: 'workshop',
    description: 'Educating about responsible internet usage',
  },
];

const categories = [
  { id: 'all', label: 'All Photos', icon: Camera },
  { id: 'classroom', label: 'Classroom', icon: BookOpen },
  { id: 'activity', label: 'Activities', icon: Users },
  { id: 'field-visit', label: 'Field Visits', icon: MapPin },
  { id: 'workshop', label: 'Workshops', icon: Users },
];

const ClassGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Link to="/">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="gradient-text">Class Gallery</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                A glimpse into my teaching journey — classroom moments, student activities, 
                field visits, and workshops that make learning memorable.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'glass-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group cursor-pointer relative aspect-square rounded-xl overflow-hidden glass-card"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-medium text-sm">{image.title}</h3>
                      <p className="text-xs text-muted-foreground">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No photos in this category yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[80vh] mx-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain mx-auto rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-muted-foreground">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ClassGallery;
