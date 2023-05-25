function body(cards) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <div class="p-5 mb-4 rounded-3 bg bg-danger text-center text-white">
        <div class="container-fluid py-1">
            <h1 class="display-5 fw-bold">My Team</h1>
        </div>
    </div>
    <div class="row">
    ${cards}
    </body>

</html>
    `
}
module.exports = body 