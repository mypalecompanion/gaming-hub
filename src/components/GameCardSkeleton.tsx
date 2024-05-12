import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} width="300px">
      <Skeleton height="240px" />
      <SkeletonText />
    </Card>
  );
};

export default GameCardSkeleton;
