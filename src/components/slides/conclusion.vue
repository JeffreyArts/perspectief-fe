<template>
    <div class="conclusion-container" ref="container">

        <div class="page-title-container">
            <h1 class="page-title">
                {{ pageTitle }}
            </h1>
        </div>

        <div class="box-container" v-if="step == 1">
            <div class="box __isRight" id="box-1">
                <p>
                    Je standpunt beïnvloed de wijze waarop je informatie tot je neemt. 
                    Informatie waarmee jouw beeld van de werkelijkheid wordt gevormd. 
                    Dit standpunt is dynamisch en kan zowel via externe invloeden (media) als interne invloeden (humeur) wijzigen. 
                    Wanneer een groep mensen een gedeeld standpunt hebben, dan delen zij eenzelfde waargenomen waarheid/realiteit.
                </p>
            </div>
            <div class="box __isLeft" id="box-2" @click="openBox2">
                <p>
                    Tot dusver heb ik het alleen nog maar gehad over wat perceptie is, 
                    hoe het gevormd en beïnvloed kan worden en dat het invloed heeft op je waargenomen realiteit. 
                    Maar ik heb het nog niet gehad waarom perceptie op zichzelf belangrijk is. 
                    Dat wil ik graag uitleggen middels een ander abstract concept. 
                    Het spectrum waaruit het <glitch 
                            :duration="512" 
                            :delay="2400" 
                            :repeat="99999" 
                            :opacity-duration="144" 
                            :position-jumps="6" 
                            :inputs="['goed','positief','zwart','links']"
                            :glitch-jumps="4" 
                            :glitch-offset="8" />
                            / <glitch 
                            :duration="512" 
                            :delay="2400" 
                            :repeat="99999" 
                            :opacity-duration="144" 
                            :position-jumps="8" 
                            :inputs="['slecht','negatief','wit','rechts']"
                            :glitch-jumps="8" 
                            :glitch-offset="4" />
                denkkader komt te ontstaan
                </p>
            </div>
            <div class="box __isRight" id="box-3" @click="openBox3">
                <p>
                    Dit wil ik je graag laten zien door hetzelfde onderwerp (de sociale-media bubbel) vanuit 3 verschillende standpunten te beschrijven.
                    Met daaropvolgend 3 verschillende spectra waarop het <glitch 
                            :duration="512" 
                            :delay="2400" 
                            :repeat="99999" 
                            :opacity-duration="144" 
                            :position-jumps="6" 
                            :inputs="['goed','positief','zwart','links']"
                            :glitch-jumps="4" 
                            :glitch-offset="8" />
                            / <glitch 
                            :duration="512" 
                            :delay="2400" 
                            :repeat="99999" 
                            :opacity-duration="144" 
                            :position-jumps="8" 
                            :inputs="['slecht','negatief','wit','rechts']"
                            :glitch-jumps="8" 
                            :glitch-offset="4" /> kader komt te ontstaan. 
                    Neem deze alle 3 even tot je op, daarna wil ik je uit leggen welke waarde er zit in het bepalen van deze denkkaders
                </p>
            </div>
        </div>

        <div class="bubbels-container" v-if="step == 2">
            <div class="perspective-container">
                <figure class="cuboid-container" ref="cuboid"></figure>
                <section class="text-container">
                    {{ mouseDown }}
                </section>
            </div>
            <div class="perspective-buttons-container">
                <div class="perspective-buttons">
                    <button class="perspective-button" id="button-1" @click="setPage(0)" :class="[readPages[0] ? '__isDone' : '']">
                        <icon-checkmark v-if="readPages[0]"/>
                    </button>
                    <button class="perspective-button" id="button-2" @click="setPage(1)" :class="[readPages[1] ? '__isDone' : '']">
                        <icon-checkmark v-if="readPages[1]"/>
                    </button>
                    <button class="perspective-button" id="button-3" @click="setPage(2)" :class="[readPages[2] ? '__isDone' : '']">
                        <icon-checkmark v-if="readPages[2]"/>
                    </button>
                </div>
            </div>
        </div>

            
        <div class="continue-button" @click="toSocialMediaBubbles">
            Ga verder &gt;
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import { gsap } from "gsap"
import * as THREE from "three"
import { OrbitControls } from "@/../node_modules/three/examples/jsm/controls/OrbitControls.js"
import Cuboid from "@/services/cuboid.js"
import view from "@/services/3d-view.js"
import degreesToRadians from "@/services/degrees-to-radians.js"
import { InteractionManager } from "three.interactive"

