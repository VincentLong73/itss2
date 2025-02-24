import React from "react"

const ViewImportModal = (props) => {

    let productImport = props.productImport
    let importID = productImport._id
    let code = productImport.code
    console.log("Import ID: ", importID)
    console.log("Props: ", props.productImport)
    let warehouse = productImport.importWarehouse;
    let renderWarehouse = warehouse.map(
        (product, i) => 
            <tr key={product._id}>
                <td className="text-center" scope="row">{i+1}</td>
                <td className="text-center" scope="row">{product.product.name}</td>
                <td className="text-center" scope="row">{product.product.supplier.name}</td>
                <td className="text-center" scope="row">{product.amount}</td>
            </tr>
    )

    return (
        <div className="modal fade bd-example-modal-lg info-import" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">製品の輸入情報のリスト</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <table className="table table-striped table-bordered table-fixed" style={{width: "100%"}}>
                            <thead>
                                <tr>
                                    <th className="text-center" scope="col" style={{width: "10%"}}>#</th>
                                    <th className="text-center" scope="col" style={{width: "25%"}}>製品名</th>
                                    <th className="text-center" scope="col" style={{width: "25%"}}>サプライヤー名</th>
                                    <th className="text-center" scope="col" style={{width: "10%"}}>数</th>
                                </tr>	
                            </thead>	
                            <tbody>
                                {renderWarehouse}
                            </tbody>
                        </table>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewImportModal