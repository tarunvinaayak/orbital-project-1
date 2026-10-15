export type Category =
  | "geopolitics"
  | "business"
  | "technology"
  | "science"
  | "markets"
  | "climate"
  | "culture"
  | "ideas";

export type MarkerTone = "breaking" | "technology" | "science" | "business" | "climate" | "culture";

export type Region = "Americas" | "Europe" | "Africa" | "Asia" | "Oceania" | "Orbit";

export type Story = {
  id: string;
  category: Category;
  headline: string;
  summary: string;
  what: string;
  why: string;
  who: string;
  next: string;
  location: string;
  country: string;
  region: Region;
  lat: number;
  lon: number;
  minutesAgo: number;
  impact: number;
  importance: 1 | 2 | 3 | 4 | 5;
  sources: string[];
  confidence: "high" | "medium";
  marker: MarkerTone;
  companies: string[];
  people: string[];
  tags: string[];
};

export const DESK_DATE = "14 Oct 2026";

export const stories: Story[] = [
  {
    id: "geneva-framework",
    category: "geopolitics",
    headline: "Geneva talks sketch a corridor bargain, not a treaty",
    summary:
      "Negotiators closed a three-day round that trades limited corridor access for a pause on new basing. The text is a sequenced framework with a 30-day verification window, not a signed accord.",
    what:
      "Delegations left Geneva with a draft covering airspace notices, a narrow trade corridor, and a freeze on new permanent bases. A verification cell would sit in Geneva. Nothing is signed.",
    why:
      "If the freeze holds, the chance of a misread along a contested route falls, and a supply line several manufacturers still price as unreliable can be treated as open again.",
    who: "Corridor governments, route insurers, and plants that depend on the passage.",
    next:
      "A technical annex is expected within seven days. The tell is whether the verification cell is actually staffed.",
    location: "Geneva",
    country: "Switzerland",
    region: "Europe",
    lat: 46.2,
    lon: 6.15,
    minutesAgo: 26,
    impact: 82,
    importance: 5,
    sources: [
      "Official communiqué",
      "Desk notes",
      "Route insurer bulletin",
      "Prior framework text",
      "Airspace notice log",
      "Trade desk",
      "Verification proposal",
      "Regional brief",
    ],
    confidence: "medium",
    marker: "breaking",
    companies: [],
    people: ["Corridor envoys"],
    tags: ["diplomacy", "security", "trade"],
  },
  {
    id: "ny-prints",
    category: "markets",
    headline: "A cooler print resets the week’s rate path",
    summary:
      "A softer activity print in New York pulled the front end of the curve down and lifted duration-sensitive shares. The move is about the path, not a single cut.",
    what:
      "The morning release came in below the desk consensus on activity and in line on prices. Two-year yields fell and equity futures firmed before the cash open.",
    why:
      "Positioning was leaning toward a hotter print. The miss forces funds that were short duration to cover, and it reopens a debate boards had parked until year-end.",
    who: "Rate-sensitive lenders, growth equities, and treasury desks in the Americas and London.",
    next:
      "Speakers later this week matter more than the print itself. Watch whether officials describe the miss as noise.",
    location: "New York",
    country: "United States",
    region: "Americas",
    lat: 40.71,
    lon: -74.0,
    minutesAgo: 18,
    impact: 78,
    importance: 5,
    sources: ["Official release", "Futures tape", "Desk consensus", "Speaker calendar"],
    confidence: "high",
    marker: "business",
    companies: [],
    people: ["Rates desk"],
    tags: ["markets", "rates", "macro"],
  },
  {
    id: "sg-compute",
    category: "technology",
    headline: "Singapore funds a new block of AI power and land",
    summary:
      "A state-linked vehicle outlined a multi-year plan for power, land, and interconnect aimed at training clusters. The announcement is about infrastructure, not a model release.",
    what:
      "The plan pairs reserved grid capacity with a campus site and a commitment to publish interconnection timelines. No chip vendor was named as exclusive.",
    why:
      "Training demand is now a power-and-permitting story. A funded site with a public timeline becomes a place capital can underwrite, which is rarer than another model demo.",
    who: "Cloud builders, utilities, equipment vendors, and funds allocating to Asian compute.",
    next:
      "Watch the first interconnection date and whether a second site is optioned before year-end.",
    location: "Singapore",
    country: "Singapore",
    region: "Asia",
    lat: 1.35,
    lon: 103.82,
    minutesAgo: 12,
    impact: 86,
    importance: 5,
    sources: ["Investment outline", "Grid note", "Campus filing", "Desk call"],
    confidence: "high",
    marker: "technology",
    companies: ["Grid partners", "Campus operator"],
    people: ["Infrastructure board"],
    tags: ["ai", "infrastructure", "startups", "technology"],
  },
  {
    id: "in-fabs",
    category: "technology",
    headline: "India ties a fresh incentive tranche to packaging, not just wafers",
    summary:
      "A new incentive window in Bengaluru emphasizes advanced packaging and design services alongside fabrication. The shift matches where capacity is actually tight.",
    what:
      "Officials described a tranche aimed at assembly, test, and design houses, with a reporting rule on domestic hiring and power use.",
    why:
      "Wafer headlines travel further, but packaging is the bottleneck for many AI boards. Incentives there change who can ship, not only who can announce a fab.",
    who: "Design houses in India, global packaging firms, and device makers sourcing boards in Asia.",
    next:
      "The first award list is the story. Announced interest is not capacity.",
    location: "Bengaluru",
    country: "India",
    region: "Asia",
    lat: 12.97,
    lon: 77.59,
    minutesAgo: 44,
    impact: 74,
    importance: 4,
    sources: ["Policy note", "Industry submission", "Desk brief"],
    confidence: "high",
    marker: "technology",
    companies: ["Packaging applicants"],
    people: ["Incentive cell"],
    tags: ["ai", "india", "startups", "technology", "semiconductors"],
  },
  {
    id: "tokyo-robots",
    category: "technology",
    headline: "A Tokyo lab shows a robot that finishes a warehouse pick without a script",
    summary:
      "Researchers demonstrated a mobile arm completing a multi-step pick in an unfamiliar aisle. It is a lab result with a narrow task, not a factory rollout.",
    what:
      "The system planned a short sequence, recovered from one dropped item, and logged the run. The environment was instrumented. Failure cases were not fully published.",
    why:
      "The interesting shift is from a single command to a short chain of actions. If the recovery rate holds outside the lab, warehouse software becomes the product, not the arm.",
    who: "Logistics operators, robot makers, and insurers still pricing autonomy as a pilot.",
    next:
      "A third-party aisle trial is the next credible step. Demos without a miss rate are not.",
    location: "Tokyo",
    country: "Japan",
    region: "Asia",
    lat: 35.68,
    lon: 139.69,
    minutesAgo: 70,
    impact: 69,
    importance: 4,
    sources: ["Lab note", "Demo log", "Prior benchmark"],
    confidence: "medium",
    marker: "technology",
    companies: ["Lab spinout"],
    people: ["Robotics group"],
    tags: ["robotics", "ai", "technology"],
  },
  {
    id: "kourou-window",
    category: "science",
    headline: "A climate-and-comms spacecraft holds a dawn window at Kourou",
    summary:
      "Range teams kept a launch window for a satellite that will refresh both Earth-observation and a narrowband relay. Weather is the constraint, not the vehicle.",
    what:
      "The window opens before dawn local time. The payload combines an imaging instrument with a relay for remote ground stations. No crewed element is involved.",
    why:
      "A successful insertion adds a data source regions still cover poorly, and it tests a cheaper combined bus that later missions want to copy.",
    who: "Weather services, maritime users, and the agencies sharing the bus design.",
    next:
      "If the window slips, the next clean slot is 48 hours out. The insertion burn is the only number that matters after liftoff.",
    location: "Kourou",
    country: "French Guiana",
    region: "Americas",
    lat: 5.16,
    lon: -52.65,
    minutesAgo: 95,
    impact: 71,
    importance: 4,
    sources: ["Range notice", "Payload card", "Weather desk"],
    confidence: "high",
    marker: "science",
    companies: ["Launch provider"],
    people: ["Range director"],
    tags: ["space", "climate", "science"],
  },
  {
    id: "eu-grid",
    category: "climate",
    headline: "Brussels ties new grid cash to storage, not just wires",
    summary:
      "A policy draft would steer the next energy package toward storage and flexible demand. Member states still have to agree the split.",
    what:
      "The draft earmarks a larger share for batteries, long-duration storage, and industrial demand response. Cross-border lines stay in the package, but they are no longer the headline.",
    why:
      "More wire without flexibility leaves midday surplus and evening scarcity. Storage is what makes the last decade of renewable build usable.",
    who: "Utilities, storage developers, heavy industry, and households on time-of-use tariffs.",
    next:
      "A council reading this month will show which capitals want the storage share cut.",
    location: "Brussels",
    country: "Belgium",
    region: "Europe",
    lat: 50.85,
    lon: 4.35,
    minutesAgo: 52,
    impact: 77,
    importance: 4,
    sources: ["Draft text", "Commission note", "Industry response"],
    confidence: "medium",
    marker: "climate",
    companies: ["Storage developers"],
    people: ["Energy ministers"],
    tags: ["climate", "energy", "policy"],
  },
  {
    id: "strait-slow",
    category: "business",
    headline: "Tonnage through a key strait is quietly lighter",
    summary:
      "Tracking desks show fewer laden transits this week, concentrated in bulk rather than containers. The cause is schedules, not a closure.",
    what:
      "Automatic identification data shows a week-on-week dip in laden bulk transits. Container strings are broadly unchanged. No authority has announced a restriction.",
    why:
      "A scheduled dip is noise. A dip that persists into next week shows up in freight rates and in inventories for mills that buy week to week.",
    who: "Bulk shippers, commodity traders, and ports on either side of the strait.",
    next:
      "Three more soft days would move this from a schedule note to a demand signal.",
    location: "Malacca Strait",
    country: "Singapore",
    region: "Asia",
    lat: 2.5,
    lon: 101.5,
    minutesAgo: 140,
    impact: 64,
    importance: 3,
    sources: ["AIS sample", "Port call list", "Desk note"],
    confidence: "medium",
    marker: "business",
    companies: ["Bulk operators"],
    people: ["Freight desk"],
    tags: ["shipping", "business", "trade"],
  },
  {
    id: "boston-assay",
    category: "science",
    headline: "A Boston group publishes a faster assay for a hard-to-see pathogen",
    summary:
      "A methods paper describes a test that returns a result in under an hour on standard lab hardware. It is not a clinical approval.",
    what:
      "The assay uses existing thermocyclers and a redesigned primer set. The paper reports sensitivity on stored samples, not a prospective trial.",
    why:
      "Speed on hardware hospitals already own matters more than a perfect instrument nobody can buy. The gap is still clinical validation.",
    who: "Hospital labs, diagnostics firms, and public-health agencies watching turnaround time.",
    next:
      "A multi-site validation is the step that would move this from paper to protocol.",
    location: "Boston",
    country: "United States",
    region: "Americas",
    lat: 42.36,
    lon: -71.06,
    minutesAgo: 180,
    impact: 66,
    importance: 3,
    sources: ["Methods paper", "Lab supplement", "Desk review"],
    confidence: "high",
    marker: "science",
    companies: ["Diagnostics partners"],
    people: ["Assay team"],
    tags: ["biotechnology", "science", "healthcare"],
  },
  {
    id: "nairobi-heat",
    category: "climate",
    headline: "East African forecast desks flag a longer hot spell for cities",
    summary:
      "Seasonal guidance points to above-normal heat across several highland cities into the next month. Rain timing is less clear.",
    what:
      "National services aligned on a warm signal for the coming weeks. They did not issue a uniform rainfall warning. Urban advisories are being drafted.",
    why:
      "Heat in cities that were planned for cooler nights stresses power, health clinics, and outdoor work at the same time. The compound risk is the story.",
    who: "City governments, grid operators, clinics, and outdoor employers across the region.",
    next:
      "Watch whether capitals publish work-hour guidance before the first peak week.",
    location: "Nairobi",
    country: "Kenya",
    region: "Africa",
    lat: -1.29,
    lon: 36.82,
    minutesAgo: 210,
    impact: 73,
    importance: 4,
    sources: ["Seasonal guidance", "City advisory draft", "Health desk"],
    confidence: "medium",
    marker: "climate",
    companies: [],
    people: ["Forecast services"],
    tags: ["climate", "cities", "health"],
  },
  {
    id: "seoul-archive",
    category: "culture",
    headline: "Seoul opens a public model of a century of city film",
    summary:
      "A municipal archive released a browsable reconstruction of lost street footage, with rights cleared for education. It is a cultural release with a data method underneath.",
    what:
      "The project stitches restored reels with maps and lets schools license clips at no fee. Commercial reuse stays restricted.",
    why:
      "The method — rights-cleared, place-linked public memory — is the reusable part. Other cities are already asking how the clearance was done.",
    who: "Educators, filmmakers, and city archives looking for a template.",
    next:
      "A second city is in talks to copy the rights process, not the footage.",
    location: "Seoul",
    country: "South Korea",
    region: "Asia",
    lat: 37.57,
    lon: 126.98,
    minutesAgo: 260,
    impact: 48,
    importance: 2,
    sources: ["Archive release", "Rights note"],
    confidence: "high",
    marker: "culture",
    companies: [],
    people: ["City archivists"],
    tags: ["culture", "cities", "media"],
  },
  {
    id: "tallinn-grid",
    category: "technology",
    headline: "A Baltic exercise exposes a quiet flaw in substation remote access",
    summary:
      "A planned defensive exercise found identical remote-access settings across several substations. Operators were notified before any public detail.",
    what:
      "The finding is a configuration pattern, not a named breach. Patches and access reviews were issued to participants. No outage was reported.",
    why:
      "Shared defaults travel. A pattern found in one exercise is often a pattern sitting in networks that were not in the room.",
    who: "Grid operators, equipment vendors, and regulators writing access rules.",
    next:
      "The useful follow-up is how many non-participants ask for the same checklist.",
    location: "Tallinn",
    country: "Estonia",
    region: "Europe",
    lat: 59.44,
    lon: 24.75,
    minutesAgo: 300,
    impact: 70,
    importance: 4,
    sources: ["Exercise summary", "Vendor note", "Operator advisory"],
    confidence: "medium",
    marker: "technology",
    companies: ["Grid vendors"],
    people: ["Exercise leads"],
    tags: ["cybersecurity", "energy", "technology"],
  },
  {
    id: "stuttgart-fleet",
    category: "business",
    headline: "A German group will pilot streets that price curb space by the minute",
    summary:
      "Stuttgart approved a limited pilot where loading bays and a few resident blocks use live curb pricing. It is a mobility trial, not a citywide toll.",
    what:
      "The pilot covers defined streets, a published price cap, and a sunset clause. Freight firms can book bays ahead. Private cars are not the target.",
    why:
      "Curb space is the scarce asset in city logistics. Pricing it cleanly is how electric fleets and deliveries stop competing for the same five meters.",
    who: "Freight operators, city transport offices, and residents on the pilot streets.",
    next:
      "The first month of bay utilization will show whether bookings beat circling.",
    location: "Stuttgart",
    country: "Germany",
    region: "Europe",
    lat: 48.78,
    lon: 9.18,
    minutesAgo: 340,
    impact: 58,
    importance: 3,
    sources: ["Council vote", "Pilot map"],
    confidence: "high",
    marker: "business",
    companies: ["Freight partners"],
    people: ["Transport office"],
    tags: ["mobility", "cities", "business"],
  },
  {
    id: "london-rails",
    category: "markets",
    headline: "London payment rails test a wholesale token that stays on the bank ledger",
    summary:
      "A small set of banks will settle a tokenized deposit between themselves after hours. Retail balances are not in the trial.",
    what:
      "The test uses tokenized commercial-bank deposits, not a retail coin. Settlement stays inside existing ledgers. The window is after the cash market closes.",
    why:
      "The argument for tokens in markets is hours and atomic settlement, not a new currency. A boring bank-ledger trial is the version supervisors can actually allow.",
    who: "Wholesale banks, market infrastructures, and treasurers who still wait overnight for finality.",
    next:
      "If the after-hours window clears without a reconciliation break, a second cohort is likely.",
    location: "London",
    country: "United Kingdom",
    region: "Europe",
    lat: 51.51,
    lon: -0.12,
    minutesAgo: 400,
    impact: 68,
    importance: 4,
    sources: ["Trial term sheet", "Supervisory note", "Bank statement"],
    confidence: "high",
    marker: "business",
    companies: ["Participating banks"],
    people: ["Market infrastructure leads"],
    tags: ["markets", "finance", "startups"],
  },
];

