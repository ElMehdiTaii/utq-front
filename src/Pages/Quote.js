import React from 'react'
import { default as PageHeader} from '../Components/Shared/PageHeader/Index'

export default function Quote() {
    const header = "Quote A Request";
    return (
            <PageHeader pageHeader={header} />
    )
}