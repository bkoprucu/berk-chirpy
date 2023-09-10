/**
 * Reference: https://bootsnipp.com/snippets/featured/link-to-top-page
 */

export function back2top() {
  const $window = $(window);
  const $btn = $('#back-to-top');

  $window.on('scroll', () => {
    if ($window.scrollTop() > 1500) {
      $btn.fadeIn();
    } else {
      $btn.fadeOut();
    }
  });

  $btn.on('click', () => {
    $window.scrollTop(0);
  });
}
