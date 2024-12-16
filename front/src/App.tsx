import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button className="p-3 bg-green-400" onClick={() => navigate('/create')}>
          novo
        </button>
      </div>
    </>
  );
}

export default App;
