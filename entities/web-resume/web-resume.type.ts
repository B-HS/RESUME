import { z } from 'zod'

const localizedTextSchema = z.object({
    ko: z.string(),
    en: z.string(),
    jp: z.string(),
})

const webResumeProjectSchema = z.object({
    title: localizedTextSchema,
    description: z.array(localizedTextSchema),
    skills: z.array(z.string()),
    site: z.string().optional(),
})

const webResumeCompanySchema = z.object({
    name: localizedTextSchema,
    period: localizedTextSchema,
    location: localizedTextSchema,
    role: localizedTextSchema,
    projects: z.array(webResumeProjectSchema),
})

const webResumeSkillGroupSchema = z.object({
    name: localizedTextSchema,
    items: z.array(z.string()),
})

const webResumeAdditionalExperienceSchema = z.object({
    period: localizedTextSchema,
    description: localizedTextSchema,
})

const webResumeCustomSectionSchema = z.object({
    label: localizedTextSchema,
    items: z.array(webResumeAdditionalExperienceSchema),
})

const webResumeProfileSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    firstNameReading: localizedTextSchema,
    lastNameReading: localizedTextSchema,
    jobTitle: localizedTextSchema,
    birthday: localizedTextSchema,
    location: localizedTextSchema,
    email: z.string(),
    github: z.string(),
    blog: z.string(),
    introduce: z.array(localizedTextSchema),
})

const webResumeSeoSchema = z.object({
    title: localizedTextSchema,
    description: localizedTextSchema,
})

const webResumeLabelsSchema = z.object({
    workExperience: localizedTextSchema,
    projects: localizedTextSchema,
    skills: localizedTextSchema,
    etc: localizedTextSchema,
})

const webResumeDataSchema = z.object({
    profile: webResumeProfileSchema,
    seo: webResumeSeoSchema,
    labels: webResumeLabelsSchema,
    workExperiences: z.array(webResumeCompanySchema),
    personalProjects: webResumeCompanySchema,
    skillGroups: z.array(webResumeSkillGroupSchema),
    additionalExperiences: z.array(webResumeAdditionalExperienceSchema),
    customSections: z.array(webResumeCustomSectionSchema).default([]),
})

export const webResumeResponseSchema = z.object({
    webResume: webResumeDataSchema,
    updatedAt: z.string(),
})

export type WebResumeData = z.infer<typeof webResumeDataSchema>
export type WebResumeProfile = z.infer<typeof webResumeProfileSchema>
export type WebResumeCompany = z.infer<typeof webResumeCompanySchema>
export type WebResumeSkillGroup = z.infer<typeof webResumeSkillGroupSchema>
export type WebResumeAdditionalExperience = z.infer<typeof webResumeAdditionalExperienceSchema>
export type WebResumeCustomSection = z.infer<typeof webResumeCustomSectionSchema>
