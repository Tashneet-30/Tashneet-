import { MobilityVisual, RecognitionList, StoryList } from "@/components/site";
import { site } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="container prose">
      <h1 className="page-title">About</h1>

      <p className="lead">Hey, I&apos;m Tashneet! ⚡🚌</p>

      <p className="lead">
        I&apos;m a Master of Applied Computing (Thesis) student at{" "}
        <a
          href="https://www.wlu.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wilfrid Laurier University
        </a>{" "}
        in Waterloo — building at the intersection of{" "}
        <strong>artificial intelligence</strong>,{" "}
        <strong>transportation</strong>, and{" "}
        <strong>smart urban mobility</strong>.
      </p>

      <p>
        My path hasn&apos;t been a straight line, and I think that&apos;s what
        makes the work interesting. I started in cybersecurity — monitoring
        threats, responding to incidents, and managing client operations — then
        moved into open-source development, published research on transit
        systems, and now lead the machine learning side of{" "}
        <a
          href="https://elocitytech.com/elocity-laurier-hiev-ai-ev-charging/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HIEV-AI
        </a>
        , an industry collaboration with{" "}
        <a
          href="https://elocitytech.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elocity Technologies
        </a>
        . What ties it all together is a fascination with systems that have to
        work in the real world — whether that&apos;s securing a network,
        shipping code with a global team, or helping a condo building figure out
        where its EV chargers should go.
      </p>

      <p>
        I care about work where algorithms meet actual cities: predicting how
        people move, planning infrastructure before it&apos;s too late, and
        building software that helps communities transition to cleaner mobility.
        I also believe technology works best when paired with clear
        communication — something I practice as a teaching assistant, a
        mentor, and a content creator.
      </p>

      <h2>Things I&apos;ve worked on</h2>
      <StoryList />

      <RecognitionList />

      <h2>Beyond the code</h2>
      <p>
        When I&apos;m not training models or reviewing pull requests,
        you&apos;ll find me exploring emerging tech, reading about psychology
        and human behaviour, creating content, or connecting with students on
        campus. I&apos;m always glad to meet people who care about AI,
        mobility, cybersecurity, or building things that actually matter.
      </p>

      <div className="connect-block">
        <p>
          Feel free to stroll through my <a href="/projects">projects</a>,
          read my <a href="/research">research</a>, or connect on{" "}
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          My inbox is open:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <div className="connect-links">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href={site.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
          <a href={site.links.topmate} target="_blank" rel="noopener noreferrer">
            Book a 1:1
          </a>
        </div>
      </div>

      <MobilityVisual />
    </div>
  );
}
