import { AbsoluteFill } from "remotion";
import AgentMascotOrb from "../../components/animations/AgentMascotOrb";

export const MascotOrbPreview: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <AgentMascotOrb size={600} animated={false} />
    </AbsoluteFill>
  );
};
