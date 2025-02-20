import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { RainbowButton } from "../../RainbowButton";
import { useTheme } from "../../../context/ThemeContext";
import { DotPattern } from "../../DotPattern";
import { Calendar, Clock, MapPin, Trophy, Users } from "lucide-react";
import registrationScreenshot from "@/assets/events/euphoria/registration-screenshot.png";
import registratiionQr from "@/assets/events/euphoria/registration-qr.png";

const EventSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-primary);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    max-width: 95%;
    gap: 3rem;
  }

  body.dark & {
    color: var(--text-primary-dark);
  }
`;

const EventHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const EventTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const EventCaption = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-style: italic;

  body.dark & {
    color: var(--text-secondary-dark);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const EventSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;

  body.dark & {
    color: var(--text-secondary-dark);
  }
`;

const InfoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const PrizeSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PrizeCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--blue);
  }

  p {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text-secondary);
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const QRCode = styled.div`
  width: 200px;
  height: 200px;
  margin: 2rem auto;
  background-image: url(${registratiionQr});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  mix-blend-mode: normal;
`;

const ScreenshotContainer = styled(motion.div)`
  max-width: 600px;
  margin: 2rem auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const HighlightedText = styled.span`
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

const StudyJam1 = () => {
    const { isDark } = useTheme();

    return (
        <EventSection>
            <DotPattern className="opacity-30 dark:opacity-20" />

            <ContentContainer>
                <EventHeader
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <EventTitle>Study Jams Session - 1</EventTitle>
                    <EventCaption>Second offline meet-up for GenAI Study Jams</EventCaption>
                    <EventSubtitle>
                        Join us as we progress through the GenAI Study Jams!

                        Let's meet up and walk through the courses together. Do you have questions about Study Jams? This is the place to ask.

                        On top of all this, the main focus of these sessions is for us all to come under one single roof and build a wholesome community. Get out of your circle and meet the other fantastic folks who are on the same ship as you.
                    </EventSubtitle>
                </EventHeader>

                <InfoGrid>
                    <InfoCard>
                        <Calendar className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Date</h3>
                        <p>November 5, 2024</p>
                    </InfoCard>
                    <InfoCard>
                        <Clock className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Time</h3>
                        <p>5:00 PM – 6:00 PM</p>
                    </InfoCard>
                    <InfoCard>
                        <MapPin className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Venue</h3>
                        <p>kalasalingam Academy of Research and Education</p>
                    </InfoCard>
                    <InfoCard>
                        <Users className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Participation</h3>
                        <p>Individual</p>
                    </InfoCard>
                </InfoGrid>
            </ContentContainer>
        </EventSection>
    );
};

export default StudyJam1;
