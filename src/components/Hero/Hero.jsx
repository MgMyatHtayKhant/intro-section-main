// Componenet
import Button from "../Button/Button";

// Style
import "../../styles/Hero.scss";

// Images
import {
    audioClient,
    databizClient,
    makerClient,
    meetClient,

    heroLgImg,
    heroSmImg,
} from "../../assets/images/index";


export default function Hero() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-description">
                    <div className="content">
                        <h1 className="title">
                            <span className="break">Make</span> remote work
                        </h1>
                        <p className="info">
                            Get your team in sync no matter your location.
                            Streamline processes create team rituals and
                            watch productivity soar.
                        </p>
                        <Button type="normal" size="large" variant="dark" weight="bold">
                            Learn more
                        </Button>
                    </div>
                    <div className="client-container">
                        <img src={databizClient} alt="" />
                        <img src={audioClient} alt="" />
                        <img src={makerClient} alt="" />
                        <img src={meetClient} alt="" />
                    </div>
                </div>
                <div className="hero-img">
                    <picture>
                        <source media="(max-width: 40em)" srcSet={heroSmImg} />
                        <img src={heroLgImg} alt="Hero Image" />
                    </picture>
                </div>
            </div>
            <footer className="attribution">
                Challenge by
                <a href="https://www.frontendmentor.io?ref=challenge"
                    rel="noreferrer"
                    target="_blank"
                >Frontend Mentor</a>.
                Coded by
                <a
                    href="https://github.com/MgMyatHtayKhant?tab=repositories"
                    rel="noreferrer"
                    target="_blank"
                >Saul</a>.
            </footer>
        </>
    );
}