import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
    const [loadingFlag, updateLoadingFlag]      = useState(false);
    const [resolvedData, updateResolvedData]    = useState(null);
    const [errorData, updateErrorData]          = useState(null);

    useEffect(() => {
        const process = async () => {
            updateLoadingFlag(true);

            try{
                const resolved = await promiseCreator();
                updateResolvedData(resolved);   // 리액트 상태관리 hook 에 편입
            }
            catch (e){
                updateErrorData(e);
            }

            updateLoadingFlag(false);
        };

        process();

    }, deps);

    return [loadingFlag, resolvedData, errorData];
}