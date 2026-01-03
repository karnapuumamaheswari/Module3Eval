const RestaurantCard = ({date,isAdmin,onDelete,onEdit}) => {
    return(
        <div style={{border: "1px solid gray",padding:10,margin:10}}>
           <img
           src = {DataTransfer.image || 
            "https"//via.placeholder.com/200
           }  width="200"/>

           <h3>{data.restaurantName}</h3>
           <p>{data.address}</p>
           <p>Type:{data.type}</p>
           <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>

           {isAdmin && (
            <>
                <button onClick={()=>
                    onEdit(data.restaurantID)}>Edit</button>
                <button onClick={()=>
                    onDelete(data.restaurantID)}>Delete</button>
            </>
           )}
        </div>
    );
};

export default RestaurantCard;