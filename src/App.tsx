import Teste from './Teste';
import Testinho from './Testinho';

function App (): JSX.Element {
    return (
        <div>
            <Teste text='hello world' handleChange={(e) => console.log("oi")} />

            <Testinho>
                {(count, setCount) => (
                    <div>
                        {count}
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                )}
            </Testinho>
        </div>
  );
}

export default App;
