'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

const Pre = ({ children, ...props }: PreProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!preRef.current) return;
    const code = preRef.current.innerText;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  useEffect(() => {
    setCopied(false);
  }, [children]);

  return (
    <div className="mb-6 rounded-xl border border-white/10 overflow-hidden bg-[#0f1116] flex flex-col">
      {/* MacOS 风格标题栏 - 依靠父容器切出顶部圆角 */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e1e1e] border-b border-white/5 rounded-none m-0">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-text-secondary hover:text-indigo-300 hover:bg-white/5 transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      {/* 代码内容 - 依靠父容器切出底部圆角 */}
      <pre
        ref={preRef}
        {...props}
        className={`overflow-x-auto p-4 text-sm bg-[#0f1116] w-full !m-0 !rounded-none ${props.className ?? ''}`}
      >
        {children}
      </pre>
    </div>
  );
};

export default Pre;
