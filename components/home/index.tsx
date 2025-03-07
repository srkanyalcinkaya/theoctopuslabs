"use client"
import { motion } from 'framer-motion';
import Hero from './sections/hero';
import Team from './sections/team';
import Clients from './sections/clients';
import Contact from './sections/contact';
import Technologies from './sections/technologies';

// Tüm bileşenlerin doğru şekilde import edildiğinden emin olalım
// Eğer herhangi bir bileşen bulunamıyorsa, ilgili bileşeni geçici olarak yorum satırına alabiliriz

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

export default function Home({ data }: { data: any }) {


    return (
        <motion.div
            className="w-full bg-gradient-to-b from-black to-[#1a1a1a]"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.div variants={fadeInUp}>
                {Hero && <Hero />}
            </motion.div>

            <motion.div variants={fadeInUp}>
                {Technologies && <Technologies />}
            </motion.div>

            <motion.div variants={fadeInUp}>
                {Team && data && data.allAuthors && <Team authors={data.allAuthors} />}
            </motion.div>

            <motion.div variants={fadeInUp}>
                {Clients && <Clients />}
            </motion.div>

            <motion.div variants={fadeInUp}>
                {Contact && <Contact />}
            </motion.div>
        </motion.div>
    );
}
