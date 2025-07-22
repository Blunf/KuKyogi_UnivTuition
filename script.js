document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const mainSlider = document.querySelector('.main-slider');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 버튼에서 active 클래스 제거
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // 클릭된 버튼에 active 클래스 추가
            this.classList.add('active');
            
            // 슬라이더 이동
            const index = this.getAttribute('data-index');
            const translateX = -index * 100;
            mainSlider.style.transform = `translateX(${translateX}vw)`;
        });
    });
});
