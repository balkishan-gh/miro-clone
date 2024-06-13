"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";
import Hint from "@/app/components/hint";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (userMemberships.data?.length === 0) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
          <Item
            key={mem.organization.id}
            id={mem.organization.id}
            name={mem.organization.name}
            imageUrl={mem.organization.imageUrl}
          />
      ))}
    </ul>
  );
};

export default List;
