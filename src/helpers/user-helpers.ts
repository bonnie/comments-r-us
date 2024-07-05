import { User } from "@/types";

// just pass a random userID rather than having to log in
//   or select from a dropdown
export function getRandomUserId(users: User[]) {
  const rando = users[Math.floor(Math.random() * users.length)];
  return rando.id;
}