export const quickUpdates = [
  { n: "01", place: "USA", text: "Markets reprice a cooler activity print.", id: "ny-prints" },
  { n: "02", place: "EUROPE", text: "Draft energy cash tilts toward storage.", id: "eu-grid" },
  { n: "03", place: "INDIA", text: "Incentives shift toward chip packaging.", id: "in-fabs" },
  { n: "04", place: "SINGAPORE", text: "A funded plan for AI power and land.", id: "sg-compute" },
  { n: "05", place: "JAPAN", text: "A lab robot finishes an unscripted pick.", id: "tokyo-robots" },
  { n: "06", place: "SWITZERLAND", text: "Geneva leaves a framework, not a treaty.", id: "geneva-framework" },
  { n: "07", place: "SPACE", text: "Kourou holds a dawn window for a dual payload.", id: "kourou-window" },
  { n: "08", place: "AFRICA", text: "City heat guidance is being drafted.", id: "nairobi-heat" },
  { n: "09", place: "ESTONIA", text: "A grid exercise finds a shared access flaw.", id: "tallinn-grid" },
  { n: "10", place: "STRAIT", text: "Laden bulk transits run lighter this week.", id: "strait-slow" },
  { n: "11", place: "UK", text: "Banks test an after-hours tokenized deposit.", id: "london-rails" },
  { n: "12", place: "KOREA", text: "A city film archive opens for schools.", id: "seoul-archive" },
];

