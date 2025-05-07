"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import ProjectCard3D from "./components/3d-project-card"
import TechStack from "./components/tech-stack"
import Model3DIcon from "./components/3d-model-icon"
import OptimizedImage from "./components/optimized-image"
import ThreeBackground from "./components/3d-background"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* 3D Particle Background */}
      <ThreeBackground />

      <main className="font-sans">
        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col justify-center px-8 py-8 md:py-16 lg:py-20">
          <motion.div
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="order-2 md:order-1">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Priyanshu Kumar
              </motion.h1>

              <motion.div
                className="relative mb-4 inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >

                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></div>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl mb-8 text-muted-foreground/90 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Hi, I'm a passionate Computer Science and Engineering student specializing in Information Technology, driven by an insatiable curiosity about technology and the mechanisms that power it.
              </motion.p>

              <motion.div
                className="flex gap-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link
                  href="#projects"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Button size="lg" className="px-6 py-6 text-base rounded-full">View Projects</Button>
                </Link>
                <Link
                  href="#contact"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Button variant="outline" size="lg" className="px-6 py-6 text-base rounded-full">Contact Me</Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <OptimizedImage
                  src="/images/me_pk.jpg"
                  alt="Priyanshu Kumar"
                  fill
                  className="object-cover"
                  fallbackSrc="/images/profile-placeholder.svg"
                  priority
                />

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12">
                  <Model3DIcon type="cube" color="blue" size={48} />
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12">
                  <Model3DIcon type="sphere" color="purple" size={48} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 px-8 bg-gradient-to-b from-background to-muted/20">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-2">
                <Model3DIcon type="octahedron" color="green" size={40} />
                <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              </div>
              <div className="h-1 w-20 bg-primary mt-3 rounded-full"></div>
              <p className="mt-3 text-muted-foreground text-center max-w-2xl">
                Discover more about my background, skills, and what drives me towards my goal
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="flex flex-col space-y-4 text-center md:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-xl md:text-2xl font-medium">
                  Looking ahead, I aspire to pursue an MBA to broaden my perspective and equip myself with strategic and managerial skills, enabling me to contribute not just as a techie but as a well-rounded professional capable of driving impact at a larger scale.
                </p>
                <p className="text-xl md:text-2xl font-medium">
                  Beyond the screen and code, music is my sanctuary. I enjoy listening to songs and often find myself singing along. In those moments when emotions align with melody, I pen down poems and shayari, letting creativity flow through words.
                </p>

                <div className="pt-6 flex justify-center md:justify-start">
                  <Link
                    href="/PriyanshuKumar_resume.pdf"
                    target="_blank"
                  >
                    <Button variant="outline" size="lg" className="flex items-center gap-2 rounded-full px-8 py-7 text-base font-medium">
                      <Model3DIcon type="torus" color="orange" size={28} />
                      <span className="ml-2">View Resume</span>
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-primary/20">
                  <OptimizedImage
                    src="/images/me_plane.jpg"
                    alt="Priyanshu Kumar"
                    fill
                    className="object-cover"
                    fallbackSrc="/images/about-image-placeholder.svg"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-2">
                <Model3DIcon type="cube" color="purple" size={40} />
                <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
              </div>
              <div className="h-1 w-20 bg-primary mt-3 rounded-full"></div>
              <p className="mt-3 text-muted-foreground text-center max-w-2xl">
                Explore my portfolio of projects showcasing my skills in User Centric Applications,
                data visualization and application design.
              </p>
            </div>

            {/* Featured Projects */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">Featured Projects</h3>
              <div className="h-1 w-16 bg-primary/60 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16 auto-rows-fr">
              <ProjectCard3D
                title="Fashionsta: E-Commerce Platform"
                description="A Myntra-inspired e-commerce platform with user authentication, product management, shopping cart, and 3D product visualization."
                link="https://github.com/priyanshukr0103/ecommerce"
                tags={["HTML5", "CSS", "JavaScript", "MongoDB"]}
                image="/images/fashionsta.jpg"
              />

              <ProjectCard3D
                title="APT_Fincare - Financial Management"
                description="A finance management system for expense tracking, budget planning, bill reminders, and investment portfolio monitoring."
                link="https://github.com/priyanshukr0103/Apt_Fincare"
                tags={["Next.js", "TypeScript", "MongoDB", "Chart.js"]}
                image="/images/fintrack.jpg"
              />

              <ProjectCard3D
                title="Product Management System"
                description="The Product Management System is a web-based application which allows users to manage products by adding, updating, deleting, and viewing product details efficiently."
                link="https://github.com/priyanshukr0103/Product-Management-"
                tags={["Thymeleaf", "JavaScript", "Java", "Spring Boot"]}
                image="/images/product_management.jpg"
              />
            </div>

            {/* Other Projects */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">Other Projects</h3>
              <div className="h-1 w-16 bg-primary/60 mx-auto rounded-full"></div>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Additional projects that showcase different skills and technologies.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
              <ProjectCard
                title="Spam Mail Detection"
                description="This project builds a Spam Mail Detection system using NLP and Machine Learning. It classifies emails as spam or ham (not spam) using the Multinomial Naïve Bayes (MNB) algorithm."
                image="/images/spam.jpg"
                link="https://github.com/priyanshukr0103/Spam-Mail-Detection"
                tags={["Python ", "Pandas & NumPy", "Matplotlib & Seaborn"]}
              />
              <ProjectCard
                title="Traffic Violation Detection"
                description="A computer vision system that detects traffic violations at intersections and captures license plate information."
                image="/images/traffic.jpg"
                link="https://github.com/priyanshukr0103/Red-Light-Traffic-Violation-and-Number-Plate-Detecion"
                tags={["Python", "OpenCV", "Computer Vision"]}
              />
              <ProjectCard
                title="Text Emotion Detection"
                description="A text emotion detection project uses machine learning to identify and classify emotions expressed in text, such as joy, anger, or sadness."
                image="/images/text.jpg"
                link="https://github.com/priyanshukr0103/Spam-Mail-Detection"
                tags={["Python ", "Pandas & NumPy", "Matplotlib & Seaborn"]}
              />
            </div>
          </motion.div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 md:py-24 px-8 bg-gradient-to-b from-muted/20 to-background">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-2">
                <Model3DIcon type="cylinder" color="indigo" size={40} />
                <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
              </div>
              <div className="h-1 w-20 bg-primary mt-3 rounded-full"></div>
              <p className="mt-3 text-muted-foreground text-center max-w-2xl">
                The technologies and tools I use to bring ideas to life.
              </p>
            </div>
            <TechStack />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Model3DIcon type="cone" color="pink" size={40} />
                <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
              </div>
              <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
              <p className="mt-2 text-muted-foreground text-center max-w-2xl">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </section>
      </main>
    </div>
  )
}
