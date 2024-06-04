import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { MouseEventHandler, ReactElement } from "react";
import { CommentDto } from "src/dto/comment.dto";
import DefaultButton from "../button/default-button";

interface IProps {
  data: CommentDto;
  onClick: MouseEventHandler;
}

/**
 * 댓글아이템
 * @param props.data 댓글정보
 * @param props.onClick 댓글 삭제 Click Handler
 */
export default function CommentItem(props: IProps): ReactElement {
  const { onClick, data } = props;
  const { author, content, createdAt, id } = data;

  return (
    <div className="bg-white rounded-md shadow-md p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600 text-sm font-medium">{author}</span>
        <span className="text-gray-400 text-xs">
          {dayjs(createdAt).format("YYYY년 MM월 DD일 HH시 mm분")}
        </span>
      </div>
      <p className="text-gray-700 text-sm mb-4">{content}</p>
      <div className="flex justify-end">
        <DefaultButton
          title={<FontAwesomeIcon icon={faTrash} />}
          onClick={onClick}
          addClass="w-4 h-4 py-0 px-0"
          dataId={id}
        />
      </div>
    </div>
  );
}
