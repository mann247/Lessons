//Final

//Easy Before
function exerciseOfTheDay(){
    let exercise = " ";
    function newExercise(exerciseName){
        exercise = exerciseName;
        console.log(`Today's exercise: ${exercise}`);
    }
    return newExercise;
}
const setExercise = exerciseOfTheDay();
setExercise("Running");
setExercise("Swimming");
setExercise("Dancing");
setExercise("Fencing");
