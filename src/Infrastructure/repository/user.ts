import { getModelForClass } from "@typegoose/typegoose";
import { User } from "Domain/domain/user/entity";

export const repositor = getModelForClass(User)
