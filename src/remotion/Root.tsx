import { Composition, Folder, Still } from "remotion";
import { SignalDetected } from "./compositions/SignalDetected";
import { AgentActivated } from "./compositions/AgentActivated";
import { FomoAlert } from "./compositions/FomoAlert";
import { MascotChibiPreview } from "./stills/MascotChibiPreview";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Social-Clips">
        {/* Square format for X/Twitter, Telegram, Discord */}
        <Composition
          id="SignalDetected"
          component={SignalDetected}
          durationInFrames={180}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="AgentActivated"
          component={AgentActivated}
          durationInFrames={210}
          fps={30}
          width={1080}
          height={1080}
        />
        <Composition
          id="FomoAlert"
          component={FomoAlert}
          durationInFrames={180}
          fps={30}
          width={1080}
          height={1080}
        />
      </Folder>

      <Still
        id="MascotChibiPreview"
        component={MascotChibiPreview}
        width={800}
        height={800}
      />
    </>
  );
};
