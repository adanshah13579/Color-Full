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
    metaTitle: 'Red + Yellow = Orange #FF8000 — Color Mixer Result',
    metaDescription:
      'Red and yellow make orange #FF8000. Copy the hex code instantly. 5 red-to-yellow mix ratios with swatches, color theory, and UI tips with free color mixer.',
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
    metaTitle: 'Blue + Yellow = Green #00CC00 — Color Mixer Result',
    metaDescription:
      'Blue and yellow make green #00CC00. Copy the hex code instantly. 5 blue-to-yellow mix ratios with swatches, color theory, and UI tips with free color mixer.',
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
    quickFormula: 'Red + Blue = Purple',
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
    metaTitle: 'Blue + Green = Teal #008080 — Color Mixer Result',
    metaDescription:
      'Blue and green make teal #008080. Copy the hex code instantly. 5 blue-to-green mix ratios with swatches, color theory, and UI tips with free color mixer.',
    h1: 'What Color Does Blue and Green Make?',
    lead: 'Combining blue (#0000FF) with green (#008000) pulls hue toward teal—common for “trust + growth” palettes. Adjust sliders above, then map ratios below to tokens.',
    quickFormula: 'Blue + Green = Teal',
    quickHex: '#008080',
    quickSwatchAria: 'Balanced blue and green mix, teal',
    theory:
      'Both blue and green sit on the cool side of the wheel; mixing them deepens the hue and lowers perceived warmth versus blue plus yellow. In natural language, users often call these results “teal”, “peacock”, or “sea glass”. Pigment behavior depends on whether your green leans yellow (olive) or blue (phthalocyanine)—the presets here anchor on web teal (#008080) for digital handoff.',
    ratioRows: [
      { ratio: '80% blue + 20% green', label: 'Deep blue', hex: '#003399' },
      { ratio: '60% blue + 40% green', label: 'Navy teal', hex: '#004D66' },
      { ratio: '50% blue + 50% green', label: 'True teal', hex: '#008080' },
      { ratio: '40% blue + 60% green', label: 'Sea teal', hex: '#006666' },
      { ratio: '20% blue + 80% green', label: 'Deep sea green', hex: '#00804D' },
    ],
    uiUsage:
      'Teals work for health, climate, and finance dashboards when you need calmer alternatives to pure blue. Use darker rows for navigation and lighter rows for chart fills. Keep long-form text on white or gray, and run every teal-on-gray pair through the contrast checker after you branch scales in the palette generator.',
  },
  'yellow-and-blue': {
    metaTitle: 'Yellow + Blue = Green #008000 — Color Mixer Result',
    metaDescription:
      'Yellow and blue make green #008000. Copy the hex code instantly. 5 yellow-to-blue mix ratios with swatches, color theory, and UI tips with free color mixer.',
    h1: 'What Color Does Yellow and Blue Make?',
    lead: 'Yellow (#FFFF00) plus blue (#0000FF) is the classic primary pair for green. This page lists yellow first for search intent; use the simulator above, then compare ratio presets below.',
    quickFormula: 'Yellow + Blue = Green',
    quickHex: '#008000',
    quickSwatchAria: 'Balanced yellow and blue mix, green',
    theory:
      'Order of naming does not change the mixture: yellow and blue still remove the warm red component from perceived light, leaving green sensations at balance. Dominating with yellow yields chartreuse and lime moods; dominating with blue yields pine and forest moods. The table centers on web green (#008000) as a handoff-friendly anchor before you tune in the mixer.',
    ratioRows: [
      { ratio: '80% yellow + 20% blue', label: 'Chartreuse', hex: '#669900' },
      { ratio: '60% yellow + 40% blue', label: 'Lime green', hex: '#4D9900' },
      { ratio: '50% yellow + 50% blue', label: 'True green', hex: '#008000' },
      { ratio: '40% yellow + 60% blue', label: 'Forest green', hex: '#006B33' },
      { ratio: '20% yellow + 80% blue', label: 'Deep pine', hex: '#004D4D' },
    ],
    uiUsage:
      'Pair greens with warm off-white for organic brands, or with slate neutrals for analytical products. Reserve the brightest row for success badges only if contrast passes. Build extended greens from your chosen anchor in the palette generator, then regression-test states with the contrast checker.',
  },
  'red-and-green': {
    metaTitle: 'What Color Does Red and Green Make? | Theme & Color',
    metaDescription:
      'Red and green make brown and olive. Anchor at #4B3B00, five ratio hex previews with swatches, color theory, and UI usage with palette generator and contrast checker links.',
    h1: 'What Color Does Red and Green Make?',
    lead: 'Saturated red (#FF0000) plus green (#008000) is a complementary pair; blending them desaturates toward brown and olive rather than a bright secondary. Preview ratios below, then refine in the mixer.',
    quickFormula: 'Red + Green = Brown/Olive',
    quickHex: '#4B3B00',
    quickSwatchAria: 'Balanced red and green mix, brown olive',
    theory:
      'Complementary hues cancel chroma when mixed evenly, which is why painters reach for browns and neutrals when red and green pigments collide. Digital RGB averaging behaves similarly: you lose saturation and land in the olive-brown region unless one channel dominates. Always name the role (“mud”, “olive”, “umber”) so teams do not confuse this mix with a clean yellow or orange accent.',
    ratioRows: [
      { ratio: '80% red + 20% green', label: 'Brick brown', hex: '#663300' },
      { ratio: '60% red + 40% green', label: 'Rust olive', hex: '#594000' },
      { ratio: '50% red + 50% green', label: 'Brown olive', hex: '#4B3B00' },
      { ratio: '40% red + 60% green', label: 'Moss', hex: '#3D4200' },
      { ratio: '20% red + 80% green', label: 'Deep olive', hex: '#264D00' },
    ],
    uiUsage:
      'Use desaturated red–green blends for earth-tone UI, photography overlays, and rustic packaging—not for small red text on saturated green (contrast fails fast). Prefer one vivid complementary accent at a time. After choosing a brown anchor, derive neutrals in the palette generator and validate focus rings and links with the contrast checker.',
  },
  'pink-and-purple': {
    metaTitle: 'Pink + Purple = Fuchsia #C7498A — Color Mixer Result',
    metaDescription:
      'Pink and purple make fuchsia #C7498A. Copy the hex code instantly. 5 pink-to-purple mix ratios with swatches, color theory, and UI tips with free color mixer.',
    h1: 'What Color Does Pink and Purple Make?',
    lead: 'Soft pink (#FFC0CB) with deep purple (#800080) produces rich magenta and fuchsia hues—popular for beauty, romance, and nightlife brands. Dial exact blends in the tool, then align marketing with the table.',
    quickFormula: 'Pink + Purple = Magenta/Fuchsia',
    quickHex: '#C7498A',
    quickSwatchAria: 'Balanced pink and purple mix, magenta fuchsia',
    theory:
      'Pink is a high-lightness red; purple is low-lightness red-blue. Mixing them preserves red dominance while shifting saturation and value, which is why results read as “magenta”, “fuchsia”, or “berry” instead of pure violet. In UI token systems, capture both hue and lightness steps so light fuchsia backgrounds do not collapse into gray on low-end displays.',
    ratioRows: [
      { ratio: '80% pink + 20% purple', label: 'Soft rose', hex: '#E699B8' },
      { ratio: '60% pink + 40% purple', label: 'Blush magenta', hex: '#D973A1' },
      { ratio: '50% pink + 50% purple', label: 'True fuchsia', hex: '#C7498A' },
      { ratio: '40% pink + 60% purple', label: 'Berry magenta', hex: '#B5337A' },
      { ratio: '20% pink + 80% purple', label: 'Deep plum', hex: '#8F1F66' },
    ],
    uiUsage:
      'Use lighter rows for hero backgrounds and cards; reserve darker rows for buttons and headlines on white. Pair with gold or cream metallics for luxury cues, or with graphite for modern editorial. Expand harmonies in the palette generator and audit every text pair with the contrast checker—pink-heavy UI fails accessibility quickly if unchecked.',
  },
  'yellow-and-red': {
    metaTitle: 'What Color Does Yellow and Red Make? | Theme & Color',
    metaDescription:
      'Yellow and red make orange. Anchor at #FF8000, five yellow-to-red mix ratios with hex swatches, color theory, and UI tips with palette generator and contrast checker links.',
    h1: 'What Color Does Yellow and Red Make?',
    lead: 'Mix pure yellow (#FFFF00) and pure red (#FF0000) and you move along the warm side of the wheel toward orange. This page lists yellow first for search intent—use the simulator above, then compare ratio presets below.',
    quickFormula: 'Yellow + Red = Orange',
    quickHex: '#FF8000',
    quickSwatchAria: 'Balanced yellow and red mix, orange',
    theory:
      'In subtractive paint (RYB) thinking, red and yellow are both primaries; combining them removes short-wavelength reflectance and pushes hue toward orange. In RGB displays, averaging saturated yellow and red still lands in the orange family, but pigment opacity, undertone, and layering change what you see on canvas. The table uses fixed hex steps centered on #FF8000 so designers can align language (“deep orange”, “amber”) with copy-paste values.',
    ratioRows: [
      { ratio: '80% yellow + 20% red', label: 'Amber', hex: '#FFB300' },
      { ratio: '60% yellow + 40% red', label: 'Golden orange', hex: '#FF9900' },
      { ratio: '50% yellow + 50% red', label: 'True orange', hex: '#FF8000' },
      { ratio: '40% yellow + 60% red', label: 'Vivid orange', hex: '#FF6600' },
      { ratio: '20% yellow + 80% red', label: 'Deep orange', hex: '#CC5500' },
    ],
    uiUsage:
      'Use yellow–orange for optimism and red–orange for urgency; keep one dominant temperature per screen so CTAs do not fight each other. Pair saturated oranges with charcoal text on white, or with cream backgrounds for editorial warmth. After locking a hero gradient, run button and link colors through accessibility checks before shipping.',
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
  'purple-and-yellow': {
    metaTitle: 'Purple + Yellow = Olive #808000 — Color Mixer Result',
    metaDescription:
      'Purple and yellow make olive #808000. Copy the hex code instantly. 5 purple-to-yellow mix ratios with swatches, color theory, and UI tips with free color mixer.',
    h1: 'What Color Does Purple and Yellow Make?',
    lead: 'Purple and yellow mixed make brown or olive. A 50/50 mix gives #808000.',
    quickFormula: 'Purple + Yellow = Brown/Olive',
    quickHex: '#808000',
    quickSwatchAria: 'Balanced purple and yellow mix, olive',
    theory:
      'Purple and yellow sit opposite on the color wheel, so mixing them desaturates quickly into olive, moss, and brown families rather than a vivid secondary. Painters use this pair to mute landscapes and shadows; on screens, linear RGB blends between #800080 and #FFFF00 land near web olive (#808000) at equal parts. Dominating with purple keeps the mix drab-violet; dominating with yellow pushes chartreuse-olive. Document your anchor hex in tokens so teams do not confuse this muddy mix with intentional brand green.',
    ratioRows: [
      { ratio: '80% purple + 20% yellow', label: 'Deep olive', hex: '#996633' },
      { ratio: '60% purple + 40% yellow', label: 'Moss brown', hex: '#8F7333' },
      { ratio: '50% purple + 50% yellow', label: 'True olive', hex: '#808000' },
      { ratio: '40% purple + 60% yellow', label: 'Yellow olive', hex: '#738C00' },
      { ratio: '20% purple + 80% yellow', label: 'Chartreuse olive', hex: '#669900' },
    ],
    uiUsage:
      'Olive and brown-olive mixes work for earthy dashboards, outdoor brands, and photography overlays—avoid using them for small error text on saturated green. Pair olive accents with cream or charcoal neutrals. After choosing an anchor, branch tints in the palette generator and validate every text pair with the contrast checker.',
  },
  'orange-and-blue': {
    metaTitle: 'Orange + Blue = Brown #7B5E3A — Color Mixer Result',
    metaDescription:
      'Orange and blue make brown #7B5E3A. Copy the hex code instantly. 5 orange-to-blue mix ratios with swatches, color theory, and UI tips with free color mixer.',
    h1: 'What Color Does Orange and Blue Make?',
    lead: 'Orange and blue mixed make brown. A 50/50 mix gives #7B5E3A.',
    quickFormula: 'Orange + Blue = Brown',
    quickHex: '#7B5E3A',
    quickSwatchAria: 'Balanced orange and blue mix, brown',
    theory:
      'Orange (a red-yellow secondary) and blue are complements; combining them neutralizes chroma into browns and taupes. This is why “orange + blue” rarely yields a clean purple or green on canvas—pigment chemistry pulls toward umber. Digital RGB averaging between #FFA500 and #0000FF produces a warm brown near #7B5E3A at balance. Use the ratio table to brief “rust”, “caramel”, or “drab” before tuning opacity in the mixer.',
    ratioRows: [
      { ratio: '80% orange + 20% blue', label: 'Burnt sienna', hex: '#9A7040' },
      { ratio: '60% orange + 40% blue', label: 'Copper brown', hex: '#8F6538' },
      { ratio: '50% orange + 50% blue', label: 'True brown', hex: '#7B5E3A' },
      { ratio: '40% orange + 60% blue', label: 'Cool umber', hex: '#6B5230' },
      { ratio: '20% orange + 80% blue', label: 'Deep taupe', hex: '#5A4628' },
    ],
    uiUsage:
      'Warm browns suit heritage logos, coffee brands, and rustic UI chrome. Keep saturated orange or blue for single primary CTAs rather than stacking both beside brown fills. Extend brown ramps in the palette generator and run contrast checks on white and cream text before shipping.',
  },
  'red-and-black': {
    metaTitle: 'Red + Black = Maroon #800000 — Color Mixer Result',
    metaDescription:
      'Red and black make maroon #800000. Copy the hex code instantly. 5 red-to-black mix ratios with swatches, color theory, and UI tips with free color mixer.',
    h1: 'What Color Does Red and Black Make?',
    lead: 'Red and black mixed make dark red or maroon. A 50/50 mix gives #800000.',
    quickFormula: 'Red + Black = Dark red / maroon',
    quickHex: '#800000',
    quickSwatchAria: 'Balanced red and black mix, maroon',
    theory:
      'Adding black to red lowers value without necessarily shifting hue—a shade in classical terms. Equal parts pure red (#FF0000) and black (#000000) yield maroon (#800000), the same family as CSS “maroon”. Small amounts of black quickly deepen scarlet into wine and burgundy, which is why print designers specify percentages rather than eyeballing. In UI, treat these steps as semantic “danger pressed” or luxury accent colors, not body text on dark mode without contrast testing.',
    ratioRows: [
      { ratio: '80% red + 20% black', label: 'Bright crimson', hex: '#CC0000' },
      { ratio: '60% red + 40% black', label: 'Deep red', hex: '#B30000' },
      { ratio: '50% red + 50% black', label: 'Maroon', hex: '#800000' },
      { ratio: '40% red + 60% black', label: 'Wine', hex: '#660000' },
      { ratio: '20% red + 80% black', label: 'Near black red', hex: '#4D0000' },
    ],
    uiUsage:
      'Maroon headers and buttons read premium on cream or gold palettes; pair with off-white type only after contrast validation. Use lighter ratio rows for hover states and darker rows for pressed states. Build systematic reds in the palette generator, then verify focus rings and links in the contrast checker.',
  },
  'yellow-and-green': {
    metaTitle: 'What Color Does Yellow and Green Make? #9ACD32 | Theme & Color',
    metaDescription:
      'Yellow and green mixed make yellow-green. See hex codes for 5 mix ratios, color swatches, and use our free color mixer tool.',
    h1: 'What Color Does Yellow and Green Make?',
    lead: 'Yellow and green mixed make yellow-green. A 50/50 mix gives #9ACD32.',
    quickFormula: 'Yellow + Green = Yellow-green',
    quickHex: '#9ACD32',
    quickSwatchAria: 'Balanced yellow and green mix, yellow-green',
    theory:
      'Yellow and green are adjacent on the wheel, so their mixture stays in the yellow-green family—chartreuse, lime, and spring green—rather than neutralizing. The CSS color yellowgreen (#9ACD32) is a common reference for a balanced mix between bright yellow (#FFFF00) and web green (#008000). More yellow lifts lightness toward lemon-lime; more green deepens toward apple and forest accents. Use named stops in the table so developers and illustrators share the same vocabulary.',
    ratioRows: [
      { ratio: '80% yellow + 20% green', label: 'Lime', hex: '#C4E038' },
      { ratio: '60% yellow + 40% green', label: 'Chartreuse', hex: '#B8D935' },
      { ratio: '50% yellow + 50% green', label: 'Yellow-green', hex: '#9ACD32' },
      { ratio: '40% yellow + 60% green', label: 'Apple green', hex: '#7CB828' },
      { ratio: '20% yellow + 80% green', label: 'Leaf green', hex: '#5E9A1E' },
    ],
    uiUsage:
      'Yellow-greens signal energy, growth, and outdoor recreation—strong for charts, badges, and campaign accents. Avoid neon lime for long-form text on white. Generate harmonious ramps in the palette generator and test WCAG pairs in the contrast checker before using yellow-green as a button fill.',
  },
  'orange-and-red': {
    metaTitle: 'What Color Does Orange and Red Make? #FF4500 | Theme & Color',
    metaDescription:
      'Orange and red mixed make red-orange. See hex codes for 5 mix ratios, color swatches, and use our free color mixer tool.',
    h1: 'What Color Does Orange and Red Make?',
    lead: 'Orange and red mixed make red-orange. A 50/50 mix gives #FF4500.',
    quickFormula: 'Orange + Red = Red-orange',
    quickHex: '#FF4500',
    quickSwatchAria: 'Balanced orange and red mix, red-orange',
    theory:
      'Orange already contains red; mixing orange (#FFA500) with more red (#FF0000) pushes hue toward red-orange and vermillion without introducing cool undertones. The web color orangered (#FF4500) is a useful 50/50 anchor for digital handoff. Because both parents are warm and high-chroma, results stay vivid—ideal for heat maps, sports branding, and sale badges. Pigment mixes may read slightly deeper than screen hexes; proof print when packaging depends on exact warmth.',
    ratioRows: [
      { ratio: '80% orange + 20% red', label: 'Bright orange', hex: '#FF7700' },
      { ratio: '60% orange + 40% red', label: 'Flame orange', hex: '#FF5E00' },
      { ratio: '50% orange + 50% red', label: 'Red-orange', hex: '#FF4500' },
      { ratio: '40% orange + 60% red', label: 'Vermillion', hex: '#E63D00' },
      { ratio: '20% orange + 80% red', label: 'Scarlet orange', hex: '#CC3500' },
    ],
    uiUsage:
      'Red-orange CTAs outperform pure red for “limited time” promos when contrast on white passes. Use one warm accent per view so orange-red does not compete with yellow highlights. Extend semantic warning colors in the palette generator and audit hover/focus states with the contrast checker.',
  },
  'blue-and-purple': {
    metaTitle: 'What Color Does Blue and Purple Make? #6A0DAD | Theme & Color',
    metaDescription:
      'Blue and purple mixed make violet. See hex codes for 5 mix ratios, color swatches, and use our free color mixer tool.',
    h1: 'What Color Does Blue and Purple Make?',
    lead: 'Blue and purple mixed make violet. A 50/50 mix gives #6A0DAD.',
    quickFormula: 'Blue + Purple = Violet',
    quickHex: '#6A0DAD',
    quickSwatchAria: 'Balanced blue and purple mix, violet',
    theory:
      'Blue and purple are neighbors on the cool side of the wheel; mixing them deepens violet and indigo rather than creating mud (unlike complements). Between pure blue (#0000FF) and web purple (#800080), a balanced blend lands near #6A0DAD—rich violet suitable for creative tech, music, and youth brands. Extra blue shifts toward royal indigo; extra purple shifts toward plum. In RGB workflows, capture both hue and lightness tokens so dark mode does not collapse violet into flat gray.',
    ratioRows: [
      { ratio: '80% blue + 20% purple', label: 'Royal violet', hex: '#3509AD' },
      { ratio: '60% blue + 40% purple', label: 'Deep violet', hex: '#4F0BAD' },
      { ratio: '50% blue + 50% purple', label: 'True violet', hex: '#6A0DAD' },
      { ratio: '40% blue + 60% purple', label: 'Plum violet', hex: '#7F2BB8' },
      { ratio: '20% blue + 80% purple', label: 'Soft purple', hex: '#9448C3' },
    ],
    uiUsage:
      'Violet accents pair with off-white, silver, or charcoal for premium digital products. Use darker ratio rows for navigation and lighter rows for gradient highlights. Build cool harmonies in the palette generator and verify link and button contrast in the contrast checker—violet text on mid-gray often fails WCAG.',
  },
  'green-and-yellow': {
    metaTitle: 'What Color Does Green and Yellow Make? #9ACD32 | Theme & Color',
    metaDescription:
      'Green and yellow mixed make yellow-green. See hex codes for 5 mix ratios, color swatches, and use our free color mixer tool.',
    h1: 'What Color Does Green and Yellow Make?',
    lead: 'Green and yellow mixed make yellow-green. A 50/50 mix gives #9ACD32.',
    quickFormula: 'Green + Yellow = Yellow-green',
    quickHex: '#9ACD32',
    quickSwatchAria: 'Balanced green and yellow mix, yellow-green',
    theory:
      'Naming order does not change the physics: green plus yellow still produces a yellow-green family anchored near #9ACD32 (CSS yellowgreen). This URL lists green first for search queries phrased that way; compare with yellow-and-green for the same hex ramp with yellow-heavy ratio labels. Adjacent hues keep mixtures bright—useful for agriculture, sports, and sustainability UI where you need more energy than pure forest green.',
    ratioRows: [
      { ratio: '80% green + 20% yellow', label: 'Leaf green', hex: '#5E9A1E' },
      { ratio: '60% green + 40% yellow', label: 'Apple green', hex: '#7CB828' },
      { ratio: '50% green + 50% yellow', label: 'Yellow-green', hex: '#9ACD32' },
      { ratio: '40% green + 60% yellow', label: 'Chartreuse', hex: '#B8D935' },
      { ratio: '20% green + 80% yellow', label: 'Lime', hex: '#C4E038' },
    ],
    uiUsage:
      'Use green-heavy rows for trustworthy data UI and yellow-heavy rows for campaign bursts. Keep body text on white or light gray; reserve chartreuse for icons and tags after contrast testing. Branch extended greens in the palette generator and regression-test states with the contrast checker.',
  },
  'pink-and-blue': {
    metaTitle: 'Pink + Blue = Lavender #C8A2C8 — Color Mixer Result',
    metaDescription:
      'Pink and blue make lavender #C8A2C8. Copy the hex code instantly. 5 pink-to-blue mix ratios with swatches, color theory, and UI tips with free color mixer.',
    h1: 'What Color Does Pink and Blue Make?',
    lead: 'Pink and blue mixed make lavender. A 50/50 mix gives #C8A2C8.',
    quickFormula: 'Pink + Blue = Lavender',
    quickHex: '#C8A2C8',
    quickSwatchAria: 'Balanced pink and blue mix, lavender',
    theory:
      'Pink is a light red; blue adds cool depth. Together they move toward lavender, periwinkle, and mauve rather than saturated purple—especially when pink (#FFC0CB) is already high in lightness. A 50/50 reference near #C8A2C8 reads soft and floral, common in beauty, stationery, and calm wellness UI. Dominating with blue yields periwinkle-gray; dominating with pink keeps ballet-slipper pastels. Always test perceived hue on calibrated displays; inexpensive panels shift lavender toward gray.',
    ratioRows: [
      { ratio: '80% pink + 20% blue', label: 'Blush lavender', hex: '#E8B8D8' },
      { ratio: '60% pink + 40% blue', label: 'Soft lilac', hex: '#D8AAD0' },
      { ratio: '50% pink + 50% blue', label: 'True lavender', hex: '#C8A2C8' },
      { ratio: '40% pink + 60% blue', label: 'Periwinkle', hex: '#A88AB8' },
      { ratio: '20% pink + 80% blue', label: 'Cool mauve', hex: '#8872A8' },
    ],
    uiUsage:
      'Lavender backgrounds work for onboarding and wellness flows when text contrast is verified. Pair with deep navy or charcoal for typography, not mid-lavender on lavender. Expand pastel systems in the palette generator and audit every caption pair with the contrast checker.',
  },
  'brown-and-orange': {
    metaTitle: 'What Color Does Brown and Orange Make? #C8720A | Theme & Color',
    metaDescription:
      'Brown and orange mixed make dark orange. See hex codes for 5 mix ratios, color swatches, and use our free color mixer tool.',
    h1: 'What Color Does Brown and Orange Make?',
    lead: 'Brown and orange mixed make dark orange. A 50/50 mix gives #C8720A.',
    quickFormula: 'Brown + Orange = Dark orange',
    quickHex: '#C8720A',
    quickSwatchAria: 'Balanced brown and orange mix, dark orange',
    theory:
      'Brown (#8B4513) is a low-chroma orange-red; adding pure orange (#FFA500) raises warmth and saturation toward rust, copper, and dark orange. At equal parts, #C8720A reads as burnt orange—common for autumn campaigns, craft food packaging, and leather-inspired UI. Dominating with brown keeps earth tones; dominating with orange pushes toward pumpkin and safety orange. Document whether your brand means “rust” or “pumpkin” so implementation tokens stay consistent across web and print.',
    ratioRows: [
      { ratio: '80% brown + 20% orange', label: 'Deep umber', hex: '#A06818' },
      { ratio: '60% brown + 40% orange', label: 'Rust brown', hex: '#B06C10' },
      { ratio: '50% brown + 50% orange', label: 'Dark orange', hex: '#C8720A' },
      { ratio: '40% brown + 60% orange', label: 'Burnt orange', hex: '#D87808' },
      { ratio: '20% brown + 80% orange', label: 'Pumpkin', hex: '#E87E06' },
    ],
    uiUsage:
      'Dark orange accents suit fall promos, food delivery, and artisan brands. Use brown-heavy rows for borders and orange-heavy rows for CTA fills after contrast checks. Generate warm ramps in the palette generator and validate white-on-orange buttons in the contrast checker before launch.',
  },
};

export function getComboSeo(combo: string): ComboSeoBundle | null {
  return COMBO_SEO[combo] ?? null;
}
