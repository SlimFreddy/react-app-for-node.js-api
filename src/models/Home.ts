export default interface IPost {
  _id: string;
  postTitle: string;
  postBody: string;
  date: Date;
  author?: {
    _id: string;
    username: string;
  };
}
