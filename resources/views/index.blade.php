@extends('layouts.base')
@section('body')
<div class="container" id="content">
    <div class="table-responsive">
        <br>
        <div id="createButton" class="createButton">

        </div>
        
        <table class="table table-striped table-hover" id="tableContent">
            
        </table>
    </div>
</div>
@endsection

{{------------------------------------------------------------------ MOVIE CREATE --------------------------------------------------------------------------}}
<div class="modal fade" id="movieCreateModal" tabindex="-1" aria-labelledby="movieCreate" aria-hidden="true" data-backdrop="false">
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
</div>

{{------------------------------------------------------------------ MOVIE EDIT --------------------------------------------------------------------------}}
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
                    <button type="button" class="btn btnoutline-dark" data-dismiss="modal">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</div>

{{------------------------------------------------------------------ MOVIE DELETE --------------------------------------------------------------------------}}


{{------------------------------------------------------------------ ACTOR CREATE --------------------------------------------------------------------------}}
<div class="modal fade" id="actorCreateModal" tabindex="-1" aria-labelledby="actorCreate" aria-hidden="true" data-backdrop="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h3 class="modal-title" style="color:white">Create New Actor</h3>
            </div>

            <div class="modal-body">
                <form class="actorCreateForm" id="actorCreateForm">
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
                    <button type="submit" class="btn btn-dark" id="actorCreateSave">Save</button>
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</div>

{{------------------------------------------------------------------ ACTOR EDIT --------------------------------------------------------------------------}}
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

{{------------------------------------------------------------------ ACTOR DELETE --------------------------------------------------------------------------}}


{{------------------------------------------------------------------ PRODUCER CREATE --------------------------------------------------------------------------}}
<div class="modal fade" id="producerCreateModal" tabindex="-1" aria-labelledby="producerCreate" aria-hidden="true" data-backdrop="false">
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
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</div>

{{------------------------------------------------------------------ PRODUCER EDIT --------------------------------------------------------------------------}}
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
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</div>
{{------------------------------------------------------------------ PRODUCER EDIT --------------------------------------------------------------------------}}
{{------------------------------------------------------------------ PRODUCER DELETE --------------------------------------------------------------------------}}


{{------------------------------------------------------------------ GENRE CREATE --------------------------------------------------------------------------}}
<div class="modal fade" id="genreCreateModal" tabindex="-1" aria-labelledby="genreCreate" aria-hidden="true" data-backdrop="false">
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
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</div>

{{------------------------------------------------------------------ GENRE EDIT --------------------------------------------------------------------------}}
<div class="modal fade" id="genreEditModal" tabindex="-1" aria-labelledby="genreEdit" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h3 class="modal-title" style="color:white">Edit Genre</h3>
            </div>

            <div class="modal-body">
                <form class="genreEditForm">
                    <div class="form-group">
                        <label for="genre">Genre</label>
                        <input type="text" class="form-control" id="genre">
                    </div>
                    
                    <br>
                    <button type="button" class="btn btn-dark">Save</button>
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</div>

{{------------------------------------------------------------------ GENRE DELETE --------------------------------------------------------------------------}}


{{------------------------------------------------------------------ ROLE CREATE --------------------------------------------------------------------------}}
<div class="modal fade" id="roleCreateModal" tabindex="-1" aria-labelledby="roleCreate" aria-hidden="true" data-backdrop="false">
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
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</div>

{{------------------------------------------------------------------ ROLE EDIT --------------------------------------------------------------------------}}
<div class="modal fade" id="roleEditModal" tabindex="-1" aria-labelledby="roleEdit" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-dark">
                <h3 class="modal-title" style="color:white">Edit Role</h3>
            </div>

            <div class="modal-body">
                <form class="roleEditForm">
                    <div class="form-group">
                        <label for="roles">Roles</label>
                        <input type="text" class="form-control" id="roles">
                    </div>

                    <br>
                    <button type="button" class="btn btn-dark">Save</button>
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</div>

{{------------------------------------------------------------------ ROLE DELETE --------------------------------------------------------------------------}}