import { User } from "./User";

export interface Invite {
  title: string
  ower: string
  participants: User[]
}
