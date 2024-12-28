"use client";

import ActivityCard from "@/components/social/ActivityCard";
import { activities } from "@/data/social";

export default function SocialPage() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Social Activities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mx-8">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            description={activity.description}
            href={activity.href}
          />
        ))}
      </div>
    </div>
  );
}
