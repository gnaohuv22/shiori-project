"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import CategoryCard from '@/components/CategoryCard';
import NavBar from '@/components/NavBar';
import BookmarkCloverImage from '@/components/BookmarkCloverImage';
import Tooltip from '@/components/Tooltip';
import ScrollProgress from '@/components/ScrollProgress';

// Import icons
import { 
  FaGamepad, 
  FaTrophy, 
  FaLaptopCode, 
  FaMicrophone, 
  FaLaughSquint 
} from 'react-icons/fa';

export default function Home() {
  // Add scroll reveal effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScrollAnimation = () => {
        const elements = document.querySelectorAll('.fadeIn');
        
        elements.forEach(element => {
          const position = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (position < screenPosition) {
            element.classList.add('visible');
          }
        });
      };
      
      window.addEventListener('scroll', handleScrollAnimation);
      handleScrollAnimation(); // Initial check
      
      return () => window.removeEventListener('scroll', handleScrollAnimation);
    }
  }, []);

  const categories = [
    {
      title: "Game",
      description: "LMHT, Tốc Chiến, PUBG... bất kỳ game gì mà tớ đủ tiền (và đam mê) để chơi.",
      icon: FaGamepad,
      color: "text-green-500",
    },
    {
      title: "Esports",
      description: "Theo dõi và ủng hộ các tuyển thủ thi đấu. Nói không với bế em! Ngu là chửi tất.",
      icon: FaTrophy,
      color: "text-yellow-500",
    },
    {
      title: "Công nghệ",
      description: "Cũng cũng ưa thích công nghệ, điện thoại, có thể ngồi xàm cả ngày về những thứ nhỏ nhặt như cách sensor nhận hình ảnh.",
      icon: FaLaptopCode,
      color: "text-blue-500",
    },
    {
      title: "Anh Trai Vượt Ngàn Chông Gai",
      description: "Các em đã sẵn sàng chưa?",
      icon: FaMicrophone,
      color: "text-purple-500",
    },
    {
      title: "Post nhảm nhí",
      description: "Đời người ai cũng có chút tâm sự, nhưng có thể đôi lúc tớ lười để làm điều đó.",
      icon: FaLaughSquint,
      color: "text-pink-500",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden">
      <ScrollProgress />
      <NavBar />
      
      {/* Make this div flex-grow to push footer to bottom */}
      <div className="flex-grow">
        {/* Your existing sections */}
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            {/* Increased from 8 to 20 clovers with larger sizes */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, 
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
                  opacity: 0.5,
                  scale: Math.random() * 0.5 + 0.8 // Increased base scale
                }}
                animate={{
                  x: [null, typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0],
                  y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0, typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0],
                }}
                transition={{
                  duration: Math.random() * 60 + 30, // Made some clovers faster
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <BookmarkCloverImage 
                  size={Math.floor(Math.random() * 36 + 18)} // Increased size range from 12-36 to 18-54
                  className="opacity-30" 
                />
              </motion.div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <BookmarkCloverImage size={80} className="mx-auto mb-6" animate={true} />
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">Shiori 祉栞 </span>
              </h1>
              
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
                Chào mừng bạn đến với cái web chả có gì để bấm của Shiori 祉栞, nơi tớ chả làm cái mẹ gì trừ việc nói phét về mọi thứ trên đời và tìm người có tên giống tên page ạ ^^
              </p>
              
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#chuyenmuc" 
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
                >
                  Khám phá
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <BookmarkCloverImage className="text-primary" size={24} />
          </motion.div>
        </section>
        
        {/* Categories Section */}
        <section id="chuyenmuc" className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">📌 Shiori 祉栞 làm blog làm gì?</span>
              </h2>
              <p className="max-w-2xl mx-auto opacity-80">
                Không có gì đặc biệt, tớ muốn nói những thứ không ai quan tâm, và viết những thứ muốn mọi người cùng đọc. Và tớ tìm người có tên ingame Tốc Chiến như tên page ạ.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  color={category.color}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="về tớ" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Về tớ</h2>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      className="relative w-48 h-48 mx-auto"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-lg opacity-70" />
                      <div className="absolute inset-2 rounded-full bg-background" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookmarkCloverImage size={80} />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="w-full md:w-2/3">
                    <p className="mb-4">
                      Ở đây không có chân lý, ở đây chỉ có dăm ba câu ca nhảm nhí được cất lên bất chợt.
                    </p>
                    <p className="mb-4">
                      Tớ muốn viết, nhưng quá lười để viết; muốn chia sẻ, nhưng không có ai cùng sở thích; muốn yêu và được yêu, cái đó có Anh trai Vượt Ngàn Chông Gai giúp rồi; muốn chơi game, cái đấy cũng chơi suốt rồi. Dù sao thì, cảm ơn cậu vì đã đến đây, trở thành một phần trong những niềm vui của tớ ạ.
                    </p>
                    <div className="mt-6 mb-6 border-l-2 border-primary pl-4">
                      <p className="text-sm italic text-foreground/80 font-light">
                        &quot;Eudaimonia de estin hē energeia tēs psychēs kat&apos; aretēn teleian.&quot;
                        <span className="block mt-1 text-right text-xs font-medium">— Aristotle</span>
                      </p>
                    </div>
                    
                    <div className="flex gap-4 mt-6">
                      <motion.a
                        href="https://www.facebook.com/shiori.eudaimonia"
                        className="px-4 py-2 border border-primary/30 rounded-full hover:bg-primary/20 transition-colors flex items-center justify-center min-w-[120px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Facebook
                      </motion.a>
                      {['Twitter', 'Instagram'].map(platform => (
                        <Tooltip key={platform} text="Không có đâu mà tìm">
                          <motion.span
                            className="px-4 py-2 border border-primary/30 rounded-full hover:bg-primary/20 transition-colors cursor-not-allowed opacity-75 flex items-center justify-center min-w-[120px]"
                            whileHover={{ scale: 1.05 }}
                          >
                            {platform}
                          </motion.span>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
      
      <footer className="bg-primary/10 py-8 w-full">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="flex justify-center"
          >
            <BookmarkCloverImage size={32} className="mb-4" />
          </motion.div>
          
          <p className="opacity-70 text-sm">
            © {new Date().getFullYear()} Shiori 祉栞. Mọi quyền được bảo lưu.
          </p>
        </div>
      </footer>
    </main>
  );
}
