import React, { useState } from "react"

const ExportModal = (props) => {
	const [productName, setProductName] = useState('')
	const [supplierName, setSupplierName] = useState('')
	const [productQuantity, setProductQuantity] = useState(1)
	const [exportDate, setExportDate] = useState('')

	const handleSupplierNameChange = (e) => {
		setSupplierName(e.target.value)
	}

	const handleProductNameChange = (e) => {
		setProductName(e.target.value)
	}

	const handleProductQuantityChange = (e) => {
		let quantity = parseInt(e.target.value)
		setProductQuantity(quantity)
	}

	const handleExportDateChange = (e) => {
		setExportDate(e.target.value)
	}

	const handleCreateProductExport = (e) => {
		e.preventDefault()
		console.log("Created new product export")
	}
	return (
		<div className="modal fade" id={props.modalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog modal-dialog-centered" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">新製品</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">
		        <form action="/warehouse/export" method="POST">
		        	<input value={productName} onChange={handleProductNameChange} type="text" className="form-control validate" placeholder="製品名" />
		        	<input value={supplierName} onChange={handleSupplierNameChange} type="text" className="form-control validate" placeholder="サプライヤー名" />
		        	<input value={productQuantity} onChange={handleProductQuantityChange} type="number" min="1" max="10000" className="form-control validate" placeholder="製品数" />
		        	<input value={exportDate} onChange={handleExportDateChange} type="date" className="form-control validate" placeholder="出庫日" />
		        </form>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
		        <button type="submit" className="btn btn-primary" onClick={handleCreateProductExport} >追加</button>
		      </div>
		    </div>
		  </div>
		</div>			
	)
}

export default ExportModal