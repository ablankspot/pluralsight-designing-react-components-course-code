import SpeakerCard from "./SpeakerCard";

function SpeakerList({ speakers }) {
    return (
        <div className="container speakers-list">
            <div className="row">
                {speakers.map(function (speaker) {
                    const { id, bio, first, last, favorite, twitterHandle, company, sessions } = speaker;

                    return (
                        <SpeakerCard key={speaker.id} speaker={speaker} />
                    );
                })}
            </div>
        </div>
    );
}

export default SpeakerList;