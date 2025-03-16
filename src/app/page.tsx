"use client";

import React, { useEffect, useState } from 'react';
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
  // State để lưu trữ các clover được tạo bởi người dùng
  const [userClovers, setUserClovers] = useState<Array<{ id: number, x: number, y: number, size: number }>>([]);
  // State để kiểm tra xem bí mật đã được tìm thấy chưa
  const [secretFound, setSecretFound] = useState(false);

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

  // Xử lý sự kiện click để tạo clover mới
  const handleHeroClick = (e: React.MouseEvent<HTMLElement>) => {
    // Lấy vị trí click tương đối với section hero
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Tạo clover mới với kích thước ngẫu nhiên
    const newClover = {
      id: Date.now(),
      x,
      y,
      size: Math.floor(Math.random() * 36 + 18)
    };

    // Thêm clover mới vào danh sách, giới hạn tối đa 100 cái
    setUserClovers(prevClovers => {
      const updatedClovers = [newClover, ...prevClovers];
      return updatedClovers.slice(0, 100);
    });
  };

  // Xử lý khi tìm thấy bí mật
  const handleSecretFound = () => {
    setSecretFound(true);

    // Ẩn thông báo sau 5 giây
    setTimeout(() => {
      setSecretFound(false);
    }, 5000);
  };

  const categories = [
    {
      title: "Game",
      description: "LoL, Tốc Chiến, PUBG... bất kỳ game gì mà mình đủ tiền (và đam mê) để chơi.",
      icon: FaGamepad,
      color: "text-green-500",
    },
    {
      title: "Esports",
      description: "Theo dõi và ủng hộ các tuyển thủ thi đấu ở các thể loại bộ môn (LoL, PUBG...). Mình là fan T1 Faker, ngoài ra, mình cũng ủng hộ các đội tuyển Việt Nam ra thế giới nha.",
      icon: FaTrophy,
      color: "text-yellow-500",
    },
    {
      title: "Công nghệ",
      description: "Thích nói chuyện về công nghệ lắm, nói gì cũng được, nói cả ngày cả đêm cũng chim ưng hết á.",
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
      description: "Đời người ai cũng có chút tâm sự cả, mình cũng muốn chia sẻ nhiều chút á.",
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
        <section
          id="hero"
          className="min-h-screen flex items-center relative overflow-hidden"
          onClick={handleHeroClick}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            {/* Existing random clovers */}
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

            {/* User-created clovers */}
            {userClovers.map((clover) => (
              <motion.div
                key={clover.id}
                className="absolute"
                initial={{
                  x: clover.x,
                  y: clover.y,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  opacity: 0.7,
                  scale: 1
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                style={{
                  left: 0,
                  top: 0,
                  transform: `translate(${clover.x}px, ${clover.y}px)`
                }}
              >
                <BookmarkCloverImage
                  size={clover.size}
                  className="opacity-70"
                  animate={true}
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
                Chào mừng bạn đến với web giới thiệu của Shiori 祉栞, ngoài việc nói xàm về những thứ ở dưới, tớ tìm một bạn có ingame Wildrift như tên page ạ ^^
              </p>

              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://www.facebook.com/shiori.eudaimonia"
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
                >
                  Tớ ở đây nè
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
        <section id="có gì trên page" className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">📌 Lý do Shiori 祉栞 tồn tại</span>
              </h2>
              <p className="max-w-2xl mx-auto opacity-80">
                Chẳng có lý do gì to tát đâu. Mình ở đây để nói về những thứ mình thích, có thể bạn không thích lắm, nhưng kệ mẹ bạn. Mình viết những gì thật sự nghĩ, thế thôi.
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
                      Ở đây không có chân lý, chỉ có mấy câu nhảm nhí được phát ra.
                    </p>
                    <p className="mb-4">
                      Mình muốn viết, nhưng lười quá. Muốn chia sẻ, nhưng chẳng mấy ai chung gu. Muốn yêu và được yêu; cái đó đã có Anh Trai Vượt Ngàn Chông Gai lo hộ, nhưng mình vẫn muốn yêu một ai đó nhóe. Muốn chơi game... ờ thì, chơi suốt rồi còn gì. Dù sao cũng cảm ơn bạn đã ghé qua, góp một phần vào cái đống vui vẻ lộn xộn này của mình.
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
                      {['X', 'Instagram'].map(platform => (
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

      {/* Footer with hidden secret */}
      <footer className="bg-primary/10 py-6 relative">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Shiori 祉栞. All rights reserved.
          </p>

          {/* Bí mật ẩn - một clover nhỏ ở góc dưới bên phải */}
          <div
            className="absolute bottom-2 right-2 opacity-10 hover:opacity-20 transition-opacity"
            style={
              { width: 25, height: 25}
            }
            onClick={handleSecretFound}
          >
            <BookmarkCloverImage size={16} />
          </div>
        </div>

        {/* Thông báo khi tìm thấy bí mật */}
        {secretFound && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-black/70 backdrop-blur-md p-6 rounded-lg shadow-xl max-w-md text-center">
              <BookmarkCloverImage size={80} className="mx-auto mb-4" animate={true} />
              <h3 className="text-2xl font-bold mb-2 text-gradient">Cậu thật sự để ý cái này hả?</h3>
              <p className="text-lg mb-4">Cậu tìm thấy tớ rồi. Cảm ơn cậu vì đã luôn quan sát kỹ nha!
                <br></br>
                <a href="https://www.facebook.com/testify.zero/" className="text-primary hover:text-primary-dark">
                  Facebook chủ page nè
                </a>
              </p>
              <button
                className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors"
                onClick={() => setSecretFound(false)}
              >
                Đóng
              </button>
            </div>
          </motion.div>
        )}
      </footer>
    </main>
  );
}
