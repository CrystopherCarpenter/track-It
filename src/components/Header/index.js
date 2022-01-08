import { useLocation } from "react-router";
import { Logo, TopBar, P, Photo } from "./style"
import TrackIt from "../../assets/TrackIt.png"

export default function Header() {
        const { pathname } = useLocation();
        const isHomePage = pathname === `/` || pathname === `/cadastro`;

        return (
                (!isHomePage ? (
                        <TopBar>
                                <P>TrackIt</P>
                                <Photo src="https://nypost.com/wp-content/uploads/sites/2/2020/06/spongebob-gay-1.jpg?quality=80&strip=all&w=1024" alt="Foto" />
                        </TopBar>

                ) : (
                        <Logo src={TrackIt} alt="TrackIt" />
                )
                )
        )
}
