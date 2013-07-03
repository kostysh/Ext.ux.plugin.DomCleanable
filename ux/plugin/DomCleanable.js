/**
 * @filename DomCleanable.js
 *
 * @name Sencha touch DOM cleaner plugin for components
 * @fileOverview Plugin which helps to automatically clean up DOM from hidden components 
 *
 * @author Constantine V. Smirnov kostysh(at)gmail.com
 * @date 20130701
 * @version 1.0
 * @license GNU GPL v3.0
 *
 * Usage:
 
 //Plugin config:
 items: [
            {
                xtype: 'container',
                plugins: [
                    {
                        xclass: 'Ext.ux.plugin.DomCleanable'
                    }
                ]
            }
        ]
 
 //"cleared" event usage:
 componentObject.domCleanable.on({
    cleared: function(cmp, parent) {
        console.log('Component: ' + cmp.getId() + ' was removed from ' + parent.getId() + ' DOM');
    }
 });
 
 *
 */

/**
 * @event cleared
 * Fired when a new component removed from DOM of its parent
 * @param {Object} cleared component object
 * @param {Object} parent container object
 */

Ext.define('Ext.ux.plugin.DomCleanable', {
    mixins: ['Ext.mixin.Observable'],
    
    /**
     * Plugin initialization
     * @private
     */
    init: function(cmp) {
        var me = this;
        
        if (cmp && 
            Ext.isObject(cmp) && 
            cmp.isComponent && 
            cmp.isObservable && 
            cmp.isContainer) {
            
            cmp.domCleanable = me;//make short link to plugin in component obj
            cmp.onAfter('hide', me.remove, me);
        }
    },
    
    /**
     * @private
     */
    remove: function(cmp) {
        var me = this;
        
        if (cmp.hasParent()) {
            var parent = cmp.getParent();
            
            parent.on({
                scope: me,
                single: true,
                remove: function() {
                    me.fireEvent('cleared', cmp, parent)
                }
            });
            
            parent.remove(cmp, false);
        }
    }
});