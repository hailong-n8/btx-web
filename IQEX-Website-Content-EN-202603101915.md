# IQEX Exchange — Website Content (English)

> Generated: 2026-03-10 19:15
> Scope: All page sections, headings, descriptions, CTAs, and data tables.
> Footer link lists excluded.

---

## 1. HOME

### Hero

**Badge:** Market Infrastructure for Sports Exchanges

**Title:** The Infrastructure Layer for Global Sports Markets

**Subtitle:** Exchange technology, professional liquidity, and programmable APIs for next-generation sports trading.

**CTAs:**
- Access the API → /developers
- Become a Liquidity Partner → /liquidity
- Explore White Label → /white-label

### Hero Stats Strip

| Icon | Label | Value |
|------|-------|-------|
| Globe | Global Markets | Multi-Region |
| BarChart3 | Market Types | 15+ |
| Clock | Platform Uptime | 99.9% |

### Core Infrastructure — Enterprise-Grade Exchange Technology

Purpose-built for professional market participants and exchange operators worldwide.

| Title | Description |
|-------|-------------|
| Deep Liquidity Access | Tight spreads and deep order books from professional market makers and institutional sources. |
| Exchange-Grade Technology | Deterministic matching engine with low-latency execution and real-time risk controls. |
| Modular White-Label Infrastructure | Deploy a branded exchange in weeks — UI, settlement, risk tools, and commissions included. |

### Metrics

| Value | Label |
|-------|-------|
| 15+ | Market Types |
| 20+ | Years Exchange DNA |
| 99.9% | Uptime SLA |

### Our Clients — Built for Professional Market Participants

Exchange-grade infrastructure, deep liquidity, and programmable access for institutions and professionals.

| Title | Description |
|-------|-------------|
| Professional Market Makers | High-performance APIs, competitive fee tiers, and co-location ready. |
| Exchanges & Operators | Full branding control, settlement, and risk management. |
| Sports Data Partners | Sports data integration, real-time feeds, and predictive analytics. |
| Institutional Traders | Professional execution, advanced order types, and transparent access. |

### Technology — Exchange Engine Architecture

Deterministic execution with crash recovery and zero order loss.

- Low-latency order book with price-time priority
- Synthetic liquidity via cross-runner matching
- Real-time risk controls and position management
- gRPC API with full market and order access

**Link:** Explore our technology → /technology

### Architecture Diagram

| Layer | Components |
|-------|------------|
| Client Layer | gRPC API |
| Matching Engine | Order Book, Price Engine, Risk Check |
| Liquidity Bridge | Aggregation, Settlement |
| Data Layer | Sports Data, Analytics |

### CTA — Ready to Build on IQEX?

Explore API access, liquidity partnerships, or white-label deployment with our team.

- Contact Us → /contact
- View API Documentation → /developers

---

## 2. ABOUT

### Hero

**Badge:** About IQEX

**Title:** Build the Engine That Powers Global Event Markets

**Subtitle:** Market infrastructure powering professional sports trading exchanges worldwide.

### Our Mission — Powering the Future of Sports Trading

Critical infrastructure for creating, accessing, and trading sports markets at institutional grade.

**Strategic Vision:** The exchange that powers exchanges — underlying technology and liquidity for operators worldwide.

### Mission Stats

| Value | Label |
|-------|-------|
| 20+ | Years Trading DNA |
| 15+ | Market Types |
| 99.9% | Platform Uptime |

### Our Journey — From Trading Expertise to Market Infrastructure

| Phase | Title | Description |
|-------|-------|-------------|
| Foundation | 20+ Years Exchange Trading DNA | Two decades of exchange trading experience brought to institutional sports market infrastructure. |
| Evolution | Deep Sports Data Expertise | Pricing models, real-time feeds, and predictive analytics powering accurate market creation. |
| Today | Proven White-Label Infrastructure | Mature platform serving global operators — matching, settlement, and risk management, continuously refined. |

### Group Structure — Three Pillars of Infrastructure

Three integrated verticals forming a cohesive exchange infrastructure platform.

| Title | Description | Highlight |
|-------|-------------|-----------|
| Data | Real-time feeds, historical databases, and predictive modelling. | Decimal Sports Data |
| Technology | Matching engine, risk systems, API platform, and operational tooling. | IQEX Matching Engine & APIs |
| Exchange Engine | Liquidity bridge, settlement engine, risk controls, and market creation tools. | Liquidity Bridge & Settlement |

