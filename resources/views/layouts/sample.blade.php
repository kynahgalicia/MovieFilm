<di class="modal fade" id="movieCreateModal" tabindex="-1" aria-labelledby="movieCreate" aria-hidden="true" data-backdrop="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h3 class="modal-title" style="color:white">Create New Movie</h3>
            </div>

            <div class="modal-body">
                <form class="movieCreateForm" id="movieCreateForm">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" name="title" value="">
                    </div>
                    
                    <div class="form-group">
                        <label for="year">Year</label>
                        <input type="text" class="form-control" id="year" name="year" value="">
                    </div>
                    
                    <div class="form-outline">
                        <label class="form-label" for="plot">Plot</label>
                        <textarea class="form-control" id="plot" name="plot" value="" rows="4"></textarea>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="genre">Genre</label>
                        <select class="form-control" id="genre_id" name="genre_id"></select>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="producer">Producer</label>
                        <select class="form-control" id="producer_id" name="producer_id"></select>
                    </div>

                    <br>
                    <button type="submit" class="btn btn-dark" id="movieCreateSave">Save</button>
                    <button type="button" class="btn btnoutline-dark" data-dismiss="modal">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</di<v>