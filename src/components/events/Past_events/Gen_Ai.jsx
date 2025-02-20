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

const Gen_Ai_Workshop = () => {
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
                    <EventTitle>Gen AI Workshop</EventTitle>
                    <EventCaption>A workshop on Generative AI, conducted as a part of Inventia. The workshop aims to provide valuable insights and guidance for the Inventia participants on refining their solutions and integrating GenAI into their approach.


</EventCaption>
                    
                    <EventSubtitle>
                    Join Us for an Exciting 2-Day Workshop on Generative AI!
                    </EventSubtitle>
                    <br></br>
                    <EventSubtitle>
                    We're thrilled to announce a hands-on workshop on GenAI led by <b>Mrs. Hemapriya</b>, a data engineer at CDW, Ambassador at Women Techmakers, and Organizer of GDG Chennai.

Event Details:
                    </EventSubtitle>
                </EventHeader>

                <InfoGrid>
                    <InfoCard>
                        <Calendar className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Date</h3>
                        <p>September 20-21, 2024</p>
                    </InfoCard>
                    <InfoCard>
                        <Clock className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Time</h3>
                        <p>9:00 AM – 5:00 PM</p>
                    </InfoCard>
                    <InfoCard>
                        <MapPin className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Venue</h3>
                        <p>kalasalingam Academy of Research and Education</p>
                    </InfoCard>
                    <InfoCard>
                        <Users className="w-8 h-8 text-blue-500" />
                        <h3 className="text-xl font-semibold">Participation</h3>
                        <p> Open to qualified Inventia participants</p>
                    </InfoCard>
                    
                </InfoGrid>
                <AgendaList>
                  <h4>What You Can Expect:</h4>
                  <br></br>
                  <li>Foundations of AI, ML, and DL: Explore real-world applications and engage in case discussions.</li>
                  <li>Introduction to Generative AI and NLP: Real-time use cases, Evolution of NLP models</li>
                  <li>Deep Dive into NLP Techniques: Learn about RNNs, LSTMs, Attention models, Transformers, BERT, and more</li>
                  <li>Introduction to LLMs: Discover the capabilities and potential of LLMs.</li>
                  <li>Hands-On with Google Technologies: Get practical experience with Gemini, Streamlit, Vertex AI, and Google AI Studio.</li>
                  <li>Interact with the industry expert: Work with and learn from a seasoned professional.</li>
                </AgendaList>

                <Description
        >
          <p>
          Final Evaluation:
          </p>
          <p className="mt-4">
          At the end of the workshop, participants will undergo an evaluation round and will move on to the next stage of Inventia based on their performance

We're looking forward to seeing you there!
          </p>
        </Description>
            </ContentContainer>
        </EventSection>
    );
};

export default Gen_Ai_Workshop;
