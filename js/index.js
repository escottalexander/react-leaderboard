"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var headerURL = "http://www.cufonfonts.com/site/makeimage?type=custom&text=FreeCodeCamp%20Leaderboard&size=48&id=20269";
var recentList = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
var allTimeList = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

var Leaderboard = function (_React$Component) {
  _inherits(Leaderboard, _React$Component);

  function Leaderboard() {
    _classCallCheck(this, Leaderboard);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      posts: []
    };
    return _this;
  }

  Leaderboard.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    axios.get(recentList).then(function (res) {
      _this2.setState({
        posts: res.data
      });
    });
  };

  Leaderboard.prototype.recentOnClick = function recentOnClick() {
    var _this3 = this;

    axios.get(recentList).then(function (res) {
      _this3.setState({
        posts: res.data
      });
    });
  };

  Leaderboard.prototype.allTimeOnClick = function allTimeOnClick() {
    var _this4 = this;

    axios.get(allTimeList).then(function (res) {
      _this4.setState({
        posts: res.data
      });
    });
  };

  Leaderboard.prototype.mapItOut = function mapItOut() {
    var displayList = [];
    var listOfUsers = this.state.posts;
    //console.log(this.state);
    listOfUsers.map(function (item, index) {
      displayList.push('<div className="well col-xs-4 col-xs-offset-4" key=' + index + '><div className="row"><img className="img-rounded img-responsive" style="float: left; margin: 0px 15px 15px 0px;" width="25%" src=' + item.img + ' />Name: ' + item.username + '<br />Recent: ' + item.recent + '<br />  All Time: ' + item.alltime + '</div></div>');
    });
    // console.log(displayList);
    // console.log(listOfUsers);
    return displayList;
  };

  Leaderboard.prototype.render = function render() {
    var _this5 = this;

    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "row text-center" },
        React.createElement("img", { className: "page-header img-rounded", src: headerURL })
      ),
      React.createElement(
        "div",
        { className: "row text-center" },
        React.createElement(
          "button",
          { id: "recent", className: "btn btn-success", onClick: function onClick() {
              return _this5.recentOnClick();
            } },
          "Recent"
        ),
        React.createElement(
          "button",
          { id: "allTime", className: "btn btn-success", onClick: function onClick() {
              return _this5.allTimeOnClick();
            } },
          "All Time"
        )
      ),
      React.createElement(
        "div",
        { id: "display" },
        this.state.posts.map(function (item, index) {
          return React.createElement(
            "div",
            { className: "well col-xs-4 col-xs-offset-4", key: index },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement("img", { className: "img-rounded img-responsive", id: "img", width: "25%", src: item.img }),
              "Name: ",
              item.username,
              React.createElement("br", null),
              "Recent: ",
              item.recent,
              " ",
              React.createElement("br", null),
              "  All Time: ",
              item.alltime
            )
          );
        })
      )
    );
  };

  return Leaderboard;
}(React.Component);

ReactDOM.render(React.createElement(Leaderboard, null), document.getElementById("FCCL"));