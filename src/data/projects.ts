export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string; // Detailed description for the detail page
  imageKey?: string; // Changed to imageKey to reference imported images
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Web Operator",
    description: "A comprehensive dashboard interface for managing business operations, featuring analytics, reports, and user management capabilities.",
    detailedDescription: "Web Operator is a SaaS platform for web automation, data scraping, and UX/UI testing, featuring a visual workflow designer, live browser execution, and real-time team collaboration. It enables interactive testing on both tested and untested interfaces, generating detailed analytics and heatmaps from user interactions.\n\nAs the Lead Developer, I architected the atomic frontend using React, TypeScript, and Material-UI, and built the real-time workflow viewer that displays prompt-triggered browser actions live during execution. I developed the complete UX/UI testing system, including interactive question flows, session recording, and interaction summary generation with advanced analytics. On the backend, I designed a scalable microservices architecture using NestJS, Prisma with optimized PostgreSQL queries, Docker, and AWS, integrating Cognito authentication and S3 storage to reliably support high-concurrency team workflows.,As the Lead Developer, I architected the atomic frontend using React, TypeScript, and Material-UI, and built the real-time workflow viewer that displays prompt-triggered browser actions live during execution. I developed the complete UX/UI testing system, including interactive question flows, session recording, and interaction summary generation with advanced analytics. On the backend, I designed a scalable microservices architecture using NestJS, Prisma with optimized PostgreSQL queries, Docker, and AWS, integrating Cognito authentication and S3 storage to reliably support high-concurrency team workflows.",
    imageKey: "webcvr",
    technologies: ["React", "TypeScript", "Material-UI", "Zustand", "NestJS", "Prisma", "Docker", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "Teelan Saloon Care",
    description: "A modern business website showcasing services and products with an elegant design and user-friendly interface.",
    detailedDescription: "Teelan Saloon Care is a professional showcase platform for a premium Sri Lankan salon interior brand, featuring dynamic project galleries, service catalogs, client testimonials, and streamlined contact workflows, with a mobile-first, high-performance visual experience.\n\nI developed the end-to-end full-stack solution from Figma designs, building responsive layouts using Next.js and Tailwind CSS, including custom React carousels optimized for interior photography. I implemented Redux-based state management for complex gallery navigation and real-time updates, and built RESTful APIs with Express.js, integrating MongoDB and Firebase for CRUD operations across projects, services, testimonials, and contacts. Performance was enhanced through image lazy loading, service workers for offline support, and Firebase real-time synchronization to ensure fast, consistent updates across devices.",
    imageKey: "teelan-saloon",
    technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "AI Vehicle Safety System",
    description: "An AI-powered real-time vehicle safety system using computer vision for object detection, distance measurement, and collision prevention.",
    detailedDescription: "Vision-Based AI Vehicle Safety System detects lanes and obstacles in real-time across diverse road conditions using custom YOLO segmentation models for lane edges and fine-tuned object detection, delivering stable video output through advanced post-processing for edge deployment.\n\nAs primary model developer, I handled complete dataset lifecycle from CVAT annotation across urban/rural/highway scenarios to extensive augmentation pipelines including geometric transformations, photometric adjustments, and noise injection for robust generalization. I customized YOLOv8n-seg architecture with k-means optimized anchors and 640x640 input resolution, implemented hyperparameter tuning with SGD optimizer achieving production-grade convergence, and engineered the post-processing pipeline featuring morphological operations, temporal Kalman filtering for video stability, and dynamic confidence thresholding. This end-to-end ML pipeline transformed raw camera feeds into reliable safety insights deployable in real-world autonomous driving scenarios.",
    imageKey: "aiDev",
    technologies: ["TensorFlow", "PyTorch", "YOLO"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  // {
  //   id: "4",
  //   title: "Project Four",
  //   description: "A modern application showcasing innovative solutions and cutting-edge technology.",
  //   imageKey: "project-four",
  //   technologies: ["React", "Node.js", "MongoDB"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com",
  // },
];

