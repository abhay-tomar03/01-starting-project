import CoreConcepts from './components/Coreconcepts';
import Examples from './components/Examples';
import Header from './components/Header'
function App() {
  return (
    <div>
      <Header/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
