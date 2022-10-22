import { useEffect, useState } from "react";
import axios from "axios";

const getApiHook = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(url, {
            headers: {
                Accept: 'application/json',
                Authorization: global.token
            }
        },
        )
            .then(function (response) {
                // console.log('response.data==', response.data);
                setError(response.data.error)
                setData(response.data.data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [url]);

    return { data, loading, error };
};

export default getApiHook;