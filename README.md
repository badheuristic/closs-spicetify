# Closs

A Spicetify theme in the spirit of Apple Music: a solid, neutral content
sheet, window chrome tinted by a dark blur of the current cover, frosted
menus, and a floating glass playback bar.

- Squarer geometry (10px panels, 6–8px cards and artwork)
- Apple-sized page titles, no coloured header bands, shadowed artwork
- Quiet alternating rows in track lists
- Pairs well with [Spicy Lyrics](https://github.com/Spikerko/spicy-lyrics); its sidebar background is dimmed to match

## Requirements

- [Spicetify](https://spicetify.app) 2.x
- Optional: SF Compact Display. Without it the theme falls back to your system UI font.

## Install

```sh
git clone https://github.com/badheuristic/closs-spicetify
cp -r closs-spicetify/Closs "$(spicetify path userdata)/Themes/"

spicetify config current_theme Closs color_scheme Closs
spicetify config inject_css 1 replace_colors 1 overwrite_assets 0 inject_theme_js 1
spicetify apply
```

`theme.js` only publishes the playing track's cover art to the stylesheet;
without `inject_theme_js` the theme still works, minus the tinted chrome.

## Uninstall

```sh
spicetify config current_theme "" color_scheme ""
spicetify apply
```
