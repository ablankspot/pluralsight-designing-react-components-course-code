import ReactPlaceHolder from "react-placeholder";
import SpeakerCard from "./SpeakerCard";
import useRequestSpeakers from "../hooks/useRequestSpeakers";

function SpeakerList({ showSessions }) {
    
    const {
        speakersData, isLoading,
        hasError, error,
        onFavoriteToggle
    } = useRequestSpeakers(2000);

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