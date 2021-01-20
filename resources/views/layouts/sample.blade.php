<div class="modal fade" id="actorEditModal" tabindex="-1" aria-labelledby="actorEditModal" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h3 class="modal-title" style="color:white">Edit Actor</h3>
            </div>

            <div class="modal-body">
                <form class="actorEditForm" id="actorEditForm">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control actorName" id="name" name="name">
                    </div>
                    
                    <div class="form-group">
                        <label for="birthday">Birthday</label>
                        <input type="text" class="form-control actorBirthday" id="birthday" name="birthday">
                    </div>
                    
                    <div class="form-outline">
                        <label class="form-label" for="notes">Notes</label>
                        <textarea class="form-control actorNotes" id="notes" name="notes" rows="4"></textarea>
                    </div>

                    <br>
                    <button type="submit" class="btn btn-dark actorEditSave" id="actorEditSave">Save</button>
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                    
                    </form>
            </div>
        </div>
    </div>
</div>