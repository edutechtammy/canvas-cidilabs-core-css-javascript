# Canvas CidiLabs Core CSS JavaScript

A local development environment that replicates Canvas LMS and CidiLabs styling to enable instructional designers to preview and test HTML content locally before deploying to Canvas.

## Project Overview

This project provides the core CSS and JavaScript files needed to accurately preview Canvas lesson pages in a local development environment. Unlike custom CSS/JS that cannot be used in Canvas, this project focuses on replicating the existing Canvas and CidiLabs styles that are available in the production environment.

### Problem Statement

Instructional designers working with Canvas HTML content currently face a major workflow inefficiency:
- HTML must be pasted into Canvas to see how it will actually render
- No way to reliably preview Canvas styling locally
- Constant back-and-forth between local development and Canvas for troubleshooting
- Time-consuming iteration cycles for content refinement

### Solution

This project creates a local environment that mirrors Canvas's styling system, enabling:
- ✅ Local preview of HTML content as it will appear in Canvas
- ✅ Faster iteration and troubleshooting
- ✅ Confident HTML development without constant Canvas testing
- ✅ Integration with AI-powered content analysis workflows

## Target Use Cases

### Primary Focus
- **Canvas lesson page elements**: Banners, content blocks, typography, layouts
- **Core Canvas styling**: Base classes, typography, spacing, colors
- **CidiLabs integration**: Styling compatibility with CidiLabs components

### CidiLabs Class Naming Convention
- **Current CidiLabs classes**: Consistently prefixed with `dp-` (e.g., `dp-banner`, `dp-button`)
- **Legacy CidiLabs classes**: Older `kl-` prefixed classes (mostly deprecated, only a few still in use)
- **Identification**: CidiLabs components can be easily identified by these prefixes when analyzing Canvas HTML

### Out of Scope
- CidiLabs interactive activities (covered in separate project)
- Custom CSS/JS that cannot be used in Canvas environment
- Canvas administrative interface styling

## Project Structure

```
canvas-cidilabs-core-css-javascript/
├── README.md
├── index.html                 # Test page for development
├── css/
│   ├── canvas-core.css        # Core Canvas styling
│   ├── canvas-typography.css  # Text and heading styles
│   ├── canvas-layout.css      # Layout and spacing classes
│   └── cidilabs-base.css      # CidiLabs base integration styles
├── js/
│   ├── canvas-complete.js     # Core Canvas JavaScript functionality
│   └── cidilabs-scripts.js    # CidiLabs Activities interactive scripts
├── test-pages/
│   ├── banner-examples.html   # Test page for banner styles
│   ├── content-blocks.html    # Test page for content blocks
│   └── typography-test.html   # Test page for text styling
├── documentation/
│   ├── style-reference.md     # Documented Canvas classes and styles
│   ├── development-log.md     # Progress tracking and discoveries
│   └── canvas-html-examples/  # Reference HTML from Canvas
└── tools/
    └── style-extractor.html   # Helper for analyzing Canvas styles
```

## Development Workflow

### Phase 1: Systematic Style Collection
1. **HTML Collection**: Gather representative HTML examples from Canvas
2. **Style Analysis**: Use Chrome DevTools to extract relevant CSS
3. **Class Identification**: 
   - Canvas classes: Standard HTML/CSS classes used by Canvas
   - CidiLabs classes: Look for `dp-` prefixed classes (current) and `kl-` prefixed classes (legacy)
4. **Documentation**: Record findings in style-reference.md
5. **Implementation**: Build CSS files incrementally, organizing by class prefix and functionality
6. **Testing**: Validate against Canvas screenshots

### Phase 2: JavaScript Functionality
1. **Behavior Analysis**: Identify Canvas JavaScript behaviors
2. **Core Functions**: Extract essential JavaScript functionality
3. **CidiLabs Integration**: Ensure compatibility with CidiLabs components
4. **Testing**: Verify functionality matches Canvas environment

### Phase 3: Validation & Refinement
1. **Side-by-Side Testing**: Compare local preview with Canvas rendering
2. **Edge Case Testing**: Test various content types and layouts
3. **Performance Optimization**: Ensure efficient loading and rendering
4. **Documentation**: Complete style reference and usage guide

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari)
- VS Code (recommended for development)
- Basic understanding of HTML/CSS/JavaScript

