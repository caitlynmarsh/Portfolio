import CaseStudyContent from "./case-study-content"

// Generate static params for all case studies
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}

export default async function CaseStudyPage({ 
  params 
}: { 
  params: Promise<{ id: string }> | { id: string } 
}) {
  // Handle both Promise and direct params
  const resolvedParams = params instanceof Promise ? await params : params
  
  if (!resolvedParams?.id) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Loading...</h1>
        </div>
      </div>
    )
  }
  
  return <CaseStudyContent studyId={resolvedParams.id} />
}
