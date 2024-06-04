import dayjs from "dayjs";
import { ReactElement } from "react";
import { PostDto } from "src/dto/post.dto";

interface IProps {
  post: PostDto;
}

/**
 * 게시판 리스트에서 사용되는 게시물 아이템
 * @param props.post 게시물
 */
export default function PostItem(props: IProps): ReactElement {
  const { id, title, content, createdAt, author } = props.post;

  return (
    <li className="bg-gray-100 rounded-md p-4">
      <a href={`/post/${id}`}>
        <h2 className="font-bold text-lg mb-2 line-clamp-1">{title}</h2>
        <h2 className="font-normal text-lg mb-2 ooverflow-hidden line-clamp-2 break-words h-14">
          {content}
        </h2>
        <p className="text-gray-600">
          {dayjs(createdAt).format("YYYY년 MM월 DD일")}
        </p>
        <p className="text-gray-600 text-right">{author}</p>
      </a>
    </li>
  );
}
