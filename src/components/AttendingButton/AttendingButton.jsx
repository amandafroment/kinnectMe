import React from 'react'
import { useState, useEffect } from "react";

async function AttendingButton({eventId, userId}) {
    const [addAttendee, setAddAttendee] = useState([]);
    if 

    const updateEvent = await eventsAPI.setAddAttendee(userId, eventId)

  return (
    <div>
        <form >
            <input type="submit" name="attendees" ><button></button>
        </form>
    </div>
  )
}

export default AttendingButton