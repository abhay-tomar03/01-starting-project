import reactImg from '../assets/react-core-concepts.png'
export default function Header() {

  const reactDescriptions = ["Fundamental","Core","Crucial"];
  const getRandomInt =(max)=>{
      return Math.floor(Math.random()*(max+1));
  }
  const description = reactDescriptions[getRandomInt(2)]
  return (
    <>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
}
