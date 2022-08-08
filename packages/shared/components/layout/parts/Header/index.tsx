import Link from "next/link";
import { Logo } from "../../../ui/Logo";
import * as Styled from "./index.style";

interface HeaderProps {
  navigation: React.ReactNode;
}

/**
 * ヘッダーのコンポーネント
 */
export const Header: React.FC<HeaderProps> = ({ navigation }) => {
  return (
    <Styled.Content>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      {navigation}
    </Styled.Content>
  );
};
