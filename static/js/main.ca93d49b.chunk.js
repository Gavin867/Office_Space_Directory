(this.webpackJsonpoffice_space_directory=this.webpackJsonpoffice_space_directory||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s(13),r=s.n(n),a=(s(23),s(3)),o=s(14),l=s(15),i=s(18),j=s(17),d=(s(24),s(0));var h=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"text-center",children:"Office Space Directory"}),Object(d.jsx)("h4",{className:"text-center",children:'"So if you could sort these employees, that would be greaaat."'})]})})})};var u=function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("form",{children:Object(d.jsx)("input",{className:"form-control",type:"search",placeholder:"Search employee by last or first name here. Click down arrow to sort A-Z. Click up arrow to sort Z-A.","aria-label":"Search",name:"search",value:e.employeeSearch,onChange:e.handleInputs})})})};var b=function(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("table",{className:"table table-striped table-hover justify-content-center",children:[Object(d.jsx)("thead",{className:"thead-dark",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col"}),Object(d.jsxs)("th",{scope:"col",children:["Last ",Object(d.jsx)("i",{class:"fas fa-arrow-down",onClick:e.sortAscending})," ",Object(d.jsx)("i",{class:"fas fa-arrow-up",onClick:e.sortDescending})]}),Object(d.jsx)("th",{scope:"col",children:"First"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"Phone"})]})}),Object(d.jsx)("tbody",{children:e.employees.length>0?e.employees.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:Object(d.jsx)("img",{src:e.picture.thumbnail,alt:"Profile Thumbnail"})}),Object(d.jsx)("td",{children:e.name.last}),Object(d.jsx)("td",{children:e.name.first}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.phone})]},t)})):Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row"}),Object(d.jsx)("td",{}),Object(d.jsx)("td",{}),Object(d.jsx)("td",{}),Object(d.jsx)("td",{})]})})]})})},m=s(16),O=s.n(m),p=function(){return O.a.get("https://randomuser.me/api/?&results=40&nat=us")},f=function(e){Object(i.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={employees:[],search:"",OGs:[],sortAscend:!0},e.handleInputs=function(t){t.preventDefault();var s=t.target,c=s.name,n=s.value;e.setState(Object(a.a)({},c,n));var r=e.state.OGs.filter((function(e){return e.name.first.toLowerCase().includes(n.toLowerCase())||e.name.last.toLowerCase().includes(n.toLowerCase())}));e.setState({employees:r})},e.sortAscending=function(t){var s=t.target,c=s.name,n=s.value;e.setState(Object(a.a)({},c,n));var r=e.state.employees.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}));e.setState({employees:r})},e.sortDescending=function(t){var s=t.target,c=s.name,n=s.value;e.setState(Object(a.a)({},c,n));var r=e.state.employees.sort((function(e,t){return t.name.last.localeCompare(e.name.last)}));e.setState({employees:r})},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){return e.setState({employees:t.data.results,OGs:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(h,{})}),Object(d.jsx)("div",{children:Object(d.jsx)(u,{form:this.state.form,handleInputs:this.handleInputs})}),Object(d.jsx)("div",{children:Object(d.jsx)(b,{employees:this.state.employees,handleSort:this.handleSort,sortAscending:this.sortAscending,sortDescending:this.sortDescending})})]})}}]),s}(c.Component);r.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ca93d49b.chunk.js.map