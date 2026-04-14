// Реализация подсказки по клику (п. 1.8 методички)
const btn = document.getElementById('tooltipBtn');
const tooltip = document.getElementById('tooltip');

btn.addEventListener('click', (e) => {
    // Переключаем видимость подсказки
    tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
    // Позиционируем рядом с курсором
    tooltip.style.left = e.pageX + 'px';
    tooltip.style.top = (e.pageY + 10) + 'px';
});

// Закрытие подсказки при клике в пустое место
document.addEventListener('click', (e) => {
    if (e.target !== btn && tooltip.style.display === 'block') {
        tooltip.style.display = 'none';
    }
});