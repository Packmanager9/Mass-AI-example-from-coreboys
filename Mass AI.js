
        AImove(object, speed) {
            if (object == this.body) {
                this.amom--
                this.dmom--
                this.dmomu--
                this.amomu--
            }
            this.wmove = 0
            this.amove = 0
            this.dmove = 0
            if (this.charge > 92) {
                this.fleeing = 0
            }
            if (Math.random() < .05) {
                this.fleeing = 0
            }
            this.safe = 0
            this.safesto = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * .05)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 0.05))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) >= this.body.y + (this.body.radius * .1)) {
                        this.safe = 1
                        if (stage.bricks[t].center.y < this.brick.center.y) {
                            this.brick = stage.bricks[t]
                        } else if (!(this.brick.edgeleft.x < (this.body.x + (this.body.radius * .05)) && this.brick.edgeright.x > (this.body.x - (this.body.radius * 0.05)))) {
                            this.brick = stage.bricks[t]
                        } else if (!(Math.max(this.brick.edgeright.y, this.brick.edgeleft.y) >= this.body.y + (this.body.radius * .1))) {
                            this.brick = stage.bricks[t]
                        }
                    }
                } else if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 4.05)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 4.05))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) >= this.body.y + (this.body.radius * .1)) {
                        this.safesto = 2
                        if (stage.bricks[t].center.y < this.brick.center.y) {
                            this.brick = stage.bricks[t]
                        } else if (!(this.brick.edgeleft.x < (this.body.x + (this.body.radius * .05)) && this.brick.edgeright.x > (this.body.x - (this.body.radius * 0.05)))) {
                            this.brick = stage.bricks[t]
                        } else if (!(Math.max(this.brick.edgeright.y, this.brick.edgeleft.y) >= this.body.y + (this.body.radius * .1))) {
                            this.brick = stage.bricks[t]
                        }
                    }
                }
            }
            if (this.safe == 0) {
                if (Math.random() < .5) {
                    if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    } else if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    }
                } else {
                    if (this.amove == 1) {
                        this.amove = 0
                        this.dmove = 1
                    } else if (this.dmove == 1) {
                        this.amove = 1
                        this.dmove = 0
                    }
                }
                this.fleeing = 0
            } 
            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t] && boys[t]) {
                    if (Math.abs(this.body.x - boys[t].body.x) > 1 && this.body.y > (boys[t].body.y + Math.max(this.body.radius, boys[t].body.radius))) {
                        this.wmove = 1
                    }
                    if (this.fleeing == 0) {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x > (boys[t].body.x + 5)) {
                            this.amove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x < (boys[t].body.x + 5)) {
                            this.dmove = 1
                        }
                    } else {
                        if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x > (boys[t].body.x + 5)) {
                            this.dmove = 1
                        } else if (Math.abs(this.body.x - boys[t].body.x) > (this.body.radius * 4) && this.body.x < (boys[t].body.x + 5)) {
                            this.amove = 1
                        }
                    }
                    if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                        if (Math.random() < .2) {
                            this.wmove = 1
                        }
                        if (Math.random() < .1) {
                            this.dmove = 1
                        }
                        if (Math.random() < .1) {
                            this.amove = 1
                        }
                    }
                }
            }
            this.safe = 0
            this.safesto = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * .05)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 0.05))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) >= this.body.y + (this.body.radius * .1)) {
                        this.safe = 1
                        if (stage.bricks[t].center.y < this.brick.center.y) {
                            this.brick = stage.bricks[t]
                        } else if (!(this.brick.edgeleft.x < (this.body.x + (this.body.radius * .05)) && this.brick.edgeright.x > (this.body.x - (this.body.radius * 0.05)))) {
                            this.brick = stage.bricks[t]
                        } else if (!(Math.max(this.brick.edgeright.y, this.brick.edgeleft.y) >= this.body.y + (this.body.radius * .1))) {
                            this.brick = stage.bricks[t]
                        }
                    }
                } else if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 4.05)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 4.05))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) >= this.body.y + (this.body.radius * .1)) {
                        this.safesto = 2

                        if (stage.bricks[t].center.y < this.brick.center.y) {
                            this.brick = stage.bricks[t]
                        } else if (!(this.brick.edgeleft.x < (this.body.x + (this.body.radius * .05)) && this.brick.edgeright.x > (this.body.x - (this.body.radius * 0.05)))) {
                            this.brick = stage.bricks[t]
                        } else if (!(Math.max(this.brick.edgeright.y, this.brick.edgeleft.y) >= this.body.y + (this.body.radius * .1))) {
                            this.brick = stage.bricks[t]
                        }
                    }
                }
            }

            this.under = 0
            this.trapped = 0
            for (let k = 0; k < boys.length; k++) {
                for (let t = 0; t < stage.bricks.length; t++) {
                    if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 1.6)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 1.6))) {
                        if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) < this.body.y) {
                            if (this.body.y > (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y))) {
                                this.trapped = 4
                            }
                        }
                    }
                }
                if (boys[k] && this != boys[k]) {
                    for (let t = 0; t < stage.bricks.length; t++) {
                        if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 1.6)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 1.6))) {
                            if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) < this.body.y) {
                                if (boys[k].brick == stage.bricks[t]) {
                                    this.under = 1
                                    this.bricksto = stage.bricks[t]
                                    if (Math.abs(Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) - this.body.y) < 300) {
                                        this.under = 4
                                        this.bricksto = stage.bricks[t]
                                        if (this.brick.edgeleft.x < stage.bricks[t].edgeleft.x && this.brick.edgeright.x < stage.bricks[t].edgeright.x) {
                                            if ((boys[k].body.y - (boys[k].body.radius * .9)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                                this.under = 2
                                                this.bricksto = stage.bricks[t]
                                                break
                                            } else {
                                                if (Math.random() < .01) {
                                                    this.under = 2
                                                    this.bricksto = stage.bricks[t]
                                                    break
                                                }
                                            }
                                        } else {
                                            if (Math.random() < .01) {
                                                this.under = 2
                                                this.bricksto = stage.bricks[t]
                                                break
                                            }
                                        }
                                        if (this.brick.edgeright.x > stage.bricks[t].edgeright.x && this.brick.edgeleft.x > stage.bricks[t].edgeleft.x) {
                                            if ((boys[k].body.y - (boys[k].body.radius * .9)) < Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y)) {
                                                this.under = 3
                                                this.bricksto = stage.bricks[t]
                                                break
                                            } else {
                                                if (Math.random() < .01) {
                                                    this.under = 3
                                                    this.bricksto = stage.bricks[t]
                                                    break
                                                }
                                            }
                                        } else {
                                            if (Math.random() < .01) {
                                                this.under = 3
                                                this.bricksto = stage.bricks[t]
                                                break
                                            }
                                        }
                                    }
                                }
                                this.bricksto = stage.bricks[t]
                                break
                            }
                        }
                    }
                }
            }
            if (this.under !== 0 && this.under !== 4 && (this.amom <= 0 && this.dmom <= 0)) {
                if (this.under == 3) {
                    this.amove = 0
                    this.dmom = (Math.abs(Math.abs(this.bricksto.center.x - this.body.x) - this.bricksto.width) / this.speed) * 1.03
                    this.amom = 0
                    this.dmove = 1
                    this.screwshot = 1
                    this.wmove = 1
                }
                if (this.under == 2) {
                    this.amove = 1
                    this.amom = (Math.abs(Math.abs(this.bricksto.center.x - this.body.x) - this.bricksto.width) / this.speed) * 1.03
                    this.dmom = 0
                    this.dmove = 0
                    this.wmove = 1
                    this.screwshot = 1
                }
            }
            this.exgrip = 0
            if (this.under == 0) {
                for (let t = 0; t < boys.length; t++) {
                    if (this.amomu <= 0 && this.dmomu <= 0) {
                        if (this != boys[t] && boys[t]) {
                            if (boys[t].brick.center.y > this.brick.center.y) {
                                if (boys[t].body.x < this.body.x) {
                                    this.amomu = (Math.abs(this.brick.edgeleft.x - this.body.x)) / this.speed
                                    this.amomu += 15
                                    this.exgrip = 1
                                } else {
                                    this.dmomu = (Math.abs(this.brick.edgeright.x - this.body.x)) / this.speed
                                    this.dmomu += 15
                                    this.exgrip = 1
                                }
                            }
                        }
                    } else {
                        this.exgrip = 1
                    }
                }
            }
            if (this.dmom > 0) {
                this.screwshot = 1
                this.dmove = 1
                this.wmove = 1
                this.amove = 0
                this.amom = 0
            } else {
                if (this.dmomu > 0) {
                    this.dmove = 1
                    this.amove = 0
                    this.screwshot = 0
                    if (Math.random() < .95) {
                        this.wmove = 0
                    }
                }
            }
            if (this.amom > 0) {
                this.screwshot = 1
                this.dmom = 0
                this.amove = 1
                this.wmove = 1
                this.dmove = 0
            } else {
                if (this.amomu > 0) {
                    this.amove = 1
                    this.dmove = 0
                    this.screwshot = 0
                    if (Math.random() < .95) {
                        this.wmove = 0
                    }
                }
            }
            if (this.safe == 0) {
                this.screwshot = 1
                if (this.body.x > (this.brick.center.x)) {
                    this.amove = 1
                    this.dmove = 0
                    this.wmove = 1
                } else {
                    this.amove = 0
                    this.dmove = 1
                    this.wmove = 1
                }
                this.fleeing = 0
            } 
            if (this.trapped == 0 && ((this.dmomu <= 0) && (this.amomu <= 0)) && ((this.dmom <= 0) && (this.amom <= 0))) {
                this.tarmax = 0
                for (let t = 0; t < boys.length; t++) {
                    if (this != boys[t] && boys[t]) {
                        if (boys[t].damage >= this.tarmax) {
                            if (boys[t].safe == 1 || boys[t].safesto == 2) {
                                this.target = boys[t]
                                let cancel = 0
                                if (typeof this.target.body.x == "number") {
                                    if (this.brick.edgeright.x > this.target.brick.edgeleft.x) {
                                        cancel = -1
                                    }
                                    if (this.brick.edgeleft.x < this.target.brick.edgeright.x) {
                                        cancel = 1
                                    }
                                }
                                this.tarmax = boys[t].damage
                                if (Math.random() < .1) {
                                    this.bricksto = this.brick
                                    this.brick = this.target.brick
                                    if (this.target.body.x > this.body.x) {
                                        const xdisR = Math.abs(this.brick.edgeright.x - (this.body.x - (this.body.radius * 1.1)))
                                        const runtimeR = xdisR / this.speed
                                        const droptimerR = (((this.body.ymom + (this.gravity * runtimeR)) * runtimeR) / runtimeR)
                                        if (droptimerR < (runtimeR * .850)) {
                                            this.dmove = 1
                                            this.amove = 0
                                            this.safe = 1
                                            if (cancel == 0) {
                                                this.screwshot = 1
                                                this.wmove = 1
                                            }
                                        } else {
                                            this.brick = this.bricksto
                                        }
                                    } else {
                                        const xdisL = Math.abs(this.brick.edgeleft.x - (this.body.x + (this.body.radius * 1.1)))
                                        const runtimeL = xdisL / this.speed
                                        const droptimerL = (((this.body.ymom + (this.gravity * runtimeL)) * runtimeL) / runtimeL)
                                        if (droptimerL < (runtimeL * .850)) {
                                            this.amove = 1
                                            this.dmove = 0
                                            this.safe = 1
                                            if (cancel == 0) {
                                                this.screwshot = 1
                                                this.wmove = 1
                                            }
                                        } else {
                                            this.brick = this.bricksto
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                let cancel = 0
                if (typeof this.target != "undefined") {
                    if (typeof this.target.body != "undefined") {
                        if (typeof this.target.body.x == "number") {
                            if (this.brick.edgeright.x > this.target.brick.edgeleft.x) {
                                cancel = -1
                            }
                            if (this.brick.edgeleft.x < this.target.brick.edgeright.x) {
                                cancel = 1
                            }
                        }
                    }
                }
                if (this.target.safe == 1 || this.target.safesto == 2) {
                    if (this.target.body.x > this.body.x) {
                        const xdisR = Math.abs(this.brick.edgeright.x - (this.body.x - (this.body.radius * 1.1)))
                        const runtimeR = xdisR / this.speed
                        const droptimerR = (((this.body.ymom + (this.gravity * runtimeR)) * runtimeR) / runtimeR)
                        if (droptimerR < (runtimeR * .855)) {
                            this.dmove = 1
                            this.amove = 0
                            this.safe = 1
                            if (cancel == 0) {
                                this.screwshot = 1
                                this.wmove = 1
                            }
                        }
                    } else {
                        const xdisL = Math.abs(this.brick.edgeleft.x - (this.body.x + (this.body.radius * 1.1)))
                        const runtimeL = xdisL / this.speed
                        const droptimerL = (((this.body.ymom + (this.gravity * runtimeL)) * runtimeL) / runtimeL)
                        if (droptimerL < (runtimeL * .855)) {
                            this.amove = 1
                            this.dmove = 0
                            this.safe = 1
                            if (cancel == 0) {
                                this.screwshot = 1
                                this.wmove = 1
                            }
                        }
                    }
                } else {
                    if (this.target.safe == 0) {
                        if (this.target.righthand.anchored != 1 && this.target.lefthand.anchored != 1) {
                            this.fleeing = 1
                        }
                    }
                }
            } else {
                if (this.safe == 0) {
                    this.screwshot = 1
                    if (this.body.x > (this.brick.center.x)) {
                        this.amove = 1
                        this.dmove = 0
                        this.wmove = 1
                    } else {
                        this.amove = 0
                        this.dmove = 1
                        this.wmove = 1
                    }
                    this.fleeing = 0
                } 
            }
            if (this.body.y < 900) {
                this.wmove = 0
                this.screwshot = 0
            }
            if (this.shield == 0) {
                for (let t = 0; t < boys.length; t++) {
                    if (this != boys[t] && boys[t]) {
                        for (let g = 0; g < boys[t].shots.length; g++) {
                            const link = new LineOP(this.body, boys[t].shots[g])
                            if ((link.sqrDis()) / ((Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom)) * (Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom))) < 32) {
                                if (this.grounded == 1) {
                                    if (boys[t].shots[g].stuck != 1) {
                                        this.storeshield = 1
                                    } else {
                                        this.wmove = 1
                                    }
                                } else {
                                    if (this.body.x < boys[t].shots[g].x) {
                                        if (this.amom <= 0 && this.dmom <= 0) {
                                            this.amom = ((this.body.radius * 1.2) + boys[t].shots[g].radius * 2) / this.speed
                                            this.amove = 1
                                            this.dmove = 0
                                        }
                                    } else {
                                        if (this.amom <= 0 && this.dmom <= 0) {
                                            this.dmom = ((this.body.radius * 1.2) + boys[t].shots[g].radius * 2) / this.speed
                                            this.amove = 0
                                            this.dmove = 1
                                        }
                                    }
                                }
                                break
                            } else if ((link.sqrDis()) / ((Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom)) * (Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom))) < 100) {
                                if (boys[t].shots[g].ymom > 0) {
                                    if (boys[t].body.y < this.body.y) {
                                        if (Math.abs(this.body.x - boys[t].shots[g].x) < ((this.body.radius) + boys[t].shots[g].radius * 2)) {
                                            this.fleeing = 1
                                            if (this.body.x < boys[t].shots[g].x) {
                                                if (this.amom <= 0 && this.dmom <= 0) {
                                                    this.amom = ((this.body.radius * 1.2) + boys[t].shots[g].radius * 2) / this.speed
                                                    this.amove = 1
                                                    this.dmove = 0
                                                }
                                            } else {
                                                if (this.amom <= 0 && this.dmom <= 0) {
                                                    this.dmom = ((this.body.radius * 1.2) + boys[t].shots[g].radius * 2) / this.speed
                                                    this.amove = 0
                                                    this.dmove = 1
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (Math.abs(this.body.y - boys[t].shots[g].y) <= this.body.radius + boys[t].shots[g].radius) {
                                        if (this.body.y < boys[t].shots[g].y) {
                                            if (boys[t].shots[g].x > this.body.x) {
                                                if (boys[t].shots[g].xmom < 0) {
                                                    this.fleeing = 1
                                                }
                                            } else {
                                                if (boys[t].shots[g].xmom > 0) {
                                                    this.fleeing = 1
                                                }
                                            }
                                        } else {
                                            if (this.grounded == 1) {
                                                this.fleeing = 1
                                            }
                                        }
                                        if (this.under == 0) {
                                            this.wmove = 1
                                            this.screwshot = 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.safe == 0) {
                    this.screwshot = 1
                    if (this.body.x > (this.brick.center.x)) {
                        this.amove = 1
                        this.dmove = 0
                        this.wmove = 1
                    } else {
                        this.amove = 0
                        this.dmove = 1
                        this.wmove = 1
                    }
                    this.fleeing = 0
                } 
                if (this.dmove == 0 && this.amove == 0) {
                    if (Math.random() < .5) {
                        this.dmove = 1
                    } else {
                        this.amove = 1
                    }
                }
                for (let t = 0; t < stage.walls.length; t++) {
                    if (Math.abs(this.body.x - stage.walls[t].center.x) <= (stage.walls[t].width + (this.body.radius * 2))) {
                        if (Math.abs(this.body.y - stage.walls[t].center.y) <= (stage.walls[t].height + (this.body.radius * 2))) {
                            if (this.body.x > stage.walls[t].center.x) {
                                if (this.amove == 1) {
                                    this.wmove = 1
                                }
                            } if (this.body.x < stage.walls[t].center.x) {
                                if (this.dmove == 1) {
                                    this.wmove = 1
                                }
                            }
                        }
                    }
                }
                if (AItoggle == 1 || localPlayToggle == 1) {
                    if (meshtoggle == 1 && this.hasOwnProperty('mesh')) {
                        if (boys.length == 2) {
                            this.meshinputs = []
                            this.meshinputs.push(this.damage)
                            this.meshinputs.push(Math.max(this.breaktimer, -1))
                            this.meshinputs.push(this.grounded)
                            this.meshinputs.push(this.shield)
                            this.meshinputs.push(this.shieldpower)
                            this.meshinputs.push(this.lefthand.anchored)
                            this.meshinputs.push(this.righthand.anchored)
                            this.meshinputs.push(Math.max(this.lefthand.fired, 0))
                            this.meshinputs.push(Math.max(this.righthand.fired, 0))
                            this.meshinputs.push(Math.max(this.body.fired, 0))
                            this.meshinputs.push(Math.max(this.blasting, 0))
                            this.meshinputs.push(this.face)
                            this.meshinputs.push(this.jumping)
                            this.meshinputs.push(Math.max(this.jumpcount, -20))
                            this.meshinputs.push(this.safe)
                            for (let k = 0; k < this.nodes.length; k++) {
                                const x = (this.nodes[k].x - (canvas.width * (invscale * .5))) / (canvas.width * (invscale * .5))
                                const y = (this.nodes[k].y - (canvas.height * (invscale * .5))) / (canvas.height * (invscale * .5))
                                this.meshinputs.push(x)
                                this.meshinputs.push(y)
                                this.meshinputs.push(this.nodes[k].radius)
                                this.meshinputs.push(this.nodes[k].xmom)
                                this.meshinputs.push(this.nodes[k].ymom)
                            }
                            for (let t = 0; t < boys.length; t++) {
                                if (this != boys[t]) {
                                    this.meshinputs.push(boys[t].damage)
                                    this.meshinputs.push(Math.max(boys[t].breaktimer, -1))
                                    this.meshinputs.push(boys[t].grounded)
                                    this.meshinputs.push(boys[t].shield)
                                    this.meshinputs.push(boys[t].shieldpower)
                                    this.meshinputs.push(boys[t].lefthand.anchored)
                                    this.meshinputs.push(boys[t].righthand.anchored)
                                    this.meshinputs.push(Math.max(boys[t].lefthand.fired, 0))
                                    this.meshinputs.push(Math.max(boys[t].righthand.fired, 0))
                                    this.meshinputs.push(Math.max(boys[t].body.fired, 0))
                                    this.meshinputs.push(Math.max(boys[t].blasting, 0))
                                    this.meshinputs.push(boys[t].face)
                                    this.meshinputs.push(boys[t].jumping)
                                    this.meshinputs.push(Math.max(boys[t].jumpcount, -20))
                                    this.meshinputs.push(boys[t].safe)
                                    for (let k = 0; k < boys[t].nodes.length; k++) {
                                        const x = (boys[t].nodes[k].x - (canvas.width * (invscale * .5))) / (canvas.width * (invscale * .5))
                                        const y = (boys[t].nodes[k].y - (canvas.height * (invscale * .5))) / (canvas.height * (invscale * .5))
                                        this.meshinputs.push(x)
                                        this.meshinputs.push(y)
                                        this.meshinputs.push(boys[t].nodes[k].radius)
                                        this.meshinputs.push(boys[t].nodes[k].xmom)
                                        this.meshinputs.push(boys[t].nodes[k].ymom)
                                    }
                                }
                            }
                            this.mesh.changeInputs(this.meshinputs)
                            const errors = [this.wmove, this.dmove, this.amove, this.exgrip, this.screwshot, this.downspike, this.hortsmash, this.rightshot, this.leftshot, this.storeshield]
                        }
                        if (meshRun == 1) {
                            this.wmove = Math.round(this.mesh.outputMagnitudes[0])
                            this.amove = Math.round(this.mesh.outputMagnitudes[1])
                            this.dmove = Math.round(this.mesh.outputMagnitudes[2])
                            if (isNaN(this.dmove)) {
                                this.dmove = 0
                            }
                            if (isNaN(this.amove)) {
                                this.amove = 0
                            }
                            this.exgrip = Math.round(this.mesh.outputMagnitudes[3])
                            if (Math.max(this.mesh.outputMagnitudes[4], this.mesh.outputMagnitudes[5], this.mesh.outputMagnitudes[6]) == (this.mesh.outputMagnitudes[4])) {
                                this.screwshot = 1
                                this.downspike = 0
                                this.hortsmash = 0
                            }
                            if (Math.max(this.mesh.outputMagnitudes[4], this.mesh.outputMagnitudes[5], this.mesh.outputMagnitudes[6]) == (this.mesh.outputMagnitudes[5])) {
                                this.downspike = 1
                                this.screwshot = 0
                                this.hortsmash = 0
                            }
                            if (Math.max(this.mesh.outputMagnitudes[4], this.mesh.outputMagnitudes[5], this.mesh.outputMagnitudes[6]) == (this.mesh.outputMagnitudes[6])) {
                                this.hortsmash = 1
                                this.screwshot = 0
                                this.downspike = 0
                            }
                            this.rightshot = Math.round(this.mesh.outputMagnitudes[7])
                            this.leftshot = Math.round(this.mesh.outputMagnitudes[8])
                            this.storeshield = Math.round(this.mesh.outputMagnitudes[9])
                        }
                    }
                }
                if (this.wmove == 1) {
                    if (this.grounded == 1) {
                        this.jumping = 1
                        object.ymom -= speed * 2
                    } else {
                        if (this.lefthand.anchored == 1) {
                            this.degripl()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                        if (this.righthand.anchored == 1) {
                            this.degripr()
                            this.jumping = 1
                            object.ymom -= speed
                        }
                    }
                }
                if (!this.hasOwnProperty('mesh')) {
                    if (this.dmove == 1) {
                        this.face = 1
                        if (object == this.body) {
                            object.x += speed
                            this.righthand.x += speed
                            this.lefthand.x += speed
                        }
                        if (this.righthand.anchored == 1) {
                            this.degripr()
                            this.jumping = 1
                        }
                    }
                    if (this.amove == 1) {
                        this.face = -1
                        if (object == this.body) {
                            object.x -= speed
                            this.righthand.x -= speed
                            this.lefthand.x -= speed
                        }
                        if (this.lefthand.anchored == 1) {
                            this.degripl()
                            this.jumping = 1
                        }
                    }
                } else {
                    if (object == this.body) {
                        object.x += speed * this.dmove
                        this.righthand.x += speed * this.dmove
                        this.lefthand.x += speed * this.dmove
                    }
                    if (object == this.body) {
                        object.x -= speed * this.amove
                        this.righthand.x -= speed * this.amove
                        this.lefthand.x -= speed * this.amove
                    }
                    if (this.dmove > this.amove) {
                        this.face = 1
                        if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                            this.degripl()
                            this.jumping = 1
                        }
                    } else {
                        this.face = -1
                        if (this.righthand.anchored == 1 || this.lefthand.anchored == 1) {
                            this.degripl()
                            this.jumping = 1
                        }
                    }
                }
            }
            if (this.exgrip == 1) {
                this.righthand.anchored = 0
                this.lefthand.anchored = 0
            }
        }
        AI() {
            this.idify()
            if (this.inactive == 1) {
                return
            }
            this.breaks()
            if (this.screwtimer > 0) {
                this.screwtimer--
                this.screwangle += this.screwmomentum
            } else {
                this.screwtimer = 0
                this.screwangle = 0
            }
            this.righthand.fired--
            this.blasting = this.body.fired
            this.body.fired--
            this.lefthand.fired--
            this.breaktimer--
            if (Math.random() < .1) {
                this.storeshield = 0
            }
            if (Math.random() < .5) {
                this.screwshot = 0
            }
            if (Math.random() < .01 || this.charge == 0) {
                this.rightshot = 0
            }
            if (Math.random() < .01 || this.charge == 0) {
                this.leftshot = 0
            }
            if (Math.random() < .1) {
                this.downspike = 0
            }
            if (Math.random() < .1) {
                this.hortsmash = 0
            }
            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t] && boys[t]) {
                    for (let g = 0; g < boys[t].shots.length; g++) {
                        const link = new LineOP(this.body, boys[t].shots[g])
                        if ((link.sqrDis()) / ((Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom)) * (Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom))) < 32) {
                            if (boys[t].shots[g].stuck != 1) {
                                this.storeshield = 1
                                break
                            } else {
                                this.wmove = 1
                            }
                        } else if ((link.sqrDis()) / ((Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom)) * (Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom))) < 100) {
                            if (boys[t].shots[g].ymom > 0) {
                                if (boys[t].body.y < this.body.y) {
                                    if (Math.abs(this.body.x - boys[t].shots[g].x) < ((this.body.radius) + boys[t].shots[g].radius * 2)) {

                                        this.fleeing = 1
                                        if (this.body.x < boys[t].body.x) {
                                            this.amom = ((this.body.radius) + boys[t].shots[g].radius * 2) / this.speed
                                        } else {
                                            this.dmom = ((this.body.radius) + boys[t].shots[g].radius * 2) / this.speed
                                        }
                                    }
                                }
                            } else {
                                if (Math.abs(this.body.y - boys[t].shots[g].y) <= this.body.radius + boys[t].shots[g].radius) {
                                    if (this.body.y < boys[t].shots[g].y) {
                                        if (boys[t].shots[g].x > this.body.x) {
                                            if (boys[t].shots[g].xmom < 0) {
                                                this.fleeing = 1
                                            }
                                        } else {
                                            if (boys[t].shots[g].xmom > 0) {
                                                this.fleeing = 1
                                            }
                                        }
                                    } else {
                                        if (this.grounded == 1) {
                                            this.fleeing = 1
                                        }
                                    }
                                    if (this.under == 0) {
                                        this.wmove = 1
                                        this.screwshot = 1
                                    }
                                }
                            }
                        }
                    }
                    if (Math.abs(this.body.x - boys[t].body.x) < 50 && this.body.y < boys[t].body.y) {
                        this.downspike = 1
                    } else if (Math.abs(this.body.x - boys[t].body.x) < 150 && this.body.y <= boys[t].body.y && (boys[t].righthand.anchored == 1 || boys[t].lefthand.anchored == 1)) {
                        this.hortsmash = 1
                    }
                    if (Math.abs(this.body.x - boys[t].body.x) < 70 && this.body.y > boys[t].body.y) {
                        this.screwshot = 1
                    }
                    if (Math.abs(this.body.x - boys[t].body.x) < 240) {
                        if (this.body.x > boys[t].body.x) {
                            if (this.face == 1) {
                                this.hortsmash = 1
                            }
                        }
                        if (this.body.x < boys[t].body.x) {
                            if (this.face == -1) {
                                this.hortsmash = 1
                            }
                        }
                    }
                    if (boys[t].righthand.fired > 14) {
                        if (this.body.x > boys[t].body.x) {
                            if (Math.random() < .09) {
                                this.storeshield = 1
                            }
                        }
                    }
                    if (this.screwshot + this.hortsmash + this.downspike + this.storeshield == 0) {
                        if (Math.abs(this.body.y - boys[t].body.y) < 35 && this.body.x > boys[t].body.x) {
                            if (this.face == -1) {
                                this.leftshot = 1
                                if (Math.abs(this.body.x - boys[t].body.x) < 170) {
                                    if (Math.random() < .009) {
                                        this.hortsmash = 1
                                        this.leftshot = 0
                                    }
                                }
                            }
                        }
                        if (Math.abs(this.body.y - boys[t].body.y) < 35 && this.body.x < boys[t].body.x) {
                            if (this.face == 1) {
                                this.rightshot = 1
                                if (Math.abs(this.body.x - boys[t].body.x) < 170) {
                                    if (Math.random() < .009) {
                                        this.hortsmash = 1
                                        this.rightshot = 0
                                    }
                                }
                            }
                        }
                    }
                    if (Math.abs(this.body.y - boys[t].body.y) < 50 && Math.abs(this.body.x - boys[t].body.x) < 200) {
                        if (boys[t].lefthand.fired > 14 || boys[t].righthand.fired > 14) {
                            if (this.body.x < boys[t].body.x) {
                                if (Math.random() < .4) {
                                    this.storeshield = 1
                                }
                            }
                        }
                    }
                }
            }
            this.safe = 0
            this.safesto = 0
            for (let t = 0; t < stage.bricks.length; t++) {
                if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * .05)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 0.05))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) >= this.body.y + (this.body.radius * .1)) {
                        this.safe = 1
                        if (stage.bricks[t].center.y < this.brick.center.y) {
                            this.brick = stage.bricks[t]
                        } else if (!(this.brick.edgeleft.x < (this.body.x + (this.body.radius * .05)) && this.brick.edgeright.x > (this.body.x - (this.body.radius * 0.05)))) {
                            this.brick = stage.bricks[t]
                        } else if (!(Math.max(this.brick.edgeright.y, this.brick.edgeleft.y) >= this.body.y + (this.body.radius * .1))) {
                            this.brick = stage.bricks[t]
                        }
                    }
                } else if (stage.bricks[t].edgeleft.x < (this.body.x + (this.body.radius * 4.05)) && stage.bricks[t].edgeright.x > (this.body.x - (this.body.radius * 4.05))) {
                    if (Math.max(stage.bricks[t].edgeright.y, stage.bricks[t].edgeleft.y) >= this.body.y + (this.body.radius * .1)) {
                        this.safesto = 2
                        if (stage.bricks[t].center.y < this.brick.center.y) {
                            this.brick = stage.bricks[t]
                        } else if (!(this.brick.edgeleft.x < (this.body.x + (this.body.radius * .05)) && this.brick.edgeright.x > (this.body.x - (this.body.radius * 0.05)))) {
                            this.brick = stage.bricks[t]
                        } else if (!(Math.max(this.brick.edgeright.y, this.brick.edgeleft.y) >= this.body.y + (this.body.radius * .1))) {
                            this.brick = stage.bricks[t]
                        }
                    }
                }
            }
            if (this.safe == 0) {
                this.screwshot = 1
            }
            for (let t = 0; t < boys.length; t++) {
                if (this != boys[t] && boys[t]) {
                    for (let g = 0; g < boys[t].shots.length; g++) {
                        const link = new LineOP(this.body, boys[t].shots[g])
                        if ((link.sqrDis()) / ((Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom)) * (Math.abs(boys[t].shots[g].xmom) + Math.abs(boys[t].shots[g].ymom))) < 32) {
                            this.storeshield = 1
                        }
                    }
                }
            }
            if (this.shieldpower < 10) {
                if (Math.random() < .95) {
                    this.storeshield = 0
                }
            }
            if (this.serverID == serverID || AItoggle == 1 || localPlayToggle == 1) {
                this.shielddraw = 0
            }
            if (AItoggle == 1 || localPlayToggle == 1) {
                if (meshtoggle == 1 && this.hasOwnProperty('mesh')) {
                    if (boys.length == 2) {
                        this.meshinputs = []
                        this.meshinputs.push(this.damage)
                        this.meshinputs.push(Math.max(this.breaktimer, -1))
                        this.meshinputs.push(this.grounded)
                        this.meshinputs.push(this.shield)
                        this.meshinputs.push(this.shieldpower)
                        this.meshinputs.push(this.lefthand.anchored)
                        this.meshinputs.push(this.righthand.anchored)
                        this.meshinputs.push(Math.max(this.lefthand.fired, 0))
                        this.meshinputs.push(Math.max(this.righthand.fired, 0))
                        this.meshinputs.push(Math.max(this.body.fired, 0))
                        this.meshinputs.push(Math.max(this.blasting, 0))
                        this.meshinputs.push(this.face)
                        this.meshinputs.push(this.jumping)
                        this.meshinputs.push(Math.max(this.jumpcount, -20))
                        this.meshinputs.push(this.safe)
                        for (let k = 0; k < this.nodes.length; k++) {
                            const x = (this.nodes[k].x - (canvas.width * (invscale * .5))) / (canvas.width * (invscale * .5))
                            const y = (this.nodes[k].y - (canvas.height * (invscale * .5))) / (canvas.height * (invscale * .5))
                            this.meshinputs.push(x)
                            this.meshinputs.push(y)
                            this.meshinputs.push(this.nodes[k].radius)
                            this.meshinputs.push(this.nodes[k].xmom)
                            this.meshinputs.push(this.nodes[k].ymom)
                        }
                        for (let t = 0; t < boys.length; t++) {
                            if (this != boys[t]) {
                                this.meshinputs.push(boys[t].damage)
                                this.meshinputs.push(Math.max(boys[t].breaktimer, -1))
                                this.meshinputs.push(boys[t].grounded)
                                this.meshinputs.push(boys[t].shield)
                                this.meshinputs.push(boys[t].shieldpower)
                                this.meshinputs.push(boys[t].lefthand.anchored)
                                this.meshinputs.push(boys[t].righthand.anchored)
                                this.meshinputs.push(Math.max(boys[t].lefthand.fired, 0))
                                this.meshinputs.push(Math.max(boys[t].righthand.fired, 0))
                                this.meshinputs.push(Math.max(boys[t].body.fired, 0))
                                this.meshinputs.push(Math.max(boys[t].blasting, 0))
                                this.meshinputs.push(boys[t].face)
                                this.meshinputs.push(boys[t].jumping)
                                this.meshinputs.push(Math.max(boys[t].jumpcount, -20))
                                this.meshinputs.push(boys[t].safe)
                                for (let k = 0; k < boys[t].nodes.length; k++) {
                                    const x = (boys[t].nodes[k].x - (canvas.width * (invscale * .5))) / (canvas.width * (invscale * .5))
                                    const y = (boys[t].nodes[k].y - (canvas.height * (invscale * .5))) / (canvas.height * (invscale * .5))
                                    this.meshinputs.push(x)
                                    this.meshinputs.push(y)
                                    this.meshinputs.push(boys[t].nodes[k].radius)
                                    this.meshinputs.push(boys[t].nodes[k].xmom)
                                    this.meshinputs.push(boys[t].nodes[k].ymom)
                                }
                            }
                        }
                        this.mesh.changeInputs(this.meshinputs)
                        const errors = [this.wmove, this.dmove, this.amove, this.exgrip, this.screwshot, this.downspike, this.hortsmash, this.rightshot, this.leftshot, this.storeshield]
                    }
                    if (meshRun == 1) {
                        this.wmove = Math.round(this.mesh.outputMagnitudes[0])
                        this.amove = Math.round(this.mesh.outputMagnitudes[1])
                        this.dmove = Math.round(this.mesh.outputMagnitudes[2])
                        if (isNaN(this.dmove)) {
                            this.dmove = 0
                        }
                        if (isNaN(this.amove)) {
                            this.amove = 0
                        }
                        this.exgrip = Math.round(this.mesh.outputMagnitudes[3])
                        if (Math.max(this.mesh.outputMagnitudes[4], this.mesh.outputMagnitudes[5], this.mesh.outputMagnitudes[6]) == (this.mesh.outputMagnitudes[4])) {
                            this.screwshot = 1
                            this.downspike = 0
                            this.hortsmash = 0
                        }
                        if (Math.max(this.mesh.outputMagnitudes[4], this.mesh.outputMagnitudes[5], this.mesh.outputMagnitudes[6]) == (this.mesh.outputMagnitudes[5])) {
                            this.downspike = 1
                            this.screwshot = 0
                            this.hortsmash = 0
                        }
                        if (Math.max(this.mesh.outputMagnitudes[4], this.mesh.outputMagnitudes[5], this.mesh.outputMagnitudes[6]) == (this.mesh.outputMagnitudes[6])) {
                            this.hortsmash = 1
                            this.screwshot = 0
                            this.downspike = 0
                        }
                        this.rightshot = Math.round(this.mesh.outputMagnitudes[7])
                        this.leftshot = Math.round(this.mesh.outputMagnitudes[8])
                        this.storeshield = Math.round(this.mesh.outputMagnitudes[9])
                    }
                }
            }
            if (this.storeshield == 1) {
                if (this.breaktimer < 0) {
                    if (this.grounded == 1) {
                        this.shieldpower -= .63
                        this.shield = 1
                        this.shielddraw = 1
                    }
                }
            } else {
                this.shield = 0
                this.shieldpower += .2
                if (this.shieldpower > 100) {
                    this.shieldpower = 100
                }
            }
            if (this.serverID == serverID || AItoggle == 1 || localPlayToggle == 1) {
                this.shotdraw = 0
            }
            if (this.breaktimer <= 0 && this.shield == 0) {
                if (this.hasOwnProperty('mesh')) {
                } else {
                    if (this.body.y < 950) {
                        this.wmove = 0
                        this.screwshot = 0
                    }
                    if (this.body.y < 1250) {
                        if (this.body.ymom < 0) {
                            this.wmove = 0
                            this.screwshot = 0
                        }
                    }
                }
                if (this.screwshot == 1) {
                    if (this.body.fired <= 0) {
                        if (this.screwangle == 0) {
                            this.screwmomentum = Math.PI / 5
                            this.screwtimer = 42
                            this.jumping = 1
                            this.lefthand.fired = 30
                            this.righthand.fired = 30
                            this.body.fired = 42
                            this.lefthand.anchored = -10
                            this.righthand.anchored = -10
                            this.body.ymom = -jumplimit 
                        }
                    }
                }
                if (this.downspike == 1) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = (this.punchspeed * 15.1) + this.body.ymom * 2
                            this.righthand.xmom = -((this.punchspeed * 2.1)) 
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = (this.punchspeed * 15.1) + this.body.ymom * 2
                            this.lefthand.xmom = ((this.punchspeed * 2.1))
                            this.lefthand.fired = 18
                        }
                    }
                }
                if (this.hortsmash == 1) {
                    if (this.righthand.fired <= 0) {
                        if (this.righthand.anchored == 0) {
                            this.fleeing = 0
                            this.rightshoulder.xmom = 0
                            this.rightshoulder.ymom = 0
                            this.righthand.ymom = (this.punchspeed * 5) + (this.body.ymom * 2)
                            this.righthand.xmom = (this.punchspeed * 11.1)
                            this.righthand.fired = 18
                        }
                    }
                    if (this.lefthand.fired <= 0) {
                        if (this.lefthand.anchored == 0) {
                            this.fleeing = 0
                            this.leftshoulder.xmom = 0
                            this.leftshoulder.ymom = 0
                            this.lefthand.ymom = (this.punchspeed * 5) + (this.body.ymom * 2)
                            this.lefthand.xmom = -(this.punchspeed * 11.1)
                            this.lefthand.fired = 18
                        }
                    }
                }
                if (this.righthand.fired <= 0) {
                    if (this.righthand.anchored == 0) {
                        if (this.rightshot == 1) {
                            if (this.face == 1) {
                                this.shot = new Shot(this.righthand.x, this.righthand.y, this.charge * .66, "#00FFFF", this.speed * 2, 0)
                                if (this.charge > 80) {
                                    this.shot.color = "#88FFFF"
                                }
                                if (this.charge >= 100) {
                                    this.charge = 0
                                    this.righthand.xmom = 10
                                    this.righthand.ymom = 0
                                    this.shots.push(this.shot)
                                    if (this.grounded != 1) {
                                        this.body.xmom -= 5
                                    }
                                }
                                if (this.righthand.anchored == 0) {
                                    this.righthand.xmom += 1
                                    this.righthand.ymom -= 1
                                    this.charge += 3.5
                                }
                                this.shotdraw = 1
                            }
                        }
                        if (this.leftshot == 1) {
                            if (this.face == -1) {
                                if (this.lefthand.anchored == 0) {
                                    this.shot = new Shot(this.lefthand.x, this.lefthand.y, this.charge * .66, "#00FFFF", -this.speed * 2, 0)
                                    if (this.charge > 80) {
                                        this.shot.color = "#88FFFF"
                                    }
                                    if (this.charge >= 100) {
                                        this.charge = 0
                                        this.lefthand.xmom = -10
                                        this.lefthand.ymom = 0
                                        this.shots.push(this.shot)
                                        if (this.grounded != 1) {
                                            this.body.xmom += 5
                                        }
                                    }
                                    if (this.lefthand.anchored == 0) {
                                        this.lefthand.xmom -= 1
                                        this.lefthand.ymom -= 1
                                        this.charge += 3.5
                                    }
                                    this.shotdraw = 1
                                }
                            }
                        }
                    }
                }
            }
        }