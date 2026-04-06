type BlogPageClientProps = {
  children?: React.ReactNode;
};

export function BlogPageClient({ children }: BlogPageClientProps) {
  return <>{children ?? null}</>;
}
