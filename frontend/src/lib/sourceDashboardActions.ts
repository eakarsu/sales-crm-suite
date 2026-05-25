export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIBailBondRiskAssessor",
      "AICarDealershipSalesOptimizer",
      "AIDetectcombatmisinformatio",
      "AIDigitalIdentityVerifiableCredentials",
      "AIDynamiclocationaware",
      "AILocalizationTranslationAgency",
      "AINutritionDietitianAssistant",
      "AIParkingManagementPlatform",
      "AISMSchatbot",
      "AISalesTrainingSimulator",
      "AISelfStorageFacilityManager",
      "AISocialProofGenerator"
    ],
    "examples": [
      ".aider.chat.history",
      ".aider.model.settings.yml",
      "/verify-email",
      "backend/routes/agenticSdr",
      "backend/routes/ai",
      "backend/routes/aiNew"
    ],
    "count": 17
  },
  {
    "id": "analytics",
    "label": "Analytics",
    "description": "Open analytics, scoring, reporting, and forecasting actions.",
    "href": "/features",
    "sourceProjects": [
      "agencyServices"
    ],
    "examples": [
      "src/app/dashboard/recruiting-tools/page"
    ],
    "count": 1
  },
  {
    "id": "customers",
    "label": "Customers",
    "description": "Open customer, client, patient, member, or lead workflows.",
    "href": "/features",
    "sourceProjects": [
      "salesforce"
    ],
    "examples": [
      "/territory-members"
    ],
    "count": 1
  },
  {
    "id": "documents",
    "label": "Documents",
    "description": "Open document intake, upload, extraction, and review actions.",
    "href": "/documents",
    "sourceProjects": [
      "salesforce"
    ],
    "examples": [
      "/service-contracts",
      "/web-forms"
    ],
    "count": 1
  },
  {
    "id": "operations",
    "label": "Operations",
    "description": "Open operational tasks, cases, projects, and workflow actions.",
    "href": "/features",
    "sourceProjects": [
      "salesforce"
    ],
    "examples": [
      "/service-crews",
      "/service-resources",
      "/service-territories",
      "/social-service",
      "/tasks",
      "/workflows"
    ],
    "count": 1
  },
  {
    "id": "orders",
    "label": "Orders",
    "description": "Open order, fulfillment, delivery, and purchase actions.",
    "href": "/features",
    "sourceProjects": [
      "salesforce"
    ],
    "examples": [
      "/work-order-line-items",
      "/work-orders"
    ],
    "count": 1
  },
  {
    "id": "appointments",
    "label": "Scheduling",
    "description": "Open scheduling, booking, dispatch, and calendar actions.",
    "href": "/features",
    "sourceProjects": [
      "salesforce"
    ],
    "examples": [
      "/service-appointments"
    ],
    "count": 1
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "salesforce"
    ],
    "examples": [
      "/scheduling",
      "/scheduling-policies",
      "/settings",
      "/shifts",
      "/skills",
      "/surveys"
    ],
    "count": 1
  }
];
