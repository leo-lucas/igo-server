import { Typegoose, prop } from 'typegoose'
import { Field, ObjectType } from 'type-graphql'
import { User as IUser } from '../User'
import 'reflect-metadata'

@ObjectType()
export class User extends Typegoose implements IUser {
  @prop({ required: true })
  @Field({ description: 'Make of the vehicle' })
  public name = ''

  @prop({ required: true })
  @Field({ description: 'Make of the vehicle' })
  public username: string

  @prop({ required: true })
  @Field({ description: 'Make of the vehicle' })
  public password = ''

  constructor(username = '') {
    super()
    this.username = username
  }
}

export function getRepository<T>(arg: T) {
  return new User().getModelForClass(arg)
}

export const Repository = getRepository(User)
