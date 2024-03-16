import { useLocation } from "react-router-dom";
const Forums = () => {
  const location = useLocation();
  const isForum = location.pathname === "/forums";
  return (
    <div className={isForum ? "about__content isForum" : "about__content"}>
      Forum
    </div>
  )
};

export default Forums;