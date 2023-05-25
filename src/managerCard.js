function managerCard(manager) {
    return `
    
    <div class="col-sm-4 mb-3 mb-sm-0 mt-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email} </li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>`
}
module.exports = managerCard