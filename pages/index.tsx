import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const VectorIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Content1 = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
`;
const Logomark = styled.div`
  position: absolute;
  height: 100%;
  width: 16.49%;
  top: 1.56%;
  right: 83.14%;
  bottom: -1.56%;
  left: 0.36%;
  filter: drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1))
    drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06));
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LogotypeIcon = styled.img`
  position: absolute;
  height: 50%;
  width: 74.43%;
  top: 25%;
  right: 5.05%;
  bottom: 25%;
  left: 20.52%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const LogoWrap = styled.div`
  position: relative;
  width: 194px;
  height: 32px;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PlaceholderIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Text1 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 600;
`;
const Buttonsbutton = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const ChevronDownIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const DropdownHeaderNavigationTri = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Navigation1 = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
`;
const Text4 = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Inter;
  color: #94969c;
  text-align: left;
`;
const TextPadding = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 2px;
`;
const Buttonsbutton4 = styled.div`
  border-radius: 8px;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  gap: 6px;
`;
const Text5 = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: Inter;
  color: #fff;
  text-align: left;
`;
const PrimaryButton = styled.div`
  border-radius: 8px;
  background-color: #7e56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #7e56d9;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  gap: 6px;
`;
const NavigationActions = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
`;
const Header = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DropdownHeaderNavigation = styled.header`
  align-self: stretch;
  position: relative;
  height: 80px;
  z-index: 1;
  text-align: left;
  font-size: 16px;
  color: #94969c;
  font-family: Inter;
`;
const Text6 = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  font-family: Inter;
  color: #d6bbfb;
  text-align: center;
  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
const Badge = styled.button`
  cursor: pointer;
  border: 1.5px solid #b692f6;
  padding: 2px 10px;
  background-color: transparent;
  border-radius: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  mix-blend-mode: normal;
`;
const Message = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
const ArrowRightIcon = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Content3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;
const BadgeGroup = styled.div`
  border-radius: 1000px;
  background-color: #0c111d;
  border: 1.5px solid #b692f6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 10px 4px 4px;
  gap: 12px;
`;
const UnleashThePower = styled.span``;
const AiAthletes = styled.span`
  color: #9e77ed;
`;
const Heading = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: 60px;
  letter-spacing: -0.02em;
  line-height: 72px;
  font-weight: 700;
  font-family: "Suisse Intl";
  text-align: center;
  color: #f5f5f6;
