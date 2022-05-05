import React, { useState } from 'react'
import ProductsFinal from '../components/finalPageComponents/ProductsFinal'
import UserFinal from '../components/finalPageComponents/UserFinal'
import FinalPrice from '../components/finalPageComponents/FinalPrice'
import ForeignCurrency from '../components/finalPageComponents/ForeignCurrency'
import EurProductsFinal from '../components/finalPageComponents/EurProductsFinal'
import EurFinalPrice from '../components/finalPageComponents/EurFinalPrice'


const FinalPage = () => {
  const [activeButton, setActiveButton] = useState(false)

  return (
    <>
      <div className='ui middle aligned center aligned grid' style={{ marginTop: "50px" }}>
        <div className="ui vertical center aligned footer segment">
          <h1>Rekapitulace objednávky</h1>
          <div style={{ marginTop: "20px" }}>
            <h3>Údaje k objednávce:</h3>
            <UserFinal />
          </div>
          <div style={{ marginTop: "20px" }}>
            <h3>Objednané produkty:</h3>
            {activeButton ? <EurProductsFinal /> : <ProductsFinal />}
          </div>
        </div>
      </div>
      <div className='ui middle aligned center aligned grid' style={{ marginTop: "50px" }}>
        <div className="ui vertical right aligned footer segment">
          <h3>Rekapitulace ceny:</h3>
          {activeButton ? <EurFinalPrice /> : <FinalPrice />}
          {activeButton ? <button onClick={() => (setActiveButton(false))} className="tiny ui button">Přejete si platit v Korunách? </button> : <button onClick={() => (setActiveButton(true))} className="tiny ui button">Přejete si platit v Eurech? </button>}
        </div>
        <div className="ui vertical right aligned footer segment" style={{ marginLeft: "15rem" }}>
          <h3>Věděli jste že u nás můžete platit cizí měnou?</h3>
          <ForeignCurrency />
        </div>
      </div>
    </>
  )
}

export default FinalPage