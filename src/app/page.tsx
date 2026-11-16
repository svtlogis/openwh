import {
  ArrowDownToLine,
  ArrowRight,
  Boxes,
  Check,
  Clock3,
  LayoutDashboard,
  Package,
  PackageCheck,
  PackageOpen,
  ShoppingBag,
  Users,
  Wallet,
} from "lucide-react";

const navigation = [
  { label: "Overview", href: "#overview", icon: LayoutDashboard },
  { label: "Packages", href: "#packages", icon: Boxes },
  { label: "Buyers", href: "#buyers", icon: Users },
  { label: "Storage", href: "#storage", icon: PackageOpen },
  { label: "Activity", href: "#activity", icon: Clock3 },
];

const metrics = [
  {
    label: "Total buyers",
    value: "24",
    detail: "Registered in this demo",
    icon: Users,
    tone: "blue",
    id: "buyers",
  },
  {
    label: "Total packages",
    value: "138",
    detail: "Across all demo statuses",
    icon: Package,
    tone: "violet",
    id: "packages-total",
  },
  {
    label: "Awaiting shipment",
    value: "17",
    detail: "Ready for the next step",
    icon: ArrowDownToLine,
    tone: "amber",
    id: "awaiting",
  },
  {
    label: "Unpaid fees",
    value: "$245.00",
    detail: "Demo balance · USD",
    icon: Wallet,
    tone: "green",
    id: "fees",
  },
];

const packages = [
  {
    tracking: "OW-10482",
    buyer: "Alex Morgan",
    description: "Wireless headphones",
    date: "Nov 15, 2026",
    status: "Arrived",
    statusTone: "blue",
  },
  {
    tracking: "OW-10479",
    buyer: "Jamie Lee",
    description: "Everyday essentials",
    date: "Nov 15, 2026",
    status: "Processing",
    statusTone: "amber",
  },
  {
    tracking: "OW-10473",
    buyer: "Taylor Kim",
    description: "Home & kitchen",
    date: "Nov 14, 2026",
    status: "Stored",
    statusTone: "green",
  },
  {
    tracking: "OW-10468",
    buyer: "Jordan Rivera",
    description: "Running shoes",
    date: "Nov 14, 2026",
    status: "Arrived",
    statusTone: "blue",
  },
];

const storagePackages = [
  { tracking: "OW-10391", buyer: "Morgan Chen", remaining: "2 days left", urgency: "urgent" },
  { tracking: "OW-10376", buyer: "Sam Patel", remaining: "5 days left", urgency: "soon" },
  { tracking: "OW-10358", buyer: "Riley Brooks", remaining: "8 days left", urgency: "normal" },
];

const activities = [
  {
    initials: "AM",
    name: "Alex Morgan",
    action: "package checked in",
    detail: "OW-10482 · Wireless headphones",
    time: "12 min ago",
    tone: "blue",
    icon: PackageCheck,
  },
  {
    initials: "JL",
    name: "Jamie Lee",
    action: "shipment request created",
    detail: "2 packages · Standard shipment",
    time: "48 min ago",
    tone: "violet",
    icon: ShoppingBag,
  },
  {
    initials: "TK",
    name: "Taylor Kim",
    action: "storage fee recorded",
    detail: "OW-10473 · Demo activity",
    time: "2 hours ago",
    tone: "green",
    icon: Check,
  },
];

