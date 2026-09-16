export default function SkillRing({ name, pct }: { name: string; pct: number }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="text-[13px] font-semibold text-muted">{name}</div>
      <div
        className="flex h-[80px] w-[80px] items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(#2158ff 0turn ${pct / 100}turn, #eef1f7 ${pct / 100}turn 1turn)`
        }}
      >
        <div className="flex h-[76%] w-[76%] items-center justify-center rounded-full bg-white font-display text-[14px] font-bold">
          {pct}%
        </div>
      </div>
    </div>
  );
}
