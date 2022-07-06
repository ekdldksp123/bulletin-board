export interface Post {
  id: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
}

// post 추가용 타입 선언
export type AddPost<T> = { [key in keyof T]?: T[key] };
