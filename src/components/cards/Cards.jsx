import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import styles from './styles.module.css'


import th1 from "./assets/th_01.webp"
import th2 from "./assets/th_02.webp"
import th3 from "./assets/th_03.webp"
import bb1 from "./assets/bb_02.webp"
import dw1 from "./assets/dw_01.webp"
import dw2 from "./assets/dw_02.webp"
import jk1 from "./assets/jk_01.webp"
import jw1 from "./assets/jw_01.webp"
import mot1 from "./assets/mot_02.webp"
import op1 from "./assets/op_01.webp"
import op2 from "./assets/op_02.webp"
import sw1 from "./assets/sw_01.webp"
import sw2 from "./assets/sw_02.webp"
import zo1 from "./assets/zo_01.webp"
const cards = [
  th1,
  th2,
  th3,
  bb1,
  dw1,
  dw2,
  jk1,
  jw1,
  mot1,
  op1,
  op2,
  sw1,
  sw2,
  zo1
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              
            }}
          />
          <img src={cards[i]} className='cardimg' style={{width:window.screen.width>1300?150:70,position: "absolute",pointerEvents:"none"}}/>
        </animated.div>
      ))}
    </>
  )
}

export default function Cards() {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  )
}
