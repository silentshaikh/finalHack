import CompanyBar from "@/components/CompanyBar/CompanyBar"
import OtherProduct from "@/components/OtherProduct/OtherProduct"
import OtherSeller from "@/components/OtherSeller/OtherSeller"
import ProdDetail from "@/components/ProdDetail/ProdDetail"


function ProductDetail({params}:{params:{productdetail:string}}) {
  return (
    <main>
      {/* {params.productdetail} */}
      <ProdDetail id={params.productdetail} />
      <OtherProduct/>
      <OtherSeller/>
      <CompanyBar/>
    </main>
  )
}

export default ProductDetail
