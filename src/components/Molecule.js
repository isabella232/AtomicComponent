/* ==========================================================================
   Molecule

   Molecule Atomic Component

   ========================================================================== */

'use strict';

const AtomicComponent = require( './AtomicComponent' );
const TYPES = require( '../utilities/config' ).TYPES;

const Molecule = AtomicComponent.extend( {
  TYPE: TYPES.MOLECULE,
  CHILD_TYPES: [ TYPES.ATOM ]
} );

module.exports = Molecule;
