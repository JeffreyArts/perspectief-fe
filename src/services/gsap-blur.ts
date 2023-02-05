import gsap from "gsap"

const blurPlugin = {
    blurProperty: gsap.utils.checkPrefix("filter"),
    blurExp: /blur\((.+)?px\)/,
    getBlurMatch: (target) => {
        return (gsap.getProperty(target, blurPlugin.blurProperty) || "").match(blurPlugin.blurExp) || []
    },
    registerGet(target) {
        return +blurPlugin.getBlurMatch(target)[1] || 0
    },
    registerInit(target, endValue) {
        const match = blurPlugin.getBlurMatch(target)[0],
            endBlur = "blur(" + endValue + "px)"

        let filter = gsap.getProperty(target, blurPlugin.blurProperty).toString(),
            index
        if (filter === "none") {
            filter = ""
        }
        if (match) {
            index = filter.indexOf(match)
            endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length)
        } else {
            endValue = filter + endBlur
            filter += filter ? " blur(0px)" : "blur(0px)"
        }
        this.target = target
        this.interp = gsap.utils.interpolate(filter, endValue)
    },
    registerRender(progress, data) {
        data.target.style[blurPlugin.blurProperty] = data.interp(progress)
    }
}

gsap.registerPlugin({
    name: "blur",
    get: blurPlugin.registerGet,
    init: blurPlugin.registerInit,
    render: blurPlugin.registerRender
})


export default blurPlugin
