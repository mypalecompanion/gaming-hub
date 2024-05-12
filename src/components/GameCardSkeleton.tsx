import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="240px" />
      <SkeletonText />
    </Card>
  );
};

export default GameCardSkeleton;