import Glitch from "@/components/glitch.vue"
import iconCheckmark from "@/components/icon-checkmark.vue"
import _ from "lodash"
const three = view.init()

export default defineComponent({
    name: "conclusionPage",
    components: {
        Glitch, iconCheckmark
    },
    data: () => {
        return {
            box2Open: false,
            box3Open: false,
            step: 2,
            page: null as null | 0 | 1 | 2 ,
            readPages: [false, false, true],
            pageTitle: "Samenvatting",
            pulseDelay: 0, // default: 4.8
            animation:true,
            interactionManager: new InteractionManager(
                three.renderer,
                three.camera,
                three.renderer.domElement
            ),
            allCuboids: [],
            clickTimeout: 0,
            mouseDown: false,
            seed: Math.floor(Math.random()*9000+1000).toString(),
            sensitivity: "abstract",
            sensitivityScales: ["abstract","non-identity","identity","open"],
            activeCuboid: null as null | THREE.Mesh,
            initialised: false,
            isLoading: true,
            cuboids: [],
            cameraPosition: three.camera.position,
            cameraPositionX: three.camera.position.x,
            cameraPositions: [],
            map: [
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1],
            ],
            transitionDuration: 2400,
            transitionType: "power2.inOut",
        }
    },
    computed: {
    },
    mounted() {

        // Temp for dev
        this.initializeThreeJS()


        gsap.set(".page-title", {
            x: " -100%",
        })
        gsap.set("#box-1", {
            x: " 100%",
        })
        gsap.set("#box-2", {
            xPercent: -100,
        })
        gsap.set("#box-3", {
            x: " 100%",
        })
        
        gsap.timeline().to(".page-title", {
            x: 0,
            duration: 1.024,
        }).to("#box-1", {
            x: 0,
            duration: 1.024,
            onComplete: () => {
                gsap.timeline().to("#box-2",{
                    x:32,
                    delay: this.pulseDelay,
                    duration: 2.4,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.fromTo("#box-2",{
                            x:32,
                            
                        }, {
                            x:16,
                            duration: 1,
                            repeat: -1,
                            yoyo: true,
                            ease: "power2.inOut",
                        })
                    }
                })
            }
        })

    },
    unmounted() {
        this.animation = false
        window.removeEventListener("resize", () => {this.updateCanvasSize})
    },
    methods: {
        openBox2() {
            if (this.box2Open) {
                return
            }

            // Stop the pulse animation
            gsap.killTweensOf("#box-2")

            // Animate box-2 sliding in from the left
            gsap.to("#box-2", {
                xPercent: 0,
                duration: 1.024,
                ease: "power2.inOut",
                onComplete: () => {
                    this.box2Open = true

                    const box3 = document.querySelector("#box-3")
                    if (_.isNull(box3) || _.isNull(box3.parentElement)) {
                        return
                    }
                    const parentWidth = box3.parentElement.clientWidth


                    gsap.to("#box-3", {
                        x: parentWidth - 32 - 64,
                        delay: this.pulseDelay,
                        ease: "power2.inOut",
                        duration: 2.4,
                        onComplete: () => {
                            gsap.fromTo("#box-3",{
                                x:parentWidth - 32 - 64,
                                
                            }, {
                                x:parentWidth - 16 - 64,
                                duration: 1,
                                repeat: -1,
                                yoyo: true,
                                ease: "power2.inOut",
                            })
                        }
                    })
                }
            })

            gsap.to("#box-1", {
                scale: .96,
                blur: 4,
                backgroundColor: "#eee",
                color: "#333",
                duration: 1.024,
                ease: "power2.inOut",
            })
        },
        openBox3() {
            if (this.box3Open) {
                return
            }

            // Stop the pulse animation
            gsap.killTweensOf("#box-3")

            gsap.to("#box-3", {
                x: 0,
                duration: 1.024,
                ease: "power2.inOut",
                onComplete: () => {
                    this.box3Open = true
                    this.$el.querySelector(".continue-button").style.pointerEvents = "all"
                    gsap.to(".continue-button", {
                        blur: 0,
                        opacity: 1,
                        duration: 1.024,
                        ease: "power2.inOut",
                    })
                }
            })

            gsap.to("#box-2", {
                scale: .96,
                blur: 4,
                backgroundColor: "#eee",
                color: "#333",
                duration: 1.024,
                ease: "power2.inOut",
            })
            gsap.to("#box-1", {
                scale: .92,
                blur: 8,
                backgroundColor: "#ccc",
                color: "#666",
                duration: 1.024,
                ease: "power2.inOut",
            })
        },
        toSocialMediaBubbles() {

            gsap.to(".continue-button", {
                blur: 24,
                opacity: 0,
                duration: 1.024,
                ease: "power2.inOut",
                onComplete: () => {
                    delete this.$el.querySelector(".continue-button").style.pointerEvents
                    this.changePageTitle()
                }
            })
            
            gsap.to("#box-1", {
                x: " 100%",
                scale: .9,
                blur: 16,
                backgroundColor: "#aaa",
                color: "#999",
                duration: 1.024,
                ease: "power2.inOut",
            })

            gsap.to("#box-2", {
                xPercent: -100,
                scale: .9,
                blur: 16,
                backgroundColor: "#aaa",
                color: "#999",
                duration: 1.6,
                ease: "power2.inOut",
            })
            gsap.to("#box-3", {
                x: " 100%",
                scale: .9,
                blur: 16,
                backgroundColor: "#aaa",
                color: "#999",
                duration: 2.4,
                ease: "power2.inOut",
            })


        },
        changePageTitle() {
            const oldText = this.pageTitle.toString()
            const newText = "Sociale media bubbels"
            const options = {
                duration: 2.4,
                delay: .8,
                update: (text: string) => {
                    this.pageTitle = text
                },
            }

            
            setTimeout(() => {
                const duration = options.duration/(oldText.length + newText.length) * oldText.length
                const staggerDuration = duration / oldText.length
                let currentText = oldText
                let index = oldText.length

                const tl = gsap.timeline({ 
                    duration: duration,
                })
                console.time()
                for (let i = 0; i < oldText.length; i++) {
                    tl.add(
                        gsap.to({}, {
                            duration: 0.01,
                            onStart: function() {
                                index--
                                currentText = oldText.slice(0, index)
                                currentText += "▮"
                                options.update(currentText)
                            },
                        }),
                        i * staggerDuration // stagger delay
                    )
                }
            })

            setTimeout(() => {
                this.pageTitle = ""
                this.step = 2
                this.$el.querySelector(".page-title").style.textAlign = "center"
                
                setTimeout(() => {
                    this.initializeCuboid()
                })

                const duration = options.duration/(oldText.length + newText.length) * newText.length
                const staggerDuration = duration / newText.length
                let currentText = ""
                let index = 0
                
                const tl = gsap.timeline({ 
                    duration: duration,
                    delay: options.delay,
                    onComplete: () => {
                        // Remove last character from the title
                        this.pageTitle = this.pageTitle.slice(0, -1)
                    }
                })
                
                for (let i = 0; i <= newText.length; i++) {
                    tl.add(
                        gsap.to({}, {
                            duration: 0.01,
                            onStart: function () {
                                currentText = newText.slice(0, index)
                                currentText += "_"
                                index++
                                
                                options.update(currentText)
                            },
                        }),
                        i * staggerDuration // stagger delay
                    )
                }
            }, options.duration/(oldText.length + newText.length) * oldText.length * 1000 )         
        }, 
        setPage(index: 0 | 1 | 2) {
            // console.log("setPage", index)
            this.page = index
            if (index === 0) {
                this.moveToPoint( {x:225,y:225,z:0}, {x:0,y:2.5,z:0})
            } else if (index === 1) {
                this.moveToPoint( {x:0,y:90,z:270}, {x:0,y:2.5,z:0})
            } else if (index === 2) {
                this.moveToPoint( {x:220,y:0,z:220}, {x:0,y:2.5,z:0})
            }
        },
        initializeThreeJS() {

            // Rendering scene
            var that = this
            function animate(index) {
                if (!that.animation) {
                    return
                }
                // console.log(`{x:${three.camera.position.x},y:${three.camera.position.y},z:${three.camera.position.z}}`)
                three.renderer.render(three.scene, three.camera)

                requestAnimationFrame(animate)
            }


            // Enable animation loop
            this.animation = true
            animate()


                
            document.body.onmousedown = (evt)  =>{ 
                this.mouseDown = true
            }
            document.body.onmouseup = (evt) => {
                this.mouseDown = false
            }
                

            // Add scene to dom
            const cuboidElement = this.$refs["cuboid"] as HTMLElement
            if (_.isNull(cuboidElement)) {
                console.error("ThreeJS Canvas not found")
                return
            }
            cuboidElement.append(three.renderer.domElement)
            
            // Replace perspective camera with orthographic camera
            three.camera = new THREE.OrthographicCamera( -1, 1, -1, 1, 0, 1000 )
            three.camera.updateProjectionMatrix()
            three.camera.position.set( 8, 16, 8)
            
            three.scene.add(three.camera)
            
            three.camera.zoom = cuboidElement.offsetWidth/6
            three.camera.updateProjectionMatrix()


            // Set orbit controls
            three.controls = new OrbitControls( three.camera, three.renderer.domElement )
            this.updateMap(three.scene.initialised)

            

            // add cube
            // const geometry = new THREE.BoxGeometry( 1, 1, 1 )
            // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
            // const cube = new THREE.Mesh( geometry, material )
            // three.scene.add( cube )
            // three.controls.target.set( cube.position)
            // three.camera.lookAt(three.controls.target)
            
            

            // Code for Vite dev flow
            if (three.scene.initialised) {
                // this.mesh = _.find(three.scene.children, {type:"Mesh"})
                // this.isLoading = false
                return
            }
            three.scene.initialised = true
        
            // Helper function for updating scene on screen resizing
            window.addEventListener("resize", this.updateCanvasSize)
            window.dispatchEvent(new Event("resize"))
        },
        updateCanvasSize() {
            const cuboidElement = this.$refs["cuboid"] as HTMLElement
            if (_.isNull(cuboidElement)) {
                console.error("ThreeJS Canvas not found")
                return
            }
            const paddingLeft = parseInt(window.getComputedStyle(cuboidElement).paddingLeft)
            const paddingRight = parseInt(window.getComputedStyle(cuboidElement).paddingRight)

            // Calculate the width minus the padding
            const width = cuboidElement.offsetWidth - paddingLeft - paddingRight
            const height = width

            three.renderer.setSize( width, height)
            three.camera.bottom = -height
            three.camera.top = height
            three.camera.left = -width
            three.camera.right = width
            three.camera.zoom = cuboidElement.offsetWidth/6

            three.camera.updateProjectionMatrix()
        },
        createCuboid(id) {
            
            const cubeDimensions = {
                x:5,
                y:5,
                z:5,
            }
   
            let newCuboid = Cuboid.create(cubeDimensions, {name: `cuboid-${id}`, maxLines: 320})
            newCuboid.material.color = "#000000"
            newCuboid.material.transparent = true
            newCuboid.material.opacity = 0
            newCuboid.visible = false
            three.scene.add(newCuboid)
            // this.cuboidLines = Cuboid.generateCuboidLines(cubeDimensions, this.sensitivity, this.seed + id)

            _.each(newCuboid.children, lineObject => {
                this.interactionManager.add(lineObject)
                lineObject.addEventListener("mousedown", (event) => {
                    clearTimeout(this.clickTimeout)
                    event.stopPropagation()

                    var cuboid = event.target.parent
                    if (!cuboid.visible) {
                        return
                    }

                    if (!this.activeCuboid || cuboid.name != this.activeCuboid.name) {
                        this.moveToCuboid(cuboid)
                    } else {
                        this.moveToSide(event.target.data.side)
                    }
                })
            })
            
            three.controls.target.set((cubeDimensions.width-1)/2, (cubeDimensions.height-1)/2, (cubeDimensions.depth-1)/2)
            three.camera.lookAt(three.controls.target)
            return newCuboid
        },
        updateMap(firstLoad) {
            this.seed = Math.floor(Math.random() * 9000 + 1000).toString()
            let faceDimensions = {
                x: this.sensitivity == "open" ? 7 : 5,
                y: this.sensitivity == "open" ? 7 : 5,
                z: this.sensitivity == "open" ? 7 : 5,
            }
            const offset = faceDimensions.x/2
            let totalCuboids = 0
            let update = false

            // Loop through the map and create or update cuboids
            for (let x = 0; x < this.map.length; x++) {
                for (let z = 0; z < this.map[x].length; z++) {
                    if (this.map[x][z] == 1) {
                        let currentCuboid = this.allCuboids[totalCuboids]

                        if (currentCuboid) {
                            currentCuboid.cuboidLines = Cuboid.generateCuboidLines(faceDimensions, this.sensitivity, this.seed + totalCuboids)
                            update = true
                        } else {
                            currentCuboid = this.createCuboid(`${x}-${z}`, this.sensitivity)
                            currentCuboid.position.set(x * offset, 0, z * offset)
                            currentCuboid.cuboidLines = Cuboid.generateCuboidLines(faceDimensions, this.sensitivity, this.seed + totalCuboids)

                            this.allCuboids.push(currentCuboid)
                        }
                        currentCuboid.position.set(0,0.5,0)
                        totalCuboids++
                    }
                }
            }


            let centerIndex = Math.floor((this.allCuboids.length - 1) / 2)
            let centerCuboid = firstLoad ? Cuboid.get(`cuboid-${Math.floor(this.map.length / 2)}-${Math.floor(this.map[0].length / 2)}`, three.scene) : this.allCuboids[centerIndex]

            console.log(update, centerCuboid.position)
            if (!update) {
                three.camera.position.set(centerCuboid.position.x + 32, 64, centerCuboid.position.z + 32)
            }

            Cuboid.update(centerCuboid, {
                delay: 0,
                cuboidLines: centerCuboid.cuboidLines,
                transition: "power4.out",
                duration: 2.4,
            })

            this.moveToCuboid(centerCuboid).then(() => {
                this.initialised = true
            })
        }, 
        moveToPoint(cameraPosition, centerPoint) {
            return new Promise((resolve) => {
                this.clickTimeout = setTimeout(() => {
                    if (!this.mouseDown) {
                        const cameraTween = gsap.to(three.camera.position, {
                            duration: this.transitionDuration / 1000,
                            x: cameraPosition.x,
                            y: cameraPosition.y,
                            z: cameraPosition.z,
                            ease: "back.out(1.7)",
                            onUpdate: () => {
                                three.camera.lookAt(centerPoint.x, centerPoint.y, centerPoint.z)
                                if (this.mouseDown) {
                                    cameraTween.kill()
                                }
                            },
                        })
                        
                        // gsap.to(three.controls.target, {
                        //     duration: this.transitionDuration / 1000,
                        //     x: centerPoint.x,
                        //     y: centerPoint.y,
                        //     z: centerPoint.z,
                        //     ease: "bounce.out",
                        //     onComplete: () => {
                        //         three.controls.update()
                        //         resolve()
                        //     },
                        // })
                    }
                }, 160)
            })
        },
        moveToSide(side : "bottom" | "top" | "front" | "back" | "left" | "right") {
            if (side == "bottom" || side == "top") {
                return
            }
            let cameraPoint = this.activeCuboid.position.clone()
            cameraPoint.y = 2.5

            let centerPoint = this.activeCuboid.position.clone()
            if (this.sensitivity == "open") {
                centerPoint.y = 3.5
            } else {   
                centerPoint.y = 2.5 
            }
            
            switch (side) {
            case "front": cameraPoint.z += 16; break
            case "back": cameraPoint.z -= 16; break
            case "left": cameraPoint.x -= 16; break
            case "right": cameraPoint.x += 16; break
            }
            
            return this.moveToPoint(cameraPoint, centerPoint)
        },
        moveToCuboid(cuboid: THREE.Mesh) {
            const center = cuboid.position.clone().setY(2.5)
            const destination = cuboid.position.clone().setY(cuboid.position.y + 130)

            let oldCuboid = null

            if (this.activeCuboid && cuboid.name != this.activeCuboid.name) {
                oldCuboid = this.activeCuboid
            }

            this.activeCuboid = cuboid

            destination.setX(
                cuboid.position.x < three.camera.position.x
                    ? destination.x + 128
                    : destination.x - 128
            )
            destination.setZ(
                cuboid.position.z < three.camera.position.z
                    ? destination.z + 128
                    : destination.z - 128
            )

            cuboid.visible = true
            gsap.to(cuboid.material, {
                duration: 0.8,
                opacity: 1,
                ease: "power4.out",
            })
            
            if (oldCuboid) {
                gsap.to(oldCuboid.material, {
                    duration: this.transitionDuration / 1000,
                    opacity: 0,
                    ease: "back.out(1.7)",
                    onComplete: () => {
                        cuboid.visible = false
                    },
                })
            }

            return this.moveToPoint(destination, center)
        }

    }
})