### Our Values — What Drives Us

| Title | Description |
|-------|-------------|
| Integrity | Fair, transparent, and auditable systems. |
| Performance | Obsessive focus on latency, throughput, and reliability. |
| Innovation | Continuously evolving ahead of market demands. |
| Global Reach | Multi-region deployment with localisation and compliance. |

### CTA — Partner with IQEX

Explore how IQEX infrastructure can power your exchange or market making activity.

- Contact Us → /contact
- View Technology → /technology

---

## 3. TECHNOLOGY

### Hero

**Badge:** Exchange Technology

**Title:** Built for Performance. Designed for Scale.

**Subtitle:** Institutional-grade matching, risk controls, and programmable APIs for professional participants.

**CTAs:**
- Access API Documentation → /developers
- Contact Engineering → /contact

### Matching Engine — Deterministic Order Execution

Price-time priority matching with complex order types and synthetic liquidity.

| Title | Description |
|-------|-------------|
| Multi-Level Order Book | Full market depth with synthetic liquidity via cross-runner matching algorithms. |
| Crash Recovery | Persistent order state guarantees zero loss across system restarts and failover events. |
| High Throughput | Engineered for linear performance scaling under sustained high-volume load. |

### Market Creation Engine — Flexible Market Infrastructure

In-play markets, 15+ types, and custom market creation.

| Title | Description |
|-------|-------------|
| Fast In-Play Markets | Sub-second updates for live event trading across all sports verticals. |
| 15+ Market Types | Match odds, handicaps, over/under, correct score, and custom markets. |
| Custom Market Creation | Programmatic and agent-requested creation for niche events and prediction markets. |

### API Infrastructure — Programmable Market Access

gRPC API and sandbox environments for rapid, reliable integration.

**Code Example:**
```
// gRPC — Place a limit order
rpc PlaceOrder(PlaceOrderRequest)
{
  "market_id": "cricket_ipl_match_odds",
  "side": "back",
  "price": 2.50,
  "size": 1000,
  "type": "limit"
}
```

| Label | Description | Status |
|-------|-------------|--------|
| gRPC API | Binary protocol for orders, markets, and account management. | Ready |
| Sandbox Environment | Full test environment with simulated market data. | [COMING SOON] |
| Idempotency | Safe retry semantics for all mutating operations. | Ready |

### System Architecture — End-to-End Exchange Infrastructure

| Block | Components |
|-------|------------|
| Clients | gRPC API |
| Gateway | Auth, Routing |
| Engine | Order Book, Matching, Risk |
| Bridge | Aggregation, Settlement |
| Data | Sports Feed, Analytics |

### CTA — Ready to Integrate?

Get sandbox access and start building with our exchange APIs today.

- Get API Access → /developers
- Talk to Engineering → /contact

---

## 4. DEVELOPERS

### Hero

**Badge:** Developer Portal

**Title:** Build on IQEX Infrastructure

**Subtitle:** Well-documented APIs for market data, order management, and settlement.

**CTAs:**
- Get API Access → /contact
- View Technology → /technology

### API Platform — Programmable Exchange Access

gRPC API and sandbox for seamless integration.

| Title | Description | Status |
|-------|-------------|--------|
| gRPC API | High-performance binary protocol for order placement, market data, and account management. | Ready |
| Sandbox Environment | Simulated markets for paper trading and risk-free testing. | [COMING SOON] |

### Quick Start — Get Started in Minutes

Rapid integration with clean, powerful APIs.

**Code Example: gRPC API — Python**
```python
// IQEX gRPC — Place a limit order (Python)
import iqex_pb2, iqex_pb2_grpc
import grpc

channel = grpc.secure_channel(
    'api.iqex.io:443',
    grpc.ssl_channel_credentials()
)
stub = iqex_pb2_grpc.OrderServiceStub(channel)

response = stub.PlaceOrder(iqex_pb2.PlaceOrderRequest(
    market_id='cricket_ipl_match_odds',
    side='back',
    price=2.50,
    size=1000,
    order_type='limit'
))
# response.order_id → "ord_abc123"
```

### Specifications — API Technical Details

Built for professional integrators.

