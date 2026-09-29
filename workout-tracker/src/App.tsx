import { useEffect, useState } from 'react';
import './App.css'
import WorkoutSummary from './components/WorkoutSummary';

function App() {
  const [exercisesCompleted, setExercisesCompleted] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const message: string = exercisesCompleted == 0 && totalMinutes == 0 ? "Ready to start your workout!" : "Workout in progress!";

  function getStatus(count: number): string {
    if (count === 0) return "Not Started";
    if (count <= 2) return "Getting Started";
    if (count <= 4) return "Good Workout";
    return "Great Workout";
  }
  const status = getStatus(exercisesCompleted);

  function completeExercise(): void {
    setExercisesCompleted((prev) => prev + 1);
  }

  function addTime(): void {
    setTotalMinutes((prev) => prev + 30);
  }

  function resetWorkout(): void {
    setExercisesCompleted(0);
    setTotalMinutes(0);
  }

  useEffect(() => {
    document.title = `Exercises Completed: ${exercisesCompleted}`;
  }, [exercisesCompleted]);

  useEffect(() => {
    console.log(`Workout time: ${totalMinutes} minutes`);
  }, [totalMinutes]);

  return (
    <>
      <h1>Workout Tracker</h1>
      <p>{message}</p>

      <WorkoutSummary
        exercisesCompleted={exercisesCompleted}
        totalMinutes={totalMinutes}
        status={status}
        onCompleteExercise={completeExercise}
        onAddTime={addTime}
        onResetWorkout={resetWorkout}
        disableReset={exercisesCompleted === 0 && totalMinutes === 0}
      ></WorkoutSummary>
    </>
  )
}

export default App
