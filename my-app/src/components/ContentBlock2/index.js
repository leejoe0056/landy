import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";

const ContentBlock2 = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default ContentBlock2;
