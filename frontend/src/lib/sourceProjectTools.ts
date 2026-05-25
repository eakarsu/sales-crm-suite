export const sourceProjectTools = [
  {
    "id": "agency-services-source-workflow",
    "title": "Agency Services Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from agencyServices.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from agencyServices to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Agency Services source context",
    "outputLabel": "Agency Services source analysis",
    "signals": [
      "tailwind.config",
      "src/lib/email",
      "src/app/gap-bulk-email-outreach-templates/page",
      "src/app/gap-ai-salary-benchmark-advisor/page",
      "src/app/gap-ai-powered-candidate-matching-vector/page",
      "src/app/gap-ai-lead-deal-conversion-prediction/page",
      "src/app/gap-ai-job-description-generator-requisition/page",
      "src/app/gap-ai-interview-question-recommendation-role/page"
    ]
  },
  {
    "id": "agency-services-ai-tools",
    "title": "Agency Services AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from agencyServices.",
    "defaultPrompt": "Review agencyServices AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Agency Services AI prompt or tool context",
    "outputLabel": "Agency Services AI tool response",
    "signals": [
      "tailwind.config.ts",
      "src/lib/email.ts",
      "src/app/gap-bulk-email-outreach-templates/page.tsx",
      "src/app/gap-ai-salary-benchmark-advisor/page.tsx",
      "src/app/gap-ai-powered-candidate-matching-vector/page.tsx",
      "src/app/gap-ai-lead-deal-conversion-prediction/page.tsx",
      "src/app/gap-ai-job-description-generator-requisition/page.tsx",
      "src/app/gap-ai-interview-question-recommendation-role/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-15gmoc-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/gap-bulk-email-outreach-templates/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/gap-bulk-email-outreach-templates/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-8qilr6-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/gap-ai-salary-benchmark-advisor/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/gap-ai-salary-benchmark-advisor/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-1epqm1-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/gap-ai-powered-candidate-matching-vector/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/gap-ai-powered-candidate-matching-vector/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-vpz2k5-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/gap-ai-lead-deal-conversion-prediction/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/gap-ai-lead-deal-conversion-prediction/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-10blev-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/gap-ai-job-description-generator-requisition/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/gap-ai-job-description-generator-requisition/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-1scdew-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/gap-ai-interview-question-recommendation-role/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/gap-ai-interview-question-recommendation-role/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-19y30y-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/gap-ai-commission-anomaly-clawback-detection/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/gap-ai-commission-anomaly-clawback-detection/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-1g5uvz-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/gap-ai-candidate-scoring-suitability-ranking/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/gap-ai-candidate-scoring-suitability-ranking/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-6mexj4-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/gap-agentic-interview-coordinator-that-handles/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/gap-agentic-interview-coordinator-that-handles/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-1tiz1l-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/dashboard/campaigns/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/dashboard/campaigns/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-msxb0e-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/dashboard/campaigns/new/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Campaign Name * *",
      "Campaign Name * *",
      "Budget ($)",
      "End Date",
      "Start Date",
      "Manager",
      "Budget ($)",
      "Status"
    ]
  },
  {
    "id": "agency-services-page-f5xifd-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/dashboard/campaigns/[id]/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Clicks",
      "Conversions",
      "Impressions",
      "Revenue",
      "Spend"
    ]
  },
  {
    "id": "agency-services-page-1gt89u-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/dashboard/campaigns/[id]/edit/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Campaign Name * *",
      "Status * *",
      "Budget ($)",
      "Description",
      "End Date",
      "Start Date"
    ]
  },
  {
    "id": "agency-services-page-1vebvr-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/dashboard/billing/retainers/[id]/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/dashboard/billing/retainers/[id]/page.tsx"
    ]
  },
  {
    "id": "agency-services-page-1qnz1s-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/dashboard/billing/retainers/[id]/edit/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Amount",
      "Client Id",
      "End Date",
      "Frequency",
      "Start Date",
      "Status"
    ]
  },
  {
    "id": "agency-services-page-jg3kjs-exact-ai",
    "title": "Agency Services: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/dashboard/ai/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "src/app/dashboard/ai/page.tsx"
    ]
  },
  {
    "id": "agency-services-route-1k0ic5-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/retainers/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/retainers/route.ts"
    ]
  },
  {
    "id": "agency-services-route-13tktz-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/retainers/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/retainers/[id]/route.ts"
    ]
  },
  {
    "id": "agency-services-route-1jk7za-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/invoices/[id]/send-email/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Message",
      "Subject",
      "To"
    ]
  },
  {
    "id": "agency-services-route-47kc42-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-bulk-email-outreach-templates/run/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-bulk-email-outreach-templates/run/route.ts"
    ]
  },
  {
    "id": "agency-services-route-15bykf-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-ai-salary-benchmark-advisor/run/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-ai-salary-benchmark-advisor/run/route.ts"
    ]
  },
  {
    "id": "agency-services-route-1on0pq-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-ai-lead-deal-conversion-prediction/run/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-ai-lead-deal-conversion-prediction/run/route.ts"
    ]
  },
  {
    "id": "agency-services-route-115x5o-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-ai-job-description-generator-requisition/run/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-ai-job-description-generator-requisition/run/route.ts"
    ]
  },
  {
    "id": "agency-services-route-1w6xu8-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-ai-interview-question-recommendation-role/run/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-ai-interview-question-recommendation-role/run/route.ts"
    ]
  },
  {
    "id": "agency-services-route-zhk2cy-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-ai-commission-anomaly-clawback-detection/run/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-ai-commission-anomaly-clawback-detection/run/route.ts"
    ]
  },
  {
    "id": "agency-services-route-m2rde4-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/gap-ai-candidate-scoring-suitability-ranking/run/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/gap-ai-candidate-scoring-suitability-ranking/run/route.ts"
    ]
  },
  {
    "id": "agency-services-route-yrme6b-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/campaigns/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/campaigns/route.ts"
    ]
  },
  {
    "id": "agency-services-route-1xapjo-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/campaigns/bulk-email/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Body Template",
      "Recipients",
      "Subject Template"
    ]
  },
  {
    "id": "agency-services-route-1s9adm-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/campaigns/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/campaigns/[id]/route.ts"
    ]
  },
  {
    "id": "agency-services-route-l0z27z-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/campaigns/[id]/metrics/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "src/app/api/campaigns/[id]/metrics/route.ts"
    ]
  },
  {
    "id": "agency-services-route-cjotr3-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/auth/verify-email/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Token"
    ]
  },
  {
    "id": "agency-services-route-rmjgp3-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/salary-benchmark/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "City",
      "Level",
      "Role"
    ]
  },
  {
    "id": "agency-services-route-5euzl4-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/resume-parse/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Text"
    ]
  },
  {
    "id": "agency-services-route-14nsjc-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/resume-multi-format/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Content",
      "Filename",
      "Format"
    ]
  },
  {
    "id": "agency-services-route-1jwxr1-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/placement-prediction/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Candidate",
      "Client",
      "Role"
    ]
  },
  {
    "id": "agency-services-route-272fwa-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/match/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Candidates",
      "Job Description"
    ]
  },
  {
    "id": "agency-services-route-q0qmyf-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/interview-coordinator/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Action",
      "Candidate Id",
      "Duration Minutes = 60",
      "Interviewers",
      "Interview Id",
      "Lead Time Minutes = 60",
      "Transcript",
      "Window Days = 7"
    ]
  },
  {
    "id": "agency-services-route-1ein9g-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/generate/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Get Reader",
      "Prompt",
      "Tool"
    ]
  },
  {
    "id": "agency-services-route-oq0vq-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/candidate-match-vector/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Cvs",
      "Job Spec",
      "Top K = 10"
    ]
  },
  {
    "id": "agency-services-route-rmbdmr-exact-ai",
    "title": "Agency Services: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/app/api/ai/ats-webhook-bridge/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from agencyServices. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Action",
      "Applicant",
      "Data",
      "Event",
      "Job",
      "Payload"
    ]
  },
  {
    "id": "ai-sales-outreach-source-workflow",
    "title": "AI Sales Outreach Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from ai-sales-outreach.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from ai-sales-outreach to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Sales Outreach source context",
    "outputLabel": "AI Sales Outreach source analysis",
    "signals": [
      "backend/src/services/openrouter",
      "frontend/src/pages/ABTestDetail",
      "frontend/src/pages/AIAssistant",
      "frontend/src/pages/AIBestTime",
      "frontend/src/pages/AIBestTimeDetail",
      "frontend/src/pages/AICompetitiveIntel",
      "frontend/src/pages/AIDealMomentum",
      "frontend/src/pages/AILeadScoreDetail"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-tools",
    "title": "AI Sales Outreach AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from ai-sales-outreach.",
    "defaultPrompt": "Review ai-sales-outreach AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Sales Outreach AI prompt or tool context",
    "outputLabel": "AI Sales Outreach AI tool response",
    "signals": [
      "backend/src/services/openrouter.ts",
      "frontend/src/pages/ABTestDetail.tsx",
      "frontend/src/pages/AIAssistant.tsx",
      "frontend/src/pages/AIBestTime.tsx",
      "frontend/src/pages/AIBestTimeDetail.tsx",
      "frontend/src/pages/AICompetitiveIntel.tsx",
      "frontend/src/pages/AIDealMomentum.tsx",
      "frontend/src/pages/AILeadScoreDetail.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ab-test-detail-1tl920-exact-ai",
    "title": "AI Sales Outreach: AB Test Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ABTestDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AB Test Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AB Test Detail donor inputs",
    "outputLabel": "AB Test Detail AI response",
    "signals": [
      "Test Name * *",
      "Test Name * *",
      "Variant A Template * *",
      "Variant B Template * *"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-assistant-s3qskr-exact-ai",
    "title": "AI Sales Outreach: AI Assistant",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAssistant.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Assistant\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Assistant donor inputs",
    "outputLabel": "AI Assistant AI response",
    "signals": [
      "Body",
      "Company",
      "First Name",
      "Industry",
      "Subject",
      "Topic",
      "Trigger"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-best-time-u6vs4q-exact-ai",
    "title": "AI Sales Outreach: AI Best Time",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBestTime.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Best Time\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Best Time donor inputs",
    "outputLabel": "AI Best Time AI response",
    "signals": [
      "frontend/src/pages/AIBestTime.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-best-time-detail-1gqctf-exact-ai",
    "title": "AI Sales Outreach: AI Best Time Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBestTimeDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Best Time Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Best Time Detail donor inputs",
    "outputLabel": "AI Best Time Detail AI response",
    "signals": [
      "frontend/src/pages/AIBestTimeDetail.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-competitive-intel-v1zt4y-exact-ai",
    "title": "AI Sales Outreach: AI Competitive Intel",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICompetitiveIntel.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Competitive Intel\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Competitive Intel donor inputs",
    "outputLabel": "AI Competitive Intel AI response",
    "signals": [
      "Company Name",
      "Industry",
      "Our Product",
      "Target Competitors"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-deal-momentum-13mc11-exact-ai",
    "title": "AI Sales Outreach: AI Deal Momentum",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDealMomentum.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Deal Momentum\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Deal Momentum donor inputs",
    "outputLabel": "AI Deal Momentum AI response",
    "signals": [
      "frontend/src/pages/AIDealMomentum.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-lead-score-detail-p67hai-exact-ai",
    "title": "AI Sales Outreach: AI Lead Score Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AILeadScoreDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Lead Score Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Lead Score Detail donor inputs",
    "outputLabel": "AI Lead Score Detail AI response",
    "signals": [
      "frontend/src/pages/AILeadScoreDetail.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-lead-scorer-cpgvxl-exact-ai",
    "title": "AI Sales Outreach: AI Lead Scorer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AILeadScorer.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Lead Scorer\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Lead Scorer donor inputs",
    "outputLabel": "AI Lead Scorer AI response",
    "signals": [
      "frontend/src/pages/AILeadScorer.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-objection-detail-1rsh7n-exact-ai",
    "title": "AI Sales Outreach: AI Objection Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIObjectionDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Objection Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Objection Detail donor inputs",
    "outputLabel": "AI Objection Detail AI response",
    "signals": [
      "frontend/src/pages/AIObjectionDetail.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-objection-predictor-mtuz2a-exact-ai",
    "title": "AI Sales Outreach: AI Objection Predictor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIObjectionPredictor.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Objection Predictor\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Objection Predictor donor inputs",
    "outputLabel": "AI Objection Predictor AI response",
    "signals": [
      "frontend/src/pages/AIObjectionPredictor.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-objections-8nxi41-exact-ai",
    "title": "AI Sales Outreach: AI Objections",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIObjections.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Objections\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Objections donor inputs",
    "outputLabel": "AI Objections AI response",
    "signals": [
      "Buyer Persona",
      "Industry",
      "Objection Text",
      "Sales Stage"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-personalization-1tcjfu-exact-ai",
    "title": "AI Sales Outreach: AI Personalization",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPersonalization.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Personalization\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Personalization donor inputs",
    "outputLabel": "AI Personalization AI response",
    "signals": [
      "Contact Id",
      "Focus Area",
      "Original Content",
      "Personalization Type",
      "Tone"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-personalization-detail-1bga3h-exact-ai",
    "title": "AI Sales Outreach: AI Personalization Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPersonalizationDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Personalization Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Personalization Detail donor inputs",
    "outputLabel": "AI Personalization Detail AI response",
    "signals": [
      "frontend/src/pages/AIPersonalizationDetail.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-pipeline-forecast-1fadk8-exact-ai",
    "title": "AI Sales Outreach: AI Pipeline Forecast",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPipelineForecast.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Pipeline Forecast\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Pipeline Forecast donor inputs",
    "outputLabel": "AI Pipeline Forecast AI response",
    "signals": [
      "frontend/src/pages/AIPipelineForecast.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-pipeline-forecast-detail-1l0pq4-exact-ai",
    "title": "AI Sales Outreach: AI Pipeline Forecast Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPipelineForecastDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Pipeline Forecast Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Pipeline Forecast Detail donor inputs",
    "outputLabel": "AI Pipeline Forecast Detail AI response",
    "signals": [
      "frontend/src/pages/AIPipelineForecastDetail.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-playbook-learner-owbacx-exact-ai",
    "title": "AI Sales Outreach: AI Playbook Learner",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPlaybookLearner.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Playbook Learner\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Playbook Learner donor inputs",
    "outputLabel": "AI Playbook Learner AI response",
    "signals": [
      "frontend/src/pages/AIPlaybookLearner.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-prospect-research-q4cbkq-exact-ai",
    "title": "AI Sales Outreach: AI Prospect Research",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIProspectResearch.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Prospect Research\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Prospect Research donor inputs",
    "outputLabel": "AI Prospect Research AI response",
    "signals": [
      "frontend/src/pages/AIProspectResearch.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-reply-triage-ybggf5-exact-ai",
    "title": "AI Sales Outreach: AI Reply Triage",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIReplyTriage.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Reply Triage\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Reply Triage donor inputs",
    "outputLabel": "AI Reply Triage AI response",
    "signals": [
      "frontend/src/pages/AIReplyTriage.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-warmup-scheduler-vle1hg-exact-ai",
    "title": "AI Sales Outreach: AI Warmup Scheduler",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIWarmupScheduler.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Warmup Scheduler\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Warmup Scheduler donor inputs",
    "outputLabel": "AI Warmup Scheduler AI response",
    "signals": [
      "Email Address",
      "Name",
      "Total Days"
    ]
  },
  {
    "id": "ai-sales-outreach-campaign-detail-l8ri0o-exact-ai",
    "title": "AI Sales Outreach: Campaign Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CampaignDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Campaign Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Campaign Detail donor inputs",
    "outputLabel": "Campaign Detail AI response",
    "signals": [
      "Description",
      "Description",
      "Target Audience"
    ]
  },
  {
    "id": "ai-sales-outreach-campaigns-ru5syi-exact-ai",
    "title": "AI Sales Outreach: Campaigns",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/Campaigns.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Campaigns\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Campaigns donor inputs",
    "outputLabel": "Campaigns AI response",
    "signals": [
      "frontend/src/pages/Campaigns.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-contact-detail-17nfi8-exact-ai",
    "title": "AI Sales Outreach: Contact Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ContactDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Contact Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Contact Detail donor inputs",
    "outputLabel": "Contact Detail AI response",
    "signals": [
      "Company",
      "Company",
      "First Name",
      "Company",
      "Company",
      "Phone",
      "Job Title",
      "Source"
    ]
  },
  {
    "id": "ai-sales-outreach-gap-ai-account-tier-scoring-icp-13ggu1-exact-ai",
    "title": "AI Sales Outreach: Gap AI Account Tier Scoring Icp",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiAccountTierScoringIcp.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Account Tier Scoring Icp\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Account Tier Scoring Icp donor inputs",
    "outputLabel": "Gap AI Account Tier Scoring Icp AI response",
    "signals": [
      "frontend/src/pages/GapAiAccountTierScoringIcp.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-gap-ai-competitor-win-loss-analysis-px92g-exact-ai",
    "title": "AI Sales Outreach: Gap AI Competitor Win Loss Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiCompetitorWinLossAnalysis.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Competitor Win Loss Analysis\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Competitor Win Loss Analysis donor inputs",
    "outputLabel": "Gap AI Competitor Win Loss Analysis AI response",
    "signals": [
      "frontend/src/pages/GapAiCompetitorWinLossAnalysis.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-gap-ai-live-conversation-coaching-calls-1w9fl1-exact-ai",
    "title": "AI Sales Outreach: Gap AI Live Conversation Coaching Calls",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiLiveConversationCoachingCalls.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Live Conversation Coaching Calls\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Live Conversation Coaching Calls donor inputs",
    "outputLabel": "Gap AI Live Conversation Coaching Calls AI response",
    "signals": [
      "frontend/src/pages/GapAiLiveConversationCoachingCalls.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-gap-ai-multilingual-outreach-generation-gbfm0x-exact-ai",
    "title": "AI Sales Outreach: Gap AI Multilingual Outreach Generation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAiMultilingualOutreachGeneration.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Multilingual Outreach Generation\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Multilingual Outreach Generation donor inputs",
    "outputLabel": "Gap AI Multilingual Outreach Generation AI response",
    "signals": [
      "frontend/src/pages/GapAiMultilingualOutreachGeneration.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-integration-detail-1ropuq-exact-ai",
    "title": "AI Sales Outreach: Integration Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/IntegrationDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Integration Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Integration Detail donor inputs",
    "outputLabel": "Integration Detail AI response",
    "signals": [
      "frontend/src/pages/IntegrationDetail.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-meeting-detail-1e9r3r-exact-ai",
    "title": "AI Sales Outreach: Meeting Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/MeetingDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Meeting Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Meeting Detail donor inputs",
    "outputLabel": "Meeting Detail AI response",
    "signals": [
      "Scheduled Date & Time * *",
      "Meeting Title * *",
      "Description",
      "Duration (minutes)",
      "Location",
      "Location",
      "Meeting Type",
      "Revenue Potential ($)"
    ]
  },
  {
    "id": "ai-sales-outreach-report-detail-1i959p-exact-ai",
    "title": "AI Sales Outreach: Report Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ReportDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Report Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Report Detail donor inputs",
    "outputLabel": "Report Detail AI response",
    "signals": [
      "Remove Child"
    ]
  },
  {
    "id": "ai-sales-outreach-sequence-detail-7lzjeh-exact-ai",
    "title": "AI Sales Outreach: Sequence Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/SequenceDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sequence Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sequence Detail donor inputs",
    "outputLabel": "Sequence Detail AI response",
    "signals": [
      "Sequence Name * *",
      "Sequence Name *",
      "Description"
    ]
  },
  {
    "id": "ai-sales-outreach-task-detail-gtqibv-exact-ai",
    "title": "AI Sales Outreach: Task Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TaskDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Task Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Task Detail donor inputs",
    "outputLabel": "Task Detail AI response",
    "signals": [
      "Task Title * *",
      "Description",
      "Due Date",
      "Priority",
      "Status",
      "Task Type"
    ]
  },
  {
    "id": "ai-sales-outreach-team-member-detail-ld1pzf-exact-ai",
    "title": "AI Sales Outreach: Team Member Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TeamMemberDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Team Member Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Team Member Detail donor inputs",
    "outputLabel": "Team Member Detail AI response",
    "signals": [
      "frontend/src/pages/TeamMemberDetail.tsx"
    ]
  },
  {
    "id": "ai-sales-outreach-template-detail-wlzhhy-exact-ai",
    "title": "AI Sales Outreach: Template Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TemplateDetail.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Template Detail\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Template Detail donor inputs",
    "outputLabel": "Template Detail AI response",
    "signals": [
      "Body",
      "Category",
      "Category",
      "Subject"
    ]
  },
  {
    "id": "ai-sales-outreach-ai-1lp99q-exact-ai",
    "title": "AI Sales Outreach: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "AI Analysis",
      "AI Confidence",
      "AI Insights",
      "AI Reasoning",
      "Artifact Id",
      "Artifact Kind",
      "Avoid Times",
      "Best Day"
    ]
  },
  {
    "id": "ai-sales-outreach-campaigns-rb7rhe-exact-ai",
    "title": "AI Sales Outreach: Campaigns",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/campaigns.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Campaigns\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Campaigns donor inputs",
    "outputLabel": "Campaigns AI response",
    "signals": [
      "Body Override",
      "Created By",
      "Delay Days",
      "Delay Hours",
      "Description",
      "End Date",
      "Ids",
      "Name"
    ]
  },
  {
    "id": "ai-sales-outreach-gap-ai-account-tier-scoring-icp-1q1xyu-exact-ai",
    "title": "AI Sales Outreach: Gap AI Account Tier Scoring Icp",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap_ai_account_tier_scoring_icp.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Account Tier Scoring Icp\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Account Tier Scoring Icp donor inputs",
    "outputLabel": "Gap AI Account Tier Scoring Icp AI response",
    "signals": [
      "backend/src/routes/gap_ai_account_tier_scoring_icp.ts"
    ]
  },
  {
    "id": "ai-sales-outreach-gap-ai-competitor-win-loss-analysis-3qt18v-exact-ai",
    "title": "AI Sales Outreach: Gap AI Competitor Win Loss Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap_ai_competitor_win_loss_analysis.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Competitor Win Loss Analysis\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Competitor Win Loss Analysis donor inputs",
    "outputLabel": "Gap AI Competitor Win Loss Analysis AI response",
    "signals": [
      "backend/src/routes/gap_ai_competitor_win_loss_analysis.ts"
    ]
  },
  {
    "id": "ai-sales-outreach-gap-ai-live-conversation-coaching-calls-j1r7ky-exact-ai",
    "title": "AI Sales Outreach: Gap AI Live Conversation Coaching Calls",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap_ai_live_conversation_coaching_calls.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Live Conversation Coaching Calls\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Live Conversation Coaching Calls donor inputs",
    "outputLabel": "Gap AI Live Conversation Coaching Calls AI response",
    "signals": [
      "backend/src/routes/gap_ai_live_conversation_coaching_calls.ts"
    ]
  },
  {
    "id": "ai-sales-outreach-gap-ai-multilingual-outreach-generation-15s78s-exact-ai",
    "title": "AI Sales Outreach: Gap AI Multilingual Outreach Generation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gap_ai_multilingual_outreach_generation.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Multilingual Outreach Generation\" from ai-sales-outreach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Multilingual Outreach Generation donor inputs",
    "outputLabel": "Gap AI Multilingual Outreach Generation AI response",
    "signals": [
      "backend/src/routes/gap_ai_multilingual_outreach_generation.ts"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-source-workflow",
    "title": "AI Bail Bond Risk Assessor Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIBailBondRiskAssessor.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIBailBondRiskAssessor to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Bail Bond Risk Assessor source context",
    "outputLabel": "AI Bail Bond Risk Assessor source analysis",
    "signals": [
      "server/services/openrouter",
      "server/services/emailService",
      "server/routes/agenticBailReview",
      "server/routes/ai",
      "server/routes/aiNew",
      "server/routes/bailBonds",
      "server/routes/gap_no_ai_driven_bond_pricing_despite_financial_analys",
      "server/routes/multiAgent"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-ai-tools",
    "title": "AI Bail Bond Risk Assessor AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIBailBondRiskAssessor.",
    "defaultPrompt": "Review AIBailBondRiskAssessor AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Bail Bond Risk Assessor AI prompt or tool context",
    "outputLabel": "AI Bail Bond Risk Assessor AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/services/emailService.js",
      "server/routes/agenticBailReview.js",
      "server/routes/ai.js",
      "server/routes/aiNew.js",
      "server/routes/bailBonds.js",
      "server/routes/gap_no_ai_driven_bond_pricing_despite_financial_analys.js",
      "server/routes/multiAgent.js"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-agentic-bail-review-1oyhqd-exact-ai",
    "title": "AI Bail Bond Risk Assessor: Agentic Bail Review",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticBailReview.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Bail Review\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Bail Review donor inputs",
    "outputLabel": "Agentic Bail Review AI response",
    "signals": [
      "server/routes/agenticBailReview.js"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-ai-j615h1-exact-ai",
    "title": "AI Bail Bond Risk Assessor: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Defendant Id",
      "Defendant Id"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-ai-new-1l6olc-exact-ai",
    "title": "AI Bail Bond Risk Assessor: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Bond Amount",
      "Bond Id",
      "Defendant Id",
      "Hearing Type = 'Bail Reduction Hearing'",
      "Missed Hearing Date",
      "Surety Data",
      "Surety Id",
      "Window Days = 30"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-bail-bonds-qjeqj3-exact-ai",
    "title": "AI Bail Bond Risk Assessor: Bail Bonds",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/bailBonds.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Bail Bonds\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Bail Bonds donor inputs",
    "outputLabel": "Bail Bonds AI response",
    "signals": [
      "Bond Amount",
      "Bond Type",
      "Case Number",
      "Charge",
      "Collateral",
      "Court Date",
      "Court Name",
      "Defendant Id"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-gap-no-ai-driven-bond-pricing-despite-financial-analys-1uuejb-exact-ai",
    "title": "AI Bail Bond Risk Assessor: Gap No AI Driven Bond Pricing Despite Financial Analys",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_no_ai_driven_bond_pricing_despite_financial_analys.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Driven Bond Pricing Despite Financial Analys\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Driven Bond Pricing Despite Financial Analys donor inputs",
    "outputLabel": "Gap No AI Driven Bond Pricing Despite Financial Analys AI response",
    "signals": [
      "server/routes/gap_no_ai_driven_bond_pricing_despite_financial_analys.js"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-multi-agent-54yn2l-exact-ai",
    "title": "AI Bail Bond Risk Assessor: Multi Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/multiAgent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Multi Agent\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Multi Agent donor inputs",
    "outputLabel": "Multi Agent AI response",
    "signals": [
      "Defendant Id"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-ai-insights-1pm7j5-exact-ai",
    "title": "AI Bail Bond Risk Assessor: AI Insights",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIInsights.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Insights\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Insights donor inputs",
    "outputLabel": "AI Insights AI response",
    "signals": [
      "client/src/pages/AIInsights.js"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-agentic-bail-review-workflow-with-multi-agent-risk-page-139os2-exact-ai",
    "title": "AI Bail Bond Risk Assessor: Agentic Bail Review Workflow With Multi Agent Risk Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AgenticBailReviewWorkflowWithMultiAgentRiskPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Bail Review Workflow With Multi Agent Risk Page\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Bail Review Workflow With Multi Agent Risk Page donor inputs",
    "outputLabel": "Agentic Bail Review Workflow With Multi Agent Risk Page AI response",
    "signals": [
      "client/src/pages/AgenticBailReviewWorkflowWithMultiAgentRiskPage.js"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-multi-agent-review-page-1s4cm7-exact-ai",
    "title": "AI Bail Bond Risk Assessor: Multi Agent Review Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/MultiAgentReviewPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Multi Agent Review Page\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Multi Agent Review Page donor inputs",
    "outputLabel": "Multi Agent Review Page AI response",
    "signals": [
      "client/src/pages/MultiAgentReviewPage.js"
    ]
  },
  {
    "id": "ai-bail-bond-risk-assessor-no-ai-driven-bond-pricing-despite-financial-analys-page-1f1b27-exact-ai",
    "title": "AI Bail Bond Risk Assessor: No AI Driven Bond Pricing Despite Financial Analys Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/NoAiDrivenBondPricingDespiteFinancialAnalysPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Driven Bond Pricing Despite Financial Analys Page\" from AIBailBondRiskAssessor. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Driven Bond Pricing Despite Financial Analys Page donor inputs",
    "outputLabel": "No AI Driven Bond Pricing Despite Financial Analys Page AI response",
    "signals": [
      "client/src/pages/NoAiDrivenBondPricingDespiteFinancialAnalysPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-source-workflow",
    "title": "AI Car Dealership Sales Optimizer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AICarDealershipSalesOptimizer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AICarDealershipSalesOptimizer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Car Dealership Sales Optimizer source context",
    "outputLabel": "AI Car Dealership Sales Optimizer source analysis",
    "signals": [
      "backend/services/openrouter",
      "frontend/src/pages/AIStudioPage",
      "frontend/src/pages/AgenticSdrRespondingToLeadsQualifyingAndBooPage",
      "frontend/src/pages/AinewJsScaffoldButNoMountedChatStyleAiEndPage",
      "frontend/src/pages/CampaignsPage",
      "frontend/src/pages/NoAiDealDeskNegotiationCoPilotPage",
      "frontend/src/pages/NoAiLeadScoringOnInboundContactsPage",
      "frontend/src/pages/NoAiTradeInValuationPage"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-ai-tools",
    "title": "AI Car Dealership Sales Optimizer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AICarDealershipSalesOptimizer.",
    "defaultPrompt": "Review AICarDealershipSalesOptimizer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Car Dealership Sales Optimizer AI prompt or tool context",
    "outputLabel": "AI Car Dealership Sales Optimizer AI tool response",
    "signals": [
      "backend/services/openrouter.js",
      "frontend/src/pages/AIStudioPage.js",
      "frontend/src/pages/AgenticSdrRespondingToLeadsQualifyingAndBooPage.js",
      "frontend/src/pages/AinewJsScaffoldButNoMountedChatStyleAiEndPage.js",
      "frontend/src/pages/CampaignsPage.js",
      "frontend/src/pages/NoAiDealDeskNegotiationCoPilotPage.js",
      "frontend/src/pages/NoAiLeadScoringOnInboundContactsPage.js",
      "frontend/src/pages/NoAiTradeInValuationPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-ai-studio-page-14ncyi-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: AI Studio Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIStudioPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Studio Page\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Studio Page donor inputs",
    "outputLabel": "AI Studio Page AI response",
    "signals": [
      "frontend/src/pages/AIStudioPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-agentic-sdr-responding-to-leads-qualifying-and-boo-page-1o9d6y-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Agentic Sdr Responding To Leads Qualifying And Boo Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AgenticSdrRespondingToLeadsQualifyingAndBooPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Sdr Responding To Leads Qualifying And Boo Page\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Sdr Responding To Leads Qualifying And Boo Page donor inputs",
    "outputLabel": "Agentic Sdr Responding To Leads Qualifying And Boo Page AI response",
    "signals": [
      "frontend/src/pages/AgenticSdrRespondingToLeadsQualifyingAndBooPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-ainew-js-scaffold-but-no-mounted-chat-style-ai-end-page-dvkxy1-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Ainew Js Scaffold But No Mounted Chat Style AI End Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AinewJsScaffoldButNoMountedChatStyleAiEndPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Ainew Js Scaffold But No Mounted Chat Style AI End Page\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Ainew Js Scaffold But No Mounted Chat Style AI End Page donor inputs",
    "outputLabel": "Ainew Js Scaffold But No Mounted Chat Style AI End Page AI response",
    "signals": [
      "frontend/src/pages/AinewJsScaffoldButNoMountedChatStyleAiEndPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-campaigns-page-1widvf-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Campaigns Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CampaignsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Campaigns Page\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Campaigns Page donor inputs",
    "outputLabel": "Campaigns Page AI response",
    "signals": [
      "Campaign Name *",
      "Channel *",
      "Start Date",
      "Campaign Name",
      "Type",
      "Revenue Attributed",
      "Impressions",
      "Spent"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-no-ai-deal-desk-negotiation-co-pilot-page-1k47hn-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: No AI Deal Desk Negotiation Co Pilot Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiDealDeskNegotiationCoPilotPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Deal Desk Negotiation Co Pilot Page\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Deal Desk Negotiation Co Pilot Page donor inputs",
    "outputLabel": "No AI Deal Desk Negotiation Co Pilot Page AI response",
    "signals": [
      "frontend/src/pages/NoAiDealDeskNegotiationCoPilotPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-no-ai-lead-scoring-on-inbound-contacts-page-11n49u-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: No AI Lead Scoring On Inbound Contacts Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiLeadScoringOnInboundContactsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Lead Scoring On Inbound Contacts Page\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Lead Scoring On Inbound Contacts Page donor inputs",
    "outputLabel": "No AI Lead Scoring On Inbound Contacts Page AI response",
    "signals": [
      "frontend/src/pages/NoAiLeadScoringOnInboundContactsPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-no-ai-trade-in-valuation-page-12vei0-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: No AI Trade In Valuation Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiTradeInValuationPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Trade In Valuation Page\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Trade In Valuation Page donor inputs",
    "outputLabel": "No AI Trade In Valuation Page AI response",
    "signals": [
      "frontend/src/pages/NoAiTradeInValuationPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-no-ai-vehicle-photo-enhancement-and-listing-copy-page-1m1450-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: No AI Vehicle Photo Enhancement And Listing Copy Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiVehiclePhotoEnhancementAndListingCopyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Vehicle Photo Enhancement And Listing Copy Page\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Vehicle Photo Enhancement And Listing Copy Page donor inputs",
    "outputLabel": "No AI Vehicle Photo Enhancement And Listing Copy Page AI response",
    "signals": [
      "frontend/src/pages/NoAiVehiclePhotoEnhancementAndListingCopyPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-no-notification-system-sms-email-delivery-channel-page-1mgmqt-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: No Notification System Sms Email Delivery Channel Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoNotificationSystemSmsEmailDeliveryChannelPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No Notification System Sms Email Delivery Channel Page\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No Notification System Sms Email Delivery Channel Page donor inputs",
    "outputLabel": "No Notification System Sms Email Delivery Channel Page AI response",
    "signals": [
      "frontend/src/pages/NoNotificationSystemSmsEmailDeliveryChannelPage.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-agentic-sdr-1lv1tb-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Agentic Sdr",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agenticSdr.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Sdr\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Sdr donor inputs",
    "outputLabel": "Agentic Sdr AI response",
    "signals": [
      "backend/routes/agenticSdr.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-ai-new-7q6oy0-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Claims History",
      "Condition Description",
      "Credit Score",
      "Customer",
      "Customer Profile",
      "Documents",
      "Down Payment",
      "Inventory"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-campaigns-gosqfl-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Campaigns",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/campaigns.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Campaigns\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Campaigns donor inputs",
    "outputLabel": "Campaigns AI response",
    "signals": [
      "Budget",
      "Campaign Type",
      "Channel",
      "Clicks",
      "Conversion Rate",
      "Deals Closed",
      "End Date",
      "Impressions"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-gap-ainew-js-scaffold-but-no-mounted-chat-style-ai-end-lfyar5-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Gap Ainew Js Scaffold But No Mounted Chat Style AI End",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_ainew_js_scaffold_but_no_mounted_chat_style_ai_end.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Ainew Js Scaffold But No Mounted Chat Style AI End\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Ainew Js Scaffold But No Mounted Chat Style AI End donor inputs",
    "outputLabel": "Gap Ainew Js Scaffold But No Mounted Chat Style AI End AI response",
    "signals": [
      "backend/routes/gap_ainew_js_scaffold_but_no_mounted_chat_style_ai_end.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-gap-no-ai-deal-desk-negotiation-co-pilot-d90g20-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Gap No AI Deal Desk Negotiation Co Pilot",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_deal_desk_negotiation_co_pilot.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Deal Desk Negotiation Co Pilot\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Deal Desk Negotiation Co Pilot donor inputs",
    "outputLabel": "Gap No AI Deal Desk Negotiation Co Pilot AI response",
    "signals": [
      "backend/routes/gap_no_ai_deal_desk_negotiation_co_pilot.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-gap-no-ai-lead-scoring-on-inbound-contacts-10ffud-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Gap No AI Lead Scoring On Inbound Contacts",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_lead_scoring_on_inbound_contacts.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Lead Scoring On Inbound Contacts\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Lead Scoring On Inbound Contacts donor inputs",
    "outputLabel": "Gap No AI Lead Scoring On Inbound Contacts AI response",
    "signals": [
      "backend/routes/gap_no_ai_lead_scoring_on_inbound_contacts.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-gap-no-ai-trade-in-valuation-fegqha-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Gap No AI Trade In Valuation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_trade_in_valuation.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Trade In Valuation\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Trade In Valuation donor inputs",
    "outputLabel": "Gap No AI Trade In Valuation AI response",
    "signals": [
      "backend/routes/gap_no_ai_trade_in_valuation.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-gap-no-ai-vehicle-photo-enhancement-and-listing-copy-125urv-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Gap No AI Vehicle Photo Enhancement And Listing Copy",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_vehicle_photo_enhancement_and_listing_copy.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Vehicle Photo Enhancement And Listing Copy\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Vehicle Photo Enhancement And Listing Copy donor inputs",
    "outputLabel": "Gap No AI Vehicle Photo Enhancement And Listing Copy AI response",
    "signals": [
      "backend/routes/gap_no_ai_vehicle_photo_enhancement_and_listing_copy.js"
    ]
  },
  {
    "id": "ai-car-dealership-sales-optimizer-gap-no-notification-system-sms-email-delivery-channel-o1wjm-exact-ai",
    "title": "AI Car Dealership Sales Optimizer: Gap No Notification System Sms Email Delivery Channel",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_notification_system_sms_email_delivery_channel.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Notification System Sms Email Delivery Channel\" from AICarDealershipSalesOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Notification System Sms Email Delivery Channel donor inputs",
    "outputLabel": "Gap No Notification System Sms Email Delivery Channel AI response",
    "signals": [
      "backend/routes/gap_no_notification_system_sms_email_delivery_channel.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-source-workflow",
    "title": "AI Detectcombatmisinformatio Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIDetectcombatmisinformatio.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIDetectcombatmisinformatio to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Detectcombatmisinformatio source context",
    "outputLabel": "AI Detectcombatmisinformatio source analysis",
    "signals": [
      "server/services/openrouter",
      "server/services/parseAIJson",
      "server/routes/ai",
      "server/routes/aiNew",
      "server/routes/claims",
      "server/routes/gap_no_verdict_explainability_surface",
      "server/routes/gap_sources_lacks_ai_credibility_scoring_endpoint",
      "server/routes/gap_trending_categories_lack_ai_endpoints_for_trend_prediction_a"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-tools",
    "title": "AI Detectcombatmisinformatio AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIDetectcombatmisinformatio.",
    "defaultPrompt": "Review AIDetectcombatmisinformatio AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Detectcombatmisinformatio AI prompt or tool context",
    "outputLabel": "AI Detectcombatmisinformatio AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/services/parseAIJson.js",
      "server/routes/ai.js",
      "server/routes/aiNew.js",
      "server/routes/claims.js",
      "server/routes/gap_no_verdict_explainability_surface.js",
      "server/routes/gap_sources_lacks_ai_credibility_scoring_endpoint.js",
      "server/routes/gap_trending_categories_lack_ai_endpoints_for_trend_prediction_a.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-j615h1-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Claim",
      "Claim Id",
      "Description",
      "Evidence",
      "Name",
      "Text",
      "Url"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-new-1l6olc-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Analysis Id",
      "Audience Profile Id",
      "Available Categories",
      "Claim Id",
      "Claim Text",
      "Correction Text",
      "Demographics",
      "Depth = 1"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-claims-mbyvno-exact-ai",
    "title": "AI Detectcombatmisinformatio: Claims",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/claims.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Claims\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Claims donor inputs",
    "outputLabel": "Claims AI response",
    "signals": [
      "Assigned To",
      "Category Id",
      "Content",
      "Origin Url",
      "Priority",
      "Source Id",
      "Status",
      "Title"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-gap-no-verdict-explainability-surface-xv88w1-exact-ai",
    "title": "AI Detectcombatmisinformatio: Gap No Verdict Explainability Surface",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_no_verdict_explainability_surface.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Verdict Explainability Surface\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Verdict Explainability Surface donor inputs",
    "outputLabel": "Gap No Verdict Explainability Surface AI response",
    "signals": [
      "server/routes/gap_no_verdict_explainability_surface.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-gap-sources-lacks-ai-credibility-scoring-endpoint-1so72r-exact-ai",
    "title": "AI Detectcombatmisinformatio: Gap Sources Lacks AI Credibility Scoring Endpoint",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_sources_lacks_ai_credibility_scoring_endpoint.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Sources Lacks AI Credibility Scoring Endpoint\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Sources Lacks AI Credibility Scoring Endpoint donor inputs",
    "outputLabel": "Gap Sources Lacks AI Credibility Scoring Endpoint AI response",
    "signals": [
      "server/routes/gap_sources_lacks_ai_credibility_scoring_endpoint.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-gap-trending-categories-lack-ai-endpoints-for-trend-prediction-a-1t5nuu-exact-ai",
    "title": "AI Detectcombatmisinformatio: Gap Trending Categories Lack AI Endpoints For Trend Prediction A",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_trending_categories_lack_ai_endpoints_for_trend_prediction_a.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Trending Categories Lack AI Endpoints For Trend Prediction A\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Trending Categories Lack AI Endpoints For Trend Prediction A donor inputs",
    "outputLabel": "Gap Trending Categories Lack AI Endpoints For Trend Prediction A AI response",
    "signals": [
      "server/routes/gap_trending_categories_lack_ai_endpoints_for_trend_prediction_a.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-auto-categorize-key6gu-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Auto Categorize",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIAutoCategorize.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Auto Categorize\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Auto Categorize donor inputs",
    "outputLabel": "AI Auto Categorize AI response",
    "signals": [
      "client/src/pages/AIAutoCategorize.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-claim-analyzer-6avble-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Claim Analyzer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIClaimAnalyzer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Claim Analyzer\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Claim Analyzer donor inputs",
    "outputLabel": "AI Claim Analyzer AI response",
    "signals": [
      "client/src/pages/AIClaimAnalyzer.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-integrations-bfsair-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Integrations",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIIntegrations.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Integrations\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Integrations donor inputs",
    "outputLabel": "AI Integrations AI response",
    "signals": [
      "client/src/pages/AIIntegrations.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-pattern-detector-1sn32p-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Pattern Detector",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIPatternDetector.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Pattern Detector\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Pattern Detector donor inputs",
    "outputLabel": "AI Pattern Detector AI response",
    "signals": [
      "client/src/pages/AIPatternDetector.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-personalized-debunk-e4stmf-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Personalized Debunk",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIPersonalizedDebunk.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Personalized Debunk\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Personalized Debunk donor inputs",
    "outputLabel": "AI Personalized Debunk AI response",
    "signals": [
      "client/src/pages/AIPersonalizedDebunk.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-realtime-monitor-119qal-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Realtime Monitor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIRealtimeMonitor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Realtime Monitor\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Realtime Monitor donor inputs",
    "outputLabel": "AI Realtime Monitor AI response",
    "signals": [
      "client/src/pages/AIRealtimeMonitor.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-sentiment-l6vt5l-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Sentiment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AISentiment.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Sentiment\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Sentiment donor inputs",
    "outputLabel": "AI Sentiment AI response",
    "signals": [
      "client/src/pages/AISentiment.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-source-checker-upbzpe-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Source Checker",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AISourceChecker.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Source Checker\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Source Checker donor inputs",
    "outputLabel": "AI Source Checker AI response",
    "signals": [
      "client/src/pages/AISourceChecker.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-source-trace-11a93l-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Source Trace",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AISourceTrace.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Source Trace\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Source Trace donor inputs",
    "outputLabel": "AI Source Trace AI response",
    "signals": [
      "client/src/pages/AISourceTrace.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-summary-generator-4r39gx-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Summary Generator",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AISummaryGenerator.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Summary Generator\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Summary Generator donor inputs",
    "outputLabel": "AI Summary Generator AI response",
    "signals": [
      "client/src/pages/AISummaryGenerator.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-ai-trend-prediction-odym0i-exact-ai",
    "title": "AI Detectcombatmisinformatio: AI Trend Prediction",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AITrendPrediction.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Trend Prediction\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Trend Prediction donor inputs",
    "outputLabel": "AI Trend Prediction AI response",
    "signals": [
      "client/src/pages/AITrendPrediction.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-cf-predictive-claim-verification-1iwst5-exact-ai",
    "title": "AI Detectcombatmisinformatio: Cf Predictive Claim Verification",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfPredictiveClaimVerification.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Predictive Claim Verification\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Predictive Claim Verification donor inputs",
    "outputLabel": "Cf Predictive Claim Verification AI response",
    "signals": [
      "client/src/pages/CfPredictiveClaimVerification.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-claims-ukjbkv-exact-ai",
    "title": "AI Detectcombatmisinformatio: Claims",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/Claims.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Claims\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Claims donor inputs",
    "outputLabel": "Claims AI response",
    "signals": [
      "Content *",
      "Title *",
      "Assigned To",
      "Category",
      "Created",
      "Origin URL",
      "Priority",
      "Reach"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-gap-no-verdict-explainability-surface-gdhenu-exact-ai",
    "title": "AI Detectcombatmisinformatio: Gap No Verdict Explainability Surface",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoVerdictExplainabilitySurface.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Verdict Explainability Surface\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Verdict Explainability Surface donor inputs",
    "outputLabel": "Gap No Verdict Explainability Surface AI response",
    "signals": [
      "client/src/pages/GapNoVerdictExplainabilitySurface.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-gap-sources-lacks-ai-credibility-scoring-endpoint-1sqil8-exact-ai",
    "title": "AI Detectcombatmisinformatio: Gap Sources Lacks AI Credibility Scoring Endpoint",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapSourcesLacksAiCredibilityScoringEndpoint.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Sources Lacks AI Credibility Scoring Endpoint\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Sources Lacks AI Credibility Scoring Endpoint donor inputs",
    "outputLabel": "Gap Sources Lacks AI Credibility Scoring Endpoint AI response",
    "signals": [
      "client/src/pages/GapSourcesLacksAiCredibilityScoringEndpoint.js"
    ]
  },
  {
    "id": "ai-detectcombatmisinformatio-gap-trending-categories-lack-ai-endpoints-for-trend-prediction-a-1tdunw-exact-ai",
    "title": "AI Detectcombatmisinformatio: Gap Trending Categories Lack AI Endpoints For Trend Prediction A",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapTrendingCategoriesLackAiEndpointsForTrendPredictionA.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Trending Categories Lack AI Endpoints For Trend Prediction A\" from AIDetectcombatmisinformatio. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Trending Categories Lack AI Endpoints For Trend Prediction A donor inputs",
    "outputLabel": "Gap Trending Categories Lack AI Endpoints For Trend Prediction A AI response",
    "signals": [
      "client/src/pages/GapTrendingCategoriesLackAiEndpointsForTrendPredictionA.js"
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-source-workflow",
    "title": "AI Digital Identity Verifiable Credentials Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIDigitalIdentityVerifiableCredentials.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIDigitalIdentityVerifiableCredentials to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Digital Identity Verifiable Credentials source context",
    "outputLabel": "AI Digital Identity Verifiable Credentials source analysis",
    "signals": [
      "server/openrouter",
      "server/routes/ai-center",
      "server/routes/aiNew",
      "server/routes/crosschainBridge",
      "server/routes/gap_no_blockchain_integration_ethereum_hyperledger_did",
      "client/tailwind.config",
      "client/src/main",
      "client/src/pages/AICenter"
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-ai-tools",
    "title": "AI Digital Identity Verifiable Credentials AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIDigitalIdentityVerifiableCredentials.",
    "defaultPrompt": "Review AIDigitalIdentityVerifiableCredentials AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Digital Identity Verifiable Credentials AI prompt or tool context",
    "outputLabel": "AI Digital Identity Verifiable Credentials AI tool response",
    "signals": [
      "server/openrouter.js",
      "server/routes/ai-center.js",
      "server/routes/aiNew.js",
      "server/routes/crosschainBridge.js",
      "server/routes/gap_no_blockchain_integration_ethereum_hyperledger_did.js",
      "client/tailwind.config.js",
      "client/src/main.jsx",
      "client/src/pages/AICenter.jsx"
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-ai-center-1cu9t7-exact-ai",
    "title": "AI Digital Identity Verifiable Credentials: AI Center",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-center.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center\" from AIDigitalIdentityVerifiableCredentials. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center donor inputs",
    "outputLabel": "AI Center AI response",
    "signals": [
      "Available Credentials",
      "Credential Data",
      "Credential Type",
      "Did Document",
      "Entity Data",
      "Entity Type",
      "Framework",
      "Identity Id"
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-ai-new-1l6olc-exact-ai",
    "title": "AI Digital Identity Verifiable Credentials: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIDigitalIdentityVerifiableCredentials. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Action = 'Create'",
      "Credential Id",
      "Credential Ids",
      "Did Uri",
      "Framework",
      "Identity Id",
      "Issuer",
      "Outcome = 'Pass'"
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-crosschain-bridge-ahuei9-exact-ai",
    "title": "AI Digital Identity Verifiable Credentials: Crosschain Bridge",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/crosschainBridge.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Crosschain Bridge\" from AIDigitalIdentityVerifiableCredentials. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Crosschain Bridge donor inputs",
    "outputLabel": "Crosschain Bridge AI response",
    "signals": [
      "server/routes/crosschainBridge.js"
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-gap-no-blockchain-integration-ethereum-hyperledger-did-90eech-exact-ai",
    "title": "AI Digital Identity Verifiable Credentials: Gap No Blockchain Integration Ethereum Hyperledger Did",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_no_blockchain_integration_ethereum_hyperledger_did.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Blockchain Integration Ethereum Hyperledger Did\" from AIDigitalIdentityVerifiableCredentials. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Blockchain Integration Ethereum Hyperledger Did donor inputs",
    "outputLabel": "Gap No Blockchain Integration Ethereum Hyperledger Did AI response",
    "signals": [
      "server/routes/gap_no_blockchain_integration_ethereum_hyperledger_did.js"
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-ai-center-42pwwt-exact-ai",
    "title": "AI Digital Identity Verifiable Credentials: AI Center",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AICenter.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center\" from AIDigitalIdentityVerifiableCredentials. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center donor inputs",
    "outputLabel": "AI Center AI response",
    "signals": [
      "client/src/pages/AICenter.jsx"
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-cf-cross-chain-credential-bridging-qa90gp-exact-ai",
    "title": "AI Digital Identity Verifiable Credentials: Cf Cross Chain Credential Bridging",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfCrossChainCredentialBridging.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Cross Chain Credential Bridging\" from AIDigitalIdentityVerifiableCredentials. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Cross Chain Credential Bridging donor inputs",
    "outputLabel": "Cf Cross Chain Credential Bridging AI response",
    "signals": [
      "client/src/pages/CfCrossChainCredentialBridging.jsx"
    ]
  },
  {
    "id": "ai-digital-identity-verifiable-credentials-gap-no-blockchain-integration-ethereum-hyperledger-did-encvz6-exact-ai",
    "title": "AI Digital Identity Verifiable Credentials: Gap No Blockchain Integration Ethereum Hyperledger Did",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoBlockchainIntegrationEthereumHyperledgerDid.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Blockchain Integration Ethereum Hyperledger Did\" from AIDigitalIdentityVerifiableCredentials. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Blockchain Integration Ethereum Hyperledger Did donor inputs",
    "outputLabel": "Gap No Blockchain Integration Ethereum Hyperledger Did AI response",
    "signals": [
      "client/src/pages/GapNoBlockchainIntegrationEthereumHyperledgerDid.jsx"
    ]
  },
  {
    "id": "ai-dynamiclocationaware-source-workflow",
    "title": "AI Dynamiclocationaware Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIDynamiclocationaware.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIDynamiclocationaware to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Dynamiclocationaware source context",
    "outputLabel": "AI Dynamiclocationaware source analysis",
    "signals": [
      "server/utils/parseAIJson",
      "server/routes/agenticCampaignPlanner",
      "server/routes/ai",
      "server/routes/aiExtra",
      "server/routes/aiNew",
      "server/routes/campaigns"
    ]
  },
  {
    "id": "ai-dynamiclocationaware-ai-tools",
    "title": "AI Dynamiclocationaware AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIDynamiclocationaware.",
    "defaultPrompt": "Review AIDynamiclocationaware AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Dynamiclocationaware AI prompt or tool context",
    "outputLabel": "AI Dynamiclocationaware AI tool response",
    "signals": [
      "server/utils/parseAIJson.js",
      "server/routes/agenticCampaignPlanner.js",
      "server/routes/ai.js",
      "server/routes/aiExtra.js",
      "server/routes/aiNew.js",
      "server/routes/campaigns.js"
    ]
  },
  {
    "id": "ai-dynamiclocationaware-agentic-campaign-planner-yerbui-exact-ai",
    "title": "AI Dynamiclocationaware: Agentic Campaign Planner",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticCampaignPlanner.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Campaign Planner\" from AIDynamiclocationaware. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Campaign Planner donor inputs",
    "outputLabel": "Agentic Campaign Planner AI response",
    "signals": [
      "Brief",
      "Budget"
    ]
  },
  {
    "id": "ai-dynamiclocationaware-ai-j615h1-exact-ai",
    "title": "AI Dynamiclocationaware: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIDynamiclocationaware. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Campaign Id",
      "Custom Prompt",
      "Neighborhood Id",
      "Tone",
      "Truck Id"
    ]
  },
  {
    "id": "ai-dynamiclocationaware-ai-extra-1evzug-exact-ai",
    "title": "AI Dynamiclocationaware: AI Extra",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiExtra.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Extra\" from AIDynamiclocationaware. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Extra donor inputs",
    "outputLabel": "AI Extra AI response",
    "signals": [
      "Campaign Id",
      "Event",
      "Headline Id",
      "Headline Text",
      "Neighborhood Id",
      "Rubric",
      "Truck Id"
    ]
  },
  {
    "id": "ai-dynamiclocationaware-ai-new-1l6olc-exact-ai",
    "title": "AI Dynamiclocationaware: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIDynamiclocationaware. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Base Cpm",
      "Campaign Id",
      "Day Part",
      "Headline",
      "Holiday",
      "Horizon Hours",
      "Hours Per Neighborhood",
      "Neighborhood Id"
    ]
  },
  {
    "id": "ai-dynamiclocationaware-campaigns-1u0cl8-exact-ai",
    "title": "AI Dynamiclocationaware: Campaigns",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/campaigns.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Campaigns\" from AIDynamiclocationaware. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Campaigns donor inputs",
    "outputLabel": "Campaigns AI response",
    "signals": [
      "Budget",
      "Client Name",
      "Description",
      "End Date",
      "Name",
      "Neighborhood Id",
      "Start Date",
      "Status"
    ]
  },
  {
    "id": "ai-localization-translation-agency-source-workflow",
    "title": "AI Localization Translation Agency Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AILocalizationTranslationAgency.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AILocalizationTranslationAgency to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Localization Translation Agency source context",
    "outputLabel": "AI Localization Translation Agency source analysis",
    "signals": [
      "server/routes/ai-back-translation",
      "server/routes/ai-bias-check",
      "server/routes/ai-brand-voice",
      "server/routes/ai-client-insights",
      "server/routes/ai-competitor",
      "server/routes/ai-cultural",
      "server/routes/ai-doc-compare",
      "server/routes/ai-generate-quote"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-tools",
    "title": "AI Localization Translation Agency AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AILocalizationTranslationAgency.",
    "defaultPrompt": "Review AILocalizationTranslationAgency AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Localization Translation Agency AI prompt or tool context",
    "outputLabel": "AI Localization Translation Agency AI tool response",
    "signals": [
      "server/routes/ai-back-translation.js",
      "server/routes/ai-bias-check.js",
      "server/routes/ai-brand-voice.js",
      "server/routes/ai-client-insights.js",
      "server/routes/ai-competitor.js",
      "server/routes/ai-cultural.js",
      "server/routes/ai-doc-compare.js",
      "server/routes/ai-generate-quote.js"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-back-translation-1d2k5r-exact-ai",
    "title": "AI Localization Translation Agency: AI Back Translation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-back-translation.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Back Translation\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Back Translation donor inputs",
    "outputLabel": "AI Back Translation AI response",
    "signals": [
      "Domain",
      "Source Language",
      "Source Text",
      "Target Language",
      "Translated Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-bias-check-xmk0ay-exact-ai",
    "title": "AI Localization Translation Agency: AI Bias Check",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-bias-check.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Bias Check\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Bias Check donor inputs",
    "outputLabel": "AI Bias Check AI response",
    "signals": [
      "Guidelines",
      "Language",
      "Target Audience",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-brand-voice-1sf6b1-exact-ai",
    "title": "AI Localization Translation Agency: AI Brand Voice",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-brand-voice.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Brand Voice\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Brand Voice donor inputs",
    "outputLabel": "AI Brand Voice AI response",
    "signals": [
      "Brand Examples",
      "Brand Guidelines",
      "Content Type",
      "Language",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-competitor-1koozx-exact-ai",
    "title": "AI Localization Translation Agency: AI Competitor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-competitor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Competitor\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Competitor donor inputs",
    "outputLabel": "AI Competitor AI response",
    "signals": [
      "Competitor Content",
      "Industry",
      "Language",
      "Market",
      "Your Content"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-cultural-9x7sf0-exact-ai",
    "title": "AI Localization Translation Agency: AI Cultural",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-cultural.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Cultural\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Cultural donor inputs",
    "outputLabel": "AI Cultural AI response",
    "signals": [
      "Content Type",
      "Sourceculture",
      "Target Culture",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-doc-compare-1habzq-exact-ai",
    "title": "AI Localization Translation Agency: AI Doc Compare",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-doc-compare.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Doc Compare\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Doc Compare donor inputs",
    "outputLabel": "AI Doc Compare AI response",
    "signals": [
      "Comparison Type",
      "Source Language",
      "Source Text",
      "Target Language",
      "Translated Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-generate-quote-srknt0-exact-ai",
    "title": "AI Localization Translation Agency: AI Generate Quote",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-generate-quote.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Generate Quote\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Generate Quote donor inputs",
    "outputLabel": "AI Generate Quote AI response",
    "signals": [
      "Project Id"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-glossary-gen-xmnvnb-exact-ai",
    "title": "AI Localization Translation Agency: AI Glossary Gen",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-glossary-gen.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Glossary Gen\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Glossary Gen donor inputs",
    "outputLabel": "AI Glossary Gen AI response",
    "signals": [
      "Domain",
      "Existing Terms",
      "Reference Text",
      "Source Language",
      "Target Language"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-grammar-1v04yn-exact-ai",
    "title": "AI Localization Translation Agency: AI Grammar",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-grammar.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Grammar\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Grammar donor inputs",
    "outputLabel": "AI Grammar AI response",
    "signals": [
      "Language",
      "Style Guide",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-invoice-analyzer-3sfgia-exact-ai",
    "title": "AI Localization Translation Agency: AI Invoice Analyzer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-invoice-analyzer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Invoice Analyzer\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Invoice Analyzer donor inputs",
    "outputLabel": "AI Invoice Analyzer AI response",
    "signals": [
      "Invoice Data",
      "Period",
      "Pricing Model",
      "Target Revenue"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-lang-detect-1q46ij-exact-ai",
    "title": "AI Localization Translation Agency: AI Lang Detect",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-lang-detect.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Lang Detect\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Lang Detect donor inputs",
    "outputLabel": "AI Lang Detect AI response",
    "signals": [
      "Detect Dialect",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-localize-1yyyyg-exact-ai",
    "title": "AI Localization Translation Agency: AI Localize",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-localize.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Localize\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Localize donor inputs",
    "outputLabel": "AI Localize AI response",
    "signals": [
      "Content Type",
      "Industry",
      "Source Locale",
      "Target Locale",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-order-optimizer-qv2sgg-exact-ai",
    "title": "AI Localization Translation Agency: AI Order Optimizer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-order-optimizer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Order Optimizer\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Order Optimizer donor inputs",
    "outputLabel": "AI Order Optimizer AI response",
    "signals": [
      "Available Resources",
      "Constraints",
      "Orders"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-project-analyzer-fptkc6-exact-ai",
    "title": "AI Localization Translation Agency: AI Project Analyzer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-project-analyzer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Project Analyzer\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Project Analyzer donor inputs",
    "outputLabel": "AI Project Analyzer AI response",
    "signals": [
      "Budget",
      "Content Type",
      "Deadline",
      "Project Description",
      "Source Language",
      "Target Languages",
      "Word Count"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-quality-o3ri7p-exact-ai",
    "title": "AI Localization Translation Agency: AI Quality",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-quality.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Quality\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Quality donor inputs",
    "outputLabel": "AI Quality AI response",
    "signals": [
      "Quality Framework",
      "Source Language",
      "Source Text",
      "Target Language",
      "Translated Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-readability-1kq4j4-exact-ai",
    "title": "AI Localization Translation Agency: AI Readability",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-readability.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Readability\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Readability donor inputs",
    "outputLabel": "AI Readability AI response",
    "signals": [
      "Language",
      "Target Audience",
      "Target Reading Level",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-results-1xhz3f-exact-ai",
    "title": "AI Localization Translation Agency: AI Results",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-results.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Results\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Results donor inputs",
    "outputLabel": "AI Results AI response",
    "signals": [
      "server/routes/ai-results.js"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-sentiment-1p8cm1-exact-ai",
    "title": "AI Localization Translation Agency: AI Sentiment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-sentiment.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Sentiment\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Sentiment donor inputs",
    "outputLabel": "AI Sentiment AI response",
    "signals": [
      "Source Language",
      "Source Text",
      "Target Language",
      "Translated Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-seo-9nujq9-exact-ai",
    "title": "AI Localization Translation Agency: AI Seo",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-seo.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Seo\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Seo donor inputs",
    "outputLabel": "AI Seo AI response",
    "signals": [
      "Keywords",
      "Source Language",
      "Target Language",
      "Target Market",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-style-transfer-ulxvux-exact-ai",
    "title": "AI Localization Translation Agency: AI Style Transfer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-style-transfer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Style Transfer\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Style Transfer donor inputs",
    "outputLabel": "AI Style Transfer AI response",
    "signals": [
      "Brand Voice",
      "Language",
      "Source Style",
      "Target Style",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-subtitles-1dowif-exact-ai",
    "title": "AI Localization Translation Agency: AI Subtitles",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-subtitles.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Subtitles\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Subtitles donor inputs",
    "outputLabel": "AI Subtitles AI response",
    "signals": [
      "Format",
      "Max Chars Per Line",
      "Max Lines Per Subtitle",
      "Source Language",
      "Target Language",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-summarize-10mf3y-exact-ai",
    "title": "AI Localization Translation Agency: AI Summarize",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-summarize.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Summarize\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Summarize donor inputs",
    "outputLabel": "AI Summarize AI response",
    "signals": [
      "Focus Areas",
      "Language",
      "Summary Type",
      "Target Length",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-terminology-g3vdv-exact-ai",
    "title": "AI Localization Translation Agency: AI Terminology",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-terminology.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Terminology\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Terminology donor inputs",
    "outputLabel": "AI Terminology AI response",
    "signals": [
      "Domain",
      "Source Language",
      "Target Language",
      "Text"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-translate-a2pke6-exact-ai",
    "title": "AI Localization Translation Agency: AI Translate",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-translate.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Translate\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Translate donor inputs",
    "outputLabel": "AI Translate AI response",
    "signals": [
      "Domain",
      "Source Language",
      "Target Language",
      "Text",
      "Tone"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-translation-memory-1ejgxp-exact-ai",
    "title": "AI Localization Translation Agency: AI Translation Memory",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-translation-memory.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Translation Memory\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Translation Memory donor inputs",
    "outputLabel": "AI Translation Memory AI response",
    "signals": [
      "Previous Translations",
      "Source Language",
      "Source Text",
      "Target Language"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-translator-matcher-1crtn2-exact-ai",
    "title": "AI Localization Translation Agency: AI Translator Matcher",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-translator-matcher.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Translator Matcher\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Translator Matcher donor inputs",
    "outputLabel": "AI Translator Matcher AI response",
    "signals": [
      "Deadline",
      "Domain",
      "Project Requirements",
      "Quality Tier",
      "Source Language",
      "Target Language"
    ]
  },
  {
    "id": "ai-localization-translation-agency-gap-ai-dialect-variant-detection-1aejl5-exact-ai",
    "title": "AI Localization Translation Agency: Gap AI Dialect Variant Detection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-dialect-variant-detection.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Dialect Variant Detection\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Dialect Variant Detection donor inputs",
    "outputLabel": "Gap AI Dialect Variant Detection AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-localization-translation-agency-gap-ai-post-edit-effort-predictor-1sm7dp-exact-ai",
    "title": "AI Localization Translation Agency: Gap AI Post Edit Effort Predictor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-post-edit-effort-predictor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Post Edit Effort Predictor\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Post Edit Effort Predictor donor inputs",
    "outputLabel": "Gap AI Post Edit Effort Predictor AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-localization-translation-agency-gap-ai-realtime-tm-leverage-uky2ce-exact-ai",
    "title": "AI Localization Translation Agency: Gap AI Realtime Tm Leverage",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-realtime-tm-leverage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Realtime Tm Leverage\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Realtime Tm Leverage donor inputs",
    "outputLabel": "Gap AI Realtime Tm Leverage AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-localization-translation-agency-gap-ai-regulatory-compliance-1a4aqh-exact-ai",
    "title": "AI Localization Translation Agency: Gap AI Regulatory Compliance",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-regulatory-compliance.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Regulatory Compliance\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Regulatory Compliance donor inputs",
    "outputLabel": "Gap AI Regulatory Compliance AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-history-9gbft8-exact-ai",
    "title": "AI Localization Translation Agency: AI History",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIHistory.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History donor inputs",
    "outputLabel": "AI History AI response",
    "signals": [
      "client/src/pages/AIHistory.js"
    ]
  },
  {
    "id": "ai-localization-translation-agency-gap-agentic-amr2uz-exact-ai",
    "title": "AI Localization Translation Agency: Gap Agentic",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAgentic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agentic\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agentic donor inputs",
    "outputLabel": "Gap Agentic AI response",
    "signals": [
      "client/src/pages/GapAgentic.jsx"
    ]
  },
  {
    "id": "ai-localization-translation-agency-gap-ai-dialect-variant-detection-ipop2i-exact-ai",
    "title": "AI Localization Translation Agency: Gap AI Dialect Variant Detection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiDialectVariantDetection.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Dialect Variant Detection\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Dialect Variant Detection donor inputs",
    "outputLabel": "Gap AI Dialect Variant Detection AI response",
    "signals": [
      "client/src/pages/GapAiDialectVariantDetection.jsx"
    ]
  },
  {
    "id": "ai-localization-translation-agency-gap-ai-post-edit-effort-predictor-hmqdc8-exact-ai",
    "title": "AI Localization Translation Agency: Gap AI Post Edit Effort Predictor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiPostEditEffortPredictor.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Post Edit Effort Predictor\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Post Edit Effort Predictor donor inputs",
    "outputLabel": "Gap AI Post Edit Effort Predictor AI response",
    "signals": [
      "client/src/pages/GapAiPostEditEffortPredictor.jsx"
    ]
  },
  {
    "id": "ai-localization-translation-agency-gap-ai-realtime-tm-leverage-1sg4xp-exact-ai",
    "title": "AI Localization Translation Agency: Gap AI Realtime Tm Leverage",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiRealtimeTmLeverage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Realtime Tm Leverage\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Realtime Tm Leverage donor inputs",
    "outputLabel": "Gap AI Realtime Tm Leverage AI response",
    "signals": [
      "client/src/pages/GapAiRealtimeTmLeverage.jsx"
    ]
  },
  {
    "id": "ai-localization-translation-agency-gap-ai-regulatory-compliance-16es81-exact-ai",
    "title": "AI Localization Translation Agency: Gap AI Regulatory Compliance",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiRegulatoryCompliance.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Regulatory Compliance\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Regulatory Compliance donor inputs",
    "outputLabel": "Gap AI Regulatory Compliance AI response",
    "signals": [
      "client/src/pages/GapAiRegulatoryCompliance.jsx"
    ]
  },
  {
    "id": "ai-localization-translation-agency-ai-samples-ddba3-exact-ai",
    "title": "AI Localization Translation Agency: AI Samples",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/aiSamples.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Samples\" from AILocalizationTranslationAgency. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Samples donor inputs",
    "outputLabel": "AI Samples AI response",
    "signals": [
      "client/src/pages/aiSamples.js"
    ]
  },
  {
    "id": "ai-nutrition-dietitian-assistant-source-workflow",
    "title": "AI Nutrition Dietitian Assistant Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AINutritionDietitianAssistant.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AINutritionDietitianAssistant to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Nutrition Dietitian Assistant source context",
    "outputLabel": "AI Nutrition Dietitian Assistant source analysis",
    "signals": [
      "server/ai",
      "client/src/pages/AIAdvancedPage",
      "client/src/pages/AICenterPage",
      "client/src/pages/AIHistoryPage",
      "client/src/pages/AIPredictivePage",
      "client/src/components/AIOutput",
      "client/src/components/DetailModal"
    ]
  },
  {
    "id": "ai-nutrition-dietitian-assistant-ai-tools",
    "title": "AI Nutrition Dietitian Assistant AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AINutritionDietitianAssistant.",
    "defaultPrompt": "Review AINutritionDietitianAssistant AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Nutrition Dietitian Assistant AI prompt or tool context",
    "outputLabel": "AI Nutrition Dietitian Assistant AI tool response",
    "signals": [
      "server/ai.js",
      "client/src/pages/AIAdvancedPage.js",
      "client/src/pages/AICenterPage.js",
      "client/src/pages/AIHistoryPage.js",
      "client/src/pages/AIPredictivePage.js",
      "client/src/components/AIOutput.js",
      "client/src/components/DetailModal.js"
    ]
  },
  {
    "id": "ai-nutrition-dietitian-assistant-ai-advanced-page-15kg05-exact-ai",
    "title": "AI Nutrition Dietitian Assistant: AI Advanced Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIAdvancedPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Advanced Page\" from AINutritionDietitianAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Advanced Page donor inputs",
    "outputLabel": "AI Advanced Page AI response",
    "signals": [
      "client/src/pages/AIAdvancedPage.js"
    ]
  },
  {
    "id": "ai-nutrition-dietitian-assistant-ai-center-page-lgigm-exact-ai",
    "title": "AI Nutrition Dietitian Assistant: AI Center Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AICenterPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center Page\" from AINutritionDietitianAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center Page donor inputs",
    "outputLabel": "AI Center Page AI response",
    "signals": [
      "client/src/pages/AICenterPage.js"
    ]
  },
  {
    "id": "ai-nutrition-dietitian-assistant-ai-history-page-z2n6bj-exact-ai",
    "title": "AI Nutrition Dietitian Assistant: AI History Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIHistoryPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History Page\" from AINutritionDietitianAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History Page donor inputs",
    "outputLabel": "AI History Page AI response",
    "signals": [
      "Limit",
      "Page",
      "Total",
      "Total Pages"
    ]
  },
  {
    "id": "ai-nutrition-dietitian-assistant-ai-predictive-page-ua21ve-exact-ai",
    "title": "AI Nutrition Dietitian Assistant: AI Predictive Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIPredictivePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Predictive Page\" from AINutritionDietitianAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Predictive Page donor inputs",
    "outputLabel": "AI Predictive Page AI response",
    "signals": [
      "Activity Level",
      "Calories Target",
      "Current Weight Kg",
      "Days",
      "Diet Summary",
      "Dietary Preferences",
      "Fitness Goal",
      "Food Name"
    ]
  },
  {
    "id": "ai-parking-management-platform-source-workflow",
    "title": "AI Parking Management Platform Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIParkingManagementPlatform.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIParkingManagementPlatform to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Parking Management Platform source context",
    "outputLabel": "AI Parking Management Platform source analysis",
    "signals": [
      "server/services/openrouter",
      "server/routes/ai",
      "server/routes/gapFeat_maintenance_without_asset",
      "server/routes/maintenance",
      "client/src/pages/AIHistory",
      "client/src/pages/AIPredictive",
      "client/src/pages/GapMaintenanceWithoutAssetPage",
      "client/src/pages/Maintenance"
    ]
  },
  {
    "id": "ai-parking-management-platform-ai-tools",
    "title": "AI Parking Management Platform AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIParkingManagementPlatform.",
    "defaultPrompt": "Review AIParkingManagementPlatform AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Parking Management Platform AI prompt or tool context",
    "outputLabel": "AI Parking Management Platform AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/routes/ai.js",
      "server/routes/gapFeat_maintenance_without_asset.js",
      "server/routes/maintenance.js",
      "client/src/pages/AIHistory.js",
      "client/src/pages/AIPredictive.js",
      "client/src/pages/GapMaintenanceWithoutAssetPage.js",
      "client/src/pages/Maintenance.js"
    ]
  },
  {
    "id": "ai-parking-management-platform-ai-j615h1-exact-ai",
    "title": "AI Parking Management Platform: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIParkingManagementPlatform. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Condition Notes",
      "Context",
      "Facility Id",
      "Photos",
      "Plate Number",
      "Time Window Hours",
      "Violation Id"
    ]
  },
  {
    "id": "ai-parking-management-platform-ai-history-9gbft8-exact-ai",
    "title": "AI Parking Management Platform: AI History",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIHistory.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History\" from AIParkingManagementPlatform. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History donor inputs",
    "outputLabel": "AI History AI response",
    "signals": [
      "client/src/pages/AIHistory.js"
    ]
  },
  {
    "id": "ai-parking-management-platform-ai-predictive-jqtthl-exact-ai",
    "title": "AI Parking Management Platform: AI Predictive",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIPredictive.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Predictive\" from AIParkingManagementPlatform. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Predictive donor inputs",
    "outputLabel": "AI Predictive AI response",
    "signals": [
      "Asset Type",
      "Camera Id",
      "Compliance Areas",
      "Facility Id",
      "Failure History",
      "Incident Count",
      "Install Date",
      "Last Audit Date"
    ]
  },
  {
    "id": "ai-sales-training-simulator-source-workflow",
    "title": "AI Sales Training Simulator Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISalesTrainingSimulator.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISalesTrainingSimulator to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Sales Training Simulator source context",
    "outputLabel": "AI Sales Training Simulator source analysis",
    "signals": [
      "server/services/openrouter",
      "server/routes/ai-deal-scorer",
      "server/routes/ai",
      "client/src/components/AIPanel",
      "client/src/components/AIResponse",
      "client/src/components/DetailPanel"
    ]
  },
  {
    "id": "ai-sales-training-simulator-ai-tools",
    "title": "AI Sales Training Simulator AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISalesTrainingSimulator.",
    "defaultPrompt": "Review AISalesTrainingSimulator AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Sales Training Simulator AI prompt or tool context",
    "outputLabel": "AI Sales Training Simulator AI tool response",
    "signals": [
      "server/services/openrouter.js",
      "server/routes/ai-deal-scorer.js",
      "server/routes/ai.js",
      "client/src/components/AIPanel.js",
      "client/src/components/AIResponse.js",
      "client/src/components/DetailPanel.js"
    ]
  },
  {
    "id": "ai-sales-training-simulator-ai-deal-scorer-16mz5c-exact-ai",
    "title": "AI Sales Training Simulator: AI Deal Scorer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-deal-scorer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Deal Scorer\" from AISalesTrainingSimulator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Deal Scorer donor inputs",
    "outputLabel": "AI Deal Scorer AI response",
    "signals": [
      "server/routes/ai-deal-scorer.js"
    ]
  },
  {
    "id": "ai-sales-training-simulator-ai-j615h1-exact-ai",
    "title": "AI Sales Training Simulator: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AISalesTrainingSimulator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Buyer Persona",
      "Challenges",
      "Competitor",
      "Competitor Name",
      "Context",
      "Deal",
      "Deal Context",
      "Deal Info"
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-source-workflow",
    "title": "AI Self Storage Facility Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISelfStorageFacilityManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISelfStorageFacilityManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Self Storage Facility Manager source context",
    "outputLabel": "AI Self Storage Facility Manager source analysis",
    "signals": [
      "server/routes/ai-churn-prevention",
      "server/routes/ai",
      "server/routes/gap-no-demand-forecasting-ai",
      "server/routes/maintenance",
      "server/routes/waitlist",
      "client/src/pages/CfPredictiveMaintenanceScheduling",
      "client/src/pages/GapNoDemandForecastingAi",
      "client/src/pages/MaintenancePage"
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-ai-tools",
    "title": "AI Self Storage Facility Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISelfStorageFacilityManager.",
    "defaultPrompt": "Review AISelfStorageFacilityManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Self Storage Facility Manager AI prompt or tool context",
    "outputLabel": "AI Self Storage Facility Manager AI tool response",
    "signals": [
      "server/routes/ai-churn-prevention.js",
      "server/routes/ai.js",
      "server/routes/gap-no-demand-forecasting-ai.js",
      "server/routes/maintenance.js",
      "server/routes/waitlist.js",
      "client/src/pages/CfPredictiveMaintenanceScheduling.jsx",
      "client/src/pages/GapNoDemandForecastingAi.jsx",
      "client/src/pages/MaintenancePage.js"
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-ai-churn-prevention-hns0dt-exact-ai",
    "title": "AI Self Storage Facility Manager: AI Churn Prevention",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-churn-prevention.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Churn Prevention\" from AISelfStorageFacilityManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Churn Prevention donor inputs",
    "outputLabel": "AI Churn Prevention AI response",
    "signals": [
      "server/routes/ai-churn-prevention.js"
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-ai-j615h1-exact-ai",
    "title": "AI Self Storage Facility Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AISelfStorageFacilityManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Budget Max",
      "Focus Zones",
      "Hours Back",
      "Include Resolved",
      "Item Categories",
      "Items Description",
      "Lifestyle Notes"
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-gap-no-demand-forecasting-ai-12skpy-exact-ai",
    "title": "AI Self Storage Facility Manager: Gap No Demand Forecasting AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-demand-forecasting-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Demand Forecasting AI\" from AISelfStorageFacilityManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Demand Forecasting AI donor inputs",
    "outputLabel": "Gap No Demand Forecasting AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-waitlist-1tvkq6-exact-ai",
    "title": "AI Self Storage Facility Manager: Waitlist",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/waitlist.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Waitlist\" from AISelfStorageFacilityManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Waitlist donor inputs",
    "outputLabel": "Waitlist AI response",
    "signals": [
      "Climate Controlled",
      "Desired Size Sqft",
      "Desired Unit Type",
      "Email",
      "First Name",
      "Last Name",
      "Max Budget",
      "Notes"
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-gap-no-demand-forecasting-ai-605h4t-exact-ai",
    "title": "AI Self Storage Facility Manager: Gap No Demand Forecasting AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoDemandForecastingAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Demand Forecasting AI\" from AISelfStorageFacilityManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Demand Forecasting AI donor inputs",
    "outputLabel": "Gap No Demand Forecasting AI AI response",
    "signals": [
      "client/src/pages/GapNoDemandForecastingAi.jsx"
    ]
  },
  {
    "id": "ai-self-storage-facility-manager-waitlist-page-84my2k-exact-ai",
    "title": "AI Self Storage Facility Manager: Waitlist Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/WaitlistPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Waitlist Page\" from AISelfStorageFacilityManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Waitlist Page donor inputs",
    "outputLabel": "Waitlist Page AI response",
    "signals": [
      "client/src/pages/WaitlistPage.js"
    ]
  },
  {
    "id": "aism-schatbot-source-workflow",
    "title": "AISM Schatbot Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISMSchatbot.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISMSchatbot to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AISM Schatbot source context",
    "outputLabel": "AISM Schatbot source analysis",
    "signals": [
      "server/routes/ai-benefits-discovery",
      "server/routes/ai",
      "server/routes/gap-no-incomeverificationguide-doc-checklist-ai",
      "server/routes/gap-no-multilingual-translation-ai",
      "client/src/pages/AIAssistant",
      "client/src/pages/GapNoIncomeverificationguideDocChecklistAi",
      "client/src/pages/GapNoMultilingualTranslationAi",
      "client/src/components/AIResponseDisplay"
    ]
  },
  {
    "id": "aism-schatbot-ai-tools",
    "title": "AISM Schatbot AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISMSchatbot.",
    "defaultPrompt": "Review AISMSchatbot AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AISM Schatbot AI prompt or tool context",
    "outputLabel": "AISM Schatbot AI tool response",
    "signals": [
      "server/routes/ai-benefits-discovery.js",
      "server/routes/ai.js",
      "server/routes/gap-no-incomeverificationguide-doc-checklist-ai.js",
      "server/routes/gap-no-multilingual-translation-ai.js",
      "client/src/pages/AIAssistant.js",
      "client/src/pages/GapNoIncomeverificationguideDocChecklistAi.jsx",
      "client/src/pages/GapNoMultilingualTranslationAi.jsx",
      "client/src/components/AIResponseDisplay.js"
    ]
  },
  {
    "id": "aism-schatbot-ai-benefits-discovery-1b3yhi-exact-ai",
    "title": "AISM Schatbot: AI Benefits Discovery",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-benefits-discovery.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Benefits Discovery\" from AISMSchatbot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Benefits Discovery donor inputs",
    "outputLabel": "AI Benefits Discovery AI response",
    "signals": [
      "server/routes/ai-benefits-discovery.js"
    ]
  },
  {
    "id": "aism-schatbot-ai-j615h1-exact-ai",
    "title": "AISM Schatbot: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AISMSchatbot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Applicant Info",
      "Assets",
      "Case Details",
      "Change Type",
      "Child Care",
      "Context",
      "Conversation History",
      "Current Program"
    ]
  },
  {
    "id": "aism-schatbot-gap-no-incomeverificationguide-doc-checklist-ai-1ajjnk-exact-ai",
    "title": "AISM Schatbot: Gap No Incomeverificationguide Doc Checklist AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-incomeverificationguide-doc-checklist-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Incomeverificationguide Doc Checklist AI\" from AISMSchatbot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Incomeverificationguide Doc Checklist AI donor inputs",
    "outputLabel": "Gap No Incomeverificationguide Doc Checklist AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "aism-schatbot-gap-no-multilingual-translation-ai-4pq3tg-exact-ai",
    "title": "AISM Schatbot: Gap No Multilingual Translation AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-multilingual-translation-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Multilingual Translation AI\" from AISMSchatbot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Multilingual Translation AI donor inputs",
    "outputLabel": "Gap No Multilingual Translation AI AI response",
    "signals": [
      "Input"
    ]
  },
  {
    "id": "aism-schatbot-ai-assistant-1ov046-exact-ai",
    "title": "AISM Schatbot: AI Assistant",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIAssistant.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Assistant\" from AISMSchatbot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Assistant donor inputs",
    "outputLabel": "AI Assistant AI response",
    "signals": [
      "client/src/pages/AIAssistant.js"
    ]
  },
  {
    "id": "aism-schatbot-gap-no-incomeverificationguide-doc-checklist-ai-anniz1-exact-ai",
    "title": "AISM Schatbot: Gap No Incomeverificationguide Doc Checklist AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoIncomeverificationguideDocChecklistAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Incomeverificationguide Doc Checklist AI\" from AISMSchatbot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Incomeverificationguide Doc Checklist AI donor inputs",
    "outputLabel": "Gap No Incomeverificationguide Doc Checklist AI AI response",
    "signals": [
      "client/src/pages/GapNoIncomeverificationguideDocChecklistAi.jsx"
    ]
  },
  {
    "id": "aism-schatbot-gap-no-multilingual-translation-ai-14hm6g-exact-ai",
    "title": "AISM Schatbot: Gap No Multilingual Translation AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoMultilingualTranslationAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Multilingual Translation AI\" from AISMSchatbot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Multilingual Translation AI donor inputs",
    "outputLabel": "Gap No Multilingual Translation AI AI response",
    "signals": [
      "client/src/pages/GapNoMultilingualTranslationAi.jsx"
    ]
  },
  {
    "id": "ai-social-proof-generator-source-workflow",
    "title": "AI Social Proof Generator Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AISocialProofGenerator.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AISocialProofGenerator to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Social Proof Generator source context",
    "outputLabel": "AI Social Proof Generator source analysis",
    "signals": [
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/CfAuthenticityScoringToDetectAiGeneratedVs",
      "frontend/src/pages/GapNoAiDrivenCustomerSegmentationForTargeted",
      "frontend/src/pages/OutreachCampaigns",
      "frontend/src/components/AIResultDisplay",
      "frontend/src/components/DetailModal",
      "backend/utils/emailService"
    ]
  },
  {
    "id": "ai-social-proof-generator-ai-tools",
    "title": "AI Social Proof Generator AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AISocialProofGenerator.",
    "defaultPrompt": "Review AISocialProofGenerator AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Social Proof Generator AI prompt or tool context",
    "outputLabel": "AI Social Proof Generator AI tool response",
    "signals": [
      "frontend/tailwind.config.js",
      "frontend/src/main.jsx",
      "frontend/src/pages/CfAuthenticityScoringToDetectAiGeneratedVs.jsx",
      "frontend/src/pages/GapNoAiDrivenCustomerSegmentationForTargeted.jsx",
      "frontend/src/pages/OutreachCampaigns.jsx",
      "frontend/src/components/AIResultDisplay.jsx",
      "frontend/src/components/DetailModal.jsx",
      "backend/utils/emailService.js"
    ]
  },
  {
    "id": "ai-social-proof-generator-cf-authenticity-scoring-to-detect-ai-generated-vs-17i5z9-exact-ai",
    "title": "AI Social Proof Generator: Cf Authenticity Scoring To Detect AI Generated Vs",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfAuthenticityScoringToDetectAiGeneratedVs.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Authenticity Scoring To Detect AI Generated Vs\" from AISocialProofGenerator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Authenticity Scoring To Detect AI Generated Vs donor inputs",
    "outputLabel": "Cf Authenticity Scoring To Detect AI Generated Vs AI response",
    "signals": [
      "frontend/src/pages/CfAuthenticityScoringToDetectAiGeneratedVs.jsx"
    ]
  },
  {
    "id": "ai-social-proof-generator-gap-no-ai-driven-customer-segmentation-for-targeted-1gqvw9-exact-ai",
    "title": "AI Social Proof Generator: Gap No AI Driven Customer Segmentation For Targeted",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoAiDrivenCustomerSegmentationForTargeted.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Driven Customer Segmentation For Targeted\" from AISocialProofGenerator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Driven Customer Segmentation For Targeted donor inputs",
    "outputLabel": "Gap No AI Driven Customer Segmentation For Targeted AI response",
    "signals": [
      "frontend/src/pages/GapNoAiDrivenCustomerSegmentationForTargeted.jsx"
    ]
  },
  {
    "id": "ai-social-proof-generator-outreach-campaigns-1dysid-exact-ai",
    "title": "AI Social Proof Generator: Outreach Campaigns",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/OutreachCampaigns.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Outreach Campaigns\" from AISocialProofGenerator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Outreach Campaigns donor inputs",
    "outputLabel": "Outreach Campaigns AI response",
    "signals": [
      "frontend/src/pages/OutreachCampaigns.jsx"
    ]
  },
  {
    "id": "ai-social-proof-generator-ai-5cuwes-exact-ai",
    "title": "AI Social Proof Generator: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AISocialProofGenerator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Author Context",
      "Challenge",
      "Chart Type",
      "Company",
      "Content",
      "Context",
      "Criteria",
      "Customer Name"
    ]
  },
  {
    "id": "ai-social-proof-generator-gap-no-ai-driven-customer-segmentation-for-targeted-testimonial-selection-86rk7b-exact-ai",
    "title": "AI Social Proof Generator: Gap No AI Driven Customer Segmentation For Targeted Testimonial Selection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gapNoAiDrivenCustomerSegmentationForTargetedTestimonialSelection.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Driven Customer Segmentation For Targeted Testimonial Selection\" from AISocialProofGenerator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Driven Customer Segmentation For Targeted Testimonial Selection donor inputs",
    "outputLabel": "Gap No AI Driven Customer Segmentation For Targeted Testimonial Selection AI response",
    "signals": [
      "backend/routes/gapNoAiDrivenCustomerSegmentationForTargetedTestimonialSelection.js"
    ]
  },
  {
    "id": "ai-tattoo-body-art-studio-manager-source-workflow",
    "title": "AI Tattoo Body Art Studio Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AITattooBodyArtStudioManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AITattooBodyArtStudioManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Tattoo Body Art Studio Manager source context",
    "outputLabel": "AI Tattoo Body Art Studio Manager source analysis",
    "signals": [
      "server/routes/ai",
      "server/routes/gapNoAiDrivenPortfolioStyleClassification",
      "server/routes/gapNoAiInfectionRiskScoring",
      "server/routes/gapNoSmsEmailReminderInfrastructure",
      "client/src/pages/AIPage",
      "client/src/pages/GapNoAiDrivenPortfolioStyleClassification",
      "client/src/pages/GapNoAiInfectionRiskScoring",
      "client/src/pages/GapNoSmsEmailReminderInfrastructure"
    ]
  },
  {
    "id": "ai-tattoo-body-art-studio-manager-ai-tools",
    "title": "AI Tattoo Body Art Studio Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AITattooBodyArtStudioManager.",
    "defaultPrompt": "Review AITattooBodyArtStudioManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Tattoo Body Art Studio Manager AI prompt or tool context",
    "outputLabel": "AI Tattoo Body Art Studio Manager AI tool response",
    "signals": [
      "server/routes/ai.js",
      "server/routes/gapNoAiDrivenPortfolioStyleClassification.js",
      "server/routes/gapNoAiInfectionRiskScoring.js",
      "server/routes/gapNoSmsEmailReminderInfrastructure.js",
      "client/src/pages/AIPage.js",
      "client/src/pages/GapNoAiDrivenPortfolioStyleClassification.jsx",
      "client/src/pages/GapNoAiInfectionRiskScoring.jsx",
      "client/src/pages/GapNoSmsEmailReminderInfrastructure.jsx"
    ]
  },
  {
    "id": "ai-tattoo-body-art-studio-manager-ai-j615h1-exact-ai",
    "title": "AI Tattoo Body Art Studio Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AITattooBodyArtStudioManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Aftercare Compliance",
      "Age",
      "Allergies",
      "Appointment Date",
      "Appointment Time",
      "Artist Id",
      "Artist Name",
      "Artist Id"
    ]
  },
  {
    "id": "ai-tattoo-body-art-studio-manager-gap-no-ai-driven-portfolio-style-classification-1m2db7-exact-ai",
    "title": "AI Tattoo Body Art Studio Manager: Gap No AI Driven Portfolio Style Classification",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gapNoAiDrivenPortfolioStyleClassification.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Driven Portfolio Style Classification\" from AITattooBodyArtStudioManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Driven Portfolio Style Classification donor inputs",
    "outputLabel": "Gap No AI Driven Portfolio Style Classification AI response",
    "signals": [
      "server/routes/gapNoAiDrivenPortfolioStyleClassification.js"
    ]
  },
  {
    "id": "ai-tattoo-body-art-studio-manager-gap-no-ai-infection-risk-scoring-v6i7mf-exact-ai",
    "title": "AI Tattoo Body Art Studio Manager: Gap No AI Infection Risk Scoring",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gapNoAiInfectionRiskScoring.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Infection Risk Scoring\" from AITattooBodyArtStudioManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Infection Risk Scoring donor inputs",
    "outputLabel": "Gap No AI Infection Risk Scoring AI response",
    "signals": [
      "server/routes/gapNoAiInfectionRiskScoring.js"
    ]
  },
  {
    "id": "ai-tattoo-body-art-studio-manager-gap-no-sms-email-reminder-infrastructure-ju9yxu-exact-ai",
    "title": "AI Tattoo Body Art Studio Manager: Gap No Sms Email Reminder Infrastructure",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gapNoSmsEmailReminderInfrastructure.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Sms Email Reminder Infrastructure\" from AITattooBodyArtStudioManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Sms Email Reminder Infrastructure donor inputs",
    "outputLabel": "Gap No Sms Email Reminder Infrastructure AI response",
    "signals": [
      "server/routes/gapNoSmsEmailReminderInfrastructure.js"
    ]
  },
  {
    "id": "ai-tattoo-body-art-studio-manager-gap-no-ai-driven-portfolio-style-classification-1mk033-exact-ai",
    "title": "AI Tattoo Body Art Studio Manager: Gap No AI Driven Portfolio Style Classification",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoAiDrivenPortfolioStyleClassification.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Driven Portfolio Style Classification\" from AITattooBodyArtStudioManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Driven Portfolio Style Classification donor inputs",
    "outputLabel": "Gap No AI Driven Portfolio Style Classification AI response",
    "signals": [
      "client/src/pages/GapNoAiDrivenPortfolioStyleClassification.jsx"
    ]
  },
  {
    "id": "ai-tattoo-body-art-studio-manager-gap-no-ai-infection-risk-scoring-1tpeg4-exact-ai",
    "title": "AI Tattoo Body Art Studio Manager: Gap No AI Infection Risk Scoring",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoAiInfectionRiskScoring.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Infection Risk Scoring\" from AITattooBodyArtStudioManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Infection Risk Scoring donor inputs",
    "outputLabel": "Gap No AI Infection Risk Scoring AI response",
    "signals": [
      "client/src/pages/GapNoAiInfectionRiskScoring.jsx"
    ]
  },
  {
    "id": "ai-tattoo-body-art-studio-manager-gap-no-sms-email-reminder-infrastructure-1vaq4s-exact-ai",
    "title": "AI Tattoo Body Art Studio Manager: Gap No Sms Email Reminder Infrastructure",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoSmsEmailReminderInfrastructure.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Sms Email Reminder Infrastructure\" from AITattooBodyArtStudioManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Sms Email Reminder Infrastructure donor inputs",
    "outputLabel": "Gap No Sms Email Reminder Infrastructure AI response",
    "signals": [
      "client/src/pages/GapNoSmsEmailReminderInfrastructure.jsx"
    ]
  },
  {
    "id": "cash-flow-source-workflow",
    "title": "Cash Flow Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from cash_flow.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from cash_flow to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Cash Flow source context",
    "outputLabel": "Cash Flow source analysis",
    "signals": [
      "src/services/OpenRouterService",
      ".aider.chat.history",
      ".aider.model.settings.yml",
      "tailwind.config",
      "src/services/aiCashFlowService",
      "src/services/aiColumnMappingService",
      "src/pages/Batch09/AiBillPayAgentGapAi",
      "src/pages/Batch09/AiInvoiceOcrGapAi"
    ]
  },
  {
    "id": "cash-flow-ai-tools",
    "title": "Cash Flow AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from cash_flow.",
    "defaultPrompt": "Review cash_flow AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Cash Flow AI prompt or tool context",
    "outputLabel": "Cash Flow AI tool response",
    "signals": [
      "src/services/OpenRouterService.ts",
      ".aider.chat.history.md",
      ".aider.model.settings.yml",
      "tailwind.config.js",
      "src/services/aiCashFlowService.ts",
      "src/services/aiColumnMappingService.ts",
      "src/pages/Batch09/AiBillPayAgentGapAi.jsx",
      "src/pages/Batch09/AiInvoiceOcrGapAi.jsx"
    ]
  },
  {
    "id": "cash-flow-ai-bill-pay-agent-gap-ai-1asvlp-exact-ai",
    "title": "Cash Flow: AI Bill Pay Agent Gap AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/Batch09/AiBillPayAgentGapAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Bill Pay Agent Gap AI\" from cash_flow. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Bill Pay Agent Gap AI donor inputs",
    "outputLabel": "AI Bill Pay Agent Gap AI AI response",
    "signals": [
      "src/pages/Batch09/AiBillPayAgentGapAi.jsx"
    ]
  },
  {
    "id": "cash-flow-ai-invoice-ocr-gap-ai-v2fn0r-exact-ai",
    "title": "Cash Flow: AI Invoice Ocr Gap AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/Batch09/AiInvoiceOcrGapAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Invoice Ocr Gap AI\" from cash_flow. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Invoice Ocr Gap AI donor inputs",
    "outputLabel": "AI Invoice Ocr Gap AI AI response",
    "signals": [
      "src/pages/Batch09/AiInvoiceOcrGapAi.jsx"
    ]
  },
  {
    "id": "cash-flow-ai-runway-scenario-planner-gap-ai-18qsca-exact-ai",
    "title": "Cash Flow: AI Runway Scenario Planner Gap AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/Batch09/AiRunwayScenarioPlannerGapAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Runway Scenario Planner Gap AI\" from cash_flow. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Runway Scenario Planner Gap AI donor inputs",
    "outputLabel": "AI Runway Scenario Planner Gap AI AI response",
    "signals": [
      "src/pages/Batch09/AiRunwayScenarioPlannerGapAi.jsx"
    ]
  },
  {
    "id": "cash-flow-bank-feed-integration-plaid-gap-non-840lk1-exact-ai",
    "title": "Cash Flow: Bank Feed Integration Plaid Gap Non",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/pages/Batch09/BankFeedIntegrationPlaidGapNon.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Bank Feed Integration Plaid Gap Non\" from cash_flow. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Bank Feed Integration Plaid Gap Non donor inputs",
    "outputLabel": "Bank Feed Integration Plaid Gap Non AI response",
    "signals": [
      "src/pages/Batch09/BankFeedIntegrationPlaidGapNon.jsx"
    ]
  },
  {
    "id": "cash-flow-ai-z7i39h-exact-ai",
    "title": "Cash Flow: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/api/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from cash_flow. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Baseline Window = 30",
      "Currency = 'USD'",
      "Horizon Days = 30",
      "Transactions = []"
    ]
  },
  {
    "id": "cash-flow-batch09-gap-ai-dspj3a-exact-ai",
    "title": "Cash Flow: Batch09 Gap AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/api/routes/batch09GapAi.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Batch09 Gap AI\" from cash_flow. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Batch09 Gap AI donor inputs",
    "outputLabel": "Batch09 Gap AI AI response",
    "signals": [
      "src/api/routes/batch09GapAi.js"
    ]
  },
  {
    "id": "cash-flow-batch09-gap-nonai-1kf3vj-exact-ai",
    "title": "Cash Flow: Batch09 Gap Nonai",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/api/routes/batch09GapNonai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Batch09 Gap Nonai\" from cash_flow. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Batch09 Gap Nonai donor inputs",
    "outputLabel": "Batch09 Gap Nonai AI response",
    "signals": [
      "src/api/routes/batch09GapNonai.js"
    ]
  },
  {
    "id": "salesforce-source-workflow",
    "title": "Salesforce Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from salesforce.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from salesforce to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Salesforce source context",
    "outputLabel": "Salesforce source analysis",
    "signals": [
      "/workflows",
      "/work-types",
      "/work-orders",
      "/work-order-line-items",
      "/web-forms",
      "/verify-email",
      "/validation-rules",
      "/time-sheets"
    ]
  },
  {
    "id": "salesforce-ai-tools",
    "title": "Salesforce AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from salesforce.",
    "defaultPrompt": "Review salesforce AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Salesforce AI prompt or tool context",
    "outputLabel": "Salesforce AI tool response",
    "signals": [
      "lib/openRouterClient.ts",
      "lib/openrouter.ts",
      "lib/promptVersions.ts",
      "docs/prompt-beauty-wellness-ai.md",
      "docs/prompt-financial-services-ai.md",
      "docs/prompt-healthcare-practice-ai.md",
      "docs/prompt-home-services-trades-ai.md",
      "docs/prompt-small-law-firm-ai.md"
    ]
  },
  {
    "id": "salesforce-route-1hvux5-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/_prompts/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/_prompts/route.ts"
    ]
  },
  {
    "id": "salesforce-page-1edewg-exact-ai",
    "title": "Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/verify-email/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "app/verify-email/page.tsx"
    ]
  },
  {
    "id": "salesforce-page-177n2q-exact-ai",
    "title": "Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/mass-email/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Body",
      "Completed Jobs",
      "Draft Jobs",
      "Name",
      "Recipient Type",
      "Scheduled At",
      "Scheduled Jobs",
      "Subject"
    ]
  },
  {
    "id": "salesforce-page-10bj9s-exact-ai",
    "title": "Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/maintenance-plans/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "app/maintenance-plans/page.tsx"
    ]
  },
  {
    "id": "salesforce-page-l4zrqk-exact-ai",
    "title": "Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/email-center/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Bcc Address",
      "Body",
      "Campaign Id",
      "Cc Address",
      "Status",
      "Subject",
      "Template Id",
      "To"
    ]
  },
  {
    "id": "salesforce-page-1a5zyv-exact-ai",
    "title": "Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/campaigns/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Channel",
      "Channels",
      "Client Id",
      "Description",
      "End Date",
      "Geo",
      "Icp",
      "Industry"
    ]
  },
  {
    "id": "salesforce-page-1vpsek-exact-ai",
    "title": "Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/campaigns/[id]/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "app/campaigns/[id]/page.tsx"
    ]
  },
  {
    "id": "salesforce-page-i69e2o-exact-ai",
    "title": "Salesforce: Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/campaign-influence/page.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Page\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Page donor inputs",
    "outputLabel": "Page AI response",
    "signals": [
      "Influence Percent",
      "Is Primary"
    ]
  },
  {
    "id": "salesforce-route-1xoo14-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/sync-settings/email/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "...Update Data",
      "Action",
      "Email",
      "Provider",
      "Sync Direction",
      "Sync Folders"
    ]
  },
  {
    "id": "salesforce-route-sp599i-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/seed-emails/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/seed-emails/route.ts"
    ]
  },
  {
    "id": "salesforce-route-1t1g5b-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/scheduling/available-slots/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Date",
      "Skill Requirements",
      "Territory Id",
      "Work Order Id"
    ]
  },
  {
    "id": "salesforce-route-18ftsl-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/scheduling/ai-optimize/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Date",
      "Territory Id"
    ]
  },
  {
    "id": "salesforce-route-1f21sd-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/scheduling/ai-dispatch/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Work Order Id"
    ]
  },
  {
    "id": "salesforce-route-11u3b0-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/scheduling/ai-capacity/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Date Range",
      "Territory Id"
    ]
  },
  {
    "id": "salesforce-route-1xjo51-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/mass-email/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Action",
      "Body",
      "Filter Criteria",
      "Job Id",
      "Name",
      "Recipient Ids",
      "Recipient Type",
      "Scheduled At"
    ]
  },
  {
    "id": "salesforce-route-nn6fca-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/mass-email/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/mass-email/[id]/route.ts"
    ]
  },
  {
    "id": "salesforce-route-udg2ab-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/maintenance-plans/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/maintenance-plans/route.ts"
    ]
  },
  {
    "id": "salesforce-route-1grz9h-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/maintenance-plans/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/maintenance-plans/[id]/route.ts"
    ]
  },
  {
    "id": "salesforce-route-ziuwak-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/emails/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Bcc Address",
      "Body",
      "Cc Address",
      "Contact Id",
      "Opportunity Id",
      "Scheduled At",
      "Subject",
      "Template Id"
    ]
  },
  {
    "id": "salesforce-route-ywhxpr-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/emails/send/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/emails/send/route.ts"
    ]
  },
  {
    "id": "salesforce-route-curorc-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/emails/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Bcc Address",
      "Body",
      "Bounced At",
      "Cc Address",
      "Clicked At",
      "Opened At",
      "Scheduled At",
      "Sent At"
    ]
  },
  {
    "id": "salesforce-route-12dtan-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/email-templates/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Body",
      "Category",
      "Is Active",
      "Name",
      "Subject"
    ]
  },
  {
    "id": "salesforce-route-1i30jm-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/email-templates/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/email-templates/[id]/route.ts"
    ]
  },
  {
    "id": "salesforce-route-ns7qzi-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/cron/send-scheduled-emails/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/cron/send-scheduled-emails/route.ts"
    ]
  },
  {
    "id": "salesforce-route-9t9m3z-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/cpq/ai-suggest/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Budget",
      "Lead Id",
      "Notes",
      "Opportunity Id"
    ]
  },
  {
    "id": "salesforce-route-39uiry-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/campaigns/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Channel",
      "Client Id",
      "Description",
      "End Date",
      "Name",
      "Start Date",
      "Status",
      "Target Persona"
    ]
  },
  {
    "id": "salesforce-route-1flwzz-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/campaigns/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/campaigns/[id]/route.ts"
    ]
  },
  {
    "id": "salesforce-route-1m2qu5-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/campaign-influence/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Campaign Id",
      "Contact Id",
      "Influence Percent",
      "Is Primary",
      "Opportunity Id"
    ]
  },
  {
    "id": "salesforce-route-1od35t-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/campaign-influence/attribution/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Model",
      "Opportunity Id"
    ]
  },
  {
    "id": "salesforce-route-1k5qrt-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/auth/verify-email/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/auth/verify-email/route.ts"
    ]
  },
  {
    "id": "salesforce-route-11jhk8-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/usage/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/usage/route.ts"
    ]
  },
  {
    "id": "salesforce-route-1pjksb-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/send-time-optimization/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Audience Type",
      "Campaign Type",
      "Historical Data",
      "Timezone"
    ]
  },
  {
    "id": "salesforce-route-1e0qdo-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/search/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Query"
    ]
  },
  {
    "id": "salesforce-route-1xgpta-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/results/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/results/route.ts"
    ]
  },
  {
    "id": "salesforce-route-1aev19-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/report-summary/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Campaign Name",
      "Client Name",
      "Metrics",
      "Period End",
      "Period Start"
    ]
  },
  {
    "id": "salesforce-route-davap6-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/recommend-articles/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Category",
      "Query"
    ]
  },
  {
    "id": "salesforce-route-1245iv-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/rag/search/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Corpus"
    ]
  },
  {
    "id": "salesforce-route-13x8ym-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/predict-lead-score/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Lead Id"
    ]
  },
  {
    "id": "salesforce-route-9nyi15-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/playbook/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/playbook/route.ts"
    ]
  },
  {
    "id": "salesforce-route-1697lj-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/outreach-copy/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Campaign Brief",
      "Channel",
      "Lead Company",
      "Lead Name",
      "Lead Persona",
      "Lead Title"
    ]
  },
  {
    "id": "salesforce-route-dcgvss-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/opportunity-score/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/opportunity-score/[id]/route.ts"
    ]
  },
  {
    "id": "salesforce-route-yuq50d-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/next-best-action/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/next-best-action/route.ts"
    ]
  },
  {
    "id": "salesforce-route-4hbvs9-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/lead-score/[id]/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/lead-score/[id]/route.ts"
    ]
  },
  {
    "id": "salesforce-route-xkzqhm-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/lead-qualify/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Lead Id"
    ]
  },
  {
    "id": "salesforce-route-1s8evf-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/lead-enrich/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Company",
      "Custom Fields",
      "Full Name",
      "Linkedin Url",
      "Title",
      "Website"
    ]
  },
  {
    "id": "salesforce-route-vuvaa6-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/kpi-insights/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Campaigns",
      "Funnel Metrics"
    ]
  },
  {
    "id": "salesforce-route-1m5tr0-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/insights/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/insights/route.ts"
    ]
  },
  {
    "id": "salesforce-route-7kkgow-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/insights/[id]/dismiss/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/insights/[id]/dismiss/route.ts"
    ]
  },
  {
    "id": "salesforce-route-1ed966-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/generate-forecast/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/generate-forecast/route.ts"
    ]
  },
  {
    "id": "salesforce-route-s1qv9n-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/forecast-opportunity/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Opportunity Id"
    ]
  },
  {
    "id": "salesforce-route-1i8gao-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/forecast-ensemble/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/forecast-ensemble/route.ts"
    ]
  },
  {
    "id": "salesforce-route-cu8yme-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/field-lineage/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/field-lineage/route.ts"
    ]
  },
  {
    "id": "salesforce-route-1uuxdx-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/engagement-score/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Email Id",
      "Recipient Email",
      "Subject"
    ]
  },
  {
    "id": "salesforce-route-z3pv7z-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/embed/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/embed/route.ts"
    ]
  },
  {
    "id": "salesforce-route-l2fyq8-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/email-insights/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Context",
      "Purpose",
      "Recipient Id",
      "Recipient Type"
    ]
  },
  {
    "id": "salesforce-route-r2ghm3-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/conversation-realtime/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Call Id",
      "Opportunity Context",
      "Speaker",
      "Transcript Window"
    ]
  },
  {
    "id": "salesforce-route-xylbbl-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/conversation-insights/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Transcript"
    ]
  },
  {
    "id": "salesforce-route-6k8rs5-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/classify-case/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Description",
      "Subject"
    ]
  },
  {
    "id": "salesforce-route-1gad7w-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/chat/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Message"
    ]
  },
  {
    "id": "salesforce-route-1bh15o-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/campaign-brief/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Channels",
      "Geo",
      "Icp",
      "Industry",
      "Offer",
      "Tone"
    ]
  },
  {
    "id": "salesforce-route-8lm5z1-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/agent/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/agent/route.ts"
    ]
  },
  {
    "id": "salesforce-route-134mqi-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/activity-summary/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Activity Type",
      "Content"
    ]
  },
  {
    "id": "salesforce-route-1mi33e-exact-ai",
    "title": "Salesforce: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/activity-capture/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from salesforce. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Body",
      "From",
      "Received At",
      "Subject",
      "To"
    ]
  }
];
