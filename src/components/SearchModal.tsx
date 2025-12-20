'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import { createPortal } from 'react-dom';
import { Search as SearchIcon } from 'lucide-react';
import { Post } from '@/types/post';

interface CommandItem {
  label: string;
  href: string;
  shortcut?: string;
}

const items: CommandItem[] = [
  { label: '首页 / Home', href: '/' },
  { label: '博客 / Blog', href: '/blog', shortcut: 'B' },
  { label: '关于 / About', href: '/about', shortcut: 'A' },
];

interface SearchModalProps {
  posts: Post[];
}

const SearchModal = ({ posts }: SearchModalProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === 'k';
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault(); // prevent browser default focus to address bar
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text bg-surface/60 border border-border/60 transition-colors"
      >
        搜索 / 快捷命令
        <span className="text-[11px] font-mono bg-black/30 text-text px-1.5 py-0.5 rounded border border-border/60">
          ⌘K
        </span>
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[80] flex items-start justify-center pt-24 px-4">
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
            <Command
              label="全局搜索"
              className="relative w-full max-w-2xl clear-panel rounded-2xl p-4 text-text"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-3 pb-2 mb-2">
                <SearchIcon className="w-5 h-5 text-indigo-400 shrink-0" />
                <Command.Input
                  autoFocus
                  placeholder="输入以搜索页面或命令..."
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-text-secondary"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-text-secondary hover:text-text transition-colors text-sm"
                >
                  Esc
                </button>
              </div>
              <Command.List className="max-h-80 overflow-y-auto">
                <Command.Empty className="px-3 py-2 text-sm text-text-secondary">
                  No results found.
                </Command.Empty>

                <Command.Group heading="导航" className="text-xs uppercase tracking-wide text-text-secondary px-2">
                  {items.map((item) => (
                    <Command.Item
                      key={item.href}
                      value={item.label}
                      onSelect={() => handleSelect(item.href)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-indigo-500/20 data-[selected=true]:text-indigo-100"
                    >
                      <span>{item.label}</span>
                      {item.shortcut ? (
                        <span className="text-[11px] font-mono text-text-secondary border border-border/60 rounded px-1.5 py-0.5">
                          {item.shortcut}
                        </span>
                      ) : null}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Posts" className="text-xs uppercase tracking-wide text-text-secondary px-2">
                  {posts.map((post) => (
                    <Command.Item
                      key={post.slug}
                      value={`${post.title} ${post.summary}`}
                      onSelect={() => handleSelect(`/blog/${post.slug}`)}
                      className="flex flex-col items-start gap-1 px-3 py-2 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-indigo-500/20 data-[selected=true]:text-indigo-100"
                    >
                      <div className="w-full flex items-center justify-between gap-2">
                        <span className="font-medium">{post.title}</span>
                        <span className="text-[11px] text-text-secondary">
                          {post.date ? new Date(post.date).toLocaleDateString('zh-CN') : ''}
                        </span>
                      </div>
                      {post.summary ? (
                        <p className="text-xs text-text-secondary line-clamp-2">
                          {post.summary}
                        </p>
                      ) : null}
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </div>,
          document.body,
        )}
    </>
  );
};

export default SearchModal;
