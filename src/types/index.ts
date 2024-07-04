export interface User {
  id: number;
  name: string;
  joinedAt: Date;
  imageName: string;
}

export interface Comment {
  id: number;
  userId: number;
  createdAt: Date;
  body: string;
}
