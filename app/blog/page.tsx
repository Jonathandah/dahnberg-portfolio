import { Container } from '@/components/layout/Container';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Badge } from '@/components/ui/badge';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2024-02-15',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Blog</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Surprise surprise another developer with hot takes, too many opinions and thinks he can do it better than
            everyone else. If you&apos;re in to that here is some of my thoughts.
          </p>
          <div className="mt-10 space-y-16 border-t border-border pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-muted-foreground/90">
                    {post.date}
                  </time>
                  <Badge variant="secondary">{post.category.title}</Badge>
                  {/* If blog is newer than 2 weeks show badge */}
                  {new Date(post.datetime) > new Date(Date.now() - 12096e5) && (
                    <Badge className="hover:bg-primary">New</Badge>
                  )}
                </div>
                <div className="group relative">
                  <div className="flex mt-3 items-center">
                    <h3 className="text-lg font-semibold leading-6 text-foreground group-hover:underline">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <ArrowRightIcon className="h-4 w-4 text-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:ml-2" />
                  </div>

                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
