# Sales and CRM Suite

Status:
- runnable merged app created
- PostgreSQL-backed suite persistence
- source projects remain untouched

Source projects:
- `salesforce`
- `agencyServices`
- `ai-sales-outreach`

Adjacent candidates for later inclusion:
- `aIMarketingAutomation`
- `AiContentStudio`
- `AIBrandVoiceConsistencyChecker`

Primary product goal:
- one merged sales operations app with one login, one pipeline dashboard, and feature-first navigation

Suite artifacts:
- [MERGE_PLAN.md](./MERGE_PLAN.md)
- [FEATURE_REGISTRY.md](./FEATURE_REGISTRY.md)
- [ROUTE_MAP.md](./ROUTE_MAP.md)
- [DASHBOARD_MODULES.md](./DASHBOARD_MODULES.md)
- [IMPLEMENTATION_BACKLOG.md](./IMPLEMENTATION_BACKLOG.md)
- [start.sh](./start.sh)

Run:

```bash
cd /Users/erolakarsu/projects/merged/sales-crm-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:3400`

Seeded users:
- `admin@sales-crm.local / admin123`
- `manager@sales-crm.local / manager123`
- `analyst@sales-crm.local / analyst123`

Validation:
- `npm run typecheck`
- `SMOKE_BASE_URL=http://127.0.0.1:3400 npm run smoke`

Current completion:
- one login
- one dashboard
- feature-first sidebar
- Postgres-backed feature state, records, documents, notifications, and audit
- role-aware read/edit/approval behavior
- source projects remain untouched
