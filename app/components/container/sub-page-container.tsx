import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { MouseEvent, ReactElement } from "react";

interface IProps {
  children: ReactElement | ReactElement[];
  title?: string;
}

/**
 * 뒤로가기, 페이지 title 등이 표시될 수 있는 공용 Container
 * @param props.children Subpage에서 공용으로 사용되는 Container
 */
export default function SubPageContainer(props: IProps): ReactElement {
  const { children, title } = props;

  //뒤로가기 이벤트
  const router = useRouter();
  const onClickBack = (e: MouseEvent<HTMLDivElement>) => {
    router.back();
  };

  return (
    <div>
      <div className="w-full h-12 bg-white dark:bg-black shadow-md">
        <div
          onClick={onClickBack}
          className="flex items-center gap-2 h-full px-4"
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-xl font-semibold"
          />
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      </div>
      <div className="px-4 py-6">{children}</div>
    </div>
  );
}
