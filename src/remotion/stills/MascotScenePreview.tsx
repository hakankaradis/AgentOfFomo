import { AbsoluteFill } from "remotion";
import AgentMascotScene from "../../components/animations/AgentMascotScene";

export const MascotScenePreview: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <AgentMascotScene animated={false} />
    </AbsoluteFill>
  );
};
