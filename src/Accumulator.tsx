// Accumulator.tsx
import React, { useState } from 'react';

const Accumulator: React.FC = () => {
    const [count, setCount] = useState<number>(5);

    return (
        <div>
            <p>Valor del acumulador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Disminuir</button>
        </div>
    );
};

export default Accumulator;
