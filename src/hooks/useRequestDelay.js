import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
    LOADING: 1,
    SUCCESS: 2,
    FAILURE: 3
};

function useRequestDelay(delayTime = 1000, initialData = []) {
    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                // throw "Had error";
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(data);
            }
            catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(e);
            }
        }

        delayFunc();
    }, []);

    function updateRecord(recordUpdated, doneCallback) {
        const origialRecords = [...data];
      
        const newRecords = data.map(function (rec) {
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });
            
        async function delayFunc() {
            try {
                setData(newRecords);
                await delay(delayTime);
                
                if (doneCallback) doneCallback();
            }
            catch (e) {
                console.log("Error loading", e);
                if (doneCallback) doneCallback();
                setData(origialRecords);
            }
        }

        delayFunc();
    }

    function insertRecord(record, doneCallback) {
        const origialRecords = [...data];
        const newRecords = [record, ...data];
            
        async function delayFunc() {
            try {
                setData(newRecords);
                await delay(delayTime);
                
                if (doneCallback) doneCallback();
            }
            catch (e) {
                console.log("Error loading", e);
                if (doneCallback) doneCallback();
                setData(origialRecords);
            }
        }

        delayFunc();
    }

    function deleteRecord(record, doneCallback) {
        const origialRecords = [...data];
        const newRecords = data.filter(rec => {
            return rec.id != record.id;
        });
            
        async function delayFunc() {
            try {
                setData(newRecords);
                await delay(delayTime);
                
                if (doneCallback) doneCallback();
            }
            catch (e) {
                console.log("Error loading", e);
                if (doneCallback) doneCallback();
                setData(origialRecords);
            }
        }

        delayFunc();
    }


    return { data, requestStatus, error, updateRecord, insertRecord, deleteRecord };
}

export default useRequestDelay;