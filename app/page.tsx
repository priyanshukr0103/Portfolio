"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import ProjectCard3D from "./components/3d-project-card"
import CertificationCard from "./components/certification-card"
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
        <section id="about" className="py-20 md:py-28 px-8 bg-gradient-to-b from-background to-muted/20">
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

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start md:items-center">
              <motion.div
                className="flex flex-col space-y-5 text-center md:text-left md:pr-4 md:self-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  I'm a Computer Science and Engineering student with a focus on Information Technology - not someone obsessed with machines, but someone genuinely curious about how things work. I enjoy exploring systems, solving problems, and growing with each challenge I take on.
                </p>

                <motion.p
                  className="text-lg md:text-xl font-medium leading-relaxed italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  But there's more to me than code.
                </motion.p>

                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Music has always been my escape. I don't just listen - I sing. And when emotions align with the rhythm, I write - poems, shayari, and thoughts that speak louder than words ever could.
                </p>

                <motion.p
                  className="text-lg md:text-xl font-medium leading-relaxed italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Tech shapes my thinking. Art shapes my feeling. And somewhere between the two, I've found my voice.
                </motion.p>

                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  Soon, I hope to pursue an MBA - not to change direction, but to expand it. To understand the bigger picture and bring value where creativity and logic meet.
                </p>

                <div className="pt-6 flex justify-center md:justify-start">
                  <Link
                    href="/PriyanshuKumar_resume.pdf"
                    target="_blank"
                  >
                    <Button variant="outline" size="lg" className="flex items-center gap-2 rounded-full px-8 py-7 text-base font-medium hover:bg-primary/10 transition-colors">
                      <Model3DIcon type="torus" color="orange" size={28} />
                      <span className="ml-2">View Resume</span>
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-center md:self-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 group">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 z-10">
                    <Model3DIcon type="cube" color="blue" size={48} />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 z-10">
                    <Model3DIcon type="sphere" color="purple" size={48} />
                  </div>

                  <OptimizedImage
                    src="/images/me_plane.jpg"
                    alt="Priyanshu Kumar"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackSrc="/images/about-image-placeholder.svg"
                    priority
                  />

                  {/* Multiple gradient overlays for enhanced effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-60"></div>

                  {/* Animated highlight on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-40"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>

                  {/* Caption at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-shadow font-medium">Tech & Creativity in Balance</p>
                  </div>
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
                description="This project builds a Spam Mail Detection system using NLP and Machine Learning. It classifies emails as spam or ham using the MNB algorithm."
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

        {/* Certifications Section */}
        <section className="py-20 md:py-28 px-8 bg-gradient-to-b from-background to-muted/20">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-3 mb-2">
                <Model3DIcon type="torus" color="blue" size={40} />
                <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
              </div>
              <div className="h-1 w-20 bg-primary mt-3 rounded-full"></div>
              <p className="mt-3 text-muted-foreground text-center max-w-2xl">
                Professional certifications that validate my expertise and continuous learning journey.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3 auto-rows-fr">
              <CertificationCard
                title="Oracle Certified Professional: Java SE 11 Developer"
                link="https://drive.google.com/file/d/1Fg1OdhgD4LRtb782JszdcGZmO7vED46_/view?usp=drive_link"
              />
              <CertificationCard
                title="Oracle Cloud Infrastructure 2024 Certified Foundations Associate"
                link="https://drive.google.com/file/d/1N4vL8tbqjcrkLbE2aVDnXPt5iCj3ZRa1/view?usp=drive_link"
              />
              <CertificationCard
                title="NPTEL Online Certification in Data Mining"
                link="https://drive.google.com/file/d/12KfnNhxa3EWp7FnoaaQ9KKyZDeuGW8PJ/view?usp=drive_link"
              />
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://www.linkedin.com/in/priyanshukr0103/"
                target="_blank"
              >
              </Link>
            </motion.div>
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
