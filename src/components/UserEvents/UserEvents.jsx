// import React from 'react'
// import * as eventsAPI from "../../utilities/events-api";

// function UserEvents({user}) {
//     const [showAllForUser, setShowForUser] = useState([]);
    
//   return (
//     <>
//       <div className="find-events-list">
//         <div>
//           {showAllForUser.map((event) => {
//             return (
//               <div className="find-event-card">
//                 <h2 className="bold-header">{event.name.toUpperCase()}</h2>
//                 <p>
//                   <span className="bold-header">Time & Place:</span>{" "}
//                   {event.date}
//                 </p>
//                 <p>
//                   <span className="bold-header">Location:</span>{" "}
//                   {event.location}
//                 </p>
//                 <p>
//                   <span className="bold-header">Address:</span> {event.address}
//                 </p>
//                 <p>
//                   <span className="bold-header">All The Details: </span>
//                   {event.details}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserEvents