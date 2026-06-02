'use client'

import { type RefObject, useLayoutEffect } from 'react'

type CssVariableTarget = 'body' | 'documentElement'

type ObservedHeightCssVariableOptions = {
  target?: CssVariableTarget
}

export default function useObservedHeightCssVariable(
  ref: RefObject<HTMLElement | null>,
  variableName: `--${string}`,
  { target = 'documentElement' }: ObservedHeightCssVariableOptions = {},
) {
  useLayoutEffect(() => {
    const targetElement = target === 'body' ? document.body : document.documentElement

    const syncHeight = () => {
      targetElement.style.setProperty(variableName, `${ref.current?.offsetHeight ?? 0}px`)
    }

    syncHeight()

    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncHeight) : null

    if (observer && ref.current) {
      observer.observe(ref.current)
    }

    window.addEventListener('resize', syncHeight)
    window.addEventListener('orientationchange', syncHeight)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', syncHeight)
      window.removeEventListener('orientationchange', syncHeight)
      targetElement.style.removeProperty(variableName)
    }
  }, [ref, target, variableName])
}
