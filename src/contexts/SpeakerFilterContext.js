import { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

export const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({ children, initialShowSessions = false, initialEventYear = "2019" }) {
    const {
        showSessions, setShowSessions,
        eventYear, setEventYear,
        searchQuery, setSearchQuery,
        EVENT_YEARS
    } = useSpeakerFilter(initialShowSessions, initialEventYear);

    return (
        <SpeakerFilterContext.Provider value={{
            showSessions, setShowSessions,
            eventYear, setEventYear,
            searchQuery, setSearchQuery,
            EVENT_YEARS
        }}>
            { children }
        </SpeakerFilterContext.Provider>
    );
}

export {SpeakerFilterProvider};