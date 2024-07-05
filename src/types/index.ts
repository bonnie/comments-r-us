export interface User {
  id: number;
  name: string;
  joinedAt: string;
  imageName: string;
}

export interface Comment {
  id: number;
  userId: number;
  createdAt: string;
  body: string;
}
