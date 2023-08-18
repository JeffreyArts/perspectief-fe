<template>
    <div class="conclusion-container" ref="container">
        <div class="page-title-container">
            <div class="container">
                <h1 class="page-title">
                    {{ pageTitle }}
                </h1>
            </div>
        </div>

        <div class="box-container" v-if="step == 1">
            <div class="box" id="box-1">
                <p>
                    Je standpunt beïnvloedt welke selectie van informatie je in relatie tot een onderwerp, tot je neemt. 
                    Met deze kennis wordt vervolgens jouw beeld van de werkelijkheid gevormd. 
                    Dit standpunt is dynamisch en kan door externe invloeden als <glitch 
                            :duration="640" 
                            :delay="2000" 
                            :repeat="99999" 
                            :opacity-duration="144" 
                            :position-jumps="5" 
                            :inputs="['media','cultuur','kunst']"
                            :glitch-jumps="7" 
                            :glitch-offset="3" /> worden beïnvloed. 
                    Wanneer een groep mensen een gedeeld standpunt hebben, dan zullen zij eenzelfde waargenomen 
                    <glitch 
                            :duration="480" 
                            :delay="2400" 
                            :repeat="99999" 
                            :opacity-duration="128" 
                            :position-jumps="7" 
                            :inputs="['waarheid','realiteit']"
                            :glitch-jumps="6" 
                            :glitch-offset="5" /> delen.
                </p>
            </div>
            <div class="box __isLeft" id="box-2" @click="openBox2">
                <p>
                    Tot dusver heb ik het alleen nog maar gehad over wat perceptie is, en hoe dat invloed heeft op je waargenomen realiteit. 
                    Maar ik heb het nog niet gehad over de waarde van perceptie zelf.
                </p>
            </div>
            <div class="box" id="box-3" @click="openBox3">
                <p>
                    Dit wil ik je graag laten zien door middel van eenzelfde onderwerp te belichten vanuit steeds een ander standpunt. 
                    Neem deze 3 verschillende standpunten even tot je. 
                    Daarna wil ik hem graag met je afsluiten en je uitnodigen om jouw standpunt over de waarde van perceptie te delen.
                </p>
            </div>
        </div>

        <div class="bubbels-container" :class="[step != 2 ? '__isHidden' : '']">
            <div class="container">
                <div class="perspective-container">
                    <figure class="cuboid-container" ref="cuboid"></figure>
                    <section class="text-container" ref="textcontainer" :class="!pageSelected ? '__isHidden' : ''">
                        <div v-if="page == 0">
                            <p>
                                <strong>Standpunt: Commerciële belangen</strong><br>
                                Sociale-media bubbels ontstaan door de algoritmes welk sociale media hebben ontwikkeld om een zo breed mogelijk scala aan gebruikers, 
                                met een minstens zo'n breed scala aan interesses, zo lang mogelijk op hun platform te houden. 
                                Sociale media websites kosten ontzettend veel geld om te ontwikkelen en te onderhouden, maar zijn vaak gratis te gebruiken. 
                                Daar hebben deze platformen iets op gevonden: advertenties. 
                                Om de effectiviteit (conversie) van advertenties te verhogen hebben de platformen er baat bij om een zo groot mogelijk aantal doelgroepen te kunnen definiëren. 
                                Hoe groter het aantal doelgroepen, hoe gerichter de adverteerders namelijk kunnen adverteren. Om deze doelgroepen te kunnen creëren, 
                                moet je labels bedenken waartoe je deze doelgroepen kunt definiëren. Hoe specifieker de definitie van een doelgroep, hoe waardevoller deze wordt. 
                                Een doelgroep “mensen die van eten houden” is voor een producent van frikandellen/bitterballen/kroketten minder waardevol dan de doelgroep 
                                “mensen die graag frituren”. Dat betekend niet dat de eerste doelgroep helemaal geen waarde, de tweede doelgroep is gewoon van meer waarde. 
                                Sociale media hebben er dus baat bij om hun gebruikers in doelgroepen onder te verdelen. 
                                De algoritmes die zij op hun websites hebben draaien, dragen daarbij een fundamentele rol in de definitie ervan. 
                                Niet alleen omdat ze deze doelgroepen kunnen definiëren, maar ook actief in stand houden.
                            </p>

                            <p>
                                In dit standpunt heb ik de sociale-media bubbels beschreven vanuit een commercieel standpunt. 
                                Hierbij stel ik dat de commerciële belangen een invloed hebben op de creatie van sociale-media bubbels, 
                                omdat dit direct leidt tot omzetverhoging van het platform. 
                                Omdat de kwantiteit van bubbels leidt specifieke advertentieprofielen die waardevoller zijn dan generieke, algemenere onderwerpen.
                            </p>
                            <footer>
                                Klik op 1 van de andere knoppen om het onderwerp “sociale-media bubbel” vanuit een ander standpunt te bekijken.
                            </footer>
                        </div>

                        
                        <div v-if="page == 1">
                            <p>
                                <strong>Standpunt: Algoritmische curatie</strong><br>
                                Een sociale-media bubbel is een door algoritme-gecureerd standpunt ten behoeven van een specifiek onderwerp.
                                Dit biedt de gebruiker de mogelijkheid om het sociale media platform dit algoritme zo in te richten dat hij of zij de informatie te zien krijgt 
                                waar hij of zij in geïnteresseerd is. Wanneer de gebruiker het platform wilt gebruiken door het bekijken van schattige dieren filmpjes. 
                                Dan zal het algoritme meer-en-meer video's aanraden van otters die elkaars handen vasthouden, of hupsende, fluffy konijntjes. 
                                Wilt de gebruiker zichzelf liever educeren op wetenschappelijke thema's, dan zal het video's laten zien van Fritz Haber of fluorescerende schorpioenen. 
                                De social-media bubbel heeft echter wel een keerzijde. Het heeft geen moreel kompas. Met hetzelfde gemak als dat het eerder genoemde bubbels creëert, 
                                creëert het met hetzelfde gemak bubbels met video's van kleine meisjes die turnen, 
                                video's met tips om af te vallen of video's met informatie over hoe je gemakkelijk geld kunt verdienen. 
                                Op zichzelf niet problematisch. Het is immers geen enkel probleem wanneer de gebruiker een klein meisje is, 
                                kampt met overgewicht of geïnteresseerd is in financiën. Het wordt echter wel een probleem wanneer de gebruiker een man van boven de 40 is, 
                                iemand die onzeker is over zijn of haar uiterlijk, of zeer slecht risico's kan inschatten.
                            </p>

                            <p>
                                Nu zou je het standpunt kunnen innemen dat het platform niet het probleem is, maar de persoon die het algoritme heeft ingericht. 
                                En dat is precies waar dit standpunt over gaat. 
                                Vanuit dit standpunt heb ik het spectrum gecreëerd waarin sociale media bubbels goed of slecht zijn te definiëren aan 
                                de hand van de invloed de ze hebben op de gebruiker.
                            </p>
                            <footer>
                                Klik op 1 van de andere knoppen om het onderwerp “sociale-media bubbel” vanuit een ander standpunt te bekijken.
                            </footer>
                        </div>



                        <div v-if="page == 2">
                            <p>
                                <strong>Standpunt: Verdieping</strong><br>
                                Sociale-media bubbels zorgen voor een diversiteit aan standpunten waarop je de wereld kunt waarnemen.
                                Dit leidt tot een breed scala aan verschillende waargenomen realiteiten. 
                                Neem als voorbeeld bijvoorbeeld de bubbel omtrent de flat-earth theorie. 
                                Binnen deze bubbel wordt er informatie uitgewisseld met argumenten over waarom de aarde niet bolvorming, maar plat is. 
                                De mensen die deel uitmaken van deze bubbel zijn per definitie mensen die op enige wijze interesse hebben in dit onderwerp. 
                                Ongeacht of zij er voor open staan om hun eigen waargenomen realiteit daadwerkelijk in twijfel te trekken of niet, 
                                zonder interesse in het onderwerp zullen zij geen deel uitmaken van deze bubbel. 
                                Dat gezegd hebbende, de groep mensen die geloven dat de aarde plat is binnen deze bubbel, 
                                zal disproportioneel groter zijn dan de groep mensen die dat niet geloven. 
                                Hierdoor ontstaat de situatie waarin de klassieke manier van waarheidsbepaling (dat wat de meerderheid van de groep voor waar aanneemt) 
                                voor een ander resultaat zal zorgen binnen deze bubbel dan daarbuiten. Nu is de flat-earth theorie relatief gemakkelijk te weerleggen, 
                                we hebben immers eeuwen aan wetenschappelijke kennis opgedaan als mensheid waarmee we goed kunnen onderbouwen waarom de aarde niet plat is. 
                                Wanneer het onderwerp nieuw is echter, en er nog geen eeuwen aan wetenschappelijk onderzoek aan vooraf is gegaan. 
                                Dan is er veel minder ruimte voor een absolute waarheid. De dynamiek binnen zo'n bubbel blijft echter hetzelfde. 
                                Zo vindt er in politiek georiënteerde bubbels zelden een tegen geluid van iemand die tot de politieke “tegenpartij” hoort. 
                                Maar deze eigenschap van van sociale-media bubbels is niet alleen maar negatief. 
                                Door het ontstaan van deze bubbels ontstaat er ook de mogelijkheid om een verdieping te zoeken (en vinden) 
                                in standpunten die op geen enkele andere wijze mogelijk zouden zijn, omdat dit simpelweg teveel zou afwijken van de algemene perceptie. 
                                Kennisontwikkeling ontstaat door het laag voor laag opbouwen van informatie, 
                                wanneer deze lagen voor iedereen hetzelfde zou zijn dan heeft niemand een afwijkend standpunt meer, en zal de snelheid van informatie groei stagneren.
                            </p>

                            <p>
                                In dit standpunt tracht ik duidelijk te maken dat de sociale-media bubbels de mogelijkheid bieden om een verdieping te realiseren, 
                                welk via de traditionele massa media niet mogelijk is. 
                                Vanuit dit standpunt heb ik het spectrum gecreëerd waarin sociale media bubbels goed of slecht zijn te definiëren aan de hand van de intenties van de gebruiker.
                            </p>
                            <footer>
                                Klik op 1 van de andere knoppen om het onderwerp “sociale-media bubbel” vanuit een ander standpunt te bekijken.
                            </footer>
                        </div>
                    </section>
                </div>
                <div class="perspective-buttons-container">
                    <div class="perspective-buttons">
                        <button class="perspective-button" id="button-1" @click="setPage(0)" :class="[readPages[0] ? '__isDone' : '', page == 0 ? '__isActive' : '']">
                            <icon-checkmark v-if="readPages[0]"/>
                        </button>
                        <button class="perspective-button" id="button-2" @click="setPage(1)" :class="[readPages[1] ? '__isDone' : '', page == 1 ? '__isActive' : '']">
                            <icon-checkmark v-if="readPages[1]"/>
                        </button>
                        <button class="perspective-button" id="button-3" @click="setPage(2)" :class="[readPages[2] ? '__isDone' : '', page == 2 ? '__isActive' : '']">
                            <icon-checkmark v-if="readPages[2]"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="welcome-back-container" :class="[step != 3 ? '__isHidden' : '']">
            <div class="container">
                <div class="welcome-back-box">
                    <h1>Welkom terug</h1>
                    <p>
                        Ik hoop dat ik je met dit verhaal heb kunnen meenemen in mijn persoonlijke standpunt over perceptie en de wijze waarop ik mijn waargenomen realiteit cureer. 
                        Niet alleen door je te vertellen over hoe ik naar de vorming van kennis kijk, 
                        maar ook door je te laten zien hoe perceptie je opinie kan beïnvloeden 
                        en daarmee het spectrum bepaalt waarbinnen je, jezelf als voor- of tegenstander kunt plaatsen tegenover een bepaald onderwerp.
                        Misschien vond je mijn hele verhaal een huis met uitsluitend open deuren, 
                        maar hopelijk heeft het je een nieuwe blik gegeven op de manier waarop jij jouw eigen realiteit kunt vormgeven. 
                    </p>
                    <p>
                        Ik ben in ieder geval blij om te zien dat je dit alles je voldoende geboeid heeft om tot dit einde te komen
                        en ben benieuwd naar jouw perspectief op dit onderwerp.
                    </p>
                    <p class="welcome-back-greetings">
                        <glitch 
                            :duration="720" 
                            :delay="3200" 
                            :repeat="99999" 
                            :opacity-duration="128" 
                            :position-jumps="7" 
                            :inputs="greetings"
                            :glitch-jumps="6" 
                            :glitch-offset="8" />
                            <span class="welcome-back-writing">
                                <img src="/images/jeffrey-arts-signature.png" alt="Jeffrey Arts">
                            </span>
                    </p>


                    <div class="button-container">
                        <a class="button small" href="mailto:contact@jeffreyarts.nl?subject=Mijn%20perspectief">Deel jouw perspectief</a>
                    </div>
                </div>
            </div>
        </div>


        <div class="continue-button" @click="nextStep">
            Ga verder &gt;
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue"
import { gsap } from "gsap"
import { Vector3 } from "three"
import * as THREE from "three"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import Cuboid from "@/services/cuboid.js"
import view from "@/services/3d-view.js"
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
            stepTransition: false,
            step: 1,
            greetings: ["Veel liefs,"," Muchos gracias,", "Thank you for your time,", "Merci beaucoup,"," Bedankt & tot ziens,", "Dikke kus,"],
            page: null as 0 | 1 | 2 | null,
            readPages: [false, false, false],
            pageTitle: "Samenvatting",
            pulseDelay: 0, // default: 4.8
            animation:true,
            interactionManager: new InteractionManager(
                three.renderer,
                three.camera,
                three.renderer.domElement
            ),
            allCuboids: [] as Array<any>,
            clickTimeout: 0,
            ignoreScroll: false,
            mouseDown: false,
            seed: Math.floor(Math.random()*9000+1000).toString(),
            sensitivity: "abstract" as "abstract" | "non-identity" | "identity" | "open",
            sensitivityScales: ["abstract","non-identity","identity","open"],
            activeCuboid: null as null | THREE.Mesh,
            initialised: false,
            isLoading: true,
            cuboids: [],
            cameraPosition: three.camera.position,
            cameraPositionX: three.camera.position.x,
            cameraPositions: [],
            map: [
                [1],
            ],
        }
    },
    computed: {
        pageSelected() {
            return !_.isNull(this.page)
        },
    },
    mounted() {
        gsap.registerPlugin(ScrollToPlugin)
        this.greetings = _.shuffle(this.greetings)

        // Only initialize after animation of first block has finished
        setTimeout(() => {
            this.initializeThreeJS()
        }, 2400)

        const box1 = document.getElementById("box-1")
        const box3 = document.getElementById("box-3")

        if (!box1 || !box3) {
            return
        }

        gsap.set(".page-title", {
            x: " -100%",
        })
        gsap.set("#box-1", {
            x: document.body.clientWidth + box1.clientWidth,
        })
        gsap.set("#box-2", {
            xPercent: -100,
        })
        gsap.set("#box-3", {
            x: document.body.clientWidth + box3.clientWidth,
        })

        gsap.set(".continue-button", {
            blur: 24,
            opacity: 0,
        })
        let offset = 32
        if (document.body.clientWidth > 768) {
            offset = 48
        }
        if (document.body.clientWidth > 1024) {
            offset = 64
        }

        gsap.timeline().to(".page-title", {
            x: 0,
            duration: 1.024,
        }).to("#box-1", {
            x:  document.body.clientWidth / 2 - box1.clientWidth / 2,
            duration: 1.024,
            onComplete: () => {
                gsap.timeline().to("#box-2",{
                    x:offset,
                    delay: this.pulseDelay,
                    duration: 2.4,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.fromTo("#box-2",{
                            x:offset,
                        }, {
                            // onRepeat: () => {
                            // },
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
            const box2 = document.querySelector("#box-2")
            if (!box2) {
                return
            }

            // Animate box-2 sliding in from the left

            gsap.to("#box-2", {
                xPercent: 0,
                x: document.body.clientWidth / 2 - box2.clientWidth / 2 - this.getMargin(),
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
                        x: parentWidth - 32,
                        delay: this.pulseDelay,
                        ease: "power2.inOut",
                        duration: 2.4,
                        onComplete: () => {
                            gsap.fromTo("#box-3",{
                                x:parentWidth - 32,
                                
                            }, {
                                x:parentWidth - 16 ,
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
            const box3 = document.querySelector("#box-3")
           
            if (!box3) {
                return
            }

            gsap.to("#box-3", {
                x: document.body.clientWidth / 2 - box3.clientWidth / 2 + this.getMargin(),
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
        nextStep() {
            if (this.stepTransition) {
                return
            }  

            this.stepTransition = true
            if (this.step == 1) {
                this.toSocialMediaBubbles()
            } else if (this.step == 2) {
                this.toWelcomeBack()
            }
        },
        finishPage() {
            gsap.to(".welcome-back-box", {
                y: "100vh",
                duration: 1.024,
                ease: "power2.inOut",
                onComplete: () => {
                    this.$emit("next","finish-page")
                }
            })
        },
        toWelcomeBack() {

            this.$el.querySelector(".text-container").removeEventListener("scroll", this.textContainerScroll)
            gsap.to(".continue-button", {
                blur: 24,
                opacity: 0,
                duration: 1.024,
                ease: "power2.inOut",
            })
            
            gsap.to(".text-container", {
                height:0,
                opacity: 0,
                duration: 1.28,
                ease:"power2.inOut",
                onComplete: () => {

                    gsap.to(".perspective-container", {
                        padding: 0,
                        duration: 0.8,
                        ease:"power2.inOut",
                    })
                    gsap.to(".text-container", {
                        width: 0,
                        duration: 0.8,
                        ease:"power2.inOut",
                    })
                    gsap.to(".cuboid-container", {
                        width: document.body.clientWidth,
                        margin: 0,
                        padding: 0,
                        duration: 0.8,
                        ease:"power2.inOut",
                    })

                }
            })

            gsap.to(".text-container", {
                scrollTo: 0,
                duration: 1.024,
                ease: "bounce.out",
                onComplete: () => {
                    this.ignoreScroll = false
                }
            })
            
            gsap.to(".perspective-button", {
                opacity: 0,
                y: 32,
                duration: .64,
                stagger: -.24,
                ease:"power2.inOut",
            })

            gsap.to(".page-title", {
                opacity: 0,
                y: -256,
                height: 0,
                duration: 1.6,
                ease:"power2.inOut",
            })


            // Cuboid animation
            setTimeout(() => {
                if (!_.isNull(this.activeCuboid)) {
                    this.moveToCuboid(this.activeCuboid)
                }
            }, 1200)

            gsap.to(".cuboid-container", {
                opacity: 0,
                blur: 32,
                marginTop: 96,
                scale: 2,
                delay: 1.6,
                duration:2.4,
                ease:"power2.inOut",
                onComplete: () => {
                    this.step = 3
                    this.stepTransition = false

                    gsap.fromTo(".welcome-back-box", {
                        y: "100vh"
                    },{
                        y: "0",
                        duration: 1.024,
                        ease: "power2.inOut",
                    })
                }
            })
        },
        getMargin() {
            let margin = 16
            if (window.innerWidth > 640) {
                margin = 24
            }
            if (window.innerWidth > 800) {
                margin = 32
            }
            if (window.innerWidth > 1024) {
                margin = 48
            }
            if (window.innerWidth > 1200) {
                margin = 64
            }
            return margin
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
            

            const box1 = document.getElementById("box-1")
            const box2 = document.getElementById("box-2")
            const box3 = document.getElementById("box-3")

            if (!box1 || !box2 || !box3) {
                return
            }

            
            gsap.to("#box-1", {
                x: document.body.clientWidth + box1.clientWidth,
                scale: .9,
                opacity: 0,
                blur: 16,
                backgroundColor: "#aaa",
                color: "#999",
                duration: 1.024,
                ease: "power2.inOut",
            })
            
            gsap.to("#box-2", {
                x: 0 - box2.clientWidth,
                opacity: 0,
                scale: .9,
                blur: 16,
                backgroundColor: "#aaa",
                color: "#999",
                duration: 1.6,
                ease: "power2.inOut",
            })
            gsap.to("#box-3", {
                x: document.body.clientWidth + box3.clientWidth,
                scale: .9,
                opacity: 0,
                blur: 16,
                backgroundColor: "#aaa",
                color: "#999",
                duration: 2.4,
                ease: "power2.inOut",
            })

            setTimeout(() => {
                this.step = 2

                
                const textContainer = this.$refs["textcontainer"] as HTMLElement
                if (textContainer) {
                    textContainer.addEventListener("scroll", this.textContainerScroll)
                }

                gsap.fromTo(".cuboid-container", {
                    xPercent: -100,
                }, {
                    xPercent: 0, 
                    duration: 2.4,
                    ease: "elastic.out(1, 0.3)",
                })

                gsap.fromTo(".text-container", {
                    xPercent: -100,
                }, {
                    xPercent: 0, 
                    duration: 3.2,
                    ease: "power4.out",
                    onComplete: () => {
                        this.stepTransition = false
                    }
                })
                setTimeout(() => {
                    
                    window.dispatchEvent(new Event("resize"))
                }, 10)
            }, 2200)
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
                this.$el.querySelector(".page-title").style.textAlign = "center"
                

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
            if (_.isNull(this.page)) {
                const cuboidElement = this.$refs["cuboid"] as HTMLElement
                const perspectiveContainer = this.$el.querySelector(".perspective-container") as HTMLElement
                if (!cuboidElement || !perspectiveContainer) {
                    return
                }

                let newTextContainerHeight =  window.innerHeight - cuboidElement.clientHeight - 256
                if (window.innerWidth > 768) {
                    newTextContainerHeight =  perspectiveContainer.clientHeight
                }
                
                gsap.fromTo(".text-container", {
                    height:0,
                }, {
                    height: newTextContainerHeight,
                    duration: 1.28,
                    ease:"power2.inOut",
                })
            }         

            this.page = index
            if (index === 0) {
                this.moveToPoint( {x:225,y:225,z:0} as Vector3, {x:0,y:2.5,z:0} as Vector3)
            } else if (index === 1) {
                this.moveToPoint( {x:0,y:90,z:270} as Vector3, {x:0,y:2.5,z:0} as Vector3)
            } else if (index === 2) {
                this.moveToPoint( {x:220,y:0,z:220} as Vector3, {x:0,y:2.5,z:0} as Vector3)
            }

            this.ignoreScroll = true
            gsap.to(".text-container", {
                scrollTo: 0,
                duration: 1.024,
                ease: "bounce.out",
                onComplete: () => {
                    this.ignoreScroll = false
                }
            })
        },
        initializeThreeJS() {

            // Rendering scene
            var that = this
            function animate() {
                if (!that.animation) {
                    return
                }
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
            three.camera.position.set( 8, 16, 8)
            three.camera.updateProjectionMatrix()
            
            three.scene.add(three.camera)
            
            three.camera.updateProjectionMatrix()

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
                // console.error("ThreeJS Canvas not found")
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
            three.camera.zoom = cuboidElement.offsetWidth/3.2

            three.camera.updateProjectionMatrix()
        },
        
        createCuboid(id:string) {
            const cubeDimensions = {
                x:5,
                y:5,
                z:5,
            } as any
    
            let newCuboid = Cuboid.create(cubeDimensions, {name: `cuboid-${id}`,color: "#000000", maxLines: 320}) as any
            // newCuboid.material.color = "#000000"
            // newCuboid.material.transparent = true
            // newCuboid.material.opacity = 0
            newCuboid.visible = false
            three.scene.add(newCuboid)

            _.each(newCuboid.children, lineObject => {
                this.interactionManager.add(lineObject)
                lineObject.addEventListener("mousedown", (event: any) => {
                    clearTimeout(this.clickTimeout)
                    event.stopPropagation()
                    if (!event.target || !event.target.parent) {
                        return
                    }

                    var cuboid = event.target.parent
                    if (!cuboid.visible) {
                        return
                    }

                    if (!this.activeCuboid || cuboid.name != this.activeCuboid.name) {
                        this.moveToCuboid(cuboid)
                    }
                })
            })
            
            three.camera.lookAt((cubeDimensions.width-1)/2, (cubeDimensions.height-1)/2, (cubeDimensions.depth-1)/2)
            return newCuboid
        },
        updateMap(firstLoad:boolean) {
            this.seed = Math.floor(Math.random() * 9000 + 1000).toString()
            let faceDimensions = {
                x: this.sensitivity == "open" ? 7 : 5,
                y: this.sensitivity == "open" ? 7 : 5,
                z: this.sensitivity == "open" ? 7 : 5,
            } as any
            const offset = faceDimensions.x/2
            let totalCuboids = 0
            let update = false

            // Loop through the map and create or update cuboids
            for (let x = 0; x < this.map.length; x++) {
                for (let z = 0; z < this.map[x].length; z++) {
                    if (this.map[x][z] == 1) {
                        let currentCuboid = this.allCuboids[totalCuboids] as any

                        if (currentCuboid) {
                            currentCuboid.cuboidLines = Cuboid.generateCuboidLines(faceDimensions, this.sensitivity, this.seed + totalCuboids)
                            update = true
                        } else {
                            currentCuboid = this.createCuboid(`${x}-${z}`)
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
        moveToPoint(cameraPosition: THREE.Vector3, centerPoint: THREE.Vector3) {
            return new Promise((resolve) => {
                this.clickTimeout = setTimeout(() => {
                    if (!this.mouseDown) {
                        const cameraTween = gsap.to(three.camera.position, {
                            duration: 2.4,
                            x: cameraPosition.x,
                            y: cameraPosition.y,
                            z: cameraPosition.z,
                            ease: "power1.inOut",
                            onUpdate: () => {
                                three.camera.lookAt(centerPoint.x, centerPoint.y, centerPoint.z)
                                if (this.mouseDown) {
                                    cameraTween.kill()
                                }
                            },
                        })
                    }
                }, 0)
            })
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
            // gsap.to(cuboid.material, {
            //     duration: 0.8,
            //     opacity: 1,
            //     ease: "power4.out",
            // })
            
            // if (oldCuboid) {
            //     gsap.to(oldCuboid.material, {
            //         duration: this.transitionDuration / 1000,
            //         opacity: 0,
            //         ease: "back.out(1.7)",
            //         onComplete: () => {
            //             cuboid.visible = false
            //         },
            //     })
            // }

            return this.moveToPoint(destination, center)
        },
        textContainerScroll() {
            const textContainer = this.$refs["textcontainer"] as HTMLElement
            if (!textContainer || this.ignoreScroll || _.isNull(this.page)) {
                return
            }

            const textContainerHeight = textContainer.clientHeight
            const textContainerScrollHeight = textContainer.scrollHeight
            const textContainerScrollTop = textContainer.scrollTop + textContainerHeight
            if (textContainerScrollTop > textContainerScrollHeight - 64) {
                this.readPages[this.page] = true
                // Check if all readPage values are true
                const allRead = Object.values(this.readPages).every((value) => value)

                if (allRead) {
                    this.$el.querySelector(".continue-button").style.pointerEvents = "all"
                    // remove textContainerScroll
                    gsap.to(".continue-button", {
                        blur: 0,
                        opacity: 1,
                        duration: 1.024,
                        ease: "power2.inOut",
                    })
                }
            }
        },
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
        margin: 32px 0 0;
        display: inline-block;
        width: 100%;
        text-align: right;
        padding: 0;
        overflow: hidden;
        line-height: 1.6em;
    }
    
    .box-container {
        position: relative;
        margin: 32px 0 0;
        height: calc(100vh - 180px);
        @media (min-width: 768px) {
            margin: 64px 0 0;
            height: calc(100vh - 200px);
        }
    }

    .box {
        font-size: 14px;
        line-height: 24px;
        background-color: #fff;
        border:1px solid $black;
        padding: 16px 24px 16px 32px;
        width: calc(100% - 64px);
        max-width: 480px;
        position: absolute;
        z-index: 1;
        aspect-ratio: 16/9;
        display: flex;
        align-items: center;
    }

    #box-2 {
        top: 16%;
    }
    #box-3 {
        top: 32%;
    }

    .continue-button {
        position: absolute;
        bottom: 32px;
        right: 32px;
        font-size: 20px;
        z-index: 1990;
        opacity: 0;
        cursor: pointer;
        pointer-events: none;
    }

    .cuboid-container {
        width: calc(100% - 64px);
        max-width: calc(100vh - 172px);
        margin: 0 32px 0;
        padding: 0 48px 12px;
        display: flex;
        justify-content: center;

        canvas {
            max-width:100%;
            aspect-ratio: 1/1;
            height: auto !important;
        }
        @media (min-width: 768px) {
            width: calc(50% - 64px);
            padding: 0 0;
            margin: 0;
        }
    }

    .perspective-container { 
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 200px);
        padding-bottom: 32px;
        @media (orientation: portrait) {
            height: calc(100vh - 300px);
        }
        @media all and (min-width: 768px) {
            flex-flow: row;
            height: calc(100vh - 240px);
            padding-top: 32px;
        }
    }

    .text-container {
        background-color: #fff;
        border:1px solid $black;
        width: calc(100% - 64px);
        padding: 0;
        max-height: 100%;
        overflow-x: none;
        overflow-y: auto;
        font-size: 12px;
        line-height: 20px;
        
        &.__isHidden {
            padding: 0;
            height: 0;
            border: 0 none transparent;
            display: none;
        }
        
        > div {
            padding: 24px 16px;
        }

        p {
            margin: 0;

            + p {
                margin-top: 32px;
            }
        }

        footer {
            margin-top: 48px;
            font-size: .8em;
            color: #777;
        }

        @media all and (min-width: 480px) {
            font-size: 14px;
            line-height: 24px;
        }

        @media all and (min-width: 768px) {
            margin-right: 64px;
            margin-left: 32px;

            > div {
                padding: 24px;
            }
        }
    }

    .perspective-buttons-container {
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 1;
        position: relative;
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
        padding: 0;
        margin: 0;
        transition: $transitionDefault;

        svg {
            scale: .8;
        }

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
                translate: -1px -3px;
            }
            
        }
    }

    .bubbels-container {
        &.__isHidden {
            position: absolute;
            left: -100vw;
            top: -100vh;
        }
    }

    .welcome-back-container {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        
        .container {
            height: 100%;

            @media (min-width: 480px) {
                height: auto;
            }
        }

        &.__isHidden {
            display: none;
        }
    }

    .welcome-back-box {
        border: 1px solid $black;
        background-color: #fff;
        padding: 32px;
        line-height: 1.8em;
        max-height: calc(100% - 64px);
        overflow-y: auto;

        h1 {
            font-size: 30px;
            margin-bottom: 36px;
        }
        p {
            font-size: 14px;
            line-height: 24px;
        }
        
        .button-container {
            margin-top: 24px;
            margin-bottom: 16px;
            width: 100%;
            text-align: center;
            .small {
                font-size: 12px;
                background-color: #fff;
                color: $black;
                &:hover,
                &:focus {
                    background-color: $black;
                    color: #fff;
                }
            }
            @media all and (min-width: 720px) {
                margin-top: -64px;
            }
        }


        .button {
            text-decoration: none;
            line-height: 30px;
            height: 32px;
        }

        button {
            display: inline-block;
            min-width: 210px;
        }
    }

    .welcome-back-greetings {
        margin-top: 32px;
        text-align: center;
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        font-family: $accentFont;
        span {
            font-size: 28px;
            @media all and (min-width: 480px) {
                font-size: 32px;
            }
        }
        @media all and (min-width: 720px) {
            align-items: flex-end;
        }
        img {
            margin-top: 24px;
            width: 128px;
        }
    }
}
</style>
