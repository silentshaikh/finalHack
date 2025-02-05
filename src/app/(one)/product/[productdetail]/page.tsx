import CartAlert from "@/components/CartAlert/CartAlert"
import CompanyBar from "@/components/CompanyBar/CompanyBar"
import EmptyAlert from "@/components/EmptyAlert/EmptyAlert"
import OtherProduct from "@/components/OtherProduct/OtherProduct"
import OtherSeller from "@/components/OtherSeller/OtherSeller"
import ProdDetail from "@/components/ProdDetail/ProdDetail"
// import ReviewSection from "@/components/ReviewSection/ReviewSection"
function ProductDetail({params}:{params:{productdetail:string}}) {
  return (
    <main>
      {/* {params.productdetail} */}
      <ProdDetail id={params.productdetail} />
      {/* <ReviewSection/> */}
      <OtherProduct/>
      <OtherSeller/>
      <EmptyAlert/>
      <CartAlert/>
      <CompanyBar/>
    </main>
  )
}

export default ProductDetail
