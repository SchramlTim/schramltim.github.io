import Avatar from "./solutions/avatar";
import React from 'react';
import { Panel, PanelTitle, PanelContent } from "./components/panel";
import { Project, ProjectAttribute, ProjectAttributeList, ProjectDescription, ProjectTitle } from "./solutions/project";
import StackIcon from "tech-stack-icons";
import { StatusIcon } from "./components/statusicon";

const App = () =>{
    return (
        <div className="flex justify-center bg-gray-100 p-5 pt-10 sm:p-10">
            <div className="flex flex-col font-mono gap-10 w-full lg:w-2/3 2xl:w-1/2 min-h-screen text-gray-600 text-lg"> 
                <header className="flex flex-col items-start justify-center gap-3">
                    <h1>
                      <span className="flex gap-x-3 flex-wrap text-[11vw] sm:text-[7vw] lg:text-[5vw] leading-none">
                        <span className='flex flex-wrap gap-x-3 text-orange-500'><span>public</span><span>function</span></span>
                          <span className='text-emerald-500'>tim_schraml<span className="text-gray-600">()</span></span>
                      </span>
                      <span className="text-[5vw] sm:text-[4vw] md:text-[3vw]  lg:text-[2vw] leading-none">// fullstack web engineer</span>
                    </h1>
                </header>
                <main className="flex flex-col gap-10">
                  <Panel>
                      <PanelTitle className="text-gray-600">// about_me</PanelTitle>
                      <PanelContent className="lowercase">
                          <div className="flex flex-col sm:flex-row text-gray-500">
                              <div className="flex flex-col gap-3 sm:w-1/2">
                                  <p>Passionate full-stack developer committed to mission-driven work, with a focus on thoughtful UI design, collaboration, and a dedication to teaching.</p>
                                  <p>I was already fascinated by computers as a child, loved puzzles and logical games, so I made these things my profession</p>
                                  <p>I am blessed with a wife and a daughter, love to tinker with my own projects in my spare time and try out new tech trends or just throw myself into a game with friends</p>
                              </div>
                              <div className="flex justify-center sm:w-1/2">
                                  <Avatar />
                              </div>
                          </div>
                      </PanelContent>
                  </Panel> 
                  <Panel>
                      <PanelTitle className="text-gray-600">// main_stack</PanelTitle>
                      <PanelContent className="lowercase">
                          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-5">
                            <StatusIcon name="github" status="daily use" />
                            <StatusIcon name="git" status="daily use" />
                            <StatusIcon name="php" status="daily use" />
                            <StatusIcon name="swagger" status="daily use" />
                            <StatusIcon name="redis" status="daily use" />
                            <StatusIcon name="docker" status="daily use" />
                            <StatusIcon name="bash" status="daily use" />
                            <StatusIcon name="mysql" status="daily use" />
                            <StatusIcon name="cypress" status="daily use" />
                            <StatusIcon name="nodejs" status="daily use" />
                            <StatusIcon name="tailwindcss" status="daily use" />
                            <StatusIcon name="reactjs" status="daily use" />
                          </div>
                      </PanelContent>
                  </Panel>
                  <Panel>
                      <PanelTitle className="text-gray-600">// interested_in</PanelTitle>
                      <PanelContent className="lowercase">
                          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-5">
                            <StatusIcon name="neovim" status="already used" />
                            <StatusIcon name="kubernetes" status="already used" />
                            <StatusIcon name="gcloud" status="playing around"  />
                            <StatusIcon name="supabase" status="playing around"  />
                            <StatusIcon name="postgresql" status="playing around"  />
                            <StatusIcon name="bunjs" status="interested" />
                            <StatusIcon name="cloudflare" status="interested"  />
                            <StatusIcon name="figma" status="interested"  />
                            <StatusIcon name="go" status="interested"  />
                            <StatusIcon name="qwik" status="interested"  />
                          </div>
                      </PanelContent>
                  </Panel>
                  <Panel>
                      <PanelTitle className="text-gray-600">// projects</PanelTitle>
                      <PanelContent className="lowercase">
                          <div className="flex flex-col gap-10">
                              <Project link={'https://github.com/SchramlTim/taberu'}>
                                  <ProjectTitle>Taberu 🍱</ProjectTitle>
                                  <ProjectDescription>
                                      Taberu is about simplifying food ordering within an organization. 
                                  </ProjectDescription>
                                  <ProjectAttributeList>
                                      <ProjectAttribute>PHP</ProjectAttribute>
                                      <ProjectAttribute>REST API</ProjectAttribute>
                                      <ProjectAttribute>React</ProjectAttribute>
                                      <ProjectAttribute>Tailwind</ProjectAttribute>
                                      <ProjectAttribute>Vercel</ProjectAttribute>
                                  </ProjectAttributeList>
                              </Project> 
                              <Project link={'https://github.com/SchramlTim/schramltim.github.io'}>
                                  <ProjectTitle>Portfolio website 🎨</ProjectTitle>
                                  <ProjectDescription>
                                      Just a small portfolio website where I try things out
                                  </ProjectDescription>
                                  <ProjectAttributeList>
                                      <ProjectAttribute>React</ProjectAttribute>
                                      <ProjectAttribute>Tailwind</ProjectAttribute>
                                      <ProjectAttribute>Three.js</ProjectAttribute>
                                  </ProjectAttributeList>
                              </Project> 
                          </div>
                      </PanelContent>
                  </Panel>
                </main>
            </div>
        </div>
    )
}

export default App
