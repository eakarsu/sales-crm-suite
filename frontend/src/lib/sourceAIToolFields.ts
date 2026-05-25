export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "agency-services-page-15gmoc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-bulk-email-outreach-templates/page.tsx"
    }
  ],
  "agency-services-page-8qilr6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-ai-salary-benchmark-advisor/page.tsx"
    }
  ],
  "agency-services-page-1epqm1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-ai-powered-candidate-matching-vector/page.tsx"
    }
  ],
  "agency-services-page-vpz2k5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-ai-lead-deal-conversion-prediction/page.tsx"
    }
  ],
  "agency-services-page-10blev-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-ai-job-description-generator-requisition/page.tsx"
    }
  ],
  "agency-services-page-1scdew-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-ai-interview-question-recommendation-role/page.tsx"
    }
  ],
  "agency-services-page-19y30y-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-ai-commission-anomaly-clawback-detection/page.tsx"
    }
  ],
  "agency-services-page-1g5uvz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-ai-candidate-scoring-suitability-ranking/page.tsx"
    }
  ],
  "agency-services-page-6mexj4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-agentic-interview-coordinator-that-handles/page.tsx"
    }
  ],
  "agency-services-page-1tiz1l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/page.tsx"
    }
  ],
  "agency-services-page-msxb0e-exact-ai": [
    {
      "name": "clientId",
      "label": "Campaign Name *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "name",
      "label": "Campaign Name *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "budget",
      "label": "Budget ($)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{u.name}"
      ],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "description",
      "label": "End Date",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "endDate",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "managerId",
      "label": "Manager",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{opt.label}",
        "{u.name}"
      ],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "startDate",
      "label": "Budget ($)",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "DRAFT",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    }
  ],
  "agency-services-page-f5xifd-exact-ai": [
    {
      "name": "clicks",
      "label": "Clicks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "conversions",
      "label": "Conversions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "impressions",
      "label": "Impressions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "revenue",
      "label": "Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "spend",
      "label": "Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    }
  ],
  "agency-services-page-1gt89u-exact-ai": [
    {
      "name": "name",
      "label": "Campaign Name *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Email",
        "Social Media",
        "PPC",
        "Content"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/[id]/edit/page.tsx"
    },
    {
      "name": "status",
      "label": "Status *",
      "type": "select",
      "defaultValue": "DRAFT",
      "placeholder": "",
      "options": [
        "Email",
        "Social Media",
        "PPC",
        "Content",
        "SEO",
        "Multi-Channel",
        "Draft",
        "Scheduled",
        "Active",
        "Paused",
        "Completed"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/[id]/edit/page.tsx"
    },
    {
      "name": "budget",
      "label": "Budget ($)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Scheduled",
        "Active",
        "Paused",
        "Completed"
      ],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/edit/page.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/edit/page.tsx"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/edit/page.tsx"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/edit/page.tsx"
    }
  ],
  "agency-services-page-1vebvr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/page.tsx"
    }
  ],
  "agency-services-page-1qnz1s-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    },
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    },
    {
      "name": "frequency",
      "label": "Frequency",
      "type": "text",
      "defaultValue": "MONTHLY",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "ACTIVE",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    }
  ],
  "agency-services-page-jg3kjs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/ai/page.tsx"
    }
  ],
  "agency-services-route-1k0ic5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/retainers/route.ts"
    }
  ],
  "agency-services-route-13tktz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/retainers/[id]/route.ts"
    }
  ],
  "agency-services-route-1jk7za-exact-ai": [
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/invoices/[id]/send-email/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/invoices/[id]/send-email/route.ts"
    },
    {
      "name": "to",
      "label": "To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/invoices/[id]/send-email/route.ts"
    }
  ],
  "agency-services-route-47kc42-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-bulk-email-outreach-templates/run/route.ts"
    }
  ],
  "agency-services-route-15bykf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-ai-salary-benchmark-advisor/run/route.ts"
    }
  ],
  "agency-services-route-1on0pq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-ai-lead-deal-conversion-prediction/run/route.ts"
    }
  ],
  "agency-services-route-115x5o-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-ai-job-description-generator-requisition/run/route.ts"
    }
  ],
  "agency-services-route-1w6xu8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-ai-interview-question-recommendation-role/run/route.ts"
    }
  ],
  "agency-services-route-zhk2cy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-ai-commission-anomaly-clawback-detection/run/route.ts"
    }
  ],
  "agency-services-route-m2rde4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/gap-ai-candidate-scoring-suitability-ranking/run/route.ts"
    }
  ],
  "agency-services-route-yrme6b-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/route.ts"
    }
  ],
  "agency-services-route-1xapjo-exact-ai": [
    {
      "name": "bodyTemplate",
      "label": "Body Template",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/bulk-email/route.ts"
    },
    {
      "name": "recipients",
      "label": "Recipients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/bulk-email/route.ts"
    },
    {
      "name": "subjectTemplate",
      "label": "Subject Template",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/bulk-email/route.ts"
    }
  ],
  "agency-services-route-1s9adm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/[id]/route.ts"
    }
  ],
  "agency-services-route-l0z27z-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/[id]/metrics/route.ts"
    }
  ],
  "agency-services-route-cjotr3-exact-ai": [
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    }
  ],
  "agency-services-route-rmjgp3-exact-ai": [
    {
      "name": "city",
      "label": "City",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/salary-benchmark/route.ts"
    },
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/salary-benchmark/route.ts"
    },
    {
      "name": "role",
      "label": "Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/salary-benchmark/route.ts"
    }
  ],
  "agency-services-route-5euzl4-exact-ai": [
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-parse/route.ts"
    }
  ],
  "agency-services-route-14nsjc-exact-ai": [
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-multi-format/route.ts"
    },
    {
      "name": "filename",
      "label": "Filename",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-multi-format/route.ts"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-multi-format/route.ts"
    }
  ],
  "agency-services-route-1jwxr1-exact-ai": [
    {
      "name": "candidate",
      "label": "Candidate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/placement-prediction/route.ts"
    },
    {
      "name": "client",
      "label": "Client",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/placement-prediction/route.ts"
    },
    {
      "name": "role",
      "label": "Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/placement-prediction/route.ts"
    }
  ],
  "agency-services-route-272fwa-exact-ai": [
    {
      "name": "candidates",
      "label": "Candidates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/match/route.ts"
    },
    {
      "name": "jobDescription",
      "label": "Job Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/match/route.ts"
    }
  ],
  "agency-services-route-q0qmyf-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "candidateId",
      "label": "Candidate Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "durationMinutes = 60",
      "label": "Duration Minutes = 60",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "interviewers",
      "label": "Interviewers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "interviewId",
      "label": "Interview Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "leadTimeMinutes = 60",
      "label": "Lead Time Minutes = 60",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "windowDays = 7",
      "label": "Window Days = 7",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    }
  ],
  "agency-services-route-1ein9g-exact-ai": [
    {
      "name": "getReader",
      "label": "Get Reader",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/generate/route.ts"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/generate/route.ts"
    },
    {
      "name": "tool",
      "label": "Tool",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/generate/route.ts"
    }
  ],
  "agency-services-route-oq0vq-exact-ai": [
    {
      "name": "cvs",
      "label": "Cvs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/candidate-match-vector/route.ts"
    },
    {
      "name": "jobSpec",
      "label": "Job Spec",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/candidate-match-vector/route.ts"
    },
    {
      "name": "topK = 10",
      "label": "Top K = 10",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/candidate-match-vector/route.ts"
    }
  ],
  "agency-services-route-rmbdmr-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "applicant",
      "label": "Applicant",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "job",
      "label": "Job",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    }
  ],
  "agency-services-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-bulk-email-outreach-templates/page.tsx"
    },
    {
      "name": "clientId",
      "label": "Campaign Name *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "name",
      "label": "Campaign Name *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "budget",
      "label": "Budget ($)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{u.name}"
      ],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "description",
      "label": "End Date",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "endDate",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "managerId",
      "label": "Manager",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{opt.label}",
        "{u.name}"
      ],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "startDate",
      "label": "Budget ($)",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "DRAFT",
      "placeholder": "",
      "options": [
        "Email",
        "Social Media",
        "PPC",
        "Content",
        "SEO",
        "Multi-Channel",
        "Draft",
        "Scheduled",
        "Active",
        "Paused",
        "Completed"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "clicks",
      "label": "Clicks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "conversions",
      "label": "Conversions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "impressions",
      "label": "Impressions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "revenue",
      "label": "Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "spend",
      "label": "Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    },
    {
      "name": "frequency",
      "label": "Frequency",
      "type": "text",
      "defaultValue": "MONTHLY",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/invoices/[id]/send-email/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/invoices/[id]/send-email/route.ts"
    },
    {
      "name": "to",
      "label": "To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/invoices/[id]/send-email/route.ts"
    },
    {
      "name": "bodyTemplate",
      "label": "Body Template",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/bulk-email/route.ts"
    },
    {
      "name": "recipients",
      "label": "Recipients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/bulk-email/route.ts"
    },
    {
      "name": "subjectTemplate",
      "label": "Subject Template",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/bulk-email/route.ts"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "city",
      "label": "City",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/salary-benchmark/route.ts"
    },
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/salary-benchmark/route.ts"
    },
    {
      "name": "role",
      "label": "Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/salary-benchmark/route.ts"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-parse/route.ts"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-multi-format/route.ts"
    },
    {
      "name": "filename",
      "label": "Filename",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-multi-format/route.ts"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-multi-format/route.ts"
    },
    {
      "name": "candidate",
      "label": "Candidate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/placement-prediction/route.ts"
    },
    {
      "name": "client",
      "label": "Client",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/placement-prediction/route.ts"
    },
    {
      "name": "candidates",
      "label": "Candidates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/match/route.ts"
    },
    {
      "name": "jobDescription",
      "label": "Job Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/match/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "candidateId",
      "label": "Candidate Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "durationMinutes = 60",
      "label": "Duration Minutes = 60",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "interviewers",
      "label": "Interviewers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "interviewId",
      "label": "Interview Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "leadTimeMinutes = 60",
      "label": "Lead Time Minutes = 60",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "windowDays = 7",
      "label": "Window Days = 7",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "getReader",
      "label": "Get Reader",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/generate/route.ts"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/generate/route.ts"
    },
    {
      "name": "tool",
      "label": "Tool",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/generate/route.ts"
    },
    {
      "name": "cvs",
      "label": "Cvs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/candidate-match-vector/route.ts"
    },
    {
      "name": "jobSpec",
      "label": "Job Spec",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/candidate-match-vector/route.ts"
    },
    {
      "name": "topK = 10",
      "label": "Top K = 10",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/candidate-match-vector/route.ts"
    },
    {
      "name": "applicant",
      "label": "Applicant",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "job",
      "label": "Job",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    }
  ],
  "agency-services-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/gap-bulk-email-outreach-templates/page.tsx"
    },
    {
      "name": "clientId",
      "label": "Campaign Name *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "name",
      "label": "Campaign Name *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "budget",
      "label": "Budget ($)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{u.name}"
      ],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "description",
      "label": "End Date",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "endDate",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "managerId",
      "label": "Manager",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{opt.label}",
        "{u.name}"
      ],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "startDate",
      "label": "Budget ($)",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "DRAFT",
      "placeholder": "",
      "options": [
        "Email",
        "Social Media",
        "PPC",
        "Content",
        "SEO",
        "Multi-Channel",
        "Draft",
        "Scheduled",
        "Active",
        "Paused",
        "Completed"
      ],
      "required": true,
      "source": "src/app/dashboard/campaigns/new/page.tsx"
    },
    {
      "name": "clicks",
      "label": "Clicks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "conversions",
      "label": "Conversions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "impressions",
      "label": "Impressions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "revenue",
      "label": "Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "spend",
      "label": "Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/campaigns/[id]/page.tsx"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    },
    {
      "name": "frequency",
      "label": "Frequency",
      "type": "text",
      "defaultValue": "MONTHLY",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/dashboard/billing/retainers/[id]/edit/page.tsx"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/invoices/[id]/send-email/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/invoices/[id]/send-email/route.ts"
    },
    {
      "name": "to",
      "label": "To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/invoices/[id]/send-email/route.ts"
    },
    {
      "name": "bodyTemplate",
      "label": "Body Template",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/bulk-email/route.ts"
    },
    {
      "name": "recipients",
      "label": "Recipients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/bulk-email/route.ts"
    },
    {
      "name": "subjectTemplate",
      "label": "Subject Template",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/campaigns/bulk-email/route.ts"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "city",
      "label": "City",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/salary-benchmark/route.ts"
    },
    {
      "name": "level",
      "label": "Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/salary-benchmark/route.ts"
    },
    {
      "name": "role",
      "label": "Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/salary-benchmark/route.ts"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-parse/route.ts"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-multi-format/route.ts"
    },
    {
      "name": "filename",
      "label": "Filename",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-multi-format/route.ts"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/resume-multi-format/route.ts"
    },
    {
      "name": "candidate",
      "label": "Candidate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/placement-prediction/route.ts"
    },
    {
      "name": "client",
      "label": "Client",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/placement-prediction/route.ts"
    },
    {
      "name": "candidates",
      "label": "Candidates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/match/route.ts"
    },
    {
      "name": "jobDescription",
      "label": "Job Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/match/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "candidateId",
      "label": "Candidate Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "durationMinutes = 60",
      "label": "Duration Minutes = 60",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "interviewers",
      "label": "Interviewers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "interviewId",
      "label": "Interview Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "leadTimeMinutes = 60",
      "label": "Lead Time Minutes = 60",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "windowDays = 7",
      "label": "Window Days = 7",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/interview-coordinator/route.ts"
    },
    {
      "name": "getReader",
      "label": "Get Reader",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/generate/route.ts"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/generate/route.ts"
    },
    {
      "name": "tool",
      "label": "Tool",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/generate/route.ts"
    },
    {
      "name": "cvs",
      "label": "Cvs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/candidate-match-vector/route.ts"
    },
    {
      "name": "jobSpec",
      "label": "Job Spec",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/candidate-match-vector/route.ts"
    },
    {
      "name": "topK = 10",
      "label": "Top K = 10",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/candidate-match-vector/route.ts"
    },
    {
      "name": "applicant",
      "label": "Applicant",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "job",
      "label": "Job",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/ats-webhook-bridge/route.ts"
    }
  ],
  "ai-sales-outreach-ab-test-detail-1tl920-exact-ai": [
    {
      "name": "campaignId",
      "label": "Test Name *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "name",
      "label": "Test Name *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Subject Line Test - Q1 Campaign",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "variantATemplateId",
      "label": "Variant A Template *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}",
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "variantBTemplateId",
      "label": "Variant B Template *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    }
  ],
  "ai-sales-outreach-ai-assistant-s3qskr-exact-ai": [
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "firstName",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "trigger",
      "label": "Trigger",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    }
  ],
  "ai-sales-outreach-ai-best-time-u6vs4q-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Best Time source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBestTime.tsx"
    }
  ],
  "ai-sales-outreach-ai-best-time-detail-1gqctf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Best Time Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBestTimeDetail.tsx"
    }
  ],
  "ai-sales-outreach-ai-competitive-intel-v1zt4y-exact-ai": [
    {
      "name": "companyName",
      "label": "Company Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "Technology",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    },
    {
      "name": "ourProduct",
      "label": "Our Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    },
    {
      "name": "targetCompetitors",
      "label": "Target Competitors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    }
  ],
  "ai-sales-outreach-ai-deal-momentum-13mc11-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Deal Momentum source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDealMomentum.tsx"
    }
  ],
  "ai-sales-outreach-ai-lead-score-detail-p67hai-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Lead Score Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILeadScoreDetail.tsx"
    }
  ],
  "ai-sales-outreach-ai-lead-scorer-cpgvxl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Lead Scorer source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILeadScorer.tsx"
    }
  ],
  "ai-sales-outreach-ai-objection-detail-1rsh7n-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Objection Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjectionDetail.tsx"
    }
  ],
  "ai-sales-outreach-ai-objection-predictor-mtuz2a-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Objection Predictor source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjectionPredictor.tsx"
    }
  ],
  "ai-sales-outreach-ai-objections-8nxi41-exact-ai": [
    {
      "name": "buyerPersona",
      "label": "Buyer Persona",
      "type": "text",
      "defaultValue": "Decision Maker",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "General",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    },
    {
      "name": "objectionText",
      "label": "Objection Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    },
    {
      "name": "salesStage",
      "label": "Sales Stage",
      "type": "text",
      "defaultValue": "Discovery",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    }
  ],
  "ai-sales-outreach-ai-personalization-1tcjfu-exact-ai": [
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "focusArea",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "value_proposition",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "originalContent",
      "label": "Original Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "personalizationType",
      "label": "Personalization Type",
      "type": "text",
      "defaultValue": "email",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "professional",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    }
  ],
  "ai-sales-outreach-ai-personalization-detail-1bga3h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Personalization Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalizationDetail.tsx"
    }
  ],
  "ai-sales-outreach-ai-pipeline-forecast-1fadk8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Pipeline Forecast source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPipelineForecast.tsx"
    }
  ],
  "ai-sales-outreach-ai-pipeline-forecast-detail-1l0pq4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Pipeline Forecast Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPipelineForecastDetail.tsx"
    }
  ],
  "ai-sales-outreach-ai-playbook-learner-owbacx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Playbook Learner source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPlaybookLearner.tsx"
    }
  ],
  "ai-sales-outreach-ai-prospect-research-q4cbkq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Prospect Research source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIProspectResearch.tsx"
    }
  ],
  "ai-sales-outreach-ai-reply-triage-ybggf5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Reply Triage source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIReplyTriage.tsx"
    }
  ],
  "ai-sales-outreach-ai-warmup-scheduler-vle1hg-exact-ai": [
    {
      "name": "emailAddress",
      "label": "Email Address",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWarmupScheduler.tsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWarmupScheduler.tsx"
    },
    {
      "name": "totalDays",
      "label": "Total Days",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWarmupScheduler.tsx"
    }
  ],
  "ai-sales-outreach-campaign-detail-l8ri0o-exact-ai": [
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Describe your campaign",
      "options": [
        "Outreach",
        "Nurture",
        "Re-engagement",
        "Promotional"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignDetail.tsx"
    },
    {
      "name": "name",
      "label": "Description",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Enter campaign name",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignDetail.tsx"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Tech Startups, Enterprise Sales",
      "options": [
        "Outreach",
        "Nurture",
        "Re-engagement",
        "Promotional"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignDetail.tsx"
    }
  ],
  "ai-sales-outreach-campaigns-ru5syi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Campaigns source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.tsx"
    }
  ],
  "ai-sales-outreach-contact-detail-17nfi8-exact-ai": [
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Company Inc.",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "email",
      "label": "Company",
      "type": "email",
      "defaultValue": "",
      "placeholder": "john@company.com",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "firstName",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "John",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "jobTitle",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "CEO",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "lastName",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Doe",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "linkedinUrl",
      "label": "Phone",
      "type": "url",
      "defaultValue": "",
      "placeholder": "https://linkedin.com/in/johndoe",
      "options": [
        "Manual Entry",
        "LinkedIn",
        "Referral",
        "Website",
        "Conference"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "phone",
      "label": "Job Title",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "+1 (555) 123-4567",
      "options": [
        "Manual Entry",
        "LinkedIn"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "select",
      "defaultValue": "manual",
      "placeholder": "",
      "options": [
        "Manual Entry",
        "LinkedIn",
        "Referral",
        "Website",
        "Conference",
        "New",
        "Contacted",
        "Qualified",
        "Meeting Scheduled",
        "Proposal Sent"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "new",
      "placeholder": "",
      "options": [
        "Manual Entry",
        "LinkedIn",
        "Referral",
        "Website",
        "Conference",
        "New",
        "Contacted",
        "Qualified",
        "Meeting Scheduled",
        "Proposal Sent",
        "Negotiating",
        "Won"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    }
  ],
  "ai-sales-outreach-gap-ai-account-tier-scoring-icp-13ggu1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Account Tier Scoring Icp source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiAccountTierScoringIcp.tsx"
    }
  ],
  "ai-sales-outreach-gap-ai-competitor-win-loss-analysis-px92g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Competitor Win Loss Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiCompetitorWinLossAnalysis.tsx"
    }
  ],
  "ai-sales-outreach-gap-ai-live-conversation-coaching-calls-1w9fl1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Live Conversation Coaching Calls source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiLiveConversationCoachingCalls.tsx"
    }
  ],
  "ai-sales-outreach-gap-ai-multilingual-outreach-generation-gbfm0x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Multilingual Outreach Generation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAiMultilingualOutreachGeneration.tsx"
    }
  ],
  "ai-sales-outreach-integration-detail-1ropuq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Integration Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/IntegrationDetail.tsx"
    }
  ],
  "ai-sales-outreach-meeting-detail-1e9r3r-exact-ai": [
    {
      "name": "scheduledAt",
      "label": "Scheduled Date & Time *",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "1 hour",
        "1.5 hours"
      ],
      "required": true,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "title",
      "label": "Meeting Title *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Discovery Call with Acme Corp",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Meeting agenda and notes",
      "options": [
        "Discovery",
        "Demo",
        "Follow Up",
        "Negotiation",
        "Closing"
      ],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "durationMinutes",
      "label": "Duration (minutes)",
      "type": "number",
      "defaultValue": "30",
      "placeholder": "",
      "options": [
        "Discovery",
        "Demo",
        "Follow Up",
        "Negotiation",
        "Closing",
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "1 hour",
        "1.5 hours"
      ],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Office address or 'Virtual",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "meetingLink",
      "label": "Location",
      "type": "url",
      "defaultValue": "",
      "placeholder": "https://zoom.us/j/...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "meetingType",
      "label": "Meeting Type",
      "type": "select",
      "defaultValue": "discovery",
      "placeholder": "",
      "options": [
        "Discovery",
        "Demo",
        "Follow Up",
        "Negotiation",
        "Closing",
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "1 hour",
        "1.5 hours"
      ],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "notes",
      "label": "Revenue Potential ($)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Additional notes...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "revenuePotential",
      "label": "Meeting Link",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "0",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    }
  ],
  "ai-sales-outreach-report-detail-1i959p-exact-ai": [
    {
      "name": "removeChild",
      "label": "Remove Child",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ReportDetail.tsx"
    }
  ],
  "ai-sales-outreach-sequence-detail-7lzjeh-exact-ai": [
    {
      "name": "name",
      "label": "Sequence Name *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., New Customer Onboarding",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/SequenceDetail.tsx"
    },
    {
      "name": "description",
      "label": "Sequence Name *",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Describe the purpose of this sequence",
      "options": [
        "Manual",
        "Automatic",
        "Event Based"
      ],
      "required": false,
      "source": "frontend/src/pages/SequenceDetail.tsx"
    },
    {
      "name": "triggerType",
      "label": "Description",
      "type": "select",
      "defaultValue": "manual",
      "placeholder": "",
      "options": [
        "Manual",
        "Automatic",
        "Event Based"
      ],
      "required": false,
      "source": "frontend/src/pages/SequenceDetail.tsx"
    }
  ],
  "ai-sales-outreach-task-detail-gtqibv-exact-ai": [
    {
      "name": "title",
      "label": "Task Title *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Follow up with John about proposal",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Add details about the task",
      "options": [
        "Follow Up",
        "Call",
        "Email",
        "Meeting",
        "Other"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "dueDate",
      "label": "Due Date",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pending",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [
        "Follow Up",
        "Call",
        "Email",
        "Meeting",
        "Other",
        "Low",
        "Medium",
        "High",
        "Pending",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "pending",
      "placeholder": "",
      "options": [
        "Low",
        "Medium",
        "High",
        "Pending",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "taskType",
      "label": "Task Type",
      "type": "select",
      "defaultValue": "follow_up",
      "placeholder": "",
      "options": [
        "Follow Up",
        "Call",
        "Email",
        "Meeting",
        "Other",
        "Low",
        "Medium",
        "High"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    }
  ],
  "ai-sales-outreach-team-member-detail-ld1pzf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Team Member Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamMemberDetail.tsx"
    }
  ],
  "ai-sales-outreach-template-detail-wlzhhy-exact-ai": [
    {
      "name": "body",
      "label": "Body",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Hi {{firstName}},&#10;&#10;I noticed that {{company}} is...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TemplateDetail.tsx"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "select",
      "defaultValue": "outreach",
      "placeholder": "",
      "options": [
        "Outreach",
        "Follow Up",
        "Nurture",
        "Re-engagement",
        "Meeting"
      ],
      "required": false,
      "source": "frontend/src/pages/TemplateDetail.tsx"
    },
    {
      "name": "name",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Cold Outreach - Tech Startups",
      "options": [
        "Outreach",
        "Follow Up",
        "Nurture",
        "Re-engagement",
        "Meeting"
      ],
      "required": false,
      "source": "frontend/src/pages/TemplateDetail.tsx"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Quick question about {{company}}",
      "options": [
        "Outreach",
        "Follow Up",
        "Nurture",
        "Re-engagement",
        "Meeting"
      ],
      "required": false,
      "source": "frontend/src/pages/TemplateDetail.tsx"
    }
  ],
  "ai-sales-outreach-ai-1lp99q-exact-ai": [
    {
      "name": "aiAnalysis",
      "label": "AI Analysis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "aiConfidence",
      "label": "AI Confidence",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "aiInsights",
      "label": "AI Insights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "aiReasoning",
      "label": "AI Reasoning",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "artifactId",
      "label": "Artifact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "artifactKind",
      "label": "Artifact Kind",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "avoidTimes",
      "label": "Avoid Times",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bestDay",
      "label": "Best Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bestTimeEnd",
      "label": "Best Time End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bestTimeStart",
      "label": "Best Time Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "buyerPersona",
      "label": "Buyer Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "buyingSignals",
      "label": "Buying Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "companyInsights",
      "label": "Company Insights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "confidence",
      "label": "Confidence",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "count = 5",
      "label": "Count = 5",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "dealId",
      "label": "Deal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "decision",
      "label": "Decision",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "engagementLevel",
      "label": "Engagement Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "engagementPatterns",
      "label": "Engagement Patterns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "engagementPrediction",
      "label": "Engagement Prediction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "factors",
      "label": "Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "factorsConsidered",
      "label": "Factors Considered",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "focusArea",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "followUpQuestions",
      "label": "Follow Up Questions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "forecastDate",
      "label": "Forecast Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "forecastPeriod",
      "label": "Forecast Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "historicalData",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "improvements",
      "label": "Improvements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "industryContext",
      "label": "Industry Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "industryInsights",
      "label": "Industry Insights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "kind",
      "label": "Kind",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "nextBestAction",
      "label": "Next Best Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "objectionText",
      "label": "Objection Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "objectionType",
      "label": "Objection Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "opportunities",
      "label": "Opportunities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "optimalFrequency",
      "label": "Optimal Frequency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "originalContent",
      "label": "Original Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "painPoints",
      "label": "Pain Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "personalizationFactors",
      "label": "Personalization Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "personalizationType",
      "label": "Personalization Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "personalizedContent",
      "label": "Personalized Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "pipelineHealth",
      "label": "Pipeline Health",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedCloseDate",
      "label": "Predicted Close Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedDeals",
      "label": "Predicted Deals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedDealValue",
      "label": "Predicted Deal Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedRevenue",
      "label": "Predicted Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "previousInteractions",
      "label": "Previous Interactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "profileUrl",
      "label": "Profile Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "recommendation",
      "label": "Recommendation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "recommendations",
      "label": "Recommendations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "relatedObjections",
      "label": "Related Objections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "responseStrategy",
      "label": "Response Strategy",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "responseTemplates",
      "label": "Response Templates",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "reviewerId",
      "label": "Reviewer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "riskAssessment",
      "label": "Risk Assessment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "riskFactors",
      "label": "Risk Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "roleSpecificPoints",
      "label": "Role Specific Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "salesStage",
      "label": "Sales Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scenarioBest",
      "label": "Scenario Best",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scenarioLikely",
      "label": "Scenario Likely",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scenarioWorst",
      "label": "Scenario Worst",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "successRate",
      "label": "Success Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "teamId",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "timezone",
      "label": "Timezone",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "url",
      "label": "Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "userId",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "valuePropositions",
      "label": "Value Propositions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    }
  ],
  "ai-sales-outreach-campaigns-rb7rhe-exact-ai": [
    {
      "name": "bodyOverride",
      "label": "Body Override",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "createdBy",
      "label": "Created By",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "delayDays",
      "label": "Delay Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "delayHours",
      "label": "Delay Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "stepNumber",
      "label": "Step Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "subjectOverride",
      "label": "Subject Override",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "teamId",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "updates",
      "label": "Updates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    }
  ],
  "ai-sales-outreach-gap-ai-account-tier-scoring-icp-1q1xyu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Account Tier Scoring Icp source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_ai_account_tier_scoring_icp.ts"
    }
  ],
  "ai-sales-outreach-gap-ai-competitor-win-loss-analysis-3qt18v-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Competitor Win Loss Analysis source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_ai_competitor_win_loss_analysis.ts"
    }
  ],
  "ai-sales-outreach-gap-ai-live-conversation-coaching-calls-j1r7ky-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Live Conversation Coaching Calls source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_ai_live_conversation_coaching_calls.ts"
    }
  ],
  "ai-sales-outreach-gap-ai-multilingual-outreach-generation-15s78s-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Multilingual Outreach Generation source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gap_ai_multilingual_outreach_generation.ts"
    }
  ],
  "ai-sales-outreach-source-workflow": [
    {
      "name": "campaignId",
      "label": "Test Name *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "name",
      "label": "Test Name *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Subject Line Test - Q1 Campaign",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "variantATemplateId",
      "label": "Variant A Template *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}",
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "variantBTemplateId",
      "label": "Variant B Template *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Hi {{firstName}},&#10;&#10;I noticed that {{company}} is...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Company Inc.",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "firstName",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "John",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "Technology",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Quick question about {{company}}",
      "options": [
        "Outreach",
        "Follow Up",
        "Nurture",
        "Re-engagement",
        "Meeting"
      ],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "trigger",
      "label": "Trigger",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Best Time source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBestTime.tsx"
    },
    {
      "name": "companyName",
      "label": "Company Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    },
    {
      "name": "ourProduct",
      "label": "Our Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    },
    {
      "name": "targetCompetitors",
      "label": "Target Competitors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    },
    {
      "name": "buyerPersona",
      "label": "Buyer Persona",
      "type": "text",
      "defaultValue": "Decision Maker",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    },
    {
      "name": "objectionText",
      "label": "Objection Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    },
    {
      "name": "salesStage",
      "label": "Sales Stage",
      "type": "text",
      "defaultValue": "Discovery",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    },
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "focusArea",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "value_proposition",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "originalContent",
      "label": "Original Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "personalizationType",
      "label": "Personalization Type",
      "type": "text",
      "defaultValue": "email",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "professional",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "emailAddress",
      "label": "Email Address",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWarmupScheduler.tsx"
    },
    {
      "name": "totalDays",
      "label": "Total Days",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWarmupScheduler.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Describe your campaign",
      "options": [
        "Outreach",
        "Nurture",
        "Re-engagement",
        "Promotional"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignDetail.tsx"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Tech Startups, Enterprise Sales",
      "options": [
        "Outreach",
        "Nurture",
        "Re-engagement",
        "Promotional"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignDetail.tsx"
    },
    {
      "name": "email",
      "label": "Company",
      "type": "email",
      "defaultValue": "",
      "placeholder": "john@company.com",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "jobTitle",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "CEO",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "lastName",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Doe",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "linkedinUrl",
      "label": "Phone",
      "type": "url",
      "defaultValue": "",
      "placeholder": "https://linkedin.com/in/johndoe",
      "options": [
        "Manual Entry",
        "LinkedIn",
        "Referral",
        "Website",
        "Conference"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "phone",
      "label": "Job Title",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "+1 (555) 123-4567",
      "options": [
        "Manual Entry",
        "LinkedIn"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "select",
      "defaultValue": "manual",
      "placeholder": "",
      "options": [
        "Manual Entry",
        "LinkedIn",
        "Referral",
        "Website",
        "Conference",
        "New",
        "Contacted",
        "Qualified",
        "Meeting Scheduled",
        "Proposal Sent"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "new",
      "placeholder": "",
      "options": [
        "Manual Entry",
        "LinkedIn",
        "Referral",
        "Website",
        "Conference",
        "New",
        "Contacted",
        "Qualified",
        "Meeting Scheduled",
        "Proposal Sent",
        "Negotiating",
        "Won"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "scheduledAt",
      "label": "Scheduled Date & Time *",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "1 hour",
        "1.5 hours"
      ],
      "required": true,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "title",
      "label": "Meeting Title *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Discovery Call with Acme Corp",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "durationMinutes",
      "label": "Duration (minutes)",
      "type": "number",
      "defaultValue": "30",
      "placeholder": "",
      "options": [
        "Discovery",
        "Demo",
        "Follow Up",
        "Negotiation",
        "Closing",
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "1 hour",
        "1.5 hours"
      ],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Office address or 'Virtual",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "meetingLink",
      "label": "Location",
      "type": "url",
      "defaultValue": "",
      "placeholder": "https://zoom.us/j/...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "meetingType",
      "label": "Meeting Type",
      "type": "select",
      "defaultValue": "discovery",
      "placeholder": "",
      "options": [
        "Discovery",
        "Demo",
        "Follow Up",
        "Negotiation",
        "Closing",
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "1 hour",
        "1.5 hours"
      ],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "notes",
      "label": "Revenue Potential ($)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Additional notes...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "revenuePotential",
      "label": "Meeting Link",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "0",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "removeChild",
      "label": "Remove Child",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ReportDetail.tsx"
    },
    {
      "name": "triggerType",
      "label": "Description",
      "type": "select",
      "defaultValue": "manual",
      "placeholder": "",
      "options": [
        "Manual",
        "Automatic",
        "Event Based"
      ],
      "required": false,
      "source": "frontend/src/pages/SequenceDetail.tsx"
    },
    {
      "name": "dueDate",
      "label": "Due Date",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pending",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [
        "Follow Up",
        "Call",
        "Email",
        "Meeting",
        "Other",
        "Low",
        "Medium",
        "High",
        "Pending",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "taskType",
      "label": "Task Type",
      "type": "select",
      "defaultValue": "follow_up",
      "placeholder": "",
      "options": [
        "Follow Up",
        "Call",
        "Email",
        "Meeting",
        "Other",
        "Low",
        "Medium",
        "High"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "select",
      "defaultValue": "outreach",
      "placeholder": "",
      "options": [
        "Outreach",
        "Follow Up",
        "Nurture",
        "Re-engagement",
        "Meeting"
      ],
      "required": false,
      "source": "frontend/src/pages/TemplateDetail.tsx"
    },
    {
      "name": "aiAnalysis",
      "label": "AI Analysis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "aiConfidence",
      "label": "AI Confidence",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "aiInsights",
      "label": "AI Insights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "aiReasoning",
      "label": "AI Reasoning",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "artifactId",
      "label": "Artifact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "artifactKind",
      "label": "Artifact Kind",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "avoidTimes",
      "label": "Avoid Times",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bestDay",
      "label": "Best Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bestTimeEnd",
      "label": "Best Time End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bestTimeStart",
      "label": "Best Time Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "buyingSignals",
      "label": "Buying Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "companyInsights",
      "label": "Company Insights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "confidence",
      "label": "Confidence",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "count = 5",
      "label": "Count = 5",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "dealId",
      "label": "Deal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "decision",
      "label": "Decision",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "engagementLevel",
      "label": "Engagement Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "engagementPatterns",
      "label": "Engagement Patterns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "engagementPrediction",
      "label": "Engagement Prediction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "factors",
      "label": "Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "factorsConsidered",
      "label": "Factors Considered",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "followUpQuestions",
      "label": "Follow Up Questions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "forecastDate",
      "label": "Forecast Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "forecastPeriod",
      "label": "Forecast Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "historicalData",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "improvements",
      "label": "Improvements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "industryContext",
      "label": "Industry Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "industryInsights",
      "label": "Industry Insights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "kind",
      "label": "Kind",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "nextBestAction",
      "label": "Next Best Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "objectionType",
      "label": "Objection Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "opportunities",
      "label": "Opportunities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "optimalFrequency",
      "label": "Optimal Frequency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "painPoints",
      "label": "Pain Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "personalizationFactors",
      "label": "Personalization Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "personalizedContent",
      "label": "Personalized Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "pipelineHealth",
      "label": "Pipeline Health",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedCloseDate",
      "label": "Predicted Close Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedDeals",
      "label": "Predicted Deals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedDealValue",
      "label": "Predicted Deal Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedRevenue",
      "label": "Predicted Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "previousInteractions",
      "label": "Previous Interactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "profileUrl",
      "label": "Profile Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "recommendation",
      "label": "Recommendation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "recommendations",
      "label": "Recommendations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "relatedObjections",
      "label": "Related Objections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "responseStrategy",
      "label": "Response Strategy",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "responseTemplates",
      "label": "Response Templates",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "reviewerId",
      "label": "Reviewer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "riskAssessment",
      "label": "Risk Assessment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "riskFactors",
      "label": "Risk Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "roleSpecificPoints",
      "label": "Role Specific Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scenarioBest",
      "label": "Scenario Best",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scenarioLikely",
      "label": "Scenario Likely",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scenarioWorst",
      "label": "Scenario Worst",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "successRate",
      "label": "Success Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "teamId",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "timezone",
      "label": "Timezone",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "url",
      "label": "Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "userId",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "valuePropositions",
      "label": "Value Propositions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bodyOverride",
      "label": "Body Override",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "createdBy",
      "label": "Created By",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "delayDays",
      "label": "Delay Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "delayHours",
      "label": "Delay Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "stepNumber",
      "label": "Step Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "subjectOverride",
      "label": "Subject Override",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "updates",
      "label": "Updates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    }
  ],
  "ai-sales-outreach-ai-tools": [
    {
      "name": "campaignId",
      "label": "Test Name *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "name",
      "label": "Test Name *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Subject Line Test - Q1 Campaign",
      "options": [
        "{c.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "variantATemplateId",
      "label": "Variant A Template *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{c.name}",
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "variantBTemplateId",
      "label": "Variant B Template *",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/ABTestDetail.tsx"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Hi {{firstName}},&#10;&#10;I noticed that {{company}} is...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Company Inc.",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "firstName",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "John",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "Technology",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Quick question about {{company}}",
      "options": [
        "Outreach",
        "Follow Up",
        "Nurture",
        "Re-engagement",
        "Meeting"
      ],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "trigger",
      "label": "Trigger",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssistant.tsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Best Time source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBestTime.tsx"
    },
    {
      "name": "companyName",
      "label": "Company Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    },
    {
      "name": "ourProduct",
      "label": "Our Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    },
    {
      "name": "targetCompetitors",
      "label": "Target Competitors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompetitiveIntel.tsx"
    },
    {
      "name": "buyerPersona",
      "label": "Buyer Persona",
      "type": "text",
      "defaultValue": "Decision Maker",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    },
    {
      "name": "objectionText",
      "label": "Objection Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    },
    {
      "name": "salesStage",
      "label": "Sales Stage",
      "type": "text",
      "defaultValue": "Discovery",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIObjections.tsx"
    },
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "focusArea",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "value_proposition",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "originalContent",
      "label": "Original Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "personalizationType",
      "label": "Personalization Type",
      "type": "text",
      "defaultValue": "email",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "professional",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPersonalization.tsx"
    },
    {
      "name": "emailAddress",
      "label": "Email Address",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWarmupScheduler.tsx"
    },
    {
      "name": "totalDays",
      "label": "Total Days",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIWarmupScheduler.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Describe your campaign",
      "options": [
        "Outreach",
        "Nurture",
        "Re-engagement",
        "Promotional"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignDetail.tsx"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Tech Startups, Enterprise Sales",
      "options": [
        "Outreach",
        "Nurture",
        "Re-engagement",
        "Promotional"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignDetail.tsx"
    },
    {
      "name": "email",
      "label": "Company",
      "type": "email",
      "defaultValue": "",
      "placeholder": "john@company.com",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "jobTitle",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "CEO",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "lastName",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Doe",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "linkedinUrl",
      "label": "Phone",
      "type": "url",
      "defaultValue": "",
      "placeholder": "https://linkedin.com/in/johndoe",
      "options": [
        "Manual Entry",
        "LinkedIn",
        "Referral",
        "Website",
        "Conference"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "phone",
      "label": "Job Title",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "+1 (555) 123-4567",
      "options": [
        "Manual Entry",
        "LinkedIn"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "select",
      "defaultValue": "manual",
      "placeholder": "",
      "options": [
        "Manual Entry",
        "LinkedIn",
        "Referral",
        "Website",
        "Conference",
        "New",
        "Contacted",
        "Qualified",
        "Meeting Scheduled",
        "Proposal Sent"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "new",
      "placeholder": "",
      "options": [
        "Manual Entry",
        "LinkedIn",
        "Referral",
        "Website",
        "Conference",
        "New",
        "Contacted",
        "Qualified",
        "Meeting Scheduled",
        "Proposal Sent",
        "Negotiating",
        "Won"
      ],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.tsx"
    },
    {
      "name": "scheduledAt",
      "label": "Scheduled Date & Time *",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "1 hour",
        "1.5 hours"
      ],
      "required": true,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "title",
      "label": "Meeting Title *",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g., Discovery Call with Acme Corp",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "durationMinutes",
      "label": "Duration (minutes)",
      "type": "number",
      "defaultValue": "30",
      "placeholder": "",
      "options": [
        "Discovery",
        "Demo",
        "Follow Up",
        "Negotiation",
        "Closing",
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "1 hour",
        "1.5 hours"
      ],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Office address or 'Virtual",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "meetingLink",
      "label": "Location",
      "type": "url",
      "defaultValue": "",
      "placeholder": "https://zoom.us/j/...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "meetingType",
      "label": "Meeting Type",
      "type": "select",
      "defaultValue": "discovery",
      "placeholder": "",
      "options": [
        "Discovery",
        "Demo",
        "Follow Up",
        "Negotiation",
        "Closing",
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "1 hour",
        "1.5 hours"
      ],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "notes",
      "label": "Revenue Potential ($)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Additional notes...",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "revenuePotential",
      "label": "Meeting Link",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "0",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MeetingDetail.tsx"
    },
    {
      "name": "removeChild",
      "label": "Remove Child",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ReportDetail.tsx"
    },
    {
      "name": "triggerType",
      "label": "Description",
      "type": "select",
      "defaultValue": "manual",
      "placeholder": "",
      "options": [
        "Manual",
        "Automatic",
        "Event Based"
      ],
      "required": false,
      "source": "frontend/src/pages/SequenceDetail.tsx"
    },
    {
      "name": "dueDate",
      "label": "Due Date",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pending",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [
        "Follow Up",
        "Call",
        "Email",
        "Meeting",
        "Other",
        "Low",
        "Medium",
        "High",
        "Pending",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "taskType",
      "label": "Task Type",
      "type": "select",
      "defaultValue": "follow_up",
      "placeholder": "",
      "options": [
        "Follow Up",
        "Call",
        "Email",
        "Meeting",
        "Other",
        "Low",
        "Medium",
        "High"
      ],
      "required": false,
      "source": "frontend/src/pages/TaskDetail.tsx"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "select",
      "defaultValue": "outreach",
      "placeholder": "",
      "options": [
        "Outreach",
        "Follow Up",
        "Nurture",
        "Re-engagement",
        "Meeting"
      ],
      "required": false,
      "source": "frontend/src/pages/TemplateDetail.tsx"
    },
    {
      "name": "aiAnalysis",
      "label": "AI Analysis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "aiConfidence",
      "label": "AI Confidence",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "aiInsights",
      "label": "AI Insights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "aiReasoning",
      "label": "AI Reasoning",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "artifactId",
      "label": "Artifact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "artifactKind",
      "label": "Artifact Kind",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "avoidTimes",
      "label": "Avoid Times",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bestDay",
      "label": "Best Day",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bestTimeEnd",
      "label": "Best Time End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bestTimeStart",
      "label": "Best Time Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "buyingSignals",
      "label": "Buying Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "companyInsights",
      "label": "Company Insights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "confidence",
      "label": "Confidence",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "count = 5",
      "label": "Count = 5",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "dealId",
      "label": "Deal Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "decision",
      "label": "Decision",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "engagementLevel",
      "label": "Engagement Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "engagementPatterns",
      "label": "Engagement Patterns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "engagementPrediction",
      "label": "Engagement Prediction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "factors",
      "label": "Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "factorsConsidered",
      "label": "Factors Considered",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "followUpQuestions",
      "label": "Follow Up Questions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "forecastDate",
      "label": "Forecast Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "forecastPeriod",
      "label": "Forecast Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "historicalData",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "improvements",
      "label": "Improvements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "industryContext",
      "label": "Industry Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "industryInsights",
      "label": "Industry Insights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "kind",
      "label": "Kind",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "nextBestAction",
      "label": "Next Best Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "objectionType",
      "label": "Objection Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "opportunities",
      "label": "Opportunities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "optimalFrequency",
      "label": "Optimal Frequency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "painPoints",
      "label": "Pain Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "personalizationFactors",
      "label": "Personalization Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "personalizedContent",
      "label": "Personalized Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "pipelineHealth",
      "label": "Pipeline Health",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedCloseDate",
      "label": "Predicted Close Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedDeals",
      "label": "Predicted Deals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedDealValue",
      "label": "Predicted Deal Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "predictedRevenue",
      "label": "Predicted Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "previousInteractions",
      "label": "Previous Interactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "profileUrl",
      "label": "Profile Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "recommendation",
      "label": "Recommendation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "recommendations",
      "label": "Recommendations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "relatedObjections",
      "label": "Related Objections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "responseStrategy",
      "label": "Response Strategy",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "responseTemplates",
      "label": "Response Templates",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "reviewerId",
      "label": "Reviewer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "riskAssessment",
      "label": "Risk Assessment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "riskFactors",
      "label": "Risk Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "roleSpecificPoints",
      "label": "Role Specific Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scenarioBest",
      "label": "Scenario Best",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scenarioLikely",
      "label": "Scenario Likely",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "scenarioWorst",
      "label": "Scenario Worst",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "score",
      "label": "Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "successRate",
      "label": "Success Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "teamId",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "timezone",
      "label": "Timezone",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "url",
      "label": "Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "userId",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "valuePropositions",
      "label": "Value Propositions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.ts"
    },
    {
      "name": "bodyOverride",
      "label": "Body Override",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "createdBy",
      "label": "Created By",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "delayDays",
      "label": "Delay Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "delayHours",
      "label": "Delay Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "stepNumber",
      "label": "Step Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "subjectOverride",
      "label": "Subject Override",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    },
    {
      "name": "updates",
      "label": "Updates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/campaigns.ts"
    }
  ],
  "ai-bail-bond-risk-assessor-agentic-bail-review-1oyhqd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Bail Review source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticBailReview.js"
    }
  ],
  "ai-bail-bond-risk-assessor-ai-j615h1-exact-ai": [
    {
      "name": "defendant_id",
      "label": "Defendant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "defendantId",
      "label": "Defendant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-bail-bond-risk-assessor-ai-new-1l6olc-exact-ai": [
    {
      "name": "bond_amount",
      "label": "Bond Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "bond_id",
      "label": "Bond Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "defendant_id",
      "label": "Defendant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "hearing_type = 'Bail Reduction Hearing'",
      "label": "Hearing Type = 'Bail Reduction Hearing'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "missed_hearing_date",
      "label": "Missed Hearing Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "surety_data",
      "label": "Surety Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "surety_id",
      "label": "Surety Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "window_days = 30",
      "label": "Window Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-bail-bond-risk-assessor-bail-bonds-qjeqj3-exact-ai": [
    {
      "name": "bond_amount",
      "label": "Bond Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "bond_type",
      "label": "Bond Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "case_number",
      "label": "Case Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "charge",
      "label": "Charge",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "collateral",
      "label": "Collateral",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "court_date",
      "label": "Court Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "court_name",
      "label": "Court Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "defendant_id",
      "label": "Defendant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "premium_amount",
      "label": "Premium Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    }
  ],
  "ai-bail-bond-risk-assessor-gap-no-ai-driven-bond-pricing-despite-financial-analys-1uuejb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Bond Pricing Despite Financial Analys source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_driven_bond_pricing_despite_financial_analys.js"
    }
  ],
  "ai-bail-bond-risk-assessor-multi-agent-54yn2l-exact-ai": [
    {
      "name": "defendant_id",
      "label": "Defendant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/multiAgent.js"
    }
  ],
  "ai-bail-bond-risk-assessor-ai-insights-1pm7j5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIInsights.js"
    }
  ],
  "ai-bail-bond-risk-assessor-agentic-bail-review-workflow-with-multi-agent-risk-page-139os2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Bail Review Workflow With Multi Agent Risk Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AgenticBailReviewWorkflowWithMultiAgentRiskPage.js"
    }
  ],
  "ai-bail-bond-risk-assessor-multi-agent-review-page-1s4cm7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Multi Agent Review Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/MultiAgentReviewPage.js"
    }
  ],
  "ai-bail-bond-risk-assessor-no-ai-driven-bond-pricing-despite-financial-analys-page-1f1b27-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Driven Bond Pricing Despite Financial Analys Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/NoAiDrivenBondPricingDespiteFinancialAnalysPage.js"
    }
  ],
  "ai-bail-bond-risk-assessor-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Bail Review source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticBailReview.js"
    },
    {
      "name": "defendant_id",
      "label": "Defendant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "defendantId",
      "label": "Defendant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "bond_amount",
      "label": "Bond Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "bond_id",
      "label": "Bond Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "hearing_type = 'Bail Reduction Hearing'",
      "label": "Hearing Type = 'Bail Reduction Hearing'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "missed_hearing_date",
      "label": "Missed Hearing Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "surety_data",
      "label": "Surety Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "surety_id",
      "label": "Surety Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "window_days = 30",
      "label": "Window Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "bond_type",
      "label": "Bond Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "case_number",
      "label": "Case Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "charge",
      "label": "Charge",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "collateral",
      "label": "Collateral",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "court_date",
      "label": "Court Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "court_name",
      "label": "Court Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "premium_amount",
      "label": "Premium Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    }
  ],
  "ai-bail-bond-risk-assessor-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Bail Review source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticBailReview.js"
    },
    {
      "name": "defendant_id",
      "label": "Defendant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "defendantId",
      "label": "Defendant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "bond_amount",
      "label": "Bond Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "bond_id",
      "label": "Bond Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "hearing_type = 'Bail Reduction Hearing'",
      "label": "Hearing Type = 'Bail Reduction Hearing'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "missed_hearing_date",
      "label": "Missed Hearing Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "surety_data",
      "label": "Surety Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "surety_id",
      "label": "Surety Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "window_days = 30",
      "label": "Window Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "bond_type",
      "label": "Bond Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "case_number",
      "label": "Case Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "charge",
      "label": "Charge",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "collateral",
      "label": "Collateral",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "court_date",
      "label": "Court Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "court_name",
      "label": "Court Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "premium_amount",
      "label": "Premium Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/bailBonds.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-ai-studio-page-14ncyi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Studio Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIStudioPage.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-agentic-sdr-responding-to-leads-qualifying-and-boo-page-1o9d6y-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Sdr Responding To Leads Qualifying And Boo Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticSdrRespondingToLeadsQualifyingAndBooPage.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-ainew-js-scaffold-but-no-mounted-chat-style-ai-end-page-dvkxy1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Ainew Js Scaffold But No Mounted Chat Style AI End Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AinewJsScaffoldButNoMountedChatStyleAiEndPage.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-campaigns-page-1widvf-exact-ai": [
    {
      "name": "name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "start_date",
      "label": "Channel",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "budget",
      "label": "Start Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "campaign_type",
      "label": "Campaign Name",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "channel",
      "label": "Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g. Facebook, Google Ads",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "clicks",
      "label": "Revenue Attributed",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "conversion_rate",
      "label": "Impressions",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "deals_closed",
      "label": "Spent",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "end_date",
      "label": "Target Audience",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "impressions",
      "label": "Deals Closed",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "leads_generated",
      "label": "End Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "notes",
      "label": "Status",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "revenue_attributed",
      "label": "Leads Generated",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "spent",
      "label": "End Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "status",
      "label": "Clicks",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "target_audience",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-no-ai-deal-desk-negotiation-co-pilot-page-1k47hn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Deal Desk Negotiation Co Pilot Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiDealDeskNegotiationCoPilotPage.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-no-ai-lead-scoring-on-inbound-contacts-page-11n49u-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Lead Scoring On Inbound Contacts Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiLeadScoringOnInboundContactsPage.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-no-ai-trade-in-valuation-page-12vei0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Trade In Valuation Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiTradeInValuationPage.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-no-ai-vehicle-photo-enhancement-and-listing-copy-page-1m1450-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Vehicle Photo Enhancement And Listing Copy Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiVehiclePhotoEnhancementAndListingCopyPage.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-no-notification-system-sms-email-delivery-channel-page-1mgmqt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No Notification System Sms Email Delivery Channel Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoNotificationSystemSmsEmailDeliveryChannelPage.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-agentic-sdr-1lv1tb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Sdr source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticSdr.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-ai-new-7q6oy0-exact-ai": [
    {
      "name": "claims_history",
      "label": "Claims History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "condition_description",
      "label": "Condition Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "credit_score",
      "label": "Credit Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "customer",
      "label": "Customer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "customer_profile",
      "label": "Customer Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "documents",
      "label": "Documents",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "down_payment",
      "label": "Down Payment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "inventory",
      "label": "Inventory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "models",
      "label": "Models",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "purchase_history",
      "label": "Purchase History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "recent_interactions",
      "label": "Recent Interactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "rep_profile",
      "label": "Rep Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "trade_in",
      "label": "Trade In",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "vehicle",
      "label": "Vehicle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "vehicle_info",
      "label": "Vehicle Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "vehicle_price",
      "label": "Vehicle Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "zip_code",
      "label": "Zip Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-campaigns-gosqfl-exact-ai": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "campaign_type",
      "label": "Campaign Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "clicks",
      "label": "Clicks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "conversion_rate",
      "label": "Conversion Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "deals_closed",
      "label": "Deals Closed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "impressions",
      "label": "Impressions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "leads_generated",
      "label": "Leads Generated",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "revenue_attributed",
      "label": "Revenue Attributed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "spent",
      "label": "Spent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    },
    {
      "name": "target_audience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/campaigns.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-gap-ainew-js-scaffold-but-no-mounted-chat-style-ai-end-lfyar5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Ainew Js Scaffold But No Mounted Chat Style AI End source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_ainew_js_scaffold_but_no_mounted_chat_style_ai_end.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-gap-no-ai-deal-desk-negotiation-co-pilot-d90g20-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Deal Desk Negotiation Co Pilot source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_deal_desk_negotiation_co_pilot.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-gap-no-ai-lead-scoring-on-inbound-contacts-10ffud-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Lead Scoring On Inbound Contacts source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_lead_scoring_on_inbound_contacts.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-gap-no-ai-trade-in-valuation-fegqha-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Trade In Valuation source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_trade_in_valuation.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-gap-no-ai-vehicle-photo-enhancement-and-listing-copy-125urv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Vehicle Photo Enhancement And Listing Copy source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_vehicle_photo_enhancement_and_listing_copy.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-gap-no-notification-system-sms-email-delivery-channel-o1wjm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Notification System Sms Email Delivery Channel source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_notification_system_sms_email_delivery_channel.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Studio Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIStudioPage.js"
    },
    {
      "name": "name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "start_date",
      "label": "Channel",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "budget",
      "label": "Start Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "campaign_type",
      "label": "Campaign Name",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "channel",
      "label": "Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g. Facebook, Google Ads",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "clicks",
      "label": "Revenue Attributed",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "conversion_rate",
      "label": "Impressions",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "deals_closed",
      "label": "Spent",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "end_date",
      "label": "Target Audience",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "impressions",
      "label": "Deals Closed",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "leads_generated",
      "label": "End Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "notes",
      "label": "Status",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "revenue_attributed",
      "label": "Leads Generated",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "spent",
      "label": "End Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "status",
      "label": "Clicks",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "target_audience",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "claims_history",
      "label": "Claims History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "condition_description",
      "label": "Condition Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "credit_score",
      "label": "Credit Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "customer",
      "label": "Customer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "customer_profile",
      "label": "Customer Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "documents",
      "label": "Documents",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "down_payment",
      "label": "Down Payment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "inventory",
      "label": "Inventory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "models",
      "label": "Models",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "purchase_history",
      "label": "Purchase History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "recent_interactions",
      "label": "Recent Interactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "rep_profile",
      "label": "Rep Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "trade_in",
      "label": "Trade In",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "vehicle",
      "label": "Vehicle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "vehicle_info",
      "label": "Vehicle Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "vehicle_price",
      "label": "Vehicle Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "zip_code",
      "label": "Zip Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-car-dealership-sales-optimizer-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Studio Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIStudioPage.js"
    },
    {
      "name": "name",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "start_date",
      "label": "Channel",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "budget",
      "label": "Start Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "campaign_type",
      "label": "Campaign Name",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "channel",
      "label": "Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "e.g. Facebook, Google Ads",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "clicks",
      "label": "Revenue Attributed",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "conversion_rate",
      "label": "Impressions",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "deals_closed",
      "label": "Spent",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "end_date",
      "label": "Target Audience",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "impressions",
      "label": "Deals Closed",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "leads_generated",
      "label": "End Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "notes",
      "label": "Status",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "revenue_attributed",
      "label": "Leads Generated",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "spent",
      "label": "End Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "status",
      "label": "Clicks",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Draft",
        "Active",
        "Paused",
        "Completed",
        "Cancelled"
      ],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "target_audience",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CampaignsPage.js"
    },
    {
      "name": "claims_history",
      "label": "Claims History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "condition_description",
      "label": "Condition Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "credit_score",
      "label": "Credit Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "customer",
      "label": "Customer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "customer_profile",
      "label": "Customer Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "documents",
      "label": "Documents",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "down_payment",
      "label": "Down Payment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "inventory",
      "label": "Inventory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "models",
      "label": "Models",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "purchase_history",
      "label": "Purchase History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "recent_interactions",
      "label": "Recent Interactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "rep_profile",
      "label": "Rep Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "trade_in",
      "label": "Trade In",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "vehicle",
      "label": "Vehicle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "vehicle_info",
      "label": "Vehicle Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "vehicle_price",
      "label": "Vehicle Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "zip_code",
      "label": "Zip Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-j615h1-exact-ai": [
    {
      "name": "claim",
      "label": "Claim",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claim_id",
      "label": "Claim Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "evidence",
      "label": "Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "url",
      "label": "Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-new-1l6olc-exact-ai": [
    {
      "name": "analysis_id",
      "label": "Analysis Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "audience_profile_id",
      "label": "Audience Profile Id",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "available_categories",
      "label": "Available Categories",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "claim_id",
      "label": "Claim Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "claim_text",
      "label": "Claim Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "correction_text",
      "label": "Correction Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "demographics",
      "label": "Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "depth = 1",
      "label": "Depth = 1",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_days = 7",
      "label": "Horizon Days = 7",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "information_diet",
      "label": "Information Diet",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "metadata",
      "label": "Metadata",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "rating",
      "label": "Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "related_source_id",
      "label": "Related Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "relation_type",
      "label": "Relation Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "since",
      "label": "Since",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "source_id",
      "label": "Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "weight",
      "label": "Weight",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-detectcombatmisinformatio-claims-mbyvno-exact-ai": [
    {
      "name": "assigned_to",
      "label": "Assigned To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "category_id",
      "label": "Category Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "origin_url",
      "label": "Origin Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "source_id",
      "label": "Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "urgency_score",
      "label": "Urgency Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    }
  ],
  "ai-detectcombatmisinformatio-gap-no-verdict-explainability-surface-xv88w1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Verdict Explainability Surface source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_verdict_explainability_surface.js"
    }
  ],
  "ai-detectcombatmisinformatio-gap-sources-lacks-ai-credibility-scoring-endpoint-1so72r-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Sources Lacks AI Credibility Scoring Endpoint source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_sources_lacks_ai_credibility_scoring_endpoint.js"
    }
  ],
  "ai-detectcombatmisinformatio-gap-trending-categories-lack-ai-endpoints-for-trend-prediction-a-1t5nuu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Trending Categories Lack AI Endpoints For Trend Prediction A source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_trending_categories_lack_ai_endpoints_for_trend_prediction_a.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-auto-categorize-key6gu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Auto Categorize source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAutoCategorize.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-claim-analyzer-6avble-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Claim Analyzer source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIClaimAnalyzer.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-integrations-bfsair-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Integrations source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIIntegrations.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-pattern-detector-1sn32p-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Pattern Detector source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPatternDetector.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-personalized-debunk-e4stmf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Personalized Debunk source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPersonalizedDebunk.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-realtime-monitor-119qal-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Realtime Monitor source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIRealtimeMonitor.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-sentiment-l6vt5l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Sentiment source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AISentiment.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-source-checker-upbzpe-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Source Checker source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AISourceChecker.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-source-trace-11a93l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Source Trace source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AISourceTrace.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-summary-generator-4r39gx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Summary Generator source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AISummaryGenerator.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-trend-prediction-odym0i-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Trend Prediction source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITrendPrediction.js"
    }
  ],
  "ai-detectcombatmisinformatio-cf-predictive-claim-verification-1iwst5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Predictive Claim Verification source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfPredictiveClaimVerification.js"
    }
  ],
  "ai-detectcombatmisinformatio-claims-ukjbkv-exact-ai": [
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Full claim text",
      "options": [],
      "required": true,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Enter claim title",
      "options": [],
      "required": true,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "assigned_to",
      "label": "Assigned To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "category_name",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "created_at",
      "label": "Created",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "origin_url",
      "label": "Origin URL",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "defaultValue": "low",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "reach",
      "label": "Reach",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "source_name",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "spread_rate",
      "label": "Spread Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "urgency_score",
      "label": "Urgency Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    }
  ],
  "ai-detectcombatmisinformatio-gap-no-verdict-explainability-surface-gdhenu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Verdict Explainability Surface source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoVerdictExplainabilitySurface.js"
    }
  ],
  "ai-detectcombatmisinformatio-gap-sources-lacks-ai-credibility-scoring-endpoint-1sqil8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Sources Lacks AI Credibility Scoring Endpoint source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapSourcesLacksAiCredibilityScoringEndpoint.js"
    }
  ],
  "ai-detectcombatmisinformatio-gap-trending-categories-lack-ai-endpoints-for-trend-prediction-a-1tdunw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Trending Categories Lack AI Endpoints For Trend Prediction A source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapTrendingCategoriesLackAiEndpointsForTrendPredictionA.js"
    }
  ],
  "ai-detectcombatmisinformatio-source-workflow": [
    {
      "name": "claim",
      "label": "Claim",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claim_id",
      "label": "Claim Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "evidence",
      "label": "Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "url",
      "label": "Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "analysis_id",
      "label": "Analysis Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "audience_profile_id",
      "label": "Audience Profile Id",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "available_categories",
      "label": "Available Categories",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "claim_text",
      "label": "Claim Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "correction_text",
      "label": "Correction Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "demographics",
      "label": "Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "depth = 1",
      "label": "Depth = 1",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_days = 7",
      "label": "Horizon Days = 7",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "information_diet",
      "label": "Information Diet",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "metadata",
      "label": "Metadata",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "rating",
      "label": "Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "related_source_id",
      "label": "Related Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "relation_type",
      "label": "Relation Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "since",
      "label": "Since",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "source_id",
      "label": "Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "weight",
      "label": "Weight",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "assigned_to",
      "label": "Assigned To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "category_id",
      "label": "Category Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Full claim text",
      "options": [],
      "required": true,
      "source": "server/routes/claims.js"
    },
    {
      "name": "origin_url",
      "label": "Origin Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "defaultValue": "low",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Enter claim title",
      "options": [],
      "required": true,
      "source": "server/routes/claims.js"
    },
    {
      "name": "urgency_score",
      "label": "Urgency Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Verdict Explainability Surface source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_verdict_explainability_surface.js"
    },
    {
      "name": "category_name",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "created_at",
      "label": "Created",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "reach",
      "label": "Reach",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "source_name",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "spread_rate",
      "label": "Spread Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    }
  ],
  "ai-detectcombatmisinformatio-ai-tools": [
    {
      "name": "claim",
      "label": "Claim",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claim_id",
      "label": "Claim Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "evidence",
      "label": "Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "url",
      "label": "Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "analysis_id",
      "label": "Analysis Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "audience_profile_id",
      "label": "Audience Profile Id",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "available_categories",
      "label": "Available Categories",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "claim_text",
      "label": "Claim Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "correction_text",
      "label": "Correction Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "demographics",
      "label": "Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "depth = 1",
      "label": "Depth = 1",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_days = 7",
      "label": "Horizon Days = 7",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "information_diet",
      "label": "Information Diet",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "metadata",
      "label": "Metadata",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "rating",
      "label": "Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "related_source_id",
      "label": "Related Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "relation_type",
      "label": "Relation Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "since",
      "label": "Since",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "source_id",
      "label": "Source Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "weight",
      "label": "Weight",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "assigned_to",
      "label": "Assigned To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "category_id",
      "label": "Category Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Full claim text",
      "options": [],
      "required": true,
      "source": "server/routes/claims.js"
    },
    {
      "name": "origin_url",
      "label": "Origin Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "defaultValue": "low",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Enter claim title",
      "options": [],
      "required": true,
      "source": "server/routes/claims.js"
    },
    {
      "name": "urgency_score",
      "label": "Urgency Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Verdict Explainability Surface source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_verdict_explainability_surface.js"
    },
    {
      "name": "category_name",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "created_at",
      "label": "Created",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "reach",
      "label": "Reach",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "source_name",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    },
    {
      "name": "spread_rate",
      "label": "Spread Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    }
  ],
  "ai-digital-identity-verifiable-credentials-ai-center-1cu9t7-exact-ai": [
    {
      "name": "availableCredentials",
      "label": "Available Credentials",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "credentialData",
      "label": "Credential Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "credentialType",
      "label": "Credential Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "didDocument",
      "label": "Did Document",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "entityData",
      "label": "Entity Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "entityType",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "identity_id",
      "label": "Identity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "identityData",
      "label": "Identity Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "request",
      "label": "Request",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "schemaData",
      "label": "Schema Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "sharingContext",
      "label": "Sharing Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "subjectData",
      "label": "Subject Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "transactionData",
      "label": "Transaction Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    }
  ],
  "ai-digital-identity-verifiable-credentials-ai-new-1l6olc-exact-ai": [
    {
      "name": "action = 'create'",
      "label": "Action = 'Create'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credential_id",
      "label": "Credential Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credential_ids",
      "label": "Credential Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "did_uri",
      "label": "Did Uri",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "identity_id",
      "label": "Identity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "issuer",
      "label": "Issuer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "outcome = 'pass'",
      "label": "Outcome = 'Pass'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "presentation_id = null",
      "label": "Presentation Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "purpose = 'verification'",
      "label": "Purpose = 'Verification'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "requested_fields = []",
      "label": "Requested Fields = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_state",
      "label": "Target State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-digital-identity-verifiable-credentials-crosschain-bridge-ahuei9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Crosschain Bridge source input context",
      "options": [],
      "required": false,
      "source": "server/routes/crosschainBridge.js"
    }
  ],
  "ai-digital-identity-verifiable-credentials-gap-no-blockchain-integration-ethereum-hyperledger-did-90eech-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Blockchain Integration Ethereum Hyperledger Did source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_blockchain_integration_ethereum_hyperledger_did.js"
    }
  ],
  "ai-digital-identity-verifiable-credentials-ai-center-42pwwt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    }
  ],
  "ai-digital-identity-verifiable-credentials-cf-cross-chain-credential-bridging-qa90gp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Cross Chain Credential Bridging source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfCrossChainCredentialBridging.jsx"
    }
  ],
  "ai-digital-identity-verifiable-credentials-gap-no-blockchain-integration-ethereum-hyperledger-did-encvz6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Blockchain Integration Ethereum Hyperledger Did source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoBlockchainIntegrationEthereumHyperledgerDid.jsx"
    }
  ],
  "ai-digital-identity-verifiable-credentials-source-workflow": [
    {
      "name": "availableCredentials",
      "label": "Available Credentials",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "credentialData",
      "label": "Credential Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "credentialType",
      "label": "Credential Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "didDocument",
      "label": "Did Document",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "entityData",
      "label": "Entity Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "entityType",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "identity_id",
      "label": "Identity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "identityData",
      "label": "Identity Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "request",
      "label": "Request",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "schemaData",
      "label": "Schema Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "sharingContext",
      "label": "Sharing Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "subjectData",
      "label": "Subject Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "transactionData",
      "label": "Transaction Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "action = 'create'",
      "label": "Action = 'Create'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credential_id",
      "label": "Credential Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credential_ids",
      "label": "Credential Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "did_uri",
      "label": "Did Uri",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "issuer",
      "label": "Issuer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "outcome = 'pass'",
      "label": "Outcome = 'Pass'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "presentation_id = null",
      "label": "Presentation Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "purpose = 'verification'",
      "label": "Purpose = 'Verification'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "requested_fields = []",
      "label": "Requested Fields = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_state",
      "label": "Target State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Crosschain Bridge source input context",
      "options": [],
      "required": false,
      "source": "server/routes/crosschainBridge.js"
    }
  ],
  "ai-digital-identity-verifiable-credentials-ai-tools": [
    {
      "name": "availableCredentials",
      "label": "Available Credentials",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "credentialData",
      "label": "Credential Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "credentialType",
      "label": "Credential Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "didDocument",
      "label": "Did Document",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "entityData",
      "label": "Entity Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "entityType",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "identity_id",
      "label": "Identity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "identityData",
      "label": "Identity Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "request",
      "label": "Request",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "schemaData",
      "label": "Schema Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "sharingContext",
      "label": "Sharing Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "subjectData",
      "label": "Subject Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "transactionData",
      "label": "Transaction Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-center.js"
    },
    {
      "name": "action = 'create'",
      "label": "Action = 'Create'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credential_id",
      "label": "Credential Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credential_ids",
      "label": "Credential Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "did_uri",
      "label": "Did Uri",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "issuer",
      "label": "Issuer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "outcome = 'pass'",
      "label": "Outcome = 'Pass'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "presentation_id = null",
      "label": "Presentation Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "purpose = 'verification'",
      "label": "Purpose = 'Verification'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "requested_fields = []",
      "label": "Requested Fields = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_state",
      "label": "Target State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Crosschain Bridge source input context",
      "options": [],
      "required": false,
      "source": "server/routes/crosschainBridge.js"
    }
  ],
  "ai-dynamiclocationaware-agentic-campaign-planner-yerbui-exact-ai": [
    {
      "name": "brief",
      "label": "Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticCampaignPlanner.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticCampaignPlanner.js"
    }
  ],
  "ai-dynamiclocationaware-ai-j615h1-exact-ai": [
    {
      "name": "campaign_id",
      "label": "Campaign Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "custom_prompt",
      "label": "Custom Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "neighborhood_id",
      "label": "Neighborhood Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "truck_id",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-dynamiclocationaware-ai-extra-1evzug-exact-ai": [
    {
      "name": "campaign_id",
      "label": "Campaign Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "headline_id",
      "label": "Headline Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "headline_text",
      "label": "Headline Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "neighborhood_id",
      "label": "Neighborhood Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "rubric",
      "label": "Rubric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "truck_id",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    }
  ],
  "ai-dynamiclocationaware-ai-new-1l6olc-exact-ai": [
    {
      "name": "base_cpm",
      "label": "Base Cpm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "campaign_id",
      "label": "Campaign Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "day_part",
      "label": "Day Part",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "headline",
      "label": "Headline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "holiday",
      "label": "Holiday",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_hours",
      "label": "Horizon Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "hours_per_neighborhood",
      "label": "Hours Per Neighborhood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "neighborhood_id",
      "label": "Neighborhood Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "neighborhood_ids",
      "label": "Neighborhood Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_languages",
      "label": "Target Languages",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "time_window",
      "label": "Time Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "total_budget",
      "label": "Total Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-dynamiclocationaware-campaigns-1u0cl8-exact-ai": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "neighborhood_id",
      "label": "Neighborhood Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "target_demographics",
      "label": "Target Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "target_neighborhoods",
      "label": "Target Neighborhoods",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    }
  ],
  "ai-dynamiclocationaware-source-workflow": [
    {
      "name": "brief",
      "label": "Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticCampaignPlanner.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticCampaignPlanner.js"
    },
    {
      "name": "campaign_id",
      "label": "Campaign Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "custom_prompt",
      "label": "Custom Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "neighborhood_id",
      "label": "Neighborhood Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "truck_id",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "headline_id",
      "label": "Headline Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "headline_text",
      "label": "Headline Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "rubric",
      "label": "Rubric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "base_cpm",
      "label": "Base Cpm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "day_part",
      "label": "Day Part",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "headline",
      "label": "Headline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "holiday",
      "label": "Holiday",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_hours",
      "label": "Horizon Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "hours_per_neighborhood",
      "label": "Hours Per Neighborhood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "neighborhood_ids",
      "label": "Neighborhood Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_languages",
      "label": "Target Languages",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "time_window",
      "label": "Time Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "total_budget",
      "label": "Total Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "target_demographics",
      "label": "Target Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "target_neighborhoods",
      "label": "Target Neighborhoods",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    }
  ],
  "ai-dynamiclocationaware-ai-tools": [
    {
      "name": "brief",
      "label": "Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticCampaignPlanner.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticCampaignPlanner.js"
    },
    {
      "name": "campaign_id",
      "label": "Campaign Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "custom_prompt",
      "label": "Custom Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "neighborhood_id",
      "label": "Neighborhood Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "truck_id",
      "label": "Truck Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "headline_id",
      "label": "Headline Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "headline_text",
      "label": "Headline Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "rubric",
      "label": "Rubric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiExtra.js"
    },
    {
      "name": "base_cpm",
      "label": "Base Cpm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "day_part",
      "label": "Day Part",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "headline",
      "label": "Headline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "holiday",
      "label": "Holiday",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_hours",
      "label": "Horizon Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "hours_per_neighborhood",
      "label": "Hours Per Neighborhood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "neighborhood_ids",
      "label": "Neighborhood Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_languages",
      "label": "Target Languages",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "time_window",
      "label": "Time Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "total_budget",
      "label": "Total Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "target_demographics",
      "label": "Target Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    },
    {
      "name": "target_neighborhoods",
      "label": "Target Neighborhoods",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/campaigns.js"
    }
  ],
  "ai-localization-translation-agency-ai-back-translation-1d2k5r-exact-ai": [
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "sourceText",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "translatedText",
      "label": "Translated Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    }
  ],
  "ai-localization-translation-agency-ai-bias-check-xmk0ay-exact-ai": [
    {
      "name": "guidelines",
      "label": "Guidelines",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    }
  ],
  "ai-localization-translation-agency-ai-brand-voice-1sf6b1-exact-ai": [
    {
      "name": "brandExamples",
      "label": "Brand Examples",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "brandGuidelines",
      "label": "Brand Guidelines",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "contentType",
      "label": "Content Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    }
  ],
  "ai-localization-translation-agency-ai-competitor-1koozx-exact-ai": [
    {
      "name": "competitorContent",
      "label": "Competitor Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "market",
      "label": "Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "yourContent",
      "label": "Your Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    }
  ],
  "ai-localization-translation-agency-ai-cultural-9x7sf0-exact-ai": [
    {
      "name": "contentType",
      "label": "Content Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-cultural.js"
    },
    {
      "name": "sourceculture",
      "label": "Sourceculture",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-cultural.js"
    },
    {
      "name": "targetCulture",
      "label": "Target Culture",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-cultural.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-cultural.js"
    }
  ],
  "ai-localization-translation-agency-ai-doc-compare-1habzq-exact-ai": [
    {
      "name": "comparisonType",
      "label": "Comparison Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-doc-compare.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-doc-compare.js"
    },
    {
      "name": "sourceText",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-doc-compare.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-doc-compare.js"
    },
    {
      "name": "translatedText",
      "label": "Translated Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-doc-compare.js"
    }
  ],
  "ai-localization-translation-agency-ai-generate-quote-srknt0-exact-ai": [
    {
      "name": "projectId",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-generate-quote.js"
    }
  ],
  "ai-localization-translation-agency-ai-glossary-gen-xmnvnb-exact-ai": [
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-glossary-gen.js"
    },
    {
      "name": "existingTerms",
      "label": "Existing Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-glossary-gen.js"
    },
    {
      "name": "referenceText",
      "label": "Reference Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-glossary-gen.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-glossary-gen.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-glossary-gen.js"
    }
  ],
  "ai-localization-translation-agency-ai-grammar-1v04yn-exact-ai": [
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-grammar.js"
    },
    {
      "name": "styleGuide",
      "label": "Style Guide",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-grammar.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-grammar.js"
    }
  ],
  "ai-localization-translation-agency-ai-invoice-analyzer-3sfgia-exact-ai": [
    {
      "name": "invoiceData",
      "label": "Invoice Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "pricingModel",
      "label": "Pricing Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "targetRevenue",
      "label": "Target Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    }
  ],
  "ai-localization-translation-agency-ai-lang-detect-1q46ij-exact-ai": [
    {
      "name": "detectDialect",
      "label": "Detect Dialect",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-lang-detect.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-lang-detect.js"
    }
  ],
  "ai-localization-translation-agency-ai-localize-1yyyyg-exact-ai": [
    {
      "name": "contentType",
      "label": "Content Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-localize.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-localize.js"
    },
    {
      "name": "sourceLocale",
      "label": "Source Locale",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-localize.js"
    },
    {
      "name": "targetLocale",
      "label": "Target Locale",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-localize.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-localize.js"
    }
  ],
  "ai-localization-translation-agency-ai-order-optimizer-qv2sgg-exact-ai": [
    {
      "name": "availableResources",
      "label": "Available Resources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-order-optimizer.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-order-optimizer.js"
    },
    {
      "name": "orders",
      "label": "Orders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-order-optimizer.js"
    }
  ],
  "ai-localization-translation-agency-ai-project-analyzer-fptkc6-exact-ai": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "contentType",
      "label": "Content Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "projectDescription",
      "label": "Project Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "targetLanguages",
      "label": "Target Languages",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "wordCount",
      "label": "Word Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    }
  ],
  "ai-localization-translation-agency-ai-quality-o3ri7p-exact-ai": [
    {
      "name": "qualityFramework",
      "label": "Quality Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-quality.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-quality.js"
    },
    {
      "name": "sourceText",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-quality.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-quality.js"
    },
    {
      "name": "translatedText",
      "label": "Translated Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-quality.js"
    }
  ],
  "ai-localization-translation-agency-ai-readability-1kq4j4-exact-ai": [
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-readability.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-readability.js"
    },
    {
      "name": "targetReadingLevel",
      "label": "Target Reading Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-readability.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-readability.js"
    }
  ],
  "ai-localization-translation-agency-ai-results-1xhz3f-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Results source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-results.js"
    }
  ],
  "ai-localization-translation-agency-ai-sentiment-1p8cm1-exact-ai": [
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-sentiment.js"
    },
    {
      "name": "sourceText",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-sentiment.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-sentiment.js"
    },
    {
      "name": "translatedText",
      "label": "Translated Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-sentiment.js"
    }
  ],
  "ai-localization-translation-agency-ai-seo-9nujq9-exact-ai": [
    {
      "name": "keywords",
      "label": "Keywords",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-seo.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-seo.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-seo.js"
    },
    {
      "name": "targetMarket",
      "label": "Target Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-seo.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-seo.js"
    }
  ],
  "ai-localization-translation-agency-ai-style-transfer-ulxvux-exact-ai": [
    {
      "name": "brandVoice",
      "label": "Brand Voice",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "sourceStyle",
      "label": "Source Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "targetStyle",
      "label": "Target Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    }
  ],
  "ai-localization-translation-agency-ai-subtitles-1dowif-exact-ai": [
    {
      "name": "format",
      "label": "Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "maxCharsPerLine",
      "label": "Max Chars Per Line",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "maxLinesPerSubtitle",
      "label": "Max Lines Per Subtitle",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    }
  ],
  "ai-localization-translation-agency-ai-summarize-10mf3y-exact-ai": [
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "summaryType",
      "label": "Summary Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "targetLength",
      "label": "Target Length",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    }
  ],
  "ai-localization-translation-agency-ai-terminology-g3vdv-exact-ai": [
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-terminology.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-terminology.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-terminology.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-terminology.js"
    }
  ],
  "ai-localization-translation-agency-ai-translate-a2pke6-exact-ai": [
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translate.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translate.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translate.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translate.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translate.js"
    }
  ],
  "ai-localization-translation-agency-ai-translation-memory-1ejgxp-exact-ai": [
    {
      "name": "previousTranslations",
      "label": "Previous Translations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translation-memory.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translation-memory.js"
    },
    {
      "name": "sourceText",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translation-memory.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translation-memory.js"
    }
  ],
  "ai-localization-translation-agency-ai-translator-matcher-1crtn2-exact-ai": [
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    },
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    },
    {
      "name": "projectRequirements",
      "label": "Project Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    },
    {
      "name": "qualityTier",
      "label": "Quality Tier",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    }
  ],
  "ai-localization-translation-agency-gap-ai-dialect-variant-detection-1aejl5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-dialect-variant-detection.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-dialect-variant-detection.js"
    }
  ],
  "ai-localization-translation-agency-gap-ai-post-edit-effort-predictor-1sm7dp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-post-edit-effort-predictor.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-post-edit-effort-predictor.js"
    }
  ],
  "ai-localization-translation-agency-gap-ai-realtime-tm-leverage-uky2ce-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-realtime-tm-leverage.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-realtime-tm-leverage.js"
    }
  ],
  "ai-localization-translation-agency-gap-ai-regulatory-compliance-1a4aqh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-regulatory-compliance.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-regulatory-compliance.js"
    }
  ],
  "ai-localization-translation-agency-ai-history-9gbft8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistory.js"
    }
  ],
  "ai-localization-translation-agency-gap-agentic-amr2uz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agentic source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAgentic.jsx"
    }
  ],
  "ai-localization-translation-agency-gap-ai-dialect-variant-detection-ipop2i-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Dialect Variant Detection source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiDialectVariantDetection.jsx"
    }
  ],
  "ai-localization-translation-agency-gap-ai-post-edit-effort-predictor-hmqdc8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Post Edit Effort Predictor source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiPostEditEffortPredictor.jsx"
    }
  ],
  "ai-localization-translation-agency-gap-ai-realtime-tm-leverage-1sg4xp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Realtime Tm Leverage source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiRealtimeTmLeverage.jsx"
    }
  ],
  "ai-localization-translation-agency-gap-ai-regulatory-compliance-16es81-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Regulatory Compliance source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiRegulatoryCompliance.jsx"
    }
  ],
  "ai-localization-translation-agency-ai-samples-ddba3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Samples source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/aiSamples.js"
    }
  ],
  "ai-localization-translation-agency-source-workflow": [
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "sourceText",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "translatedText",
      "label": "Translated Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "guidelines",
      "label": "Guidelines",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "brandExamples",
      "label": "Brand Examples",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "brandGuidelines",
      "label": "Brand Guidelines",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "contentType",
      "label": "Content Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "competitorContent",
      "label": "Competitor Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "market",
      "label": "Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "yourContent",
      "label": "Your Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "sourceculture",
      "label": "Sourceculture",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-cultural.js"
    },
    {
      "name": "targetCulture",
      "label": "Target Culture",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-cultural.js"
    },
    {
      "name": "comparisonType",
      "label": "Comparison Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-doc-compare.js"
    },
    {
      "name": "projectId",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-generate-quote.js"
    },
    {
      "name": "existingTerms",
      "label": "Existing Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-glossary-gen.js"
    },
    {
      "name": "referenceText",
      "label": "Reference Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-glossary-gen.js"
    },
    {
      "name": "styleGuide",
      "label": "Style Guide",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-grammar.js"
    },
    {
      "name": "invoiceData",
      "label": "Invoice Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "pricingModel",
      "label": "Pricing Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "targetRevenue",
      "label": "Target Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "detectDialect",
      "label": "Detect Dialect",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-lang-detect.js"
    },
    {
      "name": "sourceLocale",
      "label": "Source Locale",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-localize.js"
    },
    {
      "name": "targetLocale",
      "label": "Target Locale",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-localize.js"
    },
    {
      "name": "availableResources",
      "label": "Available Resources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-order-optimizer.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-order-optimizer.js"
    },
    {
      "name": "orders",
      "label": "Orders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-order-optimizer.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "projectDescription",
      "label": "Project Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "targetLanguages",
      "label": "Target Languages",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "wordCount",
      "label": "Word Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "qualityFramework",
      "label": "Quality Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-quality.js"
    },
    {
      "name": "targetReadingLevel",
      "label": "Target Reading Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-readability.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Results source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-results.js"
    },
    {
      "name": "keywords",
      "label": "Keywords",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-seo.js"
    },
    {
      "name": "targetMarket",
      "label": "Target Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-seo.js"
    },
    {
      "name": "brandVoice",
      "label": "Brand Voice",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "sourceStyle",
      "label": "Source Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "targetStyle",
      "label": "Target Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "maxCharsPerLine",
      "label": "Max Chars Per Line",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "maxLinesPerSubtitle",
      "label": "Max Lines Per Subtitle",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "summaryType",
      "label": "Summary Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "targetLength",
      "label": "Target Length",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translate.js"
    },
    {
      "name": "previousTranslations",
      "label": "Previous Translations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translation-memory.js"
    },
    {
      "name": "projectRequirements",
      "label": "Project Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    },
    {
      "name": "qualityTier",
      "label": "Quality Tier",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-dialect-variant-detection.js"
    }
  ],
  "ai-localization-translation-agency-ai-tools": [
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "sourceLanguage",
      "label": "Source Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "sourceText",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "targetLanguage",
      "label": "Target Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "translatedText",
      "label": "Translated Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-back-translation.js"
    },
    {
      "name": "guidelines",
      "label": "Guidelines",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "language",
      "label": "Language",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-bias-check.js"
    },
    {
      "name": "brandExamples",
      "label": "Brand Examples",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "brandGuidelines",
      "label": "Brand Guidelines",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "contentType",
      "label": "Content Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-brand-voice.js"
    },
    {
      "name": "competitorContent",
      "label": "Competitor Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "market",
      "label": "Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "yourContent",
      "label": "Your Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-competitor.js"
    },
    {
      "name": "sourceculture",
      "label": "Sourceculture",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-cultural.js"
    },
    {
      "name": "targetCulture",
      "label": "Target Culture",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-cultural.js"
    },
    {
      "name": "comparisonType",
      "label": "Comparison Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-doc-compare.js"
    },
    {
      "name": "projectId",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-generate-quote.js"
    },
    {
      "name": "existingTerms",
      "label": "Existing Terms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-glossary-gen.js"
    },
    {
      "name": "referenceText",
      "label": "Reference Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-glossary-gen.js"
    },
    {
      "name": "styleGuide",
      "label": "Style Guide",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-grammar.js"
    },
    {
      "name": "invoiceData",
      "label": "Invoice Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "pricingModel",
      "label": "Pricing Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "targetRevenue",
      "label": "Target Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-invoice-analyzer.js"
    },
    {
      "name": "detectDialect",
      "label": "Detect Dialect",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-lang-detect.js"
    },
    {
      "name": "sourceLocale",
      "label": "Source Locale",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-localize.js"
    },
    {
      "name": "targetLocale",
      "label": "Target Locale",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-localize.js"
    },
    {
      "name": "availableResources",
      "label": "Available Resources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-order-optimizer.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-order-optimizer.js"
    },
    {
      "name": "orders",
      "label": "Orders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-order-optimizer.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "projectDescription",
      "label": "Project Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "targetLanguages",
      "label": "Target Languages",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "wordCount",
      "label": "Word Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-project-analyzer.js"
    },
    {
      "name": "qualityFramework",
      "label": "Quality Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-quality.js"
    },
    {
      "name": "targetReadingLevel",
      "label": "Target Reading Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-readability.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Results source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-results.js"
    },
    {
      "name": "keywords",
      "label": "Keywords",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-seo.js"
    },
    {
      "name": "targetMarket",
      "label": "Target Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-seo.js"
    },
    {
      "name": "brandVoice",
      "label": "Brand Voice",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "sourceStyle",
      "label": "Source Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "targetStyle",
      "label": "Target Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-style-transfer.js"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "maxCharsPerLine",
      "label": "Max Chars Per Line",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "maxLinesPerSubtitle",
      "label": "Max Lines Per Subtitle",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-subtitles.js"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "summaryType",
      "label": "Summary Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "targetLength",
      "label": "Target Length",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-summarize.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translate.js"
    },
    {
      "name": "previousTranslations",
      "label": "Previous Translations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translation-memory.js"
    },
    {
      "name": "projectRequirements",
      "label": "Project Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    },
    {
      "name": "qualityTier",
      "label": "Quality Tier",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai-translator-matcher.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-dialect-variant-detection.js"
    }
  ],
  "ai-nutrition-dietitian-assistant-ai-advanced-page-15kg05-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAdvancedPage.js"
    }
  ],
  "ai-nutrition-dietitian-assistant-ai-center-page-lgigm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenterPage.js"
    }
  ],
  "ai-nutrition-dietitian-assistant-ai-history-page-z2n6bj-exact-ai": [
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "20",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    }
  ],
  "ai-nutrition-dietitian-assistant-ai-predictive-page-ua21ve-exact-ai": [
    {
      "name": "activity_level",
      "label": "Activity Level",
      "type": "text",
      "defaultValue": "Moderate",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "calories_target",
      "label": "Calories Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "current_weight_kg",
      "label": "Current Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "7",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "diet_summary",
      "label": "Diet Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "dietary_preferences",
      "label": "Dietary Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "fitness_goal",
      "label": "Fitness Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "food_name",
      "label": "Food Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "weight_loss",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "ingredients",
      "label": "Ingredients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "known_allergens",
      "label": "Known Allergens",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "meals_per_day",
      "label": "Meals Per Day",
      "type": "text",
      "defaultValue": "4",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "target_weight_kg",
      "label": "Target Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "weeks",
      "label": "Weeks",
      "type": "text",
      "defaultValue": "12",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    }
  ],
  "ai-nutrition-dietitian-assistant-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAdvancedPage.js"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "20",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "activity_level",
      "label": "Activity Level",
      "type": "text",
      "defaultValue": "Moderate",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "calories_target",
      "label": "Calories Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "current_weight_kg",
      "label": "Current Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "7",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "diet_summary",
      "label": "Diet Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "dietary_preferences",
      "label": "Dietary Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "fitness_goal",
      "label": "Fitness Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "food_name",
      "label": "Food Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "weight_loss",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "ingredients",
      "label": "Ingredients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "known_allergens",
      "label": "Known Allergens",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "meals_per_day",
      "label": "Meals Per Day",
      "type": "text",
      "defaultValue": "4",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "target_weight_kg",
      "label": "Target Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "weeks",
      "label": "Weeks",
      "type": "text",
      "defaultValue": "12",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    }
  ],
  "ai-nutrition-dietitian-assistant-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Advanced Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAdvancedPage.js"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "20",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistoryPage.js"
    },
    {
      "name": "activity_level",
      "label": "Activity Level",
      "type": "text",
      "defaultValue": "Moderate",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "calories_target",
      "label": "Calories Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "current_weight_kg",
      "label": "Current Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "7",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "diet_summary",
      "label": "Diet Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "dietary_preferences",
      "label": "Dietary Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "fitness_goal",
      "label": "Fitness Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "food_name",
      "label": "Food Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "weight_loss",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "ingredients",
      "label": "Ingredients",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "known_allergens",
      "label": "Known Allergens",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "meals_per_day",
      "label": "Meals Per Day",
      "type": "text",
      "defaultValue": "4",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "target_weight_kg",
      "label": "Target Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    },
    {
      "name": "weeks",
      "label": "Weeks",
      "type": "text",
      "defaultValue": "12",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictivePage.js"
    }
  ],
  "ai-parking-management-platform-ai-j615h1-exact-ai": [
    {
      "name": "condition_notes",
      "label": "Condition Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "facility_id",
      "label": "Facility Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photos",
      "label": "Photos",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "plate_number",
      "label": "Plate Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time_window_hours",
      "label": "Time Window Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "violation_id",
      "label": "Violation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-parking-management-platform-ai-history-9gbft8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHistory.js"
    }
  ],
  "ai-parking-management-platform-ai-predictive-jqtthl-exact-ai": [
    {
      "name": "asset_type",
      "label": "Asset Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "camera_id",
      "label": "Camera Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "compliance_areas",
      "label": "Compliance Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "facility_id",
      "label": "Facility Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "failure_history",
      "label": "Failure History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "incident_count",
      "label": "Incident Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "install_date",
      "label": "Install Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "last_audit_date",
      "label": "Last Audit Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "last_serviced",
      "label": "Last Serviced",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "revenue_anomalies",
      "label": "Revenue Anomalies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "sensor_data",
      "label": "Sensor Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "timestamp",
      "label": "Timestamp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "usage_intensity",
      "label": "Usage Intensity",
      "type": "text",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    }
  ],
  "ai-parking-management-platform-source-workflow": [
    {
      "name": "condition_notes",
      "label": "Condition Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "facility_id",
      "label": "Facility Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photos",
      "label": "Photos",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "plate_number",
      "label": "Plate Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time_window_hours",
      "label": "Time Window Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "violation_id",
      "label": "Violation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "asset_type",
      "label": "Asset Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "camera_id",
      "label": "Camera Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "compliance_areas",
      "label": "Compliance Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "failure_history",
      "label": "Failure History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "incident_count",
      "label": "Incident Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "install_date",
      "label": "Install Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "last_audit_date",
      "label": "Last Audit Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "last_serviced",
      "label": "Last Serviced",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "revenue_anomalies",
      "label": "Revenue Anomalies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "sensor_data",
      "label": "Sensor Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "timestamp",
      "label": "Timestamp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "usage_intensity",
      "label": "Usage Intensity",
      "type": "text",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    }
  ],
  "ai-parking-management-platform-ai-tools": [
    {
      "name": "condition_notes",
      "label": "Condition Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI History source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "facility_id",
      "label": "Facility Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photos",
      "label": "Photos",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "plate_number",
      "label": "Plate Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time_window_hours",
      "label": "Time Window Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "violation_id",
      "label": "Violation Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "asset_type",
      "label": "Asset Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "camera_id",
      "label": "Camera Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "compliance_areas",
      "label": "Compliance Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "failure_history",
      "label": "Failure History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "incident_count",
      "label": "Incident Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "install_date",
      "label": "Install Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "last_audit_date",
      "label": "Last Audit Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "last_serviced",
      "label": "Last Serviced",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "revenue_anomalies",
      "label": "Revenue Anomalies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "sensor_data",
      "label": "Sensor Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "timestamp",
      "label": "Timestamp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    },
    {
      "name": "usage_intensity",
      "label": "Usage Intensity",
      "type": "text",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIPredictive.js"
    }
  ],
  "ai-sales-training-simulator-ai-deal-scorer-16mz5c-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Deal Scorer source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-deal-scorer.js"
    }
  ],
  "ai-sales-training-simulator-ai-j615h1-exact-ai": [
    {
      "name": "buyerPersona",
      "label": "Buyer Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "challenges",
      "label": "Challenges",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "competitor",
      "label": "Competitor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "competitorName",
      "label": "Competitor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deal",
      "label": "Deal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dealContext",
      "label": "Deal Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dealInfo",
      "label": "Deal Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dealStage",
      "label": "Deal Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "emailType",
      "label": "Email Type",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "knownObjections",
      "label": "Known Objections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lastTouches",
      "label": "Last Touches",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "objection",
      "label": "Objection",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "objective",
      "label": "Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ourPosition",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ourProduct",
      "label": "Our Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ownProduct",
      "label": "Own Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "persona",
      "label": "Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "personaId",
      "label": "Persona Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "personaInfo",
      "label": "Persona Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pitchId",
      "label": "Pitch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pitchText",
      "label": "Pitch Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "product",
      "label": "Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "productName",
      "label": "Product Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recipientInfo",
      "label": "Recipient Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "repName",
      "label": "Rep Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scriptType",
      "label": "Script Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "situation",
      "label": "Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "stakeholders",
      "label": "Stakeholders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "targetRole",
      "label": "Target Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "theirPosition",
      "label": "Their Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "userMessage",
      "label": "User Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-sales-training-simulator-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Deal Scorer source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-deal-scorer.js"
    },
    {
      "name": "buyerPersona",
      "label": "Buyer Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "challenges",
      "label": "Challenges",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "competitor",
      "label": "Competitor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "competitorName",
      "label": "Competitor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deal",
      "label": "Deal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dealContext",
      "label": "Deal Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dealInfo",
      "label": "Deal Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dealStage",
      "label": "Deal Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "emailType",
      "label": "Email Type",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "knownObjections",
      "label": "Known Objections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lastTouches",
      "label": "Last Touches",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "objection",
      "label": "Objection",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "objective",
      "label": "Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ourPosition",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ourProduct",
      "label": "Our Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ownProduct",
      "label": "Own Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "persona",
      "label": "Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "personaId",
      "label": "Persona Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "personaInfo",
      "label": "Persona Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pitchId",
      "label": "Pitch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pitchText",
      "label": "Pitch Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "product",
      "label": "Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "productName",
      "label": "Product Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recipientInfo",
      "label": "Recipient Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "repName",
      "label": "Rep Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scriptType",
      "label": "Script Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "situation",
      "label": "Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "stakeholders",
      "label": "Stakeholders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "targetRole",
      "label": "Target Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "theirPosition",
      "label": "Their Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "userMessage",
      "label": "User Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-sales-training-simulator-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Deal Scorer source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-deal-scorer.js"
    },
    {
      "name": "buyerPersona",
      "label": "Buyer Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "challenges",
      "label": "Challenges",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "competitor",
      "label": "Competitor",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "competitorName",
      "label": "Competitor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deal",
      "label": "Deal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dealContext",
      "label": "Deal Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dealInfo",
      "label": "Deal Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dealStage",
      "label": "Deal Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "emailType",
      "label": "Email Type",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "knownObjections",
      "label": "Known Objections",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lastTouches",
      "label": "Last Touches",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "objection",
      "label": "Objection",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "objective",
      "label": "Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ourPosition",
      "label": "Our Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ourProduct",
      "label": "Our Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ownProduct",
      "label": "Own Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "persona",
      "label": "Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "personaId",
      "label": "Persona Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "personaInfo",
      "label": "Persona Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pitchId",
      "label": "Pitch Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pitchText",
      "label": "Pitch Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "product",
      "label": "Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "productName",
      "label": "Product Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recipientInfo",
      "label": "Recipient Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "repName",
      "label": "Rep Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scriptType",
      "label": "Script Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "situation",
      "label": "Situation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "stakeholders",
      "label": "Stakeholders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "targetRole",
      "label": "Target Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "theirPosition",
      "label": "Their Position",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "userMessage",
      "label": "User Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-self-storage-facility-manager-ai-churn-prevention-hns0dt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Churn Prevention source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-churn-prevention.js"
    }
  ],
  "ai-self-storage-facility-manager-ai-j615h1-exact-ai": [
    {
      "name": "budget_max",
      "label": "Budget Max",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focus_zones",
      "label": "Focus Zones",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hours_back",
      "label": "Hours Back",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "include_resolved",
      "label": "Include Resolved",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "item_categories",
      "label": "Item Categories",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "items_description",
      "label": "Items Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lifestyle_notes",
      "label": "Lifestyle Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-self-storage-facility-manager-gap-no-demand-forecasting-ai-12skpy-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-demand-forecasting-ai.js"
    }
  ],
  "ai-self-storage-facility-manager-waitlist-1tvkq6-exact-ai": [
    {
      "name": "climate_controlled",
      "label": "Climate Controlled",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "desired_size_sqft",
      "label": "Desired Size Sqft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "desired_unit_type",
      "label": "Desired Unit Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "first_name",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "last_name",
      "label": "Last Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "max_budget",
      "label": "Max Budget",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "notified_date",
      "label": "Notified Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    }
  ],
  "ai-self-storage-facility-manager-gap-no-demand-forecasting-ai-605h4t-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Demand Forecasting AI source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoDemandForecastingAi.jsx"
    }
  ],
  "ai-self-storage-facility-manager-waitlist-page-84my2k-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Waitlist Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/WaitlistPage.js"
    }
  ],
  "ai-self-storage-facility-manager-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Churn Prevention source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-churn-prevention.js"
    },
    {
      "name": "budget_max",
      "label": "Budget Max",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focus_zones",
      "label": "Focus Zones",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hours_back",
      "label": "Hours Back",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "include_resolved",
      "label": "Include Resolved",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "item_categories",
      "label": "Item Categories",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "items_description",
      "label": "Items Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lifestyle_notes",
      "label": "Lifestyle Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-demand-forecasting-ai.js"
    },
    {
      "name": "climate_controlled",
      "label": "Climate Controlled",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "desired_size_sqft",
      "label": "Desired Size Sqft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "desired_unit_type",
      "label": "Desired Unit Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "first_name",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "last_name",
      "label": "Last Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "max_budget",
      "label": "Max Budget",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "notified_date",
      "label": "Notified Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    }
  ],
  "ai-self-storage-facility-manager-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Churn Prevention source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-churn-prevention.js"
    },
    {
      "name": "budget_max",
      "label": "Budget Max",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focus_zones",
      "label": "Focus Zones",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hours_back",
      "label": "Hours Back",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "include_resolved",
      "label": "Include Resolved",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "item_categories",
      "label": "Item Categories",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "items_description",
      "label": "Items Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lifestyle_notes",
      "label": "Lifestyle Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-demand-forecasting-ai.js"
    },
    {
      "name": "climate_controlled",
      "label": "Climate Controlled",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "desired_size_sqft",
      "label": "Desired Size Sqft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "desired_unit_type",
      "label": "Desired Unit Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "first_name",
      "label": "First Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "last_name",
      "label": "Last Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "max_budget",
      "label": "Max Budget",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "notified_date",
      "label": "Notified Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "phone",
      "label": "Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/waitlist.js"
    }
  ],
  "aism-schatbot-ai-benefits-discovery-1b3yhi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Benefits Discovery source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-benefits-discovery.js"
    }
  ],
  "aism-schatbot-ai-j615h1-exact-ai": [
    {
      "name": "applicantInfo",
      "label": "Applicant Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "assets",
      "label": "Assets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "caseDetails",
      "label": "Case Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "changeType",
      "label": "Change Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "childCare",
      "label": "Child Care",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "conversationHistory",
      "label": "Conversation History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "currentProgram",
      "label": "Current Program",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dateRange",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "denialReason",
      "label": "Denial Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dependents",
      "label": "Dependents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "documents",
      "label": "Documents",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "effectiveDate",
      "label": "Effective Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employmentStatus",
      "label": "Employment Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "history",
      "label": "History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "householdContext",
      "label": "Household Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "householdSize",
      "label": "Household Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "housingStatus",
      "label": "Housing Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "incomeType",
      "label": "Income Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "medicalExpenses",
      "label": "Medical Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "medicalNeeds",
      "label": "Medical Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "monthlyIncome",
      "label": "Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "newMonthlyIncome",
      "label": "New Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "oldMonthlyIncome",
      "label": "Old Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "programType",
      "label": "Program Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "rent",
      "label": "Rent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reportType",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "serviceType",
      "label": "Service Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "supportingFacts",
      "label": "Supporting Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transportation",
      "label": "Transportation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "utilities",
      "label": "Utilities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "aism-schatbot-gap-no-incomeverificationguide-doc-checklist-ai-1ajjnk-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-incomeverificationguide-doc-checklist-ai.js"
    }
  ],
  "aism-schatbot-gap-no-multilingual-translation-ai-4pq3tg-exact-ai": [
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-multilingual-translation-ai.js"
    }
  ],
  "aism-schatbot-ai-assistant-1ov046-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Assistant source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIAssistant.js"
    }
  ],
  "aism-schatbot-gap-no-incomeverificationguide-doc-checklist-ai-anniz1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Incomeverificationguide Doc Checklist AI source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoIncomeverificationguideDocChecklistAi.jsx"
    }
  ],
  "aism-schatbot-gap-no-multilingual-translation-ai-14hm6g-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Multilingual Translation AI source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoMultilingualTranslationAi.jsx"
    }
  ],
  "aism-schatbot-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Benefits Discovery source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-benefits-discovery.js"
    },
    {
      "name": "applicantInfo",
      "label": "Applicant Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "assets",
      "label": "Assets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "caseDetails",
      "label": "Case Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "changeType",
      "label": "Change Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "childCare",
      "label": "Child Care",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "conversationHistory",
      "label": "Conversation History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "currentProgram",
      "label": "Current Program",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dateRange",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "denialReason",
      "label": "Denial Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dependents",
      "label": "Dependents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "documents",
      "label": "Documents",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "effectiveDate",
      "label": "Effective Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employmentStatus",
      "label": "Employment Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "history",
      "label": "History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "householdContext",
      "label": "Household Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "householdSize",
      "label": "Household Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "housingStatus",
      "label": "Housing Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "incomeType",
      "label": "Income Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "medicalExpenses",
      "label": "Medical Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "medicalNeeds",
      "label": "Medical Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "monthlyIncome",
      "label": "Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "newMonthlyIncome",
      "label": "New Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "oldMonthlyIncome",
      "label": "Old Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "programType",
      "label": "Program Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "rent",
      "label": "Rent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reportType",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "serviceType",
      "label": "Service Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "supportingFacts",
      "label": "Supporting Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transportation",
      "label": "Transportation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "utilities",
      "label": "Utilities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-incomeverificationguide-doc-checklist-ai.js"
    }
  ],
  "aism-schatbot-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Benefits Discovery source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-benefits-discovery.js"
    },
    {
      "name": "applicantInfo",
      "label": "Applicant Info",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "assets",
      "label": "Assets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "caseDetails",
      "label": "Case Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "changeType",
      "label": "Change Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "childCare",
      "label": "Child Care",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "conversationHistory",
      "label": "Conversation History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "currentProgram",
      "label": "Current Program",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "data",
      "label": "Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dateRange",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "denialReason",
      "label": "Denial Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dependents",
      "label": "Dependents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "documents",
      "label": "Documents",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "effectiveDate",
      "label": "Effective Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employmentStatus",
      "label": "Employment Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "history",
      "label": "History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "householdContext",
      "label": "Household Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "householdSize",
      "label": "Household Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "housingStatus",
      "label": "Housing Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "incomeType",
      "label": "Income Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "medicalExpenses",
      "label": "Medical Expenses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "medicalNeeds",
      "label": "Medical Needs",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "monthlyIncome",
      "label": "Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "newMonthlyIncome",
      "label": "New Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "oldMonthlyIncome",
      "label": "Old Monthly Income",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "programType",
      "label": "Program Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "rent",
      "label": "Rent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "reportType",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "serviceType",
      "label": "Service Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "supportingFacts",
      "label": "Supporting Facts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transportation",
      "label": "Transportation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "urgency",
      "label": "Urgency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "utilities",
      "label": "Utilities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-incomeverificationguide-doc-checklist-ai.js"
    }
  ],
  "ai-social-proof-generator-cf-authenticity-scoring-to-detect-ai-generated-vs-17i5z9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Authenticity Scoring To Detect AI Generated Vs source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAuthenticityScoringToDetectAiGeneratedVs.jsx"
    }
  ],
  "ai-social-proof-generator-gap-no-ai-driven-customer-segmentation-for-targeted-1gqvw9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Customer Segmentation For Targeted source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoAiDrivenCustomerSegmentationForTargeted.jsx"
    }
  ],
  "ai-social-proof-generator-outreach-campaigns-1dysid-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Outreach Campaigns source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/OutreachCampaigns.jsx"
    }
  ],
  "ai-social-proof-generator-ai-5cuwes-exact-ai": [
    {
      "name": "author_context",
      "label": "Author Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "challenge",
      "label": "Challenge",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "chart_type",
      "label": "Chart Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "criteria",
      "label": "Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customer_name",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customerIds",
      "label": "Customer Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_quote",
      "label": "Original Quote",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_review",
      "label": "Original Review",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_text",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_transcript",
      "label": "Original Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "personas",
      "label": "Personas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "product_used",
      "label": "Product Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "relationship_context",
      "label": "Relationship Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "results",
      "label": "Results",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "role",
      "label": "Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "solution",
      "label": "Solution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_name",
      "label": "Source Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_text",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_type",
      "label": "Source Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_sentiment",
      "label": "Target Sentiment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "testimonial_id",
      "label": "Testimonial Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "use_case",
      "label": "Use Case",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "video_url",
      "label": "Video Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "widget_type",
      "label": "Widget Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-social-proof-generator-gap-no-ai-driven-customer-segmentation-for-targeted-testimonial-selection-86rk7b-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Customer Segmentation For Targeted Testimonial Selection source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gapNoAiDrivenCustomerSegmentationForTargetedTestimonialSelection.js"
    }
  ],
  "ai-social-proof-generator-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Authenticity Scoring To Detect AI Generated Vs source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAuthenticityScoringToDetectAiGeneratedVs.jsx"
    },
    {
      "name": "author_context",
      "label": "Author Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "challenge",
      "label": "Challenge",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "chart_type",
      "label": "Chart Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "criteria",
      "label": "Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customer_name",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customerIds",
      "label": "Customer Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_quote",
      "label": "Original Quote",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_review",
      "label": "Original Review",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_text",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_transcript",
      "label": "Original Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "personas",
      "label": "Personas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "product_used",
      "label": "Product Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "relationship_context",
      "label": "Relationship Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "results",
      "label": "Results",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "role",
      "label": "Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "solution",
      "label": "Solution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_name",
      "label": "Source Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_text",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_type",
      "label": "Source Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_sentiment",
      "label": "Target Sentiment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "testimonial_id",
      "label": "Testimonial Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "use_case",
      "label": "Use Case",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "video_url",
      "label": "Video Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "widget_type",
      "label": "Widget Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-social-proof-generator-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Authenticity Scoring To Detect AI Generated Vs source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfAuthenticityScoringToDetectAiGeneratedVs.jsx"
    },
    {
      "name": "author_context",
      "label": "Author Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "challenge",
      "label": "Challenge",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "chart_type",
      "label": "Chart Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "criteria",
      "label": "Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customer_name",
      "label": "Customer Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customerIds",
      "label": "Customer Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "metric_name",
      "label": "Metric Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_quote",
      "label": "Original Quote",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_review",
      "label": "Original Review",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_text",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "original_transcript",
      "label": "Original Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "personas",
      "label": "Personas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "product_used",
      "label": "Product Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "relationship_context",
      "label": "Relationship Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "results",
      "label": "Results",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "role",
      "label": "Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "solution",
      "label": "Solution",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_name",
      "label": "Source Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_text",
      "label": "Source Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "source_type",
      "label": "Source Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_sentiment",
      "label": "Target Sentiment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "testimonial_id",
      "label": "Testimonial Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "use_case",
      "label": "Use Case",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "video_url",
      "label": "Video Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "widget_type",
      "label": "Widget Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-tattoo-body-art-studio-manager-ai-j615h1-exact-ai": [
    {
      "name": "aftercare_compliance",
      "label": "Aftercare Compliance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "allergies",
      "label": "Allergies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "appointment_date",
      "label": "Appointment Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "appointment_time",
      "label": "Appointment Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "artist_id",
      "label": "Artist Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "artist_name",
      "label": "Artist Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "artistId",
      "label": "Artist Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_history",
      "label": "Client History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_preferences",
      "label": "Client Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_aftercare",
      "label": "Current Aftercare",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "custom_details",
      "label": "Custom Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_since_session",
      "label": "Days Since Session",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "design_description",
      "label": "Design Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "desired_style",
      "label": "Desired Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "environmental_factors",
      "label": "Environmental Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hygiene_compliance",
      "label": "Hygiene Compliance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "immunocompromised",
      "label": "Immunocompromised",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "medical_conditions",
      "label": "Medical Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message_type",
      "label": "Message Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photo_base64",
      "label": "Photo Base64",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photo_url",
      "label": "Photo Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "placement",
      "label": "Placement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "preferred_date",
      "label": "Preferred Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prior_healing_history",
      "label": "Prior Healing History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "service_type",
      "label": "Service Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "signs_observed",
      "label": "Signs Observed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "site_image_description",
      "label": "Site Image Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "size",
      "label": "Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "size_inches",
      "label": "Size Inches",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "skin_type",
      "label": "Skin Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "smoker",
      "label": "Smoker",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "special_considerations",
      "label": "Special Considerations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sun_exposure",
      "label": "Sun Exposure",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weeksAhead",
      "label": "Weeks Ahead",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "works",
      "label": "Works",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-tattoo-body-art-studio-manager-gap-no-ai-driven-portfolio-style-classification-1m2db7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Portfolio Style Classification source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gapNoAiDrivenPortfolioStyleClassification.js"
    }
  ],
  "ai-tattoo-body-art-studio-manager-gap-no-ai-infection-risk-scoring-v6i7mf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Infection Risk Scoring source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gapNoAiInfectionRiskScoring.js"
    }
  ],
  "ai-tattoo-body-art-studio-manager-gap-no-sms-email-reminder-infrastructure-ju9yxu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Sms Email Reminder Infrastructure source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gapNoSmsEmailReminderInfrastructure.js"
    }
  ],
  "ai-tattoo-body-art-studio-manager-gap-no-ai-driven-portfolio-style-classification-1mk033-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Portfolio Style Classification source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoAiDrivenPortfolioStyleClassification.jsx"
    }
  ],
  "ai-tattoo-body-art-studio-manager-gap-no-ai-infection-risk-scoring-1tpeg4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Infection Risk Scoring source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoAiInfectionRiskScoring.jsx"
    }
  ],
  "ai-tattoo-body-art-studio-manager-gap-no-sms-email-reminder-infrastructure-1vaq4s-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Sms Email Reminder Infrastructure source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoSmsEmailReminderInfrastructure.jsx"
    }
  ],
  "ai-tattoo-body-art-studio-manager-source-workflow": [
    {
      "name": "aftercare_compliance",
      "label": "Aftercare Compliance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "allergies",
      "label": "Allergies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "appointment_date",
      "label": "Appointment Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "appointment_time",
      "label": "Appointment Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "artist_id",
      "label": "Artist Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "artist_name",
      "label": "Artist Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "artistId",
      "label": "Artist Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_history",
      "label": "Client History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_preferences",
      "label": "Client Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_aftercare",
      "label": "Current Aftercare",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "custom_details",
      "label": "Custom Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_since_session",
      "label": "Days Since Session",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "design_description",
      "label": "Design Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "desired_style",
      "label": "Desired Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "environmental_factors",
      "label": "Environmental Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hygiene_compliance",
      "label": "Hygiene Compliance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "immunocompromised",
      "label": "Immunocompromised",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "medical_conditions",
      "label": "Medical Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message_type",
      "label": "Message Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photo_base64",
      "label": "Photo Base64",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photo_url",
      "label": "Photo Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "placement",
      "label": "Placement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "preferred_date",
      "label": "Preferred Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prior_healing_history",
      "label": "Prior Healing History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "service_type",
      "label": "Service Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "signs_observed",
      "label": "Signs Observed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "site_image_description",
      "label": "Site Image Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "size",
      "label": "Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "size_inches",
      "label": "Size Inches",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "skin_type",
      "label": "Skin Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "smoker",
      "label": "Smoker",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "special_considerations",
      "label": "Special Considerations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sun_exposure",
      "label": "Sun Exposure",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weeksAhead",
      "label": "Weeks Ahead",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "works",
      "label": "Works",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Portfolio Style Classification source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gapNoAiDrivenPortfolioStyleClassification.js"
    }
  ],
  "ai-tattoo-body-art-studio-manager-ai-tools": [
    {
      "name": "aftercare_compliance",
      "label": "Aftercare Compliance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "allergies",
      "label": "Allergies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "appointment_date",
      "label": "Appointment Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "appointment_time",
      "label": "Appointment Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "artist_id",
      "label": "Artist Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "artist_name",
      "label": "Artist Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "artistId",
      "label": "Artist Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_history",
      "label": "Client History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_name",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "client_preferences",
      "label": "Client Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_aftercare",
      "label": "Current Aftercare",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "custom_details",
      "label": "Custom Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_since_session",
      "label": "Days Since Session",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "design_description",
      "label": "Design Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "desired_style",
      "label": "Desired Style",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "environmental_factors",
      "label": "Environmental Factors",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hygiene_compliance",
      "label": "Hygiene Compliance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "immunocompromised",
      "label": "Immunocompromised",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "medical_conditions",
      "label": "Medical Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message_type",
      "label": "Message Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photo_base64",
      "label": "Photo Base64",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "photo_url",
      "label": "Photo Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "placement",
      "label": "Placement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "preferred_date",
      "label": "Preferred Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prior_healing_history",
      "label": "Prior Healing History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "service_type",
      "label": "Service Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "signs_observed",
      "label": "Signs Observed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "site_image_description",
      "label": "Site Image Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "size",
      "label": "Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "size_inches",
      "label": "Size Inches",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "skin_type",
      "label": "Skin Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "smoker",
      "label": "Smoker",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "special_considerations",
      "label": "Special Considerations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sun_exposure",
      "label": "Sun Exposure",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weeksAhead",
      "label": "Weeks Ahead",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "works",
      "label": "Works",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Driven Portfolio Style Classification source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gapNoAiDrivenPortfolioStyleClassification.js"
    }
  ],
  "cash-flow-ai-bill-pay-agent-gap-ai-1asvlp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Bill Pay Agent Gap AI source input context",
      "options": [],
      "required": false,
      "source": "src/pages/Batch09/AiBillPayAgentGapAi.jsx"
    }
  ],
  "cash-flow-ai-invoice-ocr-gap-ai-v2fn0r-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Invoice Ocr Gap AI source input context",
      "options": [],
      "required": false,
      "source": "src/pages/Batch09/AiInvoiceOcrGapAi.jsx"
    }
  ],
  "cash-flow-ai-runway-scenario-planner-gap-ai-18qsca-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Runway Scenario Planner Gap AI source input context",
      "options": [],
      "required": false,
      "source": "src/pages/Batch09/AiRunwayScenarioPlannerGapAi.jsx"
    }
  ],
  "cash-flow-bank-feed-integration-plaid-gap-non-840lk1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Bank Feed Integration Plaid Gap Non source input context",
      "options": [],
      "required": false,
      "source": "src/pages/Batch09/BankFeedIntegrationPlaidGapNon.jsx"
    }
  ],
  "cash-flow-ai-z7i39h-exact-ai": [
    {
      "name": "baseline_window = 30",
      "label": "Baseline Window = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    },
    {
      "name": "currency = 'USD'",
      "label": "Currency = 'USD'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    },
    {
      "name": "horizon_days = 30",
      "label": "Horizon Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    },
    {
      "name": "transactions = []",
      "label": "Transactions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    }
  ],
  "cash-flow-batch09-gap-ai-dspj3a-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Batch09 Gap AI source input context",
      "options": [],
      "required": false,
      "source": "src/api/routes/batch09GapAi.js"
    }
  ],
  "cash-flow-batch09-gap-nonai-1kf3vj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Batch09 Gap Nonai source input context",
      "options": [],
      "required": false,
      "source": "src/api/routes/batch09GapNonai.js"
    }
  ],
  "cash-flow-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Bill Pay Agent Gap AI source input context",
      "options": [],
      "required": false,
      "source": "src/pages/Batch09/AiBillPayAgentGapAi.jsx"
    },
    {
      "name": "baseline_window = 30",
      "label": "Baseline Window = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    },
    {
      "name": "currency = 'USD'",
      "label": "Currency = 'USD'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    },
    {
      "name": "horizon_days = 30",
      "label": "Horizon Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    },
    {
      "name": "transactions = []",
      "label": "Transactions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    }
  ],
  "cash-flow-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Bill Pay Agent Gap AI source input context",
      "options": [],
      "required": false,
      "source": "src/pages/Batch09/AiBillPayAgentGapAi.jsx"
    },
    {
      "name": "baseline_window = 30",
      "label": "Baseline Window = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    },
    {
      "name": "currency = 'USD'",
      "label": "Currency = 'USD'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    },
    {
      "name": "horizon_days = 30",
      "label": "Horizon Days = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    },
    {
      "name": "transactions = []",
      "label": "Transactions = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/api/routes/ai.js"
    }
  ],
  "salesforce-route-1hvux5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/_prompts/route.ts"
    }
  ],
  "salesforce-page-1edewg-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "app/verify-email/page.tsx"
    }
  ],
  "salesforce-page-177n2q-exact-ai": [
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "completedJobs",
      "label": "Completed Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "draftJobs",
      "label": "Draft Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "recipientType",
      "label": "Recipient Type",
      "type": "text",
      "defaultValue": "Lead",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "scheduledAt",
      "label": "Scheduled At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "scheduledJobs",
      "label": "Scheduled Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalClicked",
      "label": "Total Clicked",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalJobs",
      "label": "Total Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalOpened",
      "label": "Total Opened",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalSent",
      "label": "Total Sent",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    }
  ],
  "salesforce-page-10bj9s-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "app/maintenance-plans/page.tsx"
    }
  ],
  "salesforce-page-l4zrqk-exact-ai": [
    {
      "name": "bccAddress",
      "label": "Bcc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "campaignId",
      "label": "Campaign Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "ccAddress",
      "label": "Cc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "to",
      "label": "To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "toAddress",
      "label": "To Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    }
  ],
  "salesforce-page-1a5zyv-exact-ai": [
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "EMAIL",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "geo",
      "label": "Geo",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "icp",
      "label": "Icp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "offer",
      "label": "Offer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "DRAFT",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "targetPersona",
      "label": "Target Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "targetRegions",
      "label": "Target Regions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "Professional",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    }
  ],
  "salesforce-page-1vpsek-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "app/campaigns/[id]/page.tsx"
    }
  ],
  "salesforce-page-i69e2o-exact-ai": [
    {
      "name": "influencePercent",
      "label": "Influence Percent",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaign-influence/page.tsx"
    },
    {
      "name": "isPrimary",
      "label": "Is Primary",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaign-influence/page.tsx"
    }
  ],
  "salesforce-route-1xoo14-exact-ai": [
    {
      "name": "...updateData",
      "label": "...Update Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "syncDirection",
      "label": "Sync Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "syncFolders",
      "label": "Sync Folders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    }
  ],
  "salesforce-route-sp599i-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/seed-emails/route.ts"
    }
  ],
  "salesforce-route-1t1g5b-exact-ai": [
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "skillRequirements",
      "label": "Skill Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "territoryId",
      "label": "Territory Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "workOrderId",
      "label": "Work Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    }
  ],
  "salesforce-route-18ftsl-exact-ai": [
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/ai-optimize/route.ts"
    },
    {
      "name": "territoryId",
      "label": "Territory Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/ai-optimize/route.ts"
    }
  ],
  "salesforce-route-1f21sd-exact-ai": [
    {
      "name": "workOrderId",
      "label": "Work Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/ai-dispatch/route.ts"
    }
  ],
  "salesforce-route-11u3b0-exact-ai": [
    {
      "name": "dateRange",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/ai-capacity/route.ts"
    },
    {
      "name": "territoryId",
      "label": "Territory Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/ai-capacity/route.ts"
    }
  ],
  "salesforce-route-1xjo51-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "filterCriteria",
      "label": "Filter Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "recipientIds",
      "label": "Recipient Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "recipientType",
      "label": "Recipient Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "scheduledAt",
      "label": "Scheduled At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    }
  ],
  "salesforce-route-nn6fca-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/[id]/route.ts"
    }
  ],
  "salesforce-route-udg2ab-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/maintenance-plans/route.ts"
    }
  ],
  "salesforce-route-1grz9h-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/maintenance-plans/[id]/route.ts"
    }
  ],
  "salesforce-route-ziuwak-exact-ai": [
    {
      "name": "bccAddress",
      "label": "Bcc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "ccAddress",
      "label": "Cc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "scheduledAt",
      "label": "Scheduled At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "toAddress",
      "label": "To Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "variables",
      "label": "Variables",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    }
  ],
  "salesforce-route-ywhxpr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/emails/send/route.ts"
    }
  ],
  "salesforce-route-curorc-exact-ai": [
    {
      "name": "bccAddress",
      "label": "Bcc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "bouncedAt",
      "label": "Bounced At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "ccAddress",
      "label": "Cc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "clickedAt",
      "label": "Clicked At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "openedAt",
      "label": "Opened At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "scheduledAt",
      "label": "Scheduled At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "sentAt",
      "label": "Sent At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "toAddress",
      "label": "To Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    }
  ],
  "salesforce-route-12dtan-exact-ai": [
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/route.ts"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/route.ts"
    },
    {
      "name": "isActive",
      "label": "Is Active",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/route.ts"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/route.ts"
    }
  ],
  "salesforce-route-1i30jm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/[id]/route.ts"
    }
  ],
  "salesforce-route-ns7qzi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/cron/send-scheduled-emails/route.ts"
    }
  ],
  "salesforce-route-9t9m3z-exact-ai": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    },
    {
      "name": "leadId",
      "label": "Lead Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    },
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    }
  ],
  "salesforce-route-39uiry-exact-ai": [
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/route.ts"
    },
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/route.ts"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/route.ts"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/route.ts"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/route.ts"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/route.ts"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/route.ts"
    },
    {
      "name": "targetPersona",
      "label": "Target Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/route.ts"
    },
    {
      "name": "targetRegions",
      "label": "Target Regions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/route.ts"
    }
  ],
  "salesforce-route-1flwzz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/campaigns/[id]/route.ts"
    }
  ],
  "salesforce-route-1m2qu5-exact-ai": [
    {
      "name": "campaignId",
      "label": "Campaign Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaign-influence/route.ts"
    },
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaign-influence/route.ts"
    },
    {
      "name": "influencePercent",
      "label": "Influence Percent",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaign-influence/route.ts"
    },
    {
      "name": "isPrimary",
      "label": "Is Primary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaign-influence/route.ts"
    },
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaign-influence/route.ts"
    }
  ],
  "salesforce-route-1od35t-exact-ai": [
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaign-influence/attribution/route.ts"
    },
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaign-influence/attribution/route.ts"
    }
  ],
  "salesforce-route-1k5qrt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/auth/verify-email/route.ts"
    }
  ],
  "salesforce-route-11jhk8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/usage/route.ts"
    }
  ],
  "salesforce-route-1pjksb-exact-ai": [
    {
      "name": "audienceType",
      "label": "Audience Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "campaignType",
      "label": "Campaign Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "historicalData",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "timezone",
      "label": "Timezone",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    }
  ],
  "salesforce-route-1e0qdo-exact-ai": [
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/search/route.ts"
    }
  ],
  "salesforce-route-1xgpta-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/results/route.ts"
    }
  ],
  "salesforce-route-1aev19-exact-ai": [
    {
      "name": "campaignName",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "periodEnd",
      "label": "Period End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "periodStart",
      "label": "Period Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    }
  ],
  "salesforce-route-davap6-exact-ai": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/recommend-articles/route.ts"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/recommend-articles/route.ts"
    }
  ],
  "salesforce-route-1245iv-exact-ai": [
    {
      "name": "corpus",
      "label": "Corpus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/rag/search/route.ts"
    }
  ],
  "salesforce-route-13x8ym-exact-ai": [
    {
      "name": "leadId",
      "label": "Lead Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/predict-lead-score/route.ts"
    }
  ],
  "salesforce-route-9nyi15-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/playbook/route.ts"
    }
  ],
  "salesforce-route-1697lj-exact-ai": [
    {
      "name": "campaignBrief",
      "label": "Campaign Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadCompany",
      "label": "Lead Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadName",
      "label": "Lead Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadPersona",
      "label": "Lead Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadTitle",
      "label": "Lead Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    }
  ],
  "salesforce-route-dcgvss-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/opportunity-score/[id]/route.ts"
    }
  ],
  "salesforce-route-yuq50d-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/next-best-action/route.ts"
    }
  ],
  "salesforce-route-4hbvs9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-score/[id]/route.ts"
    }
  ],
  "salesforce-route-xkzqhm-exact-ai": [
    {
      "name": "leadId",
      "label": "Lead Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-qualify/route.ts"
    }
  ],
  "salesforce-route-1s8evf-exact-ai": [
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "fullName",
      "label": "Full Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "linkedinUrl",
      "label": "Linkedin Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "website",
      "label": "Website",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    }
  ],
  "salesforce-route-vuvaa6-exact-ai": [
    {
      "name": "campaigns",
      "label": "Campaigns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/kpi-insights/route.ts"
    },
    {
      "name": "funnelMetrics",
      "label": "Funnel Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/kpi-insights/route.ts"
    }
  ],
  "salesforce-route-1m5tr0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/insights/route.ts"
    }
  ],
  "salesforce-route-7kkgow-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/insights/[id]/dismiss/route.ts"
    }
  ],
  "salesforce-route-1ed966-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/generate-forecast/route.ts"
    }
  ],
  "salesforce-route-s1qv9n-exact-ai": [
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/forecast-opportunity/route.ts"
    }
  ],
  "salesforce-route-1i8gao-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/forecast-ensemble/route.ts"
    }
  ],
  "salesforce-route-cu8yme-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/field-lineage/route.ts"
    }
  ],
  "salesforce-route-1uuxdx-exact-ai": [
    {
      "name": "emailId",
      "label": "Email Id",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/engagement-score/route.ts"
    },
    {
      "name": "recipientEmail",
      "label": "Recipient Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/engagement-score/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/engagement-score/route.ts"
    }
  ],
  "salesforce-route-z3pv7z-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/embed/route.ts"
    }
  ],
  "salesforce-route-l2fyq8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/email-insights/route.ts"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/email-insights/route.ts"
    },
    {
      "name": "recipientId",
      "label": "Recipient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/email-insights/route.ts"
    },
    {
      "name": "recipientType",
      "label": "Recipient Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/email-insights/route.ts"
    }
  ],
  "salesforce-route-r2ghm3-exact-ai": [
    {
      "name": "callId",
      "label": "Call Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "opportunityContext",
      "label": "Opportunity Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "speaker",
      "label": "Speaker",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "transcriptWindow",
      "label": "Transcript Window",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    }
  ],
  "salesforce-route-xylbbl-exact-ai": [
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-insights/route.ts"
    }
  ],
  "salesforce-route-6k8rs5-exact-ai": [
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/classify-case/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/classify-case/route.ts"
    }
  ],
  "salesforce-route-1gad7w-exact-ai": [
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/chat/route.ts"
    }
  ],
  "salesforce-route-1bh15o-exact-ai": [
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/campaign-brief/route.ts"
    },
    {
      "name": "geo",
      "label": "Geo",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/campaign-brief/route.ts"
    },
    {
      "name": "icp",
      "label": "Icp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/campaign-brief/route.ts"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/campaign-brief/route.ts"
    },
    {
      "name": "offer",
      "label": "Offer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/campaign-brief/route.ts"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/campaign-brief/route.ts"
    }
  ],
  "salesforce-route-8lm5z1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/agent/route.ts"
    }
  ],
  "salesforce-route-134mqi-exact-ai": [
    {
      "name": "activityType",
      "label": "Activity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-summary/route.ts"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-summary/route.ts"
    }
  ],
  "salesforce-route-1mi33e-exact-ai": [
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-capture/route.ts"
    },
    {
      "name": "from",
      "label": "From",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-capture/route.ts"
    },
    {
      "name": "receivedAt",
      "label": "Received At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-capture/route.ts"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-capture/route.ts"
    },
    {
      "name": "to",
      "label": "To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-capture/route.ts"
    }
  ],
  "salesforce-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/_prompts/route.ts"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "completedJobs",
      "label": "Completed Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "draftJobs",
      "label": "Draft Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "recipientType",
      "label": "Recipient Type",
      "type": "text",
      "defaultValue": "Lead",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "scheduledAt",
      "label": "Scheduled At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "scheduledJobs",
      "label": "Scheduled Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalClicked",
      "label": "Total Clicked",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalJobs",
      "label": "Total Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalOpened",
      "label": "Total Opened",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalSent",
      "label": "Total Sent",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "bccAddress",
      "label": "Bcc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "campaignId",
      "label": "Campaign Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "ccAddress",
      "label": "Cc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "DRAFT",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "to",
      "label": "To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "toAddress",
      "label": "To Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "EMAIL",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "geo",
      "label": "Geo",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "icp",
      "label": "Icp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "offer",
      "label": "Offer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "targetPersona",
      "label": "Target Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "targetRegions",
      "label": "Target Regions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "Professional",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "influencePercent",
      "label": "Influence Percent",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaign-influence/page.tsx"
    },
    {
      "name": "isPrimary",
      "label": "Is Primary",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaign-influence/page.tsx"
    },
    {
      "name": "...updateData",
      "label": "...Update Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "syncDirection",
      "label": "Sync Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "syncFolders",
      "label": "Sync Folders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "skillRequirements",
      "label": "Skill Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "territoryId",
      "label": "Territory Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "workOrderId",
      "label": "Work Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "dateRange",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/ai-capacity/route.ts"
    },
    {
      "name": "filterCriteria",
      "label": "Filter Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "recipientIds",
      "label": "Recipient Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "variables",
      "label": "Variables",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "bouncedAt",
      "label": "Bounced At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "clickedAt",
      "label": "Clicked At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "openedAt",
      "label": "Opened At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "sentAt",
      "label": "Sent At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/route.ts"
    },
    {
      "name": "isActive",
      "label": "Is Active",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/route.ts"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    },
    {
      "name": "leadId",
      "label": "Lead Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaign-influence/attribution/route.ts"
    },
    {
      "name": "audienceType",
      "label": "Audience Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "campaignType",
      "label": "Campaign Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "historicalData",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "timezone",
      "label": "Timezone",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/search/route.ts"
    },
    {
      "name": "campaignName",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "periodEnd",
      "label": "Period End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "periodStart",
      "label": "Period Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "corpus",
      "label": "Corpus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/rag/search/route.ts"
    },
    {
      "name": "campaignBrief",
      "label": "Campaign Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadCompany",
      "label": "Lead Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadName",
      "label": "Lead Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadPersona",
      "label": "Lead Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadTitle",
      "label": "Lead Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "fullName",
      "label": "Full Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "linkedinUrl",
      "label": "Linkedin Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "website",
      "label": "Website",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "campaigns",
      "label": "Campaigns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/kpi-insights/route.ts"
    },
    {
      "name": "funnelMetrics",
      "label": "Funnel Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/kpi-insights/route.ts"
    },
    {
      "name": "emailId",
      "label": "Email Id",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/engagement-score/route.ts"
    },
    {
      "name": "recipientEmail",
      "label": "Recipient Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/engagement-score/route.ts"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/email-insights/route.ts"
    },
    {
      "name": "recipientId",
      "label": "Recipient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/email-insights/route.ts"
    },
    {
      "name": "callId",
      "label": "Call Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "opportunityContext",
      "label": "Opportunity Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "speaker",
      "label": "Speaker",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "transcriptWindow",
      "label": "Transcript Window",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-insights/route.ts"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/chat/route.ts"
    },
    {
      "name": "activityType",
      "label": "Activity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-summary/route.ts"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-summary/route.ts"
    },
    {
      "name": "from",
      "label": "From",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-capture/route.ts"
    },
    {
      "name": "receivedAt",
      "label": "Received At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-capture/route.ts"
    }
  ],
  "salesforce-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/_prompts/route.ts"
    },
    {
      "name": "body",
      "label": "Body",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "completedJobs",
      "label": "Completed Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "draftJobs",
      "label": "Draft Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "recipientType",
      "label": "Recipient Type",
      "type": "text",
      "defaultValue": "Lead",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "scheduledAt",
      "label": "Scheduled At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "scheduledJobs",
      "label": "Scheduled Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "subject",
      "label": "Subject",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalClicked",
      "label": "Total Clicked",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalJobs",
      "label": "Total Jobs",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalOpened",
      "label": "Total Opened",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "totalSent",
      "label": "Total Sent",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/mass-email/page.tsx"
    },
    {
      "name": "bccAddress",
      "label": "Bcc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "campaignId",
      "label": "Campaign Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "ccAddress",
      "label": "Cc Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "DRAFT",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "to",
      "label": "To",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "toAddress",
      "label": "To Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/email-center/page.tsx"
    },
    {
      "name": "channel",
      "label": "Channel",
      "type": "text",
      "defaultValue": "EMAIL",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "clientId",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "geo",
      "label": "Geo",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "icp",
      "label": "Icp",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "industry",
      "label": "Industry",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "offer",
      "label": "Offer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "targetPersona",
      "label": "Target Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "targetRegions",
      "label": "Target Regions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "Professional",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaigns/page.tsx"
    },
    {
      "name": "influencePercent",
      "label": "Influence Percent",
      "type": "number",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaign-influence/page.tsx"
    },
    {
      "name": "isPrimary",
      "label": "Is Primary",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/campaign-influence/page.tsx"
    },
    {
      "name": "...updateData",
      "label": "...Update Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "syncDirection",
      "label": "Sync Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "syncFolders",
      "label": "Sync Folders",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/sync-settings/email/route.ts"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "skillRequirements",
      "label": "Skill Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "territoryId",
      "label": "Territory Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "workOrderId",
      "label": "Work Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/available-slots/route.ts"
    },
    {
      "name": "dateRange",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/scheduling/ai-capacity/route.ts"
    },
    {
      "name": "filterCriteria",
      "label": "Filter Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "recipientIds",
      "label": "Recipient Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/mass-email/route.ts"
    },
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "opportunityId",
      "label": "Opportunity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "variables",
      "label": "Variables",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/route.ts"
    },
    {
      "name": "bouncedAt",
      "label": "Bounced At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "clickedAt",
      "label": "Clicked At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "openedAt",
      "label": "Opened At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "sentAt",
      "label": "Sent At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/emails/[id]/route.ts"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/route.ts"
    },
    {
      "name": "isActive",
      "label": "Is Active",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/email-templates/route.ts"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    },
    {
      "name": "leadId",
      "label": "Lead Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/cpq/ai-suggest/route.ts"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/campaign-influence/attribution/route.ts"
    },
    {
      "name": "audienceType",
      "label": "Audience Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "campaignType",
      "label": "Campaign Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "historicalData",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "timezone",
      "label": "Timezone",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/send-time-optimization/route.ts"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/search/route.ts"
    },
    {
      "name": "campaignName",
      "label": "Campaign Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "clientName",
      "label": "Client Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "metrics",
      "label": "Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "periodEnd",
      "label": "Period End",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "periodStart",
      "label": "Period Start",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/report-summary/route.ts"
    },
    {
      "name": "corpus",
      "label": "Corpus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/rag/search/route.ts"
    },
    {
      "name": "campaignBrief",
      "label": "Campaign Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadCompany",
      "label": "Lead Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadName",
      "label": "Lead Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadPersona",
      "label": "Lead Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "leadTitle",
      "label": "Lead Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/outreach-copy/route.ts"
    },
    {
      "name": "company",
      "label": "Company",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "fullName",
      "label": "Full Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "linkedinUrl",
      "label": "Linkedin Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "website",
      "label": "Website",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/lead-enrich/route.ts"
    },
    {
      "name": "campaigns",
      "label": "Campaigns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/kpi-insights/route.ts"
    },
    {
      "name": "funnelMetrics",
      "label": "Funnel Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/kpi-insights/route.ts"
    },
    {
      "name": "emailId",
      "label": "Email Id",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/engagement-score/route.ts"
    },
    {
      "name": "recipientEmail",
      "label": "Recipient Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/engagement-score/route.ts"
    },
    {
      "name": "purpose",
      "label": "Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/email-insights/route.ts"
    },
    {
      "name": "recipientId",
      "label": "Recipient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/email-insights/route.ts"
    },
    {
      "name": "callId",
      "label": "Call Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "opportunityContext",
      "label": "Opportunity Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "speaker",
      "label": "Speaker",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "transcriptWindow",
      "label": "Transcript Window",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-realtime/route.ts"
    },
    {
      "name": "transcript",
      "label": "Transcript",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/conversation-insights/route.ts"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/chat/route.ts"
    },
    {
      "name": "activityType",
      "label": "Activity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-summary/route.ts"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-summary/route.ts"
    },
    {
      "name": "from",
      "label": "From",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-capture/route.ts"
    },
    {
      "name": "receivedAt",
      "label": "Received At",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/activity-capture/route.ts"
    }
  ]
};
