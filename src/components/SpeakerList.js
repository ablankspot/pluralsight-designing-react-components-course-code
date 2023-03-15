import ReactPlaceHolder from "react-placeholder";
import SpeakerCard from "./SpeakerCard";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData"

function SpeakerList({ showSessions }) {
    
    const {
        data: speakersData, requestStatus,
        error, updateRecord
    } = useRequestDelay(2000, data);

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
                                onFavoriteToggle={(doneCallback) => {
                                    updateRecord({
                                        ...speaker,
                                        favorite: !speaker.favorite,
                                    }, doneCallback);
                                }} />
                        );
                    })}
                </div>
            </div>
        </ReactPlaceHolder>
    );
}

export default SpeakerList;