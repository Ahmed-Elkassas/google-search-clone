import { createContext, useState} from 'react';


const ResultContext = createContext();

const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Fetch Data from RapidAPI 
    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET', 
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '289bb1875dmsh6813974f87f7190p192a7ejsn080fb78a7f51',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        });

        const data = response.json();
        setResults(data);
        setIsLoading(false);

    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )

}