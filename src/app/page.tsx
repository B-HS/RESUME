'use client'
import Contact from '@/components/contact'
import Experiences from '@/components/experiences/experiences'
import Intro from '@/components/intro'
import ResumeHeader from '@/components/resumeHeader'
import { Divider, Stack, StackDivider } from '@chakra-ui/react'
// import PageLayout from './transition'
import EducationEtc from '@/components/educationetc'
import Sideproject from '@/components/sideproject/sideproject'
import Skills from '@/components/skills/skills'

const Home = () => (
    <>
        <ResumeHeader />
        <Divider my={3} />
        <Stack divider={<StackDivider />} gap={5}>
            <Contact />
            <Intro />
            <Experiences />
            <Sideproject />
            <Skills />
            <EducationEtc />
        </Stack>
    </>
)

export default Home
