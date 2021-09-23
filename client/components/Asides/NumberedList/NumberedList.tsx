import "./NumberedList.css";
import useStore from "../../useStore";
import { Aside } from "../Aside";
import { LoadingLine } from "../../Loading";

export const NumberedList = ({
  heading,
  list,
  listLoading,
}: {
  heading: string;
  list: any[];
  listLoading: boolean;
}) => {
  return (
    <Aside heading={heading}>
      {listLoading ? (
        <>
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
        </>
      ) : (
        <ol className="numbered-list">
          {list.slice(0, 10).map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ol>
      )}
    </Aside>
  );
};