| Label | Value | Status |
|-------|-------|--------|
| Authentication | OAuth2 Client Credentials | Ready |
| Protocol | gRPC | Ready |
| Idempotency | Built-in idempotency keys | Ready |
| Order Types | Limit, Market, Cancel-Replace | Ready |
| Data Format | Protocol Buffers (Protobuf) | Ready |
| Environments | Production | Ready |
| Environments | Sandbox | [COMING SOON] |
| SLA | 99.9% uptime guarantee | Ready |

### Resources — Developer Resources

Documentation, code samples, and tools to get you started.

| Title | Description | Tag |
|-------|-------------|-----|
| API Documentation | Full reference for endpoints, schemas, and authentication. | docs.iqex.io |
| Code Samples | Working examples across languages for common integration patterns. | GitHub |
| Status Page | Live status, incident history, and uptime for all IQEX services. | status.iqex.io |

### CTA — Start Building Today

Request API credentials and sandbox access to begin integrating with IQEX.

- Get API Access → /contact
- View Technology → /technology

---

## 5. LIQUIDITY

### Hero

**Badge:** Liquidity & Market Making

**Title:** Built for Professional Liquidity Providers

**Subtitle:** Deep order books, transparent fees, and performance infrastructure for professional market makers.

**CTAs:**
- Apply as Liquidity Partner → /contact
- View API Docs → /developers

### Fee Model — Competitive & Transparent Pricing

Clear maker/taker fees with volume tiers and performance incentives.

| Title | Description |
|-------|-------------|
| Transparent Fee Model | No hidden costs. Competitive rates designed for professional volume. |
| Volume-Based Tiers | Progressive fee reduction as monthly volumes increase. |
| Incentive Programs | Fee rebates and participation incentives for qualifying providers. |

### Volume Tiers — Fee Schedule

Higher volumes unlock lower fees.

| Tier | Monthly Volume | Maker Fee | Taker Fee |
|------|---------------|-----------|-----------|
| Standard | < £1M / month | 0.10% | 0.20% |
| Professional | £1M – £10M | 0.06% | 0.15% |
| Institutional | £10M – £50M | 0.03% | 0.10% |
| Market Maker | > £50M | Custom | Custom |

Custom pricing available for qualifying market makers. Contact us for details.

### Infrastructure — Performance-Grade Trading Infrastructure

Built for algorithmic trading, market making, and high-frequency strategies.

| Title | Description |
|-------|-------------|
| Co-Location Ready | Low-latency connectivity for fastest execution and data delivery. |
| Low-Latency Matching | Consistent performance and fast execution under high volume. |
| Advanced Order Types | Limit, market, and cancel-and-replace operations. |

### Incentive Programs — Rewarding Market Excellence

Structured rewards for providers meeting performance benchmarks.

| Title | Description |
|-------|-------------|
| Performance Rebates | Fee rebates based on quoting quality, uptime, and spread metrics. |
| Volume Incentives | Additional rewards for consistent monthly volume targets. |
| Network Participation | Equity participation for qualifying infrastructure partners. |

### Become a Liquidity Partner

Join our network for preferential fees, dedicated support, and co-location options.

- Dedicated account management
- Custom fee negotiation
- Priority API support
- Early access to new markets

**CTA:** Apply Now → /contact

### CTA — Start Providing Liquidity

Discuss fee structures, technical requirements, and onboarding with our partnerships team.

- Contact Partnerships → /contact
- Explore Technology → /technology

---

## 6. WHITE LABEL

### Hero

**Badge:** White Label Solutions

**Title:** Launch Your Own Exchange in Weeks

**Subtitle:** Fully branded, exchange-grade platform powered by IQEX. Matching engine to settlement — included.

**CTAs:**
- Request a Demo → /contact
- View Technology → /technology

### Platform Components — Everything You Need to Operate

Complete exchange stack — front-end to settlement — fully managed.

| Title | Description |
|-------|-------------|
| Fully Branded UI | Your brand identity across the full trading interface — logo, colours, and domain. |
| Risk Management Suite | Position monitoring, market controls, and operational risk tools — out of the box. |
| Settlement Engine | Automated multi-currency settlement with real-time reconciliation. |
| Commission Splitting | Configurable commission models and transparent revenue sharing. |

### Deployment Process — From Concept to Live Exchange

Structured process for a smooth, predictable launch.

| Step | Title | Description |
|------|-------|-------------|
| 01 | Consultation | Define scope, markets, branding, and commercial structure. |
| 02 | Configuration | Platform setup, branding, risk parameters, and API integration. |
| 03 | Testing | UAT, stress testing, and compliance review. |
| 04 | Launch | Go live with full support and ongoing optimisation. |

### Integration — Seamless Technical Integration

Connect IQEX with your existing infrastructure.

| Title | Description |
|-------|-------------|
| API Access | Full gRPC API access for your systems and workflows. |
| Admin Dashboard | Back-office tools for user management, market config, and operations. |
| Real-Time Reporting | Live dashboards for volumes, P&L, customer activity, and risk. |

### Target Partners — Built for Ambitious Operators

Regional operator, sports community, or Web3 platform — IQEX gives you the infrastructure to compete.

| Title | Description |
|-------|-------------|
| Regional Operators | Localised exchange with region-specific sports, languages, and payments. |
| Affiliates & Networks | Turn your audience into active traders under your brand. |
| Sports Communities | Professional prediction markets tailored to your community. |
| Crypto & Web3 Platforms | Sports trading with stablecoin integration and hybrid settlement. |

### Why IQEX — The Operator's Advantage

Live exchange infrastructure backed by institutional-grade technology.

- No development team required — fully managed platform
- Continuous updates to matching engine and risk systems
- Access to IQEX liquidity pool and market maker network
- Flexible commercial terms with transparent revenue sharing
- Dedicated account management and technical support
- Full regulatory and compliance framework support

### Typical Deployment Includes

1. Branded trading UI (web & mobile-responsive)
2. Full order book & matching engine access
3. Risk management dashboard
4. Customer management & KYC tools
5. Settlement & reconciliation engine
6. Reporting & analytics suite
7. API access for third-party integrations
8. Sandbox environment for testing

### CTA — Ready to Launch Your Exchange?

Get in touch with our partnerships team to discuss your white-label requirements.

- Contact Partnerships → /contact
- Explore Technology → /technology

---

## 7. MARKETS

### Hero

**Badge:** Markets & Coverage

**Title:** Deep Vertical Coverage Across Global Sports

**Subtitle:** Institutional-depth markets in cricket, football, tennis, and custom verticals.

**CTAs:**
- Access Markets → /contact
- View Technology → /technology

### Sports Coverage — Core Sports Verticals

Deep coverage across the world's most traded sports with full in-play support.

#### Cricket (Primary Focus)
**Leagues:** IPL, ICC World Cup, The Ashes, Big Bash League, PSL, CPL
**Market Types:** Match Odds, Match Odds with Draw, Completed Match, Tied Match, Innings Session Total, Innings Total Line

#### Football (Global Coverage)
**Leagues:** FIFA World Cup 2026, Premier League, La Liga, Champions League, Serie A, Bundesliga
**Market Types:** Full Time Match Odds, Asian Handicap, Asian Handicap Total Goals, Total Goals Over/Under, Correct Score

#### Tennis (Deep Markets)
**Leagues:** Grand Slams, ATP Tour, WTA Tour, Davis Cup
**Market Types:** Match Odds, Set Winner

### Capabilities — Market Infrastructure Features

Core capabilities powering every market on the IQEX platform.

| Title | Description |
|-------|-------------|
| Real-Time In-Play | Sub-second updates with automated suspension during live events. |
| 15+ Market Types | From match winner to complex session markets — diverse strategies supported. |
| Fast Market Creation | Rapid deployment with automated pricing and settlement rules. |
| Custom Markets | Bespoke markets for prediction events, political outcomes, and niche verticals. |
| Dynamic Pricing | Algorithmic prices with real-time adjustment from market activity and data feeds. |
| Multi-Operator Support | Shared infrastructure serves multiple white-label operators with isolated risk. |

### Beyond Sports — Custom & Prediction Markets

Custom markets for any verifiable outcome beyond traditional sports.

Operators and agents request markets for any verifiable outcome, subject to jurisdictional compliance.

| Name | Description |
|------|-------------|
| Prediction Markets | Event-driven markets for outcomes beyond traditional sports. |
| Agent-Requested | Custom markets created on demand for specific operator needs. |
| Political Events | Election and political outcome markets (jurisdiction dependent). |
| Entertainment | Awards, reality TV, and cultural event markets. |
| Esports | Competitive gaming markets across major titles and tournaments. |
| Niche Sports | Kabaddi, table tennis, darts, and emerging sports coverage. |

