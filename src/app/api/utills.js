import jwt from 'jsonwebtoken';
import { EXPORT_MARKER } from 'next/dist/shared/lib/constants';
import { headers } from 'next/headers'
export const verifyByJwt = async () => {
    const headersList = headers()
    const authorization = headersList.get('authorization');
    try {
        const userKey = jwt.verify(authorization, process.env.JWT_KEY);
        return userKey.id;
    } catch (error) {
        return false;
    }
}
export const verifyByJwtAdmin = async () => {
    const headersList = headers()
    const authorization = headersList.get('authorization');
    try {
        const userKey = jwt.verify(authorization, process.env.JWT_KEY);
        if (userKey.role == 'admin') {
            return userKey.userKey;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}
export function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new Error('Invalid date');
    }

    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
}