import "./navbar.css";

export const ProfilePopup: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { visible: boolean }> = ({ visible }) => {
  return visible ? <div className="profile-popup">test1234?<br/>test<br/>test<br/>test</div> : null;
};
