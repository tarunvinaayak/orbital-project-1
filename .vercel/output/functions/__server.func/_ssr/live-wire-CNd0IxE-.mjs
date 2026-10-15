import { i as getServerFnById, n as createServerFn, r as TSS_SERVER_FUNCTION } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-wire-CNd0IxE-.js
var DESK_DATE = "14 Oct 2026";
var stories = [
	{
		id: "geneva-framework",
		category: "geopolitics",
		headline: "Geneva talks sketch a corridor bargain, not a treaty",
		summary: "Negotiators closed a three-day round that trades limited corridor access for a pause on new basing. The text is a sequenced framework with a 30-day verification window, not a signed accord.",
		what: "Delegations left Geneva with a draft covering airspace notices, a narrow trade corridor, and a freeze on new permanent bases. A verification cell would sit in Geneva. Nothing is signed.",
		why: "If the freeze holds, the chance of a misread along a contested route falls, and a supply line several manufacturers still price as unreliable can be treated as open again.",
		who: "Corridor governments, route insurers, and plants that depend on the passage.",
		next: "A technical annex is expected within seven days. The tell is whether the verification cell is actually staffed.",
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
			"Regional brief"
		],
		confidence: "medium",
		marker: "breaking",
		companies: [],
		people: ["Corridor envoys"],
		tags: [
			"diplomacy",
			"security",
			"trade"
		]
	},
	{
		id: "ny-prints",
		category: "markets",
		headline: "A cooler print resets the week’s rate path",
		summary: "A softer activity print in New York pulled the front end of the curve down and lifted duration-sensitive shares. The move is about the path, not a single cut.",
		what: "The morning release came in below the desk consensus on activity and in line on prices. Two-year yields fell and equity futures firmed before the cash open.",
		why: "Positioning was leaning toward a hotter print. The miss forces funds that were short duration to cover, and it reopens a debate boards had parked until year-end.",
		who: "Rate-sensitive lenders, growth equities, and treasury desks in the Americas and London.",
		next: "Speakers later this week matter more than the print itself. Watch whether officials describe the miss as noise.",
		location: "New York",
		country: "United States",
		region: "Americas",
		lat: 40.71,
		lon: -74,
		minutesAgo: 18,
		impact: 78,
		importance: 5,
		sources: [
			"Official release",
			"Futures tape",
			"Desk consensus",
			"Speaker calendar"
		],
		confidence: "high",
		marker: "business",
		companies: [],
		people: ["Rates desk"],
		tags: [
			"markets",
			"rates",
			"macro"
		]
	},
	{
		id: "sg-compute",
		category: "technology",
		headline: "Singapore funds a new block of AI power and land",
		summary: "A state-linked vehicle outlined a multi-year plan for power, land, and interconnect aimed at training clusters. The announcement is about infrastructure, not a model release.",
		what: "The plan pairs reserved grid capacity with a campus site and a commitment to publish interconnection timelines. No chip vendor was named as exclusive.",
		why: "Training demand is now a power-and-permitting story. A funded site with a public timeline becomes a place capital can underwrite, which is rarer than another model demo.",
		who: "Cloud builders, utilities, equipment vendors, and funds allocating to Asian compute.",
		next: "Watch the first interconnection date and whether a second site is optioned before year-end.",
		location: "Singapore",
		country: "Singapore",
		region: "Asia",
		lat: 1.35,
		lon: 103.82,
		minutesAgo: 12,
		impact: 86,
		importance: 5,
		sources: [
			"Investment outline",
			"Grid note",
			"Campus filing",
			"Desk call"
		],
		confidence: "high",
		marker: "technology",
		companies: ["Grid partners", "Campus operator"],
		people: ["Infrastructure board"],
		tags: [
			"ai",
			"infrastructure",
			"startups",
			"technology"
		]
	},
	{
		id: "in-fabs",
		category: "technology",
		headline: "India ties a fresh incentive tranche to packaging, not just wafers",
		summary: "A new incentive window in Bengaluru emphasizes advanced packaging and design services alongside fabrication. The shift matches where capacity is actually tight.",
		what: "Officials described a tranche aimed at assembly, test, and design houses, with a reporting rule on domestic hiring and power use.",
		why: "Wafer headlines travel further, but packaging is the bottleneck for many AI boards. Incentives there change who can ship, not only who can announce a fab.",
		who: "Design houses in India, global packaging firms, and device makers sourcing boards in Asia.",
		next: "The first award list is the story. Announced interest is not capacity.",
		location: "Bengaluru",
		country: "India",
		region: "Asia",
		lat: 12.97,
		lon: 77.59,
		minutesAgo: 44,
		impact: 74,
		importance: 4,
		sources: [
			"Policy note",
			"Industry submission",
			"Desk brief"
		],
		confidence: "high",
		marker: "technology",
		companies: ["Packaging applicants"],
		people: ["Incentive cell"],
		tags: [
			"ai",
			"india",
			"startups",
			"technology",
			"semiconductors"
		]
	},
	{
		id: "tokyo-robots",
		category: "technology",
		headline: "A Tokyo lab shows a robot that finishes a warehouse pick without a script",
		summary: "Researchers demonstrated a mobile arm completing a multi-step pick in an unfamiliar aisle. It is a lab result with a narrow task, not a factory rollout.",
		what: "The system planned a short sequence, recovered from one dropped item, and logged the run. The environment was instrumented. Failure cases were not fully published.",
		why: "The interesting shift is from a single command to a short chain of actions. If the recovery rate holds outside the lab, warehouse software becomes the product, not the arm.",
		who: "Logistics operators, robot makers, and insurers still pricing autonomy as a pilot.",
		next: "A third-party aisle trial is the next credible step. Demos without a miss rate are not.",
		location: "Tokyo",
		country: "Japan",
		region: "Asia",
		lat: 35.68,
		lon: 139.69,
		minutesAgo: 70,
		impact: 69,
		importance: 4,
		sources: [
			"Lab note",
			"Demo log",
			"Prior benchmark"
		],
		confidence: "medium",
		marker: "technology",
		companies: ["Lab spinout"],
		people: ["Robotics group"],
		tags: [
			"robotics",
			"ai",
			"technology"
		]
	},
	{
		id: "kourou-window",
		category: "science",
		headline: "A climate-and-comms spacecraft holds a dawn window at Kourou",
		summary: "Range teams kept a launch window for a satellite that will refresh both Earth-observation and a narrowband relay. Weather is the constraint, not the vehicle.",
		what: "The window opens before dawn local time. The payload combines an imaging instrument with a relay for remote ground stations. No crewed element is involved.",
		why: "A successful insertion adds a data source regions still cover poorly, and it tests a cheaper combined bus that later missions want to copy.",
		who: "Weather services, maritime users, and the agencies sharing the bus design.",
		next: "If the window slips, the next clean slot is 48 hours out. The insertion burn is the only number that matters after liftoff.",
		location: "Kourou",
		country: "French Guiana",
		region: "Americas",
		lat: 5.16,
		lon: -52.65,
		minutesAgo: 95,
		impact: 71,
		importance: 4,
		sources: [
			"Range notice",
			"Payload card",
			"Weather desk"
		],
		confidence: "high",
		marker: "science",
		companies: ["Launch provider"],
		people: ["Range director"],
		tags: [
			"space",
			"climate",
			"science"
		]
	},
	{
		id: "eu-grid",
		category: "climate",
		headline: "Brussels ties new grid cash to storage, not just wires",
		summary: "A policy draft would steer the next energy package toward storage and flexible demand. Member states still have to agree the split.",
		what: "The draft earmarks a larger share for batteries, long-duration storage, and industrial demand response. Cross-border lines stay in the package, but they are no longer the headline.",
		why: "More wire without flexibility leaves midday surplus and evening scarcity. Storage is what makes the last decade of renewable build usable.",
		who: "Utilities, storage developers, heavy industry, and households on time-of-use tariffs.",
		next: "A council reading this month will show which capitals want the storage share cut.",
		location: "Brussels",
		country: "Belgium",
		region: "Europe",
		lat: 50.85,
		lon: 4.35,
		minutesAgo: 52,
		impact: 77,
		importance: 4,
		sources: [
			"Draft text",
			"Commission note",
			"Industry response"
		],
		confidence: "medium",
		marker: "climate",
		companies: ["Storage developers"],
		people: ["Energy ministers"],
		tags: [
			"climate",
			"energy",
			"policy"
		]
	},
	{
		id: "strait-slow",
		category: "business",
		headline: "Tonnage through a key strait is quietly lighter",
		summary: "Tracking desks show fewer laden transits this week, concentrated in bulk rather than containers. The cause is schedules, not a closure.",
		what: "Automatic identification data shows a week-on-week dip in laden bulk transits. Container strings are broadly unchanged. No authority has announced a restriction.",
		why: "A scheduled dip is noise. A dip that persists into next week shows up in freight rates and in inventories for mills that buy week to week.",
		who: "Bulk shippers, commodity traders, and ports on either side of the strait.",
		next: "Three more soft days would move this from a schedule note to a demand signal.",
		location: "Malacca Strait",
		country: "Singapore",
		region: "Asia",
		lat: 2.5,
		lon: 101.5,
		minutesAgo: 140,
		impact: 64,
		importance: 3,
		sources: [
			"AIS sample",
			"Port call list",
			"Desk note"
		],
		confidence: "medium",
		marker: "business",
		companies: ["Bulk operators"],
		people: ["Freight desk"],
		tags: [
			"shipping",
			"business",
			"trade"
		]
	},
	{
		id: "boston-assay",
		category: "science",
		headline: "A Boston group publishes a faster assay for a hard-to-see pathogen",
		summary: "A methods paper describes a test that returns a result in under an hour on standard lab hardware. It is not a clinical approval.",
		what: "The assay uses existing thermocyclers and a redesigned primer set. The paper reports sensitivity on stored samples, not a prospective trial.",
		why: "Speed on hardware hospitals already own matters more than a perfect instrument nobody can buy. The gap is still clinical validation.",
		who: "Hospital labs, diagnostics firms, and public-health agencies watching turnaround time.",
		next: "A multi-site validation is the step that would move this from paper to protocol.",
		location: "Boston",
		country: "United States",
		region: "Americas",
		lat: 42.36,
		lon: -71.06,
		minutesAgo: 180,
		impact: 66,
		importance: 3,
		sources: [
			"Methods paper",
			"Lab supplement",
			"Desk review"
		],
		confidence: "high",
		marker: "science",
		companies: ["Diagnostics partners"],
		people: ["Assay team"],
		tags: [
			"biotechnology",
			"science",
			"healthcare"
		]
	},
	{
		id: "nairobi-heat",
		category: "climate",
		headline: "East African forecast desks flag a longer hot spell for cities",
		summary: "Seasonal guidance points to above-normal heat across several highland cities into the next month. Rain timing is less clear.",
		what: "National services aligned on a warm signal for the coming weeks. They did not issue a uniform rainfall warning. Urban advisories are being drafted.",
		why: "Heat in cities that were planned for cooler nights stresses power, health clinics, and outdoor work at the same time. The compound risk is the story.",
		who: "City governments, grid operators, clinics, and outdoor employers across the region.",
		next: "Watch whether capitals publish work-hour guidance before the first peak week.",
		location: "Nairobi",
		country: "Kenya",
		region: "Africa",
		lat: -1.29,
		lon: 36.82,
		minutesAgo: 210,
		impact: 73,
		importance: 4,
		sources: [
			"Seasonal guidance",
			"City advisory draft",
			"Health desk"
		],
		confidence: "medium",
		marker: "climate",
		companies: [],
		people: ["Forecast services"],
		tags: [
			"climate",
			"cities",
			"health"
		]
	},
	{
		id: "seoul-archive",
		category: "culture",
		headline: "Seoul opens a public model of a century of city film",
		summary: "A municipal archive released a browsable reconstruction of lost street footage, with rights cleared for education. It is a cultural release with a data method underneath.",
		what: "The project stitches restored reels with maps and lets schools license clips at no fee. Commercial reuse stays restricted.",
		why: "The method — rights-cleared, place-linked public memory — is the reusable part. Other cities are already asking how the clearance was done.",
		who: "Educators, filmmakers, and city archives looking for a template.",
		next: "A second city is in talks to copy the rights process, not the footage.",
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
		tags: [
			"culture",
			"cities",
			"media"
		]
	},
	{
		id: "tallinn-grid",
		category: "technology",
		headline: "A Baltic exercise exposes a quiet flaw in substation remote access",
		summary: "A planned defensive exercise found identical remote-access settings across several substations. Operators were notified before any public detail.",
		what: "The finding is a configuration pattern, not a named breach. Patches and access reviews were issued to participants. No outage was reported.",
		why: "Shared defaults travel. A pattern found in one exercise is often a pattern sitting in networks that were not in the room.",
		who: "Grid operators, equipment vendors, and regulators writing access rules.",
		next: "The useful follow-up is how many non-participants ask for the same checklist.",
		location: "Tallinn",
		country: "Estonia",
		region: "Europe",
		lat: 59.44,
		lon: 24.75,
		minutesAgo: 300,
		impact: 70,
		importance: 4,
		sources: [
			"Exercise summary",
			"Vendor note",
			"Operator advisory"
		],
		confidence: "medium",
		marker: "technology",
		companies: ["Grid vendors"],
		people: ["Exercise leads"],
		tags: [
			"cybersecurity",
			"energy",
			"technology"
		]
	},
	{
		id: "stuttgart-fleet",
		category: "business",
		headline: "A German group will pilot streets that price curb space by the minute",
		summary: "Stuttgart approved a limited pilot where loading bays and a few resident blocks use live curb pricing. It is a mobility trial, not a citywide toll.",
		what: "The pilot covers defined streets, a published price cap, and a sunset clause. Freight firms can book bays ahead. Private cars are not the target.",
		why: "Curb space is the scarce asset in city logistics. Pricing it cleanly is how electric fleets and deliveries stop competing for the same five meters.",
		who: "Freight operators, city transport offices, and residents on the pilot streets.",
		next: "The first month of bay utilization will show whether bookings beat circling.",
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
		tags: [
			"mobility",
			"cities",
			"business"
		]
	},
	{
		id: "london-rails",
		category: "markets",
		headline: "London payment rails test a wholesale token that stays on the bank ledger",
		summary: "A small set of banks will settle a tokenized deposit between themselves after hours. Retail balances are not in the trial.",
		what: "The test uses tokenized commercial-bank deposits, not a retail coin. Settlement stays inside existing ledgers. The window is after the cash market closes.",
		why: "The argument for tokens in markets is hours and atomic settlement, not a new currency. A boring bank-ledger trial is the version supervisors can actually allow.",
		who: "Wholesale banks, market infrastructures, and treasurers who still wait overnight for finality.",
		next: "If the after-hours window clears without a reconciliation break, a second cohort is likely.",
		location: "London",
		country: "United Kingdom",
		region: "Europe",
		lat: 51.51,
		lon: -.12,
		minutesAgo: 400,
		impact: 68,
		importance: 4,
		sources: [
			"Trial term sheet",
			"Supervisory note",
			"Bank statement"
		],
		confidence: "high",
		marker: "business",
		companies: ["Participating banks"],
		people: ["Market infrastructure leads"],
		tags: [
			"markets",
			"finance",
			"startups"
		]
	}
];
var trends = [
	{
		id: "agents",
		name: "AI agents",
		group: "AI",
		momentum: 87,
		direction: "up",
		line: "Systems are moving from answers to short chains of work — with a human still on the loop.",
		why: "The spend is shifting from chat seats to workflow software that can finish a task.",
		series: [
			22,
			28,
			31,
			36,
			44,
			49,
			58,
			63,
			71,
			76,
			82,
			87
		]
	},
	{
		id: "robots",
		name: "Useful robotics",
		group: "Robotics",
		momentum: 64,
		direction: "up",
		line: "Warehouse and lab demos are finally publishing recovery rates, not only highlight reels.",
		why: "Insurers and operators buy the miss rate. Publishing it is what turns a demo into a pilot.",
		series: [
			30,
			32,
			33,
			38,
			40,
			44,
			46,
			51,
			55,
			57,
			61,
			64
		]
	},
	{
		id: "heat",
		name: "Urban heat",
		group: "Climate",
		momentum: 71,
		direction: "up",
		line: "Cities are writing heat as an operating problem: hours, grids, and clinics together.",
		why: "The cost shows up in labor rules and peak power, not only in climate reports.",
		series: [
			40,
			42,
			45,
			48,
			50,
			52,
			55,
			58,
			62,
			66,
			68,
			71
		]
	},
	{
		id: "storage",
		name: "Grid storage",
		group: "Energy",
		momentum: 76,
		direction: "up",
		line: "Policy drafts are starting to pay for flexibility, not only for new generation.",
		why: "Without storage, the last decade of renewable build cannot cover the evening.",
		series: [
			28,
			30,
			34,
			36,
			41,
			48,
			52,
			57,
			63,
			68,
			72,
			76
		]
	},
	{
		id: "dual-use-orbit",
		name: "Shared orbits",
		group: "Space",
		momentum: 58,
		direction: "up",
		line: "Missions that combine imaging and relay on one bus are getting cheaper to copy.",
		why: "One launch that serves two agencies is how smaller programs get on orbit.",
		series: [
			20,
			22,
			24,
			27,
			30,
			33,
			36,
			40,
			44,
			49,
			54,
			58
		]
	},
	{
		id: "token-deposits",
		name: "Tokenized deposits",
		group: "Finance",
		momentum: 54,
		direction: "up",
		line: "The live experiments are bank liabilities on existing ledgers, not retail coins.",
		why: "Supervisors will allow hours and atomic settlement long before a new public money.",
		series: [
			18,
			19,
			21,
			24,
			26,
			30,
			33,
			37,
			41,
			46,
			50,
			54
		]
	},
	{
		id: "assays",
		name: "Faster assays",
		group: "Biotechnology",
		momentum: 49,
		direction: "up",
		line: "Methods that run on hardware hospitals already own are outpacing new instruments.",
		why: "Turnaround time is a staffing and bed problem. The installed base is the market.",
		series: [
			24,
			25,
			27,
			29,
			31,
			33,
			36,
			38,
			41,
			44,
			47,
			49
		]
	},
	{
		id: "ot-access",
		name: "Operational access",
		group: "Cybersecurity",
		momentum: 68,
		direction: "up",
		line: "Defensive exercises keep finding the same remote-access defaults on physical plant.",
		why: "A shared default is a sector risk. Checklists now travel faster than patches.",
		series: [
			26,
			29,
			32,
			35,
			39,
			43,
			47,
			51,
			56,
			60,
			64,
			68
		]
	},
	{
		id: "curb",
		name: "Priced curbs",
		group: "Mobility",
		momentum: 41,
		direction: "flat",
		line: "Cities are piloting minute-level curb prices for freight, with hard caps and sunsets.",
		why: "Delivery economics in dense cities are a curb problem wearing an EV costume.",
		series: [
			33,
			34,
			36,
			35,
			37,
			38,
			37,
			39,
			40,
			40,
			41,
			41
		]
	},
	{
		id: "packaging",
		name: "Advanced packaging",
		group: "Consumer technology",
		momentum: 73,
		direction: "up",
		line: "Incentive programs are following the bottleneck: packaging and design, not wafer announcements.",
		why: "Boards ship when they are packaged. That is where the next capacity actually is.",
		series: [
			25,
			29,
			32,
			36,
			40,
			45,
			50,
			55,
			60,
			65,
			69,
			73
		]
	}
];
var watch = [
	{
		id: "w1",
		horizon: "24h",
		title: "Kourou window",
		detail: "Weather either clears the dual payload or slips it 48 hours.",
		kind: "Space"
	},
	{
		id: "w2",
		horizon: "24h",
		title: "Rates speakers",
		detail: "Officials react to the cooler print. The adjective they choose is the trade.",
		kind: "Markets"
	},
	{
		id: "w3",
		horizon: "7d",
		title: "Geneva annex",
		detail: "A technical annex, and whether a verification cell is staffed.",
		kind: "Geopolitics"
	},
	{
		id: "w4",
		horizon: "7d",
		title: "Energy council reading",
		detail: "Capitals mark up the storage share of the draft package.",
		kind: "Climate"
	},
	{
		id: "w5",
		horizon: "30d",
		title: "India award list",
		detail: "Packaging incentives become real only when names and sites are published.",
		kind: "Technology"
	},
	{
		id: "w6",
		horizon: "30d",
		title: "Heat advisories",
		detail: "Whether cities publish work-hour rules before the first peak.",
		kind: "Climate"
	},
	{
		id: "w7",
		horizon: "12m",
		title: "Singapore interconnect",
		detail: "The first published date power can actually reach the campus.",
		kind: "AI"
	},
	{
		id: "w8",
		horizon: "12m",
		title: "Token cohort two",
		detail: "A second set of banks only follows a clean after-hours reconciliation.",
		kind: "Finance"
	}
];
var ideas = [
	{
		id: "i1",
		problem: "Cities are adding electric demand faster than evening flexibility.",
		idea: "AI-assisted dispatch across buildings, chargers, and small storage — sold as an operating layer, not a gadget.",
		opportunity: "Software that a utility and a city can procure together, with a measured peak reduction.",
		who: "Utilities, facilities groups, and infrastructure funds."
	},
	{
		id: "i2",
		problem: "Robot pilots die because nobody will underwrite the miss rate.",
		idea: "A shared incident log for warehouse arms, the way aviation publishes occurrences.",
		opportunity: "The data layer insurers and operators both need before a fleet contract.",
		who: "Logistics groups, robot makers, and specialty insurers."
	},
	{
		id: "i3",
		problem: "Packaging capacity, not wafer speeches, decides who ships AI boards.",
		idea: "A marketplace that matches design houses to qualified packaging lines with power and yield disclosed.",
		opportunity: "The unglamorous exchange between India’s design bench and Asian lines.",
		who: "Design studios, OSAT plants, and incentive cells."
	},
	{
		id: "i4",
		problem: "Public memory projects stall on rights, not on scanning.",
		idea: "A clearance protocol cities can license, separate from the footage itself.",
		opportunity: "A civic product: the legal and metadata kit, proven in one archive.",
		who: "City archives, schools, and cultural funders."
	}
];
var dailyFive = [
	{
		kicker: "Biggest geopolitical development",
		id: "geneva-framework"
	},
	{
		kicker: "Biggest economic development",
		id: "ny-prints"
	},
	{
		kicker: "Biggest technology development",
		id: "sg-compute"
	},
	{
		kicker: "Biggest scientific development",
		id: "kourou-window"
	},
	{
		kicker: "Biggest emerging trend",
		trendId: "agents"
	}
];
var weekAhead = [
	{
		day: "Thu",
		title: "Rates speakers",
		note: "Reaction to the cooler print."
	},
	{
		day: "Fri",
		title: "Kourou backup window",
		note: "If dawn weather fails."
	},
	{
		day: "Mon",
		title: "Geneva technical annex",
		note: "Verification cell or silence."
	},
	{
		day: "Tue",
		title: "Energy council markup",
		note: "Storage share of the package."
	},
	{
		day: "Wed",
		title: "Stuttgart curb go-live",
		note: "First booked loading bays."
	},
	{
		day: "Next",
		title: "India packaging awards",
		note: "Names, not intentions."
	}
];
var industries = [
	{
		slug: "technology",
		name: "Technology",
		line: "Compute, packaging, and agents that finish work.",
		stories: [
			"sg-compute",
			"in-fabs",
			"tokyo-robots"
		],
		companies: [
			"Campus operator",
			"Packaging applicants",
			"Lab spinout"
		],
		signal: "Funded power is outrunning model announcements.",
		tech: "Short-horizon agents on real workflows.",
		event: "Singapore interconnection timeline."
	},
	{
		slug: "finance",
		name: "Finance",
		line: "Rates path and wholesale settlement hours.",
		stories: ["ny-prints", "london-rails"],
		companies: ["Participating banks"],
		signal: "Duration covering after a soft print.",
		tech: "Tokenized deposits on bank ledgers.",
		event: "After-hours reconciliation."
	},
	{
		slug: "healthcare",
		name: "Healthcare",
		line: "Faster tests on machines hospitals already own.",
		stories: ["boston-assay", "nairobi-heat"],
		companies: ["Diagnostics partners"],
		signal: "Turnaround time is the constraint.",
		tech: "Assays for the installed base.",
		event: "Multi-site validation."
	},
	{
		slug: "energy",
		name: "Energy",
		line: "Storage in the text, and access hygiene on the grid.",
		stories: [
			"eu-grid",
			"tallinn-grid",
			"sg-compute"
		],
		companies: ["Storage developers", "Grid vendors"],
		signal: "Flexibility is entering policy drafts.",
		tech: "Long-duration storage procurement.",
		event: "Council markup of the package."
	},
	{
		slug: "automotive",
		name: "Automotive",
		line: "The curb, not the powertrain, is the city constraint.",
		stories: ["stuttgart-fleet"],
		companies: ["Freight partners"],
		signal: "Minute-level curb pilots with caps.",
		tech: "Bookable loading bays.",
		event: "Stuttgart first month of utilization."
	},
	{
		slug: "real-estate",
		name: "Real Estate",
		line: "Power, heat, and curb rules are now lease terms.",
		stories: [
			"sg-compute",
			"nairobi-heat",
			"stuttgart-fleet"
		],
		companies: ["Campus operator"],
		signal: "Interconnect dates decide site value.",
		tech: "Building-level flexibility.",
		event: "Heat advisories before peak week."
	},
	{
		slug: "manufacturing",
		name: "Manufacturing",
		line: "Packaging lines and corridor reliability.",
		stories: [
			"in-fabs",
			"geneva-framework",
			"strait-slow"
		],
		companies: ["Packaging applicants", "Bulk operators"],
		signal: "Boards ship when they are packaged.",
		tech: "Disclosed-yield packaging slots.",
		event: "India award list."
	},
	{
		slug: "retail",
		name: "Retail",
		line: "Freight regularity and city delivery slots.",
		stories: ["strait-slow", "stuttgart-fleet"],
		companies: ["Bulk operators", "Freight partners"],
		signal: "A soft transit week is not yet a demand break.",
		tech: "Booked urban bays.",
		event: "Three more days of strait data."
	},
	{
		slug: "defense",
		name: "Defense",
		line: "Verification, access defaults, and shared orbits.",
		stories: [
			"geneva-framework",
			"tallinn-grid",
			"kourou-window"
		],
		companies: ["Grid vendors", "Launch provider"],
		signal: "Frameworks matter only if cells are staffed.",
		tech: "Combined imaging and relay buses.",
		event: "Geneva annex."
	},
	{
		slug: "education",
		name: "Education",
		line: "Rights-cleared public memory as a civic product.",
		stories: ["seoul-archive"],
		companies: [],
		signal: "Cities want the clearance method, not the reels.",
		tech: "Licensable archive protocols.",
		event: "A second city copying the process."
	}
];
var categoryMeta = {
	geopolitics: {
		label: "Geopolitics",
		tone: "violet"
	},
	business: {
		label: "Business",
		tone: "blue"
	},
	technology: {
		label: "Technology",
		tone: "cyan"
	},
	science: {
		label: "Science",
		tone: "violet"
	},
	markets: {
		label: "Markets",
		tone: "blue"
	},
	climate: {
		label: "Climate",
		tone: "up"
	},
	culture: {
		label: "Culture",
		tone: "fg"
	},
	ideas: {
		label: "Ideas",
		tone: "cyan"
	}
};
function storyById(id) {
	return stories.find((story) => story.id === id);
}
function ago(mins) {
	if (mins < 60) return `${mins} min ago`;
	const hours = Math.round(mins / 60);
	if (hours < 36) return `${hours} hr ago`;
	return `${Math.round(hours / 24)} day ago`;
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var FEEDS = [
	{
		url: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
		source: "Google News",
		category: "geopolitics",
		split: true
	},
	{
		url: "https://feeds.bbci.co.uk/news/world/rss.xml",
		source: "BBC",
		category: "geopolitics"
	},
	{
		url: "https://feeds.bbci.co.uk/news/technology/rss.xml",
		source: "BBC",
		category: "technology"
	},
	{
		url: "https://feeds.bbci.co.uk/news/business/rss.xml",
		source: "BBC",
		category: "business"
	},
	{
		url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
		source: "BBC",
		category: "science"
	},
	{
		url: "https://www.theguardian.com/world/rss",
		source: "The Guardian",
		category: "geopolitics"
	},
	{
		url: "https://www.theguardian.com/technology/rss",
		source: "The Guardian",
		category: "technology"
	},
	{
		url: "https://www.theguardian.com/business/rss",
		source: "The Guardian",
		category: "business"
	},
	{
		url: "https://www.theguardian.com/environment/rss",
		source: "The Guardian",
		category: "climate"
	},
	{
		url: "https://www.theguardian.com/science/rss",
		source: "The Guardian",
		category: "science"
	},
	{
		url: "https://www.theguardian.com/culture/rss",
		source: "The Guardian",
		category: "culture"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
		source: "The New York Times",
		category: "geopolitics"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
		source: "The New York Times",
		category: "technology"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
		source: "The New York Times",
		category: "business"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml",
		source: "The New York Times",
		category: "climate"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
		source: "The New York Times",
		category: "science"
	},
	{
		url: "https://www.aljazeera.com/xml/rss/all.xml",
		source: "Al Jazeera",
		category: "geopolitics"
	},
	{
		url: "https://feeds.npr.org/1004/rss.xml",
		source: "NPR",
		category: "geopolitics"
	},
	{
		url: "https://www.france24.com/en/rss",
		source: "France 24",
		category: "geopolitics"
	}
];
var PLACES = [
	{
		name: "Gaza",
		lat: 31.5,
		lon: 34.47,
		keys: ["gaza", "rafah"]
	},
	{
		name: "Jerusalem",
		lat: 31.78,
		lon: 35.22,
		keys: [
			"jerusalem",
			"west bank",
			"netanyahu"
		]
	},
	{
		name: "Tel Aviv",
		lat: 32.08,
		lon: 34.78,
		keys: ["tel aviv", "israel"]
	},
	{
		name: "Tehran",
		lat: 35.69,
		lon: 51.39,
		keys: ["tehran", "iran"]
	},
	{
		name: "Kyiv",
		lat: 50.45,
		lon: 30.52,
		keys: [
			"kyiv",
			"kiev",
			"zelensky",
			"ukraine"
		]
	},
	{
		name: "Moscow",
		lat: 55.75,
		lon: 37.62,
		keys: [
			"moscow",
			"kremlin",
			"putin",
			"russia"
		]
	},
	{
		name: "Beijing",
		lat: 39.9,
		lon: 116.41,
		keys: ["beijing", "china"]
	},
	{
		name: "Taipei",
		lat: 25.03,
		lon: 121.57,
		keys: ["taipei", "taiwan"]
	},
	{
		name: "Pyongyang",
		lat: 39.03,
		lon: 125.75,
		keys: ["pyongyang", "north korea"]
	},
	{
		name: "Seoul",
		lat: 37.57,
		lon: 126.98,
		keys: ["seoul", "south korea"]
	},
	{
		name: "Tokyo",
		lat: 35.68,
		lon: 139.69,
		keys: ["tokyo", "japan"]
	},
	{
		name: "New Delhi",
		lat: 28.61,
		lon: 77.21,
		keys: [
			"new delhi",
			"delhi",
			"india",
			"modi"
		]
	},
	{
		name: "Islamabad",
		lat: 33.69,
		lon: 73.04,
		keys: ["islamabad", "pakistan"]
	},
	{
		name: "Kabul",
		lat: 34.53,
		lon: 69.17,
		keys: ["kabul", "afghanistan"]
	},
	{
		name: "Damascus",
		lat: 33.51,
		lon: 36.29,
		keys: ["damascus", "syria"]
	},
	{
		name: "Beirut",
		lat: 33.89,
		lon: 35.5,
		keys: [
			"beirut",
			"lebanon",
			"hezbollah"
		]
	},
	{
		name: "Washington",
		lat: 38.91,
		lon: -77.04,
		keys: [
			"washington",
			"white house",
			"capitol hill"
		]
	},
	{
		name: "New York",
		lat: 40.71,
		lon: -74.01,
		keys: [
			"new york",
			"wall street",
			"manhattan"
		]
	},
	{
		name: "London",
		lat: 51.51,
		lon: -.13,
		keys: [
			"london",
			"britain",
			"united kingdom"
		]
	},
	{
		name: "Paris",
		lat: 48.86,
		lon: 2.35,
		keys: ["paris", "france"]
	},
	{
		name: "Berlin",
		lat: 52.52,
		lon: 13.41,
		keys: ["berlin", "germany"]
	},
	{
		name: "Brussels",
		lat: 50.85,
		lon: 4.35,
		keys: ["brussels", "european union"]
	},
	{
		name: "Rome",
		lat: 41.9,
		lon: 12.5,
		keys: ["rome", "italy"]
	},
	{
		name: "Warsaw",
		lat: 52.23,
		lon: 21.01,
		keys: ["warsaw", "poland"]
	},
	{
		name: "Geneva",
		lat: 46.2,
		lon: 6.14,
		keys: ["geneva", "switzerland"]
	},
	{
		name: "Ankara",
		lat: 39.93,
		lon: 32.86,
		keys: ["ankara", "turkey"]
	},
	{
		name: "Cairo",
		lat: 30.04,
		lon: 31.24,
		keys: ["cairo", "egypt"]
	},
	{
		name: "Nairobi",
		lat: -1.29,
		lon: 36.82,
		keys: ["nairobi", "kenya"]
	},
	{
		name: "Lagos",
		lat: 6.52,
		lon: 3.38,
		keys: ["lagos", "nigeria"]
	},
	{
		name: "Johannesburg",
		lat: -26.2,
		lon: 28.05,
		keys: ["johannesburg", "south africa"]
	},
	{
		name: "Riyadh",
		lat: 24.71,
		lon: 46.68,
		keys: ["riyadh", "saudi"]
	},
	{
		name: "Dubai",
		lat: 25.2,
		lon: 55.27,
		keys: ["dubai", "abu dhabi"]
	},
	{
		name: "Singapore",
		lat: 1.35,
		lon: 103.82,
		keys: ["singapore"]
	},
	{
		name: "Hong Kong",
		lat: 22.32,
		lon: 114.17,
		keys: ["hong kong"]
	},
	{
		name: "Sydney",
		lat: -33.87,
		lon: 151.21,
		keys: ["sydney", "australia"]
	},
	{
		name: "São Paulo",
		lat: -23.55,
		lon: -46.63,
		keys: [
			"são paulo",
			"sao paulo",
			"brazil"
		]
	},
	{
		name: "Mexico City",
		lat: 19.43,
		lon: -99.13,
		keys: ["mexico city", "mexico"]
	},
	{
		name: "Ottawa",
		lat: 45.42,
		lon: -75.7,
		keys: ["ottawa", "canada"]
	},
	{
		name: "United States",
		lat: 38.91,
		lon: -77.04,
		keys: ["united states"]
	}
];
var TTL_MS = 2e4;
var PER_FEED = 6;
var MAX_ITEMS = 60;
var cache = null;
var pending = null;
function toneOf(category) {
	if (category === "technology") return "technology";
	if (category === "science" || category === "ideas") return "science";
	if (category === "business" || category === "markets") return "business";
	if (category === "climate") return "climate";
	if (category === "culture") return "culture";
	return "breaking";
}
var getLiveWire = createServerFn({ method: "GET" }).validator((input) => {
	return { force: typeof input === "object" && input !== null && "force" in input && input.force === true };
}).handler(createSsrRpc("9874f66f811027acb780b121ec942b8e7b3d7416ba984d800646ce44429a4c78"));
async function fetchLiveWire(force = false) {
	if (!force && cache && Date.now() - cache.at < TTL_MS) return cache.payload;
	if (pending) return pending;
	pending = loadWire().catch(() => cache?.payload ?? emptyPayload("The wire did not answer.")).finally(() => {
		pending = null;
	});
	return pending;
}
function emptyPayload(error) {
	return {
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		items: [],
		ok: false,
		error
	};
}
async function loadWire() {
	const items = dedupe((await Promise.all(FEEDS.map((feed) => fetchFeed(feed)))).flat().sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))).slice(0, MAX_ITEMS);
	if (!items.length) {
		if (cache) return cache.payload;
		return emptyPayload("No outlets responded.");
	}
	const payload = {
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		items,
		ok: true
	};
	cache = {
		at: Date.now(),
		payload
	};
	return payload;
}
async function fetchFeed(feed) {
	try {
		const res = await fetch(feed.url, {
			headers: {
				Accept: "application/rss+xml, application/xml, text/xml, */*",
				"User-Agent": "Mozilla/5.0 (compatible; ORBITAL/1.0; +https://orbital.news)"
			},
			signal: AbortSignal.timeout(8e3)
		});
		if (!res.ok) return [];
		return parseItems(await res.text(), feed).slice(0, PER_FEED);
	} catch {
		return [];
	}
}
function parseItems(xml, feed) {
	const chunks = xml.split(/<item\b[^>]*>/i).slice(1);
	const items = [];
	for (const chunk of chunks) {
		const body = chunk.split(/<\/item>/i)[0] ?? "";
		if ([...body.matchAll(/<category\b[^>]*>([\s\S]*?)<\/category>/gi)].map((match) => textOf(match[1]).toLowerCase()).some((category) => category === "sport" || category === "sports")) continue;
		let title = textOf(tag(body, "title"));
		let source = feed.source;
		if (feed.split) {
			const cut = title.lastIndexOf(" - ");
			if (cut > 12) {
				source = title.slice(cut + 3).trim() || source;
				title = title.slice(0, cut).trim();
			}
		}
		const link = rawTag(body, "link") || attr(body, "link", "href");
		if (!title || !link.startsWith("http")) continue;
		const summary = clip(textOf(tag(body, "description")));
		const publishedRaw = textOf(tag(body, "pubDate")) || textOf(tag(body, "dc:date"));
		const publishedMs = Date.parse(publishedRaw);
		if (!Number.isFinite(publishedMs)) continue;
		const url = canonical(link);
		const located = locate(`${title} ${summary}`);
		items.push({
			id: hashId(url),
			title,
			summary,
			url,
			source,
			category: refine(`${title} ${summary}`, feed.category),
			publishedAt: new Date(publishedMs).toISOString(),
			image: imageOf(body),
			place: located?.name ?? "",
			lat: located?.lat ?? null,
			lon: located?.lon ?? null
		});
	}
	return items;
}
function tag(body, name) {
	return body.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`, "i"))?.[1] ?? "";
}
function attr(body, name, attribute) {
	return body.match(new RegExp(`<${name}\\b[^>]*\\b${attribute}="([^"]+)"`, "i"))?.[1] ?? "";
}
function rawTag(body, name) {
	return textOf(tag(body, name)).replace(/\s+/g, "");
}
function textOf(raw) {
	let value = raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
	value = value.replace(/</gi, "<").replace(/>/gi, ">").replace(/"/gi, "\"").replace(/'|&#0?39;/gi, "'").replace(/&nbsp;/gi, " ").replace(/&#(\d+);/g, (_, digits) => fromCode(Number(digits))).replace(/&#x([0-9a-f]+);/gi, (_, hex) => fromCode(parseInt(hex, 16)));
	value = value.replace(/<[^>]+>/g, " ");
	value = value.replace(/&/gi, "&");
	return value.replace(/\s+/g, " ").replace(/\s*Continue reading\.\.\.\s*$/i, "").trim();
}
function fromCode(code) {
	if (!Number.isFinite(code) || code <= 0 || code > 1114111) return "";
	try {
		return String.fromCodePoint(code);
	} catch {
		return "";
	}
}
function imageOf(body) {
	for (const pattern of [
		/<media:thumbnail\b[^>]*\burl="([^"]+)"/i,
		/<media:content\b[^>]*\burl="([^"]+)"/i,
		/<enclosure\b[^>]*\burl="([^"]+)"/i
	]) {
		const url = body.match(pattern)?.[1]?.replace(/&/g, "&") ?? "";
		if (url.startsWith("https://")) return url;
	}
	return "";
}
function canonical(link) {
	try {
		const url = new URL(link);
		if (!url.hostname.includes("news.google.com")) url.search = "";
		url.hash = "";
		return url.toString();
	} catch {
		return link.split("#")[0] ?? link;
	}
}
function clip(summary) {
	if (summary.length <= 280) return summary;
	const cut = summary.slice(0, 280);
	const space = cut.lastIndexOf(" ");
	return `${(space > 160 ? cut.slice(0, space) : cut).trim()}…`;
}
function refine(text, category) {
	const blob = text.toLowerCase();
	if (/climate|emission|wildfire|flood|drought|glacier|heatwave|hurricane|rainfall|methane|fossil|global warming/.test(blob)) return "climate";
	if (/nasdaq|s&p|stock market|shares|bond yield|federal reserve|interest rate|wall street|ftse|dow jones|oil price|bitcoin|crypto/.test(blob)) return "markets";
	if (/\bartificial intelligence\b|\bchatgpt\b|semiconductor|openai|cyberattack|software|startup/.test(blob)) return "technology";
	if (/\bnasa\b|satellite|telescope|vaccine|genome|quantum|species|physicist/.test(blob)) return "science";
	if (/\bfilm\b|\balbum\b|museum|fashion week|oscar|novelist/.test(blob)) return "culture";
	if (/\bceo\b|earnings|profit|inflation|jobs report|\bgdp\b|trade deal/.test(blob) && category === "geopolitics") return "business";
	return category;
}
function locate(text) {
	const blob = ` ${text.toLowerCase()} `;
	let best = null;
	for (const place of PLACES) for (const key of place.keys) {
		if (!blob.includes(key)) continue;
		if (!best || key.length > best.len) best = {
			name: place.name,
			lat: place.lat,
			lon: place.lon,
			len: key.length
		};
	}
	return best;
}
function norm(title) {
	return title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function dedupe(items) {
	const kept = [];
	for (const item of items) {
		const key = norm(item.title);
		if (!kept.find((current) => {
			const other = norm(current.title);
			if (other === key) return true;
			return key.length > 42 && other.length > 42 && (other.includes(key) || key.includes(other));
		})) kept.push(item);
	}
	return kept;
}
function hashId(value) {
	let a = 2166136261;
	let b = 2166136261;
	for (let i = 0; i < value.length; i++) {
		const code = value.charCodeAt(i);
		a ^= code;
		a = Math.imul(a, 16777619);
		b ^= code + i;
		b = Math.imul(b, 2246822519);
	}
	return `${(a >>> 0).toString(16).padStart(8, "0")}${(b >>> 0).toString(16).padStart(8, "0")}`;
}
//#endregion
export { dailyFive as a, ideas as c, storyById as d, toneOf as f, weekAhead as h, createSsrRpc as i, industries as l, watch as m, ago as n, fetchLiveWire as o, trends as p, categoryMeta as r, getLiveWire as s, DESK_DATE as t, stories as u };
