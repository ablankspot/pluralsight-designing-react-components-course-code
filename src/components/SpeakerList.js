import ReactPlaceHolder from "react-placeholder";
import SpeakerCard from "./SpeakerCard";
import useRequestSpeakers, { REQUEST_STATUS } from "../hooks/useRequestSpeakers";

function SpeakerList({ showSessions }) {
    
    const {
        speakersData, requestStatus,
        error, onFavoriteToggle
    } = useRequestSpeakers(2000);

    if (requestStatus === REQUEST_STATUS.FAILURE) { 
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
            ready={requestStatus === REQUEST_STATUS.SUCCESS}
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