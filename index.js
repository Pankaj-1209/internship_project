let clicked = "false"
let prev ;
let id;
let getNameArr = [];
let arr_choice = [0,0,0,0,0,0,0,0]
let language = [0,0,0,0,0,0]
let obj = [
    {
        id:0,
        title:"python",
        lang_info:"Python is general purpose programming language and also used for ML, analysis, visualization",
        condition:
            {
                if_cond:
                    {
                        def:"if stnt is used for conditional rendering of data",
                        syntax:`if condition:
                                    statements
                                    ..........
                                     `,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')`,
                    },
                
                if_else:
                    {
                        def:"if-else stnt is used for conditional rendering of data and if true and executes 1st part else 2nd part",
                        syntax:`if condition:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ..........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                else:
                                    print('Not Selected for internship at trickycoders') `,
                    },
                
                if_elseif_else:
                    {
                        def:"if stnt is used for conditional rendering of data , series of condition is used",
                        syntax:`if condition:
                                    statements
                                    ..........
                                elif condition2:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ...........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                elif age>20:
                                    print('Selected for web developemnt internship at trickycoders')
                                else:
                                    print('Not Selected for  internship at trickycoders')`,
                    },
                
            // }
        // ],
        // loops:[
            // {
                for_loop:
                    {
                        def:"for loop runs from start to end and inc default by 1,it is entry control loop",
                        syntax:`for variable in range(start,end):
                                    statement
                                    .........`,
                        example:`for demo in range(1,11):
                                    print(demo)`,
                    },
                
                while_loop:
                    {
                        def:"while loop runs from start to end and inc/dec default by 1,it is entry control loop",
                        syntax:`while demo <= end:
                                    statement
                                    .........`,

                        example:`demo = 1
                                 end = 10
                                 while demo <= end:
                                    print(demo)`,
                    },
                
                do_while_loop:
                    {
                        def:"it is an exit control loop, no explicit definition in python for the do_while_lopp",
                        syntax:`DOES NOT EXISTS`,
                        example:`DOES NOT EXISTS`,
                    },
                
            // }
        // ],
        // user_def:[
            // {
                classes:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
                objects:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
        
            }   

        
    },

    {
        id:1,
        title:"css",
        lang_info:"Css is the language we use to style an HTML document",
        condition:
            {
                if_cond:
                    {
                        def:"if stnt is used for conditional rendering of data",
                        syntax:`if condition:
                                    statements
                                    ..........
                                     `,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')`,
                    },
                
                if_else:
                    {
                        def:"if-else stnt is used for conditional rendering of data and if true and executes 1st part else 2nd part",
                        syntax:`if condition:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ..........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                else:
                                    print('Not Selected for internship at trickycoders') `,
                    },
                
                if_elseif_else:
                    {
                        def:"if stnt is used for conditional rendering of data , series of condition is used",
                        syntax:`if condition:
                                    statements
                                    ..........
                                elif condition2:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ...........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                elif age>20:
                                    print('Selected for web developemnt internship at trickycoders')
                                else:
                                    print('Not Selected for  internship at trickycoders')`,
                    },
                
            // }
        // ],
        // loops:[
            // {
                for_loop:
                    {
                        def:"for loop runs from start to end and inc default by 1,it is entry control loop",
                        syntax:`for variable in range(start,end):
                                    statement
                                    .........`,
                        example:`for demo in range(1,11):
                                    print(demo)`,
                    },
                
                while_loop:
                    {
                        def:"while loop runs from start to end and inc/dec default by 1,it is entry control loop",
                        syntax:`while demo <= end:
                                    statement
                                    .........`,

                        example:`demo = 1
                                 end = 10
                                 while demo <= end:
                                    print(demo)`,
                    },
                
                do_while_loop:
                    {
                        def:"it is an exit control loop, no explicit definition in python for the do_while_lopp",
                        syntax:`DOES NOT EXISTS`,
                        example:`DOES NOT EXISTS`,
                    },
                
            // }
        // ],
        // user_def:[
            // {
                classes:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
                objects:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
        
            }   

        
    },

    {
        id:2,
        title:"C++",
        lang_info:"C++ is a popular progamming language used to create popular computer programs",
        condition:
            {
                if_cond:
                    {
                        def:"if stnt is used for conditional rendering of data",
                        syntax:`if condition:
                                    statements
                                    ..........
                                     `,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')`,
                    },
                
                if_else:
                    {
                        def:"if-else stnt is used for conditional rendering of data and if true and executes 1st part else 2nd part",
                        syntax:`if condition:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ..........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                else:
                                    print('Not Selected for internship at trickycoders') `,
                    },
                
                if_elseif_else:
                    {
                        def:"if stnt is used for conditional rendering of data , series of condition is used",
                        syntax:`if condition:
                                    statements
                                    ..........
                                elif condition2:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ...........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                elif age>20:
                                    print('Selected for web developemnt internship at trickycoders')
                                else:
                                    print('Not Selected for  internship at trickycoders')`,
                    },
                
            // }
        // ],
        // loops:[
            // {
                for_loop:
                    {
                        def:"for loop runs from start to end and inc default by 1,it is entry control loop",
                        syntax:`for variable in range(start,end):
                                    statement
                                    .........`,
                        example:`for demo in range(1,11):
                                    print(demo)`,
                    },
                
                while_loop:
                    {
                        def:"while loop runs from start to end and inc/dec default by 1,it is entry control loop",
                        syntax:`while demo <= end:
                                    statement
                                    .........`,

                        example:`demo = 1
                                 end = 10
                                 while demo <= end:
                                    print(demo)`,
                    },
                
                do_while_loop:
                    {
                        def:"it is an exit control loop, no explicit definition in python for the do_while_lopp",
                        syntax:`DOES NOT EXISTS`,
                        example:`DOES NOT EXISTS`,
                    },
                
            // }
        // ],
        // user_def:[
            // {
                classes:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
                objects:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
        
            }   

        
    },

    {
        id:3,
        title:"Java",
        lang_info:"Java is a programming language used to develop mobile apps, desktop apps, games and much more",
        condition:
            {
                if_cond:
                    {
                        def:"if stnt is used for conditional rendering of data",
                        syntax:`if condition:
                                    statements
                                    ..........
                                     `,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')`,
                    },
                
                if_else:
                    {
                        def:"if-else stnt is used for conditional rendering of data and if true and executes 1st part else 2nd part",
                        syntax:`if condition:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ..........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                else:
                                    print('Not Selected for internship at trickycoders') `,
                    },
                
                if_elseif_else:
                    {
                        def:"if stnt is used for conditional rendering of data , series of condition is used",
                        syntax:`if condition:
                                    statements
                                    ..........
                                elif condition2:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ...........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                elif age>20:
                                    print('Selected for web developemnt internship at trickycoders')
                                else:
                                    print('Not Selected for  internship at trickycoders')`,
                    },
                
            // }
        // ],
        // loops:[
            // {
                for_loop:
                    {
                        def:"for loop runs from start to end and inc default by 1,it is entry control loop",
                        syntax:`for variable in range(start,end):
                                    statement
                                    .........`,
                        example:`for demo in range(1,11):
                                    print(demo)`,
                    },
                
                while_loop:
                    {
                        def:"while loop runs from start to end and inc/dec default by 1,it is entry control loop",
                        syntax:`while demo <= end:
                                    statement
                                    .........`,

                        example:`demo = 1
                                 end = 10
                                 while demo <= end:
                                    print(demo)`,
                    },
                
                do_while_loop:
                    {
                        def:"it is an exit control loop, no explicit definition in python for the do_while_lopp",
                        syntax:`DOES NOT EXISTS`,
                        example:`DOES NOT EXISTS`,
                    },
                
            // }
        // ],
        // user_def:[
            // {
                classes:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
                objects:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
        
            }   

        
    },

    {
        id:4,
        title:"C#",
        lang_info:"C# (C-Sharp) is a progamming language developed by microsoft that runs on the .NET Framework.",
        condition:
            {
                if_cond:
                    {
                        def:"if stnt is used for conditional rendering of data",
                        syntax:`if condition:
                                    statements
                                    ..........
                                     `,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')`,
                    },
                
                if_else:
                    {
                        def:"if-else stnt is used for conditional rendering of data and if true and executes 1st part else 2nd part",
                        syntax:`if condition:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ..........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                else:
                                    print('Not Selected for internship at trickycoders') `,
                    },
                
                if_elseif_else:
                    {
                        def:"if stnt is used for conditional rendering of data , series of condition is used",
                        syntax:`if condition:
                                    statements
                                    ..........
                                elif condition2:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ...........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                elif age>20:
                                    print('Selected for web developemnt internship at trickycoders')
                                else:
                                    print('Not Selected for  internship at trickycoders')`,
                    },
                
            // }
        // ],
        // loops:[
            // {
                for_loop:
                    {
                        def:"for loop runs from start to end and inc default by 1,it is entry control loop",
                        syntax:`for variable in range(start,end):
                                    statement
                                    .........`,
                        example:`for demo in range(1,11):
                                    print(demo)`,
                    },
                
                while_loop:
                    {
                        def:"while loop runs from start to end and inc/dec default by 1,it is entry control loop",
                        syntax:`while demo <= end:
                                    statement
                                    .........`,

                        example:`demo = 1
                                 end = 10
                                 while demo <= end:
                                    print(demo)`,
                    },
                
                do_while_loop:
                    {
                        def:"it is an exit control loop, no explicit definition in python for the do_while_lopp",
                        syntax:`DOES NOT EXISTS`,
                        example:`DOES NOT EXISTS`,
                    },
                
            // }
        // ],
        // user_def:[
            // {
                classes:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
                objects:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
        
            }   

        
    },

    {
        id:5,
        title:"php",
        lang_info:"PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.",
        condition:
            {
                if_cond:
                    {
                        def:"if stnt is used for conditional rendering of data",
                        syntax:`if condition:
                                    statements
                                    ..........
                                     `,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')`,
                    },
                
                if_else:
                    {
                        def:"if-else stnt is used for conditional rendering of data and if true and executes 1st part else 2nd part",
                        syntax:`if condition:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ..........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                else:
                                    print('Not Selected for internship at trickycoders') `,
                    },
                
                if_elseif_else:
                    {
                        def:"if stnt is used for conditional rendering of data , series of condition is used",
                        syntax:`if condition:
                                    statements
                                    ..........
                                elif condition2:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ...........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                elif age>20:
                                    print('Selected for web developemnt internship at trickycoders')
                                else:
                                    print('Not Selected for  internship at trickycoders')`,
                    },
                
            // }
        // ],
        // loops:[
            // {
                for_loop:
                    {
                        def:"for loop runs from start to end and inc default by 1,it is entry control loop",
                        syntax:`for variable in range(start,end):
                                    statement
                                    .........`,
                        example:`for demo in range(1,11):
                                    print(demo)`,
                    },
                
                while_loop:
                    {
                        def:"while loop runs from start to end and inc/dec default by 1,it is entry control loop",
                        syntax:`while demo <= end:
                                    statement
                                    .........`,

                        example:`demo = 1
                                 end = 10
                                 while demo <= end:
                                    print(demo)`,
                    },
                
                do_while_loop:
                    {
                        def:"it is an exit control loop, no explicit definition in python for the do_while_lopp",
                        syntax:`DOES NOT EXISTS`,
                        example:`DOES NOT EXISTS`,
                    },
                
            // }
        // ],
        // user_def:[
            // {
                classes:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
                objects:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
        
            }   

        
    },

    {
        id:6,
        title:"python",
        lang_info:"Python is general purpose programming language and also used for ML, analysis, visualization",
        condition:
            {
                if_cond:
                    {
                        def:"if stnt is used for conditional rendering of data",
                        syntax:`if condition:
                                    statements
                                    ..........
                                     `,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')`,
                    },
                
                if_else:
                    {
                        def:"if-else stnt is used for conditional rendering of data and if true and executes 1st part else 2nd part",
                        syntax:`if condition:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ..........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                else:
                                    print('Not Selected for internship at trickycoders') `,
                    },
                
                if_elseif_else:
                    {
                        def:"if stnt is used for conditional rendering of data , series of condition is used",
                        syntax:`if condition:
                                    statements
                                    ..........
                                elif condition2:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ...........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                elif age>20:
                                    print('Selected for web developemnt internship at trickycoders')
                                else:
                                    print('Not Selected for  internship at trickycoders')`,
                    },
                
            // }
        // ],
        // loops:[
            // {
                for_loop:
                    {
                        def:"for loop runs from start to end and inc default by 1,it is entry control loop",
                        syntax:`for variable in range(start,end):
                                    statement
                                    .........`,
                        example:`for demo in range(1,11):
                                    print(demo)`,
                    },
                
                while_loop:
                    {
                        def:"while loop runs from start to end and inc/dec default by 1,it is entry control loop",
                        syntax:`while demo <= end:
                                    statement
                                    .........`,

                        example:`demo = 1
                                 end = 10
                                 while demo <= end:
                                    print(demo)`,
                    },
                
                do_while_loop:
                    {
                        def:"it is an exit control loop, no explicit definition in python for the do_while_lopp",
                        syntax:`DOES NOT EXISTS`,
                        example:`DOES NOT EXISTS`,
                    },
                
            // }
        // ],
        // user_def:[
            // {
                classes:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
                objects:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
        
            }   

        
    },

    {
        id:7,
        title:"python",
        lang_info:"Python is general purpose programming language and also used for ML, analysis, visualization",
        condition:
            {
                if_cond:
                    {
                        def:"if stnt is used for conditional rendering of data",
                        syntax:`if condition:
                                    statements
                                    ..........
                                     `,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')`,
                    },
                
                if_else:
                    {
                        def:"if-else stnt is used for conditional rendering of data and if true and executes 1st part else 2nd part",
                        syntax:`if condition:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ..........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                else:
                                    print('Not Selected for internship at trickycoders') `,
                    },
                
                if_elseif_else:
                    {
                        def:"if stnt is used for conditional rendering of data , series of condition is used",
                        syntax:`if condition:
                                    statements
                                    ..........
                                elif condition2:
                                    statements
                                    ..........
                                else:
                                    statements
                                    ...........`,

                        example:`age = 24
                                if age>18:
                                    print('Selected for internship at trickycoders')
                                elif age>20:
                                    print('Selected for web developemnt internship at trickycoders')
                                else:
                                    print('Not Selected for  internship at trickycoders')`,
                    },
                
            // }
        // ],
        // loops:[
            // {
                for_loop:
                    {
                        def:"for loop runs from start to end and inc default by 1,it is entry control loop",
                        syntax:`for variable in range(start,end):
                                    statement
                                    .........`,
                        example:`for demo in range(1,11):
                                    print(demo)`,
                    },
                
                while_loop:
                    {
                        def:"while loop runs from start to end and inc/dec default by 1,it is entry control loop",
                        syntax:`while demo <= end:
                                    statement
                                    .........`,

                        example:`demo = 1
                                 end = 10
                                 while demo <= end:
                                    print(demo)`,
                    },
                
                do_while_loop:
                    {
                        def:"it is an exit control loop, no explicit definition in python for the do_while_lopp",
                        syntax:`DOES NOT EXISTS`,
                        example:`DOES NOT EXISTS`,
                    },
                
            // }
        // ],
        // user_def:[
            // {
                classes:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
                objects:
                    {
                        def:"class are used to group certain similar things and used them together,to access class we require objects",
                        syntax:`class class_name:
                                    def __init__(self):
                                        print("inside class")`,
                        example:`class Python_lang:
                                    def __init__(self):
                                        print("python language)`,
                                
                    },
                
        
            }   

        
    },

]
















