import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../components/context/UserContext'
import AddressInput from '../components/inputs/AddressInput'
import CityInput from '../components/inputs/CityInput'
import CompanyInput from '../components/inputs/CompanyInput'
import EmailInput from '../components/inputs/EmailInput'
import NameInput from '../components/inputs/NameInput'
import ZipInput from '../components/inputs/ZipInput'

const CustomerInfo = () => {
  const [name, setName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = React.useContext(UserContext)

  const isValidName = name != null && name.trim().length > 0;
  const isValidCompany = companyName != null && companyName.trim().length > 0;
  const isValidEmail = email != null && email.trim().length > 0;
  const isValidCity = city != null && city.trim().length > 0;
  const isValidAddress = address != null && address.trim().length > 0;
  const isValidZip = zip != null && zip.trim().length > 0;

  const submit = async (e) => {
    e.preventDefault();
    const response = { name, companyName, email, address, city, zip };
    setUser(response)
    if (isValidAddress && isValidName && isValidCompany && isValidEmail && isValidCity && isValidZip) {
      setRedirect(true)
    }
  }

  if (redirect) {
    return <Navigate to={"/products"} />
  }

  return (
    <div className='ui vertical mashead segment' style={{ marginTop: "50px" }}>
      <div className='ui center aligned container'>
        <div className="ui vertical left aligned footer segment">
          <div className="center aligned container" id='CustomerInfo'>
            <div style={{ margin: "30px" }}>
              <h1>Prosím zadejte všechny své údaje</h1>
            </div>
            <div style={{ margin: "20px" }}>
              <form className="ui form">
                <div className="ui stackable inverted divided grid">
                  <div className="eight wide column">
                    <NameInput user={user} setName={setName} name={name} />
                    <CompanyInput user={user} setCompanyName={setCompanyName} companyName={companyName} />
                    <EmailInput user={user} setEmail={setEmail} email={email} />
                  </div>

                  <div className="eight wide column">
                    <h3>Adresa</h3>
                    <CityInput city={city} setCity={setCity} user={user} />
                    <AddressInput user={user} setAddress={setAddress} address={address} />
                    <ZipInput user={user} setZip={setZip} zip={zip} />
                  </div>
                </div>

                <button
                  className="ui button"
                  type="submit"
                  style={{ marginTop: '30px' }}
                  onClick={submit}
                >
                  Potvrdit
                </button>

              </form>
            </div>
          </div>
        </div></div>
    </div >
  )
}

export default CustomerInfo