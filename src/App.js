function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, Javier Juventino!</h1>
      <h2>Hoy es {currDate.toLocaleDateString()} y la hora es: {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
} 


export default App;