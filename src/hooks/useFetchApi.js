import { useState, useEffect } from "react";

export const useFetchApi = (url, checkInput) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setfetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Fetching resource failed");
                return res.json();
            })
            .then((data) => {
                setfetchedData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, [checkInput]);

    return [fetchedData, isLoading];
};
