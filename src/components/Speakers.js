import SpeakerList from "./SpeakerList";
import Header from "./Header";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers({ speakers }) {
    return (
        <div className="container-fluid">
            <Header />
            <SpeakersToolbar />
            <SpeakerList speakers={speakers} />
        </div>
    );
}

export default Speakers;