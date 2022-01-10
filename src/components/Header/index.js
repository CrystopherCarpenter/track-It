import { useLocation } from "react-router";
import { Logo, TopBar, P, Photo } from "./style"
import TrackIt from "../../assets/TrackIt.png"
import { useContext } from "react";
import UserContext from "../../Context/UserContext";

export default function Header() {
        const { user } = useContext(UserContext);
        const { pathname } = useLocation();
        const isHomePage = pathname === `/` || pathname === `/cadastro`;

        return (
                (!isHomePage ? (
                        <TopBar>
                                <P>TrackIt</P>
                                <Photo src={user.image} alt="Foto" />
                        </TopBar>

                ) : (
                        <Logo src={TrackIt} alt="TrackIt" />
                )
                )
        )
}
