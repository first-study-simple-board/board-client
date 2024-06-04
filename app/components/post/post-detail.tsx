import dayjs from "dayjs";
import { ReactElement } from "react";
import { PostDto } from "src/dto/post.dto";

interface IProps {
  post: PostDto;
}

/**
 * 게시판 상세페이지 - 게시물 뷰
 * @param props.post 게시물 정보 객체
 */
export default function PostDetail(props: IProps): ReactElement {
  const { id, title, content, createdAt, author } = props.post;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="flex flex-row items-center mb-4">
        <p className="text-gray-400 text-sm mr-2">ID:</p>
        <p className="text-gray-700 text-sm">{id}</p>
        <p className="text-gray-400 text-sm mr-2 ml-4">AUTHOR:</p>
        <p className="text-gray-700 text-sm">{author}</p>
      </div>
      <div className="flex flex-row items-center mb-6">
        <p className="text-gray-400 text-sm mr-2">Created At:</p>
        <p className="text-gray-700 text-sm">
          {dayjs(createdAt).format("YYYY년 MM월 DD일 HH시 mm분")}
        </p>
      </div>
      <p className="text-lg mb-8 leading-loose">{content}</p>
    </div>
  );
}
