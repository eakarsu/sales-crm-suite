# Sales and CRM Merge Plan

Date: 2026-05-24

## Goal

Create one merged sales operations suite from these source projects:

- `salesforce`
- `agencyServices`
- `ai-sales-outreach`

This suite will use:

- one login
- one combined dashboard
- one feature-first sidebar
- one shared route model

## Product Rule

- source projects stay unchanged
- merged suite owns navigation, naming, and dashboards
- overlapping features are normalized by customer-facing user jobs

## Observed Source Feature Families

From `salesforce`:
- Leads
- Contacts
- Opportunities
- Quotes
- Contracts
- Campaigns
- Sales Cadences
- Email Center
- Activities
- Tasks
- Calendar
- Reports
- Forecasting
- Pipeline Inspection
- Deal Risk Room
- AI Studio / Einstein
- Revenue Intelligence
- Approvals
- Files
- Knowledge

From `agencyServices`:
- Clients
- Projects
- Campaigns
- Candidates
- Placement Guarantees
- Jobs
- Leads
- Billing
- Reports
- AI Tools

From `ai-sales-outreach`:
- Deals
- Campaigns
- Sequences
- Contacts
- Meetings
- Tasks
- Templates
- Reports
- Analytics
- Integrations
- AI Assistant
- AI Lead Scorer
- AI Personalization
- AI Objections
- AI Prospect Research
- AI Pipeline Forecast
- AI Competitive Intel
- Custom Views
- Notifications
- Team
- AB Tests

## Core Feature Families

- Dashboard
- Accounts
- Contacts
- Leads
- Opportunities
- Pipeline
- Campaigns
- Outreach Sequences
- Meetings & Activities
- Quotes & Contracts
- Billing & Revenue
- Recruiting & Staffing
- AI Assistant
- AI Tools
- Reports & Forecasting
- Templates
- Integrations
- Custom Views
- Profiles

## Implementation Waves

### Wave 1

- Dashboard
- Leads
- Accounts
- Opportunities
- Pipeline
- AI Tools

### Wave 2

- Campaigns
- Outreach Sequences
- Meetings & Activities
- Reports & Forecasting
- Templates

### Wave 3

- Quotes & Contracts
- Billing & Revenue
- Recruiting & Staffing
- Integrations
- Custom Views
