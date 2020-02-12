import { getModelForClass } from "@typegoose/typegoose";
import { Invite } from "Domain/domain/invite/entity";

export const repositor = getModelForClass(Invite)
