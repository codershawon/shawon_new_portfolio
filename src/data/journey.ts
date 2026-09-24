export type JourneyStep = {
  date: string;
  title: string;
  place: string;
  current?: boolean; 
};

export const journey: JourneyStep[] = [
  {
    date: "Jan – Jun 2023",
    title: "Complete Web Development course",
    place: "Programming Hero",
  },
  {
    date: "2023",
    title: "Diploma in Computer Technology",
    place: "Chattogram Polytechnic Institute",
  },
  {
    date: "Nov 2023",
    title: "Joined as Web Developer",
    place: "Microters",
    current: true,
  },
  {
    date: "Apr 2026",
    title: "B.Sc. in Computer Science & Engineering",
    place: "East Delta University",
    current: true,
  },
];