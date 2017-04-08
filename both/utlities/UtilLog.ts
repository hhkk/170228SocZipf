    /**
 * Created by Owner on 10/30/2016.
 */


export class UtilLog {

    public static logError(e, alertbool:boolean):string {
        let r = '';
        if (e.message) {
            r += e.message;
        }
        if (e.stack) {
            r += ' | stack: ' + e.stack;
        }
        if (alertbool)
            alert ('hbkerror:' + r);
        console.log('hbkerror:' + r);
        return r;
    }


    // export module b
    // {
    //     export enum c
    // {
    //     C1 = 1,
    //     C2 = 2,
    //     C3 = 3,
    // }
    // }
    //
    //

    // static class SEVERITY = {
    //     DEBUG : {name: "DEBUG", cd: "D"},
    //     INFO  : {name: "INFO", cd: "W"},
    //     WARN  : {name: "WARN", cd: "I"},
    //     ERROR : {name: "ERROR", cd: "E"}
    // };

        // works: public static log(s):void {
        public static log(s):void {
            s = 'UTILLOG:' + s ;
        if (Meteor.isServer) {
            console.log (s);
        } else {
            //eval ("alert ('============================= eval in utd2s.methods.ts must be client');");
            alert (s);
        }
    }
}
