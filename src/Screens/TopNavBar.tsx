import { EColors } from "../Enums/EColors";

export default function TopNavBar() {
  return (
    <>
      <nav
        style={{
          backgroundColor: EColors.PRIMARYBACKGROUND,
          borderColor: EColors.BORDERGRAY,
          filter: "saturate(-30%)",
        }}
        className="hidden  2xl:flex h-24 items-center justify-center  border-white "
      >
        <div
          style={{ fontFamily: "Orbitron", color: EColors.PRIMARY }}
          className="text-7xl font-bold  "
        >
          <div className="flex">
            <div>Chain</div>
            <div className="text-white">Sight</div>
          </div>
        </div>
      </nav>
      {/* Tablet */}
      <nav className=" hidden md:flex 2xl:hidden">
        <div
          style={{
            backgroundColor: EColors.PRIMARYBACKGROUND,
            borderColor: EColors.BORDERGRAY,
          }}
          className="flex w-full justify-center items-center border-b border-white  h-10"
        >
          <div className=" flex text-2xl" style={{ fontFamily: "Orbitron" }}>
            <div style={{ color: EColors.PRIMARY }}>Chain</div>
            <div style={{ color: "white" }}>Sight</div>
          </div>
        </div>
      </nav>

      {/* CellPhone */}
      <nav className="md:hidden">
        <div
          style={{
            backgroundColor: EColors.PRIMARYBACKGROUND,
            borderColor: EColors.BORDERGRAY,
          }}
          className="flex justify-center items-center border-b border-white  h-10"
        >
          <div className="flex text-2xl" style={{ fontFamily: "Orbitron" }}>
            <div style={{ color: EColors.PRIMARY }}>Chain</div>
            <div style={{ color: "white" }}>Sight</div>
          </div>
        </div>
      </nav>
    </>
  );
}
