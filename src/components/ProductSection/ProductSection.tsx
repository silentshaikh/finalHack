import React from 'react'
import ProductList from '../ProductList/ProductList'
import Pagination from '../Pagination/Pagination'

function ProductSection() {
  return (
    <section className='pb-10'>
     <ProductList/> 
     <Pagination/>
    </section>
  )
}

export default ProductSection
