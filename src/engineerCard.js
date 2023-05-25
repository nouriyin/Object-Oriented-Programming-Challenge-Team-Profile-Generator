function engineerCard(engineer) {
    return `
    <div class="col-sm-4 mt-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${engineer.name}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: ${engineer.email} </li>
                        <li class="list-group-item">Github: ${engineer.github}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}
module.exports = engineerCard