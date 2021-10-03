import "./NumberedList.css";
import { Aside } from "../Aside";
import { LoadingLine } from "../../Loading";
import { Link } from "react-router-dom";

export const NumberedList = ({
  heading,
  list,
  listLoading,
}: {
  heading: string;
  list: { name: string; appid: number }[];
  listLoading: boolean;
}) => {
  return (
    <Aside heading={heading}>
      {listLoading ? ( // while list is loading, show loading bars
        <>
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
          <LoadingLine />
        </>
      ) : list.length > 0 ? ( // once list has loaded display the contents of the list
        <ol className="numbered-list">
          {list.slice(0, 10).map((item, index) => {
            return (
              <Link to={`/game/${item.appid}`}>
                <li key={index}>{item.name}</li>
              </Link>
            );
          })}
        </ol>
      ) : (
        // If nothing is in the list then return a message
        <ul>
          <li>Nothing 😢</li>
        </ul>
      )}
    </Aside>
  );
};
