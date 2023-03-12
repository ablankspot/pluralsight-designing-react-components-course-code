import { useState, useEffect } from "react";
import ReactPlaceHolder from "react-placeholder";
import SpeakerCard from "./SpeakerCard";
import { data } from "../../SpeakerData";

function SpeakerList({ showSessions }) {
    const [speakersData, setSpeakersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(2000);
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

    if (hasError === true) { 
        return (
            <div className="text-danger">
                ERROR: <b>Loading speaker data failed: {error}</b>
            </div>
        );
    }

    return (
        <ReactPlaceHolder
            type="media"
            rows={15}
            className="speakerlist-placeholder"
            ready={isLoading === false}
        >
            <div className="container speakers-list">
                <div className="row">
                    {speakersData.map(function (speaker) {
                        const { id, bio, first, last, favorite, twitterHandle, company, sessions } = speaker;

                        return (
                            <SpeakerCard
                                key={speaker.id}
                                speaker={speaker}
                                showSessions={showSessions}
                                onFavoriteToggle={() => { onFavoriteToggle(speaker.id); }} />
                        );
                    })}
                </div>
            </div>
        </ReactPlaceHolder>
    );
}

export default SpeakerList;