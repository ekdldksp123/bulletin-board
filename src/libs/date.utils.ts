import { NextApiResponse } from 'next';
import { Post } from './../types/post';

export const formatDateToString = (date:Date, delimiter:string = '-') => {
    const year = date.getFullYear(); 
    const month = leftPad(date.getMonth() + 1); 
    const day = leftPad(date.getDate());

    return [year, month, day].join(delimiter);
}

export const leftPad = (value:number) => {
    if(value < 10) return `0${value}`;
    else return `${value}`;
}

export const sortByDate = (list:JSON) => {
    const data = JSON.parse(JSON.stringify(list)) as Post[];
    
    return data.sort((x: Post,y: Post) => {
        const a = new Date(x.createdAt) 
        const b = new Date(y.createdAt)
    
        return a > b ? -1 : a < b ? 1 : 0;
    })
}
