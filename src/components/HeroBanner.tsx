import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=2000")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/85 to-transparent" />
      </div>

      {/* Decorative Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQuNjI3IDQuMzgzYTkuOTU0IDkuOTU0IDAgMCAxIDIuODMgNy4yN2MwIDUuNTIyLTQuNDc3IDEwLTEwIDEwYTkuOTU0IDkuOTU0IDAgMCAxLTcuMjctMi44M0w1NC42MjcgNC4zODN6bS00OS4yNTQgMGw0LjQ0MyA0LjQ0M2E5Ljk1NCA5Ljk1NCAwIDAgMS0yLjgzIDcuMjdjLTUuNTIzIDAtMTAtNC40NzgtMTAtMTBhOS45NTQgOS45NTQgMCAwIDEgNy4yNy0yLjgzek01NC42MjcgNTUuNjE3YTkuOTU0IDkuOTU0IDAgMCAxLTcuMjctMi44M2MwLTUuNTIyIDQuNDc3LTEwIDEwLTEwYTkuOTU0IDkuOTU0IDAgMCAxIDIuODMgNy4yN2wtNS41NiA1LjU2ek01LjM3MyA1NS42MTdhOS45NTQgOS45NTQgMCAwIDEtMi44My03LjI3YzAtNS41MjIgNC40NzctMTAgMTAtMTBhOS45NTQgOS45NTQgMCAwIDEgNy4yNyAyLjgzTDUuMzczIDU1LjYxN3oiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] bg-repeat" />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-lg font-medium">Welcome to GreenXchain</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Empowering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              Sustainable
            </span>{' '}
            Choices for a Greener World
          </h1>
          
          <p className="text-lg md:text-xl text-emerald-50/90 mb-12 leading-relaxed max-w-3xl">
            Join the global movement towards sustainability. Track, trade, and reduce carbon emissions with blockchain-powered solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/register')}
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-400 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/marketplace')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 backdrop-blur-sm transition-all transform hover:scale-105"
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-emerald-950 to-transparent" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-scroll" />
        </div>
        <span className="text-sm font-medium">Scroll to explore</span>
      </div>
    </div>
  );
}