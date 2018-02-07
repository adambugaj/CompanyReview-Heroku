<form>
  <p>English required</p>
    <input
      type="radio"
      name="english-required"
      value={this.state.q3}
      onChange={this.onChangeQ3}
      checked
    /> Yes
    <input
      type="radio"
      name="english-not-required"
      value={this.state.q3}
      onChange={this.onChangeQ3}
    /> No
  </form>
  <form>
  <p>German required</p>
  <input
    type="radio"
    name="english-required"
    value={this.state.q3}
    onChange={this.onChangeQ3}
    checked
  /> Yes
  <input
    type="radio"
    name="english-not-required"
    value={this.state.q3}
    onChange={this.onChangeQ3}
  /> No
  </form>
