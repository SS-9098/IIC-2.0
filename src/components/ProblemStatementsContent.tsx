import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, Building, Rocket, Shield, Heart, Cpu, Leaf } from 'lucide-react';

const ProblemStatementsContent: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elementsToAnimate?.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const problemCategories = [
    {
      id: 'isro',
      title: 'ISRO - Space Technology & Innovation',
      icon: <Rocket className="h-8 w-8 text-blue-400" />,
      gradient: 'from-blue-400 to-purple-600',
      problems: [
        {
          title: 'Autonomous Navigation for Lunar Rovers',
          description: 'Develop an AI-powered navigation system for lunar rovers that can operate autonomously in the challenging lunar environment with minimal Earth communication.',
          difficulty: 'Advanced',
          tags: ['AI/ML', 'Robotics', 'Space Technology']
        },
        {
          title: 'Satellite Debris Detection and Tracking',
          description: 'Create a system to detect, track, and predict the movement of space debris to protect operational satellites and spacecraft.',
          difficulty: 'Intermediate',
          tags: ['Computer Vision', 'Tracking Systems', 'Space Safety']
        },
        {
          title: 'Mars Habitat Design Optimization',
          description: 'Design an optimal habitat structure for Mars colonization considering radiation protection, resource utilization, and psychological well-being.',
          difficulty: 'Advanced',
          tags: ['Structural Design', 'Simulation', 'Human Factors']
        }
      ]
    },
    {
      id: 'mahindra',
      title: 'Mahindra - Sustainable Mobility & Agriculture',
      icon: <Leaf className="h-8 w-8 text-green-400" />,
      gradient: 'from-green-400 to-blue-500',
      problems: [
        {
          title: 'Smart Electric Vehicle Charging Infrastructure',
          description: 'Develop an intelligent EV charging network that optimizes energy distribution, reduces grid load, and integrates renewable energy sources.',
          difficulty: 'Intermediate',
          tags: ['IoT', 'Energy Management', 'Smart Grid']
        },
        {
          title: 'Precision Agriculture with Drone Technology',
          description: 'Create a drone-based system for precision agriculture that can monitor crop health, optimize irrigation, and predict yield.',
          difficulty: 'Intermediate',
          tags: ['Drones', 'Computer Vision', 'Agriculture Tech']
        },
        {
          title: 'Autonomous Farm Equipment Navigation',
          description: 'Design an autonomous navigation system for farm equipment that can operate efficiently in various field conditions.',
          difficulty: 'Advanced',
          tags: ['Autonomous Systems', 'GPS', 'Agricultural Robotics']
        }
      ]
    },
    {
      id: 'epam',
      title: 'EPAM - Digital Transformation & AI',
      icon: <Cpu className="h-8 w-8 text-cyan-400" />,
      gradient: 'from-cyan-400 to-purple-500',
      problems: [
        {
          title: 'Intelligent Document Processing System',
          description: 'Build an AI-powered system that can extract, process, and analyze information from various document formats with high accuracy.',
          difficulty: 'Intermediate',
          tags: ['NLP', 'OCR', 'Machine Learning']
        },
        {
          title: 'Real-time Fraud Detection Platform',
          description: 'Develop a real-time fraud detection system for financial transactions using machine learning and behavioral analysis.',
          difficulty: 'Advanced',
          tags: ['Machine Learning', 'Real-time Processing', 'Security']
        },
        {
          title: 'Personalized Learning Management System',
          description: 'Create an adaptive learning platform that personalizes content delivery based on individual learning patterns and preferences.',
          difficulty: 'Intermediate',
          tags: ['EdTech', 'Personalization', 'Analytics']
        }
      ]
    },
    {
      id: 'talsmart',
      title: 'Talsmart - HR Tech & Talent Management',
      icon: <Building className="h-8 w-8 text-orange-400" />,
      gradient: 'from-orange-400 to-red-500',
      problems: [
        {
          title: 'AI-Powered Resume Screening System',
          description: 'Develop an intelligent resume screening system that can match candidates to job requirements while eliminating bias.',
          difficulty: 'Intermediate',
          tags: ['NLP', 'Machine Learning', 'HR Tech']
        },
        {
          title: 'Employee Skill Gap Analysis Platform',
          description: 'Create a platform that identifies skill gaps in organizations and recommends personalized learning paths for employees.',
          difficulty: 'Intermediate',
          tags: ['Analytics', 'Skills Assessment', 'Learning Platforms']
        },
        {
          title: 'Virtual Interview Assessment Tool',
          description: 'Build a virtual interview platform with AI-powered assessment capabilities for remote hiring processes.',
          difficulty: 'Advanced',
          tags: ['Video Processing', 'AI Assessment', 'Remote Work']
        }
      ]
    },
    {
      id: 'rg-hospitals',
      title: 'RG Hospitals - Healthcare Innovation',
      icon: <Heart className="h-8 w-8 text-pink-400" />,
      gradient: 'from-pink-400 to-red-500',
      problems: [
        {
          title: 'AI-Assisted Medical Diagnosis System',
          description: 'Develop an AI system that can assist doctors in diagnosing diseases from medical images and patient data.',
          difficulty: 'Advanced',
          tags: ['Medical AI', 'Computer Vision', 'Healthcare']
        },
        {
          title: 'Hospital Resource Optimization Platform',
          description: 'Create a system to optimize hospital resource allocation including beds, staff, and equipment based on real-time demand.',
          difficulty: 'Intermediate',
          tags: ['Optimization', 'Resource Management', 'Healthcare Operations']
        },
        {
          title: 'Patient Monitoring and Alert System',
          description: 'Build a comprehensive patient monitoring system that can predict health deterioration and alert medical staff.',
          difficulty: 'Advanced',
          tags: ['IoT', 'Predictive Analytics', 'Patient Care']
        }
      ]
    },
    {
      id: 'drdo',
      title: 'DRDO - Defense & Security Technology',
      icon: <Shield className="h-8 w-8 text-yellow-400" />,
      gradient: 'from-yellow-400 to-orange-500',
      problems: [
        {
          title: 'Cybersecurity Threat Detection System',
          description: 'Develop an advanced cybersecurity system that can detect and respond to sophisticated cyber threats in real-time.',
          difficulty: 'Advanced',
          tags: ['Cybersecurity', 'Threat Detection', 'Network Security']
        },
        {
          title: 'Drone Swarm Coordination System',
          description: 'Create a system for coordinating multiple drones in surveillance and reconnaissance missions with autonomous decision-making.',
          difficulty: 'Advanced',
          tags: ['Drone Technology', 'Swarm Intelligence', 'Autonomous Systems']
        },
        {
          title: 'Secure Communication Protocol',
          description: 'Design a quantum-resistant secure communication protocol for military and defense applications.',
          difficulty: 'Advanced',
          tags: ['Cryptography', 'Secure Communications', 'Quantum Security']
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen space-bg" ref={sectionRef}>
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full mb-4 animate-on-scroll opacity-0">
            <Lightbulb className="h-8 w-8 text-pink-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-on-scroll opacity-0">
            Problem <span className="gradient-text">Statements</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto animate-on-scroll opacity-0 leading-relaxed">
            Choose from cutting-edge problem statements provided by leading organizations. Each challenge is designed to push the boundaries of innovation and create real-world impact.
          </p>
        </div>

        <div className="space-y-6">
          {problemCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 animate-on-scroll opacity-0"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none hover:bg-white/5 transition-colors duration-300"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`bg-gradient-to-br ${category.gradient}/20 p-3 rounded-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                    <p className="text-gray-400">{category.problems.length} Problem Statements</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 p-2 rounded-full">
                  {expandedCategory === category.id ? (
                    <ChevronUp className="h-6 w-6 text-pink-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-pink-400" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedCategory === category.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 space-y-6">
                  {category.problems.map((problem, problemIndex) => (
                    <div
                      key={problemIndex}
                      className="glass-card rounded-xl p-6 hover:glass-card transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 lg:mb-0">{problem.title}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{problem.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {problem.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-6">Ready to Innovate?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Choose your problem statement and start building solutions that can change the world. 
              Remember, you can work on any problem statement regardless of the providing organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="modern-button neon-button px-8 py-3 rounded-lg font-medium transition-all duration-300"
                onClick={() => window.open('https://unstop.com/hackathons/international-innovation-challenge-20-manipal-university-mu-jaipur-1527559', '_blank')}
              >
                Register Now
              </button>
              <button 
                className="glass-card hover:glass-card text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 border border-pink-400/30"
                onClick={() => window.open('/Guidelines.pdf', '_blank')}
              >
                View Guidelines
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProblemStatementsContent;