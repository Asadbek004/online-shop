(this.webpackJsonponlineshopfinal=this.webpackJsonponlineshopfinal||[]).push([[0],{41:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var c,r,i,a,s,o,l,d,m,j,b,h,p,x,u=t(1),g=t(17),O=t.n(g),v=(t(41),t(4)),f=t(5),N=t(56),w=t(57),y=t(10),k=t(0),z=f.a.div(c||(c=Object(v.a)(["\n  min-height: 80px !important;\n  .container {\n    max-width: 65% !important;\n    margin: auto !important;\n    img{\n      @media only screen and (max-width: 600px) {\n        width: 30vw;\n      }\n    }\n    .navbar-brand {\n      background-color: #FFFFFF !important;\n      color: black !important;\n      font-size: 30px;\n    }\n    .nav-link {\n      color: black;\n      font-size: 20px !important;\n      margin-right: 30px !important;\n      .fa-shopping-cart, .fa-user-plus{\n        margin-left: 8px;\n      }\n    }\n    .nav-link:last-child{\n      margin-right: 0 !important;\n    }\n      .nik {\n           transition: 0.1s ease-in-out;\n       }\n       .nik:hover {\n           border-bottom: 5px solid #AB7A5F;\n       }\n  }\n"]))),L=function(){return Object(k.jsx)(z,{children:Object(k.jsx)(N.a,{collapseOnSelect:!0,expand:"lg",children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("img",{src:"/images/logo.221f6b13.svg",alt:"comfy sloth"}),Object(k.jsx)(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(k.jsxs)(N.a.Collapse,{id:"responsive-navbar-nav",children:[Object(k.jsxs)(w.a,{className:"m-auto",children:[Object(k.jsx)(y.b,{className:"nav-link nik",to:"/",children:"Home"}),Object(k.jsx)(y.b,{className:"nav-link nik",to:"/About",children:"About"}),Object(k.jsx)(y.b,{className:"nav-link nik",to:"/Products",children:"Products"})]}),Object(k.jsxs)(w.a,{className:"ml-auto",children:[Object(k.jsxs)(y.b,{className:"nav-link",to:"/",children:["Cards",Object(k.jsx)("i",{className:"fas fa-shopping-cart"})]}),Object(k.jsxs)(y.b,{className:"nav-link",to:"/",children:["Login ",Object(k.jsx)("i",{className:"fas fa-user-plus"})]})]})]})]})})})},A=f.a.div(r||(r=Object(v.a)(["\n    width: 100% !important;\n    .box {\n      background: #222222;\n      width: 100%;\n      height: 80px;\n    }\n    .all {\n        text-align: center;\n        padding-top: 20px;\n        font-size: 16px;\n        color: white;\n        span {\n            color: #AB7A5F;\n        }\n    }\n"]))),q=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(A,{children:Object(k.jsxs)("div",{className:"box",children:[Object(k.jsxs)("div",{className:"container",style:{textAlign:"center"},children:[Object(k.jsxs)("h3",{className:"all",children:["\xa9 2021 ",Object(k.jsx)("span",{children:" ComfySloth "})," All rights reserved "]}),Object(k.jsx)("small",{style:{color:"white"},children:"Designed by X.Farhodkhuja"})]}),Object(k.jsx)("div",{})]})})})},F=t.p+"static/media/Group 1.3f143e12.png",B=f.a.div(i||(i=Object(v.a)(["\n  .container {\n    max-width: 65% !important;\n    margin: auto !important;\n\n    .mt {\n      margin-top: 10rem;\n\n      .design-img {\n        width: 100%;\n        height: 550px;\n        @media only screen and (max-width: 400px) {\n          display: none;\n        }\n      }\n\n      .design-text {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n        height: 550px;\n        .design-h1 {\n          font-size: 3rem;\n        }\n        .design-p{\n          font-size: 1.25rem;\n          line-height: 2;\n          max-width: 45em;\n        }\n        .bt{\n          padding: 0.75rem 1.5rem;\n          font-size: 1rem;\n          cursor: pointer;\n          border-color: transparent;\n          background-color: #c5a491;\n          color: #eaded7;\n        }\n        .bt:hover{\n          background-color: #eaded7;\n          color: #453227;\n        }\n      }\n    }\n  }\n"]))),C=function(){return Object(k.jsx)(B,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row mt",children:[Object(k.jsx)("div",{className:"col-lg-6 col-12",children:Object(k.jsxs)("div",{className:"design-text",children:[Object(k.jsxs)("h1",{className:"design-h1",children:["Design Your ",Object(k.jsx)("br",{})," Comfort Zone"]}),Object(k.jsx)("p",{className:"design-p",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?"}),Object(k.jsx)("button",{className:"btn bt text-uppercase",children:"shop now"})]})}),Object(k.jsx)("div",{className:"col-lg-6 col-12 order-lg-2",children:Object(k.jsx)("img",{className:"design-img",src:F,alt:"Photo"})})]})})})},P=f.a.div(a||(a=Object(v.a)(["\n    .cards{\n      margin: auto;\n      width: 100%;\n    }\n    .card-image{\n      position: relative;\n      width: 100%;\n      height: 350px;\n      overflow: hidden;\n      &:hover .overlay {\n        opacity: 0.5;\n      }\n    }\n    .image {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: 5px;\n    }\n    .overlay {\n       position: absolute;\n       top: 0;\n       bottom: 0;\n       left: 0;\n       right: 0;\n       opacity: 0;\n       transition: .5s ease;\n       background: grey;\n       border-radius: 5px;\n    }\n          \n\n          \n    .icon {\n      background-color: #AB7A5F;\n      border-radius: 50%;\n      width: 50px;\n      height: 50px;\n      color: white;\n      font-size: 30px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      text-align: center;\n    }\n          \n    .fa-search:hover {\n      color: #fff;\n    }\n\n    .hh {\n      height: 60px;\n    }\n"]))),E=function(n){var e=n.el;return Object(k.jsx)(P,{children:Object(k.jsxs)("div",{className:"cards",children:[Object(k.jsxs)("div",{className:"card-image",children:[Object(k.jsx)("img",{className:"image",src:e.image,alt:"Photo"}),Object(k.jsx)("div",{class:"overlay",children:Object(k.jsx)("a",{href:"#",class:"icon",title:"User Profile",children:Object(k.jsx)("i",{class:"fa fa-search"})})})]}),Object(k.jsxs)("div",{className:"d-flex justify-content-between align-items-center hh bg-transparent",children:[Object(k.jsx)("h4",{className:"text-uppercase",children:e.name}),Object(k.jsxs)("p",{children:[e.price,"$"]})]})]})})},S=t(27),D=t.n(S),H=t(35),M=t(36),V=Object(u.createContext)(),J=function(n){var e=n.children,t=Object(u.useState)([]),c=Object(M.a)(t,2),r=c[0],i=c[1],a=function(){var n=Object(H.a)(D.a.mark((function n(){var e,t;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://course-api.com/react-store-products");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,i(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(u.useEffect)((function(){a(),console.log("Hwllo world")}),[]),Object(k.jsx)("div",{children:Object(k.jsx)(V.Provider,{value:{array:r},children:e})})},U=f.a.div(s||(s=Object(v.a)(["\n  background-color: #f1f5f8;\n\n  .container {\n    max-width: 65% !important;\n    margin: auto !important;\n\n    .row {\n      .bt {\n        width: 158px;\n        margin: 60px auto;\n        text-align: center;\n        background-color: #ab7a5f;\n        color: #eaded7;\n        padding: .375rem .75rem;\n        letter-spacing: .1rem;\n      }\n    }\n    .mt {\n      margin: 170px 0 60px 0;\n\n      .line {\n        width: 90px;\n        height: 4px;\n        background-color: #ab7a5f;\n        margin: 7px auto;\n      }\n    }\n  }\n"]))),$=function(){var n=Object(u.useContext)(V).array;return Object(k.jsx)(U,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsxs)("div",{className:"row mt",children:[Object(k.jsx)("h2",{style:{textAlign:"center",marginTop:"70px"},children:"Featured Products"}),Object(k.jsx)("div",{className:"line",children:" "})]}),Object(k.jsxs)("div",{className:"row",children:[n.slice(7,10).map((function(n){return Object(k.jsx)("div",{className:"col-lg-4 col-12",children:Object(k.jsx)("div",{className:"card border-0 bg-transparent",children:Object(k.jsx)(E,{el:n})})})})),Object(k.jsx)("button",{className:"btn bt text-uppercase",children:"All Products"})]})]})})},I=f.a.div(o||(o=Object(v.a)(["\n  background: linear-gradient(to top, #fff, #fff 20%, #EADED7 20%, #eaded7 50%);\n  @media (max-width: 1024px) {\n    .col-12{\n        margin-top: 15px;\n    }\n  }\n\n  .container {\n    max-width: 65% !important;\n    margin: auto !important;\n\n    .custom-h2 {\n      color: #453227 !important;\n      font-size: 2rem;\n      line-height: 1;\n    }\n\n    .custom-p {\n      color: #795744;\n      line-height: 1.8;\n    }\n    .card{\n      background-color: #c5a491 !important;\n      border-radius: 5px !important;\n      text-align: center;\n      padding: 2.5rem 2rem;\n      .card-header {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        height: 100%;\n        .svg{\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 80px;\n          height: 80px;\n          border-radius: 50%;\n          background-color: #eaded7;\n        }\n        .custom-h3{\n          margin-top: 15px;\n        }\n      }\n    }\n    \n  }\n"]))),K=function(){return Object(k.jsx)(I,{children:Object(k.jsxs)("div",{className:"container media",children:[Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-md-6 col-12",children:Object(k.jsxs)("h2",{className:"custom-h2 my-5",children:["Custom Furniture ",Object(k.jsx)("br",{})," Built Only For You"]})}),Object(k.jsx)("div",{className:"col-md-6 col-12",children:Object(k.jsx)("p",{className:"custom-p my-5",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur."})})]}),Object(k.jsxs)("div",{className:"row mt-5",children:[Object(k.jsx)("div",{className:"col-md-4 col-12",children:Object(k.jsxs)("div",{className:"card border-0 bg-transparent",children:[Object(k.jsxs)("div",{className:"card-header border-0 bg-transparent",children:[Object(k.jsx)("div",{className:"svg",children:Object(k.jsx)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"2.5em",width:"2.5em",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsx)("path",{d:"M203.97 23l-18.032 4.844 11.656 43.468c-25.837 8.076-50.32 21.653-71.594 40.75L94.53 80.594l-13.218 13.22 31.376 31.374c-19.467 21.125-33.414 45.53-41.813 71.343l-42.313-11.343-4.843 18.063 42.25 11.313c-6.057 27.3-6.157 55.656-.345 83L23.72 308.78l4.843 18.064 41.812-11.22c6.693 21.225 17.114 41.525 31.25 59.876l-29.97 52.688-16.81 29.593 29.56-16.842 52.657-29.97c18.41 14.216 38.784 24.69 60.094 31.407l-11.22 41.844 18.033 4.81 11.218-41.905c27.345 5.808 55.698 5.686 83-.375l11.312 42.28 18.063-4.81-11.344-42.376c25.812-8.4 50.217-22.315 71.342-41.78l31.375 31.373 13.22-13.218-31.47-31.47c19.09-21.266 32.643-45.738 40.72-71.563l43.53 11.657 4.813-18.063-43.625-11.686c5.68-27.044 5.576-55.06-.344-82.063l43.97-11.78-4.813-18.063L440.908 197c-6.73-20.866-17.08-40.79-31.032-58.844l29.97-52.656 16.842-29.563-29.593 16.844-52.656 29.97c-17.998-13.875-37.874-24.198-58.657-30.906l11.783-44L309.5 23l-11.78 43.97c-27-5.925-55.02-6.05-82.064-.376L203.97 23zm201.56 85L297.25 298.313l-.75.437-40.844-40.875-148.72 148.72-2.186 1.25 109.125-191.75 41.78 41.78L405.532 108zm-149.686 10.594c21.858 0 43.717 5.166 63.594 15.47l-116.625 66.342-2.22 1.28-1.28 2.22-66.25 116.406c-26.942-52.04-18.616-117.603 25.03-161.25 26.99-26.988 62.38-40.468 97.75-40.468zm122.72 74.594c26.994 52.054 18.67 117.672-25.002 161.343-43.66 43.662-109.263 52.005-161.312 25.033l116.438-66.282 2.25-1.25 1.25-2.25 66.375-116.592z"})})}),Object(k.jsx)("h3",{className:"custom-h3",children:"Mission"})]}),Object(k.jsx)("div",{className:"card-body border-0 bg-transparent",children:Object(k.jsx)("p",{className:"custom-p",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"})})]})}),Object(k.jsx)("div",{className:"col-md-4 col-12",children:Object(k.jsxs)("div",{className:"card border-0 bg-transparent",children:[Object(k.jsxs)("div",{className:"card-header border-0 bg-transparent",children:[Object(k.jsx)("div",{className:"svg",children:Object(k.jsx)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"2.5em",width:"2.5em",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsx)("path",{d:"M78.594 20.313c-20.396-.083-40.037 3.83-57.78 12.468C126.016 63.043 213.21 117.8 289.185 187.813c-9.978-45.738-40.414-87.43-79.375-117.78-11.143 8.35-27.725 8.505-41.156.75-13.402-7.74-21.53-22.143-19.906-35.938-23.19-9.237-47.145-14.438-70.156-14.532zm101.625 6.625c-5.215.166-9.516 2.475-11.532 5.968-3.442 5.962-.55 15.975 9.343 21.688 9.894 5.713 19.997 3.212 23.44-2.75 3.44-5.962.58-16.006-9.314-21.72-3.71-2.14-7.465-3.108-10.875-3.186-.354-.01-.714-.012-1.06 0zm-43.25 73.906L31.75 283.188c5.972 8.454 13.093 14.29 25.125 15.062l105.47-182.78c-8.03-5.31-16.5-10.178-25.376-14.626zm194.78 6.25l-17.406 10.78-10.22 66.657 38.313-59.124-10.687-18.312zm-140.344 61.72l-21.844 13.467 14.375 17.314 86.157-4.75-78.688-26.03zm209.75.686l-3.78 1.156-181.095 55.906-3.75 1.188-1.81 3.5-42.314 82.875-3.625 7.125 6.47 4.688 216.53 157.25 10.126 7.343 4.156-11.81 88.563-251.44 2.656-7.5-7-3.81-81.655-44.564-3.47-1.906zm-2.03 20.188l63.28 34.562-65.97 20.344-33.248-43.813 35.937-11.093zm-54.97 16.968l33.28 43.813L279 280.843l2.78-54.938 62.376-19.25zM262.78 231.78L260 286.72l-67.22 20.75 32.782-64.19 37.22-11.5zm202.5 11.126L400 428.312l4.063-166.5 61.218-18.906zm-80.06 24.72l-4.064 166.5-98.812-134.72 102.875-31.78zm-121.783 37.593L364.75 443.374 201.062 324.5l62.375-19.28z","fill-rule":"evenodd"})})}),Object(k.jsx)("h3",{className:"custom-h3",children:"Vision"})]}),Object(k.jsx)("div",{className:"card-body border-0 bg-transparent",children:Object(k.jsx)("p",{className:"custom-p",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"})})]})}),Object(k.jsx)("div",{className:"col-md-4 col-12",children:Object(k.jsxs)("div",{className:"card border-0 bg-transparent",children:[Object(k.jsxs)("div",{className:"card-header border-0 bg-transparent",children:[Object(k.jsx)("div",{className:"svg",children:Object(k.jsx)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"2.5em",width:"2.5em",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsx)("path",{d:"M453.295 17.117c-.546 7.232 1.619 15.478 5.957 22.612 4.338 7.133 10.666 12.847 17.338 15.69 9.655-11.206-5.483-37.974-20.092-38.624-1.09-.07-2.254.137-3.203.322zm-111.547 8.38L329.492 49.61l61.018 100.326 25.627-2.127 13.676-21.777-9.063-14.9-27.34 16.628-37.931-62.371L350.8 57.7l27.34-16.628-9.346-15.368zm93.977 1.62l-60.194 36.61 23.905 39.303 60.193-36.61c-6.345-4.604-11.676-10.635-15.754-17.34-4.078-6.704-6.981-14.21-8.15-21.963zm-125.01 19.711l-161.647 2.62c10.403 24.036 7.492 47.197-4.388 65.648-18.658-14.237-44.341-15.374-63.407-17.717-14.06 123.827-6.22 225.967-6.271 342.149-.004 9.469-1.157 23.12 4.826 32.947 1.887 3.1 4.37 5.928 8.129 8.342 17.708-6.206 41.405-12.44 54.87-22.274-6.951-.825-14.755.952-21.138.955-8.458-.04-19.144-6.11-24.748-19.496-2.919-6.973-6.636-18.193-.181-29.072 2.838-4.785 9.383-10.302 14.26-10.328 94.651.504 191.392-.32 279.568.154-5.523-76.851-10.013-154.096-5.53-232.308l-4.146.343-14.842-24.404-66.867 40.668 6.781 10.598-15.162 9.699-59.097-92.371 15.16-9.7L255 115.966l68.46-41.637-11.95-19.65-2.606-4.285zm-180.17 4.383c-15.366 8.213-29.102 17.702-40.99 28.707 16.167 1.495 33.74 3.063 48.64 9.95 3.139-13.836-3.247-26.896-7.65-38.657zm202.268 38.494l-66.645 40.534 7.275 11.962 33.325-20.265 9.351 15.377-33.322 20.267 7.277 11.963 66.643-40.533zM201.41 136.278l.445 17.992c-30.522.253-58.62 2.029-90.013 2.11V138.38a35163.72 35163.72 0 0 0 89.568-2.103zm144.983 78.98l.24 17.996-234.346 3.143-.242-17.996zm.078 40.684l.408 17.992-123.654 2.81-.41-17.994zm-235.178 3.097h90.602v17.998h-90.602zm234.795 33.237l.406 17.992-62.158 1.406-.406-17.994zm-83.686 1.455l.338 17.996-150.3 2.808-.337-17.994zm85.946 52.806l.402 17.995-125.647 2.808-.402-17.992zm-196.323 70.79c10.05 9.261 17.925 22.065 15.078 36.718-2.074 10.682-10.422 17.606-19.814 23.106s-20.775 9.866-32.512 13.914a1395.68 1395.68 0 0 1-12.238 4.154l301.387-7.672c7.772-.45 14.658-5.66 19.734-13.406 5.082-7.754 7.477-17.817 6.895-23.236-.583-5.419-4.857-14.677-10.973-21.48-6.116-6.805-13.547-10.824-19.025-10.618l-.198.008zm-39.785 2.787c-1.07 1.802-.466 8.714 1.303 12.939 3.72 8.887 6.028 8.437 8.232 8.447 8.877 2.102 17.347.269 25.85-1.025-2.053-4.123-5.283-8.704-10.283-12.113-4.12-2.809-20.675-15.634-25.102-8.248z"})})}),Object(k.jsx)("h3",{className:"custom-h3",children:"History"})]}),Object(k.jsx)("div",{className:"card-body border-0 bg-transparent",children:Object(k.jsx)("p",{className:"custom-p",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"})})]})})]})]})})},R=(t(29),f.a.div(l||(l=Object(v.a)(["\n     .container {\n         max-width: 65% !important;\n         margin: auto !important;\n         padding: 180px 20px;\n         .get {\n             color: #102A42;\n             font-size: 32px;\n             margin-top: 50px;\n             margin-bottom: 20px;\n         }\n         .row {\n             margin-bottom: 50px;\n             .jp {\n                 color: #617D98;\n                 font-size: 16px;\n             }\n             .int {\n                 display: flex;\n                 justify-content: center;\n                 align-items: center;\n                 .inputj{\n                     width: 380px;\n                     height: 38px;\n                     padding: 8px 16px;\n                     border: 2px solid #324d67;\n                     border-right: none;\n                 }\n                 .jbtns {\n                    background: #ab7a5f;\n                    color: #222222;\n                    padding: 5px 16px;\n                    font-size: 16px;\n                    border: 2px solid #324d67;\n                    font-family: Arial, Helvetica, sans-serif;\n                    transition: all 0.3s linear;\n                    cursor: pointer;\n                    letter-spacing: var(0.1rem);\n                    cursor: pointer;\n                    text-transform: capitalize;\n                 }\n                 .jbtns:hover {\n                     color: #FFFFFF;\n                 }\n             }\n         }\n     }\n"])))),T=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(R,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("h3",{className:"get",children:"Join our newsletter and get 20% off"}),Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-lg-6 col-sm-12",children:Object(k.jsx)("p",{className:"jp",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?"})}),Object(k.jsxs)("div",{className:"col-lg-6 col-sm-12 int",children:[Object(k.jsx)("input",{type:"text",className:"inputj",placeholder:"Enter Email"}),Object(k.jsx)("button",{type:"submit",className:"jbtns",children:"Subscribe"})]})]})]})})})},Y=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(C,{}),Object(k.jsx)($,{}),Object(k.jsx)(K,{}),Object(k.jsx)(T,{})]})},_=t(6),G=f.a.div(d||(d=Object(v.a)(["\n  .container-fluid {\n    background-color: #eaded7;\n    min-height: 20vh !important;\n    width: 100% !important;\n  }\n  .container {\n    max-width: 70% !important;\n    margin: auto !important;\n\n    .hero {\n      display: flex;\n      align-items: center;\n      height: 20vh;\n\n      .nav-link {\n        line-height: 1;\n        font-size: 2rem;\n        color: #795744;\n        padding: 0.5rem;\n        :first-child{\n          margin: 0 !important;\n          padding: 0 !important;\n        }\n      }\n    }\n  }\n"]))),Q=function(){return Object(k.jsx)(G,{children:Object(k.jsx)("div",{className:"container-fluid",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"hero",children:[Object(k.jsx)(y.b,{className:"nav-link",to:"/",children:"Home /"}),Object(k.jsx)(y.b,{className:"nav-link",to:"/About",children:"About"})]})})})})})},X=t.p+"static/media/photo_2021-05-26_15-38-01.76412740.jpg",Z=f.a.div(m||(m=Object(v.a)(["\n  .container {\n    max-width: 70% !important;\n    margin: auto !important;\n    .hero-img{\n      width: 553px;\n      height: 500px;\n      border-radius: 7px;\n    }\n    .hero-p{\n      line-height: 2;\n      max-width: 45em;\n      margin: 2rem auto 0;\n      color: #617d98;\n    }\n    .line {\n      width: 90px;\n      height: 4px;\n      background-color: #ab7a5f;\n    }\n  }\n"]))),W=function(){return Object(k.jsx)(Z,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row mb-5 mt-5",children:[Object(k.jsx)("div",{className:"col-md-6 col-12 mt-5 my-5",children:Object(k.jsx)("img",{className:"hero-img",src:X,alt:"Photo"})}),Object(k.jsxs)("div",{className:"col-md-6 col-12 mt-5 my-5",children:[Object(k.jsx)("h2",{style:{fontSize:"2.5rem"},children:"Our Story"}),Object(k.jsx)("div",{className:"line",children:" "}),Object(k.jsx)("p",{className:"hero-p",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste."})]})]})})})},nn=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(Q,{}),Object(k.jsx)(W,{})]})},en=f.a.div(j||(j=Object(v.a)(["\n  .container-fluid {\n    background-color: #eaded7;\n    min-height: 20vh !important;\n    width: 100% !important;\n  }\n  .container {\n    max-width: 70% !important;\n    margin: auto !important;\n\n    .hero {\n      display: flex;\n      align-items: center;\n      height: 20vh;\n\n      .nav-link {\n        line-height: 1;\n        font-size: 2rem;\n        color: #795744;\n        padding: 0.5rem;\n        :first-child{\n          margin: 0 !important;\n          padding: 0 !important;\n        }\n      }\n\n    }\n  }\n"]))),tn=function(){return Object(k.jsx)(en,{children:Object(k.jsx)("div",{className:"container-fluid",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"hero",children:[Object(k.jsx)(y.b,{className:"nav-link",to:"/",children:"Home /"}),Object(k.jsx)(y.b,{className:"nav-link nik",to:"/Products",children:"Products"})]})})})})})},cn=f.a.div(b||(b=Object(v.a)(["\n    .cards{\n      margin: auto;\n      width: 100%;\n    }\n    .card-image{\n      position: relative;\n      width: 100%;\n      height: 350px;\n      overflow: hidden;\n      &:hover .overlay {\n        opacity: 0.5;\n      }\n    }\n    .image {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: 5px;\n    }\n    .overlay {\n       position: absolute;\n       top: 0;\n       bottom: 0;\n       left: 0;\n       right: 0;\n       opacity: 0;\n       transition: .5s ease;\n       background: grey;\n       border-radius: 5px;\n    }\n          \n\n          \n    .icon {\n      background-color: #AB7A5F;\n      border-radius: 50%;\n      width: 50px;\n      height: 50px;\n      color: white;\n      font-size: 30px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      text-align: center;\n        .fa-search:hover {\n            color: #fff;\n        }\n    }\n"]))),rn=function(n){var e=n.el;return Object(k.jsx)(cn,{children:Object(k.jsxs)("div",{className:"cards",children:[Object(k.jsxs)("div",{className:"card-image",children:[Object(k.jsx)("img",{className:"image",src:e.image,alt:"Photo"}),Object(k.jsx)("div",{class:"overlay",children:Object(k.jsx)("a",{href:"#",class:"icon",title:"User Profile",children:Object(k.jsx)("i",{class:"fa fa-search"})})})]}),Object(k.jsxs)("div",{className:"d-flex justify-content-between align-items-center hh bg-transparent",children:[Object(k.jsx)("h4",{className:"text-uppercase",children:e.name}),Object(k.jsxs)("p",{children:[e.price,"$"]})]})]})})},an=f.a.div(h||(h=Object(v.a)(["\n\n\n  .container {\n    max-width: 65% !important;\n    margin: auto !important;\n\n    .row {\n      .bt {\n        width: 158px;\n        margin: 60px auto;\n        text-align: center;\n        background-color: #ab7a5f;\n        color: #eaded7;\n        padding: .375rem .75rem;\n        letter-spacing: .1rem;\n      }\n    }\n    .mt {\n      margin: 170px 0 60px 0;\n\n      .line {\n        width: 90px;\n        height: 4px;\n        background-color: #ab7a5f;\n        margin: 7px auto;\n      }\n    }\n  }\n"]))),sn=function(){var n=Object(u.useContext)(V).array;return Object(k.jsx)(an,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("div",{className:"row mt"}),Object(k.jsx)("div",{className:"row",children:n.slice().map((function(n){return Object(k.jsx)("div",{className:"col-lg-4 col-12",children:Object(k.jsx)("div",{className:"card border-0 bg-transparent",children:Object(k.jsx)(rn,{el:n})})})}))})]})})},on=f.a.div(p||(p=Object(v.a)(["\n    width: 30%;\n    height: 100vh;\n    position: sticky;\n    top: 0;\n    padding-left:15px ;\n\n   \n        .all-btn {\n\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    margin-right: 0.5rem;\n    opacity: 0.5;\n    }\n    .color-btn {\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    background: rgb(34, 34, 34);\n    margin-right: 0.5rem;\n    border: none;\n    cursor: pointer;\n    opacity: 0.5;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n}\n    .wrapp{\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n       \n        .company {\n            background: var(--clr-grey-10);\n            border-radius: var(--radius);\n            border-color: transparent;\n            padding: 0.25rem;    \n        }\n        \n    }\n    .color-btn{\n\n    }\n    \n    \n    .Btn {\n    display: block;\n    margin: 0.25em 0px;\n    padding: 0.25rem 0px;\n    text-transform: capitalize;\n    background: transparent;\n    border-top: none;\n    border-right: none;\n    border-left: none;\n    border-image: initial;\n    border-bottom: 1px solid transparent;\n    letter-spacing: var(--spacing);\n    color: var(--clr-grey-5);\n    cursor: pointer;\n    }\n    .search-input {\n    padding: 0.5rem;\n    background: var(--clr-grey-10);\n    border-radius: var(--radius);\n    border-color: transparent;\n    letter-spacing: var(--spacing);\n    }\n\n"]))),ln=function(){return Object(k.jsxs)(on,{children:[Object(k.jsx)("input",{type:"text",name:"text",placeholder:"search",class:"search-input",value:""}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:" Category  "}),Object(k.jsxs)("div",{children:[Object(k.jsx)("button",{className:"Btn",children:"All"}),Object(k.jsx)("button",{className:"Btn",children:"Office"}),Object(k.jsx)("button",{className:"Btn",children:"Living Room"}),Object(k.jsx)("button",{className:"Btn",children:"Kitchen"}),Object(k.jsx)("button",{className:"Btn",children:"Bedroom"}),Object(k.jsx)("button",{className:"Btn",children:"Dining"}),Object(k.jsx)("button",{className:"Btn",children:"Kids"})]})]}),Object(k.jsxs)("div",{className:"wrapp",children:[Object(k.jsx)("h1",{className:"w-100",children:"Company"}),Object(k.jsxs)("select",{name:"company",class:"company",children:[Object(k.jsx)("option",{value:"all",children:"all"}),Object(k.jsx)("option",{value:"marcos",children:"marcos"}),Object(k.jsx)("option",{value:"liddy",children:"liddy"}),Object(k.jsx)("option",{value:"ikea",children:"ikea"}),Object(k.jsx)("option",{value:"caressa",children:"caressa"})]})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{className:"w-100",children:"Color"}),Object(k.jsx)("button",{name:"color","data-color":"all",className:"all-btn active",children:"all"}),Object(k.jsx)("button",{name:"color",className:"color-btn","data-color":"#ff0000",style:{background:"rgb(255, 0, 0)"}}),Object(k.jsx)("button",{name:"color",className:"color-btn","data-color":"#00ff00",style:{background:"rgb(0, 255, 0)"}}),Object(k.jsx)("button",{name:"color",className:"color-btn","data-color":"#0000ff",style:{background:"rgb(0, 0, 255)"}}),Object(k.jsx)("button",{name:"color",className:"color-btn","data-color":"#000",style:{background:"rgb(0, 0, 0)"}}),Object(k.jsx)("button",{name:"color",className:"color-btn","data-color":"#ffb900",style:{background:"rgb(255, 185, 0)"}})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h5",{children:"price"}),Object(k.jsx)("p",{class:"price",children:"$3,099.99"}),Object(k.jsx)("input",{type:"range",name:"price",min:"0",max:"309999",value:"309999"})]}),Object(k.jsx)("button",{type:"button",class:"clear-btn",children:"clear filters"})]})},dn=f.a.div(x||(x=Object(v.a)(["\n    display: flex;\n\n"]))),mn=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(tn,{}),Object(k.jsxs)(dn,{children:[Object(k.jsx)(ln,{}),Object(k.jsx)(sn,{})]})]})};var jn=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(L,{}),Object(k.jsxs)(_.c,{children:[Object(k.jsx)(_.a,{exact:!0,path:"/",children:Object(k.jsx)(Y,{})}),Object(k.jsx)(_.a,{path:"/About",children:Object(k.jsx)(nn,{})}),Object(k.jsx)(_.a,{path:"/Products",children:Object(k.jsx)(mn,{})})]}),Object(k.jsx)(q,{})]})};O.a.render(Object(k.jsx)(J,{children:Object(k.jsx)(y.a,{children:Object(k.jsx)(jn,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.1ae92377.chunk.js.map