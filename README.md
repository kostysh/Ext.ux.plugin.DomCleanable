Ext.ux.plugin.DomCleanable
==========================

Sencha Touch plugin which helps to automatically clean up DOM from hidden components  

Author: Constantine V. Smirnov, kostysh(at)gmail.com, http://mindsaur.com    
License: GNU GPL v3.0    
Current version: 1.0    
ST2 version: 2.1.0 

Requires:
=========
- Sencha Touch 2.0  

Versions:
=========
- 1.0: Initial release  

Features:
=========
- Simple config for plugin (just add it to 'plugins' config section)
- short link to plugin in component object (domCleanable)
- 'cleared' event. Lets to know when the component was removed from its parent  

Usage:
======

- Place ux to your application /src folder;
- Configure custom path for custom components:

<!-- language: lang-js -->
            
    Ext.Loader.setPath({
        'Ext.ux': '../src/ux'
    });

- Plugin configuration:

<!-- language: lang-js -->
            
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

- 'cleared' event usage:

<!-- language: lang-js -->
            
    componentObject.domCleanable.on({
        cleared: function(cmp, parent) {
            console.log('Component: ' + cmp.getId() + ' was removed from ' + parent.getId() + ' DOM');
        }
    });


