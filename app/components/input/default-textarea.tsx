import { ChangeEvent, ReactElement } from "react";

interface TextareaProps {
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

/**
 * 공용 재사용 텍스트에어리어
 * @param param.name name
 * @param param.id id
 * @param param.label label text
 * @param param.placeholder textarea placeholder
 * @param param.onChange textarea value onChange handler
 * @param param.value textarea value
 */
export default function DefaultTextarea({
  name,
  id,
  label,
  placeholder,
  onChange,
  value,
}: TextareaProps): ReactElement {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20 resize-none"
      />
    </div>
  );
}
