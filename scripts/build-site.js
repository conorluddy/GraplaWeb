#!/usr/bin/env node

/**
 * Site Build Script
 * 
 * This script builds your AgentStatic site for deployment.
 */

import { spawn } from 'child_process';
import { existsSync } from 'fs';

console.log('🚀 Building your AgentStatic site...');

// For now, use a simple HTML copy until AgentStatic core is implemented
async function buildSite() {
  // This will be replaced with actual AgentStatic build logic
  console.log('⚠️ Using development build - AgentStatic core implementation coming soon!');
  
  // Copy content for now
  const { cp, mkdir } = await import('fs/promises');
  
  await mkdir('build', { recursive: true });
  
  if (existsSync('content')) {
    await cp('content', 'build/content', { recursive: true });
  }
  
  if (existsSync('assets')) {
    await cp('assets', 'build/assets', { recursive: true });
  }
  
  console.log('✅ Site built successfully!');
  console.log('📦 Output directory: build/');
}

buildSite().catch(console.error);
