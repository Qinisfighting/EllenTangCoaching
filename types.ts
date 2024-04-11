
import { Timestamp } from '@firebase/firestore-types';

export interface CommentType {
  userName: string,
  comment: string,
  profilePic?: string,
  createdOn: Timestamp,
  commentId: string,
  userId: string,
 
}

export interface FormData {
    title: string;
    catalog: string;
    image?: string | File | { name: string, url: string };
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
  comments?: Comment[];
  likes?: string[];
  likesProfilePic?: string[];
  
}


 
 export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
}


export interface  Likes {
  likedUser: string;
  photoURL: string;
  displayName: string;
}


export type User = {
  displayName: string;
  email: string;
  id: string;
  uid: string;
  photoURL: string;
};
