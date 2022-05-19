import {NextRequest, NextResponse} from 'next/server'

export async function middleware(req: NextRequest, res: NextResponse) {
    const { pathname } = req.nextUrl
    const url = req.nextUrl.clone()
    url.pathname = '/start'
    if (pathname == '/') {
        return NextResponse.rewrite(url)
    }
    return NextResponse.next()
}