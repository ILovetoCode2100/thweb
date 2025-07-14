export const blogPosts = [
  {
    id: 1,
    slug: 'overcoming-anxiety-with-hypnotherapy',
    title: 'Overcoming Anxiety with Hypnotherapy: A Natural Approach',
    excerpt:
      'Discover how clinical hypnotherapy can help you manage anxiety naturally, without medication. Learn about the techniques that have helped hundreds find calm.',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Anxiety',
    image: '/blog/anxiety-relief.jpg',
  },
  {
    id: 2,
    slug: 'virtual-gastric-band-weight-loss',
    title: 'The Virtual Gastric Band: A Revolutionary Approach to Weight Loss',
    excerpt:
      'Learn how the Virtual Gastric Band hypnotherapy programme helps you feel satisfied with smaller portions, leading to sustainable weight loss.',
    date: '2024-03-10',
    readTime: '7 min read',
    category: 'Weight Management',
    image: '/blog/weight-management.jpg',
  },
  {
    id: 3,
    slug: 'sleep-better-hypnotherapy-guide',
    title: 'Sleep Better Tonight: How Hypnotherapy Tackles Insomnia',
    excerpt:
      'Struggling with sleep? Discover how hypnotherapy addresses the root causes of insomnia and helps you establish healthy sleep patterns naturally.',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Sleep',
    image: '/blog/better-sleep.jpg',
  },
  {
    id: 4,
    slug: 'building-confidence-scotland',
    title: 'Building Unshakeable Confidence: A Scottish Success Story',
    excerpt:
      'Read how local Edinburgh resident Sarah transformed her life through confidence-building hypnotherapy, advancing her career and relationships.',
    date: '2024-02-28',
    readTime: '4 min read',
    category: 'Confidence',
    image: '/blog/confidence-building.jpg',
  },
  {
    id: 5,
    slug: 'hypnotherapy-myths-debunked',
    title: '5 Common Hypnotherapy Myths Debunked',
    excerpt:
      "Separating fact from fiction: Learn the truth about hypnotherapy and why it's a safe, effective treatment recognised by medical professionals.",
    date: '2024-02-20',
    readTime: '8 min read',
    category: 'Education',
    image: '/blog/myths-debunked.jpg',
  },
  {
    id: 6,
    slug: 'stop-smoking-success-stories',
    title: 'From 20 a Day to Smoke-Free: Real Success Stories',
    excerpt:
      'Inspiring stories from clients who successfully quit smoking through hypnotherapy, including tips for maintaining your smoke-free life.',
    date: '2024-02-15',
    readTime: '6 min read',
    category: 'Stop Smoking',
    image: '/blog/stop-smoking.jpg',
  },
];

export type BlogPost = (typeof blogPosts)[0];
