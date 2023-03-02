import {Table} from "./table";
import {User} from "./user";
import {TableStatus} from "./table-status";

export interface TableDetails {
  id: number;
  name: string;
  status: TableStatus
  users: User[];
}