function on_page_load(){

    document.getElementById("main-content-lang").innerHTML = "WELCOME TO TRICKYCODERS WORKSPACE ,'LEARN,CODE,DEBUG WITH US.....' ";
    // document.getElementById("list-0").style.backgroundColor="black";
    // document.getElementById("list-0").style.color="white";

}
function selectLanguage(lang_id){
    clear_language()

    id = Number(lang_id.slice(5))
    console.log(id)
    language[id] = 1

    document.getElementById("main-content-lang").innerHTML = obj[id].lang_info;
    document.getElementById(`list-${id}`).style.backgroundColor="black";
    document.getElementById(`list-${id}`).style.color="white";
    

}

function clear_language(){
    
        document.getElementById(`list-0`).style.backgroundColor="";
        document.getElementById(`list-0`).style.color="";

        document.getElementById(`list-1`).style.backgroundColor="";
        document.getElementById(`list-1`).style.color="";

        document.getElementById(`list-2`).style.backgroundColor="";
        document.getElementById(`list-2`).style.color="";

        document.getElementById(`list-3`).style.backgroundColor="";
        document.getElementById(`list-3`).style.color="";

        document.getElementById(`list-4`).style.backgroundColor="";
        document.getElementById(`list-4`).style.color="";

        document.getElementById(`list-5`).style.backgroundColor="";
        document.getElementById(`list-5`).style.color="";

        for(let i=0;i<8;++i){
            language[i] = 0;
        }

        clear_section();
    

}

