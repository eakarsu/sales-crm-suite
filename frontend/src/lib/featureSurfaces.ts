export type FeatureSurfaceRow = {
  id: string;
  item: string;
  status: string;
  owner: string;
  nextStep: string;
};

export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['accounts', 'Accounts', 'Global enterprise account review', 'Account Executive', 'Validate account health and expansion plan'],
  ['contacts', 'Contacts', 'Champion contact enrichment', 'Sales Ops', 'Verify title, buying role, and engagement status'],
  ['leads', 'Leads', 'Inbound lead qualification batch', 'SDR Team', 'Score and route qualified leads'],
  ['opportunities', 'Opportunities', 'Commit deal close plan', 'Sales Manager', 'Review risk and next-step coverage'],
  ['pipeline', 'Pipeline', 'Stage movement inspection', 'Revenue Operations', 'Resolve aged deals and next-step gaps'],
  ['campaigns', 'Campaigns', 'Q3 industry campaign launch', 'Demand Gen', 'Approve target list and launch calendar'],
  ['outreach-sequences', 'Outreach Sequences', 'Executive outbound sequence', 'Outbound Team', 'Review response handling and follow-up tasks'],
  ['activities', 'Meetings & Activities', 'No-next-step meeting cleanup', 'Sales Managers', 'Assign follow-up actions'],
  ['quotes-contracts', 'Quotes & Contracts', 'Enterprise quote approval', 'Deal Desk', 'Complete commercial approval'],
  ['billing-revenue', 'Billing & Revenue', 'Closed-won billing handoff', 'Revenue Ops', 'Resolve invoice readiness exceptions'],
  ['recruiting-staffing', 'Recruiting & Staffing', 'Client staffing request queue', 'Recruiting Lead', 'Match candidates to open client roles'],
  ['reports-forecasting', 'Reports & Forecasting', 'Weekly forecast rollup', 'Revenue Operations', 'Publish forecast risk summary'],
  ['templates', 'Templates', 'Proposal template refresh', 'Enablement', 'Review outdated proposal sections'],
  ['documents', 'Documents', 'Proposal and contract packet review', 'Sales Ops', 'Attach final artifacts and route for approval'],
  ['integrations', 'Integrations', 'CRM and email connector health', 'Platform Ops', 'Resolve sync warnings'],
  ['custom-views', 'Custom Views', 'Manager pipeline saved view', 'Revenue Operations', 'Publish team view'],
  ['profiles', 'Profiles', 'Territory and access review', 'Admin', 'Confirm role and territory coverage'],
  ['ai-assistant', 'AI Assistant', 'Deal coaching assistant session', 'Sales Manager', 'Review AI-generated close-plan guidance'],
  ['ai-tools', 'AI Tools', 'Lead scoring model run', 'Sales Ops', 'Apply scored lead routing'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(
  featureSeeds.map(([slug, title, item, owner, nextStep]) => [
    slug,
    buildSurface(slug, title, item, owner, nextStep),
  ]),
);

export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(
  featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]),
);
