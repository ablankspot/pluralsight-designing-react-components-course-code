import { useContext } from "react";
import ReactPlaceHolder from "react-placeholder";
import SpeakerCard from "./SpeakerCard";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData"
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

function SpeakerList() {
    const {
        data: speakersData, requestStatus,
        error, updateRecord, insertRecord, deleteRecord
    } = useRequestDelay(2000, data);

    const { eventYear, searchQuery } = useContext(SpeakerFilterContext);

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
                    {speakersData
                        .filter((speaker) => {
                        return (
                            speaker.first.toLowerCase().includes(searchQuery) ||
                            speaker.last.toLowerCase().includes(searchQuery)
                        );
                        })
                        .filter((speaker) => {
                            return speaker.sessions.find((session) => { return session.eventYear === eventYear; })
                        })
                        .map(function (speaker) {
                            const { id, bio, first, last, favorite, twitterHandle, company, sessions } = speaker;

                            return (
                                <SpeakerCard
                                    key={speaker.id}
                                    speaker={speaker}
                                    updateRecord={updateRecord}
                                    insertRecord={insertRecord}
                                    deleteRecord={deleteRecord}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </ReactPlaceHolder>
    );
}

export default SpeakerList;