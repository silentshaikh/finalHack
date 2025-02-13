import { type SchemaTypeDefinition } from 'sanity'
import { productList } from './productlist'
import { userList } from './userlist'
import { orderList } from './orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productList,userList,orderList],
}
