export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  year?: string;
  domain?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Vantage Mobile",
    category: "Mobile App",
    image:
      "https://i.pinimg.com/1200x/0e/4c/3d/0e4c3d8ef49f240ce4bc25aedc4f223a.jpg",
    description:
      "A high-performance real estate tracking application for modern investors.",
    year: "2024",
    domain: "vantage-app.io",
  },
  {
    id: 2,
    title: "Nova Dashboard",
    category: "Web App",
    image:
      "https://i.pinimg.com/1200x/c4/c7/c4/c4c7c4f3de4f7007426b1ba5686b810e.jpg",
    description: "Cloud-based analytics workbench for data-driven enterprises.",
    year: "2024",
    domain: "nova-platform.com",
  },
  {
    id: 3,
    title: "FitPulse App",
    category: "Mobile App",
    image:
      "https://i.pinimg.com/1200x/37/ae/c5/37aec5b91b8771da6085c893a780cfe1.jpg",
    description:
      "Health and fitness companion with real-time biometric tracking.",
    year: "2024",
    domain: "fitpulse.io",
  },
  {
    id: 4,
    title: "Nexus CRM",
    category: "Web App",
    image:
      "https://i.pinimg.com/1200x/24/0a/da/240adac647c3be4b1492fa23704a1c1a.jpg",
    description:
      "Streamlined customer relationship management for service-based businesses.",
    year: "2023",
    domain: "nexus-crm.com",
  },
];
