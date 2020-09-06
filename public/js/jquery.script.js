jQuery(document).ready(() => {
  /* Add Class To Row */
  (function($) {
    $('.cmsms_row_margin').each(function() {
      const cmsms_column = $(this)
        .find('.cmsms_column')
        .eq(0);

      if (cmsms_column.hasClass('one_half') && cmsms_column.next().hasClass('one_half')) {
        $(this).addClass('cmsms_1212');
      } else if (cmsms_column.hasClass('one_third') && cmsms_column.next().hasClass('two_third')) {
        $(this).addClass('cmsms_1323');
      } else if (cmsms_column.hasClass('two_third') && cmsms_column.next().hasClass('one_third')) {
        $(this).addClass('cmsms_2313');
      } else if (
        cmsms_column.hasClass('one_fourth') &&
        cmsms_column.next().hasClass('three_fourth')
      ) {
        $(this).addClass('cmsms_1434');
      } else if (
        cmsms_column.hasClass('three_fourth') &&
        cmsms_column.next().hasClass('one_fourth')
      ) {
        $(this).addClass('cmsms_3414');
      } else if (
        cmsms_column.hasClass('one_third') &&
        cmsms_column.next().hasClass('one_third') &&
        cmsms_column
          .next()
          .next()
          .hasClass('one_third')
      ) {
        $(this).addClass('cmsms_131313');
      } else if (
        cmsms_column.hasClass('one_half') &&
        cmsms_column.next().hasClass('one_fourth') &&
        cmsms_column
          .next()
          .next()
          .hasClass('one_fourth')
      ) {
        $(this).addClass('cmsms_121414');
      } else if (
        cmsms_column.hasClass('one_fourth') &&
        cmsms_column.next().hasClass('one_half') &&
        cmsms_column
          .next()
          .next()
          .hasClass('one_fourth')
      ) {
        $(this).addClass('cmsms_141214');
      } else if (
        cmsms_column.hasClass('one_fourth') &&
        cmsms_column.next().hasClass('one_fourth') &&
        cmsms_column
          .next()
          .next()
          .hasClass('one_half')
      ) {
        $(this).addClass('cmsms_141412');
      } else if (
        cmsms_column.hasClass('one_fourth') &&
        cmsms_column.next().hasClass('one_fourth') &&
        cmsms_column
          .next()
          .next()
          .hasClass('one_fourth') &&
        cmsms_column
          .next()
          .next()
          .next()
          .hasClass('one_fourth')
      ) {
        $(this).addClass('cmsms_14141414');
      } else {
        $(this).addClass('cmsms_11');
      }
    });
  })(jQuery);

  /* Shortcodes Animation Run */
  (function($) {
    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android
    ) {
      $('[data-animation]')
        .waypoint(
          function(dir) {
            if (dir === 'down') {
              const el = $(this);
              const animation = el.data('animation');
              const delay = el.data('delay') ? el.data('delay') : 0;

              setTimeout(() => {
                el.addClass(`${animation} animated`);
              }, delay);
            }
          },
          {
            offset: '100%'
          }
        )
        .waypoint(
          function(dir) {
            if (dir === 'up') {
              const el = $(this);
              const animation = el.data('animation');
              const delay = el.data('delay') ? el.data('delay') : 0;

              setTimeout(() => {
                el.addClass(`${animation} animated`);
              }, delay);
            }
          },
          {
            offset: '25%'
          }
        );
    } else {
      $('[data-animation]').addClass('animated');
    }

    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android
    ) {
      $('.cmsms_icon_box')
        .waypoint(
          function(dir) {
            if (dir === 'down') {
              const el = $(this);

              el.addClass('shortcode_animated');
            }
          },
          {
            offset: '100%'
          }
        )
        .waypoint(
          function(dir) {
            if (dir === 'up') {
              const el = $(this);

              el.addClass('shortcode_animated');
            }
          },
          {
            offset: '25%'
          }
        );
    } else {
      $('.cmsms_icon_box').addClass('shortcode_animated');
    }

    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android
    ) {
      $('.cmsms_icon_list_items.cmsms_icon_list_type_block')
        .waypoint(
          function(dir) {
            if (dir === 'down') {
              const el = $(this);
              const items = el.find('li');
              const delay = 500;
              let i = 1;

              items.each(function() {
                const item = $(this);

                setTimeout(() => {
                  item.addClass('shortcode_animated');
                }, delay * i);

                i += 1;
              });
            }
          },
          {
            offset: '100%'
          }
        )
        .waypoint(
          function(dir) {
            if (dir === 'up') {
              const el = $(this);
              const items = el.find('li');
              const delay = 500;
              let i = 1;

              items.each(function() {
                const item = $(this);

                setTimeout(() => {
                  item.addClass('shortcode_animated');
                }, delay * i);

                i += 1;
              });
            }
          },
          {
            offset: '25%'
          }
        );
    } else {
      $('.cmsms_icon_list_items .cmsms_icon_list_item').addClass('shortcode_animated');
    }

    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android
    ) {
      $('.cmsms_gallery, .cmsms_hover_slider')
        .waypoint(
          function(dir) {
            if (dir === 'down') {
              const el = $(this);
              const items = el.find('li');
              const delay = 300;
              let i = 1;

              items.each(function() {
                const item = $(this);

                setTimeout(() => {
                  item.addClass('shortcode_animated');
                }, delay * i);

                i += 1;
              });
            }
          },
          {
            offset: '100%'
          }
        )
        .waypoint(
          function(dir) {
            if (dir === 'up') {
              const el = $(this);
              const items = el.find('li');
              const delay = 300;
              let i = 1;

              items.each(function() {
                const item = $(this);

                setTimeout(() => {
                  item.addClass('shortcode_animated');
                }, delay * i);

                i += 1;
              });
            }
          },
          {
            offset: '25%'
          }
        );
    } else {
      $('.cmsms_gallery ul li, .cmsms_hover_slider ul li').addClass('shortcode_animated');
    }

    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android
    ) {
      $('.cmsms_profile.vertical')
        .waypoint(
          function(dir) {
            if (dir === 'down') {
              const el = $(this);
              const items = el.find('article');
              const delay = 500;
              let i = 1;

              items.each(function() {
                const item = $(this);

                setTimeout(() => {
                  item.addClass('shortcode_animated');
                }, delay * i);

                i += 1;
              });
            }
          },
          {
            offset: '100%'
          }
        )
        .waypoint(
          function(dir) {
            if (dir === 'up') {
              const el = $(this);
              const items = el.find('article');
              const delay = 500;
              let i = 1;

              items.each(function() {
                const item = $(this);

                setTimeout(() => {
                  item.addClass('shortcode_animated');
                }, delay * i);

                i += 1;
              });
            }
          },
          {
            offset: '25%'
          }
        );
    } else {
      $('.cmsms_profile.vertical .format-profile').addClass('shortcode_animated');
    }

    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android
    ) {
      $('.cmsms_clients_grid')
        .waypoint(
          function(dir) {
            if (dir === 'down') {
              const el = $(this);
              const items = el.find('.cmsms_clients_item');
              const delay = 300;
              let i = 1;

              items.each(function() {
                const item = $(this);

                setTimeout(() => {
                  item.addClass('shortcode_animated');
                }, delay * i);

                i += 1;
              });
            }
          },
          {
            offset: '100%'
          }
        )
        .waypoint(
          function(dir) {
            if (dir === 'up') {
              const el = $(this);
              const items = el.find('.cmsms_clients_item');
              const delay = 300;
              let i = 1;

              items.each(function() {
                const item = $(this);

                setTimeout(() => {
                  item.addClass('shortcode_animated');
                }, delay * i);

                i += 1;
              });
            }
          },
          {
            offset: '25%'
          }
        );
    } else {
      $('.cmsms_clients_grid')
        .find('.cmsms_clients_item')
        .addClass('shortcode_animated');
    }

    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android
    ) {
      $('.blog.columns, .blog.timeline')
        .waypoint(
          function(dir) {
            if (dir === 'down') {
              const el = $(this);
              const items = el.find('article.post');
              const itemsCount = items.length;
              const delay = 300;
              let i = 1;

              var newTime = setInterval(() => {
                if (el.hasClass('isotope')) {
                  clearInterval(newTime);
                } else {
                  return false;
                }

                items.each(function() {
                  const item = $(this);

                  setTimeout(() => {
                    item.addClass('shortcode_animated');
                  }, delay * i);

                  i += 1;

                  if (i === itemsCount) {
                    setTimeout(() => {
                      $(window).trigger('resize');
                    }, delay * i);
                  }
                });
              }, 300);
            }
          },
          {
            offset: '100%'
          }
        )
        .waypoint(
          function(dir) {
            if (dir === 'up') {
              const el = $(this);
              const items = el.find('article.post');
              const itemsCount = items.length;
              const delay = 300;
              let i = 1;

              var newTime = setInterval(() => {
                if (el.hasClass('isotope')) {
                  clearInterval(newTime);
                } else {
                  return false;
                }

                items.each(function() {
                  const item = $(this);

                  setTimeout(() => {
                    item.addClass('shortcode_animated');
                  }, delay * i);

                  i += 1;

                  if (i === itemsCount) {
                    setTimeout(() => {
                      $(window).trigger('resize');
                    }, delay * i);
                  }
                });
              }, 300);
            }
          },
          {
            offset: '25%'
          }
        );
    } else {
      $('.blog.columns, .blog.timeline')
        .find('article.post')
        .addClass('shortcode_animated');
    }
  })(jQuery);

  /* Stats Run */
  (function($) {
    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android &&
      !checker.ua.ie9
    ) {
      $('.cmsms_stats.stats_mode_counters.stats_type_circles').waypoint(
        function() {
          let i = 1;

          $(this)
            .find('.cmsms_stat')
            .each(function() {
              const el = $(this);

              setTimeout(() => {
                el.easyPieChart({
                  size: 180,
                  lineWidth: 16,
                  lineCap: 'square',
                  animate: 1000,
                  scaleColor: false,
                  trackColor: false,
                  barColor() {
                    return $(this.el).data('bar-color') ? $(this.el).data('bar-color') : '#ebebeb';
                  },
                  onStep(from, to, val) {
                    $(this.el)
                      .find('.cmsms_stat_counter')
                      .text(~~val);
                  }
                });
              }, 500 * i);

              i += 1;
            });
        },
        {
          offset: '100%'
        }
      );
    } else {
      $('.cmsms_stats.stats_mode_counters.stats_type_circles')
        .find('.cmsms_stat')
        .easyPieChart({
          size: 180,
          lineWidth: 16,
          lineCap: 'square',
          animate: 1000,
          scaleColor: false,
          trackColor: false,
          barColor() {
            return $(this.el).data('bar-color') ? $(this.el).data('bar-color') : '#ebebeb';
          },
          onStep(from, to, val) {
            $(this.el)
              .find('.cmsms_stat_counter')
              .text(~~val);
          }
        });
    }

    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android &&
      !checker.ua.ie9
    ) {
      $('.cmsms_stats.stats_mode_counters.stats_type_numbers').waypoint(
        function() {
          let i = 1;

          $(this)
            .find('.cmsms_stat')
            .each(function() {
              const el = $(this);

              setTimeout(() => {
                el.easyPieChart({
                  size: 180,
                  lineWidth: 0,
                  lineCap: 'square',
                  animate: 1500,
                  scaleColor: false,
                  trackColor: false,
                  barColor: '#ffffff',
                  onStep(from, to, val) {
                    $(this.el)
                      .find('.cmsms_stat_counter')
                      .text(~~val);
                  }
                });
              }, 500 * i);

              i += 1;
            });
        },
        {
          offset: '100%'
        }
      );
    } else {
      $('.cmsms_stats.stats_mode_counters.stats_type_numbers')
        .find('.cmsms_stat')
        .easyPieChart({
          size: 180,
          lineWidth: 0,
          lineCap: 'square',
          animate: 1500,
          scaleColor: false,
          trackColor: false,
          barColor: '#ffffff',
          onStep(from, to, val) {
            $(this.el)
              .find('.cmsms_stat_counter')
              .text(~~val);
          }
        });
    }

    if (
      !checker.os.iphone &&
      !checker.os.ipod &&
      !checker.os.ipad &&
      !checker.os.blackberry &&
      !checker.os.android &&
      !checker.ua.ie9
    ) {
      $('.cmsms_stats.stats_mode_bars').waypoint(
        function() {
          $(this)
            .addClass('shortcode_animated')
            .find('.cmsms_stat')
            .each(function() {
              const el = $(this);

              el.easyPieChart({
                size: 180,
                lineWidth: 0,
                lineCap: 'square',
                animate: 1500,
                scaleColor: false,
                trackColor: false,
                barColor: '#ffffff',
                onStep(from, to, val) {
                  $(this.el)
                    .find('.cmsms_stat_counter')
                    .text(~~val);
                }
              });
            });
        },
        {
          offset: '100%'
        }
      );
    } else {
      $('.cmsms_stats.stats_mode_bars')
        .addClass('shortcode_animated')
        .find('.cmsms_stat')
        .easyPieChart({
          size: 180,
          lineWidth: 0,
          lineCap: 'square',
          animate: 1500,
          scaleColor: false,
          trackColor: false,
          barColor: '#ffffff',
          onStep(from, to, val) {
            $(this.el)
              .find('.cmsms_stat_counter')
              .text(~~val);
          }
        });
    }
  })(jQuery);

  /* Notise Close Button */
  (function($) {
    $('.cmsms_notice a.notice_close').on('click', function() {
      $(this)
        .parents('.cmsms_notice')
        .fadeOut(500, function() {
          $(this).remove();
        });

      return false;
    });
  })(jQuery);

  /* YouTube Iframe Fix */
  (function($) {
    const iframe = $('iframe[src*="youtube.com"]');

    iframe.each(function() {
      const current = $(this);
      let src = current.attr('src');

      if (src) {
        if (src.indexOf('?') !== -1) {
          src += '&wmode=opaque';
        } else {
          src += '?wmode=opaque';
        }

        current.attr('src', src);
      }
    });
  })(jQuery);
});

/* Correct OS & Browser Check */
const ua = navigator.userAgent;
var checker = {
  os: {
    //			iphone : 		ua.match(/iPhone/),
    //			ipod : 			ua.match(/iPod/),
    //			ipad : 			ua.match(/iPad/),
    //			blackberry : 	ua.match(/BlackBerry/),
    //			android : 		ua.match(/(Android|Linux armv6l|Linux armv7l)/),
    //			linux : 		ua.match(/Linux/),
    //			win : 			ua.match(/Windows/),
    //			mac : 			ua.match(/Macintosh/)
  },
  ua: {
    ie: ua.match(/MSIE/),
    ie6: ua.match(/MSIE 6.0/),
    ie7: ua.match(/MSIE 7.0/),
    ie8: ua.match(/MSIE 8.0/),
    ie9: ua.match(/MSIE 9.0/),
    ie10: ua.match(/MSIE 10.0/),
    ie11: ua.match(/MSIE 11.0/),
    opera: ua.match(/Opera/),
    firefox: ua.match(/Firefox/),
    chrome: ua.match(/Chrome/),
    safari: ua.match(/(Safari|BlackBerry)/)
  }
};
