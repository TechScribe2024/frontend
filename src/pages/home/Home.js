import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Header from "../../components/common/header/header";
import front from "../../assets/front.jpg";

const data = [
  {
    id: 1,
    title: "Stay Ahead of Tech Trends",
    content:
      "Tech blogs provide insights into the latest trends and innovations, helping you stay informed about the ever-changing tech landscape.",
    icon: "📈",
  },
  {
    id: 2,
    title: "Learn from Industry Experts",
    content:
      "Get advice and knowledge from seasoned professionals in the tech world. Blogs often feature interviews, case studies, and expert opinions.",
    icon: "🧠",
  },
  {
    id: 3,
    title: "Hands-on Tutorials and Guides",
    content:
      "Tech blogs offer practical guides and step-by-step tutorials on various technologies, helping you sharpen your skills through hands-on learning.",
    icon: "🛠️",
  },
  {
    id: 4,
    title: "Connect with a Tech Community",
    content:
      "Reading and engaging with tech blogs allows you to be part of a vibrant community of developers, designers, and tech enthusiasts.",
    icon: "🤝",
  },
  {
    id: 5,
    title: "Discover New Tools and Resources",
    content:
      "Stay updated on the latest tools, frameworks, and resources that can enhance your productivity and streamline your workflow.",
    icon: "🔧",
  },
  {
    id: 6,
    title: "Gain Diverse Perspectives",
    content:
      "Explore different viewpoints and approaches to problem-solving in the tech world, broadening your understanding and creativity.",
    icon: "🌍",
  },
];

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Header />
      <main>
        <motion.section
          className="relative h-screen flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 z-0">
            <img
              src={front}
              alt="Tech Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 px-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Create. Help. Learn.
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Embark on a journey of knowledge and innovation with our tech blog
              platform.
            </motion.p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/createBlog"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition duration-300"
              >
                Start Blogging
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.section>

        <section className="py-16 px-4 md:px-8 lg:px-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Tech Blogs Matter
          </motion.h2>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
          <motion.div
            className="bg-gradient-to-r from-purple-800 to-indigo-800 p-8 rounded-xl shadow-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-6 text-center text-gray-200">
              Stay updated with the latest blog posts and tech insights!
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-md hover:from-pink-600 hover:to-purple-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </section>

        <section className="py-16 px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Join Our Tech Blog Community
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl mb-8">
              Become part of a thriving community of tech enthusiasts,
              developers, and innovators. Share your knowledge, learn from
              others, and grow your skills in a supportive environment.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/signup"
                className="bg-gradient-to-r from-yellow-400 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition duration-300"
              >
                Join Now
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
