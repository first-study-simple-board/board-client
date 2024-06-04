import { MouseEventHandler, ReactElement } from "react";

interface IProps {
  title: string | string[] | ReactElement;
  onClick: MouseEventHandler;
  addClass?: string;
  dataId?: string | string[] | number;
}

/**
 * 기본 재사용 버튼
 * @param props.title 버튼 내 text
 * @param props.onClick 버튼 click event
 * @param props.addClass tailwindcss를 추가하기위한 className
 * @param props.dataId 버튼 data-set.id
 */
export default function DefaultButton(props: IProps): ReactElement {
  const { title, onClick, addClass, dataId } = props;

  return (
    <button
      className={`py-2 px-4 rounded-md shadow-md ${addClass}`}
      onClick={onClick}
      data-id={dataId}
    >
      {title}
    </button>
  );
}
