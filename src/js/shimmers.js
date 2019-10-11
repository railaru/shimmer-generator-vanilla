export default function handleShimmers() {

  const outputTarget = document.querySelector('.shimmers')
  const newShimmerBtn = document.querySelector('.preview__add-btn')

  const template = `
    <div class="shimmer shine"></div>
  `;

  outputTarget.innerHTML = template

  newShimmerBtn.onclick = () => {
    outputTarget.innerHTML += template
  }
}
