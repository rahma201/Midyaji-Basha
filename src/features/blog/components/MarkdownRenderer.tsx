import type React from 'react'

interface Props {
  content: string
  headingFont: React.CSSProperties
  arabicFont: React.CSSProperties
}

export function MarkdownRenderer({ content, headingFont, arabicFont }: Props) {
  const blocks = content.split('\n\n').map((block, i) => {
    if (block.startsWith('### ')) {
      return (
        <h3
          key={i}
          className="text-xl font-bold mt-8 mb-4"
          style={{ color: '#F8F6F1', ...headingFont }}
        >
          {block.replace('### ', '')}
        </h3>
      )
    } else if (block.startsWith('## ')) {
      return (
        <h2
          key={i}
          className="text-2xl font-bold mt-10 mb-5"
          style={{ color: '#F8F6F1', ...headingFont }}
        >
          {block.replace('## ', '')}
        </h2>
      )
    } else if (block.startsWith('- ')) {
      const items = block
        .split('\n')
        .filter(Boolean)
        .map((item, j) => (
          <li key={j} className="ml-4 list-disc mb-2">
            {item.replace('- ', '')}
          </li>
        ))
      return (
        <ul key={i} className="mb-6" style={arabicFont}>
          {items}
        </ul>
      )
    } else {
      const parts = block.split(/(\*\*.*?\*\*)/g).map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={j} style={{ color: '#F8F6F1' }}>
              {part.slice(2, -2)}
            </strong>
          )
        }
        return part
      })
      return (
        <p key={i} className="mb-6 leading-relaxed" style={arabicFont}>
          {parts}
        </p>
      )
    }
  })

  return <>{blocks}</>
}
