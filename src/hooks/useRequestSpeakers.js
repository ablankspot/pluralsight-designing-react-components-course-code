import { useState, useEffect } from "react";
import { data } from "../../SpeakerData"

function useRequestSpeakers(ms = 1000) {
    const [speakersData, setSpeakersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(ms);
                // throw "Had error";
                setIsLoading(false);
                setSpeakersData(data);
            }
            catch (e) {
                setIsLoading(false);
                setHasError(true);
                setError(e);
            }
        }

        delayFunc();
    }, []);

    function onFavoriteToggle(id) {
        const previous = speakersData.find(function (rec) {
            return rec.id === id;
        });

        const updated = {
            ...previous,
            favorite: !previous.favorite
        };

        const newData = speakersData.map(function (rec) {
            return rec.id === id ? updated : rec;
        })

        setSpeakersData(newData);
    }

    return { speakersData, isLoading, hasError, error, onFavoriteToggle };
}

export default useRequestSpeakers;