import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/src/configs/config';

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();

    // Basic input validation
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Process the message with context awareness
    const response = processMessage(message, context);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function processMessage(message: string, context: any): string {
  const lowercaseMsg = message.toLowerCase();

  // Handle greetings
  if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi')) {
    return `Hello! I'm here to help you learn more about ${context.author}. What would you like to know?`;
  }

  // Handle background/experience queries
  if (
    lowercaseMsg.includes('background') ||
    lowercaseMsg.includes('experience') ||
    lowercaseMsg.includes('work')
  ) {
    return `${context.author} is currently working as a ${context.currentRole}. ${context.description}`;
  }

  // Handle education queries
  if (
    lowercaseMsg.includes('education') ||
    lowercaseMsg.includes('study') ||
    lowercaseMsg.includes('university')
  ) {
    return `${context.author} is pursuing ${context.education}.`;
  }

  // Handle technology/skills queries
  if (
    lowercaseMsg.includes('tech') ||
    lowercaseMsg.includes('skills') ||
    lowercaseMsg.includes('technologies')
  ) {
    return `${context.author} is proficient in various technologies including: ${context.technologies.join(', ')}.`;
  }

  // Handle contact queries
  if (
    lowercaseMsg.includes('contact') ||
    lowercaseMsg.includes('email') ||
    lowercaseMsg.includes('reach')
  ) {
    return `You can reach ${context.author} through:
- Email: ${context.contact.email}
- GitHub: github.com/${context.contact.github}
- LinkedIn: ${context.contact.linkedin}
- Discord: ${context.contact.discord}`;
  }

  // Handle music-related queries
  if (
    lowercaseMsg.includes('music') ||
    lowercaseMsg.includes('song') ||
    lowercaseMsg.includes('artist')
  ) {
    return `${context.author} is not just a developer but also a musician! You can find their music on Spotify, Apple Music, and YouTube under the name "${context.author}".`;
  }

  // Default response
  return `I can help you learn about ${context.author}'s background, technical skills, education, current work, or how to get in touch. What would you like to know?`;
}
