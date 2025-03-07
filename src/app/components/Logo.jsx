import Image from "next/image"
import Link from "next/link"
import React from 'react'

const Logo = ({ ...props }) => {
    return (
        <Link href="/">
            <Image {...props} src="/assets/img/logo-coloured.svg" alt="Niravana Web Solution" />
        </Link>
    )
}

export default Logo