export type EntityRecord = {
  id: string;
  name: string;
  status: string;
  owner: string;
  amount?: string;
  dueDate?: string;
  priority?: string;
};

export type FeatureEntitySet = {
  title: string;
  columns: string[];
  rows: EntityRecord[];
};

const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];

const entitySeeds = [
  ['accounts', 'Account Records', 'Acme Enterprise', 'Growth review', 'Northwind Health System', 'Sales Director', '$480K'],
  ['contacts', 'Contact Records', 'Avery Carter', 'Champion', 'Jordan Lee', 'Account Executive', '$0'],
  ['leads', 'Lead Records', 'Inbound demo request', 'Qualified', 'Series B target list', 'SDR Team', '$64K'],
  ['opportunities', 'Opportunity Records', 'Acme renewal expansion', 'Commit', 'Northwind platform deal', 'Sales Manager', '$310K'],
  ['pipeline', 'Pipeline Records', 'Enterprise stage movement', 'Review', 'Aged mid-market deals', 'Revenue Ops', '$1.1M'],
  ['campaigns', 'Campaign Records', 'CFO webinar campaign', 'Active', 'Healthcare ABM list', 'Demand Gen', '$0'],
  ['outreach-sequences', 'Outreach Sequence Records', 'Executive sequence A', 'Running', 'Renewal rescue sequence', 'Outbound Team', '$0'],
  ['activities', 'Activity Records', 'Discovery call follow-up', 'Open', 'Executive meeting prep', 'Sales Rep', '$0'],
  ['quotes-contracts', 'Quote and Contract Records', 'Enterprise quote package', 'Approval pending', 'MSA redline review', 'Deal Desk', '$185K'],
  ['billing-revenue', 'Billing and Revenue Records', 'Closed-won billing handoff', 'Ready', 'Invoice exception queue', 'Revenue Ops', '$420K'],
  ['recruiting-staffing', 'Recruiting and Staffing Records', 'Client staffing request', 'Open', 'Senior AE candidate slate', 'Recruiting Lead', '$0'],
  ['reports-forecasting', 'Report and Forecast Records', 'Weekly forecast rollup', 'Review', 'Quota coverage report', 'Revenue Ops', '$8.4M'],
  ['templates', 'Template Records', 'Enterprise proposal template', 'Review', 'Outbound email library', 'Enablement', '$0'],
  ['documents', 'Document Records', 'Proposal packet', 'In review', 'Signed contract archive', 'Sales Ops', '$0'],
  ['integrations', 'Integration Records', 'CRM nightly sync', 'Healthy', 'Email connector warning', 'Platform Ops', '$0'],
  ['custom-views', 'Saved View Records', 'Manager pipeline view', 'Shared', 'SDR lead queue', 'Revenue Ops', '$0'],
  ['profiles', 'Profile Records', 'Enterprise territory map', 'Active', 'Manager permission review', 'Admin', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'Deal coaching session', 'Open', 'Account research thread', 'Sales Manager', '$0'],
  ['ai-tools', 'AI Tool Records', 'Lead scoring batch', 'Completed', 'Forecast risk detector', 'Sales Ops', '$0'],
] as const;

function buildSet(
  slug: string,
  title: string,
  firstName: string,
  firstStatus: string,
  secondName: string,
  owner: string,
  amount: string,
): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(
  entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [
    slug,
    buildSet(slug, title, firstName, firstStatus, secondName, owner, amount),
  ]),
);
