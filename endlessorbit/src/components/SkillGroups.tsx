import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export default function SkillGroups() {
  return (
    <section id="skills" className="section-pad !pt-0">
      <SectionHeading
        eyebrow="Skills"
        title="What I work with"
        subtitle="Grouped by domain — from strategy and data to community and design."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.group} className="glass p-5">
            <h3 className="mb-4 font-display text-sm font-bold tracking-wide text-cyan/90">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
