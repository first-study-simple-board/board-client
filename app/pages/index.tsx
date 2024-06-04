import DefaultButton from "components/button/default-button";
import PostItem from "components/post/post-item";
import { inject, observer } from "mobx-react";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { PostDto } from "src/dto/post.dto";
import useScroll from "src/hooks/useScroll";
import { PostProps } from "src/viewModels/post/post.viewModel";

function HomePostsView({ postViewModel }: PostProps): ReactElement {
  useScroll(postViewModel.handleScroll, { offset: 16, debounceDelay: 3000 });
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <div className="min-h-[calc(100vh-36px)]">
      <div className="flex justify-between items-center px-2 pt-4">
        <h1 className="text-xl font-semibold px-3">게시판</h1>
        <DefaultButton
          title={"글쓰기"}
          onClick={() => router.push("/post/create")}
          addClass={"bg-blue-500 hover:bg-blue-600 text-white"}
        />
      </div>
      <ul className="grid grid-cols-2 gap-4 px-4 py-4">
        {postViewModel.postList.map((post: PostDto, key: number) => {
          return <PostItem post={post} key={`post_${key}`} />;
        })}
      </ul>
    </div>
  );
}

export default inject("postViewModel")(observer(HomePostsView));
