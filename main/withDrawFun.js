function withDrawFun(params) {
    return `
    <div class="row justify-content-evenly" style="height:210px">
  <div class="col-sm-5 h-100">
    <div class="card h-100">
      <div class="card-body h-100">
        <label class="fw-bold d-block fs-5">Withdraw Now</label>
        <input class="mt-4" placeholder="Enter Withdraw Ammount" id='wInput' type="number">
        <p class="text-danger mt-3 d-none">You Don't Have Enough Balance</p>
        <p class="text-success mt-3 d-none">Your Withdraw is Done</p>
        <button type="button" class="btn btn-secondary d-block mt-3" id='wBtn'>Withdraw</button>
      </div>
    </div>
  </div>

  <div class="col-sm-5 h-100">
  <div class="card h-100">
    <div class="card-body h-100">
    <label class="fw-bold d-block fs-5">Last Withdraw </label>
    <h4 class="my-4">$<span class="fw-bold" id='wAmmountShow'>0</span></h4>
    <p class="text-success">Per Withdraw You Can Get +0.22% Credit From <span class="fw-bold text-dark">NFZ</span><span class="text-muted">BAN</span><span class="fw-bold text-dark">KING</span></p>
    </div>
  </div>
</div>
</div>


<div class="row justify-content-evenly mt-4" style="height:210px">
  <div class="col-sm-5 h-100">
    <div class="card h-100">
      <div class="card-body h-100">
      <label class="fw-bold d-block fs-5">Withdraw History</label>
      <table class="table">
      <thead>
        <tr>
          <th scope="col" style="font-size:13px">#</th>
          <th scope="col" style="font-size:13px">Withdraw Ammount</th>
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
    `
}
export {withDrawFun};