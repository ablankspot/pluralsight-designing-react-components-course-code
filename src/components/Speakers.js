import SpeakersToolbar from "./SpeakersToolbar";
import SpeakerList from "./SpeakerList";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";

function Speakers() {
    return (
        <SpeakerFilterProvider initialShowSessions={false} initialEventYear={"2019"}>
            <SpeakersToolbar />
            <SpeakerList />
        </ SpeakerFilterProvider>
    );
}

export default Speakers;