function selectDefinition(){
    let flag = 0;
    let cond = 0;
    getNameArr = ["if_cond","if_else","if_elseif_else","for_loop","while_loop","do_while_loop","classes","objects"]
    
    for(let i=0;i<8;++i){
        if(arr_choice[i]==1){
            flag = 1;
            cond = i;
            break
        }
    }

    if(flag==1){
        let temp = getNameArr[cond]
        console.log(temp)
        // console.log(typeof(temp))
        

        switch(temp){
            case 'if_cond':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.if_cond.def;
                break
    
            case 'if_else':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.if_else.def;
                break
            
            case 'if_elseif_else':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.if_elseif_else.def;
                break    
    
            case 'for_loop':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.for_loop.def;
                break
        
            case 'while_loop':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.while_loop.def;
                break
                
            case 'do_while_loop':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.do_while_loop.def;
                break        
            
            case 'classes':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.classes.def;
                break
        
            case 'objects':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.objects.def;
                break
                
            default:
                break
    
        }
    
    }else{
        document.getElementById('main-content-lang').innerHTML ="PLEASE SELECT ONE OF THE CONDITION FROM BELOW TO SHOW DEFINITION"
    }

}


function selectSyntax(){
    let flag = 0;
    let cond = 0;
    getNameArr = ["if_cond","if_else","if_elseif_else","for_loop","while_loop","do_while_loop","classes","objects"]
    
    for(let i=0;i<8;++i){
        if(arr_choice[i]==1){
            flag = 1;
            cond = i;
            break
        }
    }

    if(flag==1){
        let temp = getNameArr[cond]
        console.log(temp)
        // console.log(typeof(temp))
        

        switch(temp){
            case 'if_cond':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.if_cond.syntax;
                break
    
            case 'if_else':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.if_else.syntax;
                break
            
            case 'if_elseif_else':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.if_elseif_else.syntax;
                break    
    
            case 'for_loop':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.for_loop.syntax;
                break
        
            case 'while_loop':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.while_loop.syntax;
                break
                
            case 'do_while_loop':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.do_while_loop.syntax;
                break        
            
            case 'classes':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.classes.syntax;
                break
        
            case 'objects':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.objects.syntax;
                break
                
            default:
                break
    
        }
    
    }else{
        document.getElementById('main-content-lang').innerHTML ="PLEASE SELECT ONE OF THE CONDITION FROM BELOW TO SHOW SYNTAX"
    }

}


function selectExample(){
    let flag = 0;
    let cond = 0;
    getNameArr = ["if_cond","if_else","if_elseif_else","for_loop","while_loop","do_while_loop","classes","objects"]
    
    for(let i=0;i<8;++i){
        if(arr_choice[i]==1){
            flag = 1;
            cond = i;
            break
        }
    }

    if(flag==1){
        let temp = getNameArr[cond]
        console.log(temp)
        // console.log(typeof(temp))
        

        switch(temp){
            case 'if_cond':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.if_cond.example;
                break
    
            case 'if_else':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.if_else.example;
                break
            
            case 'if_elseif_else':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.if_elseif_else.example;
                break    
    
            case 'for_loop':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.for_loop.example;
                break
        
            case 'while_loop':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.while_loop.example;
                break
                
            case 'do_while_loop':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.do_while_loop.example;
                break        
            
            case 'classes':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.classes.example;
                break
        
            case 'objects':
                document.getElementById('main-content-lang').innerHTML = obj[id].condition.objects.example;
                break
                
            default:
                break
    
        }
    
    }else{
        document.getElementById('main-content-lang').innerHTML ="PLEASE SELECT ONE OF THE CONDITION FROM BELOW TO SHOW EXAMPLE"
    }

}

function clear_section(){

    document.getElementById('main-content-lang').innerHTML = "";

    document.getElementById("if_condition").style.backgroundColor="";
    document.getElementById("if_condition").style.color="";

    document.getElementById("if_else_condition").style.backgroundColor="";
    document.getElementById("if_else_condition").style.color="";

    document.getElementById("if_elseif_else_condition").style.backgroundColor="";
    document.getElementById("if_elseif_else_condition").style.color="";

    document.getElementById("for_loop").style.backgroundColor="";
    document.getElementById("for_loop").style.color="";

    document.getElementById("while_loop").style.backgroundColor="";
    document.getElementById("while_loop").style.color="";

    document.getElementById("do_while_loop").style.backgroundColor="";
    document.getElementById("do_while_loop").style.color="";

    document.getElementById("classes").style.backgroundColor="";
    document.getElementById("classes").style.color="";

    document.getElementById("objects").style.backgroundColor="";
    document.getElementById("objects").style.color="";

    for(let i=0;i<8;++i){
        arr_choice[i] = 0;
    }
}


