import { useState } from 'react';

export const useCountDown = ( initialState = 10 ) => {
    
    const [state, setState] = useState(initialState);

    setTimeout( () => {
        
        if(state > 0)
            setState( (prevState) => prevState - 1 );

    }, 1000);

    return {
        state,
    };
}
