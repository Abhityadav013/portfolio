import React from 'react';

const skillGroups = [
  {
    title: 'Backend & Architecture',
    skills: [
      'Node.js', 'NestJS', 'Express', 'Microservices',
      'Event-Driven Systems', 'API-First Design', 'Serverless'
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS Lambda', 'SQS', 'SNS', 'S3', 'EC2', 'CloudWatch',
      'Docker', 'CI/CD', 'Infrastructure Automation'
    ],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Redux', 'MUI', 'Ant Design'],
  },
  {
    title: 'Databases & Caching',
    skills: ['MongoDB', 'PostgreSQL', 'SQL Server', 'Redis'],
  },
  {
    title: 'Modern & Trending',
    skills: [
      'Monorepo (Nx)', 'Observability & Logging', 'Elasticsearch',
      'AI-Assisted Development', 'Testing Automation'
    ],
  },
  {
    title: 'Tooling & Delivery',
    skills: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Postman', 'Selenium'],
  },
];

export const SkillSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
          Technical Skills
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Backend-focused engineering with modern cloud practices, scalable architecture,
          and a delivery mindset optimized for product velocity.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/15 text-blue-200 border border-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};