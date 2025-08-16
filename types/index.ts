export interface ChildProps {
  children: React.ReactNode;
}

export interface LngParams {
  params: Promise<{ locale: string }>;
}

// Course interface
export interface ICourse {
  title: string;
  previewImage: string;
  level: string;
  author: {
    image: string;
    name: string;
  };
  oldPrice: number;
  currentPrice: number;
}

// Category interface
export interface ICategory {
  label: string;
  icon: string;
}

// Instructors interface
export interface IInstructor {
  name: string;
  image: string;
  job: string;
}
