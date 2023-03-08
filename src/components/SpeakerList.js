import { useState } from "react";
import SpeakerCard from "./SpeakerCard";
import { data } from "../../SpeakerData";

function SpeakerList({ showSessions }) {
    return (
        <div className="container speakers-list">
            <div className="row">
                {data.map(function (speaker) {
                    const { id, bio, first, last, favorite, twitterHandle, company, sessions } = speaker;

                    return (
                        <SpeakerCard key={speaker.id} speaker={speaker} showSessions={showSessions} />
                    );
                })}
            </div>
        </div>
    );
}

export default SpeakerList;