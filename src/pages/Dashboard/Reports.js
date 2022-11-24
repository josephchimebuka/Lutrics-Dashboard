import React, { useEffect, useState } from 'react'
import { getActivityReports } from '../../api/calls'

function Reports() {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    const fetchActivities = async () => {
      setActivities(await getActivityReports())
    }
    fetchActivities()
  }, [])

  console.log(activities)

  return (
    <div className='activities'>
      <h2>Activities</h2>
      {activities?.map(({areaOfIntervention, donorAgency, projectDuration, projectLGAs, projectTitle}, index) => (
        <div key={index} className="activity">
          <p><b>Area of Intervention:</b> {areaOfIntervention}</p>
          <p><b>Donor Agency:</b> {donorAgency}</p>
          <p><b>Project Duration:</b> {projectDuration}</p>
          <p><b>Project LGAs:</b> {projectLGAs}</p>
          <p><b>Project Title:</b> {projectTitle}</p>
        </div>
      ))}
    </div>
  )
}

export default Reports
