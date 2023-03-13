import { useState, useEffect } from "react";
import { data } from "../../SpeakerData"

export const REQUEST_STATUS = {
    LOADING: 1,
    SUCCESS: 2,
    FAILURE: 3
};

function useRequestSpeakers(ms = 1000) {
    const [speakersData, setSpeakersData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(ms);
                // throw "Had error";
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setSpeakersData(data);
            }
            catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
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

    return { speakersData, requestStatus, error, onFavoriteToggle };
}

export default useRequestSpeakers;