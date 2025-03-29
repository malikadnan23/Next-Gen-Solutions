import "./social.css";
import { socialHandles } from "../../data";
import { convertHexToRgba, cssPerfectShape } from "../../util";

const Social = () => {
  return (
    <div className="socials">
      {socialHandles.map((list, index) => (
        <a
          href={list.link}
          style={{
            ...cssPerfectShape(40, 40),
            background: convertHexToRgba("--primary", 0.2),
          }}
          key={index}
          target="_blank"
          className="icon"
        >
          <list.icon />
        </a>
      ))}
    </div>
  );
};

export default Social;
