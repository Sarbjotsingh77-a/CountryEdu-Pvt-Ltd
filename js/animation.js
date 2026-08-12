/* ==========================================================
                COUNTRYEDU ANIMATIONS
========================================================== */

/* ============================
        FADE IN ON SCROLL
============================ */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

/* ============================
        COUNTER
============================ */

const counters=document.querySelectorAll(".stat-card h3");

const speed=150;

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target=parseInt(counter.innerText);

        const count=parseInt(counter.getAttribute("data-count"))||0;

        const increment=Math.ceil(target/speed);

        if(count<target){

            counter.setAttribute("data-count",count+increment);

            counter.innerText=(count+increment)+"+";

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText=target+"+";

        }

    };

    updateCounter();

});

/* ============================
        FLOATING EFFECT
============================ */

const cards=document.querySelectorAll(".floating-card");

cards.forEach((card,index)=>{

    card.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-12px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:3500+(index*500),

            iterations:Infinity

        }

    );

});