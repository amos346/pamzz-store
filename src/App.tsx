/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Award, 
  ArrowRight, 
  Search,
  ExternalLink,
  Star,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const WHATSAPP_NUMBER = '2348123459436';
  const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/qxsEczVUwGrRrsFg9';

  const openWhatsApp = (customMessage?: string) => {
    const text = customMessage || "Hello Pamzz Gold Store, I'm interested in your authentic gold jewelry collection. Please share more details and current availability.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const products = [
    {
      id: 1,
      name: '18k Heavy Gold Chain (22")',
      category: 'Gold Chains',
      price: '₦250,000',
      description: '18k premium gold chain link, approx 37.15 grams. Verified luxury craftsmanship.',
      image: '/images/WhatsApp_Image_2026-11-22_at_1.11.58_AM_e6b0ab4b.jpeg'
    },
    {
      id: 2,
      name: 'Classic 24" Gold Chain',
      category: 'Gold Chains',
      price: '₦180,000',
      description: 'Sleek 24-inch polished gold chain offering timeless brilliance and durability.',
      image: '/images/WhatsApp_Image_2026-11-22_at_1.11.44_AM_a4a83b13.jpeg'
    },
    {
      id: 3,
      name: 'Weighed Pure Gold Chain',
      category: 'Gold Chains',
      price: '₦150,000',
      description: 'Precision weighed 11.6g pure gold chain with certified electronic scale verification.',
      image: '/images/WhatsApp_Image_2026-11-22_at_1.11.38_AM_90a0deab.jpeg'
    },
    {
      id: 4,
      name: 'Multi-Tone Gold Bracelet',
      category: 'Gold Bracelets',
      price: '₦120,000',
      description: 'Exquisite multicolored gold beaded bracelet (6.16g) featuring yellow, rose, and white gold tones.',
      image: '/images/WhatsApp_Image_2026-11-22_at_1.11.32_AM_d4a43f4c.jpeg'
    },
    {
      id: 5,
      name: 'Golden Heart Pendant & Earrings Set',
      category: 'Luxury Jewelry Sets',
      price: '₦195,000',
      description: 'Stunning polished golden heart pendant necklace matched with gorgeous chunky heart earrings.',
      image: '/images/WhatsApp_Image_2026-11-22_at_1.11.18_AM_6249a7e1.jpeg'
    },
    {
      id: 6,
      name: '"My King & My Queen" Couple Necklaces',
      category: 'Pendant Necklaces',
      price: '₦140,000',
      description: 'Matching split heart gold couple necklaces engraved with "My King" and "My Queen".',
      image: '/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM__3__21ff4de4.jpeg'
    },
    {
      id: 7,
      name: 'Celestial Star Couple Pendants',
      category: 'Pendant Necklaces',
      price: '₦115,000',
      description: 'Sun, moon and star celestial matching pendant set with delicate chain links.',
      image: '/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM__2__f55ac533.jpeg'
    },
    {
      id: 8,
      name: 'Luxury Gold Wedding Band & Diamond Set',
      category: 'Gold Rings',
      price: '₦350,000',
      description: 'Brushed gold textured band paired with a stunning multi-stone diamond heart cluster ring set.',
      image: '/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM__1__8219b76a.jpeg'
    }
  ];

  const categories = [
    'All',
    'Gold Chains',
    'Gold Bracelets',
    'Gold Rings',
    'Pendant Necklaces',
    'Luxury Jewelry Sets'
  ];

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const faqs = [
    {
      q: 'Where is Pamzz Gold Store located?',
      a: 'We are based in Kubwa, Abuja, Nigeria. You can visit us or contact us directly on WhatsApp for directions and personal styling assistance.'
    },
    {
      q: 'How can I order jewelry?',
      a: 'Simply explore our collection and click any WhatsApp Order button. This opens a direct chat with our team with your product pre-filled for immediate assistance.'
    },
    {
      q: 'Can I confirm the price before ordering?',
      a: 'Yes. Contact us directly on WhatsApp for current prices, exact weight specifications, and availability.'
    },
    {
      q: 'Do you have different jewelry designs?',
      a: 'Yes, we carry a wide range of authentic gold chains, couple sets, rings, and statement pieces. Contact us to discover our full WhatsApp catalogue.'
    },
    {
      q: 'How can I confirm product details?',
      a: 'Send us a WhatsApp message to ask about the design, length, material purity, weight, and any other available product specifications.'
    }
  ];

  const testimonials = [
    {
      name: 'Amina Bello',
      location: 'Abuja, Nigeria',
      comment: 'Pamzz Gold Store has the most stunning real gold pieces in Kubwa! The scale verification and quality are immaculate.',
      rating: 5
    },
    {
      name: 'Chinedu Okafor',
      location: 'Lagos, Nigeria',
      comment: 'Ordered the couple heart necklaces and a gold chain. Delivery and customer service on WhatsApp was exceptionally fast and trustworthy.',
      rating: 5
    },
    {
      name: 'Fatima Al-Hassan',
      location: 'Abuja, Nigeria',
      comment: 'Authentic 18k and purity guaranteed. Pamzz is my go-to store for all fine gold accessories in Kubwa.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#171512] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#D4AF72] selection:text-white">
      
      {/* STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#E9DFD0] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col whitespace-nowrap shrink-0">
            <span className="font-serif text-2xl font-bold tracking-wider text-[#171512]">PAMZZ GOLD</span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF72] font-semibold">Store · Kubwa, Abuja</span>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#171512]/80">
            <a href="#home" className="hover:text-[#D4AF72] transition-colors whitespace-nowrap shrink-0">Home</a>
            <a href="#about" className="hover:text-[#D4AF72] transition-colors whitespace-nowrap shrink-0">About</a>
            <a href="#collection" className="hover:text-[#D4AF72] transition-colors whitespace-nowrap shrink-0">Collections</a>
            <a href="#why-us" className="hover:text-[#D4AF72] transition-colors whitespace-nowrap shrink-0">Why Choose Us</a>
            <a href="#gallery" className="hover:text-[#D4AF72] transition-colors whitespace-nowrap shrink-0">Gallery</a>
            <a href="#faq" className="hover:text-[#D4AF72] transition-colors whitespace-nowrap shrink-0">FAQ</a>
            <a href="#contact" className="hover:text-[#D4AF72] transition-colors whitespace-nowrap shrink-0">Contact</a>
          </nav>

          {/* Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button 
              onClick={() => openWhatsApp("Hello Pamzz Gold Store, I would like to inquire about your authentic gold inventory.")}
              className="px-5 py-2.5 bg-[#171512] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#D4AF72] hover:text-[#171512] transition-all duration-300 shadow-sm whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF72]" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#171512] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-[#FAF7F0] border-b border-[#E9DFD0] px-6 py-6 shadow-xl flex flex-col gap-4 animate-fadeIn">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#E9DFD0]/40">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#E9DFD0]/40">About</a>
            <a href="#collection" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#E9DFD0]/40">Collections</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#E9DFD0]/40">Why Choose Us</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#E9DFD0]/40">Gallery</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-[#E9DFD0]/40">FAQ</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2">Contact</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); openWhatsApp(); }}
              className="w-full py-3 mt-2 bg-[#171512] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider rounded-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF72]" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO / HOMEPAGE */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Full background image using public/images/ path */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/WhatsApp_Image_2026-11-22_at_1.11.58_AM_e6b0ab4b.jpeg" 
            alt="Pamzz Gold Store Featured Chain" 
            className="w-full h-full object-cover object-center scale-105 filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171512]/95 via-[#171512]/70 to-[#171512]/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center text-white flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF72]/20 border border-[#D4AF72]/40 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF72]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF72]">THE ART OF TIMELESS ELEGANCE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-balance">
            Wear Your Worth. <br />
            <span className="text-[#D4AF72] italic font-normal">Shine Without Limits.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#E9DFD0] max-w-2xl mb-10 leading-relaxed font-light">
            Discover exquisite 18k and pure gold jewelry designed to make every moment special. Proudly serving Kubwa, Abuja with verified craftsmanship and timeless luxury pieces.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#collection"
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF72] text-[#171512] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-[#171512] transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
            >
              <span>Explore Our Collection</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => openWhatsApp("Hello Pamzz Gold Store, I would like to shop with you and view available gold inventory.")}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#FAF7F0]/80 text-[#FAF7F0] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-[#171512] hover:border-white transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF72]" />
              <span>Shop With Us</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-80 animate-bounce">
            <span className="text-[10px] tracking-widest uppercase text-[#FAF7F0]">Scroll</span>
            <ChevronDown className="w-4 h-4 text-[#D4AF72]" />
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT PAMZZ GOLD STORE */}
      <section id="about" className="py-24 bg-[#FAF7F0] border-b border-[#E9DFD0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF72] block mb-3">Our Heritage & Promise</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#171512]">
              More Than Jewelry. <br />
              <span className="italic font-normal text-[#D4AF72]">A Statement of Elegance.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Side using public/images/ path */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E9DFD0] bg-white">
                <img 
                  src="/images/WhatsApp_Image_2026-11-22_at_1.11.38_AM_90a0deab.jpeg" 
                  alt="Pamzz Gold Store Purity & Weight Verification" 
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#171512] text-[#FAF7F0] p-6 rounded-2xl shadow-xl hidden sm:block border border-[#D4AF72]/30 max-w-xs">
                <p className="font-serif italic text-lg text-[#D4AF72] mb-1">"Verified Purity"</p>
                <p className="text-xs text-[#E9DFD0]">Accurate weight verification and trusted quality in Kubwa, Abuja.</p>
              </div>
            </div>

            {/* Storytelling Side */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <p className="text-base text-[#171512]/80 leading-relaxed font-light">
                At Pamzz Gold Store, we take pride in offering genuine, high-purity gold jewelry. Located in the bustling heart of Kubwa, Abuja, our store is built on a foundation of absolute trust, transparent weight verification, and timeless beauty.
              </p>
              <p className="text-base text-[#171512]/80 leading-relaxed font-light">
                Whether you are seeking robust 18k gold chains, multicolored bracelets, or bespoke couple necklaces, every piece in our collection is carefully inspected to meet the highest standards of Nigerian luxury fashion.
              </p>
              <p className="text-base text-[#171512]/80 leading-relaxed font-light">
                We make luxury accessible and straightforward, welcoming you to confirm specifications directly on WhatsApp and guiding you to your perfect jewelry piece.
              </p>

              {/* 3 Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-white rounded-xl border border-[#E9DFD0] shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] flex items-center justify-center text-[#D4AF72] mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Genuine Purity</h4>
                  <p className="text-xs text-[#171512]/70">Verified 18k & pure gold standards.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E9DFD0] shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] flex items-center justify-center text-[#D4AF72] mb-3">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Customer Care</h4>
                  <p className="text-xs text-[#171512]/70">Personalized WhatsApp shopping support.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E9DFD0] shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] flex items-center justify-center text-[#D4AF72] mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Trusted Value</h4>
                  <p className="text-xs text-[#171512]/70">Fair market pricing in Abuja.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPLORE OUR COLLECTION */}
      <section id="collection" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF72] block mb-3">Curated Catalogue</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#171512]">Discover Your Perfect Shine.</h2>
            </div>
            
            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#171512]/40" />
              <input 
                type="text" 
                placeholder="Search inventory..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F0] border border-[#E9DFD0] rounded-full text-xs focus:outline-none focus:border-[#D4AF72]"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category 
                    ? 'bg-[#171512] text-[#FAF7F0] shadow-sm' 
                    : 'bg-[#FAF7F0] text-[#171512]/70 hover:bg-[#E9DFD0]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Notice on Prices */}
          <div className="mb-8 p-4 bg-[#FAF7F0] border border-[#E9DFD0] rounded-xl flex items-center justify-between text-xs text-[#171512]/70">
            <span>* Illustrative sample prices based on actual store inventory. Please confirm current weight and price on WhatsApp.</span>
            <button onClick={() => openWhatsApp()} className="font-semibold text-[#171512] underline hover:text-[#D4AF72]">
              Chat on WhatsApp
            </button>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-[#FAF7F0] rounded-2xl border border-[#E9DFD0]">
              <p className="text-base text-[#171512]/60 mb-4">No jewelry pieces found matching your search.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-6 py-2.5 bg-[#171512] text-[#FAF7F0] text-xs font-semibold rounded-full"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="group bg-[#FAF7F0] rounded-2xl border border-[#E9DFD0] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Image container with zoom */}
                    <div className="relative h-64 overflow-hidden bg-white">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 right-3 px-3 py-1 bg-[#171512]/80 backdrop-blur-md text-[#FAF7F0] text-[10px] uppercase tracking-wider rounded-full font-medium">
                        {product.category}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-bold text-[#171512] mb-1">{product.name}</h3>
                      <p className="text-xs text-[#171512]/70 line-clamp-2 mb-4 font-light">{product.description}</p>
                      <div className="text-base font-bold text-[#D4AF72]">{product.price}</div>
                    </div>
                  </div>

                  {/* WhatsApp Order Button */}
                  <div className="p-5 pt-0">
                    <button 
                      onClick={() => openWhatsApp(`Hello Pamzz Gold Store, I'm interested in your ${product.name} (${product.price}). Please can you share more details and current availability?`)}
                      className="w-full py-3 bg-[#171512] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#D4AF72] hover:text-[#171512] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#D4AF72] group-hover:text-[#171512]" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: WHY SHOP WITH PAMZZ GOLD STORE? */}
      <section id="why-us" className="py-24 bg-[#FAF7F0] border-t border-b border-[#E9DFD0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF72] block mb-3">Confidence & Trust</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#171512]">The Beauty of Shopping With Confidence.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E9DFD0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] flex items-center justify-center text-[#D4AF72] mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#171512] mb-3">Verified Purity</h3>
              <p className="text-xs sm:text-sm text-[#171512]/70 leading-relaxed font-light">
                Precise scale weights and guaranteed 18k / pure gold standards you can trust without compromise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E9DFD0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] flex items-center justify-center text-[#D4AF72] mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#171512] mb-3">Customer-Focused Service</h3>
              <p className="text-xs sm:text-sm text-[#171512]/70 leading-relaxed font-light">
                We help customers understand available designs and make confident shopping decisions for any occasion.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E9DFD0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] flex items-center justify-center text-[#D4AF72] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#171512] mb-3">Affordable Options</h3>
              <p className="text-xs sm:text-sm text-[#171512]/70 leading-relaxed font-light">
                Discover beautiful jewelry options across different budgets designed to bring luxury within your reach.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E9DFD0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] flex items-center justify-center text-[#D4AF72] mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#171512] mb-3">Easy Ordering</h3>
              <p className="text-xs sm:text-sm text-[#171512]/70 leading-relaxed font-light">
                Contact us directly on WhatsApp to ask questions, confirm prices, and place orders with ultimate ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED JEWELRY / LUXURY SHOWCASE */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF72] block mb-3">Editorial Showcase</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#171512]">Made to Catch Every Eye.</h2>
          </div>

          {/* Asymmetrical Editorial Grid using public/images/ paths */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
            <div className="md:col-span-8 relative rounded-2xl overflow-hidden h-[400px] group shadow-xl bg-white">
              <img 
                src="/images/WhatsApp_Image_2026-11-22_at_1.11.27_AM_87a98217.jpeg" 
                alt="Multi-tone bracelet showcase" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D4AF72] font-semibold mb-1">Multicolored Craftsmanship</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">Multi-Tone Gold Bracelets</h3>
              </div>
            </div>

            <div className="md:col-span-4 relative rounded-2xl overflow-hidden h-[400px] group shadow-xl bg-white">
              <img 
                src="/images/WhatsApp_Image_2026-11-22_at_1.11.14_AM_8c22929b.jpeg" 
                alt="Heart set box view" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D4AF72] font-semibold mb-1">Gift Collections</span>
                <h3 className="font-serif text-xl font-bold">Golden Heart Sets</h3>
              </div>
            </div>

            <div className="md:col-span-4 relative rounded-2xl overflow-hidden h-[350px] group shadow-xl bg-white">
              <img 
                src="/images/WhatsApp_Image_2026-11-20_at_5.37.30_PM__4__d7130b20.jpeg" 
                alt="Couple necklaces" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D4AF72] font-semibold mb-1">Interlocking Rings</span>
                <h3 className="font-serif text-xl font-bold">Couple Pendants</h3>
              </div>
            </div>

            <div className="md:col-span-8 relative rounded-2xl overflow-hidden h-[350px] group shadow-xl bg-white">
              <img 
                src="/images/WhatsApp_Image_2026-11-22_at_1.11.23_AM_b8a1fc8f.jpeg" 
                alt="Scale view bracelet" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D4AF72] font-semibold mb-1">Verified Weight</span>
                <h3 className="font-serif text-2xl font-bold">Precision Gold Finishing</h3>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="p-10 sm:p-14 bg-[#171512] rounded-3xl text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D4AF72]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#D4AF72]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="font-serif text-2xl sm:text-4xl font-bold italic mb-6 text-[#FAF7F0]">
              "Every Detail Matters. Every Piece Tells a Story."
            </h3>
            
            <button 
              onClick={() => openWhatsApp("Hello Pamzz Gold Store, I'm ready to find my perfect jewelry piece from your WhatsApp collection!")}
              className="px-8 py-4 bg-[#D4AF72] text-[#171512] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-[#171512] transition-all duration-300 shadow-lg flex items-center gap-3"
            >
              <span>Find Your Perfect Piece</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6: CUSTOMER EXPERIENCE AND FAQ */}
      <section id="faq" className="py-24 bg-[#FAF7F0] border-t border-b border-[#E9DFD0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF72] block mb-3">Assistance & Insights</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#171512]">Your Shopping Experience Matters.</h2>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E9DFD0] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF72] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#171512]/80 leading-relaxed font-light mb-6 italic">
                    "{t.comment}"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-[#E9DFD0]/60 pt-4">
                  <div>
                    <h4 className="font-semibold text-sm">{t.name}</h4>
                    <p className="text-[11px] text-[#171512]/60">{t.location}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF72]" />
                </div>
              </div>
            ))}
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E9DFD0] p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
            
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-[#E9DFD0] rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left font-semibold text-sm sm:text-base flex items-center justify-between gap-4 bg-[#FAF7F0]/50 hover:bg-[#FAF7F0] transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#D4AF72] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#171512]/50 shrink-0" />}
                    </button>

                    {isOpen && (
                      <div className="p-5 bg-white text-xs sm:text-sm text-[#171512]/70 leading-relaxed font-light border-t border-[#E9DFD0]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: CONTACT, LOCATION AND FOOTER */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAF7F0] border border-[#E9DFD0] rounded-3xl p-8 sm:p-14 shadow-xl">
            
            {/* Left info */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF72]">Get In Touch</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#171512]">
                Your Next Favourite Piece Is Waiting.
              </h2>
              <p className="text-base text-[#171512]/80 leading-relaxed font-light">
                Ready to add something beautiful to your collection? Let's help you find the perfect jewelry piece. Reach out to us directly on WhatsApp or visit our location in Abuja.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => openWhatsApp("Hello Pamzz Gold Store, I would like to make an inquiry and place an order.")}
                  className="px-8 py-4 bg-[#171512] text-[#FAF7F0] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#D4AF72] hover:text-[#171512] transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF72]" />
                  <span>Chat on WhatsApp (+234 812 345 9436)</span>
                </button>
              </div>
            </div>

            {/* Right location card */}
            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#E9DFD0] shadow-sm flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold">Store Location & Details</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] flex items-center justify-center text-[#D4AF72] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Address</h4>
                  <p className="text-xs text-[#171512]/70 leading-relaxed">
                    Kubwa, Abuja, Federal Capital Territory, Nigeria.
                  </p>
                  <a 
                    href={GOOGLE_MAPS_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF72] hover:underline mt-2"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] flex items-center justify-center text-[#D4AF72] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Direct Contact</h4>
                  <p className="text-xs text-[#171512]/70">
                    WhatsApp / Call: +234 812 345 9436
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Footer */}
          <footer className="mt-20 pt-10 border-t border-[#E9DFD0] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#171512]/60">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="font-serif text-lg font-bold text-[#171512]">PAMZZ GOLD STORE</span>
              <p className="text-center md:text-left">Exquisite gold jewelry, elegance, and trusted customer service in Kubwa, Abuja.</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="#home" className="hover:text-[#D4AF72] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#D4AF72] transition-colors">About</a>
              <a href="#collection" className="hover:text-[#D4AF72] transition-colors">Collections</a>
              <a href="#faq" className="hover:text-[#D4AF72] transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-[#D4AF72] transition-colors">Contact</a>
            </div>

            <div>
              <p>© 2026 Pamzz Gold Store. All Rights Reserved.</p>
            </div>
          </footer>

        </div>
      </section>

      {/* FLOATING WHATSAPP WIDGET */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
        {/* Tooltip */}
        <div className="hidden sm:block px-4 py-2 bg-white text-[#171512] text-xs font-semibold rounded-2xl shadow-xl border border-[#E9DFD0] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us
        </div>

        <button
          onClick={() => openWhatsApp("Hello Pamzz Gold Store, I am visiting your website and would like to chat about your gold jewelry inventory.")}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-float"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </button>
      </div>

    </div>
  );
}
