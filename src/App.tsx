import Task_1 from "./components/Task_1";
import Title from "./components/Title";
import Image from "./components/Image";
import Student from "./components/Student";
function App() {
  return (
    <div>
      <Task_1 button={"Click me"}/>
      <Title title={"Word"}/>
      <Image imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMLm0g-gFmrePAhV3p0OwbPJJ0WHprAki7MoXTJICnDpXccvwuIpMimwQQ3DE-R6xnu8&usqp=CAU"} altText="Альтернативный текст для изображения"/>
      <Student name={"N"} lastname={"l"} grades={[5,6,3,8,9]} />

      
    </div>
  );
}

export default App;
