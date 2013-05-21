Mono Social Icons Font
===================

Mono Social Icons Font is a webfont based on [Mono Social Icons](http://icondock.com/free/mono-social-icons), which includes ~100 social icons in three variations under one font : circled, rounded and regular.

Demo & dowmload links : [http://drinchev.github.io/monosocialiconsfont](http://drinchev.github.io/monosocialiconsfont)

## How to use

This font comes with included _liga_ feature for letter substitution of your icons. You can also use the unicode method for referring to the unicode places in the font table. 

### HTML
	
    <p>Twitter symbol : <span class='symbol'>circletwitterbird</span></p>
    <p>Twitter symbol with unicode : <span class='symbol'>&amp;#xe286;</span></p>
    <p><a href='#' class='symbol' title='circletwitterbird'>Follow us</a></p>
    <p>Unicode : <a href='#' class='symbol' title='&amp;#xe286;'>Follow us</a></p>

### CSS

    @font-face {
        font-family: 'Mono Social Icons Font';
        src: url('MonoSocialIconsFont-1.10.eot');
        src: url('MonoSocialIconsFont-1.10.eot?#iefix') format('embedded-opentype'),
             url('MonoSocialIconsFont-1.10.woff') format('woff'),
             url('MonoSocialIconsFont-1.10.ttf') format('truetype'),
             url('MonoSocialIconsFont-1.10.svg#MonoSocialIconsFont') format('svg');
        src: url('MonoSocialIconsFont-1.10.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .symbol, a.symbol:before {
        font-family: 'Mono Social Icons Font';
        -webkit-text-rendering: optimizeLegibility;
        -moz-text-rendering: optimizeLegibility;
        -ms-text-rendering: optimizeLegibility;
        -o-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        -ms-font-smoothing: antialiased;
        -o-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }

    a.symbol:before {
        content: attr(title);
        margin-right: 0.3em;
        font-size: 130%;
    }

Or if you work with [Compass](http://compass-style.org/), then you can use

    @include font-face("Mono Social Icons Font", font-files("MonoSocialIconsFont-1.10.woff", "MonoSocialIconsFont-1.10.ttf", "MonoSocialIconsFont-1.10.svg#MonoSocialIconsFont"), "MonoSocialIconsFont-1.10.eot", normal, normal);

    .symbol, a.symbol:before {
        font-family: 'Mono Social Icons Font';
        -webkit-text-rendering: optimizeLegibility;
        -moz-text-rendering: optimizeLegibility;
        -ms-text-rendering: optimizeLegibility;
        -o-text-rendering: optimizeLegibility;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        -ms-font-smoothing: antialiased;
        -o-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }

    a.symbol:before {
        content: attr(title);
        margin-right: 0.3em;
        font-size: 130%;
    }

## Changelog

### Version 1.10 ( 21 May 2013 )

 - updated twitter bird icon
 - added instagram icon
 - minor fixes of some ligatures

## Special Thanks

This font is based on [Mono Social Icons](http://icondock.com/free/mono-social-icons) by [IconDock](http://icondock.com/) and [Double-J Design](http://www.doublejdesign.co.uk/). It adds two more icons to the set : __Google Plus__ and __GitHub Alternative Icon__

## License

It's __free__ for whatever use ( commercial or personal ), both for web or for printing purpose. Licensed under the [Open Font License](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).



