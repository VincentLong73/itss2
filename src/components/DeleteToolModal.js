import React from "react"
import ToolService from "../apis/ToolService"

const DeleteToolModal = (props) => {

    let toolId = props.tool._id
    
    const handleDeleteTool = async (e) => {
		e.preventDefault()
        
        await ToolService.delTools(toolId)
            .then(res => {
                if (res.status === 200) {
                    window.location.reload()
                }
            })
            .catch(err => {
                alert("Delete tool failed")
            })
	}

    return (
        <div className="modal fade bd-example-modal-lg delete-tool" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">用品消去?</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
                        <button type="submit" className="btn btn-danger" onClick={handleDeleteTool} >消去</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteToolModal