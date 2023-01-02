module.exports = function () {

  const scrollBlock = document.getElementById('custom-scrollbar');

  if (scrollBlock) {
    new SimpleBar(scrollBlock, {
      autoHide: false,
      forceVisible: false,
      classNames: {
        resizeWrapper: 'simplebar-resize-wrapper',
        content: 'simplebar-content',
        offset: 'simplebar-offset',
        mask: 'simplebar-mask',
        wrapper: 'simplebar-wrapper',
        placeholder: 'simplebar-placeholder',
        scrollbar: 'simplebar-scrollbar',
        track: 'simplebar-track',
        heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
        heightAutoObserverEl: 'simplebar-height-auto-observer',
        visible: 'simplebar-visible',
        horizontal: 'simplebar-horizontal',
        vertical: 'simplebar-vertical',
        hover: 'simplebar-hover',
        dragging: 'simplebar-dragging'
      },
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      direction: 'ltr',
      timeout: 1000
    })
  }


};