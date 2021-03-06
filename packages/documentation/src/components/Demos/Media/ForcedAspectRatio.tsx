import React, { FC } from "react";
import { MediaContainer } from "@react-md/media";

const ForcedAspectRatio: FC = () => (
  <div className="forced-aspect-ratio">
    <MediaContainer height={9} width={16} className="responsive-item">
      <img src="https://picsum.photos/400/300?image=3" alt="" />
    </MediaContainer>
    <MediaContainer height={1} width={1} className="responsive-item">
      <img src="https://picsum.photos/400/300?image=623" alt="" />
    </MediaContainer>
    <MediaContainer height={9} width={16} className="responsive-item">
      <iframe
        src="https://www.youtube.com/embed/kyAn3fSs8_A"
        allowFullScreen
        frameBorder="0"
        title="YouTube Video"
      />
    </MediaContainer>
  </div>
);

export default ForcedAspectRatio;
