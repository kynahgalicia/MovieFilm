export default function producerModal(){
    return `
        <div class="modal fade" id="producerCreateModal" tabindex="-1" aria-labelledby="producerCreate" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Create New Producer</h3>
                    </div>

                    <div class="modal-body">
                        <form class="producerCreateForm" id="producerCreateForm">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name">
                            </div>
                            
                            <div class="form-group">
                                <label for="birthday">Birthday</label>
                                <input type="text" class="form-control" id="birthday" name="birthday">
                            </div>
                            
                            <div class="form-outline">
                                <label class="form-label" for="notes">Notes</label>
                                <textarea class="form-control" id="notes" name="notes" rows="4"></textarea>
                            </div>

                            <br>
                            <button type="submit" class="btn btn-dark" id="producerCreateSave">Save</button>
                            <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="producerEditModal" tabindex="-1" aria-labelledby="producerEditModal" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Edit Producer</h3>
                    </div>

                    <div class="modal-body">
                        <form class="producerEditForm" id="producerEditForm">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control producerName" id="name" name="name">
                            </div>
                            
                            <div class="form-group">
                                <label for="birthday">Birthday</label>
                                <input type="text" class="form-control producerBirthday" id="birthday" name="birthday">
                            </div>
                            
                            <div class="form-outline">
                                <label class="form-label" for="notes">Notes</label>
                                <textarea class="form-control producerNotes" id="notes" name="notes" rows="4"></textarea>
                            </div>

                            <br>
                            <button type="submit" class="btn btn-dark producerEditSave" id="producerEditSave">Save</button>
                            <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}