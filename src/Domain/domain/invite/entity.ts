import { prop } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { Invite as IInvite } from '../Invite'
import 'reflect-metadata'
import { User } from '../User'

@ObjectType()
export class Invite implements IInvite {
  @prop({ required: true })
  @Field({ description: 'Make of the vehicle' })
  public title = ''

  @prop({ required: true })
  @Field({ description: 'Make of the vehicle' })
  public ower: string
 
  @prop({ required: true })
  @Field({ description: 'Make of the vehicle' })
  public participants: User[] = []

  constructor(ower:string)
  constructor(ower:string, title?:string) {
    if(!ower&&!title)
    
    if(title) {this.title = title}
    else this.title = ower
  
    this.ower = ower

    repositor.create(this)
  }
}


// export const Repository = getRepository(Invite)
