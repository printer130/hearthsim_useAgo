import { useAge } from './hooks'

export const now = Date.now()

function App() {
  /* make whichever changes you deem necessary in this function */
  // you will probably want to call the hook here: const ...  = useAge();
  const { theTimeThatPassed }  = useAge({ timestamp: now})
  // you will want to replace the following line

  return (
    <div className="App">
      <p>
        Last Updated: {theTimeThatPassed}
      </p>
      {/* You will need to add a button here */}
      <button>
        Restart
      </button>
    </div>
  );
}

export default App;
