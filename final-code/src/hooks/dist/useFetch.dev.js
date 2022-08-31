"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFetch = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useFetch = function useFetch(url) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      blog = _useState4[0],
      setBlogs = _useState4[1];

  var fetchData = (0, _react.useCallback)(function _callee() {
    var response, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(url));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context.sent;
            setBlogs(data);
            setLoading(false);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  }, [url]);
  (0, _react.useEffect)(function () {
    fetchData();
  }, [fetchData, url]);
  return {
    loading: loading,
    blog: blog,
    setLoading: setLoading
  };
}; // const fetchData = useCallback(async () => {
//     try {
//       setLoading(true)
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: '7f4f00aa-e7f7-4dad-a289-ba6eb2dfa03a',
//         },
//         body: JSON.stringify({ query }),
//       })
//       if (!response.ok) {
//         let msg = `There is a problem while fetching the data
//           ${response.status} ${response.statusText}`
//         throw new Error(msg)
//       } else {
//         const ApiResponse = await response.json()
//         setMyBlog(ApiResponse.data.user.publication.posts)
//         setUsers(ApiResponse.data.user)
//         setLoading(false)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }, [url])


exports.useFetch = useFetch;