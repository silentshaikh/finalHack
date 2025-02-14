export const orderList = {
    name:'orderlist',
    title:'Order List',
    type:'document',
    fields:[
        {
            name:'user',
            title:'User',
            type:'reference',
            to:[{type:'userlist'}]
        },
        {
            name:'orderitems',
            title:'Order Items',
            type:'array',
            of:[{type:'object', fields:[
                {
                    name:'productid',
                    title:'Product Id',
                    type:'number',
                },
                {
                    name:'productname',
                    title:'Product Name',
                    type:'string',
                },
                {
                    name:'productimage',
                    title:'Product Image',
                    type:'image',
                },
                {
                    name:'productsize',
                    title:'Product Size',
                    type:'string',
                },
                {
                    name:'productcolor',
                    title:'Product Color',
                    type:'string',
                },
                {
                    name:'price',
                    title:'Price',
                    type:'number'
                },
                {
                    name:'productcategory',
                    title:'Product Category',
                    type:'string',
                },
                {
                    name:'productquantity',
                    title:'Product Quantity',
                    type:'number',
                },
                {
                    name:'sku',
                    title:'SKU',
                    type:'string'
                },
                {
                    name:'currency',
                    title:'Currency',
                    type:'string'
                },
                {
                    name:'orderdate',
                    title:'Order Date',
                    type:'date',
                    initialValue: () => new Date().getTime(),
                }
            ]}]
        }
    ]
}