export default function Home() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#overview" aria-label="OpenWH overview">
          <span className="brand-mark">
            <Boxes size={21} strokeWidth={2.2} />
          </span>
          <span className="brand-copy">
            <span className="brand-name">openwh</span>
            <span className="brand-caption">WAREHOUSE OS</span>
          </span>
        </a>

        <div className="workspace-switcher">
          <span className="workspace-avatar">N</span>
          <span className="workspace-copy">
            <span className="workspace-name">Northstar Logistics</span>
            <span className="workspace-plan">Demo workspace</span>
          </span>
        </div>

        <p className="nav-heading">WORKSPACE</p>
        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map(({ label, href, icon: Icon }, index) => (
            <a
              key={label}
              href={href}
              className={`nav-link${index === 0 ? " active" : ""}`}
              aria-current={index === 0 ? "page" : undefined}
            >
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              <span>{label}</span>
              {label === "Packages" && <span className="nav-count">17</span>}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <span className="help-icon"><PackageOpen size={17} /></span>
            <p>Everything in its place.</p>
            <span>Simple tools for a smoother warehouse.</span>
          </div>
          <div className="profile">
            <span className="profile-avatar">WH</span>
            <span className="profile-copy">
              <strong>Warehouse team</strong>
              <span>Demo workspace</span>
            </span>
          </div>
        </div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Workspace</span>
            <span className="breadcrumb-separator">/</span>
            <strong>Overview</strong>
          </div>
          <div className="topbar-actions">
            <span className="demo-label"><span className="demo-dot" /> Demo data</span>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="page-heading">
            <div>
              <p className="eyebrow">SUNDAY, NOVEMBER 15, 2026</p>
              <h1>Good morning, team <span aria-hidden="true">✦</span></h1>
              <p className="heading-subtitle">Here&apos;s what&apos;s happening in your warehouse today.</p>
            </div>
            <div className="heading-meta">
              <span className="status-indicator" />
              Demo workspace
            </div>
          </section>

          <section className="metrics-grid" aria-label="Warehouse statistics">
            {metrics.map(({ label, value, detail, icon: Icon, tone, id }) => (
              <article className="metric-card" key={label} id={id}>
                <div className="metric-topline">
                  <span className="metric-label">{label}</span>
                  <span className={`metric-icon ${tone}`}><Icon size={19} strokeWidth={1.9} /></span>
                </div>
                <p className="metric-value">{value}</p>
                <p className="metric-detail">{detail}</p>
              </article>
            ))}
          </section>

          <div className="overview-grid">
            <section className="panel packages-panel" id="packages">
              <div className="panel-header">
                <div>
                  <div className="panel-title-row">
                    <h2>Recent incoming packages</h2>
                    <span className="table-count">4</span>
                  </div>
                  <p className="panel-description">The latest arrivals at your warehouse</p>
                </div>
                <span className="latest-label">Latest arrivals</span>
              </div>

              <div className="table-scroll">
                <table className="package-table">
                  <thead>
                    <tr>
                      <th scope="col">Package</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Arrival date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packages.map((item) => (
                      <tr key={item.tracking}>
                        <td>
                          <span className="tracking-number">{item.tracking}</span>
                          <span className="package-description">{item.description}</span>
                        </td>
                        <td>{item.buyer}</td>
                        <td className="date-cell">{item.date}</td>
                        <td><span className={`status-pill ${item.statusTone}`}>{item.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="table-footnote">Showing recent fictional demo records</p>
            </section>

            <section className="panel storage-panel" id="storage">
              <div className="panel-header storage-heading">
                <div>
                  <div className="panel-title-row">
                    <h2>Storage deadlines</h2>
                    <span className="attention-count">3</span>
                  </div>
                  <p className="panel-description">Packages nearing their storage deadline</p>
                </div>
                <span className="storage-heading-icon"><Clock3 size={18} /></span>
              </div>

              <div className="storage-list">
                {storagePackages.map((item) => (
                  <article className="storage-item" key={item.tracking}>
                    <span className={`storage-package-icon ${item.urgency}`}><Package size={17} /></span>
                    <div className="storage-package-info">
                      <strong>{item.tracking}</strong>
                      <span>{item.buyer}</span>
                    </div>
                    <span className={`deadline ${item.urgency}`}>{item.remaining}</span>
                  </article>
                ))}
              </div>
              <a className="storage-link" href="#packages">
                Review stored packages <ArrowRight size={15} />
              </a>
            </section>
          </div>

          <section className="panel activity-panel" id="activity">
            <div className="panel-header">
              <div>
                <h2>Recent activity</h2>
                <p className="panel-description">A quick look at what your team has been up to</p>
              </div>
              <span className="activity-period">Today</span>
            </div>
            <div className="activity-list">
              {activities.map(({ initials, name, action, detail, time, tone, icon: Icon }) => (
                <article className="activity-item" key={`${name}-${action}`}>
                  <span className={`activity-icon ${tone}`}><Icon size={17} strokeWidth={1.9} /></span>
                  <span className="activity-avatar">{initials}</span>
                  <div className="activity-copy">
                    <p><strong>{name}</strong> {action}</p>
                    <span>{detail}</span>
                  </div>
                  <time>{time}</time>
                </article>
              ))}
            </div>
          </section>

          <footer className="dashboard-footer">
            <span>OpenWH <span className="footer-divider">·</span> Warehouse management</span>
            <span>Demo data only. Records are fictional and are not connected to a live database.</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
