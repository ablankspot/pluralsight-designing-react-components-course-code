import { useState, useEffect } from "react";
import axios from 'axios';

export const REQUEST_STATUS = {
    LOADING: 1,
    SUCCESS: 2,
    FAILURE: 3
};

const baseUrl = "api/speakers";

function useRequestRest() {
    const [data, setData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                const result = await axios.get(baseUrl);
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(result.data);
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
                await axios.put(`${baseUrl}/${recordUpdated.id}`, recordUpdated);
                
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
                await axios.post(`${baseUrl}/99999`, record);
                
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
                await axios.delete(`${baseUrl}/${record.id}`, record);
                
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

export default useRequestRest;