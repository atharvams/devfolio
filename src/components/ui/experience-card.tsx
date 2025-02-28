interface ExpCard {
  title: string;
  instName: string;
  date: string;
}

function ExperienceCard({ title, instName, date }: ExpCard) {
  return (
    <div className="pt-4 text-center">
      <h1 className="font-[family-name:var(--font-space-grotsk)] font-[500]">
        {title}
      </h1>
      <p className="text-[0.9rem]">{instName}</p>
      <p className="text-[var(--date-text)] pb-4">{date}</p>
      <hr className="text-[var(--date-text)]" />
    </div>
  );
}

export default ExperienceCard;