`;
const HeadingAndBadge = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const SupportingText = styled.div`
  width: 100%;
  position: relative;
  font-size: 20px;
  line-height: 30px;
  color: #cecfd2;
  text-align: center;
  display: inline-block;
  max-width: 768px;
  @media screen and (max-width: 420px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
const HeadingAndSupportingText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  max-width: 1024px;
`;
const PlayCircleIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Text7 = styled.div`
  position: relative;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  font-family: Inter;
  color: #cecfd2;
  text-align: left;
`;
const Actions = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;
const Content2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
`;
const Container1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
`;
const BackgroundPatternIcon = styled.img`
  position: relative;
  width: 1440px;
  height: 64px;
  object-fit: cover;
`;
const Section = styled.div`
  align-self: stretch;
  background-color: #161b26;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 96px 0px 0px;
`;
const ShadowOverlayPlayer = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  height: 116px;
`;
const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const Background = styled.div`
  position: absolute;
  width: calc(100% - 28px);
  top: 4px;
  right: 0px;
  left: 28px;
  border-radius: 4px;
  background-color: #fff;
  height: 8px;
  opacity: 0.3;
`;
const BufferingProgress = styled.div`
  position: absolute;
  width: 16%;
  top: 0px;
  right: 84%;
  left: 0%;
  border-radius: 4px;
  background-color: #fff;
  height: 8px;
  opacity: 0.5;
`;
const Buffering = styled.div`
  position: absolute;
  width: calc(100% - 28px);
  top: 4px;
  right: 0px;
  left: 28px;
  height: 8px;
`;
const ProgressLine = styled.div`
  position: absolute;
  top: 4px;
  left: 28px;
  border-radius: 4px;
  background-color: #fff;
  width: 8px;
  height: 8px;
`;
const PlayIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 16px;
  height: 16px;
`;
const Content5 = styled.div`
  align-self: stretch;
  position: relative;
  height: 20px;
`;
const TimestampStart = styled.div`
  position: relative;
  line-height: 18px;
  font-weight: 600;
`;
const Timestamps = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
const VideoProgress = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  right: 20px;
  bottom: 8px;
  left: 12px;
  border-radius: 8px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text9 = styled.div`
  position: relative;
  line-height: 20px;
  font-weight: 500;
`;
const Badge1 = styled.div`
  border-radius: 1000px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 2px 10px;
`;
const Text10 = styled.div`
  position: relative;
  font-size: 36px;
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 600;
  font-family: "Suisse Intl";
  text-align: left;
`;
const TextAndBadge = styled.div`
  position: absolute;
  top: calc(50% - 44px);
  left: 32px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
  text-align: center;
  font-size: 14px;
`;
const PlayButtonIcon = styled.img`
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  border-radius: 1000px;
  width: 80px;
  height: 80px;
  object-fit: cover;
  display: none;
`;
const VideoPlayer = styled.div`
  position: relative;
  border-radius: 8px;
  width: 916px;
  height: 516px;
  overflow: hidden;
  flex-shrink: 0;
  background-image: url("/metaverse-girl.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const Content4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
`;
const Section1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0px 96px;
  font-size: 12px;
  color: #fff;
`;
const HeaderSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;
const HeroHeaderSection = styled.section`
  align-self: stretch;
  background-color: #0c111d;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: 14px;
  color: #d6bbfb;
  font-family: Inter;
`;
const DividerIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 1px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Container3 = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
`;
const SectionDivider = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
const Heading1 = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 420px) {
    font-size: 30px;
    line-height: 38px;
  }
`;
const SupportingText1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 30px;
  font-family: Inter;
  color: #94969c;
  @media screen and (max-width: 420px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
const HeadingAndSupportingText1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  max-width: 768px;
`;
const Number1 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 72px;
  font-weight: 600;
  @media screen and (max-width: 420px) {
    font-size: 48px;
    line-height: 60px;
  }
`;
const Text11 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  font-family: Inter;
`;
const NumberAndText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;
const MetricItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  min-width: 240px;
`;
const Number2 = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  letter-spacing: -0.02em;
  line-height: 72px;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 420px) {
    font-size: 48px;
    line-height: 60px;
  }
`;
const Content7 = styled.div`
  align-self: stretch;
  border-radius: 16px;
  background-color: #161b26;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 64px;
  gap: 32px;
`;
const Container5 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
  font-size: 60px;
`;
const MetricsSection = styled.section`
  align-self: stretch;
  background-color: #0c111d;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 0px;
  gap: 64px;
  text-align: center;
  font-size: 36px;
  color: #f5f5f6;
  font-family: "Suisse Intl";
`;
const FeaturedIcon = styled.img`
  position: relative;
  border-radius: 1000px;
  width: 56px;
  height: 56px;
  object-fit: cover;
`;
const HeadingAndIcon = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;
const SupportingText2 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
  line-height: 28px;
  font-family: Inter;
  color: #94969c;
`;
const HeadingAndSupportingText2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  max-width: 360px;
`;
const FeaturedIcon1 = styled.img`
  position: relative;
  border-radius: 10px;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
const Text17 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 30px;
  font-weight: 600;
`;
const SupportingText3 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: #94969c;
`;
const TextAndSupportingText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;
const Buttonsbutton11 = styled.div`
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  color: #cecfd2;
`;
const FeatureText = styled.div`
  flex: 1;
  background-color: #161b26;
  height: 314px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  box-sizing: border-box;
  gap: 24px;
  min-width: 280px;
`;
const Content8 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  font-size: 20px;
  font-family: Inter;
`;
const Container6 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  gap: 64px;
  max-width: 1280px;
`;
const FeaturesSection = styled.section`
  align-self: stretch;
  background-color: #0c111d;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 96px 0px;
  text-align: left;
  font-size: 36px;
  color: #f5f5f6;
  font-family: "Suisse Intl";
`;
const DividerIcon1 = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 1px;
  flex-shrink: 0;
`;
const Subheading = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 600;
`;
const Heading3 = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: 36px;
  letter-spacing: -0.02em;
  line-height: 44px;
  font-weight: 600;
  font-family: "Suisse Intl";
  color: #f5f5f6;
  @media screen and (max-width: 420px) {
    font-size: 30px;
    line-height: 38px;
  }
`;
const EnvisionAFuture = styled.span`
  display: block;
`;
const SupportingText7 = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 30px;
  color: #94969c;
  @media screen and (max-width: 420px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
const HeadingAndSupportingText3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  max-width: 768px;
`;
const Content13 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SupportingText8 = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  color: #94969c;
`;
const FeatureText4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  min-width: 240px;
`;
const Content14 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
`;
const ShadowIcon = styled.img`
  position: absolute;
  height: 1.09%;
  width: 101.69%;
  top: 98.68%;
  right: -0.03%;
  bottom: 0.22%;
  left: -1.67%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const MacbookPro16 = styled.img`
  position: absolute;
  height: 99.42%;
  width: 98.14%;
  top: 0%;
  right: 0.92%;
  bottom: 0.58%;
  left: 0.94%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const CameraIcon = styled.img`
  position: absolute;
  height: 0.8%;
  width: 0.47%;
  top: 1.67%;
  right: 49.43%;
  bottom: 97.53%;
  left: 50.1%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const LogoIcon = styled.img`
  position: absolute;
  height: 1.27%;
  width: 5.51%;
  top: 91.73%;
  right: 46.91%;
  bottom: 7%;
  left: 47.58%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ScreenMockupReplaceFill = styled.img`
  position: absolute;
  height: 86.47%;
  width: 80.92%;
  top: 3.1%;
  right: 9.13%;
  bottom: 10.43%;
  left: 9.95%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const MacbookProMockup = styled.div`
  position: absolute;
  top: 56px;
  left: 40px;
  width: 768px;
  height: 448.5px;
  overflow: hidden;
`;
const MockupWrap = styled.div`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 24px;
  width: 768px;
  overflow: hidden;
`;
const HandDrawnArrowIcon = styled.img`
  position: absolute;
  top: -140.6px;
  left: 112.9px;
  width: 282.6px;
  height: 243.9px;
  object-fit: contain;
`;
const Content15 = styled.div`
  flex: 1;
  position: relative;
  height: 560px;
`;
const Container9 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  gap: 64px;
  max-width: 1280px;
  font-size: 20px;
  color: #f5f5f6;
`;
const FeaturesSection1 = styled.section`
  align-self: stretch;
  background-color: #0c111d;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 96px 0px;
  gap: 64px;
  text-align: left;
  font-size: 16px;
  color: #cecfd2;
  font-family: Inter;
`;
const SupportingText12 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 30px;
  color: #94969c;
`;
const Container11 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  max-width: 1280px;
  text-align: center;
  font-size: 16px;
  color: #cecfd2;
  font-family: Inter;
`;
const FeaturedIcon9 = styled.img`
  position: relative;
  border-radius: 1000px;
  width: 48px;
  height: 48px;
  object-fit: cover;
`;
const Heading5 = styled.h3`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 38px;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 420px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
const SupportingText13 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
  line-height: 28px;
  font-family: Inter;
  color: #94969c;
  @media screen and (max-width: 420px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const HeadingAndSupportingText5 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;
const CheckIcon = styled.img`
  position: relative;
  border-radius: 1000px;
  width: 28px;
  height: 28px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Text33 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 28px;
`;
const TextWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CheckItemText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`;
const CheckItems = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 16px;
  gap: 20px;
  font-size: 18px;
  color: #94969c;
  font-family: Inter;
`;
const Content17 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
`;
const MockupShadow = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 56px);
  top: 0px;
  right: 28px;
  bottom: 0px;
  left: 28px;
  background-color: #000;
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
`;
const ScreenMockupIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 10px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ScreenMockup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  width: 768px;
  height: 512px;
`;
const Content18 = styled.div`
  flex: 1;
  position: relative;
  height: 512px;
`;
const Container12 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 32px;
  box-sizing: border-box;
  gap: 96px;
  max-width: 1280px;
`;
const ScreenMockup1 = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 10px;
  width: 768px;
  height: 512px;
`;
const CheckIcon3 = styled.img`
  position: relative;
  border-radius: 1000px;
  width: 28px;
  height: 28px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const FeaturesSection2 = styled.section`
  align-self: stretch;
  background-color: #0c111d;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 96px 0px;
  gap: 96px;
  text-align: left;
  font-size: 30px;
  color: #f5f5f6;
  font-family: "Suisse Intl";
`;
const ClaimYourSpot = styled.p`
  margin-block-start: 0;
  margin-block-end: 18px;
`;
const ComingEarly20241 = styled.i``;
const ComingEarly2024 = styled.p`
  margin: 0;
`;
const SupportingText16 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 18px;
  line-height: 28px;
  color: #94969c;
  font-family: Inter;
`;
const Buttonsbutton19 = styled.div`
  border-radius: 8px;
  background-color: #161b26;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #333741;
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  gap: 6px;
`;
const Buttonsbutton20 = styled.div`
  border-radius: 8px;
  background-color: #7e56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #7e56d9;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  gap: 6px;
  color: #fff;
`;
const Actions1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  text-align: left;
  font-size: 16px;
  color: #cecfd2;
  font-family: Inter;
`;
const Content23 = styled.div`
  align-self: stretch;
  border-radius: 16px;
  background-color: #161b26;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 64px;
  gap: 32px;
`;
const CtaSection = styled.section`
  align-self: stretch;
  background-color: #0c111d;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 36px;
  color: #f5f5f6;
  font-family: "Suisse Intl";
`;
const SocialIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  cursor: pointer;
`;
const SocialIcon5 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  display: none;
`;
const SocialIcons = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
`;
const FooterText = styled.div`
  position: relative;
  line-height: 24px;
  display: inline-block;
  width: 320px;
  flex-shrink: 0;
`;
const Content24 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Footer = styled.footer`
  align-self: stretch;
  background-color: #0c111d;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 48px 0px;
  text-align: right;
  font-size: 16px;
  color: #94969c;
  font-family: Inter;
`;
const HomepageRoot = styled.div`
  position: relative;
  background-color: #0c111d;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 420px) {
    width: 360px;
  }
`;

const Homepage: NextPage = () => {
  const onSocialIconClick = () => {
    window.location.href = "https://twitter.com/esportsone";
  };

  const onSocialIcon1Click = () => {
    window.location.href = "https://linkedin.com/in/matthewgunnin";
  };

  const onSocialIcon2Click = () => {
    window.location.href = "https://facebook.com/esportsone";
  };

  const onSocialIcon3Click = () => {
    window.location.href = "https://github.com/mgunnin";
  };

  return (
    <>
      <Head>
        <title>Synthlete</title>
        <meta name="description" content="Virtual AI Athletes" />
      </Head>
      <HomepageRoot>
        <HeroHeaderSection>
          <DropdownHeaderNavigation>
            <Header>
              <Container>
                <Content>
                  <Logo>
                    <LogoWrap>
                      <Logomark>
                        <Content1>
                          <VectorIcon
                            alt="lacra labs"
                            src="/logo_mark@1x.png"
                          />
                        </Content1>
                      </Logomark>
                      <LogotypeIcon alt="" src="/logo_type.png" />
                    </LogoWrap>
                  </Logo>
                </Content>
                <NavigationActions>
                  <Buttonsbutton4>
                    <TextPadding>
                      <Text4>Log in</Text4>
                    </TextPadding>
                  </Buttonsbutton4>
                  <PrimaryButton>
                    <TextPadding>
                      <Text5>COMING SOON</Text5>
                    </TextPadding>
                  </PrimaryButton>
                </NavigationActions>
              </Container>
            </Header>
          </DropdownHeaderNavigation>
          <HeaderSection>
            <Section>
              <Container1>
                <Content2>
                  <HeadingAndSupportingText>
                    <HeadingAndBadge>
                      <BadgeGroup>
                        <Badge>
                          <Text6>New feature</Text6>
                        </Badge>
                        <Content3>
                          <Message>Your Synthlete is generating...</Message>
                          <ArrowRightIcon
                            alt="arrow-right"
                            src="/icon-arrow-right@1x.png"
                          />
                        </Content3>
                      </BadgeGroup>
                      <Heading>
                        <UnleashThePower>{`Unleash the Power of Human-Owned Virtual `}</UnleashThePower>
                        <AiAthletes>AI Athletes</AiAthletes>
                      </Heading>
                    </HeadingAndBadge>
                    <SupportingText>
                      Synthlete stands at the forefront of the entertainment and
                      competition sectors, pioneering the use of generative AI
                      to create sophisticated, human-owned synthetic athletes.
                      Our virtual AI agents are trained on a pre-existing
                      dataset of esports and sports and honed and nurtured by
                      humans to create a symbiotic relationship unlike anything
                      before. By shattering the limitations imposed by
                      traditional sports and esports, we're reinventing a
                      dynamic future that facilitates all new forms of
                      entertainment.
                    </SupportingText>
                  </HeadingAndSupportingText>
                  <Actions>
                    <PrimaryButton>
                      <TextPadding>
                        <Text5>COMING SOON</Text5>
                      </TextPadding>
                    </PrimaryButton>
                  </Actions>
                  <VideoPlayer>
                    <ShadowOverlayPlayer />
                    <Overlay />
                    <VideoProgress>
                      <Content5>
                        <Background />
                        <ProgressLine />
                      </Content5>
                    </VideoProgress>
                  </VideoPlayer>
                </Content2>
              </Container1>
            </Section>
          </HeaderSection>
        </HeroHeaderSection>
        <SectionDivider>
          <Container3>
            <DividerIcon alt="" src="/divider@1x.png" />
          </Container3>
        </SectionDivider>
        <MetricsSection>
          <Container2>
            <Content4>
              <HeadingAndSupportingText1>
                <Heading1>Unique Collection of Data Models</Heading1>
                <SupportingText1>
                  Every historical statistic goes back decades.
                </SupportingText1>
              </HeadingAndSupportingText1>
            </Content4>
          </Container2>
          <Container5>
            <Content7>
              <MetricItem>
                <NumberAndText>
                  <Number1>3.1B+</Number1>
                  <Text11>Combined Tokens</Text11>
                </NumberAndText>
              </MetricItem>
              <MetricItem>
                <NumberAndText>
                  <Number1>1,000</Number1>
                  <Text11>Virtual Arenas</Text11>
                </NumberAndText>
              </MetricItem>
              <MetricItem>
                <NumberAndText>
                  <Number2>Infinite</Number2>
                  <Text11>Personalities</Text11>
                </NumberAndText>
              </MetricItem>
            </Content7>
          </Container5>
        </MetricsSection>
        <FeaturesSection>
          <Container6>
            <HeadingAndSupportingText2>
              <HeadingAndIcon>
                <FeaturedIcon alt="zap-fast" src="/icon-zap-fast@1x.png" />
                <Heading1>The AI Influencer You Never Knew You Needed</Heading1>
              </HeadingAndIcon>
              <SupportingText2>
                Experience the thrill of owning a virtual AI athlete with a
                distinct personality and backstory and competing in exclusive,
                avant-garde sports and esports leagues. Our AI athletes redefine
                the world of sports and esports and hold the potential to
                revolutionize domains like daily fantasy, sports betting, and
                fandom. They offer an exhilarating alternative for younger
                generations who may not be engaged by traditional sports while
                enabling others to relive the excitement of playing sports in
                their youth.
              </SupportingText2>
            </HeadingAndSupportingText2>
            <Content8>
              <FeatureText>
                <FeaturedIcon1
                  alt="message-chat-circle"
                  src="/icon-message-chat-circle@1x.png"
                />
                <HeadingAndIcon>
                  <TextAndSupportingText>
                    <Text17>Virtual Athletes</Text17>
                    <SupportingText3>
                      Join the elite ranks of AI athletes and compete in
                      thrilling global tournaments, where the victors earn
                      millions in prize money. It's your chance to showcase your
                      skills and dominate the virtual sports world.
                    </SupportingText3>
                  </TextAndSupportingText>
                  <Buttonsbutton11>
                    <PlaceholderIcon
                      alt=""
                      src="/placeholder1@2x@2x@2x@2x@2x@2x.svg"
                    />
                    <Text1>View integration</Text1>
                    <ChevronDownIcon alt="" src="/arrowright2x.svg" />
                  </Buttonsbutton11>
                </HeadingAndIcon>
              </FeatureText>
              <FeatureText>
                <FeaturedIcon1 alt="zap" src="/icon-zap@1x.png" />
                <HeadingAndIcon>
                  <TextAndSupportingText>
                    <Text17>Made For You</Text17>
                    <SupportingText3>
                      Create your very own AI athlete and watch as it evolves
                      and learns, adapting to your unique training methods and
                      strategies.
                    </SupportingText3>
                  </TextAndSupportingText>
                  <Buttonsbutton11>
                    <PlaceholderIcon
                      alt=""
                      src="/placeholder1@2x@2x@2x@2x@2x@2x.svg"
                    />
                    <Text1>View integration</Text1>
                    <ChevronDownIcon alt="" src="/arrowright2x.svg" />
                  </Buttonsbutton11>
                </HeadingAndIcon>
              </FeatureText>
              <FeatureText>
                <FeaturedIcon1
                  alt="message-smile-circle"
                  src="/icon-message-smile-circle@1x.png"
                />
                <HeadingAndIcon>
                  <TextAndSupportingText>
                    <Text17>AI Influencers</Text17>
                    <SupportingText3>
                      Extend your AI athlete's influence beyond the virtual
                      world. Cultivate a unique public persona, engage with your
                      fanbase, and establish a strong social media presence.
                      Connect with fans from around the world and become a true
                      digital sports icon.
                    </SupportingText3>
                  </TextAndSupportingText>
                  <Buttonsbutton11>
                    <PlaceholderIcon
                      alt=""
                      src="/placeholder1@2x@2x@2x@2x@2x@2x.svg"
                    />
                    <Text1>View integration</Text1>
                    <ChevronDownIcon alt="" src="/arrowright2x.svg" />
                  </Buttonsbutton11>
                </HeadingAndIcon>
              </FeatureText>
              <FeatureText>
                <FeaturedIcon1
                  alt="chart-breakout-square"
                  src="/icon-chart-breakout-square@1x.png"
                />
                <HeadingAndIcon>
                  <TextAndSupportingText>
                    <Text17>Infinite Value</Text17>
                    <SupportingText3>
                      Our virtual world never stops evolving. With new sports
                      and esports, large language models, advancements in AI,
                      and more. And that’s why getting in early is key!
                    </SupportingText3>
                  </TextAndSupportingText>
                  <Buttonsbutton11>
                    <PlaceholderIcon
                      alt=""
                      src="/placeholder1@2x@2x@2x@2x@2x@2x.svg"
                    />
                    <Text1>View integration</Text1>
                    <ChevronDownIcon alt="" src="/arrowright2x.svg" />
                  </Buttonsbutton11>
                </HeadingAndIcon>
              </FeatureText>
            </Content8>
          </Container6>
        </FeaturesSection>
        <SectionDivider>
          <Container3>
            <DividerIcon1 alt="" src="/divider2.svg" />
          </Container3>
        </SectionDivider>
        <FeaturesSection1>
          <Container2>
            <Content13>
              <HeadingAndSupportingText3>
                <NumberAndText>
                  <Subheading>HOW IT WORKS</Subheading>
                  <Heading3>
                    Simulacrum Agents that learn, train, and win 24/7!
                  </Heading3>
                </NumberAndText>
                <SupportingText7>
                  <EnvisionAFuture>
                    Envision a future where AI agents, owned by humans, inhabit
                    virtual realms, honing their skills and competing as digital
                    athletes. Watch as your AI athlete comes to life with its
                    own distinct personality, shaped by its interactions with
                    you and the world it inhabits. These virtual worlds act as
                    hubs for sports and entertainment, fostering a constantly
                    evolving ecosystem of training and competition.
                  </EnvisionAFuture>
                  <EnvisionAFuture>
                    The elite AI athletes, trained on bespoke data models, vie
                    for the championship title in global tournaments, with the
                    victors earning millions in prize money, funded entirely by
                    sponsors and fans.
                  </EnvisionAFuture>
                  <EnvisionAFuture>
                    Where each AI has the potential to cultivate a unique public
                    persona, interacting and engaging with their fanbase,
                    establishing their own social media presence, and extending
                    their influence on a global scale.
                  </EnvisionAFuture>
                </SupportingText7>
              </HeadingAndSupportingText3>
            </Content13>
          </Container2>
          <Container9>
            <Content14>
              <FeatureText4>
                <FeaturedIcon1
                  alt=""
                  src="/icon-message-chat-circle11@1x.png"
                />
                <TextAndSupportingText>
                  <Text17>Acquire</Text17>
                  <SupportingText8>
                    Create your own virtual AI athlete and personalize it to
                    your liking. Metapass members being prioritized.
                  </SupportingText8>
                </TextAndSupportingText>
                <Buttonsbutton11>
                  <PlaceholderIcon
                    alt=""
                    src="/placeholder1@2x@2x@2x@2x@2x@2x.svg"
                  />
                  <Text1>Learn more</Text1>
                  <ChevronDownIcon alt="" src="/arrowright2x.svg" />
                </Buttonsbutton11>
              </FeatureText4>
              <FeatureText4>
                <FeaturedIcon1 alt="" src="/icon-zap11@1x.png" />
                <TextAndSupportingText>
                  <Text17>Train</Text17>
                  <SupportingText8>
                    From beginner to professional level models, our virtual
                    Arenas house the largest known collection of sports and
                    esports datasets. Your Synthlete will go from the playground
                    to the big leagues in no time!
                  </SupportingText8>
                </TextAndSupportingText>
                <Buttonsbutton11>
                  <PlaceholderIcon
                    alt=""
                    src="/placeholder1@2x@2x@2x@2x@2x@2x.svg"
                  />
                  <Text1>Learn more</Text1>
                  <ChevronDownIcon alt="" src="/arrowright2x.svg" />
                </Buttonsbutton11>
              </FeatureText4>
              <FeatureText4>
                <FeaturedIcon1
                  alt=""
                  src="/icon-chart-breakout-square11@1x.png"
                />
                <TextAndSupportingText>
                  <Text17>Compete</Text17>
                  <SupportingText8>
                    Enter into daily and weekly contests across popular sports
                    and esports for millions in prize money.
                  </SupportingText8>
                </TextAndSupportingText>
                <Buttonsbutton11>
                  <PlaceholderIcon alt="" src="/placeholder4.svg" />
                  <Text1>Learn more</Text1>
                  <ChevronDownIcon alt="" src="/arrowright2x.svg" />
                </Buttonsbutton11>
              </FeatureText4>
              <FeatureText4>
                <FeaturedIcon1
                  alt=""
                  src="/icon-message-smile-circle11@1x.png"
                />
                <TextAndSupportingText>
                  <Text17>Influence</Text17>
                  <SupportingText8>
                    Establish a unique public persona and brand for your AI
                    Athlete, enabling them to build and engage with their own
                    global fanbase.
                  </SupportingText8>
                </TextAndSupportingText>
                <Buttonsbutton11>
                  <PlaceholderIcon alt="" src="/placeholder4.svg" />
                  <Text1>Learn more</Text1>
                  <ChevronDownIcon alt="" src="/arrowright2x.svg" />
                </Buttonsbutton11>
              </FeatureText4>
            </Content14>
            <Content15>
              <MockupWrap>
                <MacbookProMockup>
                  <ShadowIcon alt="" src="/shadow@2x.png" />
                  <MacbookPro16 alt="" src="/macbook-pro-16@2x.png" />
                  <CameraIcon alt="" src="/camera@2x.png" />
                  <LogoIcon alt="" src="/logo@2x.png" />
                  <ScreenMockupReplaceFill
                    alt=""
                    src="/screen-mockup-replace-fill@2x.png"
                  />
                </MacbookProMockup>
              </MockupWrap>
              <HandDrawnArrowIcon alt="" src="/handdrawn-arrow@2x.png" />
            </Content15>
          </Container9>
        </FeaturesSection1>
        <SectionDivider>
          <Container3>
            <DividerIcon1 alt="" src="/divider2.svg" />
          </Container3>
        </SectionDivider>
        <FeaturesSection2>
          <Container11>
            <Content4>
              <HeadingAndSupportingText1>
                <NumberAndText>
                  <Subheading>NEXT GENERATION AI AGENTS</Subheading>
                  <Heading3>Athletes of the Future</Heading3>
                </NumberAndText>
                <SupportingText12>
                  AI Agents that are trained specifically for sports and esports
                </SupportingText12>
              </HeadingAndSupportingText1>
            </Content4>
          </Container11>
          <Container12>
            <Content17>
              <HeadingAndIcon>
                <FeaturedIcon9
                  alt=""
                  src="/icon-message-chat-circle21@1x.png"
                />
                <HeadingAndSupportingText5>
                  <Heading5>{`Digital Stadium & Arenas`}</Heading5>
                  <SupportingText13>
                    Virtual venues where AI Athletes compete
                  </SupportingText13>
                </HeadingAndSupportingText5>
              </HeadingAndIcon>
              <CheckItems>
                <CheckItemText>
                  <CheckIcon3
                    alt="check-circle"
                    src="/icon-check-circle@1x.png"
                  />
                  <TextWrap>
                    <Text33>{`Tailored to the sports and esports you care about.`}</Text33>
                  </TextWrap>
                </CheckItemText>
                <CheckItemText>
                  <CheckIcon3
                    alt="check-circle"
                    src="/icon-check-circle@1x.png"
                  />
                  <TextWrap>
                    <Text33>{`Your arena, your rules.`}</Text33>
                  </TextWrap>
                </CheckItemText>
                <CheckItemText>
                  <CheckIcon3
                    alt="check-circle"
                    src="/icon-check-circle@1x.png"
                  />
                  <TextWrap>
                    <Text33>{`Customizable from the inside out.`}</Text33>
                  </TextWrap>
                </CheckItemText>
              </CheckItems>
            </Content17>
            <Content18>
              <ScreenMockup>
                <MockupShadow />
                <ScreenMockupIcon
                  alt=""
                  src="/screen-mockup-replace-fill1@2x.png"
                />
              </ScreenMockup>
            </Content18>
          </Container12>
          <Container12>
            <Content18>
              <ScreenMockup1>
                <MockupShadow />
                <ScreenMockupIcon alt="" src="/screen-mockup@2x.png" />
              </ScreenMockup1>
            </Content18>
            <Content17>
              <HeadingAndIcon>
                <FeaturedIcon9 alt="zap-fast" src="/icon-zap-fast11@1x.png" />
                <HeadingAndSupportingText5>
                  <Heading5>Robust Data Models</Heading5>
                  <SupportingText13>
                    100M+ data points, built on decades of real-life sports and
                    esports.
                  </SupportingText13>
                </HeadingAndSupportingText5>
              </HeadingAndIcon>
              <CheckItems>
                <CheckItemText>
                  <CheckIcon3
                    alt="check-circle"
                    src="/icon-check-circle@1x.png"
                  />
                  <TextWrap>
                    <Text33>{`Aggregated across all major sports & esports`}</Text33>
                  </TextWrap>
                </CheckItemText>
                <CheckItemText>
                  <CheckIcon3
                    alt="check-circle"
                    src="/icon-check-circle@1x.png"
                  />
                  <TextWrap>
                    <Text33>
                      Includes news, articles, social media and live commentary
                    </Text33>
                  </TextWrap>
                </CheckItemText>
                <CheckItemText>
                  <CheckIcon3
                    alt="check-circle"
                    src="/icon-check-circle@1x.png"
                  />
                  <TextWrap>
                    <Text33>Updated daily</Text33>
                  </TextWrap>
                </CheckItemText>
              </CheckItems>
            </Content17>
          </Container12>
          <Container12>
            <Content17>
              <HeadingAndIcon>
                <FeaturedIcon9
                  alt="breakout-square"
                  src="/chart-breakout-square@1x.png"
                />
                <HeadingAndSupportingText5>
                  <Heading5>Manage a Team of AI Athletes</Heading5>
                  <SupportingText13>
                    Host a wide range of contest types, training classes,
                    events, and more!
                  </SupportingText13>
                </HeadingAndSupportingText5>
              </HeadingAndIcon>
              <CheckItems>
                <CheckItemText>
                  <CheckIcon3
                    alt="check-circle"
                    src="/icon-check-circle@1x.png"
                  />
                  <TextWrap>
                    <Text33>Symbiotic relationships</Text33>
                  </TextWrap>
                </CheckItemText>
                <CheckItemText>
                  <CheckIcon3
                    alt="check-circle"
                    src="/icon-check-circle@1x.png"
                  />
                  <TextWrap>
                    <Text33>Virtual companions</Text33>
                  </TextWrap>
                </CheckItemText>
                <CheckItemText>
                  <CheckIcon3
                    alt="check-circle"
                    src="/icon-check-circle@1x.png"
                  />
                  <TextWrap>
                    <Text33>Goal oriented</Text33>
                  </TextWrap>
                </CheckItemText>
              </CheckItems>
            </Content17>
            <Content18>
              <ScreenMockup>
                <MockupShadow />
                <ScreenMockupIcon alt="" src="/screen-mockup1@2x.png" />
              </ScreenMockup>
            </Content18>
          </Container12>
        </FeaturesSection2>
        <SectionDivider>
          <Container3>
            <DividerIcon1 alt="" src="/divider2.svg" />
          </Container3>
        </SectionDivider>
        <CtaSection>
          <Container2>
            <Content23>
              <HeadingAndSupportingText1>
                <Heading1>Stay Tuned!</Heading1>
                <SupportingText16>
                  <ClaimYourSpot>
                    Claim your spot in the future of athleticism, entertainment,
                    and technology.
                  </ClaimYourSpot>
                  <ComingEarly2024>
                    <ComingEarly20241>Coming early 2024</ComingEarly20241>
                  </ComingEarly2024>
                </SupportingText16>
              </HeadingAndSupportingText1>
              <Actions1>
                <Buttonsbutton19>
                  <TextPadding>
                    <Text1>LEARN MORE</Text1>
                  </TextPadding>
                </Buttonsbutton19>
                <Buttonsbutton20>
                  <TextPadding>
                    <Text1>JOIN THE WAITLIST</Text1>
                  </TextPadding>
                </Buttonsbutton20>
              </Actions1>
            </Content23>
          </Container2>
        </CtaSection>
        <Footer>
          <Container2>
            <Content24>
              <SocialIcons>
                <SocialIcon
                  alt="twitter"
                  src="/icon_twitter@1x.png"
                  onClick={onSocialIconClick}
                />
                <SocialIcon
                  alt="linkedin"
                  src="/icon_linkedin@1x.png"
                  onClick={onSocialIcon1Click}
                />
                <SocialIcon
                  alt="facebook"
                  src="/icon_facebook@1x.png"
                  onClick={onSocialIcon2Click}
                />
                <SocialIcon
                  alt="github"
                  src="/icon_github@1x.png"
                  onClick={onSocialIcon3Click}
                />
              </SocialIcons>
              <Logo>
                <LogoWrap>
                  <Logomark>
                    <Content1>
                      <VectorIcon alt="lacra labs" src="/logo_mark@1x.png" />
                    </Content1>
                  </Logomark>
                  <LogotypeIcon alt="" src="/logo_type.png" />
                </LogoWrap>
              </Logo>
              <FooterText>© 2024 ESPORTS ONE INC.</FooterText>
            </Content24>
          </Container2>
        </Footer>
      </HomepageRoot>
    </>
  );
};

export default Homepage;
