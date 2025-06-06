
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Database, Grid3X3, Layers, ExternalLink, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

const projects = [
  {
    id: 1,
    title: "Real-time-Sales-Dashboard",
    description: "A complete end-to-end real-time sales analytics dashboard, using tools and technologies widely adopted in modern data infrastructure: Apache Kafka, Apache Airflow, AWS S3, AWS Athena, and Power BI",
    fullDescription: "",
    image: "./dashboard.png",
    tags: ["Python", "ETL", "Dataengineering", "Data Visualization","AmazonS3","Amazon anthena"],
    icon: <Layers className="h-5 w-5" />,
    link: "https://github.com/deepak2509/real-time-sales-dashboard.git"
  },
  {
    id: 2,
    title: "Real-Time Product Sentiment & Price Tracker for E-Commerce Intelligence",
    description: "Addressed the challenge of manual competitor price monitoring by building a real-time data pipeline that uses Python and RapidAPI to track Amazon product prices and review",
    fullDescription: "For this industrial client, I developed a predictive maintenance system that processes real-time sensor data from manufacturing equipment. Using a combination of time series analysis and machine learning algorithms, the system identifies patterns that precede equipment failure. Early warnings allowed maintenance teams to address issues before they caused downtime. Within 6 months of implementation, the client reduced unplanned downtime by 35% and cut maintenance costs by 25%.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python","API","Cloud","Dataengineering"],
    icon: <BarChart className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 3,
    title: "Data Pipeline for Customer Transactions",
    description: "Data Pipeline for Customer TransactionsData Pipeline for Customer Transactions.",
    fullDescription: "",
    image: "./Flowchart-2.png",
    tags: ["Python", "ETL", "Dataengineering", "Data Visualization","AmazonS3"],
    icon: <Database className="h-5 w-5" />,
    link: "#"
  },
  {
    id: 4,
    title: "Sales Forecasting Dashboard",
    description: "Created an interactive dashboard that forecasts sales trends using historical data and external factors such as seasonality, promotions, and market conditions.",
    fullDescription: "For a retail client, I designed and implemented a sales forecasting dashboard that integrates data from multiple sources including POS systems, inventory management, marketing campaigns, and external market indicators. Using Prophet and custom statistical models, the dashboard provides accurate forecasts at various granularities (daily, weekly, monthly) and allows stakeholders to simulate different scenarios. The forecasting accuracy reached 94% for 30-day predictions, enabling better inventory management and marketing budget allocation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Tableau", "Prophet", "Statistical Modeling", "SQL"],
    icon: <Grid3X3 className="h-5 w-5" />,
    link: "#"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const projectsPerPage = 2;
  
  // Extract all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();
  
  // Filter projects based on selected tag
  const filteredProjects = filterTag 
    ? projects.filter(project => project.tags.includes(filterTag)) 
    : projects;
  
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  const displayedProjects = filteredProjects.slice(
    currentIndex * projectsPerPage,
    (currentIndex * projectsPerPage) + projectsPerPage
  );
  
  const nextPage = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Cycle back to first page
    }
  };
  
  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(totalPages - 1); // Cycle to last page
    }
  };
  
  const clearFilter = () => {
    setFilterTag(null);
    setCurrentIndex(0);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Featured <span className="gradient-heading">Projects</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Take a look at some of my recent data science and machine learning projects, 
            showcasing my technical skills and problem-solving abilities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {filterTag ? `Filtered: ${filterTag}` : 'Filter by Technology'}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Filter Projects</DialogTitle>
                  <DialogDescription>
                    Select a technology to filter projects
                  </DialogDescription>
                </DialogHeader>
                <Command className="rounded-lg border shadow-md">
                  <CommandInput placeholder="Search technologies..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Technologies">
                      {allTags.map(tag => (
                        <CommandItem
                          key={tag}
                          onSelect={() => {
                            setFilterTag(tag);
                            setCurrentIndex(0);
                          }}
                        >
                          {tag}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
                {filterTag && (
                  <Button 
                    variant="outline" 
                    onClick={clearFilter}
                    className="mt-2"
                  >
                    Clear Filter
                  </Button>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <Card 
              key={project.id} 
              className="data-card h-full flex flex-col group transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <Button 
                    variant="outline" 
                    className="bg-white text-data-dark hover:bg-data-green hover:text-white border-white"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    View Details
                  </Button>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="bg-data-green/10 p-2 rounded-full text-data-green">
                    {React.cloneElement(project.icon as React.ReactElement, { className: "h-5 w-5" })}
                  </div>
                </div>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className={`bg-slate-100 text-slate-700 hover:bg-data-green/20 cursor-pointer transition-colors ${
                        filterTag === tag ? 'bg-data-green/30 border-data-green' : ''
                      }`}
                      onClick={() => {
                        setFilterTag(tag === filterTag ? null : tag);
                        setCurrentIndex(0);
                      }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Dialog open={selectedProject === project.id} onOpenChange={(open) => !open && setSelectedProject(null)}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-data-green hover:text-white"
                    >
                      <a href="https://github.com/deepak2509" target="_blank">View details</a>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                      <div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-[300px] object-cover rounded-md"
                        />
                      </div>
                      <p className="text-gray-700">{project.fullDescription}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        className="flex items-center gap-2 bg-data-green hover:bg-data-green/80"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Visit Project <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredProjects.length > projectsPerPage && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button 
              variant="outline" 
              onClick={prevPage}
              className="flex items-center gap-2 hover:bg-data-green hover:text-white"
              disabled={filteredProjects.length <= projectsPerPage}
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </Button>
            <span className="text-gray-600">
              Page {currentIndex + 1} of {totalPages}
            </span>
            <Button 
              variant="outline" 
              onClick={nextPage}
              className="flex items-center gap-2 hover:bg-data-green hover:text-white"
              disabled={filteredProjects.length <= projectsPerPage}
            >
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button className="bg-data-green hover:bg-data-green/90 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