</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.conclusion-container {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    &.__allowScroll {
        overflow: auto;
        overflow-x: hidden;
    }


    .page-title {
        font-weight: 800;
        font-size: 32px;
        margin-top: 32px;
        display: inline-block;
        width: 100%;
        text-align: right;
        padding: 0 32px;
    }
    .box-container {
        position: relative;
        margin-top: 32px;
        height: calc(100vh - 128px);
    }

    .box {
        font-size: 14px;
        line-height: 24px;
        background-color: #fff;
        border:1px solid $black;
        padding: 16px 24px 16px 32px;
        width: calc(100% - 64px);
        position: absolute;
        z-index: 1;
        aspect-ratio: 16/9;
        display: flex;
        align-items: center;

        &.__isRight {
            margin-left: 64px;
        }
    }

    #box-2 {
        top: 16%;
    }
    #box-3 {
        top: 32%;
    }

    .continue-button {
        position: absolute;
        bottom: 16px;
        right: 32px;
        font-size: 20px;
        cursor: pointer;
        // pointer-events: none;
    }

    .cuboid-container {
        aspect-ratio: 1/1;
        width: calc(100% - 64px);
        max-width: calc(100vh - 172px);
        margin: 0 32px;   
        padding: 48px;

        canvas {
            max-width:100%;
            aspect-ratio: 1/1;
            &:hover {
                outline: 5px solid #000;
            }
        }
    }

    .perspective-container {
        display: flex;
        flex-flow: column;
        height: calc(100vh - 216px);
        padding-bottom: 32px;
    }

    .text-container {
        background-color: #fff;
        padding: 24px 16px;
        width: calc(100% - 64px);
        margin-left: 32px;
        margin-top: 48px;
        max-height: 100%;
        overflow-x: none;
        overflow-y: auto;
    }

    .perspective-buttons-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .perspective-buttons {
        max-width: 320px;
        display: flex;
        justify-content: space-between;
        gap:32px;
    }

    .perspective-button {
        width: 48px;
        height: 48px;
        border: 2px solid #777;
        background-color: #fff;
        border-radius: 100%;
        cursor: pointer;
        transition: $transitionDefault;

        &:nth-child(2) {
            margin-top: 24px;
        }

        &.__isActive {
            border-color: $black;
            background-color: #ccc;
        }
        &.__isDone {
            border-color: $black;
            background-color: $black;
            
            svg {
                stroke: #fff;
            }
            
        }
    }
}
</style>
