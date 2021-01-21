export default function movieModal(){
    return `
        <div class="modal fade" id="movieCreateModal" tabindex="-1" aria-labelledby="movieCreate" aria-hidden="true">
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
                            <button type="button" class="btn btnoutline-dark" data-bs-dismiss="modal">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="movieEditModal" tabindex="-1" aria-labelledby="movieEditModal" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h3 class="modal-title" style="color:white">Edit Movie</h3>
                    </div>
        
                    <div class="modal-body">
                        <form class="movieEditForm" id="movieEditForm">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control movieTitle" id="title" name="title">
                            </div>
                            
                            <div class="form-group">
                                <label for="year">Year</label>
                                <input type="text" class="form-control movieYear" id="year" name="year">
                            </div>
                            
                            <div class="form-outline">
                                <label class="form-label" for="plot">Plot</label>
                                <textarea class="form-control moviePlot" id="plot" name="plot" rows="4"></textarea>
                            </div>
        
                            <div class="form-group col-md-6">
                                <label for="genre">Genre</label>
                                <select class="form-control movieGenres" id="genres" name="genre_id"></select>
                            </div>
        
                            <div class="form-group col-md-6">
                                <label for="producer">Producer</label>
                                <select class="form-control movieProducers" id="producers" name="producer_id"></select>
                            </div>
        
                            <br>
                            <button type="submit" class="btn btn-dark" id="movieEditSave">Save</button>
                            <button type="button" class="btn btnoutline-dark" data-bs-dismiss="modal">Cancel hotdog </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}