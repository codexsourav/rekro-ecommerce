function ProductDesc({ data }) {
    return (
        <div className="content" >
            <div dangerouslySetInnerHTML={{ __html: data }}></div>
        </div >
    )
}
export default ProductDesc