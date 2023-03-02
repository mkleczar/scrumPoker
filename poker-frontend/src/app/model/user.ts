import {UserRole} from "./user-role";

export interface User {
  id: number;
  nick: string;
  role: UserRole;
  vote?: number;
}
