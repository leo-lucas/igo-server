import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { Lista, Repository } from '../Model/Lista'

@Resolver(Lista)
export class ListaResolver {
  @Query(() => [Lista])
  async listas() {
    return Repository.find()
  }

  @Query(() => [Lista])
  async lista(name: string) {
    return Repository.find({ name })
  }

  @Mutation(returns => Lista)
  async create(@Arg('username') username: string) {
    return Repository.create(new Lista(username))
  }
}
