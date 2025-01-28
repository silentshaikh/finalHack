import { type SchemaTypeDefinition } from 'sanity'
import { productList } from './productlist'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productList],
}
