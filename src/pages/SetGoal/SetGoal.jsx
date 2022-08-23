import NavBar from "../../components/NavBar/NavBar"
import SetGoalForm from "../../components/SetGoalForm/SetGoalForm"
import './SetGoal.css'

const SetGoal = () => {
    return (
        <>
            <NavBar />
            <div className="setgoal">
                <SetGoalForm user='' />
            </div>
        </>
    )
}

export default SetGoal