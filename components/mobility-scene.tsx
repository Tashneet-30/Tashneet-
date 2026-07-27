import { assetPath } from "@/lib/paths";

export function MobilityPageHeader() {
  return (
    <div className="mobility-page-header-bg" aria-hidden="true">
      <img
        src={assetPath("/mobility-header.svg")}
        alt=""
        className="mobility-page-header-bg__img"
      />
    </div>
  );
}
