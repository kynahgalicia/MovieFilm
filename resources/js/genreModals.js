export default function genreModal(){
    return `
    <div class="modal fade" id="genreCreateModal" tabindex="-1" aria-labelledby="genreCreate" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h3 class="modal-title" style="color:white">Create New Genre</h3>
                </div>

                <div class="modal-body">
                    <form class="genreCreateForm" id="genreCreateForm">
                        <div class="form-group">
                            <label for="genre">Genre</label>
                            <input type="text" class="form-control" id="genre" name="genre">
                        </div>

                        <br>
                        <button type="submit" class="btn btn-dark" id="genreCreateSave">Save</button>
                        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="genreEditModal" tabindex="-1" aria-labelledby="genreEditModal" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h3 class="modal-title" style="color:white">Edit Genre</h3>
                </div>

                <div class="modal-body">
                    <form class="genreEditForm" id="genreEditForm">
                        <div class="form-group">
                            <label for="genre">Genre</label>
                            <input type="text" class="form-control genreGenre" id="genre" name="genre">
                        </div>
                        
                        <br>
                        <button type="submit" class="btn btn-dark genreEditSave" id="genreEditSave">Save</button>
                        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}