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
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
    </form>
  )
}

export default SearchOrder