import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A1A',
        slate: '#333333',
        paper: '#F5F5F5',
        gold: '#FFD700',
        amber: '#FF8C00'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255, 215, 0, 0.18), 0 20px 60px rgba(0, 0, 0, 0.32)'
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'road-glow':
          'radial-gradient(circle at top left, rgba(255,215,0,0.24), transparent 28%), radial-gradient(circle at top right, rgba(255,140,0,0.18), transparent 25%), linear-gradient(180deg, rgba(26,26,26,0.96), rgba(17,17,17,0.98))'
      }
    }
  },
  plugins: []
};

export default config;
