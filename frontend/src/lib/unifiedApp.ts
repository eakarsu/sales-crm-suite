import {
  Activity,
  BarChart3,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  Contact,
  FileText,
  Files,
  Handshake,
  LayoutDashboard,
  LucideIcon,
  MailCheck,
  Megaphone,
  PackageCheck,
  PanelsTopLeft,
  Plug,
  Target,
  TrendingUp,
  UserRound,
  Users,
} from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type FeatureDefinition = {
  title: string;
  href: string;
  category: string;
  summary: string;
  bullets: string[];
};

export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};

export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'accounts',
    title: 'Accounts',
    href: '/accounts',
    category: 'CRM',
    icon: BriefcaseBusiness,
    summary: 'Account ownership, segmentation, health, and expansion planning in one workspace.',
    bullets: ['Account health', 'Territory ownership', 'Expansion plans'],
    metrics: [
      { label: 'Active Accounts', value: '428', note: 'Owned accounts' },
      { label: 'At Risk', value: '19', note: 'Need attention' },
      { label: 'Expansion Plays', value: '37', note: 'Open motions' },
    ],
  },
  {
    slug: 'contacts',
    title: 'Contacts',
    href: '/contacts',
    category: 'CRM',
    icon: Contact,
    summary: 'Buyer, influencer, champion, and stakeholder records normalized across sales sources.',
    bullets: ['Stakeholder maps', 'Contact enrichment', 'Engagement history'],
    metrics: [
      { label: 'Contacts', value: '3.8K', note: 'Known stakeholders' },
      { label: 'Unverified', value: '214', note: 'Need enrichment' },
      { label: 'Champions', value: '126', note: 'Tagged active' },
    ],
  },
  {
    slug: 'leads',
    title: 'Leads',
    href: '/leads',
    category: 'CRM',
    icon: Target,
    summary: 'Lead intake, scoring, routing, and qualification from inbound and outbound sources.',
    bullets: ['Lead scoring', 'Routing rules', 'Qualification queue'],
    metrics: [
      { label: 'New Leads', value: '186', note: 'This week' },
      { label: 'Qualified', value: '64', note: 'Ready for sales' },
      { label: 'SLA Breaches', value: '7', note: 'Need action' },
    ],
  },
  {
    slug: 'opportunities',
    title: 'Opportunities',
    href: '/opportunities',
    category: 'CRM',
    icon: Handshake,
    summary: 'Deal records, next steps, risks, close plans, and commercial ownership.',
    bullets: ['Deal desk', 'Close plans', 'Risk tracking'],
    metrics: [
      { label: 'Open Pipeline', value: '$8.4M', note: 'Weighted pipeline' },
      { label: 'Commit Deals', value: '22', note: 'Current quarter' },
      { label: 'Blocked', value: '9', note: 'Need escalation' },
    ],
  },
  {
    slug: 'pipeline',
    title: 'Pipeline',
    href: '/pipeline',
    category: 'CRM',
    icon: TrendingUp,
    summary: 'Stage movement, forecast coverage, aging, and pipeline risk in one operating view.',
    bullets: ['Stage health', 'Forecast coverage', 'Deal aging'],
    metrics: [
      { label: 'Coverage', value: '3.2x', note: 'Next quarter' },
      { label: 'Stage Slips', value: '14', note: 'This week' },
      { label: 'Aged Deals', value: '31', note: 'Over threshold' },
    ],
  },
  {
    slug: 'campaigns',
    title: 'Campaigns',
    href: '/campaigns',
    category: 'Revenue Execution',
    icon: Megaphone,
    summary: 'Campaign planning, launch status, performance, and audience readiness.',
    bullets: ['Campaign calendar', 'Audience lists', 'Conversion signals'],
    metrics: [
      { label: 'Active Campaigns', value: '11', note: 'Live programs' },
      { label: 'Responses', value: '842', note: 'Last 30 days' },
      { label: 'MQLs', value: '119', note: 'Created' },
    ],
  },
  {
    slug: 'outreach-sequences',
    title: 'Outreach Sequences',
    href: '/outreach-sequences',
    category: 'Revenue Execution',
    icon: MailCheck,
    summary: 'Outbound sequences, response handling, task queues, and AI-assisted follow-up.',
    bullets: ['Sequence health', 'Reply handling', 'Follow-up tasks'],
    metrics: [
      { label: 'Running Sequences', value: '27', note: 'Active motions' },
      { label: 'Reply Rate', value: '14.8%', note: 'Last 14 days' },
      { label: 'Follow-ups Due', value: '73', note: 'Today' },
    ],
  },
  {
    slug: 'activities',
    title: 'Meetings & Activities',
    href: '/activities',
    category: 'Revenue Execution',
    icon: CalendarCheck,
    summary: 'Meetings, calls, tasks, notes, and follow-up execution from sales teams.',
    bullets: ['Meeting prep', 'Task queues', 'Activity capture'],
    metrics: [
      { label: 'Meetings', value: '54', note: 'This week' },
      { label: 'Tasks Due', value: '128', note: 'Open work' },
      { label: 'No Next Step', value: '16', note: 'Needs owner' },
    ],
  },
  {
    slug: 'quotes-contracts',
    title: 'Quotes & Contracts',
    href: '/quotes-contracts',
    category: 'Revenue Execution',
    icon: FileText,
    summary: 'Quote generation, contract status, approvals, and handoff to billing.',
    bullets: ['Quote queue', 'Contract review', 'Commercial approvals'],
    metrics: [
      { label: 'Quotes Open', value: '38', note: 'Awaiting action' },
      { label: 'Contracts', value: '17', note: 'In review' },
      { label: 'Approval Holds', value: '6', note: 'Blocked' },
    ],
  },
  {
    slug: 'billing-revenue',
    title: 'Billing & Revenue',
    href: '/billing-revenue',
    category: 'Revenue Execution',
    icon: PackageCheck,
    summary: 'Closed-won handoff, billing readiness, revenue status, and invoice exceptions.',
    bullets: ['Revenue handoff', 'Billing readiness', 'Invoice exceptions'],
    metrics: [
      { label: 'Ready To Bill', value: '$1.2M', note: 'Pending handoff' },
      { label: 'Exceptions', value: '12', note: 'Need correction' },
      { label: 'Booked Revenue', value: '$4.7M', note: 'Quarter to date' },
    ],
  },
  {
    slug: 'recruiting-staffing',
    title: 'Recruiting & Staffing',
    href: '/recruiting-staffing',
    category: 'Agency Operations',
    icon: Users,
    summary: 'Candidate, staffing, placement, and agency-service workflows in one queue.',
    bullets: ['Candidate pipeline', 'Placement status', 'Staffing requests'],
    metrics: [
      { label: 'Open Roles', value: '42', note: 'Client requests' },
      { label: 'Candidates', value: '318', note: 'Active pool' },
      { label: 'Placements', value: '11', note: 'This month' },
    ],
  },
  {
    slug: 'reports-forecasting',
    title: 'Reports & Forecasting',
    href: '/reports-forecasting',
    category: 'Intelligence Layer',
    icon: BarChart3,
    summary: 'Sales reports, forecast snapshots, quota coverage, and revenue analytics.',
    bullets: ['Forecast rollups', 'Quota reports', 'Revenue analytics'],
    metrics: [
      { label: 'Forecast Calls', value: '5', note: 'This week' },
      { label: 'Dashboards', value: '23', note: 'Published' },
      { label: 'Forecast Risk', value: '$640K', note: 'Flagged amount' },
    ],
  },
  {
    slug: 'templates',
    title: 'Templates',
    href: '/templates',
    category: 'Enablement',
    icon: PanelsTopLeft,
    summary: 'Sales templates, outreach snippets, proposal sections, and reusable playbooks.',
    bullets: ['Email templates', 'Proposal blocks', 'Sales playbooks'],
    metrics: [
      { label: 'Templates', value: '94', note: 'Available' },
      { label: 'Needs Review', value: '8', note: 'Outdated' },
      { label: 'Top Used', value: '17', note: 'This month' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Sales documents, proposals, contracts, statements of work, and account artifacts.',
    bullets: ['Proposal documents', 'Contracts', 'Account artifacts'],
    metrics: [
      { label: 'Documents', value: '212', note: 'Tracked records' },
      { label: 'In Review', value: '24', note: 'Open reviews' },
      { label: 'Uploaded', value: '31', note: 'This month' },
    ],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'CRM, email, calendar, billing, and agency-service connector health.',
    bullets: ['CRM sync', 'Calendar and email', 'Revenue connectors'],
    metrics: [
      { label: 'Connectors', value: '9', note: 'Configured' },
      { label: 'Warnings', value: '2', note: 'Need attention' },
      { label: 'Last Sync', value: '6m', note: 'CRM data' },
    ],
  },
  {
    slug: 'custom-views',
    title: 'Custom Views',
    href: '/custom-views',
    category: 'Core Platform',
    icon: Blocks,
    summary: 'Role-based saved views for sellers, managers, recruiters, and revenue teams.',
    bullets: ['Saved worklists', 'Manager views', 'Team filters'],
    metrics: [
      { label: 'Views', value: '36', note: 'Saved' },
      { label: 'Shared', value: '14', note: 'Team views' },
      { label: 'Draft', value: '5', note: 'Unpublished' },
    ],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'User profile, role, territory, team, and ownership settings.',
    bullets: ['User profiles', 'Territories', 'Team ownership'],
    metrics: [
      { label: 'Users', value: '58', note: 'Active' },
      { label: 'Territories', value: '12', note: 'Assigned' },
      { label: 'Access Reviews', value: '4', note: 'Open' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Cross-sales assistant for deal coaching, account research, outreach drafts, and meeting prep.',
    bullets: ['Deal coaching', 'Account research', 'Meeting prep'],
    metrics: [
      { label: 'Sessions', value: '88', note: 'Last 24 hours' },
      { label: 'Drafts', value: '142', note: 'Generated' },
      { label: 'Escalations', value: '9', note: 'Manager review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for lead scoring, sequence drafting, forecast risk, and account signals.',
    bullets: ['Lead scoring', 'Sequence drafting', 'Forecast risk'],
    metrics: [
      { label: 'Runs', value: '231', note: 'Last 24 hours' },
      { label: 'Signals', value: '67', note: 'New alerts' },
      { label: 'Scored Leads', value: '186', note: 'This week' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({
  label: feature.title,
  href: feature.href,
  icon: feature.icon,
}));

export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({
  title: feature.title,
  href: feature.href,
  category: feature.category,
  summary: feature.summary,
  bullets: [...feature.bullets],
}));

export const featureFamilies = [
  { name: 'CRM', features: ['Accounts', 'Contacts', 'Leads', 'Opportunities', 'Pipeline'] },
  { name: 'Revenue Execution', features: ['Campaigns', 'Outreach Sequences', 'Meetings & Activities', 'Quotes & Contracts', 'Billing & Revenue'] },
  { name: 'Agency Operations', features: ['Recruiting & Staffing'] },
  { name: 'Intelligence Layer', features: ['AI Assistant', 'AI Tools', 'Reports & Forecasting'] },
  { name: 'Enablement', features: ['Templates'] },
  { name: 'Core Platform', features: ['Documents', 'Integrations', 'Custom Views', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from the sales source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(
  features.map((feature) => [feature.slug, toPage(feature)]),
);

export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(
  aiFeatures.map((feature) => [feature.slug, toPage(feature)]),
);

export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: [
        feature.category === 'Agency Operations' ? 'agencyServices' : 'salesforce',
        feature.category === 'Intelligence Layer' ? 'ai-sales-outreach' : 'ai-sales-outreach where automation applies',
      ],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'All Features', href: '/features' },
        { label: 'Reports & Forecasting', href: '/reports-forecasting' },
      ],
    },
  ]),
);
