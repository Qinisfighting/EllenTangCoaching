
import { Timestamp } from '@firebase/firestore-types';

export interface FormData {
    title: string;
    catalog: string;
    image?: any;
    content: string;
    createdOn?: Date;
  }


  export interface Article {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    createdOn: Timestamp;
    catalog: string;
 }