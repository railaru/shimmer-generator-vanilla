export default function handleShimmers() {

  const outputTarget = document.querySelector(".shimmers");
  const cssOutputTarget = document.querySelector(".shimmer-style");
  const newShimmerBtn = document.querySelector(".preview__add-btn");
  let animationDuration = 1;
  let shade1 = 0;
  let shade2 = 20;
  let shade3 = 40;
  let shade4 = 100;
  let color1 = '#f6f7f8';
  let color2 = '#edeef1';
  let color3 = '#f6f7f8';
  let color4 = '#f6f7f8';

  const template = `
    <div 
      style='width: 400px; height: 400px;'
      class="shimmer shine">
    </div>
  `;

  newShimmerBtn.onclick = () => {
    updateDOM();
  };

  function handleRangeSliders() {
    const speedSlider = document.querySelector("#speedRangeSlider");
    speedSlider.onchange = () => {
      animationDuration = speedSlider.value / 50;
      updateDOM();
    };

    const shade1Slider = document.querySelector("#shade1RangeSlider");
    shade1Slider.onchange = () => {
      shade1 = shade1Slider.value;
      updateDOM();
    };

    const shade2Slider = document.querySelector("#shade2RangeSlider");
    shade2Slider.onchange = () => {
      shade2 = shade2Slider.value;
      updateDOM();
    };

    const shade3Slider = document.querySelector("#shade3RangeSlider");
    shade3Slider.onchange = () => {
      shade3 = shade3Slider.value;
      updateDOM();
    };

    const shade4Slider = document.querySelector("#shade4RangeSlider");
    shade4Slider.onchange = () => {
      shade4 = shade4Slider.value;
      updateDOM();
    };
  }

  function handleInputs() {

    const colorInput1 = document.querySelector("#colorInput1");
    colorInput1.onchange = () => {
      color1 = colorInput1.value;      
      updateDOM();
    };

    const colorInput2 = document.querySelector("#colorInput2");
    colorInput2.onchange = () => {
      color2 = colorInput2.value;      
      updateDOM();
    };

    const colorInput3 = document.querySelector("#colorInput3");
    colorInput3.onchange = () => {
      color3 = colorInput3.value;      
      updateDOM();
    };

    const colorInput4 = document.querySelector("#colorInput4");
    colorInput4.onchange = () => {
      color4 = colorInput4.value;      
      updateDOM();
    };
  }

  function updateDOM() {
    const shimmerStyle = `    
    .shine {
      background: #f6f7f8;
      background-image: linear-gradient(
        to right,
        ${color1} ${shade1}%,
        ${color2} ${shade2}%,
        ${color3} ${shade3}%,
        ${color4} ${shade4}%
      );
      background-repeat: no-repeat;
      background-size: 800px 400px;
      display: inline-block;
      position: relative;
  
      animation-duration: ${animationDuration}s;
      animation-fill-mode: forwards;    
      animation-iteration-count: infinite;
      animation-name: placeholderShimmer;
      animation-timing-function: linear;
    }
  
    @keyframes placeholderShimmer {
      0% {
        background-position: -468px 0;
      }
  
      100% {
        background-position: 468px 0;
      }
    }
    `;
    outputTarget.innerHTML = template;
    cssOutputTarget.innerHTML = `<style>${shimmerStyle}</style>`;
    document.querySelector("#css-panel pre").innerHTML = shimmerStyle;
  }

  updateDOM();
  handleRangeSliders();
  handleInputs();
}
