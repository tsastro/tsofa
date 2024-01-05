/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
 
 import { TSOFAException } from "./TSOFAException";
    /**
     * Exception reporting some form of convergence failure in an algorithm.
     * @param {string} message
     * @param {number} status
     * @class
     * @extends TSOFAException
     */
    export class TSOFAFailedConvergenceException extends TSOFAException {
        /**
         * Comment for <code>serialVersionUID</code>
         */
        static __org_jastronomy_TSOFA_TSOFAFailedConvergenceException_serialVersionUID: number = 4417087001300889769;

        public constructor(message: string, status: number) {
            super(message, status);
            (<any>Object).setPrototypeOf(this, TSOFAFailedConvergenceException.prototype);
        }
    }
    TSOFAFailedConvergenceException["__class"] = "org.jastronomy.TSOFA.TSOFAFailedConvergenceException";



