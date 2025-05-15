
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Database, 
  Layers, 
  SearchIcon, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  GraduationCap 
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const faqs = [
  {
    question: "What is your background in data science?",
    answer: "I'm a data science and machine learning enthusiast with a strong foundation in computer science and hands-on experience in building end-to-end data pipelines and intelligent systems"
  },
  {
    question: "What programming languages do you specialize in?",
    answer: "I primarily work with Python for most of my data science and machine learning projects, utilizing libraries like TensorFlow, PyTorch, and scikit-learn. I'm also proficient in R for statistical analysis, SQL for database operations, and have experience with Java and JavaScript for specific application development."
  },
  {
    question: "Can you explain your approach to data science projects?",
    answer: "I follow a structured approach that starts with clearly defining the problem, followed by data collection and cleaning. I conduct exploratory data analysis to understand patterns, then develop and validate various models. I focus on interpretability alongside performance, and ensure solutions can be effectively deployed in production environments with proper monitoring."
  }
];

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About <span className="gradient-heading">Me</span></h2>
            
            <p className="text-gray-700 mb-6">
            I'm a data science and machine learning enthusiast with a strong foundation in computer science and hands-on experience in building end-to-end data pipelines and intelligent systems. Currently pursuing my Master’s in Information Systems at Iowa State University, I’m passionate about transforming raw data into meaningful insights that drive business decisions.
My journey into data science started with academic research, where I developed deep learning pipelines using YOLOv5 and Mask R-CNN for defect detection in additive manufacturing. Since then, I’ve built scalable ETL workflows using tools like Apache Airflow, AWS Glue, Redshift, and Kafka, and created dashboards for real-time analytics using Power BI. I'm always exploring innovative ways to bridge the gap between data and decision-making
            </p>
            
            <p className="text-gray-700 mb-6">
              </p>
            
            <Collapsible open={showMore}>
              <CollapsibleContent className="animate-accordion-down">
                <p className="text-gray-700 mb-6">
                  What sets me apart is my ability to bridge the gap between technical complexity and business understanding. I not only build models but ensure they translate to tangible impact for organizations.
                </p>
                
                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-data-green" />
                    <div>
                      <h4 className="font-medium">Master's in Management Information systems</h4>
                      <p className="text-sm text-gray-600">Iowa State University, 2023-2025(expected)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-data-green" />
                    <div>
                      <h4 className="font-medium">Bachelors's in Computer Science and Engineering</h4>
                      <p className="text-sm text-gray-600">MIC College of Technology, 2019-2023(Apirl)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <Button 
              variant="outline" 
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 mb-8 border-data-green text-data-green hover:bg-data-green/10"
            >
              {showMore ? (
                <>Less About Me <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>More About Me <ChevronDown className="h-4 w-4" /></>
              )}
            </Button>
            
            <div className="flex items-center gap-4 text-gray-700">
              <div className="flex items-center gap-2">
               
               
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-data-orange/20 p-1 rounded">
                  <BarChart className="h-4 w-4 text-data-orange" />
                </span>
                <span>5+ projects</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 data-card hover:scale-105 transition-transform duration-300">
                <div className="mb-4 bg-data-green/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-data-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                <p className="text-gray-600">
                  Uncovering patterns and trends within complex datasets to inform strategic decision-making.
                </p>
              </Card>
              
              <Card className="p-6 data-card hover:scale-105 transition-transform duration-300">
                <div className="mb-4 bg-data-orange/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Layers className="h-6 w-6 text-data-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                <p className="text-gray-600">
                  Building predictive models and algorithms that learn from data to solve specific problems.
                </p>
              </Card>
              
              <Card className="p-6 data-card hover:scale-105 transition-transform duration-300">
                <div className="mb-4 bg-data-brown/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <SearchIcon className="h-6 w-6 text-data-brown" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Mining</h3>
                <p className="text-gray-600">
                  Extracting valuable insights from raw data using statistical and computational techniques.
                </p>
              </Card>
              
              <Card className="p-6 data-card hover:scale-105 transition-transform duration-300">
                <div className="mb-4 bg-data-gold/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-data-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Visualization</h3>
                <p className="text-gray-600">
                  Creating compelling visualizations that communicate complex data stories effectively.
                </p>
              </Card>
            </div>
            
            <div className="mt-8 border border-slate-200 rounded-lg shadow-sm p-4">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-slate-200 last:border-none py-3"
                >
                  <button
                    className="w-full flex justify-between items-center text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium text-data-dark">{faq.question}</span>
                    {openFaq === index ? 
                      <ChevronUp className="h-5 w-5 text-data-green" /> : 
                      <ChevronDown className="h-5 w-5 text-data-green" />
                    }
                  </button>
                  
                  {openFaq === index && (
                    <div className="mt-2 text-gray-600 animate-accordion-down">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
