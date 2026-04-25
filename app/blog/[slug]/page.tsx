import { notFound } from 'next/navigation';
import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { blogPosts } from '@/lib/site-data';

type BlogPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={post.category} title={post.title} description={post.excerpt} />
      <article className="mt-10 card-surface rounded-[1.75rem] p-8">
        <div className="space-y-5 text-white/75">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="leading-8">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/blog">Back to blog</Button>
          <Button href="/quote" variant="secondary">
            Request a quote
          </Button>
        </div>
      </article>
    </div>
  );
}
