module.exports = {
   /**
    * Suma de dos numeros 
    * @example
    *  param1  = 1 , patram2 = 5  => resultado 6
    * @param {*} param1 
    * @param {*} patram2 
    * @returns 
    */
    suma: function (param1, patram2) {
        
        return (this.esNumero( param1 , patram2)? param1 + patram2 : this.mensajeError());
    },
       /**
        * REsta de dos numeros 
    * @example
    *  param1  = 1 , patram2 = 5  => resultado 4
    * @param {*} param1 
    * @param {*} patram2 
    * @returns 
    */
    resta: function (param1, patram2) {
        
        return (this.esNumero( param1 , patram2)? param1 - patram2 : this.mensajeError());
    },
       /**
        * multi de dos numeros 
    * @example
    *  param1  = 1 , patram2 = 5  => resultado 5
    * @param {*} param1 
    * @param {*} patram2 
    * @returns 
    */
    multi: function (param1, patram2) {
        
        return (this.esNumero( param1 , patram2)? param1 * patram2 : this.mensajeError());
    },
       /**
        * division de dos numeros 
    * @example
    *  param1  = 5 , patram2 = 2  => resultado 2.5
    * @param {*} param1 
    * @param {*} patram2 
    * @returns 
    */
    divi: function (param1, patram2) {
        
        return (this.esNumero( param1 , patram2)? param1 / patram2 : this.mensajeError());
    },
    /**
     * mensaje de error que se ejecuta cuando no tengamos valores numericos 
     */
    mensajeError: function () {
        console.log('un valor o los dos valores no son numericos ');
    },
    /**
     * Comprueba que son valores numericos 
     * @param {*} param1 
     * @param {*} param2 
     * @returns 
     */
    esNumero:  function (param1,param2) {
        if (typeof param1 != 'number' || typeof param2 != 'number' ) {
            return false;
        }
        return true
    }
}