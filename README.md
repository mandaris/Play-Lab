# Play-Lab
Theme based off of ideas from [Labarum](https://github.com/mandaris/labarum).

## Version History

1.0.0
- Initial release

1.0.1
- Correct background color for `<audio>` element
- Change anchor styling to be more simplistic
- Remove `title` from `<menu>` element

1.0.2
- Added `box-decoration-break` to `pre`, `code`, and `kbd`
- Updated newsletter theme

1.0.3
- Use `.Params.Author` instead of `.Site.Author` this is because it was depreciated

1.1.0
- Change the minimum version of Hugo needed for this theme
- Change `a.footnote-ref` to match the style of `lozenge` class
- Remove all default padding (made some changes to accomidate)
- Add styling for `figure` and `figcaption`
- Change `.Site.Author` to `.Site.Params.Author`
- Add hover affect for includes
- Reduce motion if requested
- Adjustments for newsletter
- Add render hook for alerts

1.1.1
- Add page for author taxonomy
- Change padding to set value instead of `em`

1.1.2
- Add `aria-hidden` to staticly linked svgs
- Reference `notes.svg` instead of `note.svg`
- Modify `site-header` to have the menu under the title
- Adjust `li` and `ol` to have `inline-margin-start`
- Change order of table css to better
- Add margin for `blockquote > footer`

1.1.3
- Add more padding to lozenge
- Add more color to `blockquote` and add it to newsletter
- Adjust the definition terms `<dt>` to be `oblique`

1.1.4
- Fix conversations not showing up on main site by removing duplicate definition of `single.html`

1.1.5
- Add a couple more svg images and colors for admonitions
- Add the custom footer partial to the footer

1.1.6
- Change the pagination on index.html to only have pages with titles
- Center text in footer
- Adjust colors in newsletter.html
- Add more static SVGs

1.1.7
- Add styling to comments
- Make micro.blog icon use currentColor
- Add a `--background-mid` to `<blockquote>`
- Add more admonition color options
- Remove filter that makes index only show posts with titles

1.1.8
- Change the tags on hidden author information
- Add spacing around article meta properties
- Remove `role` from paginator
- Add a `-` in the title for MicroPosts
- Update meta tags to use the logic from the official [schema embed](https://raw.githubusercontent.com/gohugoio/hugo/refs/heads/master/tpl/tplimpl/embedded/templates/schema.html)
- Remove the `text-wrap: balance` from the `h1` element
- Move `text-wrap: pretty` from `html` to `.post-body`
- Add `line-height: normal` to `.lozenge`
- Change the flow of the `.microblog-conversation` 
- Move `twitter:card` meta data to another place in the header


1.1.9
- Change heading level for debug information
- Remove trailing slashes in head tags
- Make `h1` bigger
- Adjust spacing for `.microblog_post`

1.1.10
- Adjust size of header
- Adjust size of image
- Changes to `404.html` and `single.html` to add more schema.org information

1.2.00
- Change header tag for `_default/list.html`
- Change `rss.html` and `list.json.json` to have a title for microposts

1.2.01
- Change border radius on `.highlight`
- Change syntax color scheme to Nord to better match the rest of the theme
- Modifications to `padding` and `background` on `<details>` element
- Change to shadow on `lozenge` class

1.3.00
- Remove the debug information
- Point to static image for OpenGraph image
- Modify size for `FloatLeft` and `FloatRight` classes
- Remove trailing slashes in some meta tags
- Adjust drop shadow on image

1.3.01
- Change the OpenGraph image
- Remove additional trailing slash and wrap row

1.3.02
- Adjustments to admonitions/callout code
- Change microformats for author information
- Slight changes to default OpenGraph image

1.3.03
- Add author link as referenced in the [indieweb authorship article](https://indieweb.org/authorship#Authorship_for_streams_of_posts)

1.3.04
- Add information back to the invidual posts and use a hidden keyword

1.3.05
- Change fontcolor on `lozenge` class for accessibility in dark mode
- Add text to empty links used for author information
- Return the proper padding for admonitions used in blockquote elements

1.3.06
- Make adjustments to shadows on images
- Add accent color to category seperator
- Move invisible link to bottom of `<main>`

1.4.0
- Change the font to [Atkinson Hyperlegible](https://www.brailleinstitute.org/freefont/)
- Make the index only show the posts with titles
- Attempt to remove `h-feed` from single pages
- Correct header values on archive page
- Add `view-transition` to meta tag in header
- Change default OpenGraph image to not have words
- Remove `border` and `filter` around `<figure>`
- Add `margin-top` and change `line-height` on `<figcaption>`


1.4.01
- Add styling to `<button>`
- Add `cursor` to readonly and disabled input
- Add styling to `::placeholder`

1.5.00
- Add Share and copy to clipboard buttons
- Add gist shortcode to avoid future depreciation
- Adjust white space in `list.archivehtml.html` around titles
- Change the format of the `replies.html` to better seperate the entries
- Make categories line up in two columns for taxonimy listings
- Other style adjustments that I made over time

1.5.01
- Place a `div` around the `replies.html` header
- Adjust `h1` size to be smaller
- Add styling to `.icon` class 
- Add `text-shadow` to headers
- Add icons to share actions

1.5.02
- Adjust colors on code blocks to make them WCAG AA compliant

1.5.03
- Remove `defer` from the conversation script
- Add aria-label to author information

1.5.04
- Add visual `filter` to audio element
- Add `margin-top` and `margin-bottom` to the `<hr>` in `<blockquote>`
- Rearrange the classes in `admonitions.css`

1.5.05
- Change `favicon.svg` back to original
- Create `bimi.svg` to be used for BIMI

1.5.06
- Remove unused tabler SVGs from repository
- Move filter values to `:root`
- Add changes to `site.manifest`
- Change meta tags on author information

1.5.07
- Add tabler webfont
- Correct issue with gist in dark mode

1.6.00
- Change the default for RSS to have the email email address
- Add more contrast to syntax colors
- Move skip to main context link into header and change color
- Make navigation links into lozenge
- Adjustments in style

1.6.01
- Change bimi to black and white version
- Fix issue with rss

1.6.02
- Really fix rss. For real this time

1.6.03
- This time, I _really_ fixed rss

1.6.04
- Add Titles for micro posts in rss

1.6.05
- Restore transition behavior

1.6.06
- Minor changes to transition behavior

1.7.00
- Move "About to" the bottom and change space allocation
- Remove color from category separator
- Shrink `h1` size to reduce user focus
- Added `font-display: fallback;` so that the page can render fast er

1.8.00
- Add search to `index.html` using [Sod's plugin](https://github.com/svendahlstrand/plugin-search-space/) as a base
- Add `view-transition-name` to `main`
- Remove "Micro" from post titles without a title
- Remove periods at the end of sentences in `README.md`
- Small adjusts to `.highlight` of code blocks

1.8.01
- Adjust label to correctly point to search query
- Add `--standardfilter` to `highlight` class
- Add icon to RSS link

1.8.02
- Adjustments to `details`
- Change `author-info-aside.html` to `author-section.html`
- Associate label for search
- Various style changes

1.8.03
- Adjustments to `icon` class for size and positioning