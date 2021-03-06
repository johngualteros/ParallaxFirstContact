window.onload=function(){
    window.addEventListener('scroll',e=>{
        console.log(window.scrollY);
    });
    lax.init();
    lax.addDriver("scrollY",function(){
        return window.scrollY
    });
    lax.addElements(".logo",{
        scrollY:{
            scale:[
                [0,80],
                [1,3]
            ],
            opacity:[
                [0,70],
                [1,0]
            ],
            translateY:[
                [0,80],
                [0,200]
            ]
        }
    });
    lax.addElements(".ultron",{
        scrollY:{
            opacity:[
                [0,80],
                [0,1]
            ],
            translateY:[
                [0,400],
                [0,80]
            ]
        }
    });
    lax.addElements(".loki",{
        scrollY:{
            opacity:[
                [40,120],
                [0,1]
            ],
            translateY:[
                [0,400],
                [0,-80]
            ]
        }
    });
    lax.addElements(".thanos",{
        scrollY:{
            opacity:[
                [80,160],
                [0,1]
            ],
            translateY:[
                [0,400],
                [0,80]
            ]
        }
    });
    lax.addElements(".scroll-tip",{
        scrollY:{
            opacity:[
                [0,600],
                [1,0]
            ],
            translateY:[
                [0,800],
                [-200,0]
            ],
            'letter-spacing':[
                [0,600],
                [0,150],{
                    cssUnit:'px'
                }
            ],
        }
    });
    lax.addElements(".ironman-title",{
        scrollY:{
            filter:[
                [600,700,800,900,1000],
                [0,50,0,50,50],
                {
                    cssFn:function(value){
                        return `drop-shadow(0 0 ${value}px yellow)`
                    },
                },
            ],
            translateY:[
                [1200,1700],
                [200,'1000'],
            ],
        },
    });
    lax.addElements(".ironman-01",{
        scrollY:{
            translateY:[
                [1200,2000],
                [200,-300],
            ],
            opacity:[
                [1200,2000],
                [1,0],
            ]
        },
    });
    lax.addElements(".ironman-02",{
        scrollY:{
            scale:[
                [2000,2200,2500],
                [0,1,1.3]
            ],
            translateX:[
                [2000,2500,3000],
                [0,500,0],
            ],
            translateY:[
                [2000,2500,3000],
                [-500,0,-400],
            ],
        },
    });
    lax.addElements(".shield",{
        scrollY:{
            translateX:[
                [3200,3400],
                [-800,'screenWidth - 200'],
            ],
            translateY:[
                [3200,3400],
                [800,1200],
            ],
            opacity:[
                [3200,3400],
                [1,0],
            ]
        },
    });
    lax.addElements(".captain-title",{
        scrollY:{
            filter:[
                [3000,3100,3200,3300,3400,3500,3600],
                [0,50,0,50,0,50,0],
                {
                    cssFn:function(value){
                        return `drop-shadow(0 0 ${value}px blue)`
                    },
                },
            ],
            translateY:[
                [3100,3500],
                [700,1200],
            ],
        },
    });
    lax.addElements(".capi",{
        scrollY:{
            filter:[
                [3000,3100,3200,3300,3400,3500,3600],
                [0,50,0,50,0,50,0],
                {
                    cssFn:function(value){
                        return `drop-shadow(0 0 ${value}px red)`
                    },
                },
            ],
            translateX:[
                [3300,3900],
                [400,-800],
            ],
            translateY:[
                [3300,3900],
                [800,400],
            ],
            scale:[
                [3300,3900],
                [1,0.5],
            ],
            opacity:[
                [3300,3700],
                [0,1],
            ],
        },
    });
    lax.addElements(".shield02",{
        scrollY:{
            filter:[
                [3000,3100,3200,3300,3400,3500,3600],
                [0,50,0,50,0,50,0],
                {
                    cssFn:function(value){
                        return `drop-shadow(0 0 ${value}px red)`
                    },
                },
            ],
            translateX:[
                [3300,3900],
                [0,2500],
            ],
            translateY:[
                [3300,3900],
                [800,400],
            ],
            scale:[
                [3300,3900],
                [1,5],
            ],
            opacity:[
                [3300,3700],
                [0,1],
            ],
        },
    });
    lax.addElements(".rayo",{
        scrollY:{
            scaleX:[
                [3800,4000],
                [0,1],
            ],
            translateY:[
                [4200,4550,4650],
                [-200,-200,0],
            ],
            opacity:[
                [4000,4350,4400],
                [1,1,0],
            ],
        },
    });
    lax.addElements(".thor-title-01 img,.thor-title-02 img,.thor-title-03 img,.thor-title-04 img",{
        scrollY:{
            scale:[
                [4200,4400],
                [3,1],
            ],
            opacity:[
                [4200,4400],
                [0,1],
            ],
        },
    });
    lax.addElements(".thor",{
        scrollY:{
            translateX:[
                [4400,4800],
                [-800,"screenWidth + 500"],
            ],
            translateY:[
                [4400,4800],
                [0,-3000],
            ],
        },
    });
    lax.addElements(".thor02",{
        scrollY:{
            opacity:[
                [4400,4700],
                [0,1],
            ],
            translateY:[
                 [4400,4700],
                [-5000,-600],
            ],
            filter:[
                 [4400,4700],
                [100,0],
                {
                    cssFn:function(value){
                        return `blur(${value}px)`
                },
                },
            ],
        },
    });
    lax.addElements(".avengers-logo img",{
        scrollY:{
            scale:[
                [5000,5400],
                [0,1],
            ],
            opacity:[
                [5000,5400],
                [0,1],
            ],
        },
    });

};