;(function () {
	var $accordioItems = document.querySelectorAll('.js-accordion-item'),
		accordionId    = 'accordion',
		$accordion     = document.getElementById(accordionId),
		accordionClass = 'js-accordion-item',
		openedClass    = 'opened';

	var ACCORDION = {
		init: function() {
			this.setUpListeners();
		},

		setUpListeners: function() {
			$accordion.addEventListener('click', function(e) { ACCORDION.switchItemState(e); });
		},

		switchItemState: function(e) {
			e.stopPropagation();

			var element = e.target;

			if (element.id !== accordionId && !element.classList.contains(accordionClass)) {
				var accordionItem = element.parentNode;

				if (accordionItem.classList.contains(openedClass)) {
					accordionItem.classList.remove(openedClass);

					return false;
				}

				ACCORDION.closeUpAll();
				accordionItem.classList.add(openedClass);
			}
		},

		closeUpAll: function() {
			Array.prototype.forEach.call($accordioItems, function(el, i) {
				el.classList.remove(openedClass);
			});
		}
	};

	ACCORDION.init();
})();
