import { useState } from "react";
import RestaurantCard from ".../components/RestaurantCard";

import SearchFilter from ".../components/SearchFilter";
const CustomerDashboard = () => {
    const [restaurants] = useState(
        JSON.parse(localStorage.getItem("restaurants")) || []
    );
    const [search,setSearch] = useState(""

    );
    const [type,setType] = useState("");
    const [parking,setParking] = useState("");
    const filtered = restaurants.filter((r) => r.restaurantName.toLowerCase().include(search.toLowerCase()));
    return (
        <div>
            <h2>
                Customer Dashboard
            </h2>
            <SearchFilter 
            search={search}
            setSearch={setSearch}
            type={type}
            setType={setType}
            parking={parking}
            setParking={setParking}/>
                        {filtered.map((r) => (
                <RestaurantCard 
                key={r.restaurantID}
                data = {r}
                isAdmin
                onDelete={handleDelete}
                onEdit={(id)=> navigate(`/admin/update/${id}`)}/>

            )
            ) }
        </div>
    )
}