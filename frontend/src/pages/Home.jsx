
import Banner from "../components/Banner/Banner"
import Cards from "../components/Cards/Cards"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { vehicles } from "../scripts/VehiclesData"
const Home =()=>{

    return(
        <div>
            <Header/>
            <Banner/>
            {vehicles.map((vehicle, index) => (
        <Cards key={index} vehicle={vehicle} />
      ))}
      <Footer/>
        </div>
    )
}

export default Home