### CTA — Explore IQEX Markets

Discuss market coverage, custom verticals, or operator access with our team.

- Contact Us → /contact
- API Documentation → /developers

---

## 8. COMPLIANCE

### Hero

**Badge:** Regulatory & Compliance

**Title:** Built on Trust, Governed by Standards

**Subtitle:** Regulatory rigour built for institutional-grade market infrastructure.

### Compliance Framework — Four Pillars of Regulatory Assurance

Full-spectrum compliance for exchange infrastructure.

| Title | Description |
|-------|-------------|
| Jurisdictional Structure | Multi-jurisdictional framework with localised compliance and global operational standards. |
| KYC / AML Standards | Identity verification and AML protocols at every layer, tiered by risk. |
| Market Integrity & Surveillance | Real-time detection of manipulation with automated alerts for compliance teams. |
| Responsible Market Operations | Exposure limits, cooling-off, and self-exclusion tools for regulated markets. |

### Capabilities — Compliance Infrastructure

Integrated tools for regulatory adherence across all operations.

| Title | Description |
|-------|-------------|
| Transaction Monitoring | Automated screening of all transactions against sanctions and PEP databases. |
| Suspicious Activity Reporting | SAR workflows with escalation protocols and regulatory filing support. |
| Multi-Jurisdiction Support | Per-jurisdiction rules with geo-fencing and localised reporting. |
| Data Protection | GDPR-compliant handling with encryption and data residency controls. |
| Audit Trail | Immutable audit logs with regulatory-ready reporting. |
| Identity Verification | Multi-tier KYC with document, biometric, and ongoing due diligence. |

### Our Commitment — Regulatory Excellence

Operating at the highest standards of compliance and market integrity.

Strong compliance is a competitive advantage. Partners choose IQEX for governance, security, and regulatory posture.

**Our Commitments:**
- Licensed or licensable framework across target jurisdictions
- Independent security audits and penetration testing
- Regular compliance programme reviews and updates
- Dedicated compliance officer and regulatory liaison
- Staff training on AML, responsible trading, and data protection
- Transparent reporting to regulators and operators
- Cooperation with law enforcement and integrity bodies
- Continuous improvement based on regulatory developments

### CTA — Compliance Enquiries

For regulatory questions, compliance documentation, or partnership discussions.

- Contact Compliance → /contact
- About IQEX → /about

---

## 9. CONTACT

### Hero

**Badge:** Contact

**Title:** Get in Touch

**Subtitle:** API integration, partnerships, or white-label deployment — we're ready to help.

### Send a Message — Tell Us About Your Requirements

**Form Fields:**
- Full Name *
- Email Address *
- Company
- Enquiry Type * (Partnerships & White Label / Liquidity & Market Making / API & Technical Integration / Compliance & Regulatory / General Enquiry)
- Message *
- Submit: Send Message

**Success Message:** Message Received — Thank you for your enquiry. Our team will respond within one business day.

### Direct Channels — Reach Our Teams

| Title | Description | Email |
|-------|-------------|-------|
| Partnerships & White Label | White-label deployment, operator partnerships, and commercial arrangements. | contact@iqex.io |
| Liquidity & Market Making | Liquidity partner applications, fee structures, and market making programmes. | contact@iqex.io |
| API & Technical Integration | API credentials, sandbox access, and technical integration support. | technical@iqex.io |
| General Enquiries | Press, compliance, regulatory, and general enquiries. | contact@iqex.io |

### Response Times

| Enquiry Type | Response Time |
|-------------|---------------|
| Partnership enquiries | Within 24 hours |
| Technical support | Within 4 hours |
| General enquiries | Within 48 hours |

---

## FOOTER

**Tagline:** The infrastructure layer for global sports markets. Exchange-grade technology powering next-generation trading.

**Footer Sections:**
- Solutions: Exchange Technology, Liquidity Access, White Label, Web3 Rails
- Markets: Cricket, Football, Tennis, Custom Markets
- Developers: API Documentation, Sandbox Access, Status Page
- Company: About IQEX, Compliance, Contact

**Bottom Bar:** © 2026 IQEX Exchange. All rights reserved. | Privacy Policy | Terms of Service | Regulatory

---

*End of document.*
