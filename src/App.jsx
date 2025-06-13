
import profileImage from './assets/image.jpg';
import './App.css';
import InfoCard from './components/InfoCard';

const profile=
  {
    name:"Oloyede Muhammed",
    title: "Frontend Dev",
    bio: "Passionate young frontend developer who loves turning ideas into clean, interactive interfaces. Always learning something new—whether it's the latest JavaScript trick or how to make the perfect cup of coffee. Big fan of late-night coding sessions, good playlists, and weekend bike rides.",
    img: `${profileImage}`
    
  };
  

function App() {
  console.log(profile);

  return (
    <>
      <div className='AppContainer' align="center">
        <InfoCard  data={profile}/>
      </div>
    </>
    
  );
  
}

export default App;
