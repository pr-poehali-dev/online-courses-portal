interface BoarMascotProps {
  variant?: 'default' | 'studying' | 'happy' | 'searching';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const BoarMascot = ({ variant = 'default', size = 'md', className = '' }: BoarMascotProps) => {
  const images = {
    default: 'https://cdn.poehali.dev/projects/99d23596-3284-4535-aa32-c811a8e7cbd7/files/2f07a9e7-5c2a-4024-beb0-3165a033f1f6.jpg',
    studying: 'https://cdn.poehali.dev/projects/99d23596-3284-4535-aa32-c811a8e7cbd7/files/d1a0616d-6bd4-453d-8721-1145a38b0b73.jpg',
    happy: 'https://cdn.poehali.dev/projects/99d23596-3284-4535-aa32-c811a8e7cbd7/files/2f07a9e7-5c2a-4024-beb0-3165a033f1f6.jpg',
    searching: 'https://cdn.poehali.dev/projects/99d23596-3284-4535-aa32-c811a8e7cbd7/files/2f07a9e7-5c2a-4024-beb0-3165a033f1f6.jpg',
  };

  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
  };

  return (
    <img
      src={images[variant]}
      alt="Кабан-талисман KabanovCurses"
      className={`rounded-full object-cover ${sizes[size]} ${className}`}
    />
  );
};

export default BoarMascot;
