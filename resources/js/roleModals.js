export default function roleModal(){
    return `
    <div class="modal fade" id="roleCreateModal" tabindex="-1" aria-labelledby="roleCreate" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h3 class="modal-title" style="color:white">Create New Role</h3>
                </div>

                <div class="modal-body">
                    <form class="roleCreateForm" id="roleCreateForm">
                        <div class="form-group">
                            <label for="roles">Role</label>
                            <input type="text" class="form-control" id="roles" name="roles">
                        </div>

                        <br>
                        <button type="submit" class="btn btn-dark" id="roleCreateSave">Save</button>
                        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="roleEditModal" tabindex="-1" aria-labelledby="roleEditModal" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h3 class="modal-title" style="color:white">Edit Role</h3>
                </div>

                <div class="modal-body">
                    <form class="roleEditForm" id="roleEditForm">
                        <div class="form-group">
                            <label for="roles">Roles</label>
                            <input type="text" class="form-control roleRoles" id="roles" name="roles">
                        </div>

                        <br>
                        <button type="submit" class="btn btn-dark roleEditSave" id="roleEditSave">Save</button>
                        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}