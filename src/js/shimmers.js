export default function handleShimmers() {
  const outputTarget = document.querySelector(".shimmers");
  const cssOutputTarget = document.querySelector(".shimmer-style");
  const newShimmerBtn = document.querySelector(".preview__add-btn");

  let animationDuration = 1;
  let shade1 = 0;
  let shade2 = 20;
  let shade3 = 40;
  let shade4 = 100;
  let color1 = "#f6f7f8";
  let color2 = "#edeef1";
  let color3 = "#f6f7f8";
  let color4 = "#f6f7f8";
  let shimmerId = 0;

  let selectedShimmerId = 0;
  let selectedShimmerWidth = "300px";
  let selectedShimmerHeight = "200px";
  let selectedShimmerMarginTop = "10px";

  function newShimmer() {
    const template = `
    <div 
      shimmer-id='${shimmerId}'
      style='
        width: ${selectedShimmerWidth}; 
        height: ${selectedShimmerHeight};
        margin-top: ${selectedShimmerMarginTop};
        '
      class="shimmer shine">
    </div>
    `;
    outputTarget.innerHTML += template;
    shimmerId++;
    updateDOM();
  }

  function handleSelectedShimmerInputs() {
    const selectedShimmerWidthInput = document.querySelector(
      "#selectedShimmerWidth"
    );
    selectedShimmerWidthInput.onchange = () => {
      selectedShimmerWidth = selectedShimmerWidthInput.value + "px";
      updateSelectedShimmer();
    };

    const selectedShimmerHeightInput = document.querySelector(
      "#selectedShimmerHeight"
    );
    selectedShimmerHeightInput.onchange = () => {
      selectedShimmerHeight = selectedShimmerHeightInput.value + "px";
      updateSelectedShimmer();
    };

    const selectedShimmerMarginTopInput = document.querySelector(
      "#selectedShimmerMarginTop"
    );
    selectedShimmerMarginTopInput.onchange = () => {
      selectedShimmerMarginTop = selectedShimmerMarginTopInput.value + "px";
      updateSelectedShimmer();
    };
  }

  function updateSelectedShimmer() {
    const selectedShimmer = document.querySelector(
      `div[shimmer-id='${selectedShimmerId}']`
    );

    selectedShimmer.style.width = selectedShimmerWidth;
    selectedShimmer.style.height = selectedShimmerHeight;
    selectedShimmer.style.marginTop = selectedShimmerMarginTop;

    updateShimmers();
  }

  function updateShimmers() {
    const shimmers = document.querySelectorAll(".shimmer");

    shimmers.forEach(shimmer => {
      shimmer.addEventListener("click", () => {
        selectedShimmerId = shimmer.getAttribute("shimmer-id");
        selectedShimmerWidth = shimmer.style.width;
        selectedShimmerHeight = shimmer.style.height;
        selectedShimmerMarginTop = shimmer.style.marginTop;
        handleSelectedShimmerInputs();
      });
    });
  }

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
    cssOutputTarget.innerHTML = `<style>${shimmerStyle}</style>`;
    document.querySelector("#css-panel pre").innerHTML = shimmerStyle;
    document.querySelector("#html-panel pre").innerText = document.querySelector('.shimmers').innerHTML; 
    updateShimmers();
  }

  newShimmer();
  newShimmerBtn.addEventListener("click", () => newShimmer());
  updateDOM();
  handleRangeSliders();
  handleInputs();
}
