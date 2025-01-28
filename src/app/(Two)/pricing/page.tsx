import PriceCompay from "@/components/PriceCompay/PriceCompay"
import PriceFaq from "@/components/PriceFaq/PriceFaq"
import PriceHero from "@/components/PriceHero/PriceHero"
import TrialSectionCont from "@/components/TrialSectionCont/TrialSectionCont"


function Pricing() {
  return (
    <main>
      <PriceHero/>
      <PriceCompay/>
      <PriceFaq/>
      <TrialSectionCont/>
    </main>
  )
}

export default Pricing
