// import LoadingPage from "@/components/LoadingPage/LoadingPage"
// import ErrorPage from "@/components/ErrorPage/ErrorPage"
import ProductBar from "@/components/ProductBar/ProductBar"
import ProductSection from "@/components/ProductSection/ProductSection"
import ShopCollection from "@/components/ShopCollection/ShopCollection"


function Product() {
  return (
    <main>
      <ShopCollection/>
      <ProductBar/>
      <ProductSection/>
      {/* <LoadingPage/> */}
     
    </main>
  )
}

export default Product
