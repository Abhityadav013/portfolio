import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import FloatingCard from "./FloatingCard";

const experiences = [
  {
    company: "DevPro",
    role: "Node.js Developer",
    location: "Latvia (Remote)",
    duration: "Aug 2025 – Present",
    projects: ["Restaurant POS & Commerce Platform (US Market)"],
    highlights: [
      "Built a microservices-based restaurant POS platform used by thousands of US stores.",
      "Delivered Node.js services for orders, menu sync, notifications, and delivery adapters.",
      "Integrated Uber Eats, DoorDash, and Grubhub for real-time fulfillment.",
      "Implemented event-driven workflows with AWS SQS & SNS.",
      "Deployed serverless workloads with AWS Lambda, S3, and CloudWatch.",
      "Improved performance with Redis caching and centralized Elasticsearch logging.",
      "Focused on scalability, fault tolerance, and high availability.",
    ],
  },
  {
    company: "Omnie Solutions",
    role: "Full-Stack Developer",
    location: "On-Site (India)",
    duration: "Jan 2024 – Jul 2025",
    projects: ["Informed (Libera) – Vocational Rehab Platform"],
    highlights: [
      "Optimized API performance to deliver sub-20ms responses for 80k+ users.",
      "Introduced Redis caching and MongoDB tuning to stabilize high-traffic workloads.",
      "Automated DocuSign workflows and streamlined intake onboarding flows.",
      "Supported monorepo delivery using Nx to improve reuse and release velocity.",
    ],
  },
  {
    company: "OptumRx",
    role: "Software Engineer",
    location: "On-Site (India)",
    duration: "Jan 2023 – Dec 2023",
    projects: ["MicroProduct – Healthcare Components"],
    highlights: [
      "Built reusable React components with 95% test coverage for cross-team adoption.",
      "Delivered a shared frontend library to accelerate healthcare product launches.",
      "Improved accessibility and QA automation using Jest and Cucumber suites.",
    ],
  },
  {
    company: "Healthcare Domain",
    role: "Software Engineer",
    location: "On-Site (India)",
    duration: "Jun 2021 – Dec 2022",
    projects: ["MyArthritisRx", "IndigoRx"],
    highlights: [
      "Migrated from Sitecore to a modern stack with AI-assisted coaching flows.",
      "Implemented secure onboarding, Stripe billing, and patient engagement features.",
      "Partnered with product stakeholders to deliver compliant healthcare releases.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <FloatingCard key={`${experience.company}-${experience.role}`} delay={index * 0.2}>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div>
                      <p className="text-lg text-blue-400 font-semibold mb-2">
                        {experience.company}
                      </p>
                      <div className="flex items-center space-x-3">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                        <h3 className="text-xl font-bold text-white">
                          {experience.role}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                        Key Projects
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.projects.map((project) => (
                          <span
                            key={project}
                            className="px-3 py-1 bg-blue-500/15 text-blue-300 rounded-full text-sm border border-blue-500/20"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">
                        Impact
                      </p>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start text-sm text-gray-300"
                          >
                            <span className="mt-1 mr-2 h-2 w-2 rounded-full bg-green-400 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
