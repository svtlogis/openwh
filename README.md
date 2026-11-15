# OpenWH

**Open-source Warehouse Management System for small warehouse operators.**

OpenWH is an early-stage project exploring a lightweight, customizable way to manage incoming packages, inventory, buyer access, storage periods, warehouse fees, and shipments.

> Status: Early development / Phase 1 foundation. Features and roadmap are subject to change.

## Why OpenWH?

Small proxy warehouses and independent logistics operators often manage operations using spreadsheets, manual records, and disconnected tools. OpenWH aims to make essential warehouse workflows easier to manage through an accessible, self-hostable application.

## Planned features

- [ ] Admin dashboard and operational overview
- [ ] Incoming package and inventory management
- [ ] Buyer/customer records
- [ ] Buyer portal with private package visibility
- [ ] Arrival photo management
- [ ] Storage-period monitoring
- [ ] Configurable warehouse fee rules
- [ ] Order and shipment management
- [ ] Payment and invoice records

## Project status

This repository is at the planning and foundation stage. Do not use it to manage real warehouse operations yet. There are no production-ready guarantees.

## Planned technology

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase (planned; not connected yet)

## Getting started

Prerequisites:
- Node.js LTS
- npm
- Git

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Privacy and security

- Never commit real buyer information, tracking numbers, addresses, phone numbers, package photos, or payment records.
- Use fictional data for development and demos.
- Never commit `.env` files, API keys, passwords, or service-role keys.
- Authentication and database access controls must be implemented and reviewed before handling real data.

See [SECURITY.md](SECURITY.md) for reporting guidance.

## Contributing

Contributions, bug reports, documentation improvements, and feature suggestions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
