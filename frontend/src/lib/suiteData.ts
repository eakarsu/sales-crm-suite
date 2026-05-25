export type Metric = {
  label: string;
  value: string;
  note: string;
};

export const sourceSystems = [
  {
    name: 'salesforce',
    ownership: 'Accounts, contacts, leads, opportunities, pipeline, reporting',
    coverage: ['CRM objects', 'Forecasting', 'Pipeline movement', 'Territory ownership'],
  },
  {
    name: 'agencyServices',
    ownership: 'Recruiting, staffing, placements, billing handoffs',
    coverage: ['Client roles', 'Candidate pipeline', 'Placement status', 'Agency billing'],
  },
  {
    name: 'ai-sales-outreach',
    ownership: 'Outbound automation, AI assistant, sequence drafting, lead scoring',
    coverage: ['Sequences', 'AI drafts', 'Lead scoring', 'Reply handling'],
  },
];

export const dashboardMetrics: Metric[] = [
  { label: 'Open Pipeline', value: '$8.4M', note: 'Weighted revenue pipeline' },
  { label: 'New Leads', value: '186', note: 'This week' },
  { label: 'Active Campaigns', value: '11', note: 'Live motions' },
  { label: 'Open Roles', value: '42', note: 'Agency staffing requests' },
];

export const healthMetrics: Metric[] = [
  { label: 'Follow-ups Due', value: '73', note: 'Today' },
  { label: 'Quotes Open', value: '38', note: 'Awaiting action' },
  { label: 'Forecast Risk', value: '$640K', note: 'Flagged amount' },
  { label: 'AI Tool Runs', value: '231', note: 'Last 24 hours' },
];

export const dashboardModules = [
  'Pipeline health and stage movement',
  'Lead generation and conversion',
  'Campaign and outreach performance',
  'Meeting and activity execution',
  'Billing and revenue status',
  'Recruiting and placement pipeline',
  'AI copilot usage and alerts',
  'Recent deals, tasks, and exceptions',
];

export const workflowHighlights = [
  'Lead intake, qualification, and routing',
  'Opportunity close-plan review and approval',
  'Outbound sequence launch and reply handling',
  'Quote, contract, billing, and revenue handoff',
  'Recruiting request and candidate placement workflow',
];
