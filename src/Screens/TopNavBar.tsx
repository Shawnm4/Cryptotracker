import { EColors } from "../Enums/EColors";

export default function TopNavBar() {
  return (
    <>
      <nav
        style={{
          backgroundColor: EColors.PRIMARYBACKGROUND,
          borderColor: EColors.BORDERGRAY,
        }}
        className="h-32 flex items-center justify-center border-b border-white "
      >
        <div
          style={{ fontFamily: "Orbitron", color: EColors.PRIMARY }}
          className="text-7xl font-bold  "
        >
          <div className="flex">
            <div>Crypto</div>
            <div className="text-white">Tracker</div>
          </div>
        </div>
      </nav>
    </>
  );
}
