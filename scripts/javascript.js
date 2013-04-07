/*

	Application
*/


(function() {
  var Application, renderIcons, renderUsage;

  renderIcons = function(data, style, start) {
    var generateIcon, generateRow, icon, iconsOnRow, name, row, rows, unicode, zeroPad, _i, _len;

    generateRow = function(data) {
      return "<div class='row'>" + data + "</div>";
    };
    generateIcon = function(symbol, unicode) {
      return "<div class='icon large-4 small-4 columns'><span class='symbol'>" + symbol + "</span><span class='name'>" + symbol + "</span><span class='unicode'>" + unicode + "</span></div>";
    };
    zeroPad = function(num, places) {
      var zero;

      zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
    };
    row = [];
    rows = [];
    iconsOnRow = 0;
    if (style === 'regular') {
      unicode = 0;
    }
    if (style === 'circle') {
      unicode = 200;
    }
    if (style === 'rounded') {
      unicode = 400;
    }
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      icon = data[_i];
      name = style !== 'regular' ? style + icon : icon;
      iconsOnRow++;
      if (iconsOnRow === 4) {
        iconsOnRow = 1;
        rows.push(generateRow(row.join("")));
        row = [];
      }
      row.push(generateIcon(name, '<code>&#</code>xe' + zeroPad(unicode, 3) + ';'));
      unicode++;
    }
    rows.push(generateRow(row.join("")));
    if (start) {
      return $("#icons").html(rows.join(''));
    }
    return $("#icons").fadeOut('fast', function() {
      return $("#icons").find("div.icon").remove().end().html(rows.join('')).fadeIn('fast');
    });
  };

  renderUsage = function(usage) {
    return $("textarea.active").val($("textarea." + usage).val());
  };

  Application = (function() {
    function Application() {
      var _this = this;

      $(function() {
        var data, input;

        data = ['fivehundredpx', 'aboutme', 'addme', 'amazon', 'aol', 'appstorealt', 'appstore', 'apple', 'bebo', 'behance', 'bing', 'blip', 'blogger', 'coroflot', 'daytum', 'delicious', 'designbump', 'designfloat', 'deviantart', 'diggalt', 'digg', 'dribble', 'drupal', 'ebay', 'email', 'emberapp', 'etsy', 'facebook', 'feedburner', 'flickr', 'foodspotting', 'forrst', 'foursquare', 'friendsfeed', 'friendstar', 'gdgt', 'github', 'githubalt', 'googlebuzz', 'googleplus', 'googletalk', 'gowallapin', 'gowalla', 'grooveshark', 'heart', 'hyves', 'icondock', 'icq', 'identica', 'imessage', 'itunes', 'lastfm', 'linkedin', 'meetup', 'metacafe', 'mixx', 'mobileme', 'mrwong', 'msn', 'myspace', 'newsvine', 'paypal', 'photobucket', 'picasa', 'pinterest', 'podcast', 'posterous', 'qik', 'quora', 'reddit', 'retweet', 'rss', 'scribd', 'sharethis', 'skype', 'slashdot', 'slideshare', 'smugmug', 'soundcloud', 'spotify', 'squidoo', 'stackoverflow', 'star', 'stumbleupon', 'technorati', 'tumblr', 'twitterbird', 'twitter', 'viddler', 'vimeo', 'virb', 'www', 'wikipedia', 'windows', 'wordpress', 'xing', 'yahoobuzz', 'yahoo', 'yelp', 'youtube'];
        $("nav.main a").click(function(event) {
          var target;

          event.preventDefault;
          target = $(event.currentTarget);
          if (target.hasClass('selected')) {
            return false;
          }
          $("nav.main a").removeClass('selected');
          renderIcons(data, target.attr('class'));
          target.addClass('selected');
          return false;
        });
        input = $("section#input input");
        $("nav.tabs a.button").click(function(event) {
          var target;

          event.preventDefault;
          target = $(event.currentTarget);
          if (target.hasClass('selected')) {
            return false;
          }
          $("nav.tabs a.button").removeClass('selected');
          renderUsage(target.attr('title'));
          target.addClass('selected');
          return false;
        });
        renderIcons(data, 'circle', true);
        renderUsage('css');
        return input.focus().val('circle' + data[Math.floor(Math.random() * data.length)]);
      });
    }

    return Application;

  })();

  window.Application = new Application();

}).call(this);
