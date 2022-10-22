import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:[
            "hi",
            "hello",
            "nihaoa",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
    </div>
  )
}