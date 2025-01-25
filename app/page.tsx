import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto py-20 flex flex-col items-center justify-center text-center gap-4">
        {/* <div className="w-32 h-32 rounded-full mb-4 bg-muted" /> */}
        <h1 className="text-4xl font-bold">David Mundt</h1>
        <h2 className="text-2xl text-muted-foreground">Software Engineer</h2>
        <p className="max-w-[600px] text-muted-foreground">
          Experienced software engineer specializing in full-stack development with a focus on building scalable web applications and microservices.
        </p>
        <div className="flex gap-4 mt-4">
          <Button asChild>
            <a href="mailto:seekersoftwaredev@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/github.svg" alt="GitHub" width={16} height={16} className="mr-2" /> GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "E-commerce Platform",
              description: "A modern e-commerce platform built with Next.js and Stripe integration",
              tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
              link: "https://project1.example.com"
            },
            {
              title: "Task Management App",
              description: "Real-time task management application with team collaboration features",
              tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
              link: "https://project2.example.com"
            },
            {
              title: "AI Content Generator",
              description: "AI-powered content generation tool using OpenAI's GPT API",
              tech: ["Python", "FastAPI", "React", "OpenAI"],
              link: "https://project3.example.com"
            }
          ].map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              category: "Frontend",
              skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
            },
            {
              category: "Backend",
              skills: ["Node.js", "Python", "PostgreSQL", "Redis"]
            },
            {
              category: "DevOps",
              skills: ["Docker", "AWS", "CI/CD", "Kubernetes"]
            },
            {
              category: "Tools",
              skills: ["Git", "VS Code", "Postman", "Figma"]
            }
          ].map((category) => (
            <Card key={category.category} className="p-4">
              <CardHeader className="p-0 pb-2">
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-20">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Let's Connect</CardTitle>
            <CardDescription className="text-center">
              Open to new opportunities and interesting projects
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="mailto:seekersoftwaredev@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={16} height={16} className="mr-2" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/github.svg" alt="GitHub" width={16} height={16} className="mr-2" /> GitHub
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
