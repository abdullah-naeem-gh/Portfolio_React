import React from 'react';
import { Image } from 'lucide-react';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'the-annoying-traps',
    title: 'The Annoying Traps',
    description: 'A simple yet engaging vertical game where players navigate a chain past sneaky ropes without getting caught.',
    icon: <Image className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    tech: ['Python', 'Pygame', 'Collision Detection'],
    longDescription: `The Annoying Traps is a fun and challenging vertical game where players control a chain and navigate 
past moving ropes to reach the endpoint. The game features dynamic interactions, collision detection, and a 
restart mechanism. It provides a compelling gaming experience with opportunities for future enhancements.`,
    features: [
      'Mouse-controlled movement for intuitive gameplay',
      'Dynamic obstacles with varying lengths and speeds',
      'Collision detection for accurate game mechanics',
      'Restart functionality for continuous play',
      'Victory and Game Over states with clear feedback',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437c1?w=800',
        alt: 'Gameplay showing chain navigating past ropes'
      },
      {
        url: 'https://images.unsplash.com/photo-1593642634313-3f5ee1c2b7c7?w=800',
        alt: 'Game Over screen example'
      }
    ],
    demoUrl: 'https://example.com/the-annoying-traps',
    githubUrl: 'https://github.com/abdullah-naeem-gh/the-annoying-traps',
  },
  {
    id: 'stronghold-reckoning',
    title: 'Stronghold Reckoning',
    icon: <Image className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
description: 'A 2D tower defense game that combines strategic gameplay, resource management, and advanced algorithms.',
tech: ['C++11', 'SFML', 'A* Algorithm', 'BFS'],
longDescription: `Stronghold Reckoning is a 2D tower defense game that combines strategic gameplay, resource management, 
and advanced algorithms. Players must defend their treasure vault from waves of enemies by building towers, 
casting spells, and managing resources effectively. The game features unique enemy AI powered by A* and BFS 
pathfinding and provides a dynamic and evolving gameplay experience.`,
    features: [
      'Strategic tower placement on a 2D grid map',
      'Resource management with Gold and Mana for upgrades',
      'Enemy AI leveraging A* and BFS pathfinding',
      'Dynamic environment and procedural enemy wave generation',
      'Undo/Redo functionality powered by stacks and linked lists',
      'Advanced enemy types, including stealth and flying units',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513623624998-81d7ee21229e?w=800',
        alt: 'Gameplay featuring tower defense setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800',
        alt: 'Enemy wave attacking the treasury'
      }
    ],
    demoUrl: 'https://example.com/stronghold-reckoning',
    githubUrl: 'https://github.com/abdullah-naeem-gh/Stronghold_Reckon',
  },
  {
    id: 'stable-diffusion-dashboard',
    title: 'Stable Diffusion Text-2-Image Generator Dashboard',
    description: 'A dashboard for generating images using Stable Diffusion, deployed via a custom Docker container on Runpod Serverless.',
    icon: <Image className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    tech: ['Docker', 'Runpod Serverless', 'Node.js', 'Express.js', 'EJS'],
    longDescription: `The Stable Diffusion Text-2-Image Generator Dashboard offers a seamless interface for generating images 
using advanced Stable Diffusion models. The project features a Dockerized setup with Realistic Vision v1.5 checkpoints, 
OpenPose and IP-Adapter ControlNets, and a Reactor Extension for enhanced face swap functionality. It is deployed on 
Runpod Serverless to ensure efficient and scalable performance.`,
    features: [
      'Custom Docker container with pre-configured Stable Diffusion checkpoints',
      'Interactive dashboard for text-to-image generation',
      'Integration of OpenPose and IP-Adapter for pose and facial resemblance control',
      'Reactor Extension for face swap capabilities',
      'EJS-based server-side rendered HTML pages',
      'Scalable deployment on Runpod Serverless',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1573497162065-1a49e15e0b98?w=800',
        alt: 'Dashboard interface showcasing text-to-image generation'
      },
      {
        url: 'https://images.unsplash.com/photo-1530639832998-bf4d11cf71fd?w=800',
        alt: 'Generated image samples from Stable Diffusion'
      }
    ],
    demoUrl: 'https://sd-dashboard-c95169e-sv2fkmpxsa-uc.a.run.app/',
    githubUrl: 'https://github.com/abdullah-naeem-gh/SD-dashboard',
  },
  {
    id: 'image-based-search-engine',
    title: 'Image-Based Search Engine',
    description: 'A search engine utilizing vector embeddings for image similarity.',
    icon: <Image className="w-6 h-6 text-green-600 dark:text-green-400" />,
    tech: ['MERN Stack', 'Multimodal Embeddings API', 'MySQL', 'Google Cloud'],
    longDescription: `The Image-Based Search Engine leverages advanced vector embeddings to provide a powerful tool for 
    image similarity search. Built with a robust MERN stack foundation and deployed on Google Cloud, it offers 
    a scalable and efficient solution for image-based retrieval systems.`,
    features: [
      'Vector embedding technology for accurate image similarity',
      'Seamless integration with Multimodal Embeddings API',
      'Scalable architecture using Google Cloud services',
      'Interactive and user-friendly interface for image searches',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=800',
        alt: 'Interface showing search results for similar images'
      },
      {
        url: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800',
        alt: 'Vector embeddings powering image search'
      }
    ],
    demoUrl: 'https://cloudrun-frontend-service-683908241893.us-central1.run.app/',
    githubUrl: 'https://github.com/abdullah-naeem-gh/image_Searc',

  },
  {
    id: 'crime-mapping-dashboard',
    title: 'Islamabad Crime Mapping Dashboard',
    description: 'A Heat Map Visualisation and criminals database handling dashboard for Islamabad.',
    icon: <Image className="w-6 h-6 text-green-600 dark:text-green-400" />,
    tech: ['MERN Stack', 'Tableau Data Visualization', 'MySQL'],
    longDescription: `A primarily Database Systems project, Comprehensive dashboard to manage and analyze crime data for Islamabad,
    visualizing crime patterns with heat maps, Polygon Map, Add Crimes, Criminals, Victims.`,
    features: [
      'User Authentication',
      'Data Visualization with Tableau',
      'Data handling with MySQL',
      'Interactive and user-friendly interface for crime mapping',
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=800',
        alt: 'ERD Diagram'
      },
      {
        url: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=800',
        alt: 'Website Interface'
      }
    ],
    demoUrl: 'www.example.com',
    githubUrl: 'https://github.com/abdullah-naeem-gh/Crime-Mapping-System',

  },
];