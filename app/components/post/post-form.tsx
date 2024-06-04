import { ChangeEventHandler, ReactElement } from "react";
import { PostModel } from "src/model/post.model";
import DefaultInput from "../input/default-input";
import DefaultTextarea from "../input/default-textarea";

interface IProps {
  post: PostModel;
  onChangeTitle: ChangeEventHandler;
  onChangeContent: ChangeEventHandler;
  onChangeAuthor: ChangeEventHandler;
  onChangePassword?: ChangeEventHandler;
}

/**
 * 게시판 수정 & 작성
 * @param props.post 게시물 정보 객체
 */
export default function PostForm(props: IProps): ReactElement {
  const { title, content, author, password } = props.post;
  const { onChangeTitle, onChangeContent, onChangeAuthor, onChangePassword } =
    props;

  return (
    <div className="container mx-auto">
      <DefaultInput
        type="text"
        name="title"
        id="title"
        label="Title"
        placeholder="게시글 제목을 입력해 주세요."
        onChange={onChangeTitle}
        value={title}
      />
      <DefaultInput
        type="text"
        name="author"
        id="author"
        label="Author"
        placeholder="작성자 이름을 입력해 주세요."
        onChange={onChangeAuthor}
        value={author}
      />
      <DefaultTextarea
        name="content"
        id="content"
        label="Content"
        placeholder="게시글 내용을 입력해 주세요."
        onChange={onChangeContent}
        value={content}
      />
      {onChangePassword && (
        <DefaultInput
          type="text"
          name="password"
          id="password"
          label="Password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={onChangePassword}
          value={password}
        />
      )}
    </div>
  );
}
