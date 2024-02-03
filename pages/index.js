import { useTheme } from "styled-components";
import { lightTheme } from "@/src/components/styles/themes";

export default function HomePage() {
  const theme = useTheme();

  return (
    <div
      style={{
        color: theme.primary || lightTheme.primary,
        backgroundColor: theme.background || lightTheme.background,
      }}
    >
      Dies ist meine Komponente mit Farben aus dem Theme!
    </div>
  );
}
