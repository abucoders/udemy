export interface ChildProps {
  children: React.ReactNode;
}

export interface LngParams {
  params: Promise<{ locale: string }>;
}
