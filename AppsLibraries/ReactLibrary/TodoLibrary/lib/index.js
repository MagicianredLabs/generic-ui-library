'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var TodoListFooterWrapper = _ref => {
  var {
    data
  } = _ref;
  return /*#__PURE__*/React__default['default'].createElement("footer", {
    className: "footer"
  }, data.length > 0 && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "todo-count"
  }, /*#__PURE__*/React__default['default'].createElement("strong", null, data.length), data.length === 1 ? 'item' : 'items', " left"));
};

TodoListFooterWrapper.propTypes = {
  data: PropTypes__default['default'].array
};

var TodoListHeaderWrapper = _ref => {
  var {
    onAdd
  } = _ref;
  var [value, setValue] = React.useState('');

  var handleChangeEvent = event => {
    setValue(event.target.value);
  };

  var handleKeyPress = event => {
    if (event.key === 'Enter') {
      onAdd(value);
      setValue('');
    }
  };

  return /*#__PURE__*/React__default['default'].createElement("header", {
    className: "header"
  }, /*#__PURE__*/React__default['default'].createElement("h1", null, "Todos"), /*#__PURE__*/React__default['default'].createElement("input", {
    className: "new-todo",
    placeholder: "What needs to be done?",
    autoFocus: "",
    value: value,
    onChange: handleChangeEvent,
    onKeyUp: handleKeyPress
  }));
};

TodoListHeaderWrapper.propTypes = {
  data: PropTypes__default['default'].object,
  onAdd: PropTypes__default['default'].func
};

var TodoListItemWrapper = _ref => {
  var {
    data,
    onToggleComplete,
    onRemove
  } = _ref;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "view"
  }, /*#__PURE__*/React__default['default'].createElement("input", {
    className: "toggle",
    type: "checkbox",
    onClick: () => onToggleComplete(data),
    value: data.complete
  }), /*#__PURE__*/React__default['default'].createElement("label", null, data.title), /*#__PURE__*/React__default['default'].createElement("button", {
    className: "destroy",
    onClick: () => onRemove(data)
  }));
};

TodoListItemWrapper.propTypes = {
  data: PropTypes__default['default'].object,
  onToggleComplete: PropTypes__default['default'].func,
  onRemove: PropTypes__default['default'].func
};

var TodoListWrapper = _ref => {
  var {
    data,
    onToggleComplete,
    onRemove
  } = _ref;
  return /*#__PURE__*/React__default['default'].createElement("section", {
    className: "main"
  }, /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "todo-list"
  }, data.map((item, index) => /*#__PURE__*/React__default['default'].createElement("li", {
    key: index,
    className: "".concat(item.completed ? "completed" : "")
  }, /*#__PURE__*/React__default['default'].createElement(TodoListItemWrapper, {
    data: item,
    onToggleComplete: onToggleComplete,
    onRemove: onRemove
  })))));
};

TodoListWrapper.propTypes = {
  data: PropTypes__default['default'].array,
  onToggleComplete: PropTypes__default['default'].func,
  onRemove: PropTypes__default['default'].func
};

exports.TodoListFooterWrapper = TodoListFooterWrapper;
exports.TodoListHeaderWrapper = TodoListHeaderWrapper;
exports.TodoListItemWrapper = TodoListItemWrapper;
exports.TodoListWrapper = TodoListWrapper;
//# sourceMappingURL=index.js.map
