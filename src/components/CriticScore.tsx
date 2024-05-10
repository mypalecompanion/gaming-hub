import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 90 ? "green" : score >= 80 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} paddingX="2" borderRadius="10">
      {score}
    </Badge>
  );
};

export default CriticScore;
