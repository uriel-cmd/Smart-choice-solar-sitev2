type BlogPostPageClientProps = {
  children?: React.ReactNode;
};

export function BlogPostPageClient({ children }: BlogPostPageClientProps) {
  return <>{children ?? null}</>;
}
