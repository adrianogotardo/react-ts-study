import { useState } from "react";

interface Props {
    children: (
        count: number,
        setCount: React.Dispatch<React.SetStateAction<number>>
    ) => JSX.Element | null;
}

export default function Testinho ({ children }: Props): JSX.Element {
    const [count, setCount] = useState(0);

    return (
        <div>
            {children(count, setCount)}
        </div>
    );
}