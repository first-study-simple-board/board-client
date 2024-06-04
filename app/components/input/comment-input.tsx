import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, MouseEventHandler, ReactElement } from "react";
import { CommentModel } from "src/model/comment.model";
import DefaultButton from "../button/default-button";

interface InputProps {
  onChangeAuthor: ChangeEventHandler;
  onChangeContent: ChangeEventHandler;
  onChangePassword: ChangeEventHandler;
  onClickInsertComment: MouseEventHandler;
  value: CommentModel;
}

/**
 * 댓글용 인풋
 * @param param.onChangeAuthor 댓글작성 작성자 change handler
 * @param param.onChangeContent 댓글작성 내용 change handler
 * @param param.onChangePassword 댓글작성 비밀번호 change handler
 * @param param.onClickInsertComment 댓글달기 click handler
 * @param param.value 댓글 model
 */
export default function CommentInput({
  onChangeAuthor,
  onChangeContent,
  onChangePassword,
  onClickInsertComment,
  value,
}: InputProps): ReactElement {
  const commonClass =
    "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <div className="mb-4 flex flex-col gap-2">
      <label htmlFor={"Comment"} className="block text-gray-700 font-bold">
        Comment
      </label>
      <div className="flex gap-2">
        <input
          type={"text"}
          name={"author"}
          id={"author"}
          placeholder={"작성자"}
          onChange={onChangeAuthor}
          value={value.author}
          className={`${commonClass} w-28 flex-shrink flex-grow-0`}
        />
        <input
          type={"text"}
          name={"password"}
          id={"Password"}
          placeholder={"비밀번호"}
          onChange={onChangePassword}
          value={value.password}
          className={`${commonClass} w-full flex-shrink flex-grow`}
        />
      </div>
      <div className="flex gap-2 justify-between">
        <input
          type={"text"}
          name={"comment"}
          id={"Comment"}
          placeholder={"댓글을 입력해 주세요."}
          onChange={onChangeContent}
          value={value.content}
          className={`${commonClass} w-full flex-shrink flex-grow-0 h-12`}
        />
        <DefaultButton
          title={<FontAwesomeIcon icon={faPaperPlane} />}
          onClick={onClickInsertComment}
          addClass=" bg-blue-500 hover:bg-blue-600 text-white flex-shrink flex-grow mr-0"
        />
      </div>
    </div>
  );
}
