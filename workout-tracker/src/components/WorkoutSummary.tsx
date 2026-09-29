type WorkoutSummaryProps = {
    exercisesCompleted: number;
    totalMinutes: number;
    status: string;
    onCompleteExercise: () => void;
    onAddTime: () => void;
    onResetWorkout: () => void;
};

function WorkoutSummary({ exercisesCompleted, totalMinutes, status,
    onCompleteExercise, onAddTime, onResetWorkout }: WorkoutSummaryProps) {
    return (
        <div>
            <h2>Summary</h2>
            <p>Exercises Completed: {exercisesCompleted}</p>
            <p>Total Minutes: {totalMinutes}</p>
            <p>Status: {status}</p>

            <button onClick={onCompleteExercise}>Complete Exercise</button>
            <button onClick={onAddTime}>Add Time</button>
            <button onClick={onResetWorkout}>Reset Workout</button>
        </div>

    );
};

export default WorkoutSummary;