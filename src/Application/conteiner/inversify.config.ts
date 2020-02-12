import { Container } from "inversify";
import { TYPES } from "./types";


const myContainer = new Container();
myContainer.bind<User>(TYPES.User).to(Ninja);
myContainer.bind<Invite>(TYPES.Invite).to(Katana);
export { myContainer };