export default function handleShimmers() {

  const outputTarget = document.querySelector('.shimmers')
  const newShimmerBtn = document.querySelector('.preview__add-btn')
  let animationSpeed = 0;

  const template = `
    <div 
      style='width: 400px; height: 400px;'
      class="shimmer shine">
    </div>
  `;

  const shimmerStyle = `    
  .shine {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 800px 400px;
    display: inline-block;
    position: relative;

    animation-duration: ${animationSpeed}s;
    animation-fill-mode: forwards;
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
`

  newShimmerBtn.onclick = () => {
    updateDOM();
  }

  function handleRangeSliders() {
    document.querySelector('#speedRangeSlider').onchange = () => animationSpeed = speedSlider.value
  }

  function updateDOM() {
    outputTarget.innerHTML = template
  }

  handleRangeSliders();
}
