const before_painting = before_paint; // index.html 에 있는 before_paint image path 를 app.js에 초기화 시켜서 사용하게 한다.
const after_painting = after_paint; // index.html 에 있는 after_paint image path 를 app.js에 초기화 시켜서 사용하게 한다.
const transition_image = transition; // index.html 에 있는 transition image path 를 app.js에 초기화 시켜서 사용하게 한다.
const images_Ratio = '1.5'; // 이미지 레이시오 잡아준다 순서는 가로 세로 이고 수치가 높을수록 가로 기준 수치가 낮을수록 세로 기준 균형에 맞춘다.

new hoverEffect({
    parent : document.querySelector('.img'),
    image1 : before_painting,
    image2 : after_painting,
    displacementImage : transition_image,
    imagesRatio : images_Ratio
});