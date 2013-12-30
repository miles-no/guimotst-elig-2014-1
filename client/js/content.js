$(function () {
	var titles = {
		1: 'TODO-listen',
		2: 'Mer luft og bedre skille mellom komponenter',
		3: 'Animasjoner',
		4: 'Hover-effekter',
		5: 'Ikoner og operasjoner',
		6: 'Mer fokus',
		7: 'CSS transition',
		8: 'CSS animation'
	};

	var page = 7, pageCount = Object.keys(titles).length;

	var getPage = function(){
		$.ajax({
			url: 'page' + page + '.html',
			method: 'get',
			success: function (html) {
				document.title = page + '. ' + titles[page];
				$('#main').html(html).removeClass().addClass('page-' + page);
			}
		});
	};

	$(document).on('keydown', function (e) {
		if(!e.altKey){
			return;
		}
		if(e.keyCode === 37){
			page = Math.max(0, --page);
		}else if(e.keyCode === 39){
			page = Math.min(pageCount, ++page);
		}else{
			return;
		}		
		getPage();
	});

	getPage();
});