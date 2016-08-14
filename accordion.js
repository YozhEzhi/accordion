;(function () {
  var accordionClass = 'js-accordion-item';
  var openedClass = 'opened';
  var activeTab;

  var ACCORDION = {
    init: function () {
      this.setUpListeners();
    },

    setUpListeners: function () {
      document.addEventListener('click', function (e) {
        ACCORDION.switchItemState(e);
      });
    },

    switchItemState: function (e) {
      e.stopPropagation();
      var element = e.target;

      if (element.classList.contains(accordionClass)) {
        element.classList.add(openedClass);

        if (!!activeTab) {
          activeTab.classList.remove(openedClass);
        }

        if (activeTab === element) {
          activeTab = null;

          return false;
        }

        activeTab = element;
      }
    },
  };

  ACCORDION.init();
})();
