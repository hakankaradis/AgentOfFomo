import { AbsoluteFill } from "remotion";
import { AgentMascotChibi } from "../../components/animations/AgentMascotChibi";

export const MascotChibiPreview: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AgentMascotChibi size={600} animated={false} />
    </AbsoluteFill>
  );
};
