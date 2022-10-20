import React from 'react'
import { default as PageHeader} from '../Components/Shared/PageHeader/Index'

export default function About() {
    const header = "About Us";
    return (
        <PageHeader pageHeader={header} />
    )
}