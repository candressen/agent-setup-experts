# ASE Client Portal Visual System

## Product frame

The ASE Client Portal should feel like the operational layer beneath the public marketing site: premium, disciplined, data-forward, and calm under pressure. The interface should communicate that agents are running real business workflows, not demos. The tone is closer to Linear, Vercel, and Stripe dashboard surfaces than a community app or marketing microsite.

## Visual direction

- Structural model: dark shell with a near-black sidebar and top rail, light main workspace for analysis and scanning.
- Brand continuity: keep ASE's existing electric blue signal color and deep charcoal base from the marketing site.
- Density: medium-high information density with generous card padding so the product feels capable, not cramped.
- Emphasis: metrics first, agent status second, activity stream third.

## Color palette

### Core tokens

| Token | Hex | Usage |
|---|---|---|
| `portal-sidebar` | `#07111F` | Primary nav shell, app chrome |
| `portal-sidebar-elevated` | `#0D1A2D` | Hovered sidebar items, secondary dark surfaces |
| `portal-surface` | `#F3F7FC` | Main page background |
| `portal-card` | `#FFFFFF` | Cards, tables, modal surfaces |
| `portal-card-muted` | `#EEF4FB` | Secondary card fills, inactive zones |
| `portal-border` | `#D7E3F4` | Default borders and table dividers |
| `portal-border-strong` | `#B7CAE5` | Focused states, active nav border |
| `portal-text` | `#0F172A` | Primary body text |
| `portal-text-muted` | `#52627A` | Labels, metadata, helper copy |
| `portal-text-subtle` | `#71839C` | Tertiary copy and disabled states |
| `portal-accent` | `#2563EB` | Primary CTA, chart highlight, active nav |
| `portal-accent-strong` | `#1D4ED8` | Hover/pressed CTA |
| `portal-accent-soft` | `#DBEAFE` | Active backgrounds, filtered chips |
| `portal-highlight` | `#14B8A6` | Secondary positive data accent |

### Status tokens

| State | Hex | Meaning |
|---|---|---|
| `status-active` | `#10B981` | Agent healthy and running |
| `status-idle` | `#F59E0B` | Waiting, queued, or no recent task |
| `status-error` | `#EF4444` | Failure, blocked integration, or manual intervention needed |
| `status-paused` | `#64748B` | Manually paused or trial not launched |
| `status-trial` | `#8B5CF6` | Trial-only badge or preview state |

### Background treatment

- Sidebar/background chrome should use a subtle vertical gradient from `#07111F` to `#0B1628`.
- Main workspace should sit on a cool tinted gray-blue instead of pure white.
- Large dashboard sections can use faint radial accents in the top corners for depth, but the content surface must remain crisp and low-noise.

## Typography scale

### Fonts

- Primary sans: Geist Sans
- Numeric/metric font: Geist Mono with tabular numerals enabled
- Fallbacks: `ui-sans-serif, system-ui, sans-serif` and `ui-monospace, SFMono-Regular, monospace`

### Type roles

| Role | Size | Line height | Weight | Notes |
|---|---|---|---|---|
| Page title | `40px` desktop / `32px` mobile | `1.05` | `700` | Used for dashboard and entity titles |
| Section title | `24px` | `1.15` | `650` | Card group or panel title |
| Card title | `18px` | `1.3` | `600` | Agent card, table title, feed title |
| Body | `15px` | `1.6` | `450` | Default portal body copy |
| Secondary body | `14px` | `1.55` | `450` | Metadata rows, helper text |
| Label / caption | `12px` | `1.4` | `600` | Uppercase optional for nav groups and stat labels |
| Metric XL | `64px` desktop / `48px` mobile | `0.95` | `700` | Headline KPI on overview cards |
| Metric L | `52px` desktop / `40px` mobile | `0.95` | `700` | Standard KPI cards |
| Metric M | `36px` | `1` | `650` | Compact KPI, inline summaries |

### Typographic behavior

- Use negative tracking very lightly on display numbers and page titles.
- Enable tabular numerals for all metrics, timestamps, and data tables.
- Avoid all-caps for large headers; reserve uppercase for compact labels only.

## Spacing system

Use a strict 8px grid.

- `4px`: hairline icon offset or badge dot only
- `8px`: internal label/icon spacing
- `16px`: compact row spacing
- `24px`: default card padding on mobile
- `32px`: desktop card padding or section gaps inside panels
- `40px`: page section gap on mobile
- `48px`: standard desktop section gap
- `64px`: large dashboard rhythm between major zones

Component rhythm:

- Card radius: `16px`
- Input/button radius: `12px`
- Pill radius: `999px`
- Table row height: `52px` minimum
- Sidebar width: `280px` desktop, drawer on mobile

## Component specs

### Agent cards

- Surface: white card on light workspace with soft shadow and `1px` cool border
- Radius: `16px`
- Padding: `24px`
- Layout:
  - Top row: agent name, one-line category or business function, status pill
  - Middle: concise description with max 2 lines
  - Bottom: last run timestamp, key metric, action link
- Hover: translate `-2px`, shadow deepens, border tint shifts slightly toward accent
- Trial variation: include a subtle trial badge or muted callout for remaining days

### Status pills

- Height: `28px`
- Padding: `0 12px`
- Typography: `12px`, `600`
- Include a leading 8px status dot
- Backgrounds should be low-saturation tinted fills, never neon blocks

### Metric headline cards

- Number uses Geist Mono with tabular numerals
- Standard metric card:
  - padding `24px`
  - number `52px`
  - label below in muted text
  - optional trend chip aligned top-right
- Hero metric:
  - number up to `64px`
  - supporting sentence below to explain what changed

### Data table

- Table surface: white card with sticky header optional later
- Header background: very light cool gray-blue
- Row dividers: `portal-border`
- Header text: `12px` uppercase optional, muted, semibold
- Body text: `14px`
- Sorting affordance: small chevron, accent only when active
- Pagination: compact control row with page number and results count
- Export action: outlined secondary button in top-right

### Sidebar navigation

- Background: `portal-sidebar`
- Width: `280px`
- Logo zone: `72px` height with bottom divider
- Nav item:
  - height `44px`
  - radius `12px`
  - icon left, label middle, optional badge right
  - active state uses accent glow line or filled soft blue background
- Footer zone can show account/trial state and support shortcut

### Login form

- Layout: centered single-column card, max width `440px`
- Form card padding: `32px`
- Inputs:
  - height `48px`
  - radius `12px`
  - background white
  - border `portal-border`
  - focus ring `portal-accent` with soft blue halo
- Submit button:
  - filled accent background
  - height `48px`
  - medium shadow
- Supporting links:
  - muted text, accent on hover

### Activity feed

- Vertical timeline feel using a faint left rail
- Event icon inside a `32px` circular chip
- Timestamp aligned right on desktop, stacked below on mobile
- Event rows stay compact but readable, `16px` vertical spacing

## Motion

- Page/panel entry: fade in + rise `12px` over `240ms`
- Card hover: `translateY(-2px)` and shadow increase over `180ms`
- Sidebar nav hover: background tint + text brighten over `160ms`
- Respect reduced motion preferences and remove transforms when requested

## Dark vs light mode recommendation

Recommendation: **ship one intentional mixed theme first** instead of dual mode.

- Dark shell + light workspace is the best fit for this product right now.
- It preserves ASE’s premium dark brand language while keeping dense operational data easier to scan.
- Full dark mode can be introduced later if customers request it, but it should be a second phase, not a compromised first release.

## Mobile responsiveness approach

- Keep desktop as a two-column app shell: fixed sidebar + scrolling main content.
- Collapse sidebar into a slide-over drawer below `1024px`.
- Reflow KPI cards from `4-up` or `3-up` grids into stacked cards with `16px` gaps.
- Tables should become horizontally scrollable containers rather than forced card conversions unless the dataset is very small.
- Agent cards and activity feed should stack metadata beneath titles instead of truncating aggressively.
- Preserve the metric scale hierarchy on mobile by dropping from `64px` to `48px`, not by making everything small.

## UX recommendations for user types

### Live clients

- Prioritize operational confidence: active agents, last run, outputs delivered, current month totals.
- Surface exceptions early: failed jobs, stale integrations, manual review needed.

### Trial users

- Keep the same information architecture, but layer in more guidance:
  - trial remaining badge
  - onboarding completion meter
  - locked or upcoming features clearly marked without making the portal feel broken

## Accessibility baseline

- Minimum body text contrast `4.5:1`
- Focus ring visible on all interactive controls
- Buttons and nav targets minimum `44px`
- Color is never the sole status indicator; pair with label and dot/icon
- Tables must preserve semantic headers and keyboard sorting controls
