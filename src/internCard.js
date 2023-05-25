function internCard(intern) {
    return `
    <div class="col-sm-4 mt-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email} </li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>
    `
}
module.exports = internCard