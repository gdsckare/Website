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
const Description = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-secondary-dark);
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


const AgendaList = styled(motion.ol)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  counter-reset: list-counter;


  li {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1.5rem;
    list-style: none;
    counter-increment: list-counter;

    &:before {
      content: counter(list-counter) ".";
      color: var(--blue);
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }

  body.dark & {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);

    li {
      color: var(--text-secondary-dark);
    }
  }
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

const Inventia_Hackathon = () => {
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
                    <EventTitle>Inventia 2k24</EventTitle>
                    <EventCaption>Inventia is a coding event organized by the Google Developer Groups, On-Campus - KARE (GDSC) as a part of the Vintra intramural events
</EventCaption>
                    
                    <EventSubtitle>
                    This event presents an excellent opportunity to showcase your innovative skills and contribute towards solving one or more of the United Nations' 17 Sustainable Development Goals (SDGs) using Google technologies.
                    </EventSubtitle>
                  
                </EventHeader>

                <InfoGrid>
                    <InfoCard>
                        <Calendar className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Date</h3>
                        <p>September 9, 2024 - October 19,2024</p>
                    </InfoCard>
                    <InfoCard>
                        <Clock className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Time</h3>
                        <p>12.15 AM – 6:00 PM</p>
                    </InfoCard>
                    <InfoCard>
                        <MapPin className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Venue</h3>
                        <p>kalasalingam Academy of Research and Education</p>
                    </InfoCard>
                    <InfoCard>
                        <Users className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Participation</h3>
                        <p> Open to all university departments</p>
                    </InfoCard>
                    
                </InfoGrid>
                <Description
        >
          <h2>
          About the Event:
          </h2>
          <p className="mt-4">
          Ready to bring your ideas to life and demonstrate your innovative and technical abilities? Join us for Inventia, the mini-solution challenge hosted by GDG-OnCampus KARE (GDSC). This event presents an excellent opportunity for you to showcase your innovative skills and contribute towards solving one or more of the United Nations' 17 Sustainable Development Goals (SDGs) using Google technologies, with a focus on Generative AI.
          </p>
          <br></br>
          <p>
          The event includes a series of workshops featuring hands-on sessions led by expert members in specific domains, aimed at helping participants gain knowledge relevant to their projects. The final day's evaluation will be conducted by Senthil Kumar, CEO of Jiovio Healthcare and GDG Organizer, during Vintra.
          </p>
        </Description>
                <AgendaList>
                  <h4>Participation:</h4>
                  <br></br>
      
                  <li>Introduction to Generative AI and NLP: Real-time use cases, Evolution of NLP models</li>
                  <li>Teams must consist of exactly 4 members. Teams with fewer than 4 members are not accepted.</li>
                  <li>Select one or more SDG goals and identify a problem statement.</li>
                  <li>Projects should align with SDGs, excluding Goal 7 and Goal 13.</li>
                  <li>Use Google technologies (Flutter, Firebase, GCP, Project DIX, etc.) in your solutions
                  Submit the solution according to the provided guidelines. </li>
                </AgendaList>
                <AgendaList>
                  <h4>Benefits:</h4>
                  <br></br>
                  <li>Connect with students, professionals, and Domain Experts.</li>
                  <li>Earn <b>certificates, cash prizes, and Exciting Swags</b> from Google.</li>
                  <li>Certificate of Participation and Achievement.</li>
                  <li>Chance to secure a spot in the upcoming Google-organized Solution Challenge. (Jan 2025-April 2025). See here for more details: https://developers.google.com/community/gdsc-solution-challenge</li>
      
                </AgendaList>
                <AgendaList>
                  <h4>Timeline:</h4>
                  <br></br>
                  <li>Registration Period:   September 9th - 13th, 2024</li>
                  <li>Initial Evaluation: September 15th - 16th, 2024</li>
                  <li>Workshops and Webinars: Ongoing Throughout the Evaluation Period. </li>
                  <li>Follow-up Evaluation: September 23rd, 2024</li>
                  <li>Final Stage: October 18th, 2024</li>
      
                </AgendaList>

                <Description
        >
          <p>
          For any doubts/queries feel free to contact: 
          </p>
          <p className="mt-4">
          Students Coordinators:<br></br>

Keerthi Kumar: 9443634173<br></br>

Thanuja: 7893434485<br></br>

Nikhil: 9177973377

<br></br>
<br></br>
Faculty Coordinators:<br></br>

Mr. Aravind Chandran, Assistant Professor/CSE<br></br>

Dr. Sundareswaran, Assistant Professor/CSE
          </p>
        </Description>
            </ContentContainer>
        </EventSection>
    );
};

export default Inventia_Hackathon;
