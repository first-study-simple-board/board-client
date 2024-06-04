import { makeObservable, observable } from "mobx";
import { PostDto } from "src/dto/post.dto";
import { IDefaultProps } from "src/mobx/store";

export interface PostProps {
  postViewModel?: PostViewModel;
}

export default class PostViewModel {
  public postList: PostDto[] = [];

  constructor(props: IDefaultProps) {
    makeObservable(this, {
      postList: observable,
    });
  }

  //Scroll event
  public handleScroll = async () => {
    // await axios
    //   .get<PostDto[]>(`${apiUrl}/post?offset=${offset}`)
    //   .then((result: AxiosResponse<PostDto[]>) => {
    //     setPostList([
    //       ...postList,
    //       ...result.data.map((item) => plainToInstance(PostDto, item)),
    //     ]);
    //     setOffset(offset + 1);
    //   })
    //   .catch((error: AxiosError) => {
    //     console.log("error!", error);
    //     return false;
    //   });
  };
}
