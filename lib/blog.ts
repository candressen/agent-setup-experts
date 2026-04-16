import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

function readPost(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
  const lines = raw.split('\n')
  const title = lines.find((line) => line.startsWith('# '))?.replace('# ', '') ?? slug
  const date = lines.find((line) => line.startsWith('date: '))?.replace('date: ', '') ?? ''
  const description =
    lines.find((line) => line.startsWith('description: '))?.replace('description: ', '') ?? ''
  const contentStart = lines.findIndex((line) => line.startsWith('---end-meta---'))
  const content = contentStart > -1 ? lines.slice(contentStart + 1).join('\n') : raw

  return { slug, title, date, description, content }
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => readPost(filename))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  return readPost(`${slug}.md`)
}
