// Simple utility to add/remove classes for animations
export function fadeIn(element: HTMLElement, duration = 500) {
  element.style.opacity = "0"
  element.style.transition = `opacity ${duration}ms ease-in-out`

  // Force a reflow
  void element.offsetWidth

  element.style.opacity = "1"
}

export function fadeOut(element: HTMLElement, duration = 500) {
  element.style.opacity = "1"
  element.style.transition = `opacity ${duration}ms ease-in-out`

  // Force a reflow
  void element.offsetWidth

  element.style.opacity = "0"
}

export function slideIn(element: HTMLElement, direction = "up", distance = "20px", duration = 500) {
  let transform = ""

  switch (direction) {
    case "up":
      transform = `translateY(${distance})`
      break
    case "down":
      transform = `translateY(-${distance})`
      break
    case "left":
      transform = `translateX(${distance})`
      break
    case "right":
      transform = `translateX(-${distance})`
      break
  }

  element.style.opacity = "0"
  element.style.transform = transform
  element.style.transition = `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`

  // Force a reflow
  void element.offsetWidth

  element.style.opacity = "1"
  element.style.transform = "translate(0, 0)"
}

