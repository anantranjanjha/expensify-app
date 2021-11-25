import moment from "moment";

export default (expenses, { text , sortBy , startDate , endDate})=>{
   
    return expenses.filter((expense)=>{
            const createdAtmoment=moment(expense.createdAt);

            const startmatch = startDate ? startDate.isSameOrBefore(createdAtmoment,'day'): true;
            const endmatch= endDate ? endDate.isSameOrAfter(createdAtmoment, 'day') : true;
            const textmatch= expense.description.toLowerCase().includes(text.toLowerCase());

            return startmatch && endmatch && textmatch;
        }).sort((a,b) => {
            if(sortBy=="date")
            return a.createdAt < b.createdAt ?1 : -1;
            else if(sortBy=="amount")
            return a.amount < b.amount ?1 : -1;
        });   
};