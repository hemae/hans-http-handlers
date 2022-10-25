import {Response} from 'express'
import logger from 'hans-logger'


export function error500(initiator: string, res: Response, e: any, file: string) {
    logger.error(`initiator: ${initiator.toUpperCase()}`)
    logger.error(`file: ${file}`)
    logger.error(e)
    res.status(500).json({message: `Something went wrong, ${e.message}`})
}

export function error401(res: Response, message?: string) {
    res.status(401).json({message: message || 'Unauthorized'})
}

export function error403(res: Response, message?: string) {
    res.status(403).json({message: message || 'No access'})
}

export function error400(res: Response, message?: string, additionalErrors?: Record<string, any>) {
    res.status(400).json({message: message || 'Error at client side', ...additionalErrors})
}

export function error404(res: Response, message?: string, additionalErrors?: Record<string, any>) {
    res.status(404).json({message: message || 'Not found', ...additionalErrors})
}

export function status201(res: Response, data: Record<string, any> | null) {
    res.status(201).json(data)
}

export function status200(res: Response, data: Record<string, any> | null) {
    res.json(data)
}

export function status200Message(res: Response, message: string) {
    res.json({message})
}
