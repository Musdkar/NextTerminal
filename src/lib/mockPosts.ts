import { Post } from '@/types/post';
import { calculateReadTime, countWords } from './postUtils';

export const posts: Post[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs-14',
    title: 'Next.js 14 入门指南：App Router 深度解析',
    summary: '探索 Next.js 14 的 App Router 架构，学习如何构建高性能的现代化 Web 应用。',
    content: '# Next.js 14 入门指南：App Router 深度解析\n\nNext.js 14 引入了 App Router，这是一个全新的路由系统，基于 React Server Components 和 Suspense 构建。本文将深入探讨 App Router 的核心概念和最佳实践。\n\n## 什么是 App Router？\n\nApp Router 是 Next.js 14 中引入的新路由系统，它替代了传统的 Pages Router。App Router 基于以下核心技术：\n\n- React Server Components (RSC)\n- Suspense\n- Streaming SSR\n- Parallel Routes\n\n## 核心概念\n\n### 1. 路由结构\n\nApp Router 使用文件系统路由，与 Pages Router 类似，但有一些关键区别：\n\n```\napp/\n├── layout.tsx          # 根布局\n├── page.tsx            # 首页\n├── blog/\n│   ├── layout.tsx      # 博客布局\n│   ├── page.tsx        # 博客列表\n│   └── [slug]/\n│       └── page.tsx    # 博客详情\n└── about/\n    └── page.tsx        # 关于页面\n```\n\n### 2. React Server Components\n\n默认情况下，App Router 中的组件是 React Server Components (RSC)，这意味着它们在服务器上渲染，不会向客户端发送 JavaScript。\n\n### 3. 数据获取\n\nApp Router 支持多种数据获取方式：\n\n- `fetch` API（自动缓存）\n- `async/await` 直接在组件中使用\n- `generateStaticParams` 用于静态生成\n\n## 最佳实践\n\n1. **优先使用 Server Components**\n2. **合理使用 Client Components**（通过 `\'use client\'` 指令）\n3. **利用布局嵌套**\n4. **使用 `generateStaticParams` 进行静态生成**\n5. **优化数据获取**\n\n## 总结\n\nNext.js 14 的 App Router 是一个强大的新功能，它允许开发者构建更高效、更现代化的 Web 应用。通过合理使用 React Server Components 和其他 App Router 特性，你可以显著提高应用的性能和用户体验。\n\n开始使用 App Router 吧，探索 Next.js 的未来！',
    date: '2024-05-20',
    readTime: 3,
    wordCount: 500,
  },
  {
    id: '2',
    slug: 'typescript-tips-for-better-code',
    title: 'TypeScript 最佳实践：写出更优雅的类型代码',
    summary: '分享一些 TypeScript 实用技巧，帮助你写出更优雅、更可靠的类型代码。',
    content: '# TypeScript 最佳实践：写出更优雅的类型代码\n\nTypeScript 是 JavaScript 的超集，它添加了静态类型检查。本文将分享一些 TypeScript 实用技巧，帮助你写出更优雅、更可靠的类型代码。\n\n## 1. 使用类型别名和接口\n\n### 类型别名\n\n```typescript\ntype User = {\n  id: string;\n  name: string;\n  email: string;\n};\n```\n\n### 接口\n\n```typescript\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n```\n\n## 2. 优先使用 `const` 断言\n\n```typescript\nconst colors = [\'red\', \'green\', \'blue\'] as const;\ntype Color = typeof colors[number];\n// Color = \'red\' | \'green\' | \'blue\'\n```\n\n## 3. 使用可选链和空值合并\n\n```typescript\n// 可选链\nconst userEmail = user?.email;\n\n// 空值合并\nconst displayName = user?.name ?? \'Unknown\';\n```\n\n## 4. 合理使用泛型\n\n```typescript\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\nconst result = identity<string>(\'hello\');\n```\n\n## 5. 使用 `unknown` 替代 `any`\n\n```typescript\n// 不好\nfunction processData(data: any) {\n  // ...\n}\n\n// 好\nfunction processData(data: unknown) {\n  if (typeof data === \'string\') {\n    // 类型安全\n  }\n}\n```\n\n## 6. 使用 `readonly` 修饰符\n\n```typescript\ninterface Config {\n  readonly apiKey: string;\n  readonly baseUrl: string;\n}\n\nconst config: Config = {\n  apiKey: \'123\',\n  baseUrl: \'https://api.example.com\',\n};\n\n// 错误：无法修改只读属性\nconfig.apiKey = \'456\';\n```\n\n## 7. 使用 `as const` 进行更精确的类型推断\n\n```typescript\nconst theme = {\n  colors: {\n    primary: \'#58a6ff\',\n    secondary: \'#3fb950\',\n  },\n} as const;\n\n// 类型：{ colors: { readonly primary: "#58a6ff"; readonly secondary: "#3fb950"; } }\n```\n\n## 8. 合理使用类型守卫\n\n```typescript\nfunction isUser(obj: unknown): obj is User {\n  return typeof obj === \'object\' && obj !== null && \'id\' in obj;\n}\n\nif (isUser(data)) {\n  // 类型安全：data 是 User 类型\n  console.log(data.email);\n}\n```\n\n## 9. 使用 `never` 类型处理不可能的情况\n\n```typescript\ntype Shape = Circle | Square;\n\nfunction getArea(shape: Shape): number {\n  switch (shape.kind) {\n    case \'circle\':\n      return Math.PI * shape.radius ** 2;\n    case \'square\':\n      return shape.side ** 2;\n    default:\n      // 确保所有情况都被处理\n      const exhaustiveCheck: never = shape;\n      return exhaustiveCheck;\n  }\n}\n```\n\n## 总结\n\nTypeScript 是一个强大的工具，它可以帮助你写出更可靠、更易于维护的代码。通过遵循上述最佳实践，你可以充分利用 TypeScript 的优势，写出更优雅的类型代码。\n\n记住：类型系统是为了帮助你，而不是限制你。合理使用 TypeScript，让你的代码更安全、更高效！',
    date: '2024-05-15',
    readTime: 4,
    wordCount: 600,
  },
  {
    id: '3',
    slug: 'building-a-modern-css-system',
    title: '构建现代化的 CSS 系统：从设计 tokens 到组件',
    summary: '学习如何构建一个可扩展、可维护的现代化 CSS 系统，包括设计 tokens、CSS 架构和最佳实践。',
    content: '# 构建现代化的 CSS 系统：从设计 tokens 到组件\n\nCSS 系统是现代 Web 开发的核心部分。一个好的 CSS 系统可以提高开发效率，确保设计一致性，并使代码更易于维护。本文将介绍如何构建一个现代化的 CSS 系统。\n\n## 1. 设计 Tokens\n\n设计 tokens 是设计系统的基础，它们是可复用的设计决策的抽象表示。设计 tokens 包括：\n\n- 颜色\n- 字体\n- 间距\n- 圆角\n- 阴影\n\n### 示例：CSS Variables\n\n```css\n:root {\n  /* 颜色 */\n  --color-primary: #58a6ff;\n  --color-secondary: #3fb950;\n  --color-text: #c9d1d9;\n  --color-background: #0d1117;\n  \n  /* 字体 */\n  --font-family: \'Inter\', system-ui, sans-serif;\n  --font-family-mono: \'JetBrains Mono\', monospace;\n  \n  /* 间距 */\n  --spacing-xs: 0.25rem;\n  --spacing-sm: 0.5rem;\n  --spacing-md: 1rem;\n  --spacing-lg: 2rem;\n  --spacing-xl: 3rem;\n  \n  /* 圆角 */\n  --radius-sm: 0.25rem;\n  --radius-md: 0.5rem;\n  --radius-lg: 0.75rem;\n}\n```\n\n## 2. CSS 架构\n\n### 2.1 模块化 CSS\n\n使用模块化 CSS 可以避免样式冲突，提高代码复用性。常见的模块化 CSS 方案包括：\n\n- CSS Modules\n- Tailwind CSS\n- CSS-in-JS\n- PostCSS + CSS Modules\n\n### 2.2 BEM 命名规范\n\nBEM (Block, Element, Modifier) 是一种 CSS 命名规范，它可以使 CSS 类名更具可读性和可维护性。\n\n```css\n/* Block */\n.card {\n  /* ... */\n}\n\n/* Element */\n.card__title {\n  /* ... */\n}\n\n/* Modifier */\n.card--featured {\n  /* ... */\n}\n```\n\n## 3. 响应式设计\n\n响应式设计是现代 Web 开发的必备技能。使用 CSS Grid 和 Flexbox 可以轻松实现响应式布局。\n\n### 示例：CSS Grid\n\n```css\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: var(--spacing-md);\n}\n```\n\n### 示例：Flexbox\n\n```css\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n}\n\n.flex-item {\n  flex: 1 1 300px;\n}\n```\n\n## 4. 性能优化\n\nCSS 性能优化是构建现代化 CSS 系统的重要部分。以下是一些 CSS 性能优化技巧：\n\n### 4.1 减少 CSS 文件大小\n\n- 使用 CSS 压缩工具\n- 移除未使用的 CSS\n- 使用 CSS Modules 或 Tailwind CSS 避免样式冲突\n\n### 4.2 优化 CSS 选择器\n\n- 避免使用复杂的 CSS 选择器\n- 优先使用类选择器\n- 避免使用通配符选择器\n\n### 4.3 使用 CSS 变量\n\nCSS 变量可以减少重复代码，提高代码可维护性。\n\n## 5. 可访问性\n\n可访问性是现代 Web 开发的重要部分。以下是一些 CSS 可访问性最佳实践：\n\n### 5.1 确保足够的对比度\n\n使用 WCAG 2.1 标准确保文本和背景之间有足够的对比度。\n\n### 5.2 使用语义化 HTML\n\n语义化 HTML 可以提高页面的可访问性，减少不必要的 CSS。\n\n### 5.3 确保键盘可访问性\n\n确保所有交互元素都可以通过键盘访问。\n\n## 6. 工具链\n\n以下是构建现代化 CSS 系统的常用工具：\n\n- **PostCSS**: CSS 处理器\n- **Tailwind CSS**: 实用优先的 CSS 框架\n- **CSS Modules**: 模块化 CSS\n- **Stylelint**: CSS 代码检查工具\n- **PurgeCSS**: 移除未使用的 CSS\n\n## 总结\n\n构建现代化的 CSS 系统需要考虑多个方面，包括设计 tokens、CSS 架构、响应式设计、性能优化和可访问性。通过遵循最佳实践，你可以构建一个可扩展、可维护的 CSS 系统，提高开发效率，确保设计一致性。\n\n记住：好的 CSS 系统应该是简单的、一致的和可维护的。',
    date: '2024-05-10',
    readTime: 5,
    wordCount: 700,
  },
];

export const getPosts = (): Post[] => {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getLatestPosts = (limit: number = 3): Post[] => {
  return getPosts().slice(0, limit);
};