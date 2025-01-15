import React, { createContext, useState, useEffect } from "react";

export const TableDataContext = createContext();

export const TableDataProvider = ({ children }) => {
    const [tableData, setTableData] = useState([]);
    const [isLoadingTB, setIsLoadingTB] = useState(true);
    const [error, setError] = useState(null);

    const URI = "https://data.sfgov.org/resource/yitu-d5am.json";

    const storeTableDataLocally = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const retrieveDataLS = (key) => {
        const storedData = localStorage.getItem(key);
        // console.log(storedData); 
        return storedData ? JSON.parse(storedData) : null;
    };

    const fetchTableData = async (uri) => {
        try {
            setIsLoadingTB(true);
            setError(null);

            const res = await fetch(uri);

            if (!res.ok) {
                throw new Error(`HTTP Error: ${res.status}`);
            }

            const result = await res.json();
            console.log('DATA FETCHED');
            setTableData(result);
            storeTableDataLocally("tdata", result);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoadingTB(false);
        }
    };

    useEffect(() => {
        let data = retrieveDataLS("tdata");
        // console.log("tdata", data);
        if (!data) {
            fetchTableData(URI);
        } else {
            setTableData(data);
            console.log('DATA RETRIEVED FORM LOCal')
            setIsLoadingTB(false);
        }
    }, [URI]);

    const value = {
        tableData,
        isLoadingTB,
        error,
    };

    return (
        <TableDataContext.Provider value={value}>
            {children}
        </TableDataContext.Provider>
    );
};
