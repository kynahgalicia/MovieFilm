<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MovieFilm</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"/> 
</head> 

<style>
    .error{
        color:red;
        font-style: italic;
        font-size: .8rem;
    }
</style>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand link" href="#movie" data-id="movie">MovieFilm</a>
    
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link link" href="#" data-id="actor">Actor</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link  link" href="#" data-id="producer">Producer</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link  link" href="#" data-id="genre">Genre</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link  link" href="#" data-id="role">Role</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    @yield('body')

    <div id="paginate" class="container mx-auto"></div>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>

   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

    <script src="https://kit.fontawesome.com/b4972b1dcb.js" crossorigin="anonymous"></script>

    <script type="text/javascript" src="{{ URL::asset('js/main.js')}}"></script>
    {{-- <script type="text/javascript" src="{{ URL::asset('js/app.js')}}"></script> --}}
</body>
</html>