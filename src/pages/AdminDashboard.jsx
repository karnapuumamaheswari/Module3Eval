import { useState } from "react";
import {useNavigate} from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import SearchFilter from "../components/SearchFilter";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [restaurants,setRestaurant] = useState(
        JSON.parse(localStorage.getItem("restaurants")) || []
    );

    const [form , setForm] = useState({
        restaurantName : "",
        address : "",
        type : "Rajasthani",
        parkingLot : "true",
        image: ""
    });

    const [search,setSearch] = useState("");
    const [type,setType] = useState("");
    const [parking,setParking] = useState("");

    const handleAdd = () => {
        if(! form.restaurantName || !form.address || form.image){
            alert("Form cannot be empty");
            return;
        }

        const newRestaurant = {
            restaurantID: Date.now(),
            restaurantName : form.restaurantName,
            address : form.address,
            type : form.type,
            parkingLot : form.parkingLot === "true",
            image : form.image
        };

        const updated = [...restaurants,newRestaurant];
        setRestaurant(updated);
        localStorage.setItem("restaurants",JSON.stringify(updated));
    };

    const handleDelete = (id) => {
        const updated = restaurants.filter((r) => r.restaurantID !== id);
        setRestaurant(updated);
        localStorage.setItem("restaurants",JSON.stringify(updated));
    };

    const filtered = restaurants.filter((r) => r.restaurantName.toLowerCase().include(search.toLowerCase()));

    return (
        <div>
            <h2>
                Admin Dashboard
            </h2>
            <SearchFilter 
            search={search}
            setSearch={setSearch}
            type={type}
            setType={setType}
            parking={parking}
            setParking={setParking}/>

            <h3>Add Restaurant</h3>
            <input placeholder="Name" onChange={(e) => setForm({...form,restaurantName:e.target.value})} />
            <input placeholder="Address" onChange={(e) => setForm({...form,address:e.target.value})} />
            <input placeholder="image" onChange={(e) => setForm({...form,image:e.target.value})} />

            <button onClick={handleAdd} >Add</button>
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
    );
};

export default AdminDashboard;