export type Trend = {
  id: string;
  name: string;
  group: string;
  momentum: number;
  direction: "up" | "down" | "flat";
  line: string;
  why: string;
  series: number[];
};

export const trends: Trend[] = [
  {
    id: "agents",
    name: "AI agents",
    group: "AI",
    momentum: 87,
    direction: "up",
    line: "Systems are moving from answers to short chains of work — with a human still on the loop.",
    why: "The spend is shifting from chat seats to workflow software that can finish a task.",
    series: [22, 28, 31, 36, 44, 49, 58, 63, 71, 76, 82, 87],
  },
  {
    id: "robots",
    name: "Useful robotics",
    group: "Robotics",
    momentum: 64,
    direction: "up",
    line: "Warehouse and lab demos are finally publishing recovery rates, not only highlight reels.",
    why: "Insurers and operators buy the miss rate. Publishing it is what turns a demo into a pilot.",
    series: [30, 32, 33, 38, 40, 44, 46, 51, 55, 57, 61, 64],
  },
  {
    id: "heat",
    name: "Urban heat",
    group: "Climate",
    momentum: 71,
    direction: "up",
    line: "Cities are writing heat as an operating problem: hours, grids, and clinics together.",
    why: "The cost shows up in labor rules and peak power, not only in climate reports.",
    series: [40, 42, 45, 48, 50, 52, 55, 58, 62, 66, 68, 71],
  },
  {
    id: "storage",
    name: "Grid storage",
    group: "Energy",
    momentum: 76,
    direction: "up",
    line: "Policy drafts are starting to pay for flexibility, not only for new generation.",
    why: "Without storage, the last decade of renewable build cannot cover the evening.",
    series: [28, 30, 34, 36, 41, 48, 52, 57, 63, 68, 72, 76],
  },
  {
    id: "dual-use-orbit",
    name: "Shared orbits",
    group: "Space",
    momentum: 58,
    direction: "up",
    line: "Missions that combine imaging and relay on one bus are getting cheaper to copy.",
    why: "One launch that serves two agencies is how smaller programs get on orbit.",
    series: [20, 22, 24, 27, 30, 33, 36, 40, 44, 49, 54, 58],
  },
  {
    id: "token-deposits",
    name: "Tokenized deposits",
    group: "Finance",
    momentum: 54,
    direction: "up",
    line: "The live experiments are bank liabilities on existing ledgers, not retail coins.",
    why: "Supervisors will allow hours and atomic settlement long before a new public money.",
    series: [18, 19, 21, 24, 26, 30, 33, 37, 41, 46, 50, 54],
  },
  {
    id: "assays",
    name: "Faster assays",
    group: "Biotechnology",
    momentum: 49,
    direction: "up",
    line: "Methods that run on hardware hospitals already own are outpacing new instruments.",
    why: "Turnaround time is a staffing and bed problem. The installed base is the market.",
    series: [24, 25, 27, 29, 31, 33, 36, 38, 41, 44, 47, 49],
  },
  {
    id: "ot-access",
    name: "Operational access",
    group: "Cybersecurity",
    momentum: 68,
    direction: "up",
    line: "Defensive exercises keep finding the same remote-access defaults on physical plant.",
    why: "A shared default is a sector risk. Checklists now travel faster than patches.",
    series: [26, 29, 32, 35, 39, 43, 47, 51, 56, 60, 64, 68],
  },
  {
    id: "curb",
    name: "Priced curbs",
    group: "Mobility",
    momentum: 41,
    direction: "flat",
    line: "Cities are piloting minute-level curb prices for freight, with hard caps and sunsets.",
    why: "Delivery economics in dense cities are a curb problem wearing an EV costume.",
    series: [33, 34, 36, 35, 37, 38, 37, 39, 40, 40, 41, 41],
  },
  {
    id: "packaging",
    name: "Advanced packaging",
    group: "Consumer technology",
    momentum: 73,
    direction: "up",
    line: "Incentive programs are following the bottleneck: packaging and design, not wafer announcements.",
    why: "Boards ship when they are packaged. That is where the next capacity actually is.",
    series: [25, 29, 32, 36, 40, 45, 50, 55, 60, 65, 69, 73],
  },
];

export type Signal = {
  id: string;
  label: string;
  direction: "up" | "down";
  detail: string;
  delta: string;
};

export const signals: Signal[] = [
  { id: "s1", label: "AI infrastructure commitments", direction: "up", detail: "Funded power and land, not model demos.", delta: "+18%" },
  { id: "s2", label: "Shared-orbit mission activity", direction: "up", detail: "Combined imaging and relay buses.", delta: "+11%" },
  { id: "s3", label: "Laden bulk transits", direction: "down", detail: "A key strait, this week, schedules not a closure.", delta: "−9%" },
  { id: "s4", label: "Storage line-items in energy drafts", direction: "up", detail: "Flexibility is entering the text.", delta: "+14%" },
  { id: "s5", label: "Robotics pilots with published misses", direction: "up", detail: "Recovery rates are finally in the notes.", delta: "+8%" },
  { id: "s6", label: "Wholesale token trials", direction: "up", detail: "After-hours settlement on bank ledgers.", delta: "+6%" },
];

export type Horizon = "24h" | "7d" | "30d" | "12m";

export type WatchItem = {
  id: string;
  horizon: Horizon;
  title: string;
  detail: string;
  kind: string;
};

export const watch: WatchItem[] = [
  { id: "w1", horizon: "24h", title: "Kourou window", detail: "Weather either clears the dual payload or slips it 48 hours.", kind: "Space" },
  { id: "w2", horizon: "24h", title: "Rates speakers", detail: "Officials react to the cooler print. The adjective they choose is the trade.", kind: "Markets" },
  { id: "w3", horizon: "7d", title: "Geneva annex", detail: "A technical annex, and whether a verification cell is staffed.", kind: "Geopolitics" },
  { id: "w4", horizon: "7d", title: "Energy council reading", detail: "Capitals mark up the storage share of the draft package.", kind: "Climate" },
  { id: "w5", horizon: "30d", title: "India award list", detail: "Packaging incentives become real only when names and sites are published.", kind: "Technology" },
  { id: "w6", horizon: "30d", title: "Heat advisories", detail: "Whether cities publish work-hour rules before the first peak.", kind: "Climate" },
  { id: "w7", horizon: "12m", title: "Singapore interconnect", detail: "The first published date power can actually reach the campus.", kind: "AI" },
  { id: "w8", horizon: "12m", title: "Token cohort two", detail: "A second set of banks only follows a clean after-hours reconciliation.", kind: "Finance" },
];

