import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(new Date(dateString * 1000), 'yyyyMMdd')}</time>;
    return result = fromUnixTime()
    
    


}