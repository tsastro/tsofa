/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
import { TSOFAException } from "./TSOFAException.js";
    /**
     * Various forms of illegal parameters are reported with this execption.
     * .
     * @author Paul Harrison (paul.harrison@manchester.ac.uk) 21 Nov 2011
     * @version $Revision$ $date$
     * @param {string} message
     * @param {number} status
     * @class
     * @extends org.jastronomy.TSOFA.TSOFAException
     */
    export class TSOFAIllegalParameter extends TSOFAException {
        /**
         * Comment for <code>serialVersionUID</code>
         */
        static __org_jastronomy_jsofa_TSOFAIllegalParameter_serialVersionUID: number = 4164536110692125140;

        public constructor(message: string, status: number) {
            super(message, status);
            (<any>Object).setPrototypeOf(this, TSOFAIllegalParameter.prototype);
        }
    }
    TSOFAIllegalParameter["__class"] = "org.jastronomy.jsofa.TSOFAIllegalParameter";



