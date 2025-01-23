function DocsIdPage({ params, searchParams }) {
    console.log(searchParams)

    return (
        <div>DocsIdPage {params.id} - {searchParams.isVisible}</div>
    )
}

export default DocsIdPage