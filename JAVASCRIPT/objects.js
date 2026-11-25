<script>

    let em= =[
        {
        emp_id:101,
        emp_name:"vishnu",
        emp_salary:20000
        },{
            emp_id:102,
            emp_name:"sagar",
            emp_salary:30000
        },{
            emp_id:103,
            emp_name:"kumar",
            emp_salary:40000
        }
        ,{
            emp_id:100,
            emp_name:"kumar",
            emp_salary:40000,
            skills:["python","java","javascript"]
        },{
            emp_id:200,
            emp_name:saga,
            salary:60000,
            //nested object
            //key and values
            //key: value    
            //object inside object
            //object inside array
            //key cannot be dublicate but the value can be doublicate
            company:{
                c1:"TCS",
                c2:"Architecture"
        }
    },
    ]

    console.log(emp[0].skills[1]);
    console.log(emp[1].company.c2);
    console.log(emp[1].salary);


    //Dot Notation
    //console.log(emp.emp_name);
    //square bracket notation
    //console.log(emp["salary"]);






</script>