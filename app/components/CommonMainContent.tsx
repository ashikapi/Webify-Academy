import React from 'react';

interface CommonMainContentProps {
  text: string;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  hoverEffect?: 'rotate' | 'scale' | 'tilt' | 'glow' | 'zoom' | 'flip' | 'morph';
}

const CommonMainContent: React.FC<CommonMainContentProps> = ({ 
  text, 
  imageUrl, 
  imageAlt = "Content image",
  imagePosition = 'right',
  hoverEffect = 'rotate'
}) => {
  
  const getHoverEffectClass = () => {
    const baseClasses = 'transform-gpu transition-all duration-500 ease-in-out cursor-pointer';
    
    switch (hoverEffect) {
      case 'rotate':
        return `${baseClasses} hover:rotate-3 hover:scale-105 hover:shadow-xl`;
      case 'scale':
        return `${baseClasses} hover:scale-105 hover:shadow-2xl`;
      case 'tilt':
        return `${baseClasses} hover:rotate-2 hover:scale-105 hover:skew-x-1 hover:shadow-xl`;
      case 'glow':
        return `${baseClasses} hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30`;
      case 'zoom':
        return `${baseClasses} hover:scale-110 duration-700 ease-out`;
      case 'flip':
        return `${baseClasses} hover:scale-105 hover:rotate-y-12 perspective-1000`;
      case 'morph':
        return `${baseClasses} hover:scale-105 hover:rounded-2xl hover:shadow-xl`;
      default:
        return `${baseClasses} hover:rotate-3 hover:scale-105`;
    }
  };

  const getTextHoverEffect = () => {
    return 'transition-all duration-500 hover:text-gray-900 hover:translate-x-3 hover:scale-105';
  };

  const getContainerEffect = () => {
    return hoverEffect === 'flip' ? 'transform-style-preserve-3d' : '';
  };

  return (
    <div className='bg-gray-100'>
      <div className='pt-16 pb-16'>
        <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center max-w-7xl mx-auto gap-8 lg:gap-12`}>
          
          {/* Text Content Section */}
          <div className='flex-1 px-8 lg:px-0'>
            <p className={`lg:p-8 md:p-6 p-4 md:text-xl font-jost text-lg text-gray-700 font-semibold leading-relaxed ${getTextHoverEffect()}`}>
              {text}
            </p>
          </div>

          {/* Image Section */}
          {imageUrl && (
            <div className='flex-1 px-8 lg:px-0'>
              <div className='flex justify-center'>
                <div className={`relative group ${getHoverEffectClass()} ${getContainerEffect()}`}>
                  {/* Main Image Container */}
                  <div className='relative overflow-hidden rounded-lg shadow-lg border-4 border-white'>
                    <img 
                      src={imageUrl} 
                      alt={imageAlt}
                      className='max-w-full h-auto object-cover max-h-96 w-full transition-transform duration-500 group-hover:scale-110'
                    />
                    
                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                    
                    {/* Shine Effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
                  </div>
                  
                  {/* Floating Border Effect */}
                  <div className='absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/50 transition-all duration-500 -m-2'></div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default CommonMainContent;