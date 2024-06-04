import DefaultButton from "components/button/default-button";
import SubPageContainer from "components/container/sub-page-container";
import PostForm from "components/post/post-form";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, ReactElement, useState } from "react";
import { PostModel } from "src/model/post.model";

/**
 * 게시판 글쓰기 페이지
 * @param props.post User가 선택한 게시물 정보
 */
export default function PostModifyView(): ReactElement {
  const [newPostModel, setNewPostModel] = useState<PostModel>(new PostModel());
  const router = useRouter();

  //Post 생성 api
  const insertPost = async () => {
    // await axios
    //   .post<PostModel>(`${apiUrl}/post`, newPostModel)
    //   .then((result: AxiosResponse<PostDto>) => {
    //     Alert.alert("성공적으로 업로드되었습니다.", () =>
    //       router.replace(`/post/${result.data.id}`)
    //     );
    //   })
    //   .catch((error: AxiosError) => {
    //     Alert.alert("업로드를 실패하였습니다.");
    //     return false;
    //   });
  };

  // 게시물 작성 - 타이틀 변경 이벤트
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewPostModel({ ...newPostModel, title: value });
  };

  // 게시물 작성 - 작성자 변경 이벤트
  const onChangeAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewPostModel({ ...newPostModel, author: value });
  };

  // 게시물 작성 - 내용 변경 이벤트
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setNewPostModel({ ...newPostModel, content: value });
  };

  // 게시물 작성 - 암호 변경 이벤트
  const onChangePassword = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setNewPostModel({ ...newPostModel, password: value });
  };

  // 작성완료 이벤트
  const onClickComplete = (e: MouseEvent<HTMLButtonElement>) => {
    insertPost();
  };

  return (
    <SubPageContainer title={"글작성"}>
      <PostForm
        post={newPostModel}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onChangeAuthor={onChangeAuthor}
        onChangePassword={onChangePassword}
      />
      <div className="flex justify-center">
        <DefaultButton
          addClass="bg-blue-500 hover:bg-blue-600 text-white"
          title={"작성완료"}
          onClick={onClickComplete}
        />
      </div>
    </SubPageContainer>
  );
}
