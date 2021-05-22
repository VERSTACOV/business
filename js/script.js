'use strict'

//BG
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

//burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

//tabs
const tabsBtn = document.querySelectorAll('.newsmedia__btn');
const tabsItems = document.querySelectorAll('.newsmedia__item')

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener('click', function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if( ! currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('active');
			});

		tabsItems.forEach(function(item) {
			item.classList.remove('active');
		});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}

document.querySelector('.newsmedia__btn').click();