export type Idea = {
  id: string;
  problem: string;
  idea: string;
  opportunity: string;
  who: string;
};

export const ideas: Idea[] = [
  {
    id: "i1",
    problem: "Cities are adding electric demand faster than evening flexibility.",
    idea: "AI-assisted dispatch across buildings, chargers, and small storage — sold as an operating layer, not a gadget.",
    opportunity: "Software that a utility and a city can procure together, with a measured peak reduction.",
    who: "Utilities, facilities groups, and infrastructure funds.",
  },
  {
    id: "i2",
    problem: "Robot pilots die because nobody will underwrite the miss rate.",
    idea: "A shared incident log for warehouse arms, the way aviation publishes occurrences.",
    opportunity: "The data layer insurers and operators both need before a fleet contract.",
    who: "Logistics groups, robot makers, and specialty insurers.",
  },
  {
    id: "i3",
    problem: "Packaging capacity, not wafer speeches, decides who ships AI boards.",
    idea: "A marketplace that matches design houses to qualified packaging lines with power and yield disclosed.",
    opportunity: "The unglamorous exchange between India’s design bench and Asian lines.",
    who: "Design studios, OSAT plants, and incentive cells.",
  },
  {
    id: "i4",
    problem: "Public memory projects stall on rights, not on scanning.",
    idea: "A clearance protocol cities can license, separate from the footage itself.",
    opportunity: "A civic product: the legal and metadata kit, proven in one archive.",
    who: "City archives, schools, and cultural funders.",
  },
];

