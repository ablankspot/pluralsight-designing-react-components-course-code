import { useState } from "react";
import SpeakerCard from "./SpeakerCard";
import { data } from "../../SpeakerData";

function SpeakerList({ showSessions }) {
    const [speakersData, setSpeakersData] = useState(data);

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

    return (
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
    );
}

export default SpeakerList;