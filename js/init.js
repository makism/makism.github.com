var ToolTips = new Array (
    {
        "title": "leaf framework",
        "text": "Leaf framework is the first greek open source mvc<br/>framework written in php5.<br/>Following the trends, it provides url routing, hooking subsystem, application invoker etc.<br/><br/><small>http://sourceforge.net/projects/leaf-framework</small>"
    },
    {
        "title": "spiral",
        "text": "Spiral is a genetic algorithms and neural networks framework.<br/>Primarly, it is  written in Python (and GObject) but a C++ port for ARM platforms is already under development.<br/><br/><small>http://github.com/makism/spiral</small>"
    },
    {
        "title": "pyid",
        "text": "Written in Python and PyGTK, pyid analyzes iptables` log file to extract information like attacker`s ip and target port.All data present in nice gui with many options.<br/><br/><small>https://sourceforge.net/projects/pyid/</small>"
    },
    {
        "title": "ephy-SessionMan",
        "text": "Developed to match the features that Firefox`s \"Session Manager\" plugin would offer.<br/>Written in Python and using PyGTK with some Glade, it takes Epiphany to another level!<br/><br/><small>https://sourceforge.net/projects/ephy-sessionman/</small>"
    }
);

window.addEvent('domready', function() {
    
    var children = $('tour').getChildren('img');
    var cntr = 0;
    
    //for( cntr=0; cntr<4; cntr++ ) {
    window.setInterval( function () {
        if (cntr<4) {
            var fadeIn = new Fx.Morph(children[cntr], {
                duration: 1500, transition: Fx.Transitions.Sine.easeOut
            });
            
            fadeIn.start({
                'opacity': [0, 1]
            });
            
            children[cntr].addEvents({
                'mouseover': function() {
                    this.setStyle('cursor', 'pointer')
                },
                'mouseout': function() {
                    this.setStyle( 'cursor', '' )
                }
            });
            
            new Tips(children[cntr], {
                fixed: true,
                className: 'customTip',
                offsets: { 'x': -130, 'y': 0},
                initialize: function() {
                    this.fx = new Fx.Tween(
                        this.tip, {
                            property: 'opacity',
                            duration: 600,
                            link: 'cancel'
                    }).set(0);
                    
                    this.morph = new Fx.Morph(
                        this.tip, {
                            duration: 600,
                            transition: Fx.Transitions.Sine.easeOut
                        }
                    );
                },
                onShow: function () {       
                    this.fx.start(1);
                    this.morph.start({
                        'top': [100, 130]
                    });
                },
                onHide: function() {        
                    this.fx.start(0);
                    this.morph.start({
                        'top': [130, 100]
                    });
                },
            });
            
            children[cntr].store('tip:title', ToolTips[cntr]['title']);
            children[cntr].store('tip:text', ToolTips[cntr]['text']);
            
            cntr++;
        }
    }, 500);

});
