import Image from 'next/image'
import { memo, useMemo } from "react"
import { FC, PropsWithChildren } from "react"

export default function Home() {
  return (
    <div>
      <section className="page flex relative">
        <aside className="sticky top-0 shrink-0 h-screen bg-[#003d73] text-white">
          <Box className="py-4">
            <h1 className="text-2xl">
              Frank Fang
            </h1>
            <p>
              Full Stack Engineer
            </p>
          </Box>
          <Box className="bg-[#00315c] py-2">
            <h2>
              Contact
            </h2>
          </Box>
          <Box className="py-4">
            <dl className="max-w-[10em] [&>dd+dt]:pt-4 [&>dd]:text-xs">
              <dt>Email</dt>
              <dd><a className="border-b-[1px] border-inherit" href="mailto:ff_online@outlook.com">ff_online@outlook.com</a></dd>
              <dt>LinkedIn</dt>
              <dd>
                <a className="underline" href="https://www.linkedin.com/in/frank-fang-39387847/">
                  linkedin.com/in/frank-fang-39387847/
                </a>
              </dd>
              <dt>GitHub</dt>
              <dd>
                <a className="underline" href="https://github.com/frankfang">
                  github.com/frankfang
                </a>
              </dd>
            </dl>
          </Box>
          <Box className="bg-[#00315c] py-2">
            <h2>Technical Profile</h2>
          </Box>
          <Box className="py-4">
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Ruby on Rails</li>
              <li>HTML5 + CSS3</li>
              <li>React + Hooks </li>
              <li>Jest</li>
              <li>Vite</li>
              <li>Next.js</li>
              <li>Golang + Gin</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Linux</li>
            </ul>
          </Box>
        </aside>
        <main className="px-6 py-4">
          <article>
            Respectful self-motivator gifted at finding reliable solutions for software issues.
            Experienced in Front-end development and Back-end development and offering skills in
            JavaScript, TypeScript, React, Ruby on Rails, Golang and Gin.
            Fluent in English and mandarin.
            Accustomed to working with cross-cultural, global teams.
          </article>
          <Title>Education</Title>
          <Education>
            <dt>
              <div>
                <h3>Huazhong University of Science and Technology</h3>
              </div>
              <div className="minor">2008 - 2012</div>
            </dt>
            <dd>
              Bachelor of Software Engineering
            </dd>
          </Education>
          <Title>Experience</Title>
          <WorkExperience>
            <dt>
              <div className="">
                <h3> Full Stack Engineer </h3>
                <div className="minor">Jirengu Inc., Hangzhou, China</div>
              </div>
              <div className="minor"> Jan 2017 - Present </div>
            </dt>
            <dd>
              <List>
                <li>Managed and trained a team of junior developers to ensure the quality of website architecture and user experience.</li>
                <li>Built and maintained a robust online education system using Vue and React frameworks, including the marketing and live streaming modules.</li>
                <li>Collaborated closely with designers and project managers to deliver high-quality solutions on time and within budget.</li>
                <li>Improved the website performance and user experience by implementing responsive design and optimizing the codebase.</li>
                <li>Developed and implemented best practices for coding standards, code reviews, and testing procedures to ensure high-quality code and efficient development.</li>
              </List>
            </dd>
            <dt>
              <div className="">
                <h3> Full Stack Engineer </h3>
                <div className="minor">Colorway Inc., Chengdu, China</div>
              </div>
              <div className="minor"> Aug 2016 - Dec 2016 </div>
            </dt>
            <dd>
              <List>
                <li>Worked on full-stack and developed user-friendly web interfaces using Rails and jQuery.</li>
                <li>Built solid API for mobile apps.</li>
              </List>
            </dd>
            <dt>
              <div className="">
                <h3>Senior Frond-end Engineer</h3>
                <div className="minor">Alibaba Group, Hangzhou, China</div>
              </div>
              <div className="minor">Jul 2014 - Jul 2016</div>
            </dt>
            <dd>
              <List>
                <li>Built and maintained front-end infrastructure such as scaffolding, UI frameworks, and component libraries to ensure the consistency and scalability of the company's web applications.</li>
                <li>Conducted research and development on new technologies and frameworks, including PWA, Vue.js, and React, and developed strategies to implement them in production environments.</li>
                <li>Worked on the development and maintenance of the company's CRM system, which involved collaborating with cross-functional teams to ensure the application's robustness, scalability, and responsiveness.</li>
                <li>Conducted code reviews, provided feedback and mentorship to junior developers, and promoted best practices in coding standards, testing, and deployment procedures.</li>
              </List>
            </dd>
            <dt>
            <div>
              <h3>Senior Frond-end Engineer</h3>
              <div className="minor">Brothers Bridge Technology, Wuhan, China</div>
            </div>
            <div className="minor">Jul 2013 - Jul 2014</div>
          </dt>
          <dd>
            Skill: Backbone.js, AngularJS 1.x
          </dd>
          <dt>
            <div>
              <h3>Frond-end Engineer</h3>
              <div className="minor">Tencent, Shenzhen, China</div>
            </div>
            <div className="minor">Jul 2012 - Jul 2013</div>
          </dt>
          <dd>
            Skill: CSS3, JavaScript, jQuery, Photoshop
          </dd>
          </WorkExperience>
        </main>
      </section>
    </div>
  )
}

const Box: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <div className={`px-4 ${className}`} >
      {children}
    </div >
  )
})

const List: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <ul className="[&>li]:before:content-['•'] [&>li]:before:inline-block
      [&>li]:before:w-[0.8em] [&>li]:before:text-gray-400">
      {children}
    </ul>
  )
})

const WorkExperience: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <dl className={`[&>dt]:flex [&>dt]:justify-between [&>dt]:my-1 [&>dd]:border-b
    [&>dd]:pb-2 [&>dd]:mb-2 [&_h3]:font-bold [&_.minor]:text-gray-400 ${className}`}>
      {children}
    </dl>
  )
})

const Education: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <dl className={`[&>dt]:flex [&>dt]:justify-between [&>dt]:my-1 [&>dd]:border-b
    [&>dd]:pb-2 [&>dd]:mb-2 [&_h3]:font-bold [&_.minor]:text-gray-400 ${className}`}>
      {children}
    </dl>
  )
})

const Title: FC<PropsWithChildren & { className?: string }> = memo(({ children, className }) => {
  return (
    <h2 className="text-2xl border-b-[1px] border-[#d5d6d6] mt-1 py-1">
      {children}
    </h2>
  )
})
