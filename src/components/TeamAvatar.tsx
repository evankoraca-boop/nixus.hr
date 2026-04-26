type Props = { gender: "male" | "female"; size?: number };

export function TeamAvatar({ gender, size = 80 }: Props) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: "var(--color-brand-soft)",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 20px",
      }}
      aria-hidden="true"
    >
      {gender === "male" ? <MaleIcon /> : <FemaleIcon />}
    </div>
  );
}

function MaleIcon() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* head */}
      <circle cx="32" cy="20" r="10" fill="var(--color-brand)" />
      {/* shoulders/torso */}
      <path
        d="M12 56c0-11 9-20 20-20s20 9 20 20v2H12v-2z"
        fill="var(--color-brand)"
      />
    </svg>
  );
}

function FemaleIcon() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* head */}
      <circle cx="32" cy="20" r="10" fill="var(--color-brand)" />
      {/* dress shape */}
      <path
        d="M32 34c-8 0-14 6-15 14l-3 10h36l-3-10c-1-8-7-14-15-14z"
        fill="var(--color-brand)"
      />
    </svg>
  );
}
