export type ComboRatioRow = {
  ratio: string;
  label: string;
  hex: string;
};

export type ComboSeoBundle = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  quickFormula: string;
  quickHex: string;
  quickSwatchAria: string;
  theory: string;
  ratioRows: ComboRatioRow[];
  uiUsage: string;
};

/** Curated SEO + education blocks for high-index combo URLs (hexes are illustrative RGB mixes unless noted). */
export const COMBO_SEO: Record<string, ComboSeoBundle> = {
  'red-and-yellow': {
    metaTitle: 'What Color Does Red and Yellow Make? #FF8000 | Theme & Color',
    metaDescription:
      'Red and yellow make orange. See true orange at #FF8000, five red-to-yellow mix ratios with hex swatches, and when to use the pair in UI and branding.',
    h1: 'Red and Yellow Mixed: What Color Do You Get?',
    lead: 'Mix pure red (#FF0000) and pure yellow (#FFFF00) and you move along the warm side of the wheel toward orange. Use the simulator above, then compare ratio presets below.',
    quickFormula: 'Red + Yellow = Orange',
    quickHex: '#FF8000',
    quickSwatchAria: 'True orange, even red and yellow mix',
    theory:
      'In subtractive paint (RYB) thinking, red and yellow are both primaries; combining them removes short-wavelength reflectance and pushes hue toward orange. In RGB displays, averaging saturated red and yellow still lands in the orange family, but pigment opacity, undertone, and layering change what you see on canvas. The table uses fixed hex steps so designers can align language (“deep orange”, “amber”) with copy-paste values before they tune in the mixer.',
    ratioRows: [
      { ratio: '80% red + 20% yellow', label: 'Deep orange', hex: '#CC5500' },
      { ratio: '60% red + 40% yellow', label: 'Vivid orange', hex: '#FF6600' },
      { ratio: '50% red + 50% yellow', label: 'True orange', hex: '#FF8000' },
      { ratio: '40% red + 60% yellow', label: 'Golden orange', hex: '#FF9900' },
      { ratio: '20% red + 80% yellow', label: 'Amber', hex: '#FFB300' },
    ],
    uiUsage:
      'Use red–orange for urgency and yellow–orange for optimism; keep one dominant temperature per screen so CTAs do not fight each other. Pair saturated oranges with charcoal text on white, or with cream backgrounds for editorial warmth. After locking a hero gradient, run button and link colors through accessibility checks before shipping.',
  },
  'blue-and-yellow': {
    metaTitle: 'What Color Does Blue and Yellow Make? #00CC00 | Theme & Color',
    metaDescription:
      'Blue and yellow make green. Anchor at #00CC00, explore five blue-heavy to yellow-heavy mixes, and learn UI and brand patterns plus tool links.',
    h1: 'Blue and Yellow Mixed: What Color Do You Get?',
    lead: 'Classic color lessons treat blue plus yellow as green. On screens, literal RGB averaging can look muddy, so the table uses a clear green ramp centered on #00CC00 for handoff-friendly discussion.',
    quickFormula: 'Blue + Yellow = Green',
    quickHex: '#00CC00',
    quickSwatchAria: 'Balanced green between blue and yellow',
    theory:
      'RYB primaries position blue and yellow opposite the red axis; mixing them yields greens whose temperature depends on which primary dominates. More blue shifts toward teal or forest; more yellow shifts toward chartreuse or lime. Digital mockups should still be checked against real pigments when packaging or print matters—the simulator helps bridge both worlds.',
    ratioRows: [
      { ratio: '80% blue + 20% yellow', label: 'Deep blue-green', hex: '#006B4D' },
      { ratio: '60% blue + 40% yellow', label: 'Teal green', hex: '#008F55' },
      { ratio: '50% blue + 50% yellow', label: 'True green', hex: '#00CC00' },
      { ratio: '40% blue + 60% yellow', label: 'Spring green', hex: '#33CC33' },
      { ratio: '20% blue + 80% yellow', label: 'Yellow-green', hex: '#99CC33' },
    ],
    uiUsage:
      'Blue–yellow mixes read as growth, sustainability, and clarity—common for fintech dashboards and eco brands. Use cooler greens for data density and warmer yellow-greens for highlights. Keep body copy on white or off-white, and reserve saturated greens for charts, tags, and success states validated with your contrast workflow.',
  },
  'red-and-white': {
    metaTitle: 'Red and White Mixed: Pink Shades & Hex Codes | Theme & Color',
    metaDescription:
      'Red plus white makes pink and light red tones. Copy hex codes for five red-to-white ratios, see swatches, and learn UI and brand usage with palette and contrast tools.',
    h1: 'Red and White Mixed: What Color Do You Get?',
    lead: 'Adding white to red lowers chroma and raises lightness—what painters call a tint. The table shows linear RGB mixes between #FF0000 and #FFFFFF for predictable digital handoff.',
    quickFormula: 'Red + White = Light red / pink family',
    quickHex: '#FF8080',
    quickSwatchAria: 'Even red and white mix, light red',
    theory:
      'White does not change hue in a perfect tint, but human perception still reads very light reds as “pink” once lightness crosses a threshold. In UI systems, treat these values as background tints or subtle error backgrounds—not as long-form text colors without contrast testing. For brand, light reds can signal warmth, romance, or gentle alerts when paired with deep rose or burgundy for type.',
    ratioRows: [
      { ratio: '80% red + 20% white', label: 'Strong scarlet tint', hex: '#FF3333' },
      { ratio: '60% red + 40% white', label: 'Bright coral', hex: '#FF6666' },
      { ratio: '50% red + 50% white', label: 'Light red', hex: '#FF8080' },
      { ratio: '40% red + 60% white', label: 'Soft pink', hex: '#FF9999' },
      { ratio: '20% red + 80% white', label: 'Pale blush', hex: '#FFCCCC' },
    ],
    uiUsage:
      'Use pale blush and soft pink for backgrounds, badges, and empty states; keep primary actions on deeper reds for legibility. In marketing, light reds pair with charcoal or navy for modern romance palettes. After choosing tints, extend neutrals and accent ramps in the palette generator and verify text pairs with the contrast checker.',
  },
  'blue-and-white': {
    metaTitle: 'Blue and White Mixed: Light Blue Shades & Hex Codes | Theme & Color',
    metaDescription:
      'Blue plus white makes sky and periwinkle tints. Copy five ratio hex codes, preview swatches, and read UI guidance with links to the palette generator and contrast checker.',
    h1: 'Blue and White Mixed: What Color Do You Get?',
    lead: 'Tinting blue with white walks saturation down while lifting lightness—ideal for backgrounds, cards, and “airy” tech aesthetics. Values below are linear mixes of #0000FF and #FFFFFF.',
    quickFormula: 'Blue + White = Light blue / periwinkle family',
    quickHex: '#7F7FFF',
    quickSwatchAria: 'Even blue and white mix',
    theory:
      'Because blue is already dark in luminance, small amounts of white change perceived hue very quickly on screens. Designers often bucket these tints into “sky”, “periwinkle”, and “ice” for tokens. For print, ink limits and paper color shift perceived temperature, so treat hex values as digital-first references and proof physical swatches separately.',
    ratioRows: [
      { ratio: '80% blue + 20% white', label: 'Deep periwinkle', hex: '#3333FF' },
      { ratio: '60% blue + 40% white', label: 'Royal tint', hex: '#6666FF' },
      { ratio: '50% blue + 50% white', label: 'Balanced periwinkle', hex: '#7F7FFF' },
      { ratio: '40% blue + 60% white', label: 'Soft cornflower', hex: '#9999FF' },
      { ratio: '20% blue + 80% white', label: 'Ice lilac', hex: '#CCCCFF' },
    ],
    uiUsage:
      'Light blues excel as app backgrounds, table stripes, and map fills where white feels sterile. Pair with navy or slate for typography, and reserve saturated blues for links and primary buttons. Build systematic lighter steps in the palette generator, then validate every text-on-tint pair with the contrast checker—especially for small captions atop pale blues.',
  },
  'red-and-blue': {
    metaTitle: 'What Color Does Red and Blue Make? | Theme & Color',
    metaDescription:
      'Red and blue mix toward purple and violet. See anchor hexes, five red-to-blue RGB blend ratios with swatches, color theory, and UI tips with tool links.',
    h1: 'What Color Does Red and Blue Make?',
    lead: 'In paint (RYB), red plus blue makes purple; on screens, blending saturated red (#FF0000) and blue (#0000FF) moves through magenta toward violet. Use the simulator, then compare the ratio table.',
    quickFormula: 'Red + Blue = Purple / violet family',
    quickHex: '#800080',
    quickSwatchAria: 'Even red and blue mix, purple',
    theory:
      'Subtractive primaries treat red and blue as two corners of the RYB triangle; their mixture removes middle wavelengths we perceive as green-yellow, leaving a purple family. Additive RGB is different—full red plus full blue yields magenta—but designers still search “red and blue” when mixing paint or ink. The table uses linear RGB mixes as digital stand-ins; validate final brand swatches against physical samples when print fidelity matters.',
    ratioRows: [
      { ratio: '80% red + 20% blue', label: 'Red-magenta', hex: '#CC0033' },
      { ratio: '60% red + 40% blue', label: 'Deep orchid', hex: '#990066' },
      { ratio: '50% red + 50% blue', label: 'Web purple', hex: '#800080' },
      { ratio: '40% red + 60% blue', label: 'Blue-violet', hex: '#660099' },
      { ratio: '20% red + 80% blue', label: 'Deep blue', hex: '#3300CC' },
    ],
    uiUsage:
      'Use violet and magenta accents for creative tech, nightlife, and premium promos—pair with off-white or charcoal for readable type. Avoid stacking two saturated purples beside pure red CTAs without hierarchy. After picking a hero blend, extend semantic tokens in the palette generator and verify buttons and links in the contrast checker.',
  },
  'blue-and-green': {
    metaTitle: 'What Color Does Blue and Green Make? | Theme & Color',
    metaDescription:
      'Blue and green mix into teals and deep sea tones. Five ratio hex previews, theory for RYB vs RGB, and UI guidance with palette generator and contrast checker links.',
    h1: 'What Color Does Blue and Green Make?',
    lead: 'Combining blue (#0000FF) with green (#008000) pulls hue toward teal and deep cyan—common for “trust + growth” palettes. Adjust sliders above, then map ratios below to tokens.',
    quickFormula: 'Blue + Green = Teal / deep cyan family',
    quickHex: '#004080',
    quickSwatchAria: 'Balanced blue and green mix',
    theory:
      'Both blue and green sit on the cool side of the wheel; mixing them deepens the hue and lowers perceived warmth versus blue plus yellow. In natural language, users often call these results “teal”, “peacock”, or “sea glass”. Pigment behavior depends on whether your green leans yellow (olive) or blue (phthalocyanine)—the presets here use a neutral web green anchor.',
    ratioRows: [
      { ratio: '80% blue + 20% green', label: 'Deep blue', hex: '#001ACC' },
      { ratio: '60% blue + 40% green', label: 'Navy teal', hex: '#00336B' },
      { ratio: '50% blue + 50% green', label: 'True teal', hex: '#004080' },
      { ratio: '40% blue + 60% green', label: 'Forest teal', hex: '#004D66' },
      { ratio: '20% blue + 80% green', label: 'Deep sea green', hex: '#006633' },
    ],
    uiUsage:
      'Teals work for health, climate, and finance dashboards when you need calmer alternatives to pure blue. Use darker rows for navigation and lighter rows for chart fills. Keep long-form text on white or gray, and run every teal-on-gray pair through the contrast checker after you branch scales in the palette generator.',
  },
  'yellow-and-blue': {
    metaTitle: 'What Color Does Yellow and Blue Make? | Theme & Color',
    metaDescription:
      'Yellow and blue make green. Same physics as blue plus yellow—five yellow-heavy to blue-heavy hex ratios, theory, and UI tips with Theme & Color tools.',
    h1: 'What Color Does Yellow and Blue Make?',
    lead: 'Yellow (#FFFF00) plus blue (#0000FF) is the classic primary pair for green. This URL mirrors the blue-and-yellow lesson with yellow listed first for search intent—compare both pages if you are optimizing copy.',
    quickFormula: 'Yellow + Blue = Green',
    quickHex: '#00CC00',
    quickSwatchAria: 'Balanced yellow and blue mix, green',
    theory:
      'Order of naming does not change the mixture: yellow and blue still remove the warm red component from perceived light, leaving green-cyan sensations at balance. Dominating with yellow yields chartreuse and lime moods; dominating with blue yields pine and teal moods. Use the ratio table to brief illustrators and UI designers with the same vocabulary.',
    ratioRows: [
      { ratio: '80% yellow + 20% blue', label: 'Yellow-green', hex: '#99CC33' },
      { ratio: '60% yellow + 40% blue', label: 'Spring green', hex: '#33CC33' },
      { ratio: '50% yellow + 50% blue', label: 'True green', hex: '#00CC00' },
      { ratio: '40% yellow + 60% blue', label: 'Teal green', hex: '#008F55' },
      { ratio: '20% yellow + 80% blue', label: 'Deep blue-green', hex: '#006B4D' },
    ],
    uiUsage:
      'Pair greens with warm off-white for organic brands, or with slate neutrals for analytical products. Reserve the brightest row for success badges only if contrast passes. Build extended greens from your chosen anchor in the palette generator, then regression-test states with the contrast checker.',
  },
  'red-and-green': {
    metaTitle: 'What Color Does Red and Green Make? | Theme & Color',
    metaDescription:
      'Red and green mixes skew brown and olive. Five ratio hex previews, subtractive vs additive notes, and UI usage with links to the palette generator and contrast checker.',
    h1: 'What Color Does Red and Green Make?',
    lead: 'Saturated red (#FF0000) plus green (#008000) is a complementary pair; blending them desaturates toward brown and olive rather than a bright secondary. Preview ratios below, then refine in the mixer.',
    quickFormula: 'Red + Green = Brown / olive family',
    quickHex: '#804000',
    quickSwatchAria: 'Balanced red and green mix, brown',
    theory:
      'Complementary hues cancel chroma when mixed evenly, which is why painters reach for browns and neutrals when red and green pigments collide. Digital RGB averaging behaves similarly: you lose saturation and land in the yellow-brown region unless one channel dominates. Always name the role (“mud”, “olive”, “umber”) so teams do not confuse this mix with a clean yellow or orange accent.',
    ratioRows: [
      { ratio: '80% red + 20% green', label: 'Brick brown', hex: '#CC3300' },
      { ratio: '60% red + 40% green', label: 'Rust', hex: '#993300' },
      { ratio: '50% red + 50% green', label: 'Olive brown', hex: '#804000' },
      { ratio: '40% red + 60% green', label: 'Moss', hex: '#664D00' },
      { ratio: '20% red + 80% green', label: 'Deep olive', hex: '#336600' },
    ],
    uiUsage:
      'Use desaturated red–green blends for earth-tone UI, photography overlays, and rustic packaging—not for small red text on saturated green (contrast fails fast). Prefer one vivid complementary accent at a time. After choosing a brown anchor, derive neutrals in the palette generator and validate focus rings and links with the contrast checker.',
  },
  'pink-and-purple': {
    metaTitle: 'What Color Does Pink and Purple Make? | Theme & Color',
    metaDescription:
      'Pink plus purple yields orchid and magenta tones. Copy five mix hex codes, read theory, and get UI guidance with palette generator and contrast checker links.',
    h1: 'What Color Does Pink and Purple Make?',
    lead: 'Soft pink (#FFC0CB) with deep purple (#800080) produces rich orchid and berry hues—popular for beauty, romance, and nightlife brands. Dial exact blends in the tool, then align marketing with the table.',
    quickFormula: 'Pink + Purple = Orchid / berry family',
    quickHex: '#C060A7',
    quickSwatchAria: 'Balanced pink and purple mix',
    theory:
      'Pink is a high-lightness red; purple is low-lightness red-blue. Mixing them preserves red dominance while shifting saturation and value, which is why results read as “berry”, “orchid”, or “mauve” instead of pure violet. In UI token systems, capture both hue and lightness steps so light orchid backgrounds do not collapse into gray on low-end displays.',
    ratioRows: [
      { ratio: '80% pink + 20% purple', label: 'Soft rose', hex: '#E6A4BC' },
      { ratio: '60% pink + 40% purple', label: 'Blush orchid', hex: '#D47BAD' },
      { ratio: '50% pink + 50% purple', label: 'True orchid', hex: '#C060A7' },
      { ratio: '40% pink + 60% purple', label: 'Berry', hex: '#A64D92' },
      { ratio: '20% pink + 80% purple', label: 'Deep plum', hex: '#8B2C7A' },
    ],
    uiUsage:
      'Use lighter rows for hero backgrounds and cards; reserve darker rows for buttons and headlines on white. Pair with gold or cream metallics for luxury cues, or with graphite for modern editorial. Expand harmonies in the palette generator and audit every text pair with the contrast checker—pink-heavy UI fails accessibility quickly if unchecked.',
  },
  'black-and-white': {
    metaTitle: 'What Color Does Black and White Make? | Theme & Color',
    metaDescription:
      'Black and white make gray. Five luminance steps with hex codes, theory on value scales, and UI tips linking to the palette generator and contrast checker.',
    h1: 'What Color Does Black and White Make?',
    lead: 'Mixing black (#000000) and white (#FFFFFF) only changes value—you stay on the neutral axis ideal for typography, borders, and dark mode surfaces.',
    quickFormula: 'Black + White = Gray',
    quickHex: '#808080',
    quickSwatchAria: 'Even black and white mix, medium gray',
    theory:
      'Unlike chromatic mixes, achromatic blending is mathematically simple in RGB: equal parts yield mid gray. Designers use these steps to scaffold neutral ramps (surface-0 through surface-900) before committing brand color. In print, ink density and dot gain shift perceived gray, so treat screen hexes as digital-first references.',
    ratioRows: [
      { ratio: '80% black + 20% white', label: 'Charcoal', hex: '#333333' },
      { ratio: '60% black + 40% white', label: 'Dim gray', hex: '#666666' },
      { ratio: '50% black + 50% white', label: 'Medium gray', hex: '#808080' },
      { ratio: '40% black + 60% white', label: 'Silver', hex: '#999999' },
      { ratio: '20% black + 80% white', label: 'Light gray', hex: '#CCCCCC' },
    ],
    uiUsage:
      'Neutral ramps anchor typography, dividers, skeleton loaders, and elevation in both light and dark themes. Keep at least four distinguishable steps between background and border tokens. Generate extended cool or warm grays from these anchors in the palette generator, then prove legibility with the contrast checker on real content samples.',
  },
};

export function getComboSeo(combo: string): ComboSeoBundle | null {
  return COMBO_SEO[combo] ?? null;
}
