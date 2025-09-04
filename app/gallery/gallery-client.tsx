'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Filter, Grid, List, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

interface GalleryCategory {
  id: string;
  name: string;
  count: number;
}

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-8 w-8" />
      </button>
      
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        aria-label="Previous image"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        aria-label="Next image"
        disabled={currentIndex === images.length - 1}
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="max-w-4xl max-h-[90vh] mx-4">
        <div className="relative">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={800}
            height={600}
            className="max-w-full max-h-[70vh] object-contain rounded-lg"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
            <h3 className="text-white text-xl font-semibold mb-2">{currentImage.title}</h3>
            <p className="text-gray-200">{currentImage.description}</p>
            <p className="text-gray-400 text-sm mt-2">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface GalleryClientProps {
  galleryCategories: GalleryCategory[];
  galleryImages: GalleryImage[];
}

export function GalleryClient({ galleryCategories, galleryImages }: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <>
      {/* Search and Filter Controls */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search photos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex rounded-lg border border-gray-300 overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              aria-label="Grid view"
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              aria-label="List view"
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
          {selectedCategory !== 'all' && ` in "${galleryCategories.find(cat => cat.id === selectedCategory)?.name}"`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Gallery Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex"
              onClick={() => openLightbox(index)}
            >
              <div className="relative w-48 h-32 overflow-hidden flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="192px"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-gray-600 mb-2">{image.description}</p>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                  {galleryCategories.find(cat => cat.id === image.category)?.name.split(' & ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {filteredImages.length === 0 && (
        <div className="text-center py-16">
          <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No photos found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or category filter.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}