'use client';

import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Simple Markdown to HTML conversion (for demonstration purposes)
  // In production, you'd use a proper Markdown parser like marked or remark
  const renderMarkdown = (text: string) => {
    let html = text
      // Headers
      .replace(/^#{6}\s+([^\n]+)/gm, '<h6 class="text-lg font-semibold mb-3 mt-6">$1</h6>')
      .replace(/^#{5}\s+([^\n]+)/gm, '<h5 class="text-xl font-semibold mb-3 mt-6">$1</h5>')
      .replace(/^#{4}\s+([^\n]+)/gm, '<h4 class="text-2xl font-semibold mb-3 mt-6">$1</h4>')
      .replace(/^#{3}\s+([^\n]+)/gm, '<h3 class="text-2xl font-semibold mb-4 mt-8">$1</h3>')
      .replace(/^#{2}\s+([^\n]+)/gm, '<h2 class="text-3xl font-bold mb-4 mt-10">$1</h2>')
      .replace(/^#{1}\s+([^\n]+)/gm, '<h1 class="text-4xl font-bold mb-6 mt-12">$1</h1>')
      
      // Paragraphs
      .replace(/^(?!<h[1-6]|\s*\n|```)([^\n]+)/gm, '<p class="mb-4">$1</p>')
      
      // Lists
      .replace(/^-\s+([^\n]+)/gm, '<ul class="list-disc pl-6 mb-4"><li class="mb-2">$1</li></ul>')
      .replace(/^\d+\.\s+([^\n]+)/gm, '<ol class="list-decimal pl-6 mb-4"><li class="mb-2">$1</li></ol>')
      
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)```/gm, '<pre class="bg-surface border border-border rounded-lg p-4 mb-6 overflow-x-auto"><code class="font-mono text-sm">$2</code></pre>')
      
      // Inline code
      .replace(/`([^`]+)`/gm, '<code class="bg-surface/70 border border-border/60 rounded px-1.5 py-0.5 font-mono text-sm">$1</code>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gm, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent/80 transition-colors underline">$1</a>')
      
      // Bold
      .replace(/\*\*([^*]+)\*\*/gm, '<strong class="font-semibold">$1</strong>')
      
      // Italic
      .replace(/\*([^*]+)\*/gm, '<em class="italic">$1</em>')
      
      // Horizontal rules
      .replace(/^---$/gm, '<hr class="border-border/50 my-12">')
      
      // Blockquotes
      .replace(/^>\s+([^\n]+)/gm, '<blockquote class="border-l-4 border-border pl-4 italic text-text-secondary mb-4">$1</blockquote>');
    
    // Clean up nested lists
    html = html.replace(/<\/ul><\/p>\s*<ul/g, '<ul');
    html = html.replace(/<\/ol><\/p>\s*<ol/g, '<ol');
    
    return html;
  };

  return (
    <div 
      className="prose max-w-none prose-headings:text-text prose-p:text-text prose-a:text-accent prose-code:text-text prose-blockquote:text-text-secondary"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
};

export default MarkdownRenderer;
