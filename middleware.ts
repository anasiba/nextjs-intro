import { NextResponse } from "next/server"

export const middelware = async (req: Request, res: Response, next: NextFunction) => {

    return NextResponse.redirect(new URL('/', req.url))

}

export default middelware

export const config = {
    matcher: ['/todos']
}