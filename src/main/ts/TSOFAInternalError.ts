/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
 import { TSOFAException } from "./TSOFAException.js";
    /**
     * Exception signalling a internal error.
     * .
     * @author Paul Harrison (paul.harrison@manchester.ac.uk) 21 Nov 2011
     * @version $Revision$ $date$
     * @param {string} message
     * @param {number} status
     * @class
     * @extends org.jastronomy.jsofa.TSOFAException
     */
    export class TSOFAInternalError extends TSOFAException {
        /**
         * Comment for <code>serialVersionUID</code>
         */
        static __org_jastronomy_jsofa_TSOFAInternalError_serialVersionUID: number = 6067803703985219165;

        public constructor(message: string, status: number) {
            super(message, status);
            (<any>Object).setPrototypeOf(this, TSOFAInternalError.prototype);
        }
    }
    TSOFAInternalError["__class"] = "org.jastronomy.jsofa.TSOFAInternalError";


