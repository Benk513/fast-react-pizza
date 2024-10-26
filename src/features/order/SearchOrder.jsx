import { useState } from "react";
import { useNavigate } from "react-router-dom";

 
const SearchOrder = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate()

    const handleSearch = (e)=> {
        e.preventDefault()
        if(!search) return;
        navigate(`/order/${search}`)
        setSearch("")
    }

  return (
    <form onSubmit={handleSearch}>
        <input 
        type="text" 
        placeholder='Search for an order'      
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchOrder