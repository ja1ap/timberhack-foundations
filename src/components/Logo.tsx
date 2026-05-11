import logo from "@/assets/logo.png";

const Logo = ({ className = "h-8 w-auto", invert = false }: { className?: string; invert?: boolean }) => (
  <img
    src={logo}
    alt="Timberhack — Engenharia em madeira estrutural"
    className={`${className} ${invert ? "" : ""}`}
    style={invert ? {} : { filter: "none" }}
  />
);

export default Logo;
