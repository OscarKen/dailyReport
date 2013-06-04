// Generated by CoffeeScript 1.6.1
(function() {
  var Model;

  Model = (function() {

    function Model() {}

    Model.login = function(data, callback) {
      return $.post("/login", data, function(response) {
        return callback(response);
      }, "json");
    };

    Model.logout = function(callback) {
      return $.post("/m/logout", function(response) {
        return callback(response);
      }, "json");
    };

    Model.createReport = function(data, callback) {
      return $.post("/write", data, function(response) {
        return callback(response);
      }, "json");
    };

    Model.deleteReport = function(data, callback) {
      return $.post("/delete", data, function(response) {
        return callback(response);
      }, "json");
    };

    Model.getReportNum = function(userId, callback) {
      return $.post("/getreportnum", {
        userId: userId
      }, function(response) {
        return callback(response);
      }, "json");
    };

    Model.getSubordinateUserAndDepartment = function(callback) {
      return $.post("/getsubordinateuseranddepartment", function(response) {
        return callback(response);
      }, "json");
    };

    Model.getReports = function(data, callback) {
      return $.post("/getreports", data, function(response) {
        return callback(response);
      }, "json");
    };

    Model.changePassword = function(data, callback) {
      return $.post("/password", data, function(response) {
        if (response.state === 1) {
          return callback(response);
        }
      }, "json");
    };

    return Model;

  })();

  window.Model = Model;

}).call(this);
