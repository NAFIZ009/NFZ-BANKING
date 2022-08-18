import {valueCarrier,valueImplimentor} from './function.js';

function depositeFun(params) {
    return `
    <div class="row justify-content-evenly" style="height:210px">
  <div class="col-sm-5 h-100">
    <div class="card h-100">
      <div class="card-body h-100">
        <label class="fw-bold d-block fs-5">Deposite Now</label>
        <input class="mt-4" placeholder="Enter Deposite Ammount" id='dInput' type="number">
        <p class="text-success mt-3 d-none">Your Deposite is Done</p>
        <button type="button" class="btn btn-secondary d-block mt-3" id='dBtn'>Deposite</button>
      </div>
    </div>
  </div>
  <div class="col-sm-5 h-100">
    <div class="card h-100">
      <div class="card-body h-100">
      <label class="fw-bold d-block fs-5">Current Ammount</label>
      <h4 class="my-4">$<span class="fw-bold">1200</span></h4>
      <p class="text-success">+1.2% Credit For Using <span class="fw-bold text-dark">NFZ</span><span class="text-muted">BAN</span><span class="fw-bold text-dark">KING</span></p>
      </div>
    </div>
  </div>
</div>


<div class="row justify-content-evenly mt-4" style="height:210px">
  <div class="col-sm-5 h-100">
    <div class="card h-100">
      <div class="card-body h-100">
      <label class="fw-bold d-block fs-5">Last Deposite </label>
      <h4 class="my-4">$<span class="fw-bold" id='dAmmountShow'>0</span></h4>
      <p class="text-success">Per Deposite You Can Get +0.5% Credit From <span class="fw-bold text-dark">NFZ</span><span class="text-muted">BAN</span><span class="fw-bold text-dark">KING</span></p>
      </div>
    </div>
  </div>
  <div class="col-sm-5 h-100">
    <div class="card h-100">
      <div class="card-body h-100">
      <label class="fw-bold d-block fs-5">Deposite History</label>
      <table class="table">
      <thead>
        <tr>
          <th scope="col" style="font-size:13px">#</th>
          <th scope="col" style="font-size:13px">Deposite Ammount</th>
          <th scope="col" style="font-size:13px">Before Deposite</th>
          <th scope="col" style="font-size:13px">After Deposite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="py-1">1</th>
          <td class="py-1">$<span>200</span></td>
          <td class="py-1">$<span>200</span></td>
          <td class="py-1">$<span>200</span></td>
        </tr>
        <tr>
          <th class="py-1" scope="row">2</th>
          <td class="py-1">$<span>200</span></td>
          <td class="py-1">$<span>200</span></td>
          <td class="py-1">$<span>200</span></td>
        </tr>
        <tr class="" >
          <th class="py-1" scope="row">3</th>
          <td class="py-1">$<span>200</span></td>
          <td class="py-1">$<span>200</span></td>
          <td class="py-1">$<span>200</span></td>
        </tr>

      </tbody>
    </table>
      </div>
    </div>
  </div>
</div>
    `
}

export {depositeFun};