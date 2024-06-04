import DefaultButton from "components/button/default-button";
import CommentList from "components/comment/comment-list";
import SubPageContainer from "components/container/sub-page-container";
import CommentInput from "components/input/comment-input";
import PostDetail from "components/post/post-detail";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  MouseEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { CommentDto } from "src/dto/comment.dto";
import { PostDto } from "src/dto/post.dto";
import { CommentModel } from "src/model/comment.model";

export default function PostView(): ReactElement {
  const [targetPost, setTargetPost] = useState<PostDto>(new PostDto());
  const [targetComments, setTargetComments] = useState<CommentDto[]>([]);
  const [newCommentModel, setNewCommentModel] = useState<CommentModel>(
    new CommentModel()
  );
  const router = useRouter();

  //Mount 후 서버로부터 받아온 Post정보를 State에 PostDto에 맞추어 저장함
  //Mount 후 서버로부터 받아온 Comments정보를 State에 PostDto에 맞추어 저장함
  useEffect(() => {
    // setTargetPost(plainToInstance(PostDto, post));
    // setTargetComments(
    //   comments.map((comment) => plainToInstance(CommentDto, comment))
    // );
    // setNewCommentModel({ ...newCommentModel, postId: post.id });
  }, []);

  //게시물 수정 이벤트
  const onClickModify = (e: MouseEvent<HTMLButtonElement>) => {
    // Alert.prompt({
    //   title: "게시물을 수정하려면 비밀번호를 입력해 주세요.",
    //   inputType: "text",
    //   showCancel: true,
    //   placeholder: "비밀번호를 입력해 주세요.",
    //   confirm: "수정",
    //   callback: () => {
    //     router.push(`/post/modify/${targetPost.id}`);
    //   },
    //   error: "비밀번호가 올바르지 않습니다.",
    //   validation: (value, resolve) => {
    //     if (value !== targetPost.password) {
    //       resolve("비밀번호가 올바르지 않습니다.");
    //     } else {
    //       resolve();
    //     }
    //   },
    // });
  };

  //게시물 삭제 이벤트
  const onClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
    // Alert.prompt({
    //   title: "삭제 하시겠습니까?",
    //   inputType: "text",
    //   showCancel: true,
    //   placeholder: "비밀번호를 입력해 주세요.",
    //   confirm: "삭제",
    //   callback: () => {
    //     deletePost();
    //   },
    //   error: "비밀번호가 올바르지 않습니다.",
    //   validation: (value, resolve) => {
    //     if (value !== targetPost.password) {
    //       resolve("비밀번호가 올바르지 않습니다.");
    //     } else {
    //       resolve();
    //     }
    //   },
    // });
  };

  //Post 삭제 api
  const deletePost = async () => {
    // await axios
    //   .delete(`${apiUrl}/post/${targetPost.id}`)
    //   .then((result: AxiosResponse) => {
    //     Alert.alert("성공적으로 삭제하였습니다.", () => router.replace("/"));
    //   })
    //   .catch((error: AxiosError) => {
    //     Alert.alert("삭제를 실패하였습니다.");
    //     return false;
    //   });
  };

  //Comment 등록 api
  const insertComment = async () => {
    // await axios
    //   .post<CommentDto>(`${apiUrl}/comment`, snakeCase(newCommentModel))
    //   .then((result: AxiosResponse<CommentDto>) => {
    //     Alert.alert("댓글을 달았습니다.");
    //     setTargetComments([
    //       plainToInstance(CommentDto, result.data),
    //       ...targetComments,
    //     ]);
    //   })
    //   .catch((error: AxiosError) => {
    //     Alert.alert("댓글달기를 실패하였습니다.");
    //     return false;
    //   });
  };

  //Comment 삭제 api
  const deleteComment = async (commentId: number, password: string) => {
    // await axios
    //   .delete(`${apiUrl}/comment?id=${commentId}&password=${password}`)
    //   .then((result: AxiosResponse) => {
    //     Alert.alert("댓글을 삭제했습니다.");
    //     setTargetComments(
    //       targetComments.filter(
    //         (comment: CommentDto) => comment.id !== commentId
    //       )
    //     );
    //   })
    //   .catch((error: AxiosError) => {
    //     Alert.alert("댓글삭제를 실패하였습니다.");
    //     return false;
    //   });
  };

  //댓글작성 - 작성자 Change handler
  const onChangeCommentAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewCommentModel({ ...newCommentModel, author: value });
  };

  //댓글작성 - 내용 Change handler
  const onChangeCommentContent = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewCommentModel({ ...newCommentModel, content: value });
  };

  //댓글작성 - 비밀번호 Change handler
  const onChangeCommentPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewCommentModel({ ...newCommentModel, password: value });
  };

  //댓글작성 - 작성 Click event
  const onClickInsertComment = (e: MouseEvent<HTMLButtonElement>) => {
    insertComment();
    setNewCommentModel(new CommentModel());
  };

  //댓글작성 - 작성 Click event
  const onClickDeleteComment = (e: MouseEvent<HTMLButtonElement>) => {
    // const { id } = e.currentTarget.dataset;
    // // deleteComment(id);
    // Alert.prompt({
    //   title: "삭제 하시겠습니까?",
    //   inputType: "text",
    //   showCancel: true,
    //   placeholder: "비밀번호를 입력해 주세요.",
    //   confirm: "삭제",
    //   callback: (value: string) => {
    //     deleteComment(+id, value);
    //   },
    //   error: "비밀번호가 올바르지 않습니다.",
    //   validation: (value, resolve) => {
    //     const targetComment = targetComments.find(
    //       (comment: CommentDto) => comment.id === +id
    //     );
    //     if (value !== targetComment.password) {
    //       resolve("비밀번호가 올바르지 않습니다.");
    //     } else {
    //       resolve();
    //     }
    //   },
    // });
  };

  return (
    <SubPageContainer title={"게시물"}>
      <PostDetail post={targetPost} />
      <CommentInput
        onChangeAuthor={onChangeCommentAuthor}
        onChangeContent={onChangeCommentContent}
        onChangePassword={onChangeCommentPassword}
        value={newCommentModel}
        onClickInsertComment={onClickInsertComment}
      />
      <CommentList
        list={targetComments}
        onClickDeleteComment={onClickDeleteComment}
      />
      <div className="flex justify-end gap-2">
        <DefaultButton
          addClass="bg-blue-500 hover:bg-blue-600 text-white"
          title={"게시물 수정"}
          onClick={onClickModify}
        />
        <DefaultButton
          addClass="bg-red-500 hover:bg-red-600 text-white mr-0"
          title={"게시물 삭제"}
          onClick={onClickDelete}
        />
      </div>
    </SubPageContainer>
  );
}
