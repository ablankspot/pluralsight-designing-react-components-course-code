import { data } from "../SpeakerData"
import Speakers from "../src/components/Speakers"

const IndexPage = () => {
    return (
       <Speakers speakers={data} />
    )
};

export default IndexPage;
