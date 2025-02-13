export const userList = {
    name:'userlist',
    title:'User List',
    type:'document',
    fields:[
        {
            name:'userid',
            title:'User Id',
            type:'string',
            unique:true,
        },
        {
            name:'username',
            title:'User Name',
            type:'string'
        },
        {
            name:'useremail',
            title:"User Email",
            type:'string',
        },
        {
            name:'orderhistory',
            title:'Order History',
            type:'array',
            of:[{type:'reference',to:[{type:'orderlist'}]}]
        }
    ]
};