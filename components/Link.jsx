import NextLink, { LinkProps } from 'next/link'
import { format } from 'url'
import { config } from '../config'

const {basePath } = config

const Link = ({ children, ...props }) => (
    <NextLink
        {...props}
        as={`${basePath || ''}${format(props.as)}`}
    >
        {children}
    </NextLink>
)

export default Link