function condition(cond_selected){
    clear_section();
    document.getElementById(`${cond_selected}`).style.backgroundColor="black";
    document.getElementById(`${cond_selected}`).style.color="white";
    // document.getElementById(`main-content-lang`).innerHTML = obj[id].lang_info;

    switch(cond_selected){
        case 'if_condition':
            arr_choice[0] = 1
            document.getElementById(`main-content-lang`).innerHTML = "WELCOME TO IF CONDITION";
            // console.log(cond_selected)
            break

        case 'if_else_condition':
            arr_choice[1] = 1
            document.getElementById(`main-content-lang`).innerHTML = "WELCOME TO IF-ELSE CONDITION";
            break
        
        case 'if_elseif_else_condition':
            arr_choice[2] = 1
            document.getElementById(`main-content-lang`).innerHTML = "WELCOME TO IF-ELSEIF-ELSE CONDITION";
            break    

        case 'for_loop':
            arr_choice[3] = 1
            document.getElementById(`main-content-lang`).innerHTML = "WELCOME TO FOR LOOP CONDITION";
            break
    
        case 'while_loop':
            arr_choice[4] = 1
            document.getElementById(`main-content-lang`).innerHTML = "WELCOME TO WHILE LOOP CONDITION";
            break
            
        case 'do_while_loop':
            arr_choice[5] = 1
            document.getElementById(`main-content-lang`).innerHTML = "WELCOME TO DO-WHILE-LOOP CONDITION";
            break        
        
        case 'classes':
            arr_choice[6] = 1
            document.getElementById(`main-content-lang`).innerHTML = "WELCOME TO CLASSES CONDITION";
            break
    
        case 'objects':
            arr_choice[7] = 1
            document.getElementById(`main-content-lang`).innerHTML = "WELCOME TO OBJECTS CONDITION";
            break
            
        default:
            break

    }



}