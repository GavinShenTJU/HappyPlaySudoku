/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;//require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.sudokumsg = (function() {

    /**
     * Namespace sudokumsg.
     * @exports sudokumsg
     * @namespace
     */
    var sudokumsg = {};

    /**
     * MsgCode enum.
     * @name sudokumsg.MsgCode
     * @enum {number}
     * @property {number} USER_GET_CHESS_CMD=0 USER_GET_CHESS_CMD value
     * @property {number} USER_GET_CHESS_RESULT=1 USER_GET_CHESS_RESULT value
     */
    sudokumsg.MsgCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "USER_GET_CHESS_CMD"] = 0;
        values[valuesById[1] = "USER_GET_CHESS_RESULT"] = 1;
        return values;
    })();

    /**
     * ChallengeLevel enum.
     * @name sudokumsg.ChallengeLevel
     * @enum {number}
     * @property {number} SIMPLE=0 SIMPLE value
     * @property {number} MEDIUM=1 MEDIUM value
     * @property {number} DIFFICULTY=2 DIFFICULTY value
     */
    sudokumsg.ChallengeLevel = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SIMPLE"] = 0;
        values[valuesById[1] = "MEDIUM"] = 1;
        values[valuesById[2] = "DIFFICULTY"] = 2;
        return values;
    })();

    sudokumsg.UserGetChessCmd = (function() {

        /**
         * Properties of a UserGetChessCmd.
         * @memberof sudokumsg
         * @interface IUserGetChessCmd
         * @property {number|null} [userId] UserGetChessCmd userId
         * @property {number|null} [orderNum] UserGetChessCmd orderNum
         * @property {sudokumsg.ChallengeLevel|null} [challLevel] UserGetChessCmd challLevel
         */

        /**
         * Constructs a new UserGetChessCmd.
         * @memberof sudokumsg
         * @classdesc Represents a UserGetChessCmd.
         * @implements IUserGetChessCmd
         * @constructor
         * @param {sudokumsg.IUserGetChessCmd=} [properties] Properties to set
         */
        function UserGetChessCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserGetChessCmd userId.
         * @member {number} userId
         * @memberof sudokumsg.UserGetChessCmd
         * @instance
         */
        UserGetChessCmd.prototype.userId = 0;

        /**
         * UserGetChessCmd orderNum.
         * @member {number} orderNum
         * @memberof sudokumsg.UserGetChessCmd
         * @instance
         */
        UserGetChessCmd.prototype.orderNum = 0;

        /**
         * UserGetChessCmd challLevel.
         * @member {sudokumsg.ChallengeLevel} challLevel
         * @memberof sudokumsg.UserGetChessCmd
         * @instance
         */
        UserGetChessCmd.prototype.challLevel = 0;

        /**
         * Creates a new UserGetChessCmd instance using the specified properties.
         * @function create
         * @memberof sudokumsg.UserGetChessCmd
         * @static
         * @param {sudokumsg.IUserGetChessCmd=} [properties] Properties to set
         * @returns {sudokumsg.UserGetChessCmd} UserGetChessCmd instance
         */
        UserGetChessCmd.create = function create(properties) {
            return new UserGetChessCmd(properties);
        };

        /**
         * Encodes the specified UserGetChessCmd message. Does not implicitly {@link sudokumsg.UserGetChessCmd.verify|verify} messages.
         * @function encode
         * @memberof sudokumsg.UserGetChessCmd
         * @static
         * @param {sudokumsg.IUserGetChessCmd} message UserGetChessCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGetChessCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.orderNum != null && Object.hasOwnProperty.call(message, "orderNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.orderNum);
            if (message.challLevel != null && Object.hasOwnProperty.call(message, "challLevel"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.challLevel);
            return writer;
        };

        /**
         * Encodes the specified UserGetChessCmd message, length delimited. Does not implicitly {@link sudokumsg.UserGetChessCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sudokumsg.UserGetChessCmd
         * @static
         * @param {sudokumsg.IUserGetChessCmd} message UserGetChessCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGetChessCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserGetChessCmd message from the specified reader or buffer.
         * @function decode
         * @memberof sudokumsg.UserGetChessCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sudokumsg.UserGetChessCmd} UserGetChessCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGetChessCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sudokumsg.UserGetChessCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.orderNum = reader.uint32();
                    break;
                case 3:
                    message.challLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserGetChessCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sudokumsg.UserGetChessCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sudokumsg.UserGetChessCmd} UserGetChessCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGetChessCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserGetChessCmd message.
         * @function verify
         * @memberof sudokumsg.UserGetChessCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserGetChessCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.orderNum != null && message.hasOwnProperty("orderNum"))
                if (!$util.isInteger(message.orderNum))
                    return "orderNum: integer expected";
            if (message.challLevel != null && message.hasOwnProperty("challLevel"))
                switch (message.challLevel) {
                default:
                    return "challLevel: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a UserGetChessCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sudokumsg.UserGetChessCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sudokumsg.UserGetChessCmd} UserGetChessCmd
         */
        UserGetChessCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.sudokumsg.UserGetChessCmd)
                return object;
            var message = new $root.sudokumsg.UserGetChessCmd();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.orderNum != null)
                message.orderNum = object.orderNum >>> 0;
            switch (object.challLevel) {
            case "SIMPLE":
            case 0:
                message.challLevel = 0;
                break;
            case "MEDIUM":
            case 1:
                message.challLevel = 1;
                break;
            case "DIFFICULTY":
            case 2:
                message.challLevel = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a UserGetChessCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sudokumsg.UserGetChessCmd
         * @static
         * @param {sudokumsg.UserGetChessCmd} message UserGetChessCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserGetChessCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.orderNum = 0;
                object.challLevel = options.enums === String ? "SIMPLE" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.orderNum != null && message.hasOwnProperty("orderNum"))
                object.orderNum = message.orderNum;
            if (message.challLevel != null && message.hasOwnProperty("challLevel"))
                object.challLevel = options.enums === String ? $root.sudokumsg.ChallengeLevel[message.challLevel] : message.challLevel;
            return object;
        };

        /**
         * Converts this UserGetChessCmd to JSON.
         * @function toJSON
         * @memberof sudokumsg.UserGetChessCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserGetChessCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserGetChessCmd;
    })();

    sudokumsg.UserGetChessResult = (function() {

        /**
         * Properties of a UserGetChessResult.
         * @memberof sudokumsg
         * @interface IUserGetChessResult
         * @property {number|null} [userId] UserGetChessResult userId
         * @property {Array.<number>|null} [chessArray] UserGetChessResult chessArray
         */

        /**
         * Constructs a new UserGetChessResult.
         * @memberof sudokumsg
         * @classdesc Represents a UserGetChessResult.
         * @implements IUserGetChessResult
         * @constructor
         * @param {sudokumsg.IUserGetChessResult=} [properties] Properties to set
         */
        function UserGetChessResult(properties) {
            this.chessArray = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserGetChessResult userId.
         * @member {number} userId
         * @memberof sudokumsg.UserGetChessResult
         * @instance
         */
        UserGetChessResult.prototype.userId = 0;

        /**
         * UserGetChessResult chessArray.
         * @member {Array.<number>} chessArray
         * @memberof sudokumsg.UserGetChessResult
         * @instance
         */
        UserGetChessResult.prototype.chessArray = $util.emptyArray;

        /**
         * Creates a new UserGetChessResult instance using the specified properties.
         * @function create
         * @memberof sudokumsg.UserGetChessResult
         * @static
         * @param {sudokumsg.IUserGetChessResult=} [properties] Properties to set
         * @returns {sudokumsg.UserGetChessResult} UserGetChessResult instance
         */
        UserGetChessResult.create = function create(properties) {
            return new UserGetChessResult(properties);
        };

        /**
         * Encodes the specified UserGetChessResult message. Does not implicitly {@link sudokumsg.UserGetChessResult.verify|verify} messages.
         * @function encode
         * @memberof sudokumsg.UserGetChessResult
         * @static
         * @param {sudokumsg.IUserGetChessResult} message UserGetChessResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGetChessResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.chessArray != null && message.chessArray.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.chessArray.length; ++i)
                    writer.uint32(message.chessArray[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified UserGetChessResult message, length delimited. Does not implicitly {@link sudokumsg.UserGetChessResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sudokumsg.UserGetChessResult
         * @static
         * @param {sudokumsg.IUserGetChessResult} message UserGetChessResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGetChessResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserGetChessResult message from the specified reader or buffer.
         * @function decode
         * @memberof sudokumsg.UserGetChessResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sudokumsg.UserGetChessResult} UserGetChessResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGetChessResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sudokumsg.UserGetChessResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    if (!(message.chessArray && message.chessArray.length))
                        message.chessArray = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.chessArray.push(reader.uint32());
                    } else
                        message.chessArray.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserGetChessResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sudokumsg.UserGetChessResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sudokumsg.UserGetChessResult} UserGetChessResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGetChessResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserGetChessResult message.
         * @function verify
         * @memberof sudokumsg.UserGetChessResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserGetChessResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.chessArray != null && message.hasOwnProperty("chessArray")) {
                if (!Array.isArray(message.chessArray))
                    return "chessArray: array expected";
                for (var i = 0; i < message.chessArray.length; ++i)
                    if (!$util.isInteger(message.chessArray[i]))
                        return "chessArray: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a UserGetChessResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sudokumsg.UserGetChessResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sudokumsg.UserGetChessResult} UserGetChessResult
         */
        UserGetChessResult.fromObject = function fromObject(object) {
            if (object instanceof $root.sudokumsg.UserGetChessResult)
                return object;
            var message = new $root.sudokumsg.UserGetChessResult();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.chessArray) {
                if (!Array.isArray(object.chessArray))
                    throw TypeError(".sudokumsg.UserGetChessResult.chessArray: array expected");
                message.chessArray = [];
                for (var i = 0; i < object.chessArray.length; ++i)
                    message.chessArray[i] = object.chessArray[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a UserGetChessResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sudokumsg.UserGetChessResult
         * @static
         * @param {sudokumsg.UserGetChessResult} message UserGetChessResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserGetChessResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.chessArray = [];
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.chessArray && message.chessArray.length) {
                object.chessArray = [];
                for (var j = 0; j < message.chessArray.length; ++j)
                    object.chessArray[j] = message.chessArray[j];
            }
            return object;
        };

        /**
         * Converts this UserGetChessResult to JSON.
         * @function toJSON
         * @memberof sudokumsg.UserGetChessResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserGetChessResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserGetChessResult;
    })();

    return sudokumsg;
})();

module.exports = $root;
