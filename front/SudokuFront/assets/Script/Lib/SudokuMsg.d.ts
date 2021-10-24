//import * as $protobuf from "protobufjs";
/** Namespace sudokumsg. */
//declare global {}
export namespace sudokumsg {

    /** MsgCode enum. */
    enum MsgCode {
        USER_GET_CHESS_CMD = 0,
        USER_GET_CHESS_RESULT = 1
    }

    /** ChallengeLevel enum. */
    enum ChallengeLevel {
        SIMPLE = 0,
        MEDIUM = 1,
        DIFFICULTY = 2
    }

    /** Properties of a UserGetChessCmd. */
    interface IUserGetChessCmd {

        /** UserGetChessCmd userId */
        userId?: (number|null);

        /** UserGetChessCmd orderNum */
        orderNum?: (number|null);

        /** UserGetChessCmd challLevel */
        challLevel?: (sudokumsg.ChallengeLevel|null);
    }

    /** Represents a UserGetChessCmd. */
    class UserGetChessCmd implements IUserGetChessCmd {

        /**
         * Constructs a new UserGetChessCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: sudokumsg.IUserGetChessCmd);

        /** UserGetChessCmd userId. */
        public userId: number;

        /** UserGetChessCmd orderNum. */
        public orderNum: number;

        /** UserGetChessCmd challLevel. */
        public challLevel: sudokumsg.ChallengeLevel;

        /**
         * Creates a new UserGetChessCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserGetChessCmd instance
         */
        public static create(properties?: sudokumsg.IUserGetChessCmd): sudokumsg.UserGetChessCmd;

        /**
         * Encodes the specified UserGetChessCmd message. Does not implicitly {@link sudokumsg.UserGetChessCmd.verify|verify} messages.
         * @param message UserGetChessCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sudokumsg.IUserGetChessCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserGetChessCmd message, length delimited. Does not implicitly {@link sudokumsg.UserGetChessCmd.verify|verify} messages.
         * @param message UserGetChessCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sudokumsg.IUserGetChessCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserGetChessCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetChessCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sudokumsg.UserGetChessCmd;

        /**
         * Decodes a UserGetChessCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserGetChessCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sudokumsg.UserGetChessCmd;

        /**
         * Verifies a UserGetChessCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserGetChessCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetChessCmd
         */
        public static fromObject(object: { [k: string]: any }): sudokumsg.UserGetChessCmd;

        /**
         * Creates a plain object from a UserGetChessCmd message. Also converts values to other types if specified.
         * @param message UserGetChessCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sudokumsg.UserGetChessCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetChessCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGetChessResult. */
    interface IUserGetChessResult {

        /** UserGetChessResult userId */
        userId?: (number|null);

        /** UserGetChessResult chessArray */
        chessArray?: (number[]|null);
    }

    /** Represents a UserGetChessResult. */
    class UserGetChessResult implements IUserGetChessResult {

        /**
         * Constructs a new UserGetChessResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: sudokumsg.IUserGetChessResult);

        /** UserGetChessResult userId. */
        public userId: number;

        /** UserGetChessResult chessArray. */
        public chessArray: number[];

        /**
         * Creates a new UserGetChessResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserGetChessResult instance
         */
        public static create(properties?: sudokumsg.IUserGetChessResult): sudokumsg.UserGetChessResult;

        /**
         * Encodes the specified UserGetChessResult message. Does not implicitly {@link sudokumsg.UserGetChessResult.verify|verify} messages.
         * @param message UserGetChessResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sudokumsg.IUserGetChessResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserGetChessResult message, length delimited. Does not implicitly {@link sudokumsg.UserGetChessResult.verify|verify} messages.
         * @param message UserGetChessResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sudokumsg.IUserGetChessResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserGetChessResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGetChessResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sudokumsg.UserGetChessResult;

        /**
         * Decodes a UserGetChessResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserGetChessResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sudokumsg.UserGetChessResult;

        /**
         * Verifies a UserGetChessResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserGetChessResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGetChessResult
         */
        public static fromObject(object: { [k: string]: any }): sudokumsg.UserGetChessResult;

        /**
         * Creates a plain object from a UserGetChessResult message. Also converts values to other types if specified.
         * @param message UserGetChessResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sudokumsg.UserGetChessResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGetChessResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
