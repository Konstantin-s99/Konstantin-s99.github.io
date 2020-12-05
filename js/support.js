"use strict"

//проверка на то, что документ загружен
//далее перехват отправки формы по нажатию кнопки
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form'); //создаем переменную form и присваеваем ей все по Id = 'form'
	form.addEventListener('submit', formSend); //вешаем событие на эту переменную (при отправке формы переходим в функцию)

	async function formSend(e) {
		e.preventDefault(); //запрет стандартной отправки формы, при нажатии на кнопку "Отправить" ничего не происходит

		//---------Валидация и отправка формы---------------
		let error = formValidate(form); //переменная с результатом работы другой функции
		

		let formData = new FormData(form); //вытягивает все данные полей
		formData.append('image', formImage.files[0]); //добавляем еще и изображение ко всему прочему

		//если валидация прошла успешно, то отправляем форму
		if(error === 0) {
			form.classList.add('_sending');
			let response = await fetch('../sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok){
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			}else{
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		}else{
			alert('Заполните обязательные поля');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req'); //присваеваем все элементы с классом ._req
		
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)){
					formAddError(input);
					error++;
				}
			}else if(input.getAttribute("type") === "checkbox" && input.checked === false){
				formAddError(input);
				error++;
			}else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}

		}
		return error;
	}

	//добавление самому объекту и родительскому объекту класс error
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	//убирание у самого объекта и родительского объекта класса error
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//функция проверки email (проверка на символы)
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}


	//Добавление файла
	//Получаем инпут file в переменную
	const formImage = document.getElementById('formImage');
	//Получаем див для превью в переменную
	const formPreview = document.getElementById('formPreview');

	//Слушаем изменения в инпуте file (когда происходит выбор файла, отправляемся в функцию, в которой происходит передача файла)
	formImage.addEventListener('change', () => {
		uploadFile(formImage.files[0]);
	});

	function uploadFile(file) {
		//Проверка типа файла
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Разрешены только изображения.');
			formImage.value = '';
			return;
		}
		//Проверка размера файла (<7 Мб)
		if (file.size > 7 * 1024 * 1024) {
			alert('Файл должен быть менее 7 МБ.');
			return;
		}

		//Отображение изображения под кнопкой
		var reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Ошибка!');
		};
		reader.readAsDataURL(file);
	}
});