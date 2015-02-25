var Ticket = React.createClass({
  displayName: "Ticket",
  getInitialState: function() {
    return {
      ticket: this.props.ticket
    };
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    var tickets = this.props.getTickets();

    var changed = this.state.ticket !== tickets[this.props.index];
    if(changed){
      this.state.ticket = tickets[this.props.index];
    }
    return changed;
  },
  render: function() {

    return React.createElement("div", {className: "ticket"},
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test0)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test1)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test2)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test3)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test4)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test5)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test6)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test7)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test8)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test9)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test10)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test11)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test12)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test13)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test14)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test15)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test16)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test17)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test18)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test19)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test20)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test21)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test22)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test23)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test24)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test25)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test26)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test27)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test28)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test29)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test30)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test31)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test32)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test33)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test34)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test35)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test36)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test37)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test38)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test39)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test40)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test41)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test42)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test43)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test44)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test45)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test46)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test47)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test48)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test49)))),
React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, this.state.ticket.test50))))

)


    ;
  }
});
