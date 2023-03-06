import { data } from "../SpeakerData"
import SpeakerCard from "../src/components/SpeakerCard"

const IndexPage = () => {

    return (
        <div className="container speakers-list">
            <div className="row">
                {data.map(function (speaker) {
                    const { id, bio, first, last, favorite, twitterHandle, company, sessions } = speaker;

                    return (
                        <SpeakerCard key={speaker.id} speaker={speaker} />
                    );
                })}
            </div>
        </div>
    )
};

export default IndexPage;
