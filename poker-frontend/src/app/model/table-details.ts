import {Table} from "./table";
import {User} from "./user";

export interface TableDetails {
  id: number;
  name: string;
  users: User[];
}