### Quick Start
1. Clone this repository
2. Open `index.html` in your browser for development navigation
3. Use `canvas-html-explorations/M1L1_Stars_preview.html` to see styling progress in a full lesson context
4. Reference `documentation/style-reference.md` for available classes

### Full Lesson Preview
The `canvas-html-explorations/` folder contains:
- **`M1L1_Stars.html`** - Complete, unmodified Canvas lesson HTML (PHYS-1315 M2L1 Stars)
- **`M1L1_Stars_preview.html`** - Same lesson with HTML boilerplate and our CSS/JS integration

**Purpose**: The full lesson preview allows you to see how systematic CSS development applies to real Canvas content. As we build typography, callouts, and interactive components incrementally, you can immediately see the visual progress within an authentic educational context rather than just isolated test snippets.

**⚠️ CRITICAL: Structural Fidelity Requirement**
When updating preview files, maintain **EXACT structural fidelity** to the original Canvas lesson:
- Copy HTML structure directly from `M1L1_Stars.html` without modifications
- Preserve all class names, element nesting, and content organization
- Do NOT substitute components (e.g., don't change accordions to callouts)
- The goal is Canvas copy-paste compatibility, not improvement
- Any structural changes break the accurate Canvas replication objective

**Workflow**: 
1. Develop focused CSS in systematic chunks (containers → typography → components)
2. Test in isolated test pages for accuracy
3. Validate in full lesson preview for real-world context
4. Compare with Canvas screenshots for visual matching
5. **Verify preview maintains exact original Canvas lesson structure**

### Development Setup
```bash
# Navigate to project directory
cd canvas-cidilabs-core-css-javascript

# Start a local server (optional, for testing)
python -m http.server 8000
# OR
npx serve .
```

## Usage

### For Instructional Designers
1. **Copy your Canvas HTML** into the test pages
2. **Preview locally** using this environment
3. **Iterate and refine** your content
4. **Copy back to Canvas** with confidence

### For AI-Assisted Workflows
This project serves as a foundation for larger AI-powered content analysis systems:
- Provides accurate local preview during AI content generation
- Enables systematic testing of AI-suggested improvements
- Supports automated HTML validation workflows

## Team & Collaboration

### Current Team
- Professional Learning Community (PLC) focused on AI for instructional design
- 5 motivated instructional designers exploring AI integration
- 3-month collaborative learning project

### Contribution Guidelines
1. **Systematic Approach**: Document all style discoveries
2. **Test-Driven**: Validate changes against Canvas screenshots
3. **Incremental Progress**: Build one component at a time
4. **Clear Documentation**: Maintain detailed records for team learning

## Technology Stack

- **HTML5**: Semantic markup following Canvas patterns
- **CSS3**: Modern CSS features for accurate style replication
- **Vanilla JavaScript**: Core functionality without external dependencies
- **CidiLabs Activities Integration**: Enhanced interactive component scripts
- **No Build Process**: Simple, accessible development environment

## Current Development Focus

### Phase 1: Core Container & Structural Foundation
Based on analysis of Canvas lesson pages and existing reference CSS, our systematic approach focuses on the essential structural elements without getting overwhelmed by the full `.dp-wrapper` scope:

**Foundation Elements to Extract and Replicate:**
- [x] **Bootstrap Base Integration**
  - [x] Copy Bootstrap 5.3.2 foundation from reference-css
  - [x] Verify Bootstrap grid system functionality
  - [x] Test responsive breakpoints match Canvas behavior
  
- [x] **Core Container System**
  - [x] `.dp-wrapper` - Main container behavior (not all children)
  - [x] `.dp-flat-sections` - Section container styling
  - [x] `.dp-content-block` - Individual content blocks
  - [x] `.dp-header` - Header container structure
  
- [x] **Essential Layout Classes**
  - [x] `.dp-column-container` - Layout wrapper
  - [x] `.dp-has-icon` - Icon + text layout pattern
  - [x] Standard spacing patterns (`margin-bottom: 1.5em`)
  - [x] Background styling (`background: #f5f5f5`)

- [x] **Basic Visual Elements**
  - [x] `.dp-hr-plain` - Horizontal rule styling
  - [x] Core typography classes (`.dp-heading`, `.dp-lead`)
  - [x] Essential responsive behavior

**Phase 1: COMPLETE! 🎉**

**Success Criteria:**
- [x] Create test page with main lesson structure
- [x] Match Canvas layout spacing and proportions
- [x] Bootstrap integration works correctly
- [x] Container system functions without overwhelming CSS scope

**Strategy:** Focus on structural containers and layout, not the full CidiLabs component library.

### Phase 2: Callouts, Cards & Interactive Components
Based on Canvas lesson analysis, building key interactive components:

**Phase 2 Progress:**
- [x] **dp-callout System**
  - [x] `.dp-callout` - Card-based callouts with icon emphasis
  - [x] `.dp-callout-side-emphasis` - Left icon area
  - [x] Type variants: `dp-callout-type-info`, `dp-callout-type-title-bar`
  - [x] Bootstrap card integration (`.card-body`, `.card-title`, `.card-text`)

- [x] **dp-panels System** 
  - [x] `.dp-panels-wrapper` - Accordion container
  - [x] `.dp-panel-heading` - Clickable headers with triangle icons
  - [x] `.dp-panel-content` - Expandable content areas
  - [x] TSTC brand colors (Texas Blue default, Lone Star Red active)
  - [x] JavaScript functionality with smooth transitions
  - [x] **CidiLabs Activities Integration** - Enhanced interactive scripts from previous project

**Next Components:**
- [x] Image galleries and figures
- [x] Advanced form elements - Interactive components (dp-flip-card, dp-si-sort, etc.) handled in separate CidiLabs Activities project
- [x] Modal dialogs and overlays - dp-popup-image system implemented (primary Canvas overlay functionality)

### Phase 3: Polish & Enhancement (COMPLETE!)
Finalizing the Canvas replication environment with enhanced features:

**Phase 3 High-Priority Components:**
- [x] **Header styling system** - Enhanced dp-header visual elements and proper layout
- [x] **Content breathing room** - Improved spacing and padding via dp-wrapper, dp-flat-sections, or variation-1 classes

**Phase 3 Components:**
- [x] **Navigation styling** - Breadcrumb and previous/next button systems ✨
- [x] **Layout enhancements** - Improved spacing and visual hierarchy ✨
- [x] **Header styling system** - Enhanced dp-header visual elements and layout ✨
- [x] **Content breathing room** - Improved spacing via dp-wrapper, dp-flat-sections ✨
- [x] **h4.dp-has-icon system** - Smaller section headings with FontAwesome icons and subtle underlines ✨
- [x] **Callout title bar refinements** - Enhanced dark styling and visual consistency ✨
- [ ] **CSS architecture optimization** - Resolved conflicts between core and activities stylesheets ✨

**Phase 3: COMPLETE! 🎉**

### Phase 4: Advanced Features & Optimization
Extended functionality and refinement for comprehensive Canvas replication:

**Phase 4 Components:**
- [ ] **dp-embed-wrapper system** - Responsive video/iframe containers
- [ ] **dp-shadow variants** - Enhanced card shadow effects (dp-shadow-r2, etc.)
- [ ] **Color palette utilities** - Background colors, borders, text colors
- [ ] **Enhanced typography** - Additional text styling classes
- [ ] **Performance optimization** - CSS minification and organization
- [ ] **Documentation completion** - Comprehensive style guide and usage examples

## Goals & Success Metrics

### Long-term Vision
- Integration with AI content analysis workflows
- Foundation for automated HTML optimization
- Scalable system for pedagogical content improvement
- Community adoption by instructional design teams

## Related Projects

- **CidiLabs Interactive Activities**: Separate project focusing on CidiLabs interactive components
- **AI Content Analysis Pipeline**: Upcoming project for automated content improvement
- **Pedagogical HTML Optimizer**: Future project for AI-driven content enhancement

## Support & Documentation

- `documentation/style-reference.md` - Complete style guide
- `documentation/development-log.md` - Progress tracking
- GitHub Issues - Bug reports and feature requests
- Team PLC - Collaborative learning and feedback

## License

This project is developed for educational and instructional design purposes. Please respect Canvas LMS and CidiLabs terms of service when using these replicated styles.

---

*Built with ❤️ for instructional designers who want to create better learning experiences*