export const dailyFive = [
  { kicker: "Biggest geopolitical development", id: "geneva-framework" },
  { kicker: "Biggest economic development", id: "ny-prints" },
  { kicker: "Biggest technology development", id: "sg-compute" },
  { kicker: "Biggest scientific development", id: "kourou-window" },
  { kicker: "Biggest emerging trend", trendId: "agents" },
];

export const weekAhead = [
  { day: "Thu", title: "Rates speakers", note: "Reaction to the cooler print." },
  { day: "Fri", title: "Kourou backup window", note: "If dawn weather fails." },
  { day: "Mon", title: "Geneva technical annex", note: "Verification cell or silence." },
  { day: "Tue", title: "Energy council markup", note: "Storage share of the package." },
  { day: "Wed", title: "Stuttgart curb go-live", note: "First booked loading bays." },
  { day: "Next", title: "India packaging awards", note: "Names, not intentions." },
];

export type Industry = {
  slug: string;
  name: string;
  line: string;
  stories: string[];
  companies: string[];
  signal: string;
  tech: string;
  event: string;
};

export const industries: Industry[] = [
  { slug: "technology", name: "Technology", line: "Compute, packaging, and agents that finish work.", stories: ["sg-compute", "in-fabs", "tokyo-robots"], companies: ["Campus operator", "Packaging applicants", "Lab spinout"], signal: "Funded power is outrunning model announcements.", tech: "Short-horizon agents on real workflows.", event: "Singapore interconnection timeline." },
  { slug: "finance", name: "Finance", line: "Rates path and wholesale settlement hours.", stories: ["ny-prints", "london-rails"], companies: ["Participating banks"], signal: "Duration covering after a soft print.", tech: "Tokenized deposits on bank ledgers.", event: "After-hours reconciliation." },
  { slug: "healthcare", name: "Healthcare", line: "Faster tests on machines hospitals already own.", stories: ["boston-assay", "nairobi-heat"], companies: ["Diagnostics partners"], signal: "Turnaround time is the constraint.", tech: "Assays for the installed base.", event: "Multi-site validation." },
  { slug: "energy", name: "Energy", line: "Storage in the text, and access hygiene on the grid.", stories: ["eu-grid", "tallinn-grid", "sg-compute"], companies: ["Storage developers", "Grid vendors"], signal: "Flexibility is entering policy drafts.", tech: "Long-duration storage procurement.", event: "Council markup of the package." },
  { slug: "automotive", name: "Automotive", line: "The curb, not the powertrain, is the city constraint.", stories: ["stuttgart-fleet"], companies: ["Freight partners"], signal: "Minute-level curb pilots with caps.", tech: "Bookable loading bays.", event: "Stuttgart first month of utilization." },
  { slug: "real-estate", name: "Real Estate", line: "Power, heat, and curb rules are now lease terms.", stories: ["sg-compute", "nairobi-heat", "stuttgart-fleet"], companies: ["Campus operator"], signal: "Interconnect dates decide site value.", tech: "Building-level flexibility.", event: "Heat advisories before peak week." },
  { slug: "manufacturing", name: "Manufacturing", line: "Packaging lines and corridor reliability.", stories: ["in-fabs", "geneva-framework", "strait-slow"], companies: ["Packaging applicants", "Bulk operators"], signal: "Boards ship when they are packaged.", tech: "Disclosed-yield packaging slots.", event: "India award list." },
  { slug: "retail", name: "Retail", line: "Freight regularity and city delivery slots.", stories: ["strait-slow", "stuttgart-fleet"], companies: ["Bulk operators", "Freight partners"], signal: "A soft transit week is not yet a demand break.", tech: "Booked urban bays.", event: "Three more days of strait data." },
  { slug: "defense", name: "Defense", line: "Verification, access defaults, and shared orbits.", stories: ["geneva-framework", "tallinn-grid", "kourou-window"], companies: ["Grid vendors", "Launch provider"], signal: "Frameworks matter only if cells are staffed.", tech: "Combined imaging and relay buses.", event: "Geneva annex." },
  { slug: "education", name: "Education", line: "Rights-cleared public memory as a civic product.", stories: ["seoul-archive"], companies: [], signal: "Cities want the clearance method, not the reels.", tech: "Licensable archive protocols.", event: "A second city copying the process." },
];

export const categoryMeta: Record<
  Category,
  { label: string; tone: "cyan" | "blue" | "violet" | "up" | "down" | "fg" }
> = {
  geopolitics: { label: "Geopolitics", tone: "violet" },
  business: { label: "Business", tone: "blue" },
  technology: { label: "Technology", tone: "cyan" },
  science: { label: "Science", tone: "violet" },
  markets: { label: "Markets", tone: "blue" },
  climate: { label: "Climate", tone: "up" },
  culture: { label: "Culture", tone: "fg" },
  ideas: { label: "Ideas", tone: "cyan" },
};

export const markerLabel: Record<MarkerTone, string> = {
  breaking: "Breaking",
  technology: "Technology",
  science: "Science",
  business: "Business",
  climate: "Climate",
  culture: "Culture",
};

export function storyById(id: string) {
  return stories.find((story) => story.id === id);
}

export function ago(mins: number) {
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.round(mins / 60);
  if (hours < 36) return `${hours} hr ago`;
  return `${Math.round(hours / 24)} day ago`;
}

export function topicMatch(story: Story, topic: string) {
  const t = topic.toLowerCase();
  if (t === "ai") return story.tags.includes("ai");
  if (t === "india") return story.country === "India" || story.tags.includes("india");
  if (t === "markets") return story.category === "markets" || story.tags.includes("markets");
  if (t === "startups") return story.tags.includes("startups");
  if (t === "space") return story.tags.includes("space");
  if (t === "technology") return story.category === "technology";
  if (t === "business") return story.category === "business";
  if (t === "climate") return story.category === "climate" || story.tags.includes("climate");
  return false;
}

export function searchStories(query: string) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!words.length) return stories;
  return stories.filter((story) => {
    const hay = [
      story.headline,
      story.summary,
      story.what,
      story.why,
      story.location,
      story.country,
      story.category,
      ...story.tags,
      ...story.companies,
      ...story.people,
      ...story.sources,
    ]
      .join(" ")
      .toLowerCase();
    return words.every((word) => hay.includes(word));
  });
}

export function deskBrief() {
  return {
    date: DESK_DATE,
    note: "Sample desk briefing composed for ORBITAL. Not a live wire. Fact, analysis, and forecast are separated in each story.",
    stories: stories.map((story) => ({
      id: story.id,
      category: story.category,
      headline: story.headline,
      what: story.what,
      why: story.why,
      who: story.who,
      next: story.next,
      location: story.location,
      country: story.country,
      impact: story.impact,
      confidence: story.confidence,
      tags: story.tags,
    })),
    trends: trends.map((trend) => ({
      name: trend.name,
      momentum: trend.momentum,
      direction: trend.direction,
      line: trend.line,
      why: trend.why,
    })),
    signals: signals,
    watch,
    ideas,
  };
}
