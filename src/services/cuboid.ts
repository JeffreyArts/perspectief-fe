import _ from "lodash"
import * as THREE from "three"
import Line from "@/services/line"
import {PolylineAlgorithm} from "visual-pattern-generator"
import gsap from "gsap"
import { VPGSymbol, VPGConfig, VPGCord, VPGMask, CubeDimensions} from "@/../types"


/* cuboidProps = object {
    width: 5,
    depth: 5,
    height: 5,
    maxLines: 1024,
    helperCube: true,
    name: 'cuboid',
}
*/

const symbols = [
    {
        polylines: [
            [{x:0, y:0},{ x:1, y:0}]
        ],
        connectCords: [
            {x:0, y:0},
            {x:1, y:0}
        ],
        width:2,
        height:1
    },
    {
        polylines: [
            [{x:0, y:0},{ x:0, y:1}]
        ],
        connectCords: [
            {x:0, y:0},
            {x:0, y:1}
        ],
        width:1,
        height:2
    }
] as Array<VPGSymbol>

const algorithmConfig = {
    width: 5,
    height: 5,
    symbols: symbols,
    algorithm: {
        type: "polylines",
        startPoint: {x:0, y:0},
        mirrorX: 1,
        mirrorY: 1,
        drawConnectLines: true
    }
} as VPGConfig

const Cuboid  = {
    create: (cubeDimensions = {width: 0, height:0, depth:0}, cuboidProps = {maxLines: 1024, name: "cuboid", color: "#000000"}) => {
        
        if (cubeDimensions.width == 0 && cubeDimensions.height == 0 && cubeDimensions.depth == 0){
            console.error("Missing required 1st parameter 'cubeDimensions'")
            return
        }
        if (cuboidProps.maxLines <= 0 || !cuboidProps.maxLines){
            console.error("Missing required property 'maxLines' for 2nd paramater 'cuboidProps'")
            return
        }   
        
        const cuboid = new THREE.Group()
        cuboid.material = new THREE.MeshLambertMaterial({color: cuboidProps.color, wireframe: false})
        cuboid.name = cuboidProps.name
        
        const lineData = Line.getLineDataObject()
        let line = null
        
        for (let index = 0; index < cuboidProps.maxLines; index++) {
            line = Line.create(lineData, {
                width: cubeDimensions.width, 
                height: cubeDimensions.height, 
                depth: cubeDimensions.depth
            })
            line.rotation.setFromVector3( line.data.rotation )
            line.position.copy( line.data.position )
            line.scale.copy( line.data.scale )
            line.material = cuboid.material
            cuboid.add(line)
        }

        return cuboid
    },
    createHelperCube: (
        cubeDimensions:CubeDimensions, 
        helperCubeProps = {name: "helper-cube"}
    ) => {
        if (cubeDimensions.width == 0 && cubeDimensions.height == 0 && cubeDimensions.depth == 0){
            console.error("Missing required property 'cubeDimensions'")
            return
        }
        const helperCube = new THREE.Group()
        helperCube.name = helperCubeProps.name

        const sphere = new THREE.Mesh(new THREE.SphereGeometry( 0.01, 32, 16 ), new THREE.MeshBasicMaterial({color: 0xcccccc, wireframe: true}))
        
        for (let x = 0; x<cubeDimensions.width; x++) {
            for (let y = 0; y<cubeDimensions.height; y++) {

                // Back
                sphere.position.x = x
                sphere.position.y = y
                sphere.position.z = 0
                helperCube.add(sphere.clone())

                // Front
                sphere.position.x = x
                sphere.position.y = y
                sphere.position.z = cubeDimensions.depth-1
                helperCube.add(sphere.clone())
            }
        }
        
        for (let x = 0; x<cubeDimensions.depth; x++) {
            for (let y = 0; y<cubeDimensions.height; y++) {
                // Left
                sphere.position.x = 0
                sphere.position.y = y
                sphere.position.z = x
                helperCube.add(sphere.clone())

                // Right
                sphere.position.x = cubeDimensions.width-1
                sphere.position.y = y
                sphere.position.z = x
                helperCube.add(sphere.clone())
            }
        }
        
        for (let x = 0; x<cubeDimensions.width; x++) {
            for (let y = 0; y<cubeDimensions.depth; y++) {
                // Bottom
                sphere.position.x = x
                sphere.position.y = 0
                sphere.position.z = y
                helperCube.add(sphere.clone())

                // Top
                sphere.position.x = x
                sphere.position.y = cubeDimensions.height-1
                sphere.position.z = y
                helperCube.add(sphere.clone())
            }
        }
        return helperCube
    },   
    get: (nameOrId : string, scene : THREE.scene) => {
        let cuboid = _.find(scene.children, {name: nameOrId})

        if (!cuboid) {
            cuboid = _.find(scene.children, {UUID: nameOrId})
        }

        return cuboid
    },
    generateCuboidLines: (
        cubeDimensions = {width:0, height:0, depth:0},
        type:"abstract" | "non-identity" | "identity" | "open", 
        seed:string
    ) => {
        const cuboidLines = []         
        const lineData = {
            color:"#ffffff",
            thickness: 0.25,
            length: 0,
            polyline: [],
            scale: {},
            rotation: {},
            position: {}
        }
        let query
        const queryPlaceholder = {
            left: null,
            right: null,
            top: null,
            bottom: null,
            back: null,
            front: null,
        }



        if (type == "abstract") {
            cubeDimensions.width = 5
            cubeDimensions.height = 5
            cubeDimensions.depth = 5
            
            query = _.merge({}, algorithmConfig, {
                seed: seed, 
                width: cubeDimensions.width, 
                height: cubeDimensions.height,
            })
            const masks = [[
                [1,0,0,0,1],
                [0,0,0,0,0],
                [0,1,1,1,0],
                [0,0,0,0,0],
                [1,0,0,0,1],
            ], [
                [1,0,0,0,1],
                [0,0,0,0,0],
                [0,0,1,0,0],
                [0,0,0,0,0],
                [1,0,0,0,1],
            ]] as VPGMask
            _.merge(query.algorithm, {
                mirrorX: 1,
                mirrorY: 1,
                mask: masks[Math.round(Math.random())]
            })

            queryPlaceholder.left   = _.merge({},query)
            queryPlaceholder.right  = _.merge({},query)

            queryPlaceholder.top    = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})
            queryPlaceholder.bottom = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})

            queryPlaceholder.front  = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})
            queryPlaceholder.back   = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})

        } else if (type == "non-identity") {
            cubeDimensions.width = 5
            cubeDimensions.height = 5
            cubeDimensions.depth = 5
            
            query = _.merge({},algorithmConfig, {
                seed: seed, 
                width: cubeDimensions.width, 
                height: cubeDimensions.height,
            })
            _.merge(query.algorithm, {
                mirrorX: 1,
                mirrorY: 1,
                mask: null
            })

            queryPlaceholder.left   = _.merge({},query)
            queryPlaceholder.right  = _.merge({},query)

            queryPlaceholder.front  = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})
            queryPlaceholder.back   = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})

            queryPlaceholder.top    = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})
            queryPlaceholder.bottom = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})
        } else if (type == "identity") {
            cubeDimensions.width = 5
            cubeDimensions.height = 5
            cubeDimensions.depth = 5
            
            query = _.merge({},algorithmConfig, {
                seed: seed, 
                width: cubeDimensions.width, 
                height: cubeDimensions.height,
            })

            _.merge(query.algorithm, {
                mirrorX: Math.round(Math.random()) + 1,
                mirrorY: 0,
                mask: null
            })

            queryPlaceholder.left   = _.merge({},query)
            queryPlaceholder.right  = _.merge({},query)

            queryPlaceholder.front  = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})
            queryPlaceholder.back   = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})


            _.merge(query.algorithm, {
                mirrorX: 1,
                mirrorY: 1,
                mask: null
            })

            queryPlaceholder.top    = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})
            queryPlaceholder.bottom = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})
        } else if (type == "open") {
            cubeDimensions.width = 7
            cubeDimensions.height = 7
            cubeDimensions.depth = 7
            
            query = _.merge({},algorithmConfig, {
                seed: seed, 
                width: cubeDimensions.width, 
                height: cubeDimensions.height,
            })

            const masks = [[
                [1,0,0,0,0,0,1],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [1,0,0,0,0,0,1],
            ], [
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
            ], [
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,1,1,1,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
            ], [
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
            ], [
                [0,0,0,1,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [1,0,0,0,0,0,1],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,1,0,0,0],
            ]] as VPGMask

            const index = Math.round(Math.random()*(masks.length - 1))
            
            _.merge(query.algorithm, {
                mirrorX: 1,
                mirrorY: 1,
                mask: masks[index]
            })

            queryPlaceholder.left   = _.merge({},query)
            queryPlaceholder.right  = _.merge({},query)

            queryPlaceholder.front  = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})
            queryPlaceholder.back   = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})

            queryPlaceholder.top    = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})
            queryPlaceholder.bottom = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})
        } else {
            query = _.merge({},algorithmConfig, {
                seed: seed, 
                width: cubeDimensions.depth, 
                height: cubeDimensions.height,
            })
            _.merge(query.algorithm, {
                mirrorX: 1,
                mirrorY: 1,
                mask: null
            })

            queryPlaceholder.left   = _.merge({},query)
            queryPlaceholder.right  = _.merge({},query)

            queryPlaceholder.top    = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})
            queryPlaceholder.bottom = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.depth})

            queryPlaceholder.front  = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})
            queryPlaceholder.back   = _.merge({},query, { width: cubeDimensions.width,  height: cubeDimensions.height})
        }

        _.each(queryPlaceholder, (query, side) => {
            const polylines = PolylineAlgorithm(query).polylines

            // Add Side
            _.each(polylines, polyline => {
                const line = Line.update(lineData, {polyline: polyline, side: side, thickness: lineData.lineThickness}, cubeDimensions)

                line.position.x -= (cubeDimensions.width - 1 ) /2
                line.position.z -= (cubeDimensions.depth - 1 ) /2
                cuboidLines.push(line)
            })
        })
        
        // Remove duplicates
        return _.uniqBy(cuboidLines, (cl) => {
            return `${cl.position.x}, ${cl.position.y}, ${cl.position.z}, ${cl.data.length}`
        })
    },
    update: (cuboid, props = {delay: 0, cuboidLines: [], transition: null, duration: null}) => {
        if (_.isNull(props.transition)) {
            console.error("Missing required `transition` property for updateCuboid, should be a tween transition function")
            return
        }
        if (_.isNull(props.duration)) {
            console.error("Missing required `duration` property for updateCuboid, should be number in miliseconds")
            return
        }

        
        _.each(cuboid.children, (line, lineIndex:number) => {
            if (!props.cuboidLines[lineIndex]) {
                line.visible = false
                return
            }


            if (line.visible == false) {
                line.visible = true
            }
            
            // Update data property
            cuboid.children[lineIndex].data = props.cuboidLines[lineIndex].data

            setTimeout(() => {
                gsap.to(cuboid.children[lineIndex].scale, {
                    delay: lineIndex * props.delay / 1000, // Convert delay to seconds for GSAP
                    duration: props.duration / 1000, // Convert duration to seconds for GSAP
                    x: props.cuboidLines[lineIndex].scale.x,
                    y: props.cuboidLines[lineIndex].scale.y,
                    z: props.cuboidLines[lineIndex].scale.z,
                    ease: props.transition
                })
                
                gsap.to(cuboid.children[lineIndex].position, {
                    delay: lineIndex * props.delay / 1000, // Convert delay to seconds for GSAP
                    duration: props.duration / 1000, // Convert duration to seconds for GSAP
                    x: props.cuboidLines[lineIndex].position.x,
                    y: props.cuboidLines[lineIndex].position.y,
                    z: props.cuboidLines[lineIndex].position.z,
                    ease: props.transition
                })
                
                gsap.to(cuboid.children[lineIndex].rotation, {
                    delay: lineIndex * props.delay / 1000, // Convert delay to seconds for GSAP
                    duration: props.duration / 1000, // Convert duration to seconds for GSAP
                    x: props.cuboidLines[lineIndex].rotation.x,
                    y: props.cuboidLines[lineIndex].rotation.y,
                    z: props.cuboidLines[lineIndex].rotation.z,
                    ease: props.transition
                })
                
            }, lineIndex * props.delay)
        })
            
    },
    remove: (cuboid) => {
        for (let i = cuboid.children.length - 1; i >= 0; i--) {
            if(cuboid.children[i].type === "Mesh") {
                cuboid.children[i].geometry.dispose()
            }
            cuboid.remove(cuboid.children[i])
        }
        cuboid.parent.remove(cuboid)
    },
}

export default Cuboid