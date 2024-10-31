import { Outlet , useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Loading from "./../ui/Loading"
import SearchOrder from "../features/order/SearchOrder"
 
const AppLayout = () => {

  const navigation  = useNavigation()
  const isLoading = navigation.state ==='loading'
  
  return (
    <div className="grid">
    {isLoading &&<Loading/>}
    <Header/>
    <SearchOrder/>
    <main>
       <Outlet/>
    </main>
    
    <CartOverview/>
    </div>
  )
}

export default AppLayout