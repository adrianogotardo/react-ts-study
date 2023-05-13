import { useState } from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string; // we can specify any types here
    func?: () => void; // this would specify 'function' as a prop that have to be a function that recieves no params and returns void
    otherFunc?: (bob: string) => number; // this function, in turn, recieve a string param and returns a number
    object?: { f1: string }; //in objects, we specify the types of each key separately
    array?: string[]; // in arrays, we specify the type of the itens in the array and we use the [] to say it is a array of these itens
    person?: Person; // here we use another interface to specify this prop types
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // this function is being specified here to be used below
}



export default function Teste ({text, handleChange}: Props): JSX.Element {
    const [count, setCount] = useState(5); // here the types usually are inferred (in this example it is a number)
    const [joker, setJoker] = useState<number | string | null>(5); // but if you want to specify multiple possibilities, you can do it manually

    return(
        <div>
            <h1>{text}</h1>
            <input onChange={handleChange}></input>
        </div>
    )
}