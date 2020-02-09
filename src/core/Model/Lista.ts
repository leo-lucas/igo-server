import { Typegoose, prop } from 'typegoose'
import {
  Field,
  ObjectType,
  Resolver,
  Query,
  InputType,
  ArgsType,
} from 'type-graphql'
import 'reflect-metadata'

@ObjectType()
export class Lista extends Typegoose {
  @prop({ required: true })
  @Field({ description: 'Make of the vehicle' })
  public name: string

  constructor(name = '') {
    super()
    this.name = name
  }
}

export function getRepository<T>(arg: T) {
  return new Lista().getModelForClass(arg)
}

export const Repository = getRepository(Lista)
