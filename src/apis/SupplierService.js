import BaseService from "./BaseService";

class SupplierService extends BaseService {
    /**
     *
     */
    constructor() {
        super({
            subURL: "suppliers"
        });
    }

    create = (data) => {
        return this.post('/', data);
    }

    getSuppliers = (data) => {
        return this.get("/", data);
    }

    getSupplier = (id) => {
        return this.get("/"+id);
    }

    updateSupplier = (id, data) => {
        return this.put("/update/"+id, data);
    }

    delSuppliers = (data) => {
        return this.delete("/delete", data);
    }
};

export default new SupplierService();