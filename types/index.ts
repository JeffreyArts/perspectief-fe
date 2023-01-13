
export interface Quote {
    content: string,
    author: string,
}

export interface StripeCoordinates {
    x1: number,
    x2: number,
    y1: number,
    y2: number,
}

export interface StripeObject {
    id: string,
    v: StripeCoordinates,
    start: StripeCoordinates,
    end: StripeCoordinates,
}
