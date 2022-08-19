import './UpdateActivity.css'
import { useState } from 'react'
import EditActivityForm from '../../components/EditActivityForm/EditActivityForm'


const UpdateActivity = () => {
  let { activity_id } = useParams()

  const [activityInfo,setActivityInfo] = useState();


  useEffect(() => {
    api.get(`http://localhost:3000/user/activities/${activity_id}`).then(response => {
        console.log('waiting')
        console.log(response.data)
        setActivityInfo(response.data)
      },).then(() => console.log('done'))
  }, [])

  return (
    <div className="new-activity">
      <h1>New Activity</h1>
      <EditActivityForm
        id={activity_id}
        activityInfo={activityInfo}
        setActivityInfo={setActivityInfo}
        />
    </div>
  )
}

export default UpdateActivity