@extends('layouts.base')
@section('body')

<div class="container">
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"  >add <span  class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
    </a>

    @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button> 
            <strong>{{ $message }}</strong>
        </div>
    @endif

    <a href="{{Auth::logout()}}">Logout</a>

    <div  class="table-responsive">
        <table id="ctable" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Title</th>
                    <th>lname</th>
                    <th>fname</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Restore</th>
                </tr>
            </thead>
            
            <tbody id="cbody">
            </tbody>

        </table>
    </div>
</div>

<div class="modal fade" id="myModal" role="dialog" style="display:none">
    <div class="modal-dialog modal-lg" >
        <!-- Modal content-->
        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Create new customer</h4>
            </div>

            <div class="modal-body">
                {{-- <form id="cform" method="post" action="{{route('customer.store')}}" > --}}
                <form id="cform" method="post" action="#" >
                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                <div class="form-group">
                    <label for="title" class="control-label">Title</label>
                    <input type="text" class="form-control" id="titulo" name="title" value="{{old('title')}}" >
                    @if($errors->has('title'))
                        <small>{{ $errors->first('title') }}</small>
                    @endif
                </div> 

                <div class="form-group"> 
                    <label for="lname" class="control-label">last name</label>
                    <input type="text" class="form-control " id="lname" name="lname" value="{{old('lname')}}" ></text>
                    @if($errors->has('lname'))
                        <small>{{ $errors->first('lname') }}</small>
                    @endif
                </div> 

                <div class="form-group"> 
                    <label for="fname" class="control-label">First Name</label>
                    <input type="text" class="form-control " id="fname" name="fname" value="{{old('fname')}}">
                    @if($errors->has('fname'))
                        <small>{{ $errors->first('fname') }}</small>
                    @endif
                </div>

                <div class="form-group"> 
                    <label for="address" class="control-label">Address</label>
                    <input type="text" class="form-control" id="address" name="addressline" value="{{old('addressline')}}">
                    @if($errors->has('addressline'))
                        <small>{{ $errors->first('addressline') }}</small>
                    @endif
                </div>

                <div class="form-group"> 
                    <label for="town" class="control-label">Town</label>
                    <input type="text" class="form-control" id="town" name="town" value="{{old('town')}}">
                    @if($errors->has('town'))
                        <small>{{ $errors->first('town') }}</small>
                    @endif
                </div>

                <div class="form-group"> 
                    <label for="zipcode" class="control-label">Zip code</label>
                    <input type="text" class="form-control" id="zipcode" name="zipcode" value="{{old('zipcode')}}">
                    @if($errors->has('zipcode'))
                        <small>{{ $errors->first('zipcode') }}</small>
                    @endif
                </div>

                <div class="form-group"> 
                    <label for="phone" class="control-label">Phone</label>
                    <input type="text" class="form-control" id="phone" name="phone" value="{{old('phone')}}">
                    @if($errors->has('phone'))
                <small>{{ $errors->first('phone') }}</small>
                @endif
                </div>
            </div>

            </form> 
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button id="myFormSubmit" type="submit" class="btn btn-primary">Save</button>
        </div>

    </div>
</div>
</div>
@endsection

<div class="modal fade" id="movieCreate" tabindex="-1" aria-labelledby="movieCreate" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Create New Movie</h3>
            </div>

            <div class="modal-body">
                <form class="movieCreateForm>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title">
                    </div>
                    
                    <div class="form-group">
                        <label for="year">Year</label>
                        <input type="text" class="form-control" id="year">
                    </div>
                    
                    <div class="form-group">
                        <label for="plot">Plot</label>
                        <input type="text" class="form-control" id="plot">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>