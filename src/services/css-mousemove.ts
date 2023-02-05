const cssMouseMove =  {
    init: (e: MouseEvent) => {
        const x = e.clientX 
        const y = e.clientY
        const body = document.querySelector("body")
        
        if (body instanceof HTMLElement) {
            body.style.setProperty("--x", x/window.innerWidth * 2 - 1 + "px")
        }
    }
}
window.addEventListener("mousemove", cssMouseMove.init)

export default